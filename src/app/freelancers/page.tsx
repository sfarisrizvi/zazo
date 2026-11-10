'use client';

import Image from 'next/image';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function FreelancersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          DOCUMENT 124:
          1. FREELANCERS
          Get paid globally. Spend locally.
          Receive USD, convert to PKR, and spend by QR. Zero wire fees.
          The Flow: Client sends USD → Zazo USD Account → Convert to PKR → Spend / Send
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 border-b border-black/[0.06]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headlines & Flow */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h1 className="whitespace-pre-line text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0">
                  Get paid globally.{'\n'}Spend locally.
                </h1>

                <p className="mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl">
                  Receive USD, convert to PKR, and spend by QR. Zero wire fees.
                </p>

                {/* The Flow */}
                <div className="mt-10 w-full max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[13px] sm:text-[14px] font-semibold text-black">
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Client sends USD
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-[#6CFF94]/30 border border-[#047857]/30 text-black">
                      Zazo USD Account
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Convert to PKR
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black text-white">
                      Spend / Send
                    </span>
                  </div>
                </div>

                {/* Fineprint */}
                <p className="mt-8 text-[13px] text-neutral-400 font-normal m-0">
                  *Terms and limits apply.
                </p>
              </div>

              {/* Right Column: Visual Device */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-[48px] bg-gradient-to-tr from-[#6CFF94]/20 via-[#ADE3FD]/20 to-transparent -z-10 blur-xl" />

                <div className="relative w-[280px] sm:w-[320px] aspect-[430/932] rounded-[42px] border-[8px] border-black bg-black overflow-hidden shadow-2xl">
                  <Image
                    src="/screens/receive_usd.png"
                    alt="Zazo USD Account Details"
                    fill
                    priority
                    unoptimized
                    sizes="320px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="absolute bottom-12 -left-6 sm:-left-12 z-20 w-[150px] sm:w-[170px] drop-shadow-xl animate-float">
                  <Image
                    src="/badges/badge_usd_received.png"
                    alt="USD received"
                    width={420}
                    height={160}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>

                <div className="absolute top-12 -right-4 sm:-right-8 z-20 w-[150px] sm:w-[170px] drop-shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <Image
                    src="/badges/badge_discount.png"
                    alt="Discount earned"
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
          DOCUMENT 124:
          Why Zazo:
          • Your Own Accounts: Named USD & PKR details.
          • Total Clarity: Exact rate shown before you confirm.
          • Earn Up To 10%: Back on eligible QR payments.*
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Your Own Accounts
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Named USD & PKR details.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Total Clarity
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Exact rate shown before you confirm.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Earn Up To 10%
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Back on eligible QR payments.*
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
