'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollBackground } from './ScrollBackgroundContext';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { label: 'Receive USD', href: '#receive-usd' },
    { label: 'Convert', href: '#convert-clarity' },
    { label: 'QR Pay', href: '#spend-qr' },
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Zazo Card', href: '#zazo-card' },
  ];

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

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] xl:text-[14px] leading-5 tracking-[-0.28px] transition-colors duration-300 font-normal ${
                isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#footer"
            className={`btn-pill text-[12px] font-medium transition-all duration-300 ${
              isDark
                ? 'bg-[#6CFF94] text-black hover:bg-[#5CE883]'
                : 'btn-primary'
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 lg:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="7" x2="20" y2="7"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="17" x2="20" y2="17"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-black/10 bg-[#6CFF94] px-5 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[17px] tracking-[-0.5px] text-black font-normal py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-black/10">
                <a
                  href="#footer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill btn-primary w-full text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
