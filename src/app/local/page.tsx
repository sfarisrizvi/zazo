'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
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
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          DOCUMENT 124:
          4. LOCAL USERS
          Open in minutes. Save up to 10%.*
          Open a PKR account with your CNIC. Scan, pay, and earn.
          The Flow: Download App → Open Account → Add Funds → Scan & Pay → Earn 10%*
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 border-b border-black/[0.06]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h1 className="whitespace-pre-line text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0">
                  Open in minutes.{'\n'}Save up to 10%.*
                </h1>

                <p className="mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl">
                  Open a PKR account with your CNIC. Scan, pay, and earn.
                </p>

                {/* The Flow */}
                <div className="mt-10 w-full max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[13px] sm:text-[14px] font-semibold text-black">
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Download App
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Open Account
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Add Funds
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Scan & Pay
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-[#6CFF94] text-black border border-[#047857]/30">
                      Earn 10%*
                    </span>
                  </div>
                </div>

                {/* Fineprint */}
                <p className="mt-8 text-[13px] text-neutral-400 font-normal m-0">
                  *Terms and limits apply.
                </p>
              </div>

              {/* Right Column: Visual Device / Cafe Counter Photo */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/10">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/local-cafe-counter.jpg"
                      alt="Zazo QR Scan to Pay"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          DOCUMENT 124:
          Why Zazo:
          • Instant Onboarding: PKR account in minutes with CNIC.
          • Earn Up To 10%: Dynamic discounts on every eligible scan.
          • No Hardware: Pay any merchant with a QR scan.
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Onboarding
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    PKR account in minutes with CNIC.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Earn Up To 10%
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Dynamic discounts on every eligible scan.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    No Hardware
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Pay any merchant with a QR scan.
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
                  *Terms and limits apply.
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
