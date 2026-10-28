'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContents: Record<string, { title: string; headline: string; content: string; footnote?: string; cta?: string }> = {
    'Global Receiving': {
      title: 'Global Receiving',
      headline: 'Get paid from anywhere.',
      content:
        'Receive USD from supported platforms — Upwork, Deel, Amazon, eBay, Etsy and more.\n\nHow it works: connect your source → funds arrive in your Zazo wallet → convert to PKR at the Zazo rate.',
      cta: 'Get Started · Check Live Rate',
    },
    'Local Wallet': {
      title: 'Local Wallet',
      headline: 'Money that stays and spends.',
      content:
        'Your PKR sits in your Zazo wallet — pay by QR, send to friends, save on eligible purchases.\n\nNo bank queues. No withdrawal fees to spend.',
      cta: 'Get Started',
    },
    'QR Payments': {
      title: 'QR Payments',
      headline: 'Scan. Pay. Save.',
      content:
        'Pay at supported merchants with a QR scan. Earn dynamic discounts, up to 10%.*\n\nFor merchants: free QR code, no MDR on eligible payments.**',
      footnote: '*Terms apply. **Subject to merchant eligibility and agreement.',
      cta: 'Get the app · Sign up as a merchant',
    },
    'Send Money': {
      title: 'Send Money',
      headline: 'Send in seconds.',
      content: 'Send money to other Zazo users — instant, in-app, no bank forms.',
      cta: 'Get Started',
    },
    'Zazo Connect': {
      title: 'ZAZO CONNECT — B2B LANDING PAGE',
      headline: 'Pakistan payments. One integration.',
      content:
        'Give your users a Pakistan receiving and spending experience through Zazo Connect.\n\nFor fintechs · Neobanks · Remittance apps · Marketplaces · Payment platforms\n\nOne integration. More possibilities.\nPakistan wallet · Global receiving · PKR spending · QR payments · Rewards · Developer APIs\n\nBuilt for your platform.\nFintechs & neobanks — Extend your product into Pakistan. Remittance apps — Connect international transfers with local spending. Marketplaces — Support seller payouts and local spend. Payment platforms — Integrate wallet and QR capabilities.\n\nBring Pakistan payments to your platform.',
      footnote: 'Services, rates and integration options depend on availability, eligibility and commercial agreement.',
      cta: 'Talk to Sales · Request API Access',
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
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        
        {/* Brand Lockup */}
        <div className="pb-12 border-b border-white/10">
          <Logo height={32} className="text-white" />
        </div>

        {/* Footer Navigation Columns matching Document */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 text-[14px]">
          
          {/* Products */}
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#888888] block mb-4">
              Products
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {['Global Receiving', 'Local Wallet', 'QR Payments', 'Send Money'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveModal(item)}
                    className="text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#888888] block mb-4">
              Pricing
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-white/80">
              <li>
                <a href="#difference" className="hover:text-white transition-colors">
                  Live Rates
                </a>
              </li>
              <li>
                <a href="#difference" className="hover:text-white transition-colors">
                  Fees
                </a>
              </li>
              <li>
                <a href="#smart-engine" className="hover:text-white transition-colors">
                  Rewards Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#888888] block mb-4">
              Support
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-white/80">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Help Centre
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#888888] block mb-4">
              Legal
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-white/80">
              <li>
                <span className="text-white/60">Terms</span>
              </li>
              <li>
                <span className="text-white/60">Privacy</span>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <span className="text-white/60">Regulatory Disclosures</span>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-[#888888] block mb-4">
              For Business
            </span>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li>
                <button
                  onClick={() => setActiveModal('Zazo Connect')}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left font-normal"
                >
                  Zazo Connect
                </button>
              </li>
              <li>
                <span className="text-white/60">Developer API</span>
              </li>
              <li>
                <a href="#waitlist" className="text-white/80 hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between text-[13px] text-[#888888]">
          <p className="m-0">© Zazo. All rights reserved.</p>
        </div>

      </div>

      {/* Minimal Modal for Product Links / Zazo Connect */}
      <AnimatePresence>
        {currentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-[32px] border border-white/20 bg-[#111111] p-8 text-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <span className="text-[12px] uppercase tracking-wider text-[#6CFF94] font-mono">
                {currentModal.title}
              </span>
              <h3 className="mt-2 text-[28px] font-bold tracking-[-0.8px] text-white m-0">
                {currentModal.headline}
              </h3>

              <div className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-white/80">
                {currentModal.content}
              </div>

              {currentModal.footnote && (
                <p className="mt-4 text-[12px] text-white/50 italic border-t border-white/10 pt-3 m-0">
                  {currentModal.footnote}
                </p>
              )}

              {currentModal.cta && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#6CFF94]">
                    {currentModal.cta}
                  </span>
                  <a
                    href="#waitlist"
                    onClick={() => setActiveModal(null)}
                    className="btn-pill bg-[#6CFF94] text-black text-[12px] font-medium"
                  >
                    Continue
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
