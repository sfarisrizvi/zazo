'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, QrCode, Smartphone, Sparkles, Check, UserCheck, ShieldCheck, Zap } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function LocalUsersPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      {/* Top Navigation */}
      <InternalNavbar activeTab="local" />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECTION 1: HERO (Matches User's Figma Design Spec & Document 124)
          Rich Emerald Green Canvas:
          - Eyebrow: MADE FOR EVERYDAY PAKISTAN
          - Heading: Local users
          - Subheadline: Add funds. Pay by QR. Save on eligible purchases.
          - Right Pill: Open a PKR account in minutes with your CNIC. Send, receive, and get up to 10% discount every time you scan to pay.
          - Hero Counter Image: Full cafe counter scanning Chai Khana QR standee
          ======================================================================
        */}
        <section className="relative w-full bg-[#057857] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            {/* Top Row: Headings & Glass Pill */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12">
              <div className="flex flex-col items-start max-w-2xl">
                <span className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#a7f3d0]">
                  Made For Everyday Pakistan
                </span>
                <h1 className="mt-3 text-[48px] sm:text-[68px] lg:text-[82px] font-bold tracking-[-2px] sm:tracking-[-3px] leading-[1.02] text-white m-0">
                  Local users
                </h1>
                <p className="mt-3 sm:mt-4 text-[18px] sm:text-[22px] lg:text-[24px] text-white/90 font-normal leading-snug m-0">
                  Add funds. Pay by QR. Save on eligible purchases.
                </p>
              </div>

              {/* Glassmorphic CNIC & 10% Discount Pill Card */}
              <div className="lg:max-w-md w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 shadow-xl">
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-white font-normal m-0">
                  Open a PKR account in minutes with your CNIC. Send, receive, and get up to{' '}
                  <span className="inline-block bg-[#6CFF94] text-black font-bold px-2 py-0.5 rounded text-[14px] shadow-xs">
                    10% discount
                  </span>{' '}
                  every time you scan to pay.
                </p>
              </div>
            </div>

            {/* Hero Visual: Cafe Counter with Phone & Zazo QR Standee */}
            <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/15 bg-black/40">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px]">
                <Image
                  src="/local-cafe-counter.jpg"
                  alt="Customer scanning Chai Khana Zazo QR standee at cafe counter"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* The Flow Strip: Download App → Open Account → Add Funds → Scan & Pay → Earn 10%* */}
            <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#a7f3d0] shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#6CFF94] animate-pulse" />
                <span>The 5-Step Flow</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] font-semibold text-white">
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
                  Download App
                </span>
                <span className="text-[#a7f3d0]">➔</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
                  Open Account
                </span>
                <span className="text-[#a7f3d0]">➔</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
                  Add Funds
                </span>
                <span className="text-[#a7f3d0]">➔</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20">
                  Scan & Pay
                </span>
                <span className="text-[#a7f3d0]">➔</span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#6CFF94] text-black font-bold shadow-md">
                  Earn 10%*
                </span>
              </div>

              <div className="text-[12px] text-white/70 font-normal shrink-0">
                *Terms and limits apply.
              </div>
            </div>

          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: WHY ZAZO (Bento Grid with Abundant Space)
          From Document 124:
          "Why Zazo:
           • Instant Onboarding: PKR account in minutes with CNIC.
           • Earn Up To 10%: Dynamic discounts on every eligible scan.
           • No Hardware: Pay any merchant with a QR scan."
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-semibold tracking-widest uppercase text-neutral-800 border border-black/10">
                Why Zazo for Local Users
              </span>
              <h2 className="mt-3.5 text-[36px] sm:text-[48px] lg:text-[58px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-black m-0">
                The smart way to spend in Pakistan.
              </h2>
              <p className="mt-3 text-[17px] sm:text-[20px] text-neutral-600 font-normal m-0 max-w-xl mx-auto">
                No bank branches, no monthly account maintenance charges, and real rewards every time you scan to pay.
              </p>
            </div>

            {/* 3-Card Bento Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1: Instant Onboarding */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <UserCheck className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Onboarding
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    PKR account in minutes with CNIC. Zero paperwork, zero branch visits. Scan your ID and start using your wallet immediately.
                  </p>
                </div>

                {/* Visual Widget: CNIC Verification Status Simulator */}
                <div className="mt-8 rounded-2xl bg-[#0f172a] text-white p-5 border border-white/10 shadow-inner flex flex-col gap-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
                    <span>Identity Verification</span>
                    <span className="text-[#6CFF94]">NADRA Verified</span>
                  </div>

                  <div className="flex items-center gap-3 py-2 border-y border-white/10">
                    <div className="w-10 h-7 rounded bg-white/15 border border-white/20 flex items-center justify-center text-[10px] font-mono text-neutral-300">
                      CNIC
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[13px] font-mono text-white font-semibold">35201-•••••••-1</span>
                      <span className="text-[11px] text-neutral-400">Government ID Linked</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px] pt-1 text-neutral-300">
                    <span>Verification Time:</span>
                    <span className="text-[#6CFF94] font-bold">&lt; 2 Minutes</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Earn Up To 10% */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/30 flex items-center justify-center text-black mb-6">
                    <Sparkles className="w-6 h-6 stroke-[1.8] text-black" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Earn Up To 10%
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Dynamic discounts on every eligible scan. The higher your active wallet balance, the higher the discount automatically applied at checkout.
                  </p>
                </div>

                {/* Visual Widget: Dynamic Discount Tiers */}
                <div className="mt-8 rounded-2xl bg-[#6CFF94]/15 border border-[#047857]/30 p-5 flex flex-col gap-2.5 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-[#047857] font-semibold uppercase tracking-wider">
                    <span>Balance Rewards</span>
                    <span>Dynamic Scaling</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/60 text-[12px]">
                      <span className="text-neutral-600 font-medium">Starter Balance</span>
                      <span className="text-[#047857] font-bold">Up to 3% Back</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/60 text-[12px]">
                      <span className="text-neutral-600 font-medium">Active User</span>
                      <span className="text-[#047857] font-bold">Up to 7% Back</span>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#6CFF94] border border-[#047857]/30 text-[13px] font-bold text-black shadow-2xs">
                      <span>Maximum Tier</span>
                      <span className="text-[#047857]">Up to 10% Back</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: No Hardware */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Smartphone className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    No Hardware
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Pay any merchant with a QR scan. Point your phone camera at any supported counter standee across Pakistan for instant settlement.
                  </p>
                </div>

                {/* Visual Widget: Instant QR Standee Scanner Simulation */}
                <div className="mt-8 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] p-5 flex flex-col gap-2.5 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                    <span>Universal QR Standee</span>
                    <span className="text-emerald-600 font-semibold">Zero POS Delay</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-neutral-700">
                    <span>Scan Speed</span>
                    <span className="font-semibold text-black">&lt; 2 Seconds</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-neutral-700">
                    <span>Cashier Compatibility</span>
                    <span className="font-semibold text-black">Raast & All QR Standees</span>
                  </div>

                  <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[15px] font-bold text-black">
                    <span>Card Machine Needed</span>
                    <span className="text-[#047857]">Never</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: EARLY ACCESS & WAITLIST
          ======================================================================
        */}
        <section id="waitlist" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-center">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6CFF94]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                  Early Access for Local Users
                </span>

                <h3 className="text-[32px] sm:text-[46px] lg:text-[54px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-white m-0">
                  Ready to earn every time you pay?
                </h3>

                <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[18px] text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Join the priority waitlist to open your PKR account in minutes with your CNIC and unlock up to 10% dynamic discounts.
                </p>

                {/* Email Form */}
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full h-[52px] px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-[15px] outline-none focus:border-[#6CFF94] focus:ring-2 focus:ring-[#6CFF94]/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 h-[52px] px-7 rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>

                {submitted && (
                  <div className="mt-3 text-[#6CFF94] text-[13px] font-medium">
                    ✓ You're on the priority waitlist! We'll notify you soon.
                  </div>
                )}

                {/* Store Badges */}
                <div id="download" className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
                  <span className="text-[13px] text-neutral-400 font-medium">
                    Available soon on:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 select-none text-left">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z" />
                      </svg>
                      <div className="leading-tight">
                        <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">Download on the</div>
                        <div className="text-[13px] font-bold text-white tracking-tight">App Store</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 select-none text-left">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186a1.99 1.99 0 0 1-.61-.926V2.74c.14-.383.359-.705.609-.926zm11.246 11.248l2.09-2.091-11.83-6.83 9.74 8.921zm2.936-2.937l3.655 2.11a1.2 1.2 0 0 1 0 2.08l-3.655 2.11-2.227-2.227 2.227-2.073zm-2.936 2.937l-9.74 8.922 11.83-6.83-2.09-2.092z" />
                      </svg>
                      <div className="leading-tight">
                        <div className="text-[9px] text-neutral-400 uppercase font-medium tracking-wide">GET IT ON</div>
                        <div className="text-[13px] font-bold text-white tracking-tight">Google Play</div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[12px] text-neutral-500 font-normal m-0">
                  *Terms and limits apply.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}
