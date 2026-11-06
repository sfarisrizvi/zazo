'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Legal Documentation
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-bold tracking-tight text-black m-0 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-[14px] text-neutral-500 font-normal mb-10 pb-6 border-b border-black/[0.08]">
              Last updated: November 2026
            </p>

            <div className="space-y-8 text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing or using the Zazo mobile application, website, and related financial technology services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not access or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  2. Nature of Services
                </h2>
                <p>
                  Zazo is a financial technology company and not a bank. All depository, banking, currency exchange, card issuing, and payment rail services (including Raast and ACH clearing) are facilitated through our licensed, regulated banking partners.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  3. Eligibility & Identity Verification
                </h2>
                <p>
                  To open and maintain an account, you must satisfy applicable customer due diligence (CDD) and Know Your Customer (KYC) requirements, including presenting valid government-issued identification (such as a Pakistani CNIC or international passport).
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  4. Currency Exchange & Rates
                </h2>
                <p>
                  Currency conversion rates displayed in the app are locked quotes valid for the duration indicated prior to transaction confirmation. Fees, limits, and settlement times are detailed in our live Fee Schedule.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  5. Contact & Inquiries
                </h2>
                <p>
                  For questions regarding these terms, please contact our legal and compliance team at{' '}
                  <a href="mailto:legal@zazo.co" className="font-semibold text-black underline">
                    legal@zazo.co
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

