'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast does money arrive in Zazo?',
      a: 'Once your client or platform sends USD, it appears in your Zazo account and can be converted to PKR the same day.',
    },
    {
      q: 'What rate do I get when converting?',
      a: 'Convert USD to PKR in the app with locked transparent rates shown before you confirm. The Zazo Smart Engine aims to give you a rate better than interbank with zero hidden spreads.',
    },
    {
      q: 'Is my money safe?',
      a: 'Held with licensed financial partners — a licensed local bank partner for PKR, and licensed partners for other currencies. Segregated funds, AES-256 encryption, and real-time fraud monitoring.',
    },
    {
      q: 'Can I spend directly from the app?',
      a: 'Yes. Spend locally using instant QR payments or debit cards directly from your PKR balance, with dynamic discounts up to 10% on eligible purchases.',
    },
    {
      q: 'What does Zazo cost?',
      a: 'Zero. Account opening is free, no FX fee, no spread, and no hidden charges.',
    },
    {
      q: 'Which currencies can I receive?',
      a: 'USD today — EUR, GBP and AED are coming soon.',
    },
    {
      q: 'When is Zazo launching?',
      a: 'Zazo is rolling out to early waitlist members. Join the waitlist today for priority early access.',
    },
    {
      q: 'Who can open a Zazo account?',
      a: 'Freelancers, remote workers, agencies and software houses, Amazon/eBay/Etsy sellers, families receiving remittances, local users, and merchants accepting QR payments.',
    },
    {
      q: 'How do I get discounts?',
      a: 'Eligible QR payments earn dynamic discounts, up to 10%. The higher your PKR balance, the more you can save.',
    },
    {
      q: 'Are these real bank account details?',
      a: 'Yes. You get real account details in your own name — ACH and wire details for USD, swift code and account number for GBP, and an IBAN for EUR and AED.',
    },
    {
      q: 'Can I receive from Upwork or Amazon?',
      a: 'Supported sources are listed in the app including Upwork, Deel, Amazon, eBay, and Etsy. Availability may vary by source.',
    },
    {
      q: 'How do I get the app?',
      a: 'Download from the App Store or Google Play once your waitlist invitation arrives.',
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
      </div>
    </section>
  );
}
