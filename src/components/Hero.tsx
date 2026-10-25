'use client';

import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#6CFF94] pt-[40px] pb-[90px] text-black">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Two-Column Grid on Desktop */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: H1 Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[38px] sm:leading-[46px] lg:leading-[53px] tracking-[-1.08px] sm:tracking-[-1.4px] lg:tracking-[-1.68px] font-normal text-black m-0">
              Get paid in USD.
              <br />
              Spend in PKR.
            </h1>
          </motion.div>

          {/* Right Column: Lead Paragraph & CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <p className="text-[20px] sm:text-[22px] lg:text-[25px] leading-[26px] sm:leading-[28px] lg:leading-[30px] tracking-[-0.6px] lg:tracking-[-0.75px] font-normal text-black m-0">
              Bring international income and everyday spending together. Receive payments, understand your conversion, and explore local payments with Zazo.
            </p>

            {/* Currency Availability Tag */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/50 bg-black/5 px-4 py-1 text-[13px] tracking-[-0.26px] text-black font-normal">
              <span className="h-2 w-2 rounded-full bg-black"></span>
              <span>USD and PKR now. EUR, GBP, and AED planned.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#waitlist"
                className="btn-pill btn-cta-arrow inline-flex items-center gap-2"
              >
                <span>Join the Waitlist</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="btn-pill btn-secondary-green"
              >
                See how it works
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual: Center-bottom floating phone mockup */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
