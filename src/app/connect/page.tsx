'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Zap, Globe2, ShieldCheck, Terminal, Layers, ArrowUpRight, CheckCircle2, Copy, Check } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function ConnectPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    volume: '100k_500k',
    useCase: 'payouts',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(`curl -X POST https://api.zazo.co/v1/payouts \\
  -H "Authorization: Bearer sec_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000.00,
    "currency": "USD",
    "rail": "RAAST",
    "destination": "PK36SCBL0000001123456701"
  }'`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyName && formData.workEmail) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      {/* Top Navigation */}
      <InternalNavbar activeTab="connect" />

      <main className="flex-1 pt-[74px]">
        {/* 
          ======================================================================
          SECTION 1: HERO
          Document 124 Page 6:
          "Power your platform with PKR rails.
           Give your global users a local Pakistan experience.
           CTA: [ Contact Sales ]
           *Subject to commercial agreement."
          ======================================================================
        */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 border-b border-black/[0.06] bg-[#0c1017] text-white">
          {/* Subtle Ambient Code Matrix Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Category Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#6CFF94] text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>B2B API · Zazo Connect</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[44px] sm:text-[60px] lg:text-[70px] xl:text-[76px] leading-[1.04] font-bold tracking-[-2px] sm:tracking-[-3px] text-white m-0">
                  Power your platform with PKR rails.
                </h1>

                {/* Subheadline from Document 124 */}
                <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-300 font-normal m-0 max-w-xl">
                  Give your global users a local Pakistan experience.
                </p>

                {/* Integration Bullet Points */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-[13px] sm:text-[14px] text-neutral-300 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6CFF94]" />
                    <span>Direct Raast Instant Rail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6CFF94]" />
                    <span>0% FX Markup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6CFF94]" />
                    <span>REST & Webhooks</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact-sales"
                    className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#6CFF94] hover:bg-[#5be682] text-black font-medium text-[15px] transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] select-none"
                  >
                    <span>Contact Sales</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <a
                    href="#options"
                    className="inline-flex items-center gap-2 h-[52px] px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-[15px] border border-white/20 transition-all select-none"
                  >
                    <span>Explore Options</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <span className="text-[12px] text-neutral-400 font-normal w-full sm:w-auto">
                    *Subject to commercial agreement.
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Code Terminal Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl sm:rounded-3xl bg-[#141b24] border border-white/15 shadow-2xl overflow-hidden font-mono">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/40 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[12px] text-neutral-400 font-sans">POST /v1/payouts</span>
                    </div>

                    <button
                      onClick={copyCode}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-neutral-300 text-[11px] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#6CFF94]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy cURL'}</span>
                    </button>
                  </div>

                  {/* Code Body */}
                  <div className="p-5 sm:p-6 text-[12px] sm:text-[13px] leading-relaxed text-neutral-300 overflow-x-auto">
                    <div className="text-neutral-500 mb-2">// 1. Initiate instant settlement via Raast</div>
                    <div className="text-purple-400">curl <span className="text-white">-X POST https://api.zazo.co/v1/payouts \</span></div>
                    <div className="pl-4 text-neutral-400">-H <span className="text-emerald-400">&quot;Authorization: Bearer sec_live_...&quot;</span> \</div>
                    <div className="pl-4 text-neutral-400">-H <span className="text-emerald-400">&quot;Content-Type: application/json&quot;</span> \</div>
                    <div className="pl-4 text-neutral-400">-d <span className="text-yellow-300">&#123;</span></div>
                    <div className="pl-8 text-neutral-200">&quot;source&quot;: &#123; &quot;currency&quot;: <span className="text-emerald-300">&quot;USD&quot;</span>, &quot;amount&quot;: <span className="text-blue-400">1000.00</span> &#125;,</div>
                    <div className="pl-8 text-neutral-200">&quot;destination&quot;: &#123;</div>
                    <div className="pl-12 text-neutral-200">&quot;currency&quot;: <span className="text-emerald-300">&quot;PKR&quot;</span>,</div>
                    <div className="pl-12 text-neutral-200">&quot;rail&quot;: <span className="text-emerald-300">&quot;RAAST&quot;</span>,</div>
                    <div className="pl-12 text-neutral-200">&quot;iban&quot;: <span className="text-emerald-300">&quot;PK36SCBL0000001123456701&quot;</span></div>
                    <div className="pl-8 text-neutral-200">&#125;,</div>
                    <div className="pl-8 text-[#6CFF94] font-semibold">&quot;fx_spread&quot;: &quot;0.00%&quot;</div>
                    <div className="pl-4 text-yellow-300">&#125;</div>

                    {/* Response Badge */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-[12px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#6CFF94] animate-ping" />
                        <span className="text-[#6CFF94] font-bold">200 OK</span>
                        <span className="text-neutral-400">• Settled in 1.4s</span>
                      </div>
                      <span className="text-neutral-500">Rate: 278.40 PKR/USD</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 2: TWO OPTIONS (BENTO DEEP DIVE)
          Document 124 Page 6:
          "Option 1: Instant Payout API
           Option 2: Global PKR Wallet API"
          ======================================================================
        */}
        <section id="options" className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-semibold tracking-widest uppercase text-neutral-800 border border-black/10">
                Architectural Models
              </span>
              <h2 className="mt-3.5 text-[36px] sm:text-[48px] lg:text-[58px] font-bold tracking-[-1.5px] sm:tracking-[-2px] leading-[1.08] text-black m-0">
                Two ways to integrate Zazo.
              </h2>
              <p className="mt-3 text-[17px] sm:text-[20px] text-neutral-600 font-normal m-0 max-w-xl mx-auto">
                Choose the integration mode that matches your product flow and regulatory footprint.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Option 1: Instant Payout API */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6CFF94]/20 border border-[#047857]/30 text-[#047857] text-[11px] font-semibold uppercase tracking-wider mb-6">
                    <span>Option 1</span>
                  </div>

                  <h3 className="text-[28px] sm:text-[34px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Instant Payout API
                  </h3>
                  
                  <p className="mt-3 text-[16px] sm:text-[18px] text-neutral-600 font-normal leading-relaxed m-0">
                    Direct USD to PKR payouts via Raast in seconds. Interbank rate, 0% FX markup. No named customer wallets required.
                  </p>

                  <ul className="mt-6 space-y-3 text-[14px] text-neutral-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
                      <span>Send directly to any Pakistani IBAN, CNIC, or Raast Alias</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
                      <span>24/7/365 real-time clearing with webhook confirmations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
                      <span>0% markup over interbank mid-market rate</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl bg-[#0f172a] text-white p-5 border border-white/10 font-mono text-[12px]">
                  <div className="text-neutral-400 mb-1">// Endpoint spec</div>
                  <div className="text-[#6CFF94] font-bold">POST https://api.zazo.co/v1/payouts</div>
                  <div className="mt-2 text-neutral-300">Clearing Rail: <span className="text-white font-bold">State Bank Raast P2P / P2M</span></div>
                  <div className="text-neutral-300">Average Settlement: <span className="text-[#6CFF94] font-bold">&lt; 2 seconds</span></div>
                </div>
              </div>

              {/* Option 2: Global PKR Wallet API */}
              <div className="rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-neutral-800 text-[11px] font-semibold uppercase tracking-wider mb-6">
                    <span>Option 2</span>
                  </div>

                  <h3 className="text-[28px] sm:text-[34px] font-bold text-black tracking-[-1px] leading-tight m-0">
                    Global PKR Wallet API
                  </h3>
                  
                  <p className="mt-3 text-[16px] sm:text-[18px] text-neutral-600 font-normal leading-relaxed m-0">
                    Give your global users a named PKR wallet inside your platform. Hold, convert on demand, and spend across Pakistan.
                  </p>

                  <ul className="mt-6 space-y-3 text-[14px] text-neutral-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span>Virtual dedicated PKR IBANs issued per user</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span>On-demand conversion between USD and PKR with locked quotes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                      <span>Built-in KYC verification and AML monitoring handled by licensed partners</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] p-5 font-mono text-[12px] text-black">
                  <div className="text-neutral-500 mb-1">// Wallet resource spec</div>
                  <div className="font-bold text-black">POST https://api.zazo.co/v1/wallets</div>
                  <div className="mt-2 text-neutral-700">Type: <span className="font-semibold text-black">Dedicated Virtual Sub-Account</span></div>
                  <div className="text-neutral-700">Currency Support: <span className="font-semibold text-emerald-700">USD + PKR Multi-Currency</span></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 3: AUDIENCE
          Document 124 Page 6:
          "Audience:
           • Fintechs
           • Remittance Apps
           • Neobanks
           • Marketplaces"
          ======================================================================
        */}
        <section className="relative w-full bg-white py-20 lg:py-28 overflow-hidden border-b border-black/[0.06]">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-semibold tracking-widest uppercase text-neutral-800 border border-black/10">
                Who Connect Is Built For
              </span>
              <h2 className="mt-3.5 text-[34px] sm:text-[46px] font-bold tracking-[-1.5px] leading-tight text-black m-0">
                Built for platforms moving money to Pakistan.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Fintechs */}
              <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                  <Zap className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[20px] font-bold text-black mb-2">Fintechs</h4>
                <p className="text-[14px] text-neutral-600 font-normal leading-relaxed m-0">
                  Embed instant Pakistan payout capabilities into existing financial workflows with simple SDKs.
                </p>
              </div>

              {/* Remittance Apps */}
              <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                  <Globe2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[20px] font-bold text-black mb-2">Remittance Apps</h4>
                <p className="text-[14px] text-neutral-600 font-normal leading-relaxed m-0">
                  Eliminate traditional correspondent banking fees and deliver 0% markup rates directly to Pakistani families.
                </p>
              </div>

              {/* Neobanks */}
              <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                  <Layers className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[20px] font-bold text-black mb-2">Neobanks</h4>
                <p className="text-[14px] text-neutral-600 font-normal leading-relaxed m-0">
                  Offer overseas Pakistani diaspora customers fully compliant virtual PKR sub-accounts in your native banking app.
                </p>
              </div>

              {/* Marketplaces */}
              <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                  <Code2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[20px] font-bold text-black mb-2">Marketplaces</h4>
                <p className="text-[14px] text-neutral-600 font-normal leading-relaxed m-0">
                  Disburse earnings directly to thousands of Pakistani contractors, freelancers, and sellers in seconds.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 
          ======================================================================
          SECTION 4: CONTACT SALES FORM
          Document 124 Page 6:
          "CTA: [ Contact Sales ]
           Subject to commercial agreement."
          ======================================================================
        */}
        <section id="contact-sales" className="relative w-full bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="rounded-[32px] sm:rounded-[40px] bg-black text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6CFF94]/15 rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Side: Copy */}
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

                  <div className="mt-8 space-y-3 text-[14px] text-neutral-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Dedicated technical integration engineer</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Sandbox environment with mock Raast rails</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6CFF94] shrink-0" />
                      <span>Volume-based tier discounts</span>
                    </div>
                  </div>

                  <p className="mt-8 text-[12px] text-neutral-500 font-normal m-0">
                    Subject to commercial agreement and compliance onboarding.
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

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}

