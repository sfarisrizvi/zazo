'use client';

import Image from 'next/image';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function LocalUsersPage() {
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
      </main>

      <Footer />
    </div>
  );
}
