'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemeType = 'green' | 'black' | 'white';

export interface ThemeState {
  theme: ThemeType;
  bg: string;
  textColor: 'black' | 'white';
  navBg: string;
  navBorder: string;
  navText: 'black' | 'white';
}

export const themeConfigs: Record<ThemeType, ThemeState> = {
  green: {
    theme: 'green',
    bg: '#6CFF94',
    textColor: 'black',
    navBg: 'rgba(108, 255, 148, 0.92)',
    navBorder: 'transparent',
    navText: 'black',
  },
  black: {
    theme: 'black',
    bg: '#000000',
    textColor: 'white',
    navBg: 'rgba(0, 0, 0, 0.92)',
    navBorder: 'rgba(255, 255, 255, 0.1)',
    navText: 'white',
  },
  white: {
    theme: 'white',
    bg: '#FFFFFF',
    textColor: 'black',
    navBg: 'rgba(255, 255, 255, 0.9)',
    navBorder: 'rgba(0, 0, 0, 0.08)',
    navText: 'black',
  },
};

const ScrollBackgroundContext = createContext<{
  currentTheme: ThemeState;
  setTheme: (theme: ThemeType) => void;
}>({
  currentTheme: themeConfigs.green,
  setTheme: () => {},
});

export function useScrollBackground() {
  return useContext(ScrollBackgroundContext);
}

export default function ScrollBackgroundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>(themeConfigs.green);

  const applyTheme = useCallback((themeName: ThemeType) => {
    setCurrentTheme((prev) => {
      if (prev.theme !== themeName) {
        const next = themeConfigs[themeName];
        if (typeof document !== 'undefined') {
          document.body.style.backgroundColor = next.bg;
          document.documentElement.style.backgroundColor = next.bg;
        }
        return next;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const scrollY = window.scrollY;
      const isDesktop = window.innerWidth >= 1024;
      const slideHeight = window.innerHeight - 74;
      const showcaseMaxY = slideHeight * 6.4;

      // 1. On desktop, within Hero and the 6 pinned chapters (HeroAndShowcase):
      // Calculate active slide mathematically so background matches text 100% deterministically
      if (isDesktop && scrollY <= showcaseMaxY) {
        const chapterThemes: ThemeType[] = [
          'green', // Hero
          'black', // 01 Receive USD
          'white', // 02 Convert Clarity
          'green', // 03 Spend QR
          'black', // 04 Send PKR
          'white', // 05 Activity Rewards
          'black', // 06 Zazo Card
        ];
        const slideIdx = Math.max(0, Math.min(6, Math.round(scrollY / slideHeight)));
        applyTheme(chapterThemes[slideIdx]);
        ticking = false;
        return;
      }

      // 2. Beyond HeroAndShowcase (or on mobile): find the active section that encompasses the trigger line
      const triggerY = window.innerHeight * 0.48;
      const allSections = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-bg]'));
      const activeSections = allSections.filter((el) => {
        // Exclude desktop chapters if past showcase or on mobile
        if (isDesktop && el.closest('#hero-and-showcase')) return false;
        if (!isDesktop && el.closest('.lg\\:block')) return false;
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && (el.offsetWidth > 0 || el.offsetHeight > 0);
      });

      let matchedTheme: ThemeType = 'green';
      for (const section of activeSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          const themeAttr = section.getAttribute('data-theme-bg') as ThemeType;
          if (themeAttr && themeConfigs[themeAttr]) {
            matchedTheme = themeAttr;
            break;
          }
        }
      }

      applyTheme(matchedTheme);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [applyTheme]);

  return (
    <ScrollBackgroundContext.Provider value={{ currentTheme, setTheme: applyTheme }}>
      {/* 
        The Fixed Background Canvas:
        Stays completely stationary in the viewport at all times.
        Smoothly shifts color (green -> black -> green -> white -> black)
        via CSS transitions, exactly like switching dark/light mode!
      */}
      <div
        className="fixed inset-0 pointer-events-none -z-50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ backgroundColor: currentTheme.bg }}
      />
      {children}
    </ScrollBackgroundContext.Provider>
  );
}
