'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function RewardsTermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Program Rules
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-bold tracking-tight text-black m-0 mb-4">
              Rewards & Cashback Terms
            </h1>
            <p className="text-[14px] text-neutral-500 font-normal mb-10 pb-6 border-b border-black/[0.08]">
              Last updated: November 2026
            </p>

            <div className="space-y-8 text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  1. Eligibility for QR Cashback
                </h2>
                <p>
                  Cashback rewards of up to 10% apply strictly to eligible in-person QR merchant transactions made via the Zazo app at participating partner locations across Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  2. Dynamic Scaling & Tier Calculation
                </h2>
                <p>
                  Reward percentages scale dynamically based on active qualifying wallet balances maintained in the user's account at the time of transaction settlement. Maximum cashback limits per transaction and per calendar month apply.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  3. Crediting & Expiration
                </h2>
                <p>
                  Earned cashback discounts are credited directly to the user's primary PKR wallet balance immediately upon settlement confirmation. Cashback balances do not expire while the account remains in good standing.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  4. Program Modifications
                </h2>
                <p>
                  Zazo reserves the right to modify promotional reward tiers, participating merchant categories, or maximum monthly reward caps with notice posted within the application.
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

