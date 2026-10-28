'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SeeTheDifference() {
  const [sendAmount, setSendAmount] = useState<number>(1000);

  // Exchange calculations strictly based on document rates (280.00 for Zazo, 275.13 for nsave, etc.)
  const zazoRate = 280.0;
  const nsaveRate = 275.13;
  const elevateRate = 274.03;
  const payoneerRate = 274.28;

  const formatPKR = (val: number) => {
    return Math.round(val).toLocaleString('en-US');
  };

  return (
    <section
      id="difference"
      data-snap-point
      data-snap-id="difference"
      data-theme-bg="black"
      className="snap-section w-full bg-black py-20 lg:py-28 text-white border-t border-white/10"
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-[13px] tracking-[-0.26px] text-[#888888] font-normal uppercase">
            3. SEE THE DIFFERENCE
          </span>
          <h2 className="mt-2 text-[36px] sm:text-[46px] leading-[1.1] tracking-[-1.3px] font-bold text-white m-0">
            The only one that spends where you live.
          </h2>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-x-auto rounded-[32px] border border-white/15 bg-white/[0.02]"
        >
          <table className="w-full min-w-[620px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                <th className="py-5 px-6 text-[14px] font-medium text-[#888888] uppercase tracking-wider w-1/3">
                  Feature
                </th>
                <th className="py-5 px-6 text-[15px] font-semibold text-[#6CFF94]">
                  Zazo
                </th>
                <th className="py-5 px-6 text-[15px] font-normal text-white/80">
                  nsave
                </th>
                <th className="py-5 px-6 text-[15px] font-normal text-white/80">
                  Elevate Pay
                </th>
                <th className="py-5 px-6 text-[15px] font-normal text-white/80">
                  Payoneer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-[14px] sm:text-[15px]">
              <tr>
                <td className="py-5 px-6 font-medium text-white">QR payments in Pakistan</td>
                <td className="py-5 px-6 font-semibold text-[#6CFF94]">Yes</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
              </tr>
              <tr>
                <td className="py-5 px-6 font-medium text-white">Local QR discounts</td>
                <td className="py-5 px-6 font-semibold text-[#6CFF94]">Up to 10%*</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
                <td className="py-5 px-6 text-white/50">Not available</td>
              </tr>
              <tr>
                <td className="py-5 px-6 font-medium text-white">FX Fee, Hidden Spread</td>
                <td className="py-5 px-6 font-semibold text-[#6CFF94]">None</td>
                <td className="py-5 px-6 text-white/70">Yes</td>
                <td className="py-5 px-6 text-white/70">Yes</td>
                <td className="py-5 px-6 text-white/70">Yes up to 2%</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Compare Your Payout (Calculator) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-[36px] border border-white/15 bg-white/[0.03] p-7 sm:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-medium tracking-[-0.8px] text-white m-0">
                Compare your payout (Calculator)
              </h3>
              <p className="mt-1 text-[14px] text-[#A3A3A3] tracking-[-0.3px] m-0">
                Compare rates. See fees. Know what you receive.
              </p>
            </div>

            {/* Interactive Send Input */}
            <div className="flex items-center gap-3 bg-black border border-white/20 rounded-2xl px-5 py-3 self-start md:self-auto">
              <span className="text-[14px] text-white/70 font-medium whitespace-nowrap">
                You send: $
              </span>
              <input
                type="number"
                min="10"
                max="50000"
                value={sendAmount || ''}
                onChange={(e) => setSendAmount(Number(e.target.value) || 0)}
                className="w-24 bg-transparent text-[18px] font-mono text-white outline-none font-semibold"
                placeholder="1000"
              />
              <span className="text-[13px] text-white/50 font-mono">USD</span>
            </div>
          </div>

          {/* Calculator Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[13px] font-medium text-[#888888] uppercase tracking-wider">
                  <th className="pb-4 px-4">Provider</th>
                  <th className="pb-4 px-4">Rate</th>
                  <th className="pb-4 px-4 text-right">You receive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[15px]">
                <tr className="bg-[#6CFF94]/10">
                  <td className="py-4 px-4 font-semibold text-[#6CFF94] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6CFF94]" />
                    <span>Zazo</span>
                  </td>
                  <td className="py-4 px-4 text-white/90 font-mono">[live]</td>
                  <td className="py-4 px-4 text-right font-mono font-bold text-[#6CFF94] text-[17px]">
                    PKR {formatPKR(sendAmount * zazoRate)}*
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white/90">nsave</td>
                  <td className="py-4 px-4 text-white/50 font-mono">[live]</td>
                  <td className="py-4 px-4 text-right font-mono text-white/80">
                    PKR {formatPKR(sendAmount * nsaveRate)}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white/90">Elevate Pay</td>
                  <td className="py-4 px-4 text-white/50 font-mono">[live]</td>
                  <td className="py-4 px-4 text-right font-mono text-white/80">
                    PKR {formatPKR(sendAmount * elevateRate)}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white/90">Payoneer</td>
                  <td className="py-4 px-4 text-white/50 font-mono">[live]</td>
                  <td className="py-4 px-4 text-right font-mono text-white/80">
                    PKR {formatPKR(sendAmount * payoneerRate)}**
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Calculator Footnote from Document */}
          <div className="mt-8 pt-6 border-t border-white/10 text-[12px] sm:text-[13px] leading-relaxed text-[#888888]">
            <p className="m-0">
              *Illustrative. Fees may apply. Competitor rates for comparison only; verify current rates directly with each provider. **Before fees. Rates indicative and may change.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
