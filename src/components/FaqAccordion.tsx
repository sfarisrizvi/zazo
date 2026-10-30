'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'Which currencies?',
      a: 'USD today. EUR, GBP, AED soon.',
    },
    {
      q: 'How fast?',
      a: 'Convert same-day. Raast transfers are instant.',
    },
    {
      q: 'How do I get 10%?',
      a: 'Scan merchant QR. Higher balance = higher discount.*',
    },
    {
      q: 'What fees?',
      a: 'No hidden fees. Rate shown before confirm.',
    },
    {
      q: 'Is my money safe?',
      a: 'Licensed bank, segregated funds, encrypted.',
    },
    {
      q: 'Real bank details?',
      a: 'Yes. USD ACH details in your name.',
    },
  ];

  return (
    <section
      id="faq"
      data-snap-point
      data-snap-id="faq"
      data-theme-bg="white"
      className="relative z-20 w-full bg-[#f8f9fa] text-black py-16 sm:py-20 lg:py-24 border-t border-black/5"
    >
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* 
            ====================================================================
            LEFT COLUMN: Heading, Zazo Support Chat Widget, and Contact CTA
            Sticky on desktop so it stays anchored while scrolling through FAQs
            until the end of the last FAQ card, then scrolls away.
            ====================================================================
          */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7 lg:sticky lg:top-[94px] self-start">
            {/* Title - top aligned with the top of the first FAQ card */}
            <div>
              <h2 className="text-[44px] sm:text-[54px] xl:text-[62px] font-bold text-black tracking-[-2px] sm:tracking-[-2.5px] leading-[1.05] m-0 -mt-1 xl:-mt-1.5">
                Questions,<br />answered.
              </h2>
            </div>

            {/* Zazo Support Chat Widget matching reference screenshot */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-white p-5 sm:p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-black/[0.06] flex flex-col gap-4 max-w-[420px]">
              {/* Agent Profile Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6CFF94] flex items-center justify-center p-1.5 shadow-sm shrink-0">
                  <Image
                    src="/favicon.svg"
                    alt="Zazo Support"
                    width={22}
                    height={22}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-black leading-tight">
                    Zazo Support
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[12px] text-neutral-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex flex-col gap-2.5 pt-1">
                {/* User Message Bubble */}
                <div className="self-end bg-black text-white text-[13px] sm:text-[14px] px-4 py-2.5 rounded-[18px] rounded-br-[4px] max-w-[240px] shadow-sm leading-snug">
                  Which currencies can I receive?
                </div>

                {/* Support Response Bubble */}
                <div className="self-start bg-[#F3F4F6] text-neutral-800 text-[13px] sm:text-[14px] px-4 py-3 rounded-[18px] rounded-bl-[4px] max-w-[280px] leading-relaxed shadow-sm">
                  USD today — EUR, GBP and AED are coming soon.
                </div>
              </div>
            </div>

            {/* Contact Link Pill */}
            <div>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2.5 rounded-full border border-black/15 bg-white hover:bg-neutral-50 hover:border-black/35 px-6 py-3.5 text-[14px] font-semibold text-black transition-all shadow-sm cursor-pointer w-fit"
              >
                <span>Still have questions? Contact us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 
            ====================================================================
            RIGHT COLUMN: FAQ Accordion Card List
            Clean white cards with (+) and green (−) state toggles
            ====================================================================
          */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.q}
                  className="rounded-[20px] sm:rounded-[24px] bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-7 text-left cursor-pointer bg-transparent border-none outline-none select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold tracking-[-0.4px] text-black pr-4 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#6CFF94] text-black shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0 text-[15px] sm:text-[16px] leading-[26px] tracking-[-0.2px] text-neutral-600 font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* 
          ====================================================================
          UNDER FAQS: Waitlist Email Capture & App Download Buttons
          Directly matches Document 122.pdf:
          "Under FAQS Show Downlaod buttons or join waitlist sction 
          where user enter email field and join waitlist , CTA"
          ====================================================================
        */}
        <div id="waitlist" className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-black/10">
          <div className="rounded-[28px] sm:rounded-[36px] bg-black text-white p-7 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6CFF94]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6CFF94]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-flex h-6 sm:h-7 items-center rounded-full bg-white/10 px-3 sm:px-3.5 text-[11px] sm:text-[12px] font-medium tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-3 sm:mb-4">
                Early Access
              </span>

              <h3 className="text-[30px] sm:text-[42px] lg:text-[50px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.1] text-white m-0">
                Be first in line when Zazo launches.
              </h3>

              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed max-w-lg mx-auto">
                Join the waitlist to receive priority access to real USD & PKR accounts and up to 10% cash back on QR payments.
              </p>

              {/* Email Waitlist Input Form */}
              <form
                onSubmit={handleWaitlistSubmit}
                className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full h-[52px] px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-[15px] outline-none focus:border-[#6CFF94] focus:ring-2 focus:ring-[#6CFF94]/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 h-[52px] px-7 rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-bold text-[15px] transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-[#6CFF94] text-[13px] font-medium"
                >
                  ✓ You're on the priority waitlist! We'll notify you soon.
                </motion.div>
              )}

              {/* App Download Buttons */}
              <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                <span className="text-[13px] text-neutral-400 font-medium">
                  Available soon on:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* App Store Button */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all text-left select-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z" />
                    </svg>
                    <div className="leading-tight">
                      <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">Download on the</div>
                      <div className="text-[13px] font-bold text-white tracking-tight">App Store</div>
                    </div>
                  </div>

                  {/* Google Play Button */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all text-left select-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.99 1.99 0 0 1-.61-.926V2.74c.14-.383.359-.705.609-.926zm11.246 11.248l2.09-2.091-11.83-6.83 9.74 8.921zm2.936-2.937l3.655 2.11a1.2 1.2 0 0 1 0 2.08l-3.655 2.11-2.227-2.227 2.227-2.073zm-2.936 2.937l-9.74 8.922 11.83-6.83-2.09-2.092z" />
                    </svg>
                    <div className="leading-tight">
                      <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">GET IT ON</div>
                      <div className="text-[13px] font-bold text-white tracking-tight">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
