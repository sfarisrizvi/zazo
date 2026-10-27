'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollBackground, ThemeType } from '@/components/ScrollBackgroundContext';
import Logo from './Logo';

/**
 * Authentic Zazo Logo Mark component rendered directly from public/zazo.svg
 * Allows dynamic fill color transitions across chapters.
 */
function ZazoLogoMark({ color = 'currentColor', className = '' }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 129 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <path
        d="M37.1263 21.8999L23.5848 45.3545L85.8794 45.8838L68.4545 76.0646L110.426 75.9278L125.271 50.2169C126.553 47.9964 124.965 45.2178 122.401 45.1943L92.5336 44.9211L78.1814 18.7671C77.0097 16.6319 74.7711 15.3012 72.3356 15.292L48.7763 15.203C43.9731 15.1849 39.5279 17.7401 37.1263 21.8999Z"
        fill="currentColor"
      />
      <path
        d="M91.2236 109.673L104.765 86.2182L42.4706 85.6888L59.8954 55.5081L17.9236 55.6449L3.07941 81.3557C1.79738 83.5763 3.38469 86.3548 5.94864 86.3783L35.8163 86.6515L50.1686 112.806C51.3403 114.941 53.5788 116.271 56.0143 116.281L79.5736 116.37C84.3768 116.388 88.822 113.832 91.2236 109.673Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface StoryChapter {
  id: string;
  stepNumber: string;
  shortName: string;
  badge: string;
  headline: string;
  description: string;
  screenSrc: string;
  screenAlt: string;
  logoColor: string;
  theme: ThemeType;
  metricLabel: string;
  metricValue: string;
  metricDetail: string;
}

// User-specified background combinations:
// Slide 0 (Hero): Green
// Slide 1 (Step 01): White
// Slide 2 (Step 02): Black
// Slide 3 (Step 03): White
// Slide 4 (Step 04): Green
// Slide 5 (Step 05): White
// Slide 6 (Step 06): Black (already)
export const allThemes: ThemeType[] = [
  'green', // 0: Hero
  'white', // 1: Receive USD
  'black', // 2: Convert Clarity
  'white', // 3: QR Pay
  'green', // 4: Send PKR
  'white', // 5: Rewards
  'black', // 6: Zazo Card
];

const chapters: StoryChapter[] = [
  {
    id: 'receive-usd',
    stepNumber: '01',
    shortName: 'Receive USD',
    badge: 'Global Receiving',
    headline: 'Get paid beyond borders.',
    description:
      'Whether you work with international clients or receive money from abroad, Zazo aims to connect supported incoming payments with the way you use money locally.',
    screenSrc: '/screens/receive_usd.png',
    screenAlt: 'Zazo USD Receiving Account Details Screen',
    logoColor: '#0066FF', // Vibrant Royal Blue on White BG
    theme: 'white',
    metricLabel: 'Standard Wire Fee',
    metricValue: '$0.00',
    metricDetail: 'Zero Intermediary Deductions',
  },
  {
    id: 'convert-clarity',
    stepNumber: '02',
    shortName: 'Convert',
    badge: 'Conversion Clarity',
    headline: 'Know your conversion\nbefore you confirm.',
    description:
      'Review the quoted rate, applicable fees, and expected local-currency amount before confirming.',
    screenSrc: '/screens/convert.png',
    screenAlt: 'Zazo Currency Conversion Review Screen',
    logoColor: '#FFE600', // Vibrant Neon Yellow on Black BG
    theme: 'black',
    metricLabel: 'Guaranteed Quote',
    metricValue: '278.40',
    metricDetail: 'PKR per USD • 0% Hidden Spread',
  },
  {
    id: 'spend-qr',
    stepNumber: '03',
    shortName: 'QR Pay',
    badge: 'Local Spending',
    headline: 'Put your money\nto work locally.',
    description:
      'Use your PKR balance for supported local payments, merchant QR checkouts, and transfers.',
    screenSrc: '/screens/scan_qr.png',
    screenAlt: 'Zazo Scan to Pay QR Code Detected Screen',
    logoColor: '#FF1493', // Deep Hot Magenta on White BG
    theme: 'white',
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
      'Send funds in seconds using a phone number, $zazotag, or domestic IBAN via Raast.',
    screenSrc: '/screens/send_pkr.png',
    screenAlt: 'Zazo Send PKR Saved Beneficiaries Screen',
    logoColor: '#000000', // Sleek Bold Black on Signature Green BG
    theme: 'green',
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
      'Explore how Zazo rewards may apply to eligible balances, payments, or activity, with the conditions explained clearly.',
    screenSrc: '/screens/discounts.png',
    screenAlt: 'Zazo Activity Discounts and Rewards Tier Screen',
    logoColor: '#7C3AED', // Electric Violet on White BG
    theme: 'white',
    metricLabel: 'Daily Cashback',
    metricValue: 'Up to 7%',
    metricDetail: 'Level 3 Reward Tier Active',
  },
  {
    id: 'zazo-card',
    stepNumber: '06',
    shortName: 'Debit Card',
    badge: 'Zazo Card',
    headline: 'Zazo Card is the debit card\nthat works for you.',
    description:
      'Bring international earnings into the physical world with zero hidden fees and customizable card designs.',
    screenSrc: '/screens/home.png',
    screenAlt: 'Zazo Debit Card Stack',
    logoColor: '#6CFF94', // Accent Green on Black BG
    theme: 'black',
    metricLabel: 'Debit Card',
    metricValue: 'Rs 0 Fee',
    metricDetail: 'Physical + virtual debit card',
  },
];

