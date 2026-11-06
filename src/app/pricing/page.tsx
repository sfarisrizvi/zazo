'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles, HelpCircle, ShieldCheck, DollarSign, Globe, Smartphone } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
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
      <InternalNavbar activeTab="pricing" />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECTION 1: HERO
          Document 124 Page 7:
          "Simple. Transparent. Zero hidden fees."
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 border-b border-black/[0.06]">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            {/* Category Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-neutral-800 text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
              <span>Transparent Fee Schedule</span>
            </div>

            {/* Headline */}
            <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0 max-w-4xl mx-auto">
              Simple. Transparent.{'\n'}Zero hidden fees.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl mx-auto">
              No subscription charges. No monthly minimum balances. What you see is what you get.
            </p>

            {/* Quick Summary Highlights */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 select-none">
              <span className="px-4 py-2 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 text-[#047857] text-[13px] font-semibold">
                $0 USD Account Opening
              </span>
              <span className="px-4 py-2 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 text-[#047857] text-[13px] font-semibold">
                $0 USD to PKR FX Fee
              </span>
              <span className="px-4 py-2 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 text-[#047857] text-[13px] font-semibold">
                $0 Raast Transfers
              </span>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: DETAILED PRICING BREAKDOWN
          Document 124 Page 7:
          1. Account & Receive:
             - Open: $0
             - USD ACH details: $0
             - Receive USD: $0
             - Deposit Stablecoin: $0
             - Maintenance: $0
          2. Convert:
             - USD to PKR: $0 fee (Interbank rate)
          3. Send & Spend:
             Local:
             - Zazo to Zazo: $0
             - Raast (to any PK bank): $0
             - Withdraw: $0
             - Scan & Pay (QR): $0 + up to 10% discount*
             International:
             - ACH transfer: $0.50
             - SWIFT: $9.99
             - Stablecoin: 0.25%
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="space-y-10 sm:space-y-12">
              
              {/* Category 1: Account & Receive */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Category 01
                    </span>
                    <h2 className="text-[26px] sm:text-[32px] font-bold text-black tracking-[-1px] m-0">
                      Account & Receive
                    </h2>
                  </div>
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#6CFF94]/20 text-[#047857] text-[12px] font-semibold border border-[#047857]/30 w-fit">
                    100% Free to Receive
                  </span>
                </div>

                <div className="divide-y divide-black/[0.06]">
                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-black">Account Opening</div>
                      <div className="text-[13px] text-neutral-500 font-normal">Instant digital verification with CNIC or Passport</div>
                    </div>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#047857]">$0</div>
                  </div>

                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-black">USD ACH Account Details</div>
                      <div className="text-[13px] text-neutral-500 font-normal">Dedicated US routing and account number in your name</div>
                    </div>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#047857]">$0</div>
                  </div>

                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-black">Receive USD via ACH</div>
                      <div className="text-[13px] text-neutral-500 font-normal">Inbound payments from Upwork, Deel, PayPal, Stripe, etc.</div>
                    </div>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#047857]">$0</div>
                  </div>

                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-black">Deposit Stablecoin (USDC / USDT)</div>
                      <div className="text-[13px] text-neutral-500 font-normal">Instant on-chain credit (network gas fees by sender)</div>
                    </div>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#047857]">$0</div>
                  </div>

                  <div className="py-4 sm:py-5 flex items-center justify-between">
                    <div>
                      <div className="text-[16px] sm:text-[17px] font-bold text-black">Monthly Account Maintenance</div>
                      <div className="text-[13px] text-neutral-500 font-normal">Zero recurring maintenance or minimum balance fees</div>
                    </div>
                    <div className="text-[20px] sm:text-[24px] font-bold text-[#047857]">$0</div>
                  </div>
                </div>
              </div>

              {/* Category 2: Convert */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Category 02
                    </span>
                    <h2 className="text-[26px] sm:text-[32px] font-bold text-black tracking-[-1px] m-0">
                      Convert
                    </h2>
                  </div>
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#6CFF94]/20 text-[#047857] text-[12px] font-semibold border border-[#047857]/30 w-fit">
                    Interbank Exchange Rate
                  </span>
                </div>

                <div className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="text-[18px] sm:text-[20px] font-bold text-black">USD to PKR Conversion</div>
                    <p className="mt-1 text-[14px] text-neutral-600 font-normal leading-relaxed m-0">
                      Real-time interbank mid-market exchange rate. Locked rate quote before you confirm. Zero FX spread added by Zazo.
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-[28px] sm:text-[32px] font-bold text-[#047857]">$0 fee</span>
                    <span className="text-[12px] text-neutral-400 font-normal">0% markup</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Send & Spend (Local vs International) */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-sm overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Category 03
                    </span>
                    <h2 className="text-[26px] sm:text-[32px] font-bold text-black tracking-[-1px] m-0">
                      Send & Spend
                    </h2>
                  </div>
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-black/5 text-neutral-800 text-[12px] font-semibold border border-black/10 w-fit">
                    Local & Global Rails
                  </span>
                </div>

                {/* Sub-Section A: Local Pakistan Rails */}
                <div className="pt-6 pb-2">
                  <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                    <Smartphone className="w-4 h-4" />
                    <span>Local (Pakistan)</span>
                  </div>

                  <div className="divide-y divide-black/[0.06]">
                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">Zazo to Zazo Transfer</div>
                        <div className="text-[13px] text-neutral-500 font-normal">Instant peer-to-peer wallet transfers</div>
                      </div>
                      <div className="text-[20px] font-bold text-[#047857]">$0</div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">Raast Instant Transfer</div>
                        <div className="text-[13px] text-neutral-500 font-normal">To any bank account or microfinance wallet in Pakistan</div>
                      </div>
                      <div className="text-[20px] font-bold text-[#047857]">$0</div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">Cash Withdrawal via Partner ATM</div>
                        <div className="text-[13px] text-neutral-500 font-normal">Withdraw PKR at participating ATM networks</div>
                      </div>
                      <div className="text-[20px] font-bold text-[#047857]">$0</div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">Scan to Pay (Merchant QR)</div>
                        <div className="text-[13px] text-neutral-500 font-normal">Instant settlement + dynamic cash discounts</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[20px] font-bold text-[#047857]">$0</div>
                        <div className="text-[12px] font-semibold text-[#047857]">+ up to 10% discount*</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Section B: International Rails */}
                <div className="pt-8 mt-6 border-t border-black/[0.08]">
                  <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                    <Globe className="w-4 h-4" />
                    <span>International</span>
                  </div>

                  <div className="divide-y divide-black/[0.06]">
                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">ACH Transfer (US Bank)</div>
                        <div className="text-[13px] text-neutral-500 font-normal">Standard 1-2 business day clearing to any US bank</div>
                      </div>
                      <div className="text-[20px] font-bold text-black">$0.50</div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">SWIFT International Wire</div>
                        <div className="text-[13px] text-neutral-500 font-normal">Global cross-border wire transfer to 160+ countries</div>
                      </div>
                      <div className="text-[20px] font-bold text-black">$9.99</div>
                    </div>

                    <div className="py-4 flex items-center justify-between">
                      <div>
                        <div className="text-[16px] font-bold text-black">Stablecoin Withdrawal (USDC / USDT)</div>
                        <div className="text-[13px] text-neutral-500 font-normal">On-chain withdrawal to self-custody wallet</div>
                      </div>
                      <div className="text-[20px] font-bold text-black">0.25%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="p-4 rounded-2xl bg-black/5 text-center text-[13px] text-neutral-500 font-normal">
                *Subject to partner limits, network fees, and commercial terms. Live currency quotes are refreshed continuously.
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: CTA / WAITLIST
          ======================================================================
        */}
        <section id="waitlist" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-center">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6CFF94]/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                  Zero Hidden Fees
                </span>

                <h3 className="text-[32px] sm:text-[46px] lg:text-[54px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-white m-0">
                  Ready to stop overpaying?
                </h3>

                <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[18px] text-neutral-300 font-normal leading-relaxed max-w-lg">
                  Join the waitlist to get your free USD account details and start converting to PKR with 0% markup.
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

