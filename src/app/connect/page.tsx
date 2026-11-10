'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    volume: '100k_500k',
    useCase: 'payouts',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.workEmail) {
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
          ZAZO CONNECT (B2B API)
          Power your platform with PKR rails.
          Give your global users a local Pakistan experience.
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 border-b border-black/[0.06] bg-[#0c1017] text-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl flex flex-col items-start text-left">
              <h1 className="text-[44px] sm:text-[60px] lg:text-[70px] xl:text-[76px] leading-[1.04] font-bold tracking-[-2px] sm:tracking-[-3px] text-white m-0">
                Power your platform with PKR rails.
              </h1>

              <p className="mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-300 font-normal m-0 max-w-2xl">
                Give your global users a local Pakistan experience.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-sales"
                  className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 shadow-lg select-none"
                >
                  Contact Sales
                </a>

                <span className="text-[13px] text-neutral-400 font-normal">
                  Subject to commercial agreement.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          DOCUMENT 124:
          Choose your integration:
          Option 1: Instant Payout API
          Direct USD to PKR transfers. No wallet required.
          • Interbank Rate: 0% Zazo markup.
          • Direct Payouts: Straight to any local bank via Raast.

          Option 2: Global PKR Wallet API
          Offer a full PKR account next to your Virtual USD accounts.
          • Named PKR Wallets: In your user's name.
          • Instant Conversion: USD to PKR, on demand.
          • Send & Spend: Local QR payments and transfers.
          ======================================================================
        */}
        <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="mb-12">
              <h2 className="text-[28px] sm:text-[36px] font-bold tracking-[-1px] text-black m-0">
                Choose your integration:
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Option 1 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-semibold text-[#047857] uppercase tracking-wider mb-2">
                    Option 1
                  </div>
                  <h3 className="text-[28px] sm:text-[34px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Payout API
                  </h3>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Direct USD to PKR transfers. No wallet required.
                  </p>

                  <ul className="mt-6 space-y-3 text-[15px] text-neutral-700">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span><strong>Interbank Rate:</strong> 0% Zazo markup.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span><strong>Direct Payouts:</strong> Straight to any local bank via Raast.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Option 2 */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    Option 2
                  </div>
                  <h3 className="text-[28px] sm:text-[34px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Global PKR Wallet API
                  </h3>
                  <p className="mt-3 text-[17px] text-neutral-600 font-normal leading-relaxed m-0">
                    Offer a full PKR account next to your Virtual USD accounts.
                  </p>

                  <ul className="mt-6 space-y-3 text-[15px] text-neutral-700">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span><strong>Named PKR Wallets:</strong> In your user&apos;s name.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span><strong>Instant Conversion:</strong> USD to PKR, on demand.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      <span><strong>Send &amp; Spend:</strong> Local QR payments and transfers.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Who it's for */}
            <div className="mt-12 pt-10 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-[15px] font-bold text-black">
                Who it’s for:
              </span>
              <span className="text-[15px] text-neutral-600 font-normal">
                Fintechs · Remittance Apps · Neobanks · Marketplaces.
              </span>
            </div>

          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: ENTERPRISE API CTA ABOVE FOOTER
          ======================================================================
        */}
        <section id="contact-sales" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5 flex flex-col items-start text-left">
                  <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[11px] sm:text-[12px] font-semibold tracking-wide uppercase text-[#6CFF94] border border-white/10 mb-4">
                    Enterprise API Access
                  </span>

                  <h3 className="text-[32px] sm:text-[44px] lg:text-[48px] font-bold tracking-[-1.5px] leading-[1.08] text-white m-0">
                    Talk to our API solutions team.
                  </h3>

                  <p className="mt-4 text-[16px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed m-0">
                    Request API sandbox access, developer documentation, and commercial pricing customized for your volume.
                  </p>

                  <p className="mt-8 text-[12px] text-neutral-500 font-normal m-0">
                    Subject to commercial agreement and compliance onboarding.
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
                        Our platform partnership team will provide API keys and staging credentials within 1 business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Company / Platform Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Financial Technologies"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Work Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="partnerships@company.com"
                            value={formData.workEmail}
                            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-500 text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                            Expected Monthly Volume (USD)
                          </label>
                          <select
                            value={formData.volume}
                            onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                            className="w-full h-[48px] px-4 rounded-xl bg-[#1f2937] border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                          >
                            <option value="under_100k">&lt; $100,000 / month</option>
                            <option value="100k_500k">$100,000 – $500,000 / month</option>
                            <option value="500k_2m">$500,000 – $2,000,000 / month</option>
                            <option value="over_2m">&gt; $2,000,000 / month</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                          Primary Integration Mode
                        </label>
                        <select
                          value={formData.useCase}
                          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                          className="w-full h-[48px] px-4 rounded-xl bg-[#1f2937] border border-white/20 text-white text-[14px] outline-none focus:border-[#6CFF94] transition-all"
                        >
                          <option value="payouts">Option 1: Instant Payout API (USD to PKR via Raast)</option>
                          <option value="wallets">Option 2: Global PKR Wallet API (Named User Wallets)</option>
                          <option value="both">Both Payouts and Named Wallets</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-4 h-[52px] rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <span>Request API Credentials</span>
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
