'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollBackground } from './ScrollBackgroundContext';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useScrollBackground();

  const isDark = currentTheme.textColor === 'white';

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Personas', href: '#personas' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b"
      style={{
        backgroundColor: currentTheme.navBg,
        borderColor: currentTheme.navBorder,
      }}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 lg:px-8">
        {/* Brand Logo Lockup */}
        <a href="#" className="flex items-center text-decoration-none group" aria-label="Zazo Home">
          <Logo
            height={32}
            className={`transition-colors duration-700 group-hover:opacity-85 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[14px] leading-5 tracking-[-0.28px] transition-colors duration-700 font-normal ${
                isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#waitlist"
            className={`btn-pill transition-all duration-300 ${
              isDark
                ? 'border border-white/20 text-white hover:bg-white/10'
                : 'btn-secondary-green'
            }`}
          >
            Sign up
          </a>
          <a
            href="#waitlist"
            className={`btn-pill transition-all duration-300 ${
              isDark
                ? 'bg-[#6CFF94] text-black font-semibold hover:bg-[#5CE883]'
                : 'btn-primary'
            }`}
          >
            Join the Waitlist
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 md:hidden"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-black/10 bg-[#6CFF94] px-5 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[18px] tracking-[-0.54px] text-black font-normal py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-black/10">
                <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill btn-secondary-green w-full text-center"
                >
                  Sign up
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill btn-primary w-full text-center"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
