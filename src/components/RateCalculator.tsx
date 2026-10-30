'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown, ShieldCheck, Sparkles, QrCode, Percent, ShoppingBag, Check, X, AlertCircle } from 'lucide-react';

interface Competitor {
  id: string;
  name: string;
  fee: number;
  rate: number;
  isZazo?: boolean;
  badge?: string;
}

const competitors: Competitor[] = [
  {
    id: 'zazo',
    name: 'Zazo',
    fee: 0,
    rate: 280.0,
    isZazo: true,
    badge: 'Best Rate',
  },
  {
    id: 'nsave',
    name: 'nSave',
    fee: 0,
    rate: 275.29,
  },
  {
    id: 'elevate',
    name: 'Elevate Pay',
    fee: 0,
    rate: 273.95,
  },
  {
    id: 'payoneer',
    name: 'Payoneer',
    fee: 15,
    rate: 274.44,
  },
];

export default function RateCalculator() {
  const [usdAmount, setUsdAmount] = useState<number>(500);
  const [inputValue, setInputValue] = useState<string>('500');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, '');
    setInputValue(raw);
    const parsed = parseFloat(raw);
    if (!isNaN(parsed) && parsed >= 0) {
      setUsdAmount(parsed);
    } else if (raw === '') {
      setUsdAmount(0);
    }
  };

  const handlePresetSelect = (val: number) => {
    setUsdAmount(val);
    setInputValue(val.toString());
  };

  const formatPKR = (val: number) => {
    return val.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Calculations
  const zazoPayout = usdAmount * 280.0;
  const nsavePayout = usdAmount * 275.29;
  const elevatePayout = usdAmount * 273.95;
  const payoneerPayout = Math.max(0, usdAmount - 15) * 274.44;

  const bestCompetitor = Math.max(nsavePayout, elevatePayout, payoneerPayout);
  const diffExtra = Math.max(0, zazoPayout - bestCompetitor);

  return (
    <section
      id="rates"
      data-snap-point
      data-snap-id="rates"
      data-theme-bg="white"
      className="relative z-20 w-full bg-white text-black py-12 sm:py-16 lg:py-24 overflow-hidden border-t border-black/5"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex h-6 sm:h-7 items-center rounded-full bg-black/5 px-3 sm:px-3.5 text-[11px] sm:text-[12px] font-medium tracking-wide uppercase text-neutral-800 border border-black/10">
            Live Rates
          </span>
          <h2 className="mt-3 sm:mt-4 text-[32px] sm:text-[46px] lg:text-[58px] font-bold leading-[1.1] sm:leading-tight tracking-[-1.4px] sm:tracking-[-2px] text-black m-0">
            Only Zazo pays you back.
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[18px] lg:text-[19px] leading-relaxed text-neutral-600 font-normal m-0 max-w-2xl mx-auto px-1">
            The only wallet in Pakistan built for global receiving and everyday local spend with rewards.
          </p>
        </div>

        {/* 
          ======================================================================
          CENTER CONVERSION CARD (Left: USD Editable | Right: PKR)
          ======================================================================
        */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-10">
          <div className="bg-[#f8f9fa] rounded-[24px] sm:rounded-[28px] border border-black/[0.08] p-4 sm:p-7 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-1 sm:gap-4">

              {/* Left Box: USD Input */}
              <div className="relative z-0 bg-white rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-5 border border-black/10 shadow-sm focus-within:border-black/30 focus-within:ring-2 focus-within:ring-black/5 transition-all">
                <div className="text-[11px] sm:text-[12px] font-medium text-neutral-500 uppercase tracking-wider mb-1 sm:mb-1.5 flex items-center justify-between">
                  <span>You send</span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400">USD</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[24px] sm:text-[32px] font-bold text-neutral-400 select-none">$</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="0"
                    aria-label="USD amount"
                    className="w-full text-[24px] sm:text-[32px] font-bold text-black outline-none bg-transparent placeholder-neutral-300 min-w-0"
                  />
                  <div className="shrink-0 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[12px] sm:text-[13px] font-semibold text-neutral-800 select-none">
                    <span className="text-[14px] sm:text-[15px]">🇺🇸</span> USD
                  </div>
                </div>
              </div>

              {/* Middle: Exchange Rate Arrow (Overlapping both boxes on mobile) */}
              <div className="relative z-10 flex items-center justify-center -my-3.5 sm:my-0 py-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center text-neutral-600 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:block" />
                  <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 block sm:hidden" />
                </div>
              </div>

              {/* Right Box: PKR Output */}
              <div className="relative z-0 bg-white rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-5 border border-black/10 shadow-sm">
                <div className="text-[11px] sm:text-[12px] font-medium text-neutral-500 uppercase tracking-wider mb-1 sm:mb-1.5 flex items-center justify-between">
                  <span>You get (Zazo)</span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Rate: 280.00
                  </span>
                </div>
                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                  <div className="text-[22px] sm:text-[30px] font-bold text-[#047857] truncate tracking-tight min-w-0">
                    {formatPKR(zazoPayout)}
                  </div>
                  <div className="shrink-0 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[12px] sm:text-[13px] font-semibold text-emerald-800 select-none">
                    <span className="text-[14px] sm:text-[15px]">🇵🇰</span> PKR
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Amount Pills & Slider */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-black/5 flex flex-col gap-3.5 sm:gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[12px] text-neutral-500">
                <span className="font-medium text-[11px] sm:text-[12px]">Quick select:</span>
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0">
                  {[100, 500, 1000, 2500, 5000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetSelect(val)}
                      className={`shrink-0 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium transition-all cursor-pointer ${usdAmount === val
                          ? 'bg-black text-white shadow-sm'
                          : 'bg-white border border-black/10 text-neutral-700 hover:bg-neutral-100'
                        }`}
                    >
                      ${val.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Range Slider */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-[11px] font-semibold text-neutral-400 shrink-0">$100</span>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={50}
                  value={Math.min(5000, Math.max(100, usdAmount || 100))}
                  onChange={(e) => handlePresetSelect(Number(e.target.value))}
                  className="w-full accent-[#047857] h-2 bg-neutral-200 rounded-lg cursor-pointer"
                />
                <span className="text-[11px] font-semibold text-neutral-400 shrink-0">$5,000</span>
              </div>

              {/* Dynamic PKR Advantage Callout */}
              <div className="pt-2 text-center text-[13px] sm:text-[14px] text-neutral-600">
                With Zazo you walk away with at least{' '}
                <span className="text-[#047857] font-bold">
                  {formatPKR(diffExtra)} PKR
                </span>{' '}
                more than any alternative
              </div>
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          "Only Zazo pays you back." - COMPARISON TABLE
          Table layout with competitor logos & brand names in the header:
          • Features | Zazo (Featured) | nSave | Elevate | Payoneer
          • QR Payments in Pakistan: ✅ Zazo | ❌ nSave | ❌ Elevate | ❌ Payoneer
          • QR Discounts (Up to 10%): ✅ Zazo | ❌ nSave | ❌ Elevate | ❌ Payoneer
          • Seller Payouts: ✅ Zazo | ⚠️ Limited (nSave) | ⚠️ Limited (Elevate) | ✅ Payoneer
          ======================================================================
        */}
        <div className="max-w-4xl mx-auto mt-10 sm:mt-14">
          {/* Table Container with responsive scroll */}
          <div className="rounded-[22px] sm:rounded-[26px] border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-neutral-50/80">
                    {/* Criteria Header */}
                    <th scope="col" className="py-4 sm:py-5 px-4 sm:px-6 w-[34%] text-[12px] sm:text-[13px] font-bold text-neutral-500 uppercase tracking-wider align-bottom">
                      Features
                    </th>

                    {/* Zazo Header (Featured) */}
                    <th scope="col" className="py-4 sm:py-5 px-3 sm:px-4 w-[20%] text-center bg-[#6CFF94]/15 border-x border-emerald-500/20 relative align-bottom">
                      <div className="inline-block mb-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#047857] text-white">
                          Best Value
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1.5">
                        <div className="w-9 h-9 rounded-full bg-white border border-[#047857]/30 flex items-center justify-center p-1.5 shadow-sm">
                          <Image
                            src="/zazo.svg"
                            alt="Zazo Logo"
                            width={22}
                            height={22}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <span className="text-[15px] sm:text-[16px] font-bold text-black tracking-tight">
                          Zazo
                        </span>
                      </div>
                    </th>

                    {/* nSave Header */}
                    <th scope="col" className="py-4 sm:py-5 px-3 sm:px-4 w-[15%] text-center align-bottom">
                      <div className="flex flex-col items-center justify-center gap-1.5 pb-1">
                        <div className="w-9 h-9 rounded-full bg-[#E52320] flex items-center justify-center text-white font-bold text-[15px] shadow-sm select-none">
                          n
                        </div>
                        <span className="text-[14px] sm:text-[15px] font-semibold text-neutral-800">
                          nSave
                        </span>
                      </div>
                    </th>

                    {/* Elevate Header */}
                    <th scope="col" className="py-4 sm:py-5 px-3 sm:px-4 w-[15%] text-center align-bottom">
                      <div className="flex flex-col items-center justify-center gap-1.5 pb-1">
                        <div className="w-9 h-9 rounded-full bg-[#1844EB] flex items-center justify-center shadow-sm text-white">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 5.5l5.5 12h-3.2l-2.3-5.3-2.3 5.3H6.5L12 5.5z" />
                          </svg>
                        </div>
                        <span className="text-[14px] sm:text-[15px] font-semibold text-neutral-800">
                          Elevate
                        </span>
                      </div>
                    </th>

                    {/* Payoneer Header */}
                    <th scope="col" className="py-4 sm:py-5 px-3 sm:px-4 w-[16%] text-center align-bottom">
                      <div className="flex flex-col items-center justify-center gap-1.5 pb-1">
                        <div className="w-9 h-9 rounded-full bg-[#121212] flex items-center justify-center shadow-sm relative overflow-hidden">
                          <div className="w-4 h-4 rounded-full border-2 border-transparent bg-gradient-to-tr from-[#FF4800] via-[#FF8000] to-[#0070F3] p-[2px]">
                            <div className="w-full h-full rounded-full bg-[#121212]" />
                          </div>
                        </div>
                        <span className="text-[14px] sm:text-[15px] font-semibold text-neutral-800">
                          Payoneer
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-black/5 text-[14px]">
                  {/* Row 1: QR Payments in Pakistan */}
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 sm:py-5 px-4 sm:px-6">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          <QrCode className="w-4 h-4 text-neutral-800" />
                        </div>
                        <div>
                          <div className="font-bold text-black text-[14px] sm:text-[15px]">
                            QR Payments in Pakistan
                          </div>
                          <div className="text-[12px] text-neutral-500 font-normal">
                            Scan to pay at retail counters and merchant standees
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Zazo */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center bg-[#6CFF94]/15 border-x border-emerald-500/20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6CFF94]/30 border border-[#047857]/40 text-[#047857] font-bold text-[13px] shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Supported</span>
                      </div>
                    </td>

                    {/* nSave */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>

                    {/* Elevate */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>

                    {/* Payoneer */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>
                  </tr>

                  {/* Row 2: QR Discounts (Up to 10%) */}
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 sm:py-5 px-4 sm:px-6">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          <Percent className="w-4 h-4 text-neutral-800" />
                        </div>
                        <div>
                          <div className="font-bold text-black text-[14px] sm:text-[15px]">
                            QR Discounts (Up to 10%)
                          </div>
                          <div className="text-[12px] text-neutral-500 font-normal">
                            Dynamic discounts automatically applied on eligible local scans
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Zazo */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center bg-[#6CFF94]/15 border-x border-emerald-500/20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6CFF94]/30 border border-[#047857]/40 text-[#047857] font-bold text-[13px] shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Up to 10%</span>
                      </div>
                    </td>

                    {/* nSave */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>

                    {/* Elevate */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>

                    {/* Payoneer */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-50 border border-rose-200/70 text-rose-500">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>
                  </tr>

                  {/* Row 3: Seller Payouts */}
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 sm:py-5 px-4 sm:px-6">
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                          <ShoppingBag className="w-4 h-4 text-neutral-800" />
                        </div>
                        <div>
                          <div className="font-bold text-black text-[14px] sm:text-[15px]">
                            Seller Payouts
                          </div>
                          <div className="text-[12px] text-neutral-500 font-normal">
                            Receive payouts from Amazon, eBay, Etsy & international clients
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Zazo */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center bg-[#6CFF94]/15 border-x border-emerald-500/20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6CFF94]/30 border border-[#047857]/40 text-[#047857] font-bold text-[13px] shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Supported</span>
                      </div>
                    </td>

                    {/* nSave */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-medium">
                        <AlertCircle className="w-3 h-3 text-amber-700" />
                        <span>Limited</span>
                      </div>
                    </td>

                    {/* Elevate */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[12px] font-medium">
                        <AlertCircle className="w-3 h-3 text-amber-700" />
                        <span>Limited</span>
                      </div>
                    </td>

                    {/* Payoneer */}
                    <td className="py-4 sm:py-5 px-3 sm:px-4 text-center">
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-4 sm:px-6 py-3.5 bg-neutral-50/90 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-[12px] text-neutral-500 gap-2 text-center sm:text-left">
              <span>Features compared across supported Pakistani consumer and merchant offerings.</span>
              <span className="font-semibold text-neutral-700 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Guaranteed rate locked before you confirm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
