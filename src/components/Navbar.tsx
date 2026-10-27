'use client';

import { useState, useEffect } from 'react';
import { useScrollBackground } from './ScrollBackgroundContext';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentTheme } = useScrollBackground();

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar on hero section; show as soon as user scrolls past hero
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = currentTheme.textColor === 'white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
        isScrolled
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{
        backgroundColor: currentTheme.navBg,
        borderColor: currentTheme.navBorder,
      }}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center text-decoration-none group" aria-label="Zazo Home">
          <Logo
            height={32}
            className={`transition-colors duration-500 group-hover:opacity-85 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          />
        </a>

        {/* Action CTA */}
        <div className="flex items-center">
          <a
            href="#waitlist"
            className={`btn-pill text-[13px] font-medium transition-all duration-300 ${
              isDark
                ? 'bg-[#6CFF94] text-black hover:bg-[#5CE883]'
                : 'btn-primary'
            }`}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