export default function HeroAndShowcase() {
  // activeIndex: 0 = Hero, 1..6 = Chapters 1..6 (Desktop)
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTracker, setShowTracker] = useState(false);
  const { setTheme } = useScrollBackground();

  const heroRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Synchronize activeIndex and background theme on scroll with zero blocking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const slideHeight = window.innerHeight - 74;
        const currentY = window.scrollY;

        // Total scroll range for 7 slides (Hero + 6 Chapters)
        if (currentY <= slideHeight * 6.5) {
          const slideIdx = Math.max(0, Math.min(6, Math.round(currentY / slideHeight)));
          setActiveIndex(slideIdx);
          setShowTracker(slideIdx >= 1 && currentY <= slideHeight * 6.2);
          setTheme(allThemes[slideIdx] || 'black');
        } else {
          setShowTracker(false);
          // Scrolled past Hero & Showcase journey; let subsequent sections manage theme
        }
      } else {
        // Mobile scroll tracking for stacking cards: switch theme as card arrives at the 74px navbar
        const triggerY = 85;
        const container = document.getElementById('hero-and-showcase');
        const containerRect = container ? container.getBoundingClientRect() : null;

        // If scrolled past the hero & showcase section, hand off theme control completely
        if (containerRect && containerRect.bottom <= triggerY) {
          return;
        }

        let activeIdx = -1;
        for (let i = chapters.length - 1; i >= 0; i--) {
          const el = document.getElementById(`mobile-${chapters[i].id}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerY) {
              activeIdx = i;
              break;
            }
          }
        }

        if (activeIdx >= 0) {
          setActiveIndex(activeIdx + 1);
          setTheme(allThemes[activeIdx + 1] || 'black');
        } else {
          setActiveIndex(0);
          setTheme('green');
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
    const targetSlide = chapterIdx + 1;
    setActiveIndex(targetSlide);
    setTheme(allThemes[targetSlide]);
    const targetY = targetSlide * (window.innerHeight - 74);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('zazo-smooth-scroll', { detail: { targetY } }));
    }
  };

  const jumpToHero = () => {
    setActiveIndex(0);
    setTheme('green');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('zazo-smooth-scroll', { detail: { targetY: 0 } }));
    }
  };

  const isIntro = activeIndex === 0;
  const isShowcase = activeIndex >= 1;
  const currentChapterIdx = isShowcase ? activeIndex - 1 : 0;
  const currentChapter = isShowcase ? chapters[currentChapterIdx] : null;
  const currentTheme = allThemes[activeIndex] || 'green';

  // Logo color behind the phone
  const currentLogoColor = isIntro ? '#000000' : currentChapter?.logoColor || '#6CFF94';

  return (
    <div id="hero-and-showcase" data-hero-showcase className="relative w-full">
      {/* 
        ========================================================================
        DESKTOP EXPERIENCE (lg: and above)
        One single continuous phone pinned in the center across Hero & Chapters!
        Multi-colored zazo.svg logo directly on the back of the phone!
        ========================================================================
      */}
      <div className="hidden lg:block relative w-full">
        
        {/* Sticky Pinned Phone Layer */}
        <div className="sticky top-[74px] h-[calc(100vh-74px)] w-full pointer-events-none flex items-center justify-between z-20 overflow-hidden px-6 lg:px-10 xl:px-16 2xl:px-24">
          
          {/* Left Zone Spacer (Mirrors the exact left zone width) */}
          <div className="flex-1 flex justify-center items-center pointer-events-none" />

          {/* Center Zone: Dead Center Dynamic Phone & Symmetrically Centered Top Logo / Bottom Button */}
          <div className="w-[320px] lg:w-[360px] xl:w-[410px] 2xl:w-[450px] shrink-0 h-full flex flex-col items-center justify-between relative py-0">
            
            {/* TOP SPACE: Centered precisely in the space between section top edge and phone top */}
            <div className="flex-1 w-full flex items-center justify-center z-30">
              <AnimatePresence>
                {isIntro && (
                  <motion.div
                    key="hero-top-logo"
                    initial={{ opacity: 0, y: -12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.95, transition: { duration: 0.25 } }}
                    className="flex items-center justify-center pointer-events-auto"
                  >
                    <Logo height={42} className="text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CENTER PHONE FRAME + BACKGROUND LOGO (Dynamic & Proportional) */}
            <div className="relative shrink-0 flex items-center justify-center my-auto">
              
              {/* 
                VIBRANT MULTI-COLORED ZAZO.SVG LOGO ON THE BACK OF THE PHONE!
                Dynamically scaled in exact lockstep (0.72 ratio) with the phone chassis.
              */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none flex items-center justify-center">
                <motion.div
                  key={currentLogoColor}
                  initial={{ opacity: 0.65, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    filter:
                      currentTheme === 'green'
                        ? 'none'
                        : currentTheme === 'black'
                        ? `drop-shadow(0 0 50px ${currentLogoColor}45)`
                        : `drop-shadow(0 0 40px ${currentLogoColor}30)`,
                  }}
                >
                  <ZazoLogoMark
                    color={currentLogoColor}
                    className="w-[clamp(312px,58vh,624px)] h-[clamp(312px,58vh,624px)] transition-colors duration-500"
                  />
                </motion.div>
              </div>

              {/* Authentic Phone Chassis in Center (Dynamic based on screen height) */}
              <div className="relative h-[clamp(360px,67vh,720px)] w-auto aspect-[430/932] rounded-[38px] xl:rounded-[44px] border-[8px] xl:border-[10px] border-black bg-black overflow-hidden shadow-2xl z-10 select-none">
                {/* Cross-fading screen inside the phone (Dynamic Island removed) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isIntro ? 'hero-screen' : currentChapter?.screenSrc || 'screen'}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={isIntro ? '/screens/home.png' : currentChapter?.screenSrc || '/screens/home.png'}
                      alt={isIntro ? 'Zazo App Home Screen' : currentChapter?.screenAlt || 'Zazo Screen'}
                      fill
                      priority
                      sizes="345px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating 2 Badge Cards (Visible ONLY on Hero; Fades out upon scrolling to chapters) */}
              <AnimatePresence>
                {isIntro && (
                  <>
                    {/* Bottom-Left Card: USD Received */}
                    <motion.div
                      key="badge-usd"
                      initial={{ opacity: 0, x: -30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1, y: [0, 6, 0] }}
                      exit={{ opacity: 0, x: -20, scale: 0.85 }}
                      transition={{
                        opacity: { duration: 0.35 },
                        x: { duration: 0.35 },
                        scale: { duration: 0.35 },
                        y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                      }}
                      className="absolute bottom-10 -left-16 xl:-left-20 z-30 w-[190px] xl:w-[215px] pointer-events-auto cursor-pointer"
                    >
                      <Image
                        src="/badges/badge_usd_received.png"
                        alt="USD received +$500.00"
                        width={420}
                        height={160}
                        priority
                        className="h-auto w-full drop-shadow-2xl"
                      />
                    </motion.div>

                    {/* Top-Right Card: Discount Earned */}
                    <motion.div
                      key="badge-discount"
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }}
                      exit={{ opacity: 0, x: 20, scale: 0.85 }}
                      transition={{
                        opacity: { duration: 0.35 },
                        x: { duration: 0.35 },
                        scale: { duration: 0.35 },
                        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                      }}
                      className="absolute top-14 -right-16 xl:-right-20 z-30 w-[190px] xl:w-[215px] pointer-events-auto cursor-pointer"
                    >
                      <Image
                        src="/badges/badge_discount.png"
                        alt="Discount earned +Rs 125.00"
                        width={420}
                        height={160}
                        priority
                        className="h-auto w-full drop-shadow-2xl"
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

            </div>

            {/* BOTTOM SPACE: Centered precisely in the space between phone bottom and section bottom */}
            <div className="flex-1 w-full flex items-center justify-center z-30">
              <AnimatePresence>
                {isIntro && (
                  <motion.div
                    key="hero-bottom-waitlist"
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95, transition: { duration: 0.25 } }}
                    className="flex items-center justify-center pointer-events-auto"
                  >
                    <a
                      href="#waitlist"
                      className="inline-flex h-[52px] items-center justify-center rounded-full bg-black px-8 text-[15px] font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-black/90 tracking-[-0.2px]"
                    >
                      Join Waitlist
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right Zone Spacer (Mirrors the exact right zone width) */}
          <div className="flex-1 flex justify-center items-center pointer-events-none" />

        </div>

        {/* 
          ======================================================================
          SCROLLING CONTENT LAYERS (Overlaid over Sticky Phone via -mt)
          Slide 0: Hero (Green)
          Slide 1: Receive USD (White)
          Slide 2: Convert (Black)
          Slide 3: QR Pay (White)
          Slide 4: Send PKR (Green)
          Slide 5: Rewards (White)
          Slide 6: Zazo Card (Black)
          ======================================================================
        */}
        <div className="relative -mt-[calc(100vh-74px)] z-10">
          
          {/* 
            SLIDE 0: HERO SECTION (Screen in center + 2 cards around it, ZERO text)
          */}
          <div
            ref={heroRef}
            id="hero"
            data-snap-point
            data-snap-id="hero"
            data-theme-bg="green"
            className="snap-section-top relative flex h-[calc(100vh-74px)] items-center justify-center bg-transparent text-black px-8"
          >
            {/* Pure visual presentation: phone & badges handled by pinned center layer */}
          </div>

          {/* 
            SLIDES 1 TO 6: THE 6 HOW-IT-WORKS CHAPTERS (Minimal Narrative & Metrics)
          */}
          <div id="how-it-works" className="relative w-full bg-transparent">
            {chapters.map((chapter, index) => {
              const slideIndex = index + 1;
              const isCurrent = activeIndex === slideIndex;
              const chTheme = allThemes[slideIndex];
              const isDark = chTheme === 'black';
              const isGreen = chTheme === 'green';

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
                  className="snap-section relative flex h-[calc(100vh-74px)] items-center px-6 lg:px-10 xl:px-16 2xl:px-24"
                >
                  <div className="w-full flex items-center justify-between">
                    
                    {/* LEFT ZONE: Exactly centered in the space between left screen edge and phone */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-[440px] text-left">
                        <div
                          className={`flex flex-col gap-4 transition-all duration-500 ${
                            isCurrent ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-2'
                          }`}
                        >
                          {/* Step indicator & Badge */}
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-[13px] tracking-[-0.26px] font-normal uppercase ${
                                isDark
                                  ? 'text-[#888888]'
                                  : isGreen
                                  ? 'text-black/60'
                                  : 'text-[#666666]'
                              }`}
                            >
                              Step {chapter.stepNumber} of 06
                            </span>
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                isDark ? 'bg-white/20' : 'bg-black/20'
                              }`}
                            />
                            <span
                              className="inline-flex h-7 items-center rounded-full px-3 text-[12px] tracking-[-0.24px] font-normal border transition-colors duration-500"
                              style={{
                                backgroundColor: isGreen
                                  ? 'rgba(0, 0, 0, 0.08)'
                                  : `${chapter.logoColor}18`,
                                borderColor: isGreen
                                  ? 'rgba(0, 0, 0, 0.2)'
                                  : `${chapter.logoColor}40`,
                                color: isGreen ? '#000000' : chapter.logoColor,
                              }}
                            >
                              {chapter.badge}
                            </span>
                          </div>

                          {/* Main Heading */}
                          <h2
                            className={`whitespace-pre-line text-[38px] xl:text-[44px] leading-[42px] xl:leading-[48px] tracking-[-1.3px] font-normal m-0 ${
                              isDark ? 'text-white' : 'text-black'
                            }`}
                          >
                            {chapter.headline}
                          </h2>

                          {/* 1-Liner Description */}
                          <p
                            className={`text-[16px] xl:text-[18px] leading-[26px] tracking-[-0.51px] font-normal m-0 ${
                              isDark
                                ? 'text-[#A3A3A3]'
                                : isGreen
                                ? 'text-black/85'
                                : 'text-[#555555]'
                            }`}
                          >
                            {chapter.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CENTER ZONE SPACER: Exact matching width of center phone */}
                    <div className="w-[320px] lg:w-[360px] xl:w-[410px] 2xl:w-[450px] shrink-0 h-full pointer-events-none" />

                    {/* RIGHT ZONE: Exactly centered in the space between phone and right screen edge */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-full max-w-[360px]">
                        <div
                          className={`flex flex-col gap-6 transition-all duration-500 ${
                            isCurrent
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-20 translate-x-3'
                          }`}
                        >
                          <div
                            className={`rounded-[36px] p-8 max-w-sm backdrop-blur-md border transition-all duration-500 ${
                              isDark
                                ? 'border-white/10 bg-white/[0.04]'
                                : isGreen
                                ? 'border-black/15 bg-black/5'
                                : 'border-black/10 bg-black/[0.03] shadow-sm'
                            }`}
                            style={{
                              boxShadow: isCurrent && isDark ? `0 0 30px ${chapter.logoColor}15` : undefined,
                            }}
                          >
                            <span
                              className={`text-[12px] uppercase tracking-[-0.24px] font-normal block ${
                                isDark
                                  ? 'text-[#888888]'
                                  : isGreen
                                  ? 'text-black/60'
                                  : 'text-[#666666]'
                              }`}
                            >
                              {chapter.metricLabel}
                            </span>
                            <div
                              className={`mt-3 text-[38px] xl:text-[44px] leading-none tracking-[-1.32px] font-normal transition-colors duration-500 ${
                                isGreen ? 'text-black' : ''
                              }`}
                              style={{
                                color: isGreen ? undefined : chapter.logoColor,
                              }}
                            >
                              {chapter.metricValue}
                            </div>
                            <div
                              className={`mt-3 pt-3 border-t text-[13px] tracking-[-0.26px] font-normal ${
                                isDark
                                  ? 'border-white/10 text-[#A3A3A3]'
                                  : isGreen
                                  ? 'border-black/15 text-black/75'
                                  : 'border-black/10 text-[#555555]'
                              }`}
                            >
                              {chapter.metricDetail}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Floating Bottom Center Tracker (Visible during chapters 1 to 6) */}
        <AnimatePresence>
          {showTracker && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`fixed bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md border transition-colors duration-500 ${
                currentTheme === 'black'
                  ? 'border-white/15 bg-black/85 text-white'
                  : 'border-black/10 bg-white/95 text-black'
              }`}
            >
              <button
                type="button"
                onClick={jumpToHero}
                className={`flex h-6 items-center px-2 text-[11px] font-medium tracking-tight transition-colors ${
                  currentTheme === 'black' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                }`}
              >
                Top
              </button>
              <div
                className={`h-3 w-px ${
                  currentTheme === 'black' ? 'bg-white/15' : 'bg-black/15'
                }`}
              />
              {chapters.map((ch, idx) => {
                const isSelected = activeIndex === idx + 1;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => jumpToChapter(idx)}
                    className="h-2.5 rounded-full transition-all duration-300"
                    style={{
                      width: isSelected ? '28px' : '8px',
                      backgroundColor: isSelected
                        ? ch.theme === 'green'
                          ? '#000000'
                          : ch.logoColor
                        : currentTheme === 'black'
                        ? 'rgba(255, 255, 255, 0.3)'
                        : 'rgba(0, 0, 0, 0.25)',
                    }}
                    aria-label={`Jump to ${ch.shortName}`}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* 
        ========================================================================
        MOBILE EXPERIENCE (Below lg)
        Clean, centered phone with multi-colored zazo.svg logo on the back!
        ========================================================================
      */}
      <div className="lg:hidden relative w-full">
        {/* Mobile Slide 0: Hero (Green BG, Centered vertically with prominent phone & balanced breathing room) */}
        <div
          id="mobile-hero"
          data-snap-point
          data-snap-id="mobile-hero"
          data-theme-bg="green"
          className="snap-section-top relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[#6CFF94] px-5 py-6 overflow-hidden"
        >
          {/* Centered Content Stack: Top Logo, Center Phone + Badges, Bottom Waitlist Button */}
          <div className="flex flex-col items-center justify-center w-full my-auto gap-3 sm:gap-4">
            {/* Top Logo */}
            <div className="shrink-0 flex items-center justify-center z-20">
              <Logo height={38} className="text-black" />
            </div>

            {/* Center Phone Mockup & Background Logo */}
            <div className="relative shrink-0 flex items-center justify-center my-1 sm:my-2">
              {/* Logo on the back of phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none opacity-20">
                <ZazoLogoMark color="#000000" className="w-[clamp(280px,44vh,420px)] h-[clamp(280px,44vh,420px)]" />
              </div>

              {/* Phone Frame - Prominent, readable dynamic sizing */}
              <div className="relative h-[clamp(360px,56vh,540px)] w-auto aspect-[430/932] rounded-[38px] border-[8px] border-black bg-black overflow-hidden shadow-2xl">
                <Image
                  src="/screens/home.png"
                  alt="Zazo App Screen"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Badges (Positioned around the phone perimeter, not blocking screen UI) */}
              <div className="absolute bottom-6 sm:bottom-8 -left-8 sm:-left-12 z-20 w-[126px] sm:w-[145px]">
                <Image
                  src="/badges/badge_usd_received.png"
                  alt="USD received"
                  width={420}
                  height={160}
                  className="h-auto w-full drop-shadow-xl"
                />
              </div>
              <div className="absolute top-6 sm:top-8 -right-8 sm:-right-12 z-20 w-[126px] sm:w-[145px]">
                <Image
                  src="/badges/badge_discount.png"
                  alt="Discount earned"
                  width={420}
                  height={160}
                  className="h-auto w-full drop-shadow-xl"
                />
              </div>
            </div>

            {/* Bottom Button: Balanced margin & ample clearance from bottom edge */}
            <div className="shrink-0 flex items-center justify-center z-20">
              <a
                href="#waitlist"
                className="inline-flex h-[48px] sm:h-[50px] items-center justify-center rounded-full bg-black px-8 text-[15px] font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 tracking-[-0.2px]"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* 
          Mobile Chapters 1 to 6: Tactile Stacking Cards on Scroll
          Each card sticks at top-[74px] as you scroll, with the next card sliding
          up directly OVER the previous one with clean flat top edge and shadow!
        */}
        {chapters.map((chapter, index) => {
          const isDark = chapter.theme === 'black';
          const isGreen = chapter.theme === 'green';
          const zIndex = 20 + index * 5; // 20, 25, 30, 35, 40, 45

          return (
            <div
              key={`mobile-${chapter.id}`}
              id={`mobile-${chapter.id}`}
              data-snap-point
              data-snap-id={`mobile-${chapter.id}`}
              data-theme-bg={chapter.theme}
              className={`snap-section sticky top-[74px] min-h-[calc(100dvh-74px)] w-full overflow-hidden flex flex-col justify-between px-5 pt-8 pb-6 transition-colors duration-500 rounded-none shadow-[0_-16px_40px_rgba(0,0,0,0.22)] border-t ${
                isDark
                  ? 'border-white/10 bg-black text-white'
                  : isGreen
                  ? 'border-black/10 bg-[#6CFF94] text-black'
                  : 'border-black/10 bg-white text-black'
              }`}
              style={{
                zIndex,
              }}
            >
              {/* Header Text */}
              <div className="flex flex-col gap-2 shrink-0">
                <span
                  className="text-[12px] font-semibold uppercase tracking-wider block"
                  style={{ color: isGreen ? '#000000' : chapter.logoColor }}
                >
                  Step {chapter.stepNumber} of 06 · {chapter.badge}
                </span>

                <h2 className="text-[28px] sm:text-[34px] leading-[32px] sm:leading-[38px] font-normal tracking-[-1.2px] m-0">
                  {chapter.headline}
                </h2>

                <p
                  className={`text-[15px] sm:text-[16px] leading-[22px] tracking-[-0.2px] m-0 line-clamp-2 sm:line-clamp-none ${
                    isDark ? 'text-[#D4D4D4]' : isGreen ? 'text-black/85' : 'text-[#444444]'
                  }`}
                >
                  {chapter.description}
                </p>
              </div>

              {/* Mobile Phone Mockup with colored logo mark behind it! */}
              <div className="my-auto py-2 relative flex items-center justify-center shrink-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none">
                  <ZazoLogoMark
                    color={isGreen ? '#000000' : chapter.logoColor}
                    className="w-[clamp(280px,40vh,380px)] h-[clamp(280px,40vh,380px)]"
                  />
                </div>

                <div className="relative h-[clamp(350px,54vh,520px)] w-auto aspect-[430/932] rounded-[38px] border-[8px] border-black bg-black overflow-hidden shadow-2xl z-10">
                  <Image
                    src={chapter.screenSrc}
                    alt={chapter.screenAlt}
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Minimal Metric Card (Compact Horizontal Bar for Mobile) */}
              <div
                className={`rounded-[20px] p-4 border shrink-0 ${
                  isDark
                    ? 'border-white/15 bg-white/[0.06]'
                    : isGreen
                    ? 'border-black/20 bg-black/5'
                    : 'border-black/10 bg-black/[0.03] shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span
                      className={`text-[11px] uppercase tracking-wider block ${
                        isDark ? 'text-[#A3A3A3]' : isGreen ? 'text-black/70' : 'text-[#555555]'
                      }`}
                    >
                      {chapter.metricLabel}
                    </span>
                    <div
                      className="text-[24px] sm:text-[28px] font-normal leading-tight tracking-tight"
                      style={{ color: isGreen ? '#000000' : chapter.logoColor }}
                    >
                      {chapter.metricValue}
                    </div>
                  </div>
                  <div
                    className={`text-[12px] text-right max-w-[170px] ${
                      isDark ? 'text-[#D4D4D4]' : isGreen ? 'text-black/80' : 'text-[#444444]'
                    }`}
                  >
                    {chapter.metricDetail}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
