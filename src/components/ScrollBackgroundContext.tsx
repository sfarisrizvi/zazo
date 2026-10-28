'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemeType = 'green' | 'black' | 'white' | 'magenta' | 'yellow' | 'blue';

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
  magenta: {
    theme: 'magenta',
    bg: '#DB1584',
    textColor: 'white',
    navBg: 'rgba(219, 21, 132, 0.94)',
    navBorder: 'rgba(255, 255, 255, 0.15)',
    navText: 'white',
  },
  yellow: {
    theme: 'yellow',
    bg: '#FEDD42',
    textColor: 'black',
    navBg: 'rgba(254, 221, 66, 0.94)',
    navBorder: 'rgba(0, 0, 0, 0.1)',
    navText: 'black',
  },
  blue: {
    theme: 'blue',
    bg: '#ADE3FD',
    textColor: 'black',
    navBg: 'rgba(173, 227, 253, 0.94)',
    navBorder: 'rgba(0, 0, 0, 0.1)',
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
        const next = themeConfigs[themeName] || themeConfigs.green;
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

      // If at top / hero, enforce green theme
      if (scrollY < 100) {
        applyTheme('green');
        ticking = false;
        return;
      }

      // Check if #hero-and-showcase is still present in viewport (Slide 0 through 6)
      const heroContainer = document.getElementById('hero-and-showcase');
      const heroRect = heroContainer ? heroContainer.getBoundingClientRect() : null;
      if (heroRect && heroRect.bottom > 85) {
        // Hero & Showcase is still on screen (Slide 0 to 6).
        // HeroAndShowcase handles its own active slide theme (and keeps black on Slide 6 until it exits).
        ticking = false;
        return;
      }

      // Check sticky stacking cards in #use-cases first (in reverse order, highest z-index / latest card first)
      const useCaseCards = Array.from(document.querySelectorAll<HTMLElement>('#use-cases [data-theme-bg]'));
      let matchedTheme: ThemeType | null = null;

      for (let i = useCaseCards.length - 1; i >= 0; i--) {
        const card = useCaseCards[i];
        if (card.offsetWidth === 0 && card.offsetHeight === 0) continue;
        const rect = card.getBoundingClientRect();
        // A card is active when it has reached the sticky navbar position (top <= 85)
        // and its bottom hasn't scrolled off (bottom > 85)
        if (rect.top <= 85 && rect.bottom > 85) {
          const themeAttr = card.getAttribute('data-theme-bg') as ThemeType;
          if (themeAttr && themeConfigs[themeAttr]) {
            matchedTheme = themeAttr;
            break;
          }
        }
      }

      // If no use-case card is currently active (e.g. scrolled past #use-cases into ParallelShowcase or Footer)
      if (!matchedTheme) {
        const triggerY = window.innerHeight * 0.45;
        const allSections = Array.from(document.querySelectorAll<HTMLElement>('[data-theme-bg]'));

        for (const section of allSections) {
          if (section.offsetWidth === 0 && section.offsetHeight === 0) continue;
          if (section.closest('#hero-and-showcase')) continue;
          if (section.closest('#use-cases')) continue; // Already evaluated sticky cards above

          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            const themeAttr = section.getAttribute('data-theme-bg') as ThemeType;
            if (themeAttr && themeConfigs[themeAttr]) {
              matchedTheme = themeAttr;
              break;
            }
          }
        }
      }

      if (matchedTheme) {
        applyTheme(matchedTheme);
      }
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
      <div
        className="fixed inset-0 pointer-events-none -z-50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ backgroundColor: currentTheme.bg }}
      />
      {children}
    </ScrollBackgroundContext.Provider>
  );
}
