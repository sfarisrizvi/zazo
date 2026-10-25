'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryStep {
  id: string;
  stepNumber: string;
  shortName: string;
  badge: string;
  headline: string;
  description: string;
  bullets: string[];
  screenSrc: string;
  screenAlt: string;
  metricLabel: string;
  metricValue: string;
  metricDetail: string;
  floatingBadgeLeft?: {
    src: string;
    alt: string;
  };
  floatingBadgeRight?: {
    src: string;
    alt: string;
  };
}

const steps: StoryStep[] = [
  {
    id: 'balance-home',
    stepNumber: '01',
    shortName: 'Balances',
    badge: 'Connected Balances',
    headline: 'Get paid in USD.\nSpend in PKR.',
    description:
      'Bring international income and everyday spending together in one unified app. View your total balance across currencies with live exchange rates and immediate activity feeds.',
    bullets: [
      'Multi-currency wallet holding USD and PKR simultaneously',
      'Instant push alerts for incoming international client transfers',
      'One-tap switching between global receiving and local wallets',
    ],
    screenSrc: '/screens/home.png',
    screenAlt: 'Zazo Home Screen with USD and PKR balances',
    metricLabel: 'Total Balance',
    metricValue: '$7,950.24',
    metricDetail: 'Combined USD + PKR Net Worth',
    floatingBadgeLeft: {
      src: '/badges/badge_usd_received.png',
      alt: 'USD received +$500.00',
    },
    floatingBadgeRight: {
      src: '/badges/badge_discount.png',
      alt: 'Discount earned +Rs 125.00',
    },
  },
  {
    id: 'receive-usd',
    stepNumber: '02',
    shortName: 'Receive USD',
    badge: 'Global Receiving',
    headline: 'Get paid like a local\nin the US & worldwide.',
    description:
      'Receive client funds via dedicated US routing and account numbers. Compatible with Upwork, Deel, Stripe, Remote, and direct client ACH or wire transfers with zero wire intermediary deductions.',
    bullets: [
      'Dedicated US routing & account details in your name',
      'Standard ACH settlement with instant arrival notifications',
      'Eliminate 4% to 7% intermediary wire deductions',
    ],
    screenSrc: '/screens/receive_usd.png',
    screenAlt: 'Zazo USD Receiving Account Details Screen',
    metricLabel: 'Standard Wire Fee',
    metricValue: '$0.00',
    metricDetail: 'Zero Intermediary Deductions',
  },
  {
    id: 'convert-clarity',
    stepNumber: '03',
    shortName: 'Convert',
    badge: 'Conversion Clarity',
    headline: 'Know your exact rate\nbefore you confirm.',
    description:
      'No mystery margins, no 3-day clearing holds. Review the live exchange rate, applicable fees, and the exact local PKR amount before tapping Confirm. What you see is what lands in your wallet.',
    bullets: [
      'Locked real-time quote shown upfront prior to conversion',
      '0% hidden spread markup with complete transparency',
      'Instant settlement straight into your ready-to-spend PKR wallet',
    ],
    screenSrc: '/screens/convert.png',
    screenAlt: 'Zazo Currency Conversion Review Screen',
    metricLabel: 'Guaranteed Quote',
    metricValue: '278.40',
    metricDetail: 'PKR per USD • 0% Hidden Spread',
  },
  {
    id: 'spend-qr',
    stepNumber: '04',
    shortName: 'QR Pay',
    badge: 'Local Spending',
    headline: 'Spend anywhere\nacross Pakistan via QR.',
    description:
      'Pay in-store at cafes, restaurants, grocery stores, and retail outlets nationwide. Scan any supported merchant QR code and settle in seconds with zero cards or physical cash needed.',
    bullets: [
      'Universal QR scan-and-pay supported at merchants nationwide',
      'Zero point-of-sale hardware delays or transaction surcharge',
      'Automatic merchant verification with instant payment receipts',
    ],
    screenSrc: '/screens/scan_qr.png',
    screenAlt: 'Zazo Scan to Pay QR Code Detected Screen',
    metricLabel: 'Checkout Time',
    metricValue: '< 2 sec',
    metricDetail: 'Instant Counter QR Settlement',
  },
  {
    id: 'send-locally',
    stepNumber: '05',
    shortName: 'Send PKR',
    badge: 'Instant Transfers',
    headline: 'Move money to friends,\nfamily, or any bank.',
    description:
      'Send funds in seconds using just a phone number, $zazotag, or domestic IBAN. Integrated directly with the State Bank of Pakistan’s Raast network for instant, 24/7 bank transfers.',
    bullets: [
      'Instant zero-fee peer transfers via $zazotag or phone number',
      'Direct Raast transfers to all Pakistani commercial bank accounts',
      'Save frequent beneficiaries for 1-tap repetitive transfers',
    ],
    screenSrc: '/screens/send_pkr.png',
    screenAlt: 'Zazo Send PKR Saved Beneficiaries Screen',
    metricLabel: 'Transfer Speed',
    metricValue: 'Instant',
    metricDetail: '24/7 Raast Domestic Clearing',
  },
  {
    id: 'discounts-rewards',
    stepNumber: '06',
    shortName: 'Rewards',
    badge: 'Activity Rewards',
    headline: 'More value from eligible\neveryday activity.',
    description:
      'Unlock escalating reward tiers as you use your account. Earn up to 7% daily discount on routine spending at partner supermarkets, dining, and daily utilities with clear progress milestones.',
    bullets: [
      'Tiered rewards based on transparent eligible account activity',
      'Instant cashback credited directly to your spendable balance',
      'Track milestones and next-level criteria right inside the app',
    ],
    screenSrc: '/screens/discounts.png',
    screenAlt: 'Zazo Activity Discounts and Rewards Tier Screen',
    metricLabel: 'Daily Cashback',
    metricValue: 'Up to 7%',
    metricDetail: 'Level 3 Reward Tier Active',
  },
];

