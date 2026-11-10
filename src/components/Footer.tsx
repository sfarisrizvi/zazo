'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLinkActive = (href: string) => {
    if (!mounted || !pathname) return false;
    const baseHref = href.split('#')[0].replace(/\/$/, '') || '/';
    const currentPath = pathname.replace(/\/$/, '') || '/';
    return currentPath === baseHref;
  };

  const modalContents: Record<
    string,
    { title: string; headline: string; content: string; footnote?: string; cta?: string }
  > = {
    'Global Receiving': {
      title: 'Global Receiving',
      headline: 'Get paid from anywhere.',
      content:
        'Receive USD, EUR, GBP, AED, and PKR from supported international platforms — Upwork, Deel, Amazon, eBay, Etsy and more.\n\nHow it works: connect your source → funds arrive in your Zazo wallet → convert to PKR at guaranteed live rates.',
      cta: 'Join Waitlist · Check Live Rate',
    },
    'Local Wallet': {
      title: 'Local Wallet',
      headline: 'Money that stays and spends.',
      content:
        'Your PKR sits in your Zazo wallet — pay by QR, send to friends, save on eligible purchases.\n\nNo bank queues. No withdrawal fees to spend.',
      cta: 'Join Waitlist',
    },
    'QR Payments': {
      title: 'QR Payments',
      headline: 'Scan. Pay. Save.',
      content:
        'Pay at supported merchants with a QR scan. Earn dynamic discounts, up to 10%.*\n\nFor merchants: free QR standee, no MDR on eligible payments.**',
      footnote: '*Terms apply. **Subject to merchant eligibility and agreement.',
      cta: 'Get Started as a Merchant',
    },
    'Send Money': {
      title: 'Send Money',
      headline: 'Send in seconds.',
      content: 'Send money to other Zazo users — instant, in-app, no bank forms, 24/7 Raast domestic transfers.',
      cta: 'Join Waitlist',
    },
    'Terms': {
      title: 'Terms of Service',
      headline: 'Clear, transparent terms.',
      content:
        'Zazo account usage, wallet balances, currency conversions, and payment rules are governed by our platform terms and partner banking agreements.\n\nZero hidden spreads. Real-time rate locks shown before every transaction confirmation.',
      cta: 'Close',
    },
    'Privacy': {
      title: 'Privacy Policy',
      headline: 'Your data stays yours.',
      content:
        "We do not sell your personal or financial data to third parties. All personal information, KYC records, and transactions are encrypted with bank-grade AES-256 protocols.",
      cta: 'Close',
    },
    'Regulatory Disclosures': {
      title: 'Regulatory Disclosures',
      headline: 'Regulated banking infrastructure.',
      content:
        'Zazo is a financial technology company, not a bank. Wallet services, customer deposits, and payment processing are provided through licensed bank and financial partners in Pakistan and international jurisdictions.',
      footnote: 'Subject to local regulatory licensing and partner compliance guidelines.',
      cta: 'Close',
    },
    'Zazo Connect': {
      title: 'ZAZO CONNECT — B2B PLATFORM',
      headline: 'Pakistan payments. One integration.',
      content:
        'Give your users a Pakistan receiving and spending experience through Zazo Connect.\n\nFor fintechs · Neobanks · Remittance apps · Marketplaces · Payment platforms\n\nOne integration. More possibilities:\n• Dedicated Pakistan wallet\n• Global receiving in USD/EUR/GBP/AED\n• Instant PKR domestic payouts\n• Merchant QR checkout\n• Developer APIs & Webhooks',
      footnote: 'Services, rates and integration options depend on availability, eligibility and commercial agreement.',
      cta: 'Talk to Sales · Request API Access',
    },
    'Developer API': {
      title: 'Zazo Developer API',
      headline: 'Build on Zazo rails.',
      content:
        'Programmatic REST APIs and webhooks for automated payouts, real-time conversion quotes, account reconciliation, and instant domestic clearing via Raast.',
      cta: 'Request API Access',
    },
  };

  const currentModal = activeModal ? modalContents[activeModal] : null;

  return (
    <footer
      id="footer"
      data-snap-point
      data-snap-id="footer"
      data-theme-bg="black"
      className="relative z-40 w-full bg-black pt-16 pb-12 text-white border-t border-white/10 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        
        {/* Brand Lockup & App Store Badges */}
        <div className="pb-12 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link href="/" aria-label="Zazo Home" className="flex items-center" suppressHydrationWarning>
            <Logo height={32} className="text-white" />
          </Link>

          {/* App Store & Google Play Badges based on PDF */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-all select-none border border-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z" />
              </svg>
              <div className="leading-tight text-left">
                <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">Download on the</div>
                <div className="text-[13px] font-bold text-white tracking-tight">App Store</div>
              </div>
            </a>

            <a
              href="#download"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-all select-none border border-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white shrink-0">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a1.99 1.99 0 0 1-.61-.926V2.74c.14-.383.359-.705.609-.926zm11.246 11.248l2.09-2.091-11.83-6.83 9.74 8.921zm2.936-2.937l3.655 2.11a1.2 1.2 0 0 1 0 2.08l-3.655 2.11-2.227-2.227 2.227-2.073zm-2.936 2.937l-9.74 8.922 11.83-6.83-2.09-2.092z" />
              </svg>
              <div className="leading-tight text-left">
                <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">GET IT ON</div>
                <div className="text-[13px] font-bold text-white tracking-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns matching Document 124 specification */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-12 text-[14px]">
          
          {/* 1. Accounts — Freelancers · Remittances · Business · Local · Merchants */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Accounts
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/freelancers"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/freelancers')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Freelancers
                </Link>
              </li>
              <li>
                <Link
                  href="/remittances"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/remittances')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Remittances
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/business')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/local"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/local')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Local
                </Link>
              </li>
              <li>
                <Link
                  href="/merchants"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/merchants')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Merchants
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. For Business — Zazo Connect API */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              For Business
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/connect"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/connect')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Zazo Connect API
                </Link>
              </li>
              <li>
                <Link
                  href="/connect#contact"
                  className="text-neutral-300 hover:text-white transition-colors font-normal"
                >
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company — Pricing · Live Rates */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/pricing"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/pricing')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#rates"
                  className="text-neutral-300 hover:text-white transition-colors font-normal"
                >
                  Live Rates
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Support — FAQs · Contact */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Support
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/#faq"
                  className="text-neutral-300 hover:text-white transition-colors font-normal"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/contact')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Legal — Terms · Privacy · Rewards · Security · Disclosures */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Legal
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/terms"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/terms')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/privacy')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards-terms"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/rewards-terms')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Rewards
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/security')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/disclosures"
                  suppressHydrationWarning
                  className={`transition-colors ${
                    isLinkActive('/disclosures')
                      ? 'text-[#6CFF94] font-medium'
                      : 'text-neutral-300 hover:text-white font-normal'
                  }`}
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Disclaimer from Document 124 */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-neutral-400">
          <p className="m-0 max-w-xl text-[12px] sm:text-[13px] text-neutral-400 font-normal text-center sm:text-left">
            Zazo is a technology company, not a bank. Wallet services are provided through licensed partners. © Zazo. All rights reserved.
          </p>
          <p className="m-0 text-[12px] text-neutral-500 font-normal shrink-0">
            Global pay. Local spend.
          </p>
        </div>

      </div>

      {/* Accessible Interactive Detail Modals */}
      <AnimatePresence>
        {currentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl rounded-[32px] border border-white/20 bg-[#111111] p-7 sm:p-9 text-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer border-none"
                aria-label="Close modal"
              >
                ✕
              </button>

              <span className="text-[12px] uppercase tracking-wider text-[#6CFF94] font-medium block">
                {currentModal.title}
              </span>
              <h3 className="mt-2 text-[26px] sm:text-[28px] font-bold tracking-[-0.8px] text-white m-0">
                {currentModal.headline}
              </h3>

              <div className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-neutral-300">
                {currentModal.content}
              </div>

              {currentModal.footnote && (
                <p className="mt-4 pt-3 border-t border-white/10 text-[12px] text-neutral-400 italic m-0">
                  {currentModal.footnote}
                </p>
              )}

              {currentModal.cta && (
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="btn-pill btn-primary text-[13px] font-medium px-5 py-2.5 cursor-pointer"
                  >
                    {currentModal.cta}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
