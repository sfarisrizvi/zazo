'use client';

import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Privacy & Data Policy
            </span>
            <h1 className="text-[36px] sm:text-[48px] font-bold tracking-tight text-black m-0 mb-4">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-neutral-500 font-normal mb-10 pb-6 border-b border-black/[0.08]">
              Last updated: November 2026
            </p>

            <div className="space-y-8 text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-normal">
              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information necessary to provide financial wallet services, satisfy regulatory KYC/AML obligations, and secure your transactions. This includes personal identifiers (CNIC, passport, name, address, email, phone number) and transaction metadata.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  2. How We Use Your Data
                </h2>
                <p>
                  Your information is utilized solely to operate your accounts, process inbound and outbound payments, prevent financial fraud, and comply with applicable statutory regulations. We do not sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  3. Data Security & Storage
                </h2>
                <p>
                  All sensitive customer data is stored using AES-256 encryption at rest and TLS 1.3 encryption in transit. Access controls follow strict zero-trust least-privilege principles.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] sm:text-[22px] font-bold text-black mb-3">
                  4. Privacy Inquiries
                </h2>
                <p>
                  To request data access, rectification, or deletion, please reach our Data Protection Officer at{' '}
                  <a href="mailto:privacy@zazo.co" className="font-semibold text-black underline">
                    privacy@zazo.co
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

