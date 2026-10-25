'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [usdAmount, setUsdAmount] = useState<number>(1000);
  const exchangeRate = 278.50; // Illustrative rate: 1 USD = 278.50 PKR

  const pkrAmount = Math.round(usdAmount * exchangeRate);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdAmount(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= 0) {
      setUsdAmount(val);
    }
  };

  return (
    <section id="calculator" className="w-full bg-[#F7F7F7] py-[90px] text-black border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Interactive Calculator
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            See what your money could become.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Enter an amount to explore the estimated conversion. Review the final quote before confirming a transaction.
          </p>
        </motion.div>

        {/* Oversized Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-oversized mx-auto mt-12 max-w-3xl border border-[#E5E5E5] bg-white p-8 sm:p-14"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            {/* Input Side: You Send */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label htmlFor="usd-input" className="text-[14px] tracking-[-0.28px] text-[#999999]">
                  You send
                </label>
                <span className="text-[14px] font-normal tracking-[-0.28px] text-black">
                  USD ($)
                </span>
              </div>

              <div className="relative flex items-center">
                <span className="absolute left-4 text-[24px] text-black font-normal">$</span>
                <input
                  id="usd-input"
                  type="number"
                  min="50"
                  max="10000"
                  step="50"
                  value={usdAmount}
                  onChange={handleInputChange}
                  className="h-[56px] w-full rounded-full border border-[#E5E5E5] bg-[#F7F7F7] pl-10 pr-4 text-[24px] tracking-[-0.72px] text-black font-normal focus:border-black focus:outline-none"
                />
              </div>

              {/* Slider for quick adjustment */}
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={usdAmount > 5000 ? 5000 : usdAmount}
                onChange={handleSliderChange}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#E5E5E5] accent-black"
              />
              <div className="flex justify-between text-[11px] tracking-[-0.22px] text-[#999999]">
                <span>$100</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Output Side: You Receive */}
            <div className="flex flex-col justify-between rounded-[40px] bg-[#F7F7F7] p-6 border border-[#E5E5E5]">
              <div className="flex items-center justify-between">
                <span className="text-[14px] tracking-[-0.28px] text-[#999999]">
                  You receive (Estimated)
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-[#6CFF94]/20 px-2.5 text-[11px] text-black font-normal">
                  PKR (₨)
                </span>
              </div>

              <div className="mt-4 text-[36px] sm:text-[44px] leading-tight tracking-[-1.32px] font-normal text-black">
                ₨ {pkrAmount.toLocaleString()}
              </div>

              <div className="mt-4 flex flex-col gap-1 border-t border-[#E5E5E5] pt-3 text-[12px] tracking-[-0.24px] text-[#999999]">
                <div className="flex justify-between">
                  <span>Exchange Rate</span>
                  <span className="text-black font-normal">1 USD = 278.50 PKR</span>
                </div>
                <div className="flex justify-between">
                  <span>Transfer Fee</span>
                  <span className="text-black font-normal">$0.00 (Free)</span>
                </div>
                <div className="flex justify-between">
                  <span>Hidden Spread</span>
                  <span className="text-black font-normal">0.0%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5E5E5] pt-6">
            <p className="text-[12px] leading-[18px] tracking-[-0.24px] text-[#999999] m-0 text-center sm:text-left max-w-md">
              Illustrative example only. Exchange rates fluctuate continuously. Your guaranteed rate is locked and shown prior to confirming any transaction.
            </p>
            <a
              href="#waitlist"
              className="btn-pill btn-primary w-full sm:w-auto whitespace-nowrap"
            >
              Lock in this rate on the waitlist →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
