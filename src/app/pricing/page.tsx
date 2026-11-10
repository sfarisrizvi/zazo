'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          DOCUMENT 124:
          PRICING page
          Simple. Transparent. Zero hidden fees.
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 border-b border-black/[0.06]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0 max-w-4xl mx-auto">
              Simple. Transparent.{'\n'}Zero hidden fees.
            </h1>
          </div>
        </section>

        {/* 
          ======================================================================
          DOCUMENT 124:
          ACCOUNT & RECEIVE
          Keep your money. No deductions.
          • Open an Account: $0
          • USD ACH Details (Routing & Account Number): $0
          • Receive USD (ACH / SWIFT): $0
          • Deposit via Stablecoin: $0
          • Maintenance Fee: $0

          CONVERT
          No FX fee. No spread. No markup.
          • Convert USD to PKR: $0 fee

          SEND & SPEND
          Move money locally for free.
          Local (Pakistan)
          • Zazo to Zazo: $0
          • Send PKR to any local bank (Raast): $0
          • Withdraw to Local Currency: $0
          • Pay Merchants (QR): $0 (Plus earn up to 10% discount)

          International (Outbound)
          • Send USD via ACH: $0.50
          • Send USD via SWIFT: $9.99
          • Send to Stablecoin Wallet: 0.25%

          Other fees (like card replacement or physical statements) may apply.
          See full Fee Schedule in Terms & Conditions.
          Interbank rates are live and shown before every conversion.
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-8 space-y-10 sm:space-y-12">
            
            {/* ACCOUNT & RECEIVE */}
            <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm">
              <div className="pb-6 border-b border-black/[0.06]">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black tracking-[-1px] uppercase m-0">
                  Account &amp; Receive
                </h2>
                <p className="mt-1 text-[16px] text-neutral-600 font-normal m-0">
                  Keep your money. No deductions.
                </p>
              </div>

              <div className="divide-y divide-black/[0.06]">
                <div className="py-4 flex items-center justify-between">
                  <span className="text-[16px] text-neutral-800 font-normal">Open an Account</span>
                  <span className="text-[20px] font-bold text-black">$0</span>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <span className="text-[16px] text-neutral-800 font-normal">USD ACH Details (Routing &amp; Account Number)</span>
                  <span className="text-[20px] font-bold text-black">$0</span>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <span className="text-[16px] text-neutral-800 font-normal">Receive USD (ACH / SWIFT)</span>
                  <span className="text-[20px] font-bold text-black">$0</span>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <span className="text-[16px] text-neutral-800 font-normal">Deposit via Stablecoin</span>
                  <span className="text-[20px] font-bold text-black">$0</span>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <span className="text-[16px] text-neutral-800 font-normal">Maintenance Fee</span>
                  <span className="text-[20px] font-bold text-black">$0</span>
                </div>
              </div>
            </div>

            {/* CONVERT */}
            <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm">
              <div className="pb-6 border-b border-black/[0.06]">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black tracking-[-1px] uppercase m-0">
                  Convert
                </h2>
                <p className="mt-1 text-[16px] text-neutral-600 font-normal m-0">
                  No FX fee. No spread. No markup.
                </p>
              </div>

              <div className="py-5 flex items-center justify-between">
                <span className="text-[16px] text-neutral-800 font-normal">Convert USD to PKR</span>
                <span className="text-[20px] font-bold text-black">$0 fee</span>
              </div>
            </div>

            {/* SEND & SPEND */}
            <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm">
              <div className="pb-6 border-b border-black/[0.06]">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black tracking-[-1px] uppercase m-0">
                  Send &amp; Spend
                </h2>
                <p className="mt-1 text-[16px] text-neutral-600 font-normal m-0">
                  Move money locally for free.
                </p>
              </div>

              {/* Local (Pakistan) */}
              <div className="pt-6 pb-2">
                <h3 className="text-[14px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                  Local (Pakistan)
                </h3>
                <div className="divide-y divide-black/[0.06]">
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Zazo to Zazo</span>
                    <span className="text-[20px] font-bold text-black">$0</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Send PKR to any local bank (Raast)</span>
                    <span className="text-[20px] font-bold text-black">$0</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Withdraw to Local Currency</span>
                    <span className="text-[20px] font-bold text-black">$0</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Pay Merchants (QR)</span>
                    <span className="text-[18px] font-bold text-black">$0 (Plus earn up to 10% discount)</span>
                  </div>
                </div>
              </div>

              {/* International (Outbound) */}
              <div className="pt-8 mt-6 border-t border-black/[0.08]">
                <h3 className="text-[14px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                  International (Outbound)
                </h3>
                <div className="divide-y divide-black/[0.06]">
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Send USD via ACH</span>
                    <span className="text-[20px] font-bold text-black">$0.50</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Send USD via SWIFT</span>
                    <span className="text-[20px] font-bold text-black">$9.99</span>
                  </div>
                  <div className="py-3.5 flex items-center justify-between">
                    <span className="text-[16px] text-neutral-800 font-normal">Send to Stablecoin Wallet</span>
                    <span className="text-[20px] font-bold text-black">0.25%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="p-6 rounded-2xl bg-black/5 text-center text-[14px] text-neutral-600 font-normal leading-relaxed">
              Other fees (like card replacement or physical statements) may apply. See full Fee Schedule in Terms &amp; Conditions. Interbank rates are live and shown before every conversion.
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
                    ✓ You&apos;re on the priority waitlist! We&apos;ll notify you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
