'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function MerchantsPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'cafe_restaurant',
    contactName: '',
    email: '',
    phone: '',
    city: 'karachi',
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
        {/* 
          ======================================================================
          DOCUMENT 124:
          5. MERCHANTS
          Ditch the card machine.
          Accept QR payments. Free QR code. No MDR.*
          The Flow: Open Account → Get QR Code → Start Selling
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 border-b border-black/[0.06]">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0">
                  Ditch the card machine.
                </h1>

                <p className="mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl">
                  Accept QR payments. Free QR code. No MDR.*
                </p>

                {/* The Flow */}
                <div className="mt-10 w-full max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[13px] sm:text-[14px] font-semibold text-black">
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Open Account
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10">
                      Get QR Code
                    </span>
                    <span className="text-black/40 text-[12px]">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-[#6CFF94] text-black border border-[#047857]/30">
                      Start Selling
                    </span>
                  </div>
                </div>

                {/* CTA & Fineprint */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-[15px] transition-all duration-200 shadow-md select-none"
                  >
                    Contact Sales
                  </a>

                  <span className="text-[13px] text-neutral-400 font-normal">
                    *Subject to eligibility and agreement.
                  </span>
                </div>
              </div>

              {/* Right Column: Standee Image */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] bg-neutral-50 border border-black/10 p-4 shadow-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/pay-QR.png"
                    alt="Zazo Countertop QR Standee"
                    fill
                    priority
                    unoptimized
                    className="object-contain p-2"
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
          • Zero MDR: On eligible payments.*
          • Sticky Customers: They earn cashback when they pay you.
          • Instant Setup: No hardware, no queues.
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Zero MDR
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    On eligible payments.*
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Sticky Customers
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    They earn cashback when they pay you.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Setup
                  </h2>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    No hardware, no queues.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: CONTACT SALES CTA ABOVE FOOTER
          ======================================================================
        */}
        <section id="contact-sales" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                    Merchant Partnership
                  </span>

                  <h3 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold tracking-[-1.5px] leading-[1.08] text-white m-0">
                    Get your free counter standee.
                  </h3>

                  <p className="mt-4 text-[16px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed m-0">
                    Speak with our merchant team to set up zero MDR payments for your outlets across Pakistan.
                  </p>

                  <p className="mt-8 text-[12px] text-neutral-500 font-normal m-0">
                    *Subject to eligibility and agreement.
                  </p>
                </div>

                <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-white/[0.06] border border-white/15 p-6 sm:p-8 backdrop-blur-sm">
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-[#6CFF94]/20 border border-[#6CFF94]/40 flex items-center justify-center text-[#6CFF94] mb-4">
                        <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                      </div>
                      <h4 className="text-[24px] font-bold text-white mb-2">Request Received!</h4>
                      <p className="text-[15px] text-neutral-300 font-normal max-w-sm">
                        Our merchant onboarding team will get in touch within 24 hours to deliver your QR standee.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Business Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Chai Khana"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Business Category
                          </label>
                          <select
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-[#1f2937] border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          >
                            <option value="cafe_restaurant">Cafe / Restaurant</option>
                            <option value="retail_fashion">Retail &amp; Fashion</option>
                            <option value="supermarket">Grocery / Supermarket</option>
                            <option value="services">Health / Services</option>
                            <option value="other">Other Business</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Contact Person
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            City
                          </label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-[#1f2937] border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          >
                            <option value="karachi">Karachi</option>
                            <option value="lahore">Lahore</option>
                            <option value="islamabad">Islamabad / Rawalpindi</option>
                            <option value="peshawar">Peshawar</option>
                            <option value="other">Other City</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="merchant@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            placeholder="0300 1234567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 h-[52px] rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <span>Contact Sales</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </form>
                  )}
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
