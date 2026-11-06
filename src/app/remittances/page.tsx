'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2, QrCode, Zap, Check, ArrowDownLeft, ShieldCheck } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function RemittancesPage() {
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
      <InternalNavbar activeTab="remittances" />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECTION 1: HERO
          More visual, abundant space, little text.
          From Document 124:
          "Receive from abroad. Spend local.
           Family sends money. It lands in your Zazo wallet. Convert and spend instantly.
           The Flow: Family sends abroad → Zazo Wallet → Convert to PKR → Spend / Send"
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 border-b border-black/[0.06]">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headlines & The Flow Graphic */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 text-[#047857] text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
                  <span>Accounts · Remittances</span>
                </div>

                {/* Main Headline */}
                <h1 className="whitespace-pre-line text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0">
                  Receive from abroad.{'\n'}Spend local.
                </h1>

                {/* Subheadline from Document 124 */}
                <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl">
                  Family sends money. It lands in your Zazo wallet. Convert and spend instantly.
                </p>

                {/* 
                  THE FLOW GRAPHIC:
                  "The Flow: Family sends abroad → Zazo Wallet → Convert to PKR → Spend / Send"
                */}
                <div className="mt-8 sm:mt-10 w-full max-w-2xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
                    The Remittance Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[12px] sm:text-[13px] font-semibold text-black">
                    <span className="px-3.5 py-2 rounded-full bg-black/5 border border-black/10 shadow-2xs">
                      Family sends abroad
                    </span>
                    <span className="text-black/40 text-[12px] font-medium">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-[#6CFF94]/30 border border-[#047857]/30 text-black shadow-2xs">
                      Zazo Wallet
                    </span>
                    <span className="text-black/40 text-[12px] font-medium">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-black/5 border border-black/10 shadow-2xs">
                      Convert to PKR
                    </span>
                    <span className="text-black/40 text-[12px] font-medium">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-black text-white shadow-2xs">
                      Spend / Send
                    </span>
                  </div>
                </div>

                {/* Download Buttons CTA */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
                  {/* App Store Button */}
                  <a
                    href="#download"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white transition-all duration-200 shadow-md select-none"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white shrink-0">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.65-1.06 1.71-.93 2.73 1 .08 2.02-.48 2.64-1.23z" />
                    </svg>
                    <div className="leading-tight text-left">
                      <div className="text-[10px] text-neutral-400 uppercase font-medium tracking-wide">Download on the</div>
                      <div className="text-[15px] font-bold text-white tracking-tight">App Store</div>
                    </div>
                  </a>

                  {/* Google Play Button */}
                  <a
                    href="#download"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-neutral-800 text-white transition-all duration-200 shadow-md select-none"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white shrink-0">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.99 1.99 0 0 1-.61-.926V2.74c.14-.383.359-.705.609-.926zm11.246 11.248l2.09-2.091-11.83-6.83 9.74 8.921zm2.936-2.937l3.655 2.11a1.2 1.2 0 0 1 0 2.08l-3.655 2.11-2.227-2.227 2.227-2.073zm-2.936 2.937l-9.74 8.922 11.83-6.83-2.09-2.092z" />
                    </svg>
                    <div className="leading-tight text-left">
                      <div className="text-[10px] text-neutral-400 uppercase font-medium tracking-wide">GET IT ON</div>
                      <div className="text-[15px] font-bold text-white tracking-tight">Google Play</div>
                    </div>
                  </a>

                  <span className="text-[12px] text-neutral-400 font-normal pl-2">
                    *Terms and limits apply.
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Device with Remittance Badge */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                {/* Visual Backdrop Glow */}
                <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-[48px] bg-gradient-to-tr from-[#FEDD42]/20 via-[#6CFF94]/20 to-transparent -z-10 blur-xl" />

                {/* Phone Mockup Frame */}
                <div className="relative w-[280px] sm:w-[320px] aspect-[430/932] rounded-[42px] border-[8px] border-black bg-black overflow-hidden shadow-2xl">
                  <Image
                    src="/screens/home.png"
                    alt="Zazo Family Remittance Receiving Screen"
                    fill
                    priority
                    unoptimized
                    sizes="320px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating Remittance Received Notification Card */}
                <div className="absolute bottom-10 -left-6 sm:-left-12 z-20 w-[210px] sm:w-[230px] rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-black/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6CFF94]/30 flex items-center justify-center shrink-0 text-[#047857]">
                    <ArrowDownLeft className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                      Family Transfer
                    </span>
                    <span className="text-[15px] font-bold text-black leading-tight">
                      +$450.00 Received
                    </span>
                    <span className="text-[11px] text-emerald-700 font-medium">
                      Zero receiving fee
                    </span>
                  </div>
                </div>

                {/* Floating Discount Badge */}
                <div className="absolute top-12 -right-4 sm:-right-8 z-20 w-[150px] sm:w-[170px] drop-shadow-xl animate-float">
                  <Image
                    src="/badges/badge_discount.png"
                    alt="Discount earned +Rs 125.00"
                    width={420}
                    height={160}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: WHY ZAZO (Bento Grid with Abundant Space)
          From Document 124:
          "Why Zazo:
           • Global to Local: Receive from supported sources.
           • Earn Up To 10%: Back on eligible QR payments.*
           • Instant Transfers: Send PKR to any bank or wallet."
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-semibold tracking-widest uppercase text-neutral-800 border border-black/10">
                Why Zazo for Remittances
              </span>
              <h2 className="mt-3.5 text-[36px] sm:text-[48px] lg:text-[58px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-black m-0">
                Your family worked hard for it. Keep it all.
              </h2>
              <p className="mt-3 text-[17px] sm:text-[20px] text-neutral-600 font-normal m-0 max-w-xl mx-auto">
                No Western Union bank queues. No hidden 5-8% currency markups. Just seamless global receiving and local everyday spending.
              </p>
            </div>

            {/* 3-Card Bento Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1: Global to Local */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Globe2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Global to Local
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Receive from supported sources. International funds land straight into your Zazo wallet ready for local use.
                  </p>
                </div>

                {/* Visual Widget: Global Remittance Corridor */}
                <div className="mt-8 rounded-2xl bg-[#0f172a] text-white p-5 border border-white/10 shadow-inner flex flex-col gap-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
                    <span>Supported Corridors</span>
                    <span className="text-[#6CFF94]">Direct Rails</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-y border-white/10 text-[13px]">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🇺🇸 🇬🇧 🇦🇪 🇸🇦</span>
                      <span className="text-neutral-300">Overseas Family</span>
                    </div>
                    <span className="text-white font-bold">➔</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base">🇵🇰</span>
                      <span className="text-white font-semibold">Your Wallet</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px] pt-1">
                    <span className="text-neutral-400">Incoming Fee:</span>
                    <span className="text-[#6CFF94] font-bold">$0.00 (Zero Wire Fee)</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Earn Up To 10% */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/30 flex items-center justify-center text-black mb-6">
                    <QrCode className="w-6 h-6 stroke-[1.8] text-black" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Earn Up To 10%
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Back on eligible QR payments.* Stretch your remittance money further on groceries, shopping, and everyday purchases.
                  </p>
                </div>

                {/* Visual Widget: Family Grocery Receipt with 10% Savings */}
                <div className="mt-8 rounded-2xl bg-[#6CFF94]/15 border border-[#047857]/30 p-5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#047857] font-semibold uppercase tracking-wider">
                    <span>Supermarket Checkout</span>
                    <span>10% Reward Applied</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-neutral-700">
                    <span>Family Monthly Groceries</span>
                    <span className="font-semibold text-black">Rs 18,500.00</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-[#047857]">
                    <span>Zazo QR Cashback</span>
                    <span className="font-bold">-Rs 1,850.00</span>
                  </div>

                  <div className="pt-2 border-t border-[#047857]/20 flex items-center justify-between text-[16px] font-bold text-black">
                    <span>Final Amount Paid</span>
                    <span className="text-[#047857]">Rs 16,650.00</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Instant Transfers */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Zap className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Transfers
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Send PKR to any bank or wallet. Move money to family, school fees, or utility bills in seconds via Raast 24/7.
                  </p>
                </div>

                {/* Visual Widget: Raast Instant Transfer Widget */}
                <div className="mt-8 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] p-5 flex flex-col gap-2.5 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                    <span>Raast Real-Time Transfer</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 24/7 Rails
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-neutral-700">
                    <span>Recipient</span>
                    <span className="font-semibold text-black">Any Pakistani Bank / Wallet</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-neutral-700">
                    <span>Transfer Speed</span>
                    <span className="font-semibold text-black">&lt; 2 Seconds</span>
                  </div>

                  <div className="pt-2 border-t border-black/10 flex items-center justify-between text-[15px] font-bold text-black">
                    <span>Transfer Fee</span>
                    <span className="text-[#047857]">Rs 0.00 (Free)</span>
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
                  Early Access for Remittance Families
                </span>

                <h3 className="text-[32px] sm:text-[46px] lg:text-[54px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-white m-0">
                  Receive family money without losing to fees.
                </h3>

                <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[18px] text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Join the priority waitlist to start receiving international funds directly into your wallet and earn up to 10% back on local QR spending.
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