export default function PinnedPhoneShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track visibility of showcase section for floating step pill
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track scroll position across desktop story chapters
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          root: null,
          rootMargin: '-35% 0px -35% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const jumpToStep = (index: number) => {
    setActiveStep(index);
    const target = stepRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const current = steps[activeStep];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-black border-t border-[#E5E5E5]"
    >
      
      {/* 
        ========================================================================
        A. DESKTOP EXPERIENCE (lg: and above)
        ========================================================================
        Cash App & Tomi style:
        - Mobile phone mockup stays pinned in the exact center of viewport.
        - Outer content (left narrative & right metrics) scrolls naturally.
        - Phone screen transitions across the 6 authentic Figma screens.
      */}
      <div className="hidden lg:block relative">
        
        {/* Sticky Pinned Phone Layer in Center */}
        <div className="sticky top-0 h-screen w-full pointer-events-none flex items-center justify-center z-10 overflow-hidden px-8">
          <div className="relative mx-auto grid max-w-[1440px] w-full grid-cols-12 items-center">
            
            {/* Left Column Spacer (Cols 1-4) */}
            <div className="col-span-4" />

            {/* Center Pinned Phone Mockup (Cols 5-8) */}
            <div className="col-span-4 flex items-center justify-center relative">
              
              {/* Subtle Bento Frame Behind Phone */}
              <div className="absolute h-[590px] w-[390px] xl:w-[420px] rounded-[64px] bg-[#F7F7F7] border border-[#E5E5E5] -z-10" />

              {/* iPhone Frame */}
              <div className="relative w-[305px] xl:w-[325px] aspect-[430/932] rounded-[48px] border-[10px] border-black bg-black overflow-hidden shadow-2xl select-none">
                
                {/* Dynamic Island Pill */}
                <div className="absolute top-2.5 left-1/2 z-30 flex h-6 -translate-x-1/2 items-center justify-between rounded-full bg-black px-3 w-[100px]">
                  <div className="h-2 w-2 rounded-full bg-[#1A1A1A]" />
                  <div className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
                </div>

                {/* Crossfading Authentic Figma Screen */}
                <div className="relative h-full w-full bg-white overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.screenSrc}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={current.screenSrc}
                        alt={current.screenAlt}
                        fill
                        priority
                        sizes="325px"
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Badges for Step 1 (Home) */}
              <AnimatePresence>
                {current.floatingBadgeLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-12 -left-10 xl:-left-14 z-30 w-[180px] xl:w-[195px] pointer-events-auto cursor-pointer"
                  >
                    <Image
                      src={current.floatingBadgeLeft.src}
                      alt={current.floatingBadgeLeft.alt}
                      width={420}
                      height={160}
                      className="h-auto w-full drop-shadow-md"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {current.floatingBadgeRight && (
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="absolute top-16 -right-10 xl:-right-14 z-30 w-[180px] xl:w-[195px] pointer-events-auto cursor-pointer"
                  >
                    <Image
                      src={current.floatingBadgeRight.src}
                      alt={current.floatingBadgeRight.alt}
                      width={420}
                      height={160}
                      className="h-auto w-full drop-shadow-md"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Right Column Spacer (Cols 9-12) */}
            <div className="col-span-4" />

          </div>
        </div>

        {/* Scrolling Story Chapters (Overlaid over Sticky Phone via -mt-[100vh]) */}
        <div className="relative -mt-[100vh] z-20">
          {steps.map((step, index) => {
            const isCurrent = activeStep === index;

            return (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="relative flex min-h-screen items-center py-20 px-8"
              >
                <div className="mx-auto grid max-w-[1440px] w-full grid-cols-12 items-center gap-8">
                  
                  {/* LEFT COLUMN: Narrative & Feature Bullets (Cols 1-4) */}
                  <div className="col-span-4 flex flex-col justify-center">
                    <div
                      className={`flex flex-col gap-5 transition-opacity duration-500 ${
                        isCurrent ? 'opacity-100' : 'opacity-30'
                      }`}
                    >
                      {/* Step indicator & Badge */}
                      <div className="flex items-center gap-3">
                        <span className="text-[13px] tracking-[-0.26px] font-normal uppercase text-[#999999]">
                          Step {step.stepNumber} of 06
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                        <span className="inline-flex h-7 items-center rounded-full bg-[#6CFF94]/15 px-3 text-[12px] tracking-[-0.24px] text-black font-normal">
                          {step.badge}
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h2 className="whitespace-pre-line text-[38px] xl:text-[42px] leading-[42px] xl:leading-[46px] tracking-[-1.3px] font-normal text-black m-0">
                        {step.headline}
                      </h2>

                      {/* Subtitle / Description */}
                      <p className="text-[16px] xl:text-[17px] leading-[25px] tracking-[-0.51px] text-[#999999] font-normal m-0">
                        {step.description}
                      </p>

                      {/* Feature Bullets */}
                      <ul className="mt-1 flex flex-col gap-2.5 pl-0 list-none m-0">
                        {step.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-[14px] xl:text-[15px] leading-[21px] tracking-[-0.45px] text-black"
                          >
                            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6CFF94] text-black">
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action CTA Pill */}
                      <div className="pt-2">
                        <a
                          href="#waitlist"
                          className="btn-pill btn-primary inline-flex items-center gap-2"
                        >
                          <span>Join the Waitlist</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CENTER SPACER: Transparent gap so sticky phone is visible (Cols 5-8) */}
                  <div className="col-span-4 h-full pointer-events-none" />

                  {/* RIGHT COLUMN: Dedicated Metric Card & Narrative (Cols 9-12) */}
                  <div className="col-span-4 flex flex-col justify-center pl-4 xl:pl-8">
                    <div
                      className={`flex flex-col gap-6 transition-all duration-500 ${
                        isCurrent
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-30 translate-x-4'
                      }`}
                    >
                      {/* Metric Card */}
                      <div className="rounded-[40px] border border-[#E5E5E5] bg-[#F7F7F7] p-8 max-w-sm">
                        <span className="text-[12px] uppercase tracking-[-0.24px] text-[#999999] font-normal">
                          {step.metricLabel}
                        </span>
                        <div className="mt-3 text-[38px] xl:text-[42px] leading-none tracking-[-1.32px] font-normal text-black">
                          {step.metricValue}
                        </div>
                        <div className="mt-3 border-t border-[#E5E5E5] pt-3 text-[13px] tracking-[-0.26px] text-black font-normal">
                          {step.metricDetail}
                        </div>
                      </div>

                      {/* Micro Narrative */}
                      <div className="text-[13px] leading-[20px] tracking-[-0.26px] text-[#999999] max-w-sm">
                        Authentic Figma app UI • Mobile stays centered while outer chapters scroll past.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 
        ========================================================================
        B. MOBILE EXPERIENCE (< lg screens)
        ========================================================================
        On mobile screens, vertical text would overlap a centered sticky phone.
        Instead, we provide a tabbed, touch-friendly showcase where users can tap
        or swipe through each step with the phone mockup and content cleanly arranged.
      */}
      <div className="block lg:hidden px-5 py-16">
        <div className="mx-auto max-w-md flex flex-col gap-8">
          
          {/* Mobile Section Header */}
          <div className="text-center">
            <span className="text-[12px] uppercase tracking-[-0.24px] text-[#999999] font-normal">
              How Zazo Works
            </span>
            <h2 className="mt-2 text-[30px] leading-[34px] tracking-[-1px] font-normal text-black m-0">
              Get paid in USD.<br />Spend in PKR.
            </h2>
          </div>

          {/* Horizontal Scrolling Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] tracking-[-0.26px] font-normal transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-black text-white'
                    : 'bg-[#F7F7F7] text-black border border-[#E5E5E5]'
                }`}
              >
                {s.stepNumber} {s.shortName}
              </button>
            ))}
          </div>

          {/* Mobile Phone Mockup */}
          <div className="relative mx-auto flex items-center justify-center">
            {/* Bento Backdrop */}
            <div className="absolute h-[510px] w-[310px] rounded-[52px] bg-[#F7F7F7] border border-[#E5E5E5] -z-10" />

            {/* Phone Frame */}
            <div className="relative w-[270px] aspect-[430/932] rounded-[44px] border-[9px] border-black bg-black overflow-hidden shadow-xl select-none">
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 z-30 flex h-5 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2.5 w-[90px]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#1A1A1A]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
              </div>

              {/* Dynamic Screen Image */}
              <div className="relative h-full w-full bg-white overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.screenSrc}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={current.screenSrc}
                      alt={current.screenAlt}
                      fill
                      priority
                      sizes="270px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Floating Badges for Step 1 */}
            <AnimatePresence>
              {current.floatingBadgeLeft && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute bottom-8 -left-3 z-30 w-[140px]"
                >
                  <Image
                    src={current.floatingBadgeLeft.src}
                    alt={current.floatingBadgeLeft.alt}
                    width={420}
                    height={160}
                    className="h-auto w-full drop-shadow-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {current.floatingBadgeRight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute top-12 -right-3 z-30 w-[140px]"
                >
                  <Image
                    src={current.floatingBadgeRight.src}
                    alt={current.floatingBadgeRight.alt}
                    width={420}
                    height={160}
                    className="h-auto w-full drop-shadow-md"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Narrative & Feature Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px] uppercase text-[#999999] tracking-[-0.24px]">
                Step {current.stepNumber} of 06
              </span>
              <span className="h-1 w-1 rounded-full bg-black/20" />
              <span className="inline-flex h-6 items-center rounded-full bg-[#6CFF94]/15 px-2.5 text-[11px] text-black">
                {current.badge}
              </span>
            </div>

            <h3 className="text-[24px] leading-[28px] tracking-[-0.8px] font-normal text-black m-0 whitespace-pre-line">
              {current.headline}
            </h3>

            <p className="text-[15px] leading-[22px] tracking-[-0.45px] text-[#999999] font-normal m-0">
              {current.description}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2 pl-0 list-none m-0">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-black">
                  <div className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#6CFF94] text-black">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Mobile Metric Card */}
            <div className="mt-2 rounded-[28px] border border-[#E5E5E5] bg-[#F7F7F7] p-5">
              <div className="text-[11px] uppercase tracking-[-0.22px] text-[#999999]">
                {current.metricLabel}
              </div>
              <div className="mt-1.5 text-[28px] leading-none tracking-[-0.84px] font-normal text-black">
                {current.metricValue}
              </div>
              <div className="mt-2 border-t border-[#E5E5E5] pt-2 text-[12px] text-black">
                {current.metricDetail}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className={`btn-pill border border-[#E5E5E5] px-4 text-[12px] ${
                  activeStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#F7F7F7]'
                }`}
              >
                ← Previous
              </button>

              <span className="text-[12px] font-mono text-[#999999]">
                {activeStep + 1} / {steps.length}
              </span>

              <button
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className={`btn-pill btn-primary px-5 text-[12px] ${
                  activeStep === steps.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                }`}
              >
                Next →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 
        ========================================================================
        C. FLOATING STEP TRACKER (Only visible when user is in #how-it-works)
        ========================================================================
      */}
      <AnimatePresence>
        {isSectionVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-lg select-none"
          >
            <span className="text-[12px] font-mono tracking-[-0.24px] text-[#999999] mr-1">
              {activeStep + 1} / {steps.length}
            </span>
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => jumpToStep(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? 'w-8 bg-black'
                    : 'w-2.5 bg-[#E5E5E5] hover:bg-black/40'
                }`}
                aria-label={`Jump to step ${idx + 1}: ${s.shortName}`}
                title={`Step ${idx + 1}: ${s.shortName}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
