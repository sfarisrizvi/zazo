'use client';

import Link from 'next/link';
import { ShieldCheck, Lock, Building, CheckCircle2, AlertCircle } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECURITY PAGE (Document 124 Page 6)
          "SECURITY
           Your money, held the right way. (Visual Badge Layout)
           • Segregated: In your name at a licensed bank.
           • Licensed Rails: Regulated Pakistani banking.
           • Encrypted: AES-256 security.
           • Protected: Real-time fraud monitoring."
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 border-b border-black/[0.06]">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-neutral-800 text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#047857]" />
              <span>Trust & Safeguards</span>
            </div>

            <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0 max-w-4xl mx-auto">
              Your money, held the right way.
            </h1>

            <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl mx-auto">
              Institutional-grade safety, multi-layered encryption, and segregated funds with regulated financial partners.
            </p>
          </div>
        </section>

        {/* Visual Badge Layout (4 Core Safeguards) */}
        <section className="relative w-full bg-[#f8f9fa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Badge 1: Segregated */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/25 flex items-center justify-center text-[#047857] mb-6">
                    <Building className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-[12px] font-semibold text-[#047857] uppercase tracking-wider mb-1">
                    01 · Account Structure
                  </div>
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Segregated
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    In your name at a licensed bank. Your balances are never commingled with operating capital and are held 1:1 at regulated custodian institutions.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[13px] font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                  <span>100% Reserve Backed</span>
                </div>
              </div>

              {/* Badge 2: Licensed Rails */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                    02 · Infrastructure
                  </div>
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Licensed Rails
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Regulated Pakistani banking. All clearing, Raast connectivity, and wallet rails operate in partnership with State Bank licensed entities.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[13px] font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                  <span>State Bank Regulated Partners</span>
                </div>
              </div>

              {/* Badge 3: Encrypted */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Lock className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                    03 · Data Protection
                  </div>
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Encrypted
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    AES-256 security. Bank-grade TLS 1.3 encryption for all data in transit and hardware security modules (HSMs) for all cryptographic operations.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[13px] font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                  <span>End-to-End Encryption</span>
                </div>
              </div>

              {/* Badge 4: Protected */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/25 flex items-center justify-center text-[#047857] mb-6">
                    <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-[12px] font-semibold text-[#047857] uppercase tracking-wider mb-1">
                    04 · Surveillance & Defense
                  </div>
                  <h2 className="text-[28px] sm:text-[32px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Protected
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Real-time fraud monitoring. 24/7 automated risk engines, biometric authorization for all outbound transfers, and instant activity alerts.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-[13px] font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#047857]" />
                  <span>24/7 Threat Detection</span>
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

