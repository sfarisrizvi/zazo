'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Zazo?',
      a: 'A wallet to receive money globally and spend locally in Pakistan.',
    },
    {
      q: 'How do I get the 280 rate?',
      a: 'Convert USD to PKR in the app. The rate is shown before you confirm.',
    },
    {
      q: 'Who can open a Zazo account?',
      a: 'Freelancers, remote workers, agencies and software houses, Amazon/eBay/Etsy sellers, families receiving remittances, local users, and merchants accepting QR payments.',
    },
    {
      q: 'Any cost to open an account?',
      a: 'Zero. Account opening is free',
    },
    {
      q: 'How does Zazo benefit me?',
      a: 'Open a wallet in minutes, hold multiple currencies, receive from global clients, convert, then withdraw or spend by QR and earn all in one app.',
    },
    {
      q: 'How do I get discounts?',
      a: 'Eligible QR payments earn dynamic discounts, up to 10%. The higher your PKR balance, the more you can save.',
    },
    {
      q: 'What fees do I pay?',
      a: 'Free account opening, no FX fee, no spread, no hidden fee. Your rate is shown before you confirm, and the Zazo Smart Engine aims to give you a better rate than interbank.',
    },
    {
      q: 'How safe is my money?',
      a: 'Held with a licensed financial partner, licensed local bank partner for PKR, licensed partners for other currencies. Segregated funds, encryption, and real-time fraud monitoring.',
    },
    {
      q: 'Are these real bank account details?',
      a: 'Yes. You get real account details in your own name ACH and wire details for USD, swift code and account number for GBP, and an IBAN for EUR and AED.',
    },
    {
      q: 'How does cashback work?',
      a: 'Eligible QR payments earn dynamic discounts, up to 10%. Terms and limits apply.',
    },
    {
      q: 'Can I receive from Upwork or Amazon?',
      a: 'Supported sources are listed in the app. Availability may vary by source.',
    },
    {
      q: 'How do I get the app?',
      a: 'Download from the App Store or Google Play.',
    },
  ];

  return (
    <section
      id="faq"
      data-snap-point
      data-snap-id="faq"
      data-theme-bg="white"
      className="snap-section w-full bg-transparent py-20 lg:py-28 text-black border-t border-black/10"
    >
      <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-[13px] tracking-[-0.26px] text-black/50 font-normal uppercase">
            6. FAQ
          </span>
          <h2 className="mt-2 text-[36px] sm:text-[46px] leading-[1.1] tracking-[-1.3px] font-bold text-black m-0">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="rounded-[24px] border border-black/10 bg-black/[0.02] overflow-hidden transition-all duration-300 hover:border-black/25"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent border-none outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[18px] font-medium tracking-[-0.4px] text-black pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white text-[18px] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.4px] text-black/75 border-t border-black/5">
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
    </section>
  );
}
