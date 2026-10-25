'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiveFxCalculator() {
  const [usdAmount, setUsdAmount] = useState<number>(1000);
  const exchangeRate = 278.40;
  const bankExchangeRate = 266.20;

  const pkrAmount = Math.round(usdAmount * exchangeRate);
  const bankPkrAmount = Math.round(usdAmount * bankExchangeRate);
  const savings = pkrAmount - bankPkrAmount;

  const presets = [250, 500, 1000, 2500, 5000];

  return (
    <section id="calculator" data-snap-point data-snap-id="calculator" data-theme-bg="black" className="snap-section relative w-full bg-transparent text-white px-5 lg:px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6CFF94]/30 bg-[#6CFF94]/10 px-4 py-1.5 text-[13px] tracking-[-0.26px] text-[#6CFF94] font-medium">
              <span className="h-2 w-2 rounded-full bg-[#6CFF94] animate-pulse" />
              <span>Live Mid-Market Exchange</span>
            </div>

            <h2 className="text-[38px] sm:text-[48px] xl:text-[54px] leading-[42px] sm:leading-[52px] xl:leading-[58px] tracking-[-1.6px] font-normal text-white m-0">
              See the best rate before you convert.
            </h2>

            <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] tracking-[-0.6px] text-[#A3A3A3] font-normal m-0 max-w-xl">
              Live mid-market rates with 0% hidden markup. What you see is what lands in your wallet.
            </p>
          </motion.div>

          {/* Calculator Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-14 max-w-5xl rounded-[40px] border border-white/15 bg-black p-6 sm:p-10 xl:p-12 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Interactive Inputs (Cols 1-7) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Presets */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px] text-[#888888] mr-1">Quick Select:</span>
                  {presets.map((val) => (
                    <button
                      key={val}
                      onClick={() => setUsdAmount(val)}
                      className={`px-3 py-1.5 rounded-full text-[13px] font-mono transition-all cursor-pointer ${
                        usdAmount === val
                          ? 'bg-[#6CFF94] text-black font-semibold'
                          : 'bg-black text-white/70 hover:bg-white/10 border border-white/20'
                      }`}
                    >
                      ${val.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* You Send Input Card */}
                <div className="rounded-[28px] bg-black border border-white/20 p-5 sm:p-6 transition-all focus-within:border-[#6CFF94]/60 focus-within:shadow-[0_0_20px_rgba(108,255,148,0.15)]">
                  <div className="flex items-center justify-between text-[13px] text-[#888888]">
                    <span>You send</span>
                    <span className="flex items-center gap-1.5 font-medium text-white">
                      <span className="text-[16px]">🇺🇸</span> USD (US Dollar)
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[28px] sm:text-[34px] font-normal text-white/40">$</span>
                    <input
                      type="number"
                      min="10"
                      max="100000"
                      value={usdAmount}
                      onChange={(e) => setUsdAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-transparent text-right text-[32px] sm:text-[40px] font-normal text-white tracking-tight outline-none"
                    />
                  </div>
                </div>

                {/* Live Middle Swap Indicator */}
                <div className="relative flex items-center justify-center my-[-8px] z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black border border-white/20 px-4 py-1.5 text-[12px] text-[#A0A0A0] shadow-md">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6CFF94] text-black text-[10px] font-bold">
                      ⇄
                    </span>
                    <span className="font-mono text-white">1 USD = {exchangeRate.toFixed(2)} PKR</span>
                    <span className="text-[#6CFF94] font-medium">• 0% Spread</span>
                  </div>
                </div>

                {/* You Receive Output Card */}
                <div className="rounded-[28px] bg-black border border-white/20 p-5 sm:p-6">
                  <div className="flex items-center justify-between text-[13px] text-[#888888]">
                    <span>You receive (Guaranteed)</span>
                    <span className="flex items-center gap-1.5 font-medium text-white">
                      <span className="text-[16px]">🇵🇰</span> PKR (Pakistani Rupee)
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[28px] sm:text-[34px] font-normal text-[#6CFF94]">Rs</span>
                    <div className="text-[32px] sm:text-[40px] font-normal text-[#6CFF94] tracking-tight">
                      {pkrAmount.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="rounded-[24px] bg-black border border-white/15 p-4 flex flex-col gap-2 text-[13px]">
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>Intermediary wire deduction</span>
                    <span className="text-[#6CFF94] font-mono">$0.00 (Zero)</span>
                  </div>
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>Zazo conversion spread</span>
                    <span className="text-[#6CFF94] font-mono">0.0% (Mid-Market)</span>
                  </div>
                  <div className="flex items-center justify-between text-[#888888] pt-1.5 border-t border-white/5">
                    <span className="text-white font-medium">Estimated arrival</span>
                    <span className="text-white font-mono">Instant via Raast</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <a
                    href="#waitlist"
                    className="btn-pill inline-flex items-center justify-center gap-2 w-full bg-[#6CFF94] text-black hover:bg-[#5CE883] py-4 text-[16px] font-semibold tracking-tight shadow-lg transition-all"
                  >
                    <span>Lock this rate & Join Waitlist</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>

              </div>

              {/* Right Column: Comparison & Rate Trend Graph (Cols 8-12) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Savings Callout Card */}
                <div className="rounded-[32px] bg-gradient-to-br from-[#1b381e] to-[#121e14] border border-[#6CFF94]/30 p-6 sm:p-7">
                  <span className="text-[11px] uppercase tracking-wider text-[#6CFF94] font-mono">
                    YOUR NET BENEFIT
                  </span>
                  <div className="mt-2 text-[32px] font-normal tracking-tight text-white">
                    +Rs {savings.toLocaleString()}
                  </div>
                  <p className="mt-2 text-[13px] leading-[19px] text-white/80 font-normal">
                    More PKR in your pocket compared to conventional Pakistani bank foreign wire transfers on a ${usdAmount.toLocaleString()} transfer.
                  </p>

                  <div className="mt-5 rounded-2xl bg-black/40 p-3.5 border border-white/10 flex flex-col gap-2 text-[12px]">
                    <div className="flex justify-between text-[#888888]">
                      <span>Traditional Bank (avg 266.20)</span>
                      <span className="font-mono text-white/60">Rs {bankPkrAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[#6CFF94] font-medium">
                      <span>Zazo Transparent (278.40)</span>
                      <span className="font-mono text-[#6CFF94]">Rs {pkrAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Simulated 30-Day Rate Trend SVG */}
                <div className="rounded-[32px] bg-[#181818] border border-white/10 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] uppercase text-[#888888] tracking-wider">
                        30-Day USD/PKR Rate Trend
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#6CFF94]/15 px-2 py-0.5 text-[10px] text-[#6CFF94] font-mono">
                        +0.4% 30D
                      </span>
                    </div>

                    <div className="mt-4 h-[120px] w-full flex items-end">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6CFF94" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#6CFF94" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,80 Q50,75 80,60 T150,55 T220,35 T300,20 L300,100 L0,100 Z"
                          fill="url(#chartGradient)"
                        />
                        <path
                          d="M0,80 Q50,75 80,60 T150,55 T220,35 T300,20"
                          fill="none"
                          stroke="#6CFF94"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Current Point Dot */}
                        <circle cx="300" cy="20" r="4.5" fill="#6CFF94" />
                        <circle cx="300" cy="20" r="8" fill="#6CFF94" opacity="0.3" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#888888]">
                    <span>30 days ago: 277.20</span>
                    <span className="text-[#6CFF94] font-medium">Live Now: 278.40</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
    </section>
  );
}
