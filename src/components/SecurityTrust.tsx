'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Lock, Activity, UserCheck } from 'lucide-react';

const trustPoints = [
  {
    id: 'segregated-funds',
    title: 'Segregated funds',
    description: "Your PKR sits in your own name at a licensed Pakistan bank — separate from Zazo's operating funds.",
    icon: Landmark,
    positionClass: 'top-3 sm:top-6 left-2 lg:left-6 xl:left-10 max-w-[350px]',
  },
  {
    id: 'licensed-rails',
    title: 'Licensed rails',
    description: 'Built on regulated banking and payment rails in Pakistan.',
    icon: ShieldCheck,
    positionClass: 'top-3 sm:top-6 right-2 lg:right-6 xl:right-10 max-w-[340px]',
  },
  {
    id: 'encrypted',
    title: 'Encrypted',
    description: 'AES-256 encryption on your data and transactions.',
    icon: Lock,
    positionClass: 'top-[48%] -translate-y-1/2 left-0 lg:left-2 xl:left-6 max-w-[330px]',
  },
  {
    id: 'fraud-protection',
    title: 'Fraud protection',
    description: 'Real-time monitoring on every transaction.',
    icon: Activity,
    positionClass: 'top-[48%] -translate-y-1/2 right-0 lg:right-2 xl:right-6 max-w-[330px]',
  },
  {
    id: 'data-privacy',
    title: 'Your data stays yours',
    description: "We don't sell your data.",
    icon: UserCheck,
    positionClass: 'bottom-3 left-1/2 -translate-x-1/2 max-w-[340px]',
  },
];

export default function SecurityTrust() {
  return (
    <section
      id="security"
      data-snap-point
      data-snap-id="security"
      data-theme-bg="white"
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden transition-colors duration-700"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-[38px] sm:text-[50px] lg:text-[62px] font-bold text-black tracking-[-1.8px] sm:tracking-[-2.4px] leading-[1.08] m-0">
            Your money, held the right way.
          </h2>
        </div>

        {/* 
          ======================================================================
          DESKTOP ORBIT CONSTELLATION (lg: and above)
          Concentric rings with pulsing center app icon and 5 balanced satellite pills
          ======================================================================
        */}
        <div className="hidden lg:flex relative w-full max-w-[1240px] mx-auto min-h-[640px] xl:min-h-[680px] items-center justify-center">
          
          {/* Orbital Rings Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Inner Ring */}
            <div className="w-[280px] h-[280px] rounded-full border border-black/10" />

            {/* Middle Dashed Orbit */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-neutral-300">
              <span className="absolute top-[15%] right-[18%] h-2.5 w-2.5 rounded-full bg-[#6CFF94] shadow-[0_0_12px_#6CFF94]" />
              <span className="absolute bottom-[16%] left-[17%] h-2.5 w-2.5 rounded-full bg-[#6CFF94] shadow-[0_0_12px_#6CFF94]" />
            </div>

            {/* Outer Dotted Orbit */}
            <div className="absolute w-[740px] h-[740px] rounded-full border border-dotted border-neutral-300/80">
              <span className="absolute top-[28%] left-[7%] h-2.5 w-2.5 rounded-full bg-[#6CFF94] shadow-[0_0_12px_#6CFF94]" />
              <span className="absolute bottom-[28%] right-[8%] h-2.5 w-2.5 rounded-full bg-[#6CFF94] shadow-[0_0_12px_#6CFF94]" />
            </div>
          </div>

          {/* Central Zazo Squircle App Icon */}
          <div className="relative z-20 flex items-center justify-center select-none">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-24 h-24 rounded-[26px] bg-[#6CFF94] shadow-[0_10px_25px_rgba(0,0,0,0.06)] flex items-center justify-center p-3.5 border border-black/5"
            >
              <Image
                src="/favicon.svg"
                alt="Zazo App Icon"
                width={76}
                height={76}
                priority
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>
          </div>

          {/* 5 Orbiting Feature Cards (Desktop Positioned) */}
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute z-30 ${item.positionClass}`}
              >
                <div className="flex items-center gap-3.5 rounded-full bg-white/95 backdrop-blur-md border border-black/10 py-3.5 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-black/25 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/5 text-black">
                    <Icon className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col text-left pr-2">
                    <span className="text-[15px] font-bold text-black leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[13px] text-neutral-500 font-normal leading-snug mt-0.5">
                      {item.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 
          ======================================================================
          MOBILE EXPERIENCE (Below lg)
          Clean centered anchor icon with vertical flow of responsive pill cards
          ======================================================================
        */}
        <div className="lg:hidden flex flex-col items-center gap-3.5 w-full max-w-md mx-auto">
          {/* Centered App Icon with mini orbit rings */}
          <div className="relative flex items-center justify-center my-6 select-none">
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-neutral-300 pointer-events-none" />
            <div className="absolute w-32 h-32 rounded-full border border-neutral-200 pointer-events-none" />
            <div className="relative w-16 h-16 rounded-[18px] bg-[#6CFF94] shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center p-2.5 z-10 border border-black/5">
              <Image
                src="/favicon.svg"
                alt="Zazo App Icon"
                width={48}
                height={48}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>

          {/* Cards List */}
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`mobile-${item.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="w-full flex items-center gap-3.5 rounded-full bg-white border border-black/10 py-3.5 px-4.5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-black">
                  <Icon className="h-5 w-5 stroke-[1.8]" />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <span className="text-[14px] font-bold text-black leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[12px] text-neutral-500 font-normal leading-tight mt-0.5">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Partner Footnote */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-black/10 text-center max-w-2xl mx-auto">
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-500 font-normal m-0">
            Zazo is a technology company, not a bank. Wallet services are provided through licensed partners.
          </p>
        </div>
      </div>
    </section>
  );
}
