'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      data-snap-point
      data-snap-id="hero"
      data-theme-bg="green"
      className="snap-section-top relative flex min-h-screen w-full items-center justify-center bg-[#6CFF94] text-black px-5 lg:px-8 pt-12 pb-16 overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1440px] w-full grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* Left Column: Copy from Document Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center gap-6"
        >
          {/* Main Headline */}
          <h1 className="text-[46px] sm:text-[60px] xl:text-[68px] leading-[1.05] tracking-[-1.8px] font-normal text-black m-0">
            Global pay.
            <br />
            Local spend.
          </h1>

          {/* Currency Accounts Supported */}
          <p className="text-[17px] sm:text-[20px] xl:text-[22px] leading-snug tracking-[-0.6px] font-normal text-black m-0">
            Get USD, PKR, EUR, GBP and AED accounts. 🇺🇸 🇵🇰 🇪🇺 🇬🇧 🇦🇪
          </p>

          {/* Workflow Flow */}
          <p className="text-[15px] sm:text-[17px] leading-normal tracking-[-0.45px] font-normal text-black/85 m-0">
            Receive in any currency → convert to PKR → Hold or spend by QR.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#waitlist"
              className="btn-pill btn-primary inline-flex items-center gap-2 text-[13px] font-medium"
            >
              <span>Get Started</span>
            </a>
            <a
              href="#difference"
              className="btn-pill btn-secondary-green inline-flex items-center gap-2 text-[13px]"
            >
              <span>Check Live Rate</span>
            </a>
          </div>

          {/* Subtext Disclaimer */}
          <p className="text-[12px] sm:text-[13px] text-black/60 italic tracking-[-0.26px] m-0">
            Currencies and features subject to availability and eligibility.
          </p>

          {/* Feature Bar */}
          <div className="pt-4 border-t border-black/15">
            <p className="text-[13px] sm:text-[14px] font-medium tracking-[-0.3px] text-black m-0">
              Free account opening · No FX fee · No spread · No hidden fees
            </p>
          </div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex items-center justify-center relative select-none"
        >
          <div className="relative w-[280px] sm:w-[320px] xl:w-[350px] aspect-[400/816] drop-shadow-[0_32px_64px_rgba(0,0,0,0.28)]">
            <Image
              src="/screens/home.png"
              alt="Zazo App Home Screen"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
