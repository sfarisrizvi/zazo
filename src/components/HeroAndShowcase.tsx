'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollBackground } from '@/components/ScrollBackgroundContext';
import CardStackAnimation from './CardStackAnimation';

interface StoryChapter {
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
  isCardStack?: boolean;
}

const chapters: StoryChapter[] = [
  {
    id: 'receive-usd',
    stepNumber: '01',
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
    stepNumber: '02',
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
    stepNumber: '03',
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
    stepNumber: '04',
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
    stepNumber: '05',
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
  {
    id: 'zazo-card',
    stepNumber: '06',
    shortName: 'Debit Card',
    badge: 'Zazo Card',
    headline: 'Zazo Card is the debit card\nthat works for you',
    description:
      'Bring your international earnings into the physical world. Spend locally with zero hidden fees, get weekly cash back offers, and customize a card designed for you.',
    bullets: [
      'No hidden or monthly fees ever',
      'Weekly custom cash back offers',
      'Real-time transaction alerts',
      'Card designs you can fully personalize',
    ],
    screenSrc: '/card-1.png',
    screenAlt: 'Zazo Debit Card Stack',
    metricLabel: 'Debit Card',
    metricValue: 'Rs 0 Fee',
    metricDetail: 'Physical + virtual debit card',
    isCardStack: true,
  },
];

// Sequence: black, white, green, black, white, black for the 6 chapters
const chapterThemes: ('black' | 'white' | 'green')[] = [
  'black', // 01 / 06: Receive USD
  'white', // 02 / 06: Convert Clarity
  'green', // 03 / 06: Spend QR
  'black', // 04 / 06: Send PKR
  'white', // 05 / 06: Activity Rewards
  'black', // 06 / 06: Zazo Card (Solid Black BG)
];

export default function HeroAndShowcase() {
  // activeIndex: 0 = Hero, 1..6 = Chapters 1..6 (Desktop)
  const [activeIndex, setActiveIndex] = useState(0);
  // mobileActiveIndex: 0..5 = Chapters 1..6 (Mobile)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [showTracker, setShowTracker] = useState(false);
  const { setTheme } = useScrollBackground();

  const heroRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Deterministic scroll tracker: synchronizes activeIndex, mobileActiveIndex, and theme with zero race condition
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const slideHeight = window.innerHeight - 74;
        const currentY = window.scrollY;
        // Total scroll range for the 7 slides (Hero + 6 Chapters)
        if (currentY <= slideHeight * 6.4) {
          const slideIdx = Math.max(0, Math.min(6, Math.round(currentY / slideHeight)));
          setActiveIndex(slideIdx);
          setShowTracker(slideIdx > 0 && currentY <= slideHeight * 6.2);
          const chThemes: ('black' | 'white' | 'green')[] = [
            'green',
            'black',
            'white',
            'green',
            'black',
            'white',
            'black',
          ];
          setTheme(chThemes[slideIdx]);
        } else {
          setShowTracker(false);
        }
      } else {
        // Mobile deterministic scroll tracking:
        const triggerY = window.innerHeight * 0.48;
        const heroEl = document.getElementById('mobile-hero');
        const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;

        if (heroBottom > triggerY) {
          setMobileActiveIndex(0);
          setTheme('green');
        } else {
          // Check which mobile chapter section currently crosses the trigger line
          let activeIdx = -1;
          for (let i = 0; i < chapters.length; i++) {
            const el = document.getElementById(`mobile-${chapters[i].id}`);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerY && rect.bottom > triggerY) {
                activeIdx = i;
                break;
              }
            }
          }

          if (activeIdx !== -1) {
            setMobileActiveIndex(activeIdx);
            setTheme(chapterThemes[activeIdx]);
          } else {
            // Check if user has scrolled past all mobile chapters
            const lastEl = document.getElementById(`mobile-${chapters[chapters.length - 1].id}`);
            if (lastEl) {
              const lastRect = lastEl.getBoundingClientRect();
              if (lastRect.bottom <= triggerY) {
                setMobileActiveIndex(chapters.length - 1);
              }
            }
          }
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [setTheme]);

  const jumpToChapter = (chapterIdx: number) => {
    setActiveIndex(chapterIdx + 1);
    setTheme(chapterThemes[chapterIdx]);
    const targetY = (chapterIdx + 1) * (window.innerHeight - 74);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const jumpToHero = () => {
    setActiveIndex(0);
    setTheme('green');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine current active screen and badges
  const isHero = activeIndex === 0;
  const currentChapter = !isHero ? chapters[activeIndex - 1] : null;
  const activeTheme = isHero ? 'green' : chapterThemes[activeIndex - 1] || 'black';

  const currentScreenSrc = isHero ? '/screens/home.png' : currentChapter?.screenSrc || '/screens/home.png';
  const currentScreenAlt = isHero ? 'Zazo Home Balances Screen' : currentChapter?.screenAlt || 'Zazo App Screen';

  const currentMobileChapter = chapters[mobileActiveIndex] || chapters[0];

  return (
    <div id="hero-and-showcase" data-hero-showcase className="relative w-full">
      {/* 
        ========================================================================
        DESKTOP EXPERIENCE (lg: and above)
        ========================================================================
        One single continuous phone starts right in the Hero and remains
        fixed in the center of the viewport across the entire scroll story!
      */}
      <div className="hidden lg:block relative w-full">
        
        {/* 
          Sticky Pinned Phone Layer:
          Pins from Hero (scrollY = 0) all the way through the 5 chapters!
        */}
        <div className="sticky top-[74px] h-[calc(100vh-74px)] w-full pointer-events-none flex items-center justify-center z-20 overflow-hidden px-8">
          <div className="relative mx-auto grid max-w-[1440px] w-full grid-cols-12 items-center">
            
            {/* Left Column Spacer (Cols 1-4) */}
            <div className="col-span-4" />

            {/* Center Pinned Phone Mockup or Card Stack (Cols 5-8) */}
            <div className="col-span-4 flex items-center justify-center relative min-h-[590px]">
              
              {/* Dynamic Bento Backdrop behind Phone (fades out when cards stack is active) */}
              <motion.div
                animate={{
                  opacity: currentChapter?.isCardStack ? 0 : 1,
                  backgroundColor:
                    activeTheme === 'black'
                      ? '#000000'
                      : activeTheme === 'green'
                      ? 'rgba(0,0,0,0.08)'
                      : 'rgba(0,0,0,0.04)',
                  borderColor:
                    activeTheme === 'black'
                      ? 'rgba(255,255,255,0.15)'
                      : activeTheme === 'green'
                      ? 'rgba(0,0,0,0.12)'
                      : 'rgba(0,0,0,0.08)',
                }}
                transition={{ duration: 0.4 }}
                className="absolute h-[590px] w-[390px] xl:w-[420px] rounded-[64px] border -z-10 shadow-2xl"
              />

              {/* Seamless Transformation: Phone transforms into Cards Stack */}
              <AnimatePresence mode="wait">
                {currentChapter?.isCardStack ? (
                  <motion.div
                    key="card-stack"
                    initial={{ opacity: 0, scale: 0.88, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-center justify-center pointer-events-auto"
                  >
                    <CardStackAnimation isRevealed={activeIndex === 6} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="iphone-frame"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-[305px] xl:w-[325px] aspect-[430/932] rounded-[48px] border-[10px] border-black bg-black overflow-hidden shadow-2xl select-none"
                  >
                    {/* Crossfading Authentic Figma Screen */}
                    <div className="relative h-full w-full bg-white overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentScreenSrc}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={currentScreenSrc}
                            alt={currentScreenAlt}
                            fill
                            priority
                            sizes="325px"
                            className="object-cover object-top"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Badges (Visible during Hero) */}
              <AnimatePresence>
                {isHero && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.9 }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-12 -left-10 xl:-left-14 z-30 w-[180px] xl:w-[195px] pointer-events-auto cursor-pointer"
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

                    <motion.div
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.9 }}
                      transition={{ duration: 0.35 }}
                      className="absolute top-16 -right-10 xl:-right-14 z-30 w-[180px] xl:w-[195px] pointer-events-auto cursor-pointer"
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
                  </>
                )}
              </AnimatePresence>

            </div>

            {/* Right Column Spacer (Cols 9-12) */}
            <div className="col-span-4" />

          </div>
        </div>

        {/* 
          ======================================================================
          SCROLLING CONTENT LAYERS (Overlaid over Sticky Phone via -mt)
          ======================================================================
        */}
        <div className="relative -mt-[calc(100vh-74px)] z-10">
          
          {/* 
            SLIDE 0: HERO SECTION (Full-bleed Green Canvas)
          */}
          <div
            ref={heroRef}
            id="hero"
            data-snap-point
            data-snap-id="hero"
            data-theme-bg="green"
            className="snap-section-top relative flex h-[calc(100vh-74px)] items-center bg-transparent text-black px-8"
          >
            <div className="mx-auto grid max-w-[1440px] w-full grid-cols-12 items-center gap-8">
              
              {/* Left Column: H1 Headline & Actions */}
              <div className="col-span-4 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <h1 className="text-[44px] xl:text-[54px] leading-[46px] xl:leading-[56px] tracking-[-1.6px] font-normal text-black m-0">
                    Get paid in USD.
                    <br />
                    Spend in PKR.
                  </h1>

                  <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/20 bg-black/5 px-4 py-1.5 text-[13px] tracking-[-0.26px] text-black font-normal">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    <span>USD and PKR now. EUR, GBP, and AED planned.</span>
                  </div>

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
                    <button
                      onClick={() => jumpToChapter(0)}
                      className="btn-pill btn-secondary-green cursor-pointer"
                    >
                      See how it works ↓
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Center Spacer: Transparent window for the pinned phone */}
              <div className="col-span-4 h-full pointer-events-none" />

              {/* Right Column: Lead copy & Overview Card */}
              <div className="col-span-4 flex flex-col justify-center pl-4 xl:pl-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <p className="text-[20px] xl:text-[23px] leading-[28px] xl:leading-[31px] tracking-[-0.7px] font-normal text-black m-0">
                    Bring international income and everyday spending together in one unified app. Receive client funds, convert with zero hidden markup, and spend locally anywhere.
                  </p>

                  <div className="rounded-[32px] border border-black/15 bg-black/5 p-6 backdrop-blur-sm">
                    <span className="text-[12px] uppercase tracking-[-0.24px] text-black/60 font-normal">
                      Connected Journey
                    </span>
                    <div className="mt-3 flex flex-col gap-2.5">
                      <div className="flex items-center gap-2.5 text-[14px] text-black">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#6CFF94] text-[11px] font-mono">1</span>
                        <span>Receive USD via dedicated ACH details</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[14px] text-black">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#6CFF94] text-[11px] font-mono">2</span>
                        <span>0% hidden spread real-time quote</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-[14px] text-black">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#6CFF94] text-[11px] font-mono">3</span>
                        <span>Instant Raast domestic transfers & QR pay</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* 
            SLIDES 1 TO 5: THE 5 HOW-IT-WORKS CHAPTERS (Fixed background transitions: black, white, green, black, green)
          */}
          <div id="how-it-works" className="relative w-full bg-transparent">
            {chapters.map((chapter, index) => {
              const isCurrent = activeIndex === index + 1;
              const chTheme = chapterThemes[index];

              return (
                <div
                  key={chapter.id}
                  id={chapter.id}
                  data-snap-point
                  data-snap-id={chapter.id}
                  data-theme-bg={chTheme}
                  ref={(el) => {
                    chapterRefs.current[index] = el;
                  }}
                  className="snap-section relative flex h-[calc(100vh-74px)] items-center px-8"
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
                          <span
                            className={`text-[13px] tracking-[-0.26px] font-normal uppercase ${
                              chTheme === 'black'
                                ? 'text-[#888888]'
                                : chTheme === 'white'
                                ? 'text-[#666666]'
                                : 'text-black/60'
                            }`}
                          >
                            Step {chapter.stepNumber} of 06
                          </span>
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              chTheme === 'black' ? 'bg-white/20' : 'bg-black/20'
                            }`}
                          />
                          <span
                            className={`inline-flex h-7 items-center rounded-full px-3 text-[12px] tracking-[-0.24px] font-normal ${
                              chTheme === 'black'
                                ? 'bg-[#6CFF94]/20 border border-[#6CFF94]/30 text-[#6CFF94]'
                                : chTheme === 'white'
                                ? 'bg-black/5 border border-black/15 text-black'
                                : 'bg-black/10 border border-black/20 text-black'
                            }`}
                          >
                            {chapter.badge}
                          </span>
                        </div>

                        {/* Main Heading */}
                        <h2
                          className={`whitespace-pre-line text-[38px] xl:text-[42px] leading-[42px] xl:leading-[46px] tracking-[-1.3px] font-normal m-0 ${
                            chTheme === 'black' ? 'text-white' : 'text-black'
                          }`}
                        >
                          {chapter.headline}
                        </h2>

                        {/* Subtitle / Description */}
                        <p
                          className={`text-[16px] xl:text-[17px] leading-[25px] tracking-[-0.51px] font-normal m-0 ${
                            chTheme === 'black'
                              ? 'text-[#A3A3A3]'
                              : chTheme === 'white'
                              ? 'text-[#555555]'
                              : 'text-black/80'
                          }`}
                        >
                          {chapter.description}
                        </p>

                        {/* Feature Bullets & CTA for Standard Chapters 1-5 */}
                        {!chapter.isCardStack && (
                          <>
                            <ul className="mt-1 flex flex-col gap-2.5 pl-0 list-none m-0">
                              {chapter.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className={`flex items-start gap-2.5 text-[14px] xl:text-[15px] leading-[21px] tracking-[-0.45px] ${
                                    chTheme === 'black'
                                      ? 'text-white/90'
                                      : chTheme === 'white'
                                      ? 'text-black/90'
                                      : 'text-black'
                                  }`}
                                >
                                  <div
                                    className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                                      chTheme === 'black'
                                        ? 'bg-[#6CFF94] text-black'
                                        : 'bg-black text-[#6CFF94]'
                                    }`}
                                  >
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
                                className={`btn-pill inline-flex items-center gap-2 font-medium ${
                                  chTheme === 'black'
                                    ? 'bg-[#6CFF94] text-black hover:bg-[#5CE883]'
                                    : 'bg-black text-white hover:bg-black/85'
                                }`}
                              >
                                <span>Join the Waitlist</span>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* CENTER SPACER: Transparent gap so sticky phone or cards stack is visible (Cols 5-8) */}
                    <div className="col-span-4 h-full pointer-events-none" />

                    {/* RIGHT COLUMN: Metric Card (Chapters 1-5) OR Feature Bullets + Meet Zazo Card CTA (Chapter 6) */}
                    <div className="col-span-4 flex flex-col justify-center pl-4 xl:pl-8">
                      <div
                        className={`flex flex-col gap-6 transition-all duration-500 ${
                          isCurrent
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-30 translate-x-4'
                        }`}
                      >
                        {chapter.isCardStack ? (
                          <div className="flex flex-col gap-6">
                            <ul className="flex flex-col gap-3.5 pl-0 list-none m-0">
                              {chapter.bullets.map((bullet, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-3 text-[15px] xl:text-[16px] leading-[22px] tracking-[-0.45px] text-white/95"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="pt-3">
                              <a
                                href="#waitlist"
                                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-7 py-3 text-[14px] font-medium text-white transition-all hover:bg-white hover:text-black hover:border-white shadow-lg"
                              >
                                Meet Zazo Card
                              </a>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div
                              className={`rounded-[40px] p-8 max-w-sm backdrop-blur-sm ${
                                chTheme === 'black'
                                  ? 'border border-white/15 bg-black'
                                  : chTheme === 'white'
                                  ? 'border border-black/10 bg-black/[0.03] shadow-sm'
                                  : 'border border-black/15 bg-black/5'
                              }`}
                            >
                              <span
                                className={`text-[12px] uppercase tracking-[-0.24px] font-normal ${
                                  chTheme === 'black'
                                    ? 'text-[#888888]'
                                    : chTheme === 'white'
                                    ? 'text-[#666666]'
                                    : 'text-black/60'
                                }`}
                              >
                                {chapter.metricLabel}
                              </span>
                              <div
                                className={`mt-3 text-[38px] xl:text-[42px] leading-none tracking-[-1.32px] font-normal ${
                                  chTheme === 'black' ? 'text-white' : 'text-black'
                                }`}
                              >
                                {chapter.metricValue}
                              </div>
                              <div
                                className={`mt-3 pt-3 text-[13px] tracking-[-0.26px] font-normal ${
                                  chTheme === 'black'
                                    ? 'border-t border-white/10 text-[#A3A3A3]'
                                    : chTheme === 'white'
                                    ? 'border-t border-black/10 text-[#555555]'
                                    : 'border-t border-black/15 text-black/75'
                                }`}
                              >
                                {chapter.metricDetail}
                              </div>
                            </div>

                            <div
                              className={`text-[13px] leading-[20px] tracking-[-0.26px] max-w-sm ${
                                chTheme === 'black'
                                  ? 'text-[#666666]'
                                  : chTheme === 'white'
                                  ? 'text-[#888888]'
                                  : 'text-black/60'
                              }`}
                            >
                              Authentic Figma app UI • Mobile stays centered while outer chapters scroll past.
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* 
        ========================================================================
        MOBILE EXPERIENCE (< lg screens)
        ========================================================================
        On mobile viewports, the Hero presents the phone with green background.
        Below it, How It Works provides a sleek tabbed interface so text never
        collides with the phone.
      */}
      <div className="block lg:hidden">
        
        {/* Mobile Hero */}
        <section
          id="mobile-hero"
          data-snap-point
          data-snap-id="mobile-hero"
          data-theme-bg="green"
          className="snap-section-top bg-transparent text-black px-5 pt-10 pb-16"
        >
          <div className="mx-auto max-w-md flex flex-col gap-6">
            <h1 className="text-[36px] leading-[38px] tracking-[-1.1px] font-normal text-black m-0">
              Get paid in USD.
              <br />
              Spend in PKR.
            </h1>

            <p className="text-[18px] leading-[25px] tracking-[-0.54px] font-normal text-black m-0">
              Bring international income and everyday spending together in one app. Receive payments, understand your conversion, and explore local payments with Zazo.
            </p>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/20 bg-black/5 px-3.5 py-1 text-[12px] text-black font-normal">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              <span>USD and PKR now. EUR, GBP, and AED planned.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#waitlist" className="btn-pill btn-cta-arrow inline-flex items-center gap-2">
                <span>Join the Waitlist</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#how-it-works-mobile" className="btn-pill btn-secondary-green">
                See how it works
              </a>
            </div>

            {/* Mobile Hero Phone with Badges */}
            <div className="relative mx-auto mt-6 flex items-center justify-center">
              <div className="absolute h-[510px] w-[310px] rounded-[52px] bg-black/5 -z-10" />

              <div className="relative w-[270px] aspect-[430/932] rounded-[44px] border-[9px] border-black bg-black overflow-hidden shadow-xl select-none">
                <div className="relative h-full w-full bg-white">
                  <Image
                    src="/screens/home.png"
                    alt="Zazo App Home Screen with real balances"
                    fill
                    priority
                    sizes="270px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute bottom-8 -left-3 z-30 w-[140px]">
                <Image
                  src="/badges/badge_usd_received.png"
                  alt="USD received +$500.00"
                  width={420}
                  height={160}
                  className="h-auto w-full drop-shadow-md"
                />
              </div>
              <div className="absolute top-12 -right-3 z-30 w-[140px]">
                <Image
                  src="/badges/badge_discount.png"
                  alt="Discount earned +Rs 125.00"
                  width={420}
                  height={160}
                  className="h-auto w-full drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile How It Works: Sticky Phone on Top + Snap Scrolling Text Info Cards Underneath */}
        <div id="how-it-works-mobile" className="relative w-full">
          
          {/* Pinned / Sticky Top Mobile Mockup Area (Sticky right under 74px navbar) */}
          <div className="sticky top-[74px] z-20 w-full h-[52vh] max-h-[480px] min-h-[340px] flex items-center justify-center px-4 pointer-events-none">
            {/* Seamless Phone to Cards Transformation on Step 6 */}
            <AnimatePresence mode="wait">
              {currentMobileChapter.isCardStack ? (
                <motion.div
                  key="mobile-cards-stack"
                  initial={{ opacity: 0, scale: 0.88, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-center pointer-events-auto"
                >
                  <CardStackAnimation isRevealed={true} />
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-phone-frame"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-[96%] max-h-[455px] aspect-[430/932] rounded-[42px] border-[8px] border-[#181818] bg-black overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.4)] select-none"
                >
                  {/* Crossfading Screen (Authentic Figma Screen with its built-in status bar and dynamic island) */}
                  <div className="relative h-full w-full bg-white overflow-hidden">
                    <AnimatePresence mode="sync">
                      <motion.div
                        key={currentMobileChapter.screenSrc}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={currentMobileChapter.screenSrc}
                          alt={currentMobileChapter.screenAlt}
                          fill
                          priority
                          sizes="280px"
                          className="object-cover object-top"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scrolling Story Layers: 6 Snap Sections with Info Cards under the Phone */}
          <div className="relative -mt-[52vh] z-10 w-full">
            {chapters.map((chapter, index) => {
              const chTheme = chapterThemes[index];
              const isCurrent = mobileActiveIndex === index;

              return (
                <div
                  key={chapter.id}
                  id={`mobile-${chapter.id}`}
                  data-snap-point
                  data-snap-id={`mobile-${chapter.id}`}
                  data-theme-bg={chTheme}
                  data-chapter-index={index}
                  className="snap-section relative flex flex-col justify-end min-h-[calc(100vh-74px)] px-4 sm:px-6 pb-8 pt-3"
                >
                  {/* Spacer ensuring Info Card aligns right under sticky phone */}
                  <div className="h-[52vh] max-h-[480px] min-h-[340px] shrink-0 pointer-events-none" />

                  {/* Text Info Card Matching User Reference Screenshot */}
                  <div
                    className={`w-full max-w-md mx-auto rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 transition-all duration-300 shadow-2xl ${
                      isCurrent ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98]'
                    } ${
                      chTheme === 'black'
                        ? 'bg-[#141414] border border-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                        : chTheme === 'white'
                        ? 'bg-[#F5F5F7] border border-black/10 text-black shadow-[0_15px_40px_rgba(0,0,0,0.08)]'
                        : 'bg-black/10 border border-black/20 text-black shadow-xl backdrop-blur-md'
                    }`}
                  >
                    {/* Pill Badges Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[-0.2px] ${
                            chTheme === 'black'
                              ? 'bg-[#6CFF94]/20 border border-[#6CFF94]/30 text-[#6CFF94]'
                              : chTheme === 'white'
                              ? 'bg-black/5 border border-black/15 text-black'
                              : 'bg-black/10 border border-black/20 text-black'
                          }`}
                        >
                          Step {chapter.stepNumber}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-[-0.2px] ${
                            chTheme === 'black'
                              ? 'bg-white/10 border border-white/15 text-white/90'
                              : 'bg-black/5 border border-black/10 text-black/80'
                          }`}
                        >
                          {chapter.badge}
                        </span>
                      </div>

                      <span
                        className={`text-[12px] font-mono tracking-tight ${
                          chTheme === 'black' ? 'text-white/60' : 'text-black/60'
                        }`}
                      >
                        {index + 1} / {chapters.length}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3
                      className={`mt-3 text-[22px] sm:text-[25px] leading-[26px] sm:leading-[29px] font-normal tracking-[-0.7px] m-0 whitespace-pre-line ${
                        chTheme === 'black' ? 'text-white' : 'text-black'
                      }`}
                    >
                      {chapter.headline}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-2 text-[14px] leading-[20px] tracking-[-0.4px] font-normal m-0 ${
                        chTheme === 'black'
                          ? 'text-white/75'
                          : chTheme === 'white'
                          ? 'text-[#444444]'
                          : 'text-black/80'
                      }`}
                    >
                      {chapter.description}
                    </p>

                    {/* Details / Bullets / CTA */}
                    {chapter.isCardStack ? (
                      <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-col gap-2.5">
                        <ul className="flex flex-col gap-1.5 pl-0 list-none m-0">
                          {chapter.bullets.slice(0, 3).map((b, i) => (
                            <li key={i} className="flex items-center gap-2 text-[13px] text-white/90">
                              <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                              <span className="truncate">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-1">
                          <a
                            href="#waitlist"
                            className="btn-pill inline-flex items-center justify-center w-full py-2.5 text-center font-medium bg-[#6CFF94] text-black hover:bg-[#5CE883] text-[13px]"
                          >
                            Meet Zazo Card
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 pt-2.5 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span
                            className={`text-[10px] uppercase tracking-[-0.2px] ${
                              chTheme === 'black' ? 'text-white/50' : 'text-black/50'
                            }`}
                          >
                            {chapter.metricLabel}
                          </span>
                          <span
                            className={`text-[16px] font-normal tracking-[-0.5px] ${
                              chTheme === 'black' ? 'text-white' : 'text-black'
                            }`}
                          >
                            {chapter.metricValue}
                          </span>
                        </div>
                        <a
                          href="#waitlist"
                          className={`btn-pill px-5 py-2 text-[12px] font-medium transition-all ${
                            chTheme === 'black'
                              ? 'bg-[#6CFF94] text-black hover:bg-[#5CE883]'
                              : 'bg-black text-white hover:bg-black/85'
                          }`}
                        >
                          Join Waitlist
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 
        ========================================================================
        FLOATING STEP TRACKER (Active when scrolled into chapters)
        ========================================================================
      */}
      <AnimatePresence>
        {showTracker && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-black/85 backdrop-blur-md px-4 py-2.5 shadow-2xl select-none"
          >
            <button
              onClick={jumpToHero}
              className="text-[12px] font-normal tracking-[-0.24px] text-white/70 hover:text-[#6CFF94] transition-colors mr-2 cursor-pointer"
            >
              ↑ Top
            </button>
            <span className="text-[12px] font-mono tracking-[-0.24px] text-[#888888] mr-1">
              {activeIndex} / {chapters.length}
            </span>
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => jumpToChapter(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx + 1
                    ? 'w-8 bg-[#6CFF94]'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Jump to step ${idx + 1}: ${ch.shortName}`}
                title={`Step ${idx + 1}: ${ch.shortName}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
