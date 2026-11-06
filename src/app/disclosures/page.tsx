'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function DisclosuresPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Regulatory Information
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-bold tracking-tight text-black m-0 mb-4">
              Regulatory Disclosures
            </h1>
            <p className="text-[14px] text-neutral-500 font-normal mb-10 pb-6 border-b border-black/[0.08]">
              Last updated: November 2026
            </p>

            <div className="space-y-8 text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  1. Company Status
                </h2>
                <p>
                  Zazo is a technology company and is not a bank. We do not accept deposits or hold customer funds directly on our own balance sheet. All deposit-taking, escrow, wallet accounts, and foreign exchange settlement services are administered exclusively through our licensed, regulated banking partners.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  2. Banking Partner Details
                </h2>
                <p>
                  PKR wallet accounts and domestic clearing infrastructure (including Raast and 1LINK) are provided in partnership with financial institutions licensed and supervised by the State Bank of Pakistan. USD account details and cross-border ACH / SWIFT routing are provided through federally regulated US banking partners.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  3. Safeguarding of Customer Funds
                </h2>
                <p>
                  All customer funds are deposited in segregated omnibus or dedicated customer accounts established for the benefit of account holders. These funds remain separate from operational assets and cannot be claimed by creditors of Zazo.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  4. Regulatory Inquiries
                </h2>
                <p>
                  For inquiries from regulatory authorities or compliance inquiries, please write to{' '}
                  <a href="mailto:compliance@zazo.co" className="font-semibold text-black underline">
                    compliance@zazo.co
                  </a>.
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

