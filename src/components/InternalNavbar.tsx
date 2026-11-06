'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface InternalNavbarProps {
  activeTab?: 'freelancers' | 'remittances' | 'business' | 'local' | 'merchants' | 'connect' | 'pricing';
}

export default function InternalNavbar({ activeTab }: InternalNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Freelancers', href: '/freelancers', key: 'freelancers' },
    { label: 'Remittances', href: '/remittances', key: 'remittances' },
    { label: 'Business', href: '/business', key: 'business' },
    { label: 'Local', href: '/local', key: 'local' },
    { label: 'Merchants', href: '/merchants', key: 'merchants' },
    { label: 'Pricing', href: '/pricing', key: 'pricing' },
    { label: 'API', href: '/connect', key: 'connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/[0.06] transition-colors">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group select-none" aria-label="Zazo Home">
          <Logo height={32} className="text-black transition-opacity group-hover:opacity-85" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-black/5'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#rates"
            className="text-[13px] font-medium text-neutral-600 hover:text-black transition-colors px-3 py-1.5"
          >
            Live Rates
          </Link>
          <a
            href="#waitlist"
            className="btn-pill btn-primary text-[13px] font-medium h-[42px] px-5 shadow-sm"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#waitlist"
            className="btn-pill btn-primary text-[12px] font-medium h-[38px] px-4 sm:hidden"
          >
            Join Waitlist
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-black/5 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-black/10 px-6 py-6 flex flex-col gap-3 shadow-xl">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2">
            Accounts & Products
          </span>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                  activeTab === item.key
                    ? 'bg-black text-white'
                    : 'bg-black/[0.03] text-neutral-800 hover:bg-black/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-black/5 flex flex-col gap-2">
            <Link
              href="/#rates"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium text-neutral-700 px-2 py-1.5 flex items-center justify-between"
            >
              <span>Check Live Rates</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

