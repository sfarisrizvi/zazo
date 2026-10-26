'use client';

import { useEffect, useRef } from 'react';

/**
 * SectionSnapManager
 * Provides ultra-smooth, non-blocking section navigation.
 * Never hijacks or cancels trackpad/mouse wheel events with e.preventDefault().
 * Allows native browser momentum scrolling while supporting keyboard shortcuts (ArrowUp/ArrowDown)
 * and custom 'zazo-smooth-scroll' navigation events.
 */
export default function SectionSnapManager() {
  const isScrollingRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const NAVBAR_HEIGHT = 74;

    const getSnapElements = (): HTMLElement[] => {
      const all = Array.from(document.querySelectorAll<HTMLElement>('[data-snap-point]'));
      const isMobile = window.innerWidth < 1024;

      return all.filter((el) => {
        const snapId = el.getAttribute('data-snap-id') || '';
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

    const getTargetY = (el: HTMLElement): number => {
      const snapId = el.getAttribute('data-snap-id') || '';
      if (snapId === 'hero' || snapId === 'mobile-hero') return 0;
      const rect = el.getBoundingClientRect();
      return Math.max(0, Math.round(window.scrollY + rect.top - NAVBAR_HEIGHT));
    };

    const smoothScrollToY = (targetY: number) => {
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;
      window.scrollTo({
        top: Math.max(0, Math.round(targetY)),
        behavior: 'smooth',
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 550);
    };

    // Keyboard navigation (ArrowDown / ArrowUp / PageDown / PageUp)
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

      const isDown = ['ArrowDown', 'PageDown'].includes(e.key);
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key);

      if (!isDown && !isUp) return;

      const elements = getSnapElements();
      if (elements.length === 0) return;

      const currentY = window.scrollY;
      const snapPositions = elements.map((el) => getTargetY(el));

      if (isDown) {
        const next = snapPositions.find((y) => y > currentY + 30);
        if (next !== undefined) {
          e.preventDefault();
          smoothScrollToY(next);
        }
      } else if (isUp) {
        let prev = -1;
        for (let i = snapPositions.length - 1; i >= 0; i--) {
          if (snapPositions[i] < currentY - 30) {
            prev = snapPositions[i];
            break;
          }
        }
        if (prev !== -1) {
          e.preventDefault();
          smoothScrollToY(prev);
        }
      }
    };

    // Custom smooth scroll event handler (e.g. from bottom chapter tracker or buttons)
    const handleCustomSmoothScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetY: number }>;
      if (typeof customEvent.detail?.targetY === 'number') {
        smoothScrollToY(customEvent.detail.targetY);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('zazo-smooth-scroll', handleCustomSmoothScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('zazo-smooth-scroll', handleCustomSmoothScroll);
    };
  }, []);

  return null;
}
