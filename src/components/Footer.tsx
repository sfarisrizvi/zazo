'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
        
        {/* Brand Lockup */}
        <div className="pb-12 border-b border-white/10 flex items-center justify-between">
          <a href="#hero" aria-label="Zazo Home" className="flex items-center">
            <Logo height={32} className="text-white" />
          </a>
          <a
            href="#hero"
            className="text-[13px] font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Back to top ↑
          </a>
        </div>

        {/* Footer Navigation Columns matching user specification */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 py-12 text-[14px]">
          
          {/* 1. Products — Global Receiving · Local Wallet · QR Payments · Send Money */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Products
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {['Global Receiving', 'Local Wallet', 'QR Payments', 'Send Money'].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setActiveModal(item)}
                    className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Pricing — Live Rates · Fees · Rewards Terms */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Pricing
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#rates" className="text-neutral-300 hover:text-white transition-colors">
                  Live Rates
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-300 hover:text-white transition-colors">
                  Fees
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-neutral-300 hover:text-white transition-colors">
                  Rewards Terms
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Support — Help Centre · FAQs · Contact Us */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Support
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <a href="#faq" className="text-neutral-300 hover:text-white transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#hero" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Legal — Terms · Privacy · Security · Regulatory Disclosures */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              Legal
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Terms')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Privacy')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Privacy
                </button>
              </li>
              <li>
                <a href="#security" className="text-neutral-300 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Regulatory Disclosures')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Regulatory Disclosures
                </button>
              </li>
            </ul>
          </div>

          {/* 5. For Business — Zazo Connect · Developer API · Contact Sales */}
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-400 block mb-4">
              For Business
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Zazo Connect')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Zazo Connect
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Developer API')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Developer API
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('Zazo Connect')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Contact Sales
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-neutral-400">
          <p className="m-0">© Zazo. All rights reserved.</p>
          <p className="m-0 text-[12px] text-neutral-500">
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
