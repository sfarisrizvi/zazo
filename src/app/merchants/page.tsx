'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function MerchantsPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessCategory: '',
    contactPerson: '',
    city: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.businessName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[#6b25b3] text-white pt-4 sm:pt-6 lg:pt-8 pb-0">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left justify-center self-center pt-4 pb-2 sm:py-10 lg:py-14 z-10">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
                  <span>Accounts · Merchants</span>
                </div>

                <h1 className="text-[36px] min-[380px]:text-[40px] sm:text-[52px] lg:text-[58px] xl:text-[68px] leading-[1.04] font-bold tracking-[-1.5px] sm:tracking-[-3px] text-white m-0">
                  Ditch the card machine.
                </h1>

                <p className="mt-4 sm:mt-5 text-[16px] sm:text-[19px] lg:text-[21px] leading-snug tracking-[-0.5px] text-white/90 font-normal m-0 max-w-xl">
                  Open an instant merchant account. Accept QR payments with zero hardware and zero MDR.
                </p>

                <p className="mt-5 sm:mt-6 text-[13px] text-white/75 font-normal m-0">
                  *Subject to eligibility and agreement.
                </p>
              </div>

              {/* Right Column: Visual Graphic */}
              <div className="lg:col-span-7 xl:col-span-7 relative w-full flex items-end justify-center lg:justify-end self-end">
                <div className="relative w-full h-[250px] xs:h-[290px] sm:h-[400px] lg:h-[480px] xl:h-[540px] 2xl:h-[580px] flex items-end justify-center lg:justify-end">
                  <div className="hidden sm:block relative w-full h-full">
                    <Image
                      src="/merchange-usercase.png"
                      alt="Ditch the card machine."
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-contain object-bottom lg:object-right-bottom select-none"
                    />
                  </div>

                  <div className="block sm:hidden relative w-full h-full">
                    <Image
                      src="/merchange-usercase-mobile.png"
                      alt="Ditch the card machine."
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 640px) 100vw, 540px"
                      className="object-contain object-bottom select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Merchant Features: Alternating Visual Showcase */}
        <section id="why-zazo" className="relative w-full bg-white py-14 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 flex flex-col gap-14 sm:gap-24 lg:gap-36">
            {/* ROW 1: Instant Onboarding (Card Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
              <div className="lg:col-span-6 w-full">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[540px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-sm bg-neutral-100">
                  <Image
                    src="/merchant-onboarding.png"
                    alt="Start selling in minutes."
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover object-center select-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-start justify-center">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-black/60 uppercase mb-3 sm:mb-4">
                  INSTANT ONBOARDING
                </span>
                <h2 className="text-[32px] min-[380px]:text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.06] m-0">
                  Start selling in minutes.
                </h2>
                <p className="mt-3.5 sm:mt-4 text-[17px] sm:text-[19px] text-neutral-600 leading-relaxed font-normal m-0 max-w-lg">
                  No branch visits. Just enter your CNIC and business details for instant digital verification.
                </p>
              </div>
            </div>

            {/* ROW 2: No Hardware (Text Left, Product Screen Card Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start justify-center">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-black/60 uppercase mb-3 sm:mb-4">
                  NO HARDWARE
                </span>
                <h2 className="text-[32px] min-[380px]:text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.06] m-0">
                  Your phone is your terminal.
                </h2>
                <p className="mt-3.5 sm:mt-4 text-[17px] sm:text-[19px] text-neutral-600 leading-relaxed font-normal m-0 max-w-lg">
                  Accept payments right from the Zazo app, or get a free printed QR standee for your counter.
                </p>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 w-full">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[540px] rounded-[32px] sm:rounded-[44px] bg-[#FEDD42] overflow-hidden flex items-start justify-center pt-7 sm:pt-10 lg:pt-12 px-4 sm:px-6 shadow-sm">
                  <div className="relative w-[260px] min-[390px]:w-[280px] sm:w-[320px] lg:w-[340px] aspect-[430/932] rounded-[44px] border-[8px] sm:border-[10px] border-black bg-black shadow-2xl overflow-hidden shrink-0">
                    <div className="relative w-full h-full bg-white">
                      <Image
                        src="/screens/scan_qr.png"
                        alt="Your phone is your terminal."
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 280px, 340px"
                        className="object-cover object-top select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Zero MDR (Card Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
              <div className="lg:col-span-6 w-full">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[540px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-sm bg-neutral-100">
                  <Image
                    src="/lifestyle-merchant.png"
                    alt="Keep 100% of your money."
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover object-center select-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-start justify-center">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-black/60 uppercase mb-3 sm:mb-4">
                  ZERO MDR
                </span>
                <h2 className="text-[32px] min-[380px]:text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.06] m-0">
                  Keep 100% of your money.
                </h2>
                <p className="mt-3.5 sm:mt-4 text-[17px] sm:text-[19px] text-neutral-600 leading-relaxed font-normal m-0 max-w-lg">
                  No hidden deductions on eligible QR transactions.
                </p>
                <div className="mt-7 sm:mt-8">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center justify-center rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-[15px] px-7 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>

            {/* ROW 4: Merchant Rewards (Text Left, Card Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start justify-center">
                <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-black/60 uppercase mb-3 sm:mb-4">
                  MERCHANT REWARDS
                </span>
                <h2 className="text-[32px] min-[380px]:text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-black tracking-[-1.5px] sm:tracking-[-2px] leading-[1.06] m-0">
                  Earn Up To 5% Cashback.
                </h2>
                <p className="mt-3.5 sm:mt-4 text-[17px] sm:text-[19px] text-neutral-600 leading-relaxed font-normal m-0 max-w-lg">
                  Get rewarded just for accepting payments. Cashback scales up based on your daily Zazo balance.*
                </p>
                <div className="mt-7 sm:mt-8">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center justify-center rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-[15px] px-7 py-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                  >
                    Start earning
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 w-full">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[540px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-sm bg-neutral-100">
                  <Image
                    src="/merchant-rewards.png"
                    alt="Earn Up To 5% Cashback."
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover object-center select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant Partnership Form */}
        <section id="contact-sales" className="relative w-full bg-white py-10 sm:py-16">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                    Merchant Partnership
                  </span>

                  <h3 className="text-[30px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-1.5px] leading-[1.08] text-white m-0">
                    Get your free counter standee and unlock exclusive merchant rewards.
                  </h3>

                  <p className="mt-4 text-[16px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed m-0">
                    Speak with our team to set up your outlets.
                  </p>
                </div>

                <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-white/[0.06] border border-white/15 p-6 sm:p-8 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="business-name"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          Business Name
                        </label>
                        <input
                          id="business-name"
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, businessName: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="business-category"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          Business Category
                        </label>
                        <input
                          id="business-category"
                          type="text"
                          value={formData.businessCategory}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, businessCategory: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-person"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          Contact Person
                        </label>
                        <input
                          id="contact-person"
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, contactPerson: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="merchant-city"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          City
                        </label>
                        <input
                          id="merchant-city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, city: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="merchant-email"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          Email
                        </label>
                        <input
                          id="merchant-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, email: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="merchant-phone"
                          className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="merchant-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setSubmitted(false);
                            setFormData({ ...formData, phone: e.target.value });
                          }}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 h-[52px] rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      {submitted ? (
                        <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <>
                          <span>Contact Sales</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant Footer Disclaimer */}
        <section className="relative w-full bg-white pb-12 sm:pb-16">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <p className="border-t border-black/10 pt-6 text-[12px] sm:text-[13px] leading-relaxed text-neutral-500 m-0">
              *Zero MDR and Cashback are subject to eligibility, daily wallet balance limits, and commercial agreement. Cashback is a promotional reward, not a financial yield.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
