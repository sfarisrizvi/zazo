'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Store, QrCode, Percent, Users, CheckCircle2, ShieldCheck, Sparkles, Building2, PhoneCall } from 'lucide-react';
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
      {/* Top Navigation */}
      <InternalNavbar activeTab="merchants" />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECTION 1: HERO
          Document 124 Page 5:
          "Ditch the card machine.
           Accept QR payments. Free QR code. No MDR.*
           The Flow: Open Account → Get QR Code → Start Selling
           CTA: [ Contact Sales ]
           *Subject to eligibility and agreement."
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 border-b border-black/[0.06]">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Copy & The Flow */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 text-[#047857] text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#047857] animate-pulse" />
                  <span>Accounts · For Merchants</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0">
                  Ditch the card machine.
                </h1>

                {/* Subheadline from Document 124 */}
                <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl">
                  Accept QR payments. Free QR code. No MDR.*
                </p>

                {/* 
                  THE FLOW GRAPHIC:
                  "The Flow: Open Account → Get QR Code → Start Selling"
                */}
                <div className="mt-8 sm:mt-10 w-full max-w-2xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2.5">
                    The 3-Step Merchant Flow
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 select-none text-[13px] sm:text-[14px] font-semibold text-black">
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10 shadow-2xs">
                      Open Account
                    </span>
                    <span className="text-black/40 text-[12px] font-medium">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-black/5 border border-black/10 shadow-2xs">
                      Get QR Code
                    </span>
                    <span className="text-black/40 text-[12px] font-medium">➔</span>
                    <span className="px-4 py-2.5 rounded-full bg-[#6CFF94] text-black border border-[#047857]/30 shadow-2xs">
                      Start Selling
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-[15px] transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] select-none"
                  >
                    <span>Contact Sales</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <span className="text-[12px] text-neutral-400 font-normal">
                    *Subject to eligibility and agreement.
                  </span>
                </div>
              </div>

              {/* Right Column: Hero Visual - Standee & Payment Scan */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                {/* Visual Backdrop Glow */}
                <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-[48px] bg-gradient-to-tr from-[#6CFF94]/30 via-emerald-100/40 to-transparent -z-10 blur-xl" />

                {/* Standee Image Frame */}
                <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] bg-neutral-50 border border-black/10 p-4 shadow-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/pay-QR.png"
                    alt="Zazo Countertop QR Standee for Chai Khana"
                    fill
                    priority
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>

                {/* Floating Zero MDR Badge */}
                <div className="absolute -top-4 -left-4 sm:-left-8 z-20 rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-xl border border-black/10 flex items-center gap-2.5 animate-float">
                  <div className="w-9 h-9 rounded-xl bg-[#6CFF94]/30 flex items-center justify-center shrink-0 text-[#047857]">
                    <Percent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[11px] font-semibold text-[#047857] uppercase tracking-wider">
                      Zero MDR
                    </span>
                    <span className="text-[14px] font-bold text-black">Keep 100% of Sales*</span>
                  </div>
                </div>

                {/* Floating No POS Machine Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 rounded-2xl bg-[#0f172a] text-white p-3.5 shadow-2xl border border-white/10 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-[#6CFF94]">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Zero Rental
                    </span>
                    <span className="text-[14px] font-bold text-white">Free Standee Delivery</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: WHY ZAZO (3-Column Bento Grid)
          Document 124 Page 5:
          "Why Zazo:
           • Zero MDR: Zero MDR on eligible payments.* Keep more of what you make.
           • Sticky Customers: Customers earn up to 10% back when they pay with Zazo. More reasons to choose you.
           • Instant Setup: No POS machines. No monthly rental. Just a QR stand on your counter."
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-semibold tracking-widest uppercase text-neutral-800 border border-black/10">
                Why Zazo for Merchants
              </span>
              <h2 className="mt-3.5 text-[36px] sm:text-[48px] lg:text-[58px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-black m-0">
                A payment setup that works for your bottom line.
              </h2>
              <p className="mt-3 text-[17px] sm:text-[20px] text-neutral-600 font-normal m-0 max-w-xl mx-auto">
                No bank POS paperwork, no monthly line rental, and instant settlements direct to your account.
              </p>
            </div>

            {/* 3-Card Bento Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1: Zero MDR */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/30 flex items-center justify-center text-black mb-6">
                    <Percent className="w-6 h-6 stroke-[1.8] text-black" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Zero MDR
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Zero MDR on eligible payments.* Keep more of what you make. Say goodbye to 2.5% to 3.5% swipe deductions eating into your retail margins.
                  </p>
                </div>

                {/* Visual Widget: Cost Comparison Table */}
                <div className="mt-8 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] p-5 flex flex-col gap-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                    <span>Retail Sale of Rs 100,000</span>
                    <span>Net Received</span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white border border-black/5 text-[13px]">
                    <span className="text-neutral-500 font-medium">Traditional Card POS (3%)</span>
                    <span className="text-red-600 font-bold">Rs 97,000</span>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#6CFF94]/25 border border-[#047857]/30 text-[14px] font-bold">
                    <div className="flex items-center gap-1.5 text-black">
                      <span className="w-2 h-2 rounded-full bg-[#047857]" />
                      <span>Zazo QR (0% MDR*)</span>
                    </div>
                    <span className="text-[#047857]">Rs 100,000</span>
                  </div>

                  <div className="text-[11px] text-neutral-400 font-normal text-right">
                    You save Rs 3,000 on every Rs 100k
                  </div>
                </div>
              </div>

              {/* Card 2: Sticky Customers */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Sticky Customers
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Customers earn up to 10% back when they pay with Zazo. More reasons to choose you, repeat visits, and higher ticket sizes at zero merchant cost.
                  </p>
                </div>

                {/* Visual Widget: Customer Retention Metric */}
                <div className="mt-8 rounded-2xl bg-[#0f172a] text-white p-5 border border-white/10 shadow-inner flex flex-col gap-3 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">
                    <span>Customer Incentive</span>
                    <span className="text-[#6CFF94]">Funded by Zazo</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-y border-white/10">
                    <div className="flex flex-col text-left">
                      <span className="text-[12px] text-neutral-400">Customer Cashback</span>
                      <span className="text-[16px] font-bold text-[#6CFF94]">Up to 10% Back</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[12px] text-neutral-400">Cost to Merchant</span>
                      <span className="text-[16px] font-bold text-white">Rs 0.00</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px] text-neutral-300">
                    <span>Average Repeat Rate:</span>
                    <span className="text-[#6CFF94] font-bold">+38% Lift</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Instant Setup */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-6">
                    <Store className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Setup
                  </h3>
                  <p className="mt-2.5 text-[16px] sm:text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    No POS machines. No monthly rental. Just a QR stand on your counter. Open an account, display your standee, and start accepting payments immediately.
                  </p>
                </div>

                {/* Visual Widget: Fast Merchant Onboarding */}
                <div className="mt-8 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] p-5 flex flex-col gap-2.5 font-sans">
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                    <span>Counter Deployment</span>
                    <span className="text-[#047857] font-semibold">Zero Hardware</span>
                  </div>

                  <div className="space-y-2 pt-1 text-[13px]">
                    <div className="flex items-center justify-between py-1 border-b border-black/5">
                      <span className="text-neutral-600">Hardware Purchase Fee</span>
                      <span className="font-bold text-black">Rs 0</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-black/5">
                      <span className="text-neutral-600">Monthly Device Rental</span>
                      <span className="font-bold text-black">Rs 0</span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-[14px] font-bold text-black">
                      <span>Counter Standee</span>
                      <span className="text-[#047857]">Included Free</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: CONTACT SALES FORM
          Document 124 Page 5:
          "CTA: [ Contact Sales ]
           *Subject to eligibility and agreement."
          ======================================================================
        */}
        <section id="contact-sales" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Side: Pitch */}
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

                  <div className="mt-8 space-y-3 text-[14px] text-neutral-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Zero MDR on eligible transactions*</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Free branded acrylic counter standee</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Works with Raast & any mobile banking app</span>
                    </div>
                  </div>

                  <p className="mt-8 text-[12px] text-neutral-500 font-normal m-0">
                    *Subject to eligibility and agreement.
                  </p>
                </div>

                {/* Right Side: Form */}
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
                            <option value="retail_fashion">Retail & Fashion</option>
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

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}

