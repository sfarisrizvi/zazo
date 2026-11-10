'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function BusinessPage() {
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
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          HERO SECTION (2-Column Side-by-Side: Text Left, Visual Right)
          - Background: #ADE3FD
          - Text: Black
          - Visual: /business.png & /business-mobile.png
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden bg-[#ADE3FD] text-black pt-8 sm:pt-12 lg:pt-16 pb-0">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-end">
              
              {/* Left Column: Text & Flow */}
              <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left justify-center pb-8 sm:pb-12 lg:pb-16 pt-2 sm:pt-4">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/10 border border-black/15 text-black text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
                  <span>Accounts · Business</span>
                </div>

                {/* Headline */}
                <h1 className="whitespace-pre-line text-[42px] sm:text-[56px] lg:text-[62px] xl:text-[72px] leading-[1.04] font-bold tracking-[-2px] sm:tracking-[-3px] text-black m-0">
                  Receive globally.{'\n'}Pay locally.
                </h1>

                {/* Subheadline */}
                <p className="mt-4 sm:mt-5 text-[17px] sm:text-[20px] lg:text-[22px] leading-snug tracking-[-0.5px] text-black/85 font-normal m-0 max-w-xl">
                  Clients pay USD. You pay suppliers, staff, and local bills in PKR.
                </p>

                {/* The Flow */}
                <div className="mt-8 sm:mt-10 w-full max-w-xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[12px] sm:text-[13.5px] font-semibold text-black">
                    <span className="px-3.5 py-2 rounded-full bg-black/10 border border-black/15">
                      Client pays USD
                    </span>
                    <span className="text-black/50 text-[12px]">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-black text-white">
                      Zazo Business Account
                    </span>
                    <span className="text-black/50 text-[12px]">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-black/10 border border-black/15">
                      Convert to PKR
                    </span>
                    <span className="text-black/50 text-[12px]">➔</span>
                    <span className="px-3.5 py-2 rounded-full bg-white text-black border border-black/15 shadow-sm">
                      Pay Locally
                    </span>
                  </div>
                </div>

                {/* Fineprint */}
                <p className="mt-6 text-[13px] text-black/60 font-normal m-0">
                  Subject to eligibility.
                </p>
              </div>

              {/* Right Column: Visual Graphic Flush to Bottom */}
              <div className="lg:col-span-5 xl:col-span-6 relative w-full flex items-end justify-center lg:justify-end self-end">
                <div className="relative w-full max-w-[560px] lg:max-w-none aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11] xl:aspect-[16/10] flex items-end">
                  {/* Desktop Image */}
                  <div className="hidden sm:block relative w-full h-full">
                    <Image
                      src="/business.png"
                      alt="Zazo for Agencies and Businesses receiving client payments and paying locally"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain object-bottom select-none"
                    />
                  </div>

                  {/* Mobile Image */}
                  <div className="block sm:hidden relative w-full h-full">
                    <Image
                      src="/business-mobile.png"
                      alt="Zazo for Agencies and Businesses receiving client payments and paying locally"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 640px) 100vw, 540px"
                      className="object-contain object-bottom select-none"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: WHY ZAZO (Document 124 Spec)
          Why Zazo:
          • One Wallet: Manage global income and local expenses.
          • Zero Hassle: Business and seller payouts supported.
          • Total Clarity: Zazo rate shown before you confirm.
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    One Wallet
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Manage global income and local expenses.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Zero Hassle
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Business and seller payouts supported.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Total Clarity
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Zazo rate shown before you confirm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: CTA / WAITLIST ABOVE FOOTER
          ======================================================================
        */}
        <section id="waitlist" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-center">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6CFF94]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                  Early Access for Business
                </span>

                <h3 className="text-[32px] sm:text-[46px] lg:text-[54px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-white m-0">
                  Ready to upgrade your agency&apos;s financial stack?
                </h3>

                <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[18px] text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Join the waitlist to get your business account, receive global client payouts, and pay staff locally.
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
                    ✓ You&apos;re on the priority waitlist! We&apos;ll notify you soon.
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
                  Subject to eligibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
