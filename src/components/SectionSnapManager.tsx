'use client';

import { useEffect, useRef } from 'react';

/**
 * SectionSnapManager
 * Provides active window section snapping on wheel, keyboard, and touch swipe.
 * Eliminates free-scroll drift so sections snap cleanly into full view on the window.
 */
export default function SectionSnapManager() {
  const isSnappingRef = useRef(false);
  const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const NAVBAR_HEIGHT = 74;

    // Only snap for Hero and the 6 Showcase / Cards sections.
    // Past the cards section (zazo-card / mobile-zazo-card), free scroll is strictly enabled.
    const SHOWCASE_SNAP_IDS = new Set([
      'hero',
      'receive-usd',
      'convert-clarity',
      'spend-qr',
      'send-pkr',
      'activity-rewards',
      'zazo-card',
      'mobile-hero',
      'mobile-receive-usd',
      'mobile-convert-clarity',
      'mobile-spend-qr',
      'mobile-send-pkr',
      'mobile-activity-rewards',
      'mobile-zazo-card',
    ]);

    const getSnapElements = (): HTMLElement[] => {
      const all = Array.from(document.querySelectorAll<HTMLElement>('[data-snap-point]'));
      const isMobile = window.innerWidth < 1024;

      return all.filter((el) => {
        const snapId = el.getAttribute('data-snap-id') || '';
        if (!SHOWCASE_SNAP_IDS.has(snapId)) return false;

        const style = window.getComputedStyle(el);
        const isVisible =
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          (el.offsetWidth > 0 || el.offsetHeight > 0);

        if (!isVisible) return false;

        if (isMobile) {
          return snapId === 'mobile-hero' || snapId.startsWith('mobile-');
        } else {
          return snapId === 'hero' || !snapId.startsWith('mobile-');
        }
      });
    };

    const getTargetYForElement = (el: HTMLElement): number => {
      const snapId = el.getAttribute('data-snap-id') || '';
      const currentScrollY = window.scrollY;
      const rect = el.getBoundingClientRect();

      // Hero always aligns to top of page (0)
      if (snapId === 'hero' || snapId === 'mobile-hero') {
        return 0;
      }

      // Sections align their top edge right below the 74px navbar
      return Math.max(0, Math.round(currentScrollY + rect.top - NAVBAR_HEIGHT));
    };

    const smoothScrollTo = (y: number, onComplete?: () => void) => {
      isSnappingRef.current = true;
      window.scrollTo({
        top: Math.max(0, y),
        behavior: 'smooth',
      });

      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = setTimeout(() => {
        isSnappingRef.current = false;
        if (onComplete) onComplete();
      }, 650);
    };

    // Wheel event handler (trackpad & mouse wheel)
    const handleWheel = (e: WheelEvent) => {
      // Do not intercept if user is pinch-zooming
      if (e.ctrlKey) return;

      // Ignore micro-jitter
      if (Math.abs(e.deltaY) < 14) return;

      // If already snapping to a section, absorb wheel momentum so user doesn't fly past
      if (isSnappingRef.current) {
        e.preventDefault();
        return;
      }

      const elements = getSnapElements();
      if (elements.length === 0) return;

      const currentY = window.scrollY;
      const snapPositions = elements.map((el) => getTargetYForElement(el));
      const maxSnapY = Math.max(...snapPositions);

      // Past or at the end of the cards section scrolling DOWN:
      // Free scroll for all remaining sections on the site!
      if (currentY >= maxSnapY - 15 && e.deltaY > 0) {
        return;
      }

      // If deep in the free scroll area scrolling UP:
      // Allow free scroll until the user scrolls back into the cards section
      if (currentY > maxSnapY + 40 && e.deltaY < 0) {
        return;
      }

      // Find current active element index
      let currentIdx = 0;
      let minDistance = Infinity;
      snapPositions.forEach((pos, idx) => {
        const dist = Math.abs(currentY - pos);
        if (dist < minDistance) {
          minDistance = dist;
          currentIdx = idx;
        }
      });

      if (e.deltaY > 0) {
        // Scrolling DOWN
        const currentEl = elements[currentIdx];
        const rect = currentEl ? currentEl.getBoundingClientRect() : null;
        const availableHeight = window.innerHeight - NAVBAR_HEIGHT;

        // If current element is tall and user hasn't scrolled to its bottom yet
        if (rect && rect.height > availableHeight + 80 && rect.bottom > window.innerHeight + 60) {
          e.preventDefault();
          const nextY = Math.min(
            currentY + (rect.bottom - window.innerHeight),
            currentY + Math.round(availableHeight * 0.75)
          );
          smoothScrollTo(nextY);
          return;
        }

        // Find the next snap position ahead of current scrollY
        const nextIdx = snapPositions.findIndex((pos) => pos > currentY + 15);
        if (nextIdx !== -1) {
          e.preventDefault();
          smoothScrollTo(snapPositions[nextIdx]);
        }
      } else {
        // Scrolling UP
        const currentEl = elements[currentIdx];
        const rect = currentEl ? currentEl.getBoundingClientRect() : null;

        // If current element is tall and user is not at top of it
        if (rect && rect.top < NAVBAR_HEIGHT - 60) {
          e.preventDefault();
          const prevY = Math.max(
            snapPositions[currentIdx],
            currentY + (rect.top - NAVBAR_HEIGHT)
          );
          smoothScrollTo(prevY);
          return;
        }

        // Find the previous snap position behind current scrollY
        let prevIdx = -1;
        for (let i = snapPositions.length - 1; i >= 0; i--) {
          if (snapPositions[i] < currentY - 15) {
            prevIdx = i;
            break;
          }
        }
        if (prevIdx !== -1) {
          e.preventDefault();
          smoothScrollTo(snapPositions[prevIdx]);
        }
      }
    };

    // Keyboard navigation (ArrowDown / ArrowUp / PageDown / PageUp / Space)
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

      const isDown = ['ArrowDown', 'PageDown', ' '].includes(e.key);
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key);

      if (!isDown && !isUp) return;

      const elements = getSnapElements();
      if (elements.length === 0) return;

      const currentY = window.scrollY;
      const snapPositions = elements.map((el) => getTargetYForElement(el));

      const maxSnapY = Math.max(...snapPositions);

      if (isDown) {
        if (currentY >= maxSnapY - 15) {
          return;
        }
        const nextIdx = snapPositions.findIndex((pos) => pos > currentY + 15);
        if (nextIdx !== -1) {
          e.preventDefault();
          smoothScrollTo(snapPositions[nextIdx]);
        }
      } else if (isUp) {
        if (currentY > maxSnapY + 40) {
          return;
        }
        let prevIdx = -1;
        for (let i = snapPositions.length - 1; i >= 0; i--) {
          if (snapPositions[i] < currentY - 15) {
            prevIdx = i;
            break;
          }
        }
        if (prevIdx !== -1) {
          e.preventDefault();
          smoothScrollTo(snapPositions[prevIdx]);
        }
      }
    };

    // Touch swipe support on touch devices
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      // Require meaningful swipe (> 50px)
      if (Math.abs(deltaY) < 50) return;
      if (isSnappingRef.current) return;

      const elements = getSnapElements();
      if (elements.length === 0) return;

      const currentY = window.scrollY;
      const snapPositions = elements.map((el) => getTargetYForElement(el));
      const maxSnapY = Math.max(...snapPositions);

      // Past the cards section: pure native free scroll, no snapping!
      if (currentY > maxSnapY + 20 && deltaY > 0) {
        return;
      }
      if (currentY > maxSnapY + 120 && deltaY < 0) {
        return;
      }

      if (deltaY > 0) {
        // Swiping UP (scrolls DOWN)
        const nextIdx = snapPositions.findIndex((pos) => pos > currentY + 15);
        if (nextIdx !== -1) {
          smoothScrollTo(snapPositions[nextIdx]);
        }
      } else {
        // Swiping DOWN (scrolls UP)
        let prevIdx = -1;
        for (let i = snapPositions.length - 1; i >= 0; i--) {
          if (snapPositions[i] < currentY - 15) {
            prevIdx = i;
            break;
          }
        }
        if (prevIdx !== -1) {
          smoothScrollTo(snapPositions[prevIdx]);
        }
      }
    };

    // Scrollbar drag debounce check (ensures clean settling after manual scrollbar drag)
    let scrollEndTimer: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (isSnappingRef.current) return;

      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        if (isSnappingRef.current) return;
        const currentY = window.scrollY;
        const elements = getSnapElements();
        if (elements.length === 0) return;

        const snapPositions = elements.map((el) => getTargetYForElement(el));
        const maxSnapY = Math.max(...snapPositions);

        // Outside cards section: absolutely no snap settling!
        if (currentY > maxSnapY + 20) {
          return;
        }

        let closestIdx = 0;
        let minDist = Infinity;
        snapPositions.forEach((pos, idx) => {
          const dist = Math.abs(currentY - pos);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        });

        // Only snap if we are resting slightly off (between 25px and 70% of viewport)
        if (minDist > 25 && minDist < window.innerHeight * 0.7) {
          smoothScrollTo(snapPositions[closestIdx]);
        }
      }, 300);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
    };
  }, []);

  return null;
}
