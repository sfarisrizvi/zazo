'use client';

import Link from 'next/link';
import Logo from './Logo';

interface InternalNavbarProps {
  activeTab?: string;
}

export default function InternalNavbar({ activeTab }: InternalNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/[0.06] transition-colors">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group select-none" aria-label="Zazo Home">
          <Logo height={36} className="text-black transition-opacity group-hover:opacity-85" />
        </Link>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#rates"
            className="hidden sm:inline-block text-[13px] font-medium text-neutral-600 hover:text-black transition-colors px-2 sm:px-3 py-1.5"
          >
            Live Rates
          </Link>
          <a
            href="#waitlist"
            className="btn-pill btn-primary text-[13px] font-medium h-[40px] sm:h-[42px] px-4 sm:px-5 shadow-sm inline-flex items-center justify-center"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
