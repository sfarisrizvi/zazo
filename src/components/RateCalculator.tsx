'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';

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
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex h-6 sm:h-7 items-center rounded-full bg-black/5 px-3 sm:px-3.5 text-[11px] sm:text-[12px] font-medium tracking-wide uppercase text-neutral-800 border border-black/10">
            Live Rates
          </span>
          <h2 className="mt-3 sm:mt-4 text-[30px] sm:text-[44px] lg:text-[56px] font-bold leading-[1.1] sm:leading-tight tracking-[-1.4px] sm:tracking-[-2px] text-black m-0">
            Live Rate Calculator
          </h2>
          <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[18px] lg:text-[19px] leading-relaxed text-neutral-600 font-normal m-0 max-w-xl mx-auto px-1">
            With Zazo you walk with at least{' '}
            <span className="text-[#047857] font-semibold">
              {formatPKR(diffExtra)} PKR
            </span>{' '}
            more than any alternative
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
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          COMPARISON TABLE / LIST
          Responsive dual layout:
          - Desktop (sm and up): Clean 4-column spacious table
          - Mobile (< sm): High-density comparison cards with zero horizontal scroll
          ======================================================================
        */}
        <div className="max-w-4xl mx-auto mt-7 sm:mt-10">
          <div className="rounded-[20px] sm:rounded-[24px] border border-black/10 bg-white overflow-hidden shadow-sm">

            {/* 
              ------------------------------------------------------------------
              MOBILE VIEW (< sm / < 640px): 
              No horizontal scrollbar, 100% visible, native mobile feel
              ------------------------------------------------------------------
            */}
            <div className="block sm:hidden divide-y divide-black/5">
              {/* Mobile Table Header */}
              <div className="px-3.5 py-2.5 bg-[#fafafa] flex items-center justify-between text-[11px] font-semibold text-neutral-500 uppercase tracking-wider border-b border-black/5">
                <span>Provider & Rate</span>
                <span className="text-right">You Receive</span>
              </div>

              {/* 1. Zazo Row (Mobile) */}
              <div className="p-3.5 bg-[#6CFF94]/15">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#6CFF94] flex items-center justify-center p-1 shadow-sm shrink-0">
                      <Image
                        src="/favicon.svg"
                        alt="Zazo"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[15px] font-bold text-black">Zazo</span>
                        <span className="inline-flex items-center rounded-full bg-[#6CFF94] px-1.5 py-0.2 text-[9px] font-bold tracking-wide uppercase text-neutral-900 border border-black/10">
                          Best Rate
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-600 mt-0.5">
                        Rate: <span className="font-semibold text-neutral-900">280.00</span> · Fee: <span className="font-semibold text-neutral-900">$0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[15px] font-bold text-[#047857]">
                      {formatPKR(zazoPayout)} PKR
                    </div>
                    <span className="inline-block mt-0.5 text-[9px] font-semibold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                      Guaranteed
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. nSave Row (Mobile) */}
              <div className="p-3.5 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#E52320] flex items-center justify-center text-white font-bold text-[13px] shadow-sm shrink-0 select-none">
                      n
                    </div>
                    <div className="min-w-0">
                      <span className="text-[14px] font-semibold text-neutral-900">nSave</span>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        Rate: <span className="font-medium text-neutral-700">275.29</span> · Fee: <span className="font-medium text-neutral-700">$0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[14px] font-semibold text-neutral-900">
                      {formatPKR(nsavePayout)} PKR
                    </div>
                    <span className="inline-block mt-0.5 text-[10px] font-medium text-red-600">
                      -{formatPKR(zazoPayout - nsavePayout)} PKR
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Elevate Pay Row (Mobile) */}
              <div className="p-3.5 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#1844EB] flex items-center justify-center shadow-sm shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                        <path d="M12 5.5l5.5 12h-3.2l-2.3-5.3-2.3 5.3H6.5L12 5.5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[14px] font-semibold text-neutral-900">Elevate Pay</span>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        Rate: <span className="font-medium text-neutral-700">273.95</span> · Fee: <span className="font-medium text-neutral-700">$0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[14px] font-semibold text-neutral-900">
                      {formatPKR(elevatePayout)} PKR
                    </div>
                    <span className="inline-block mt-0.5 text-[10px] font-medium text-red-600">
                      -{formatPKR(zazoPayout - elevatePayout)} PKR
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Payoneer Row (Mobile) */}
              <div className="p-3.5 bg-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center shadow-sm relative overflow-hidden shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-transparent bg-gradient-to-tr from-[#FF4800] via-[#FF8000] to-[#0070F3] p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#121212]" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[14px] font-semibold text-neutral-900">Payoneer</span>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        Rate: <span className="font-medium text-neutral-700">274.44</span> · Fee: <span className="font-medium text-neutral-700">$15</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[14px] font-semibold text-neutral-900">
                      {formatPKR(payoneerPayout)} PKR
                    </div>
                    <span className="inline-block mt-0.5 text-[10px] font-medium text-red-600">
                      -{formatPKR(zazoPayout - payoneerPayout)} PKR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 
              ------------------------------------------------------------------
              DESKTOP VIEW (sm and up: >= 640px): 
              Full 4-column spacious table matching reference layout
              ------------------------------------------------------------------
            */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-[#fafafa]">
                    <th className="py-4 px-6 text-[11px] sm:text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">
                      Provider
                    </th>
                    <th className="py-4 px-6 text-[11px] sm:text-[12px] font-semibold text-neutral-500 uppercase tracking-wider text-right">
                      Fee
                    </th>
                    <th className="py-4 px-6 text-[11px] sm:text-[12px] font-semibold text-neutral-500 uppercase tracking-wider text-right">
                      Rate
                    </th>
                    <th className="py-4 px-6 text-[11px] sm:text-[12px] font-semibold text-neutral-500 uppercase tracking-wider text-right">
                      You Receive
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {/* 1. ZAZO ROW (HIGHLIGHTED) */}
                  <tr className="bg-[#6CFF94]/12 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#6CFF94] flex items-center justify-center p-1.5 shadow-sm">
                          <Image
                            src="/favicon.svg"
                            alt="Zazo"
                            width={22}
                            height={22}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold text-black">Zazo</span>
                          <span className="inline-flex items-center rounded-full bg-[#6CFF94] px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase text-neutral-900 border border-black/10">
                            Best Rate
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-medium text-neutral-800">$0</td>
                    <td className="py-4 px-6 text-right font-semibold text-neutral-900">280.00</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-[16px] sm:text-[17px] font-bold text-[#047857]">
                        {formatPKR(zazoPayout)} PKR
                      </span>
                    </td>
                  </tr>

                  {/* 2. nSave ROW */}
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#E52320] flex items-center justify-center text-white font-bold text-[14px] shadow-sm select-none">
                          n
                        </div>
                        <span className="text-[15px] font-medium text-neutral-900">nSave</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-normal text-neutral-600">$0</td>
                    <td className="py-4 px-6 text-right font-medium text-neutral-700">275.29</td>
                    <td className="py-4 px-6 text-right font-semibold text-neutral-900">
                      {formatPKR(nsavePayout)} PKR
                    </td>
                  </tr>

                  {/* 3. Elevate Pay ROW */}
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#1844EB] flex items-center justify-center shadow-sm">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                            <path d="M12 5.5l5.5 12h-3.2l-2.3-5.3-2.3 5.3H6.5L12 5.5z" />
                          </svg>
                        </div>
                        <span className="text-[15px] font-medium text-neutral-900">Elevate Pay</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-normal text-neutral-600">$0</td>
                    <td className="py-4 px-6 text-right font-medium text-neutral-700">273.95</td>
                    <td className="py-4 px-6 text-right font-semibold text-neutral-900">
                      {formatPKR(elevatePayout)} PKR
                    </td>
                  </tr>

                  {/* 4. Payoneer ROW */}
                  <tr className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center shadow-sm relative overflow-hidden">
                          <div className="w-4 h-4 rounded-full border-2 border-transparent bg-gradient-to-tr from-[#FF4800] via-[#FF8000] to-[#0070F3] p-[2px]">
                            <div className="w-full h-full rounded-full bg-[#121212]" />
                          </div>
                        </div>
                        <span className="text-[15px] font-medium text-neutral-900">Payoneer</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-normal text-neutral-600">$15</td>
                    <td className="py-4 px-6 text-right font-medium text-neutral-700">274.44</td>
                    <td className="py-4 px-6 text-right font-semibold text-neutral-900">
                      {formatPKR(payoneerPayout)} PKR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table Footer Disclaimer */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#fafafa] border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-[12px] text-neutral-500 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="leading-tight">Rates compared against publicly available provider quotes. No hidden spreads with Zazo.</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-neutral-600 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Guaranteed rate locked before you confirm</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
