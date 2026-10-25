'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqAccordion() {
  const faqs = [
    {
      q: 'What is Zazo?',
      a: 'Zazo is being developed to connect supported international receiving, currency conversion, and local payments in one experience. Availability depends on your location, account eligibility, and the features offered at launch.',
    },
    {
      q: 'Who can use Zazo?',
      a: 'Zazo is designed for freelancers, remote contractors, independent businesses, and individuals in Pakistan receiving foreign currency. Account activation requires standard digital verification with valid national identification.',
    },
    {
      q: 'Which currencies can I receive?',
      a: 'USD and PKR will be supported at launch. Planned future currencies include EUR, GBP, and AED. Incoming funds are routed through dedicated receiving account numbers to minimize intermediary fees.',
    },
    {
      q: 'How fast does money arrive?',
      a: 'Arrival times depend on the payment method. Standard US ACH deposits clear in 1 to 2 business days. Once received, currency conversion and local Pakistani QR or Raast transfers settle instantly.',
    },
    {
      q: 'What rate do I get when converting?',
      a: 'You see the exact real-time quoted exchange rate, transparent fees, and expected local PKR amount together before confirming. The quote is locked so you receive exactly what you see.',
    },
    {
      q: 'Can I spend directly from the app?',
      a: 'Yes. Once converted, your PKR balance is immediately ready to scan-and-pay at nationwide merchant QR locations, send to friends via $zazotag, or transfer to any Pakistani bank account via Raast.',
    },
    {
      q: 'What does Zazo cost?',
      a: 'Account opening, maintenance, and local QR merchant payments are free. Transparent, flat pricing applies to currency conversion, displayed upfront without hidden spreads or monthly charges.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" data-snap-point data-snap-id="faq" data-theme-bg="white" className="snap-section w-full bg-transparent py-[90px] text-black border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Frequently Asked
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            Questions, answered.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Everything you need to know about receiving, converting, and spending with Zazo.
          </p>
        </motion.div>

        {/* Accordion List with Hairline Dividers */}
        <div className="mt-12 max-w-3xl divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between text-left transition-opacity hover:opacity-75 focus:outline-none"
                >
                  <span className="text-[18px] sm:text-[20px] leading-[26px] tracking-[-0.54px] text-black font-normal pr-6">
                    {faq.q}
                  </span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F7F7] border border-[#E5E5E5] text-black transition-transform duration-200">
                    {isOpen ? (
                      <span className="text-[18px] font-normal leading-none">−</span>
                    ) : (
                      <span className="text-[18px] font-normal leading-none">+</span>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[16px] leading-[24px] tracking-[-0.48px] text-[#999999] font-normal m-0">
                        {faq.a}
                      </p>
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
