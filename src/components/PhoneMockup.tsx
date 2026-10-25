'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px]"
    >
      {/* Background Soft Bento Backdrop from Figma */}
      <div className="absolute -inset-4 sm:-inset-6 rounded-[56px] bg-black/5 -z-10" />

      {/* Floating Badge 1: Top-Right Discount Earned from Figma */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-6 -right-6 sm:-right-10 z-30 w-[170px] sm:w-[190px]"
      >
        <Image
          src="/badges/badge_discount.png"
          alt="Discount earned +Rs 125.00"
          width={420}
          height={160}
          priority
          className="h-auto w-full drop-shadow-md"
        />
      </motion.div>

      {/* Floating Badge 2: Bottom-Left USD Received from Figma */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-6 -left-6 sm:-left-10 z-30 w-[170px] sm:w-[190px]"
      >
        <Image
          src="/badges/badge_usd_received.png"
          alt="USD received +$500.00"
          width={420}
          height={160}
          priority
          className="h-auto w-full drop-shadow-md"
        />
      </motion.div>

      {/* Device Chassis with Authentic 430/932 Screen */}
      <div className="relative aspect-[430/932] overflow-hidden rounded-[52px] border-[10px] border-black bg-black shadow-2xl">
        {/* Dynamic Island Pill */}
        <div className="absolute top-2.5 left-1/2 z-30 flex h-6 -translate-x-1/2 items-center justify-between rounded-full bg-black px-3 w-[105px]">
          <div className="h-2 w-2 rounded-full bg-[#1A1A1A]"></div>
          <div className="h-2 w-2 rounded-full bg-[#0a0a0a]"></div>
        </div>

        {/* Real Authentic App Home Screen from Figma */}
        <div className="relative h-full w-full bg-white">
          <Image
            src="/screens/home.png"
            alt="Zazo App Home Screen with real balances and transactions"
            fill
            priority
            sizes="(max-width: 640px) 340px, 370px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}
