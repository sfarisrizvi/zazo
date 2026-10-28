'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const tiers = [
    {
      action: 'Open & Maintain Account',
      fee: '₨ 0',
      period: 'No monthly maintenance fees',
      details: 'Digital verification, zero minimum balance requirement, and secure multi-currency wallet creation.',
    },
    {
      action: 'Receive USD Payments',
      fee: '$0.00',
      period: 'Standard ACH deposits',
      details: 'Direct routing numbers for client transfers, platform payouts (Upwork, Deel, Stripe), and foreign invoices.',
    },
    {
      action: 'Currency Conversion',
      fee: 'Locked Quote',
      period: 'Zero hidden spreads',
      details: 'Review the guaranteed exchange rate and final local PKR amount before hitting confirm. No post-transaction surprises.',
    },
    {
      action: 'Local QR & Raast Transfers',
      fee: '₨ 0',
      period: 'Everyday spending & bank transfers',
      details: 'Pay local restaurants, superstores, and utility providers, or transfer funds instantly via the Raast network.',
    },
  ];

  return (
    <section id="pricing" data-snap-point data-snap-id="pricing" data-theme-bg="white" className="snap-section w-full bg-transparent py-[90px] text-black border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Transparent Pricing
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-bold text-black m-0">
            Understand the cost before you move money.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Review the fees that apply to receiving, converting, transferring, and spending. No hidden margins.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((item, idx) => (
            <motion.div
              key={item.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: '50px' }}
              className="card-oversized flex flex-col justify-between border border-[#E5E5E5] bg-white p-8 lg:p-9 min-h-[360px]"
            >
              <div>
                <span className="text-[13px] tracking-[-0.26px] text-[#999999]">
                  {item.period}
                </span>
                <h3 className="mt-2 text-[20px] leading-[26px] tracking-[-0.6px] font-medium text-black m-0">
                  {item.action}
                </h3>
                <div className="mt-6 text-[36px] leading-tight tracking-[-1.08px] font-normal text-black">
                  {item.fee}
                </div>
              </div>

              <div className="mt-6 border-t border-[#E5E5E5] pt-4 text-[13px] leading-[19px] tracking-[-0.26px] text-[#999999]">
                {item.details}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Disclaimer Box from content.md rules */}
        <div
          style={{ borderRadius: '50px' }}
          className="mt-8 border border-[#E5E5E5] bg-white px-6 py-4 text-center text-[13px] tracking-[-0.26px] text-[#999999]"
        >
          Pricing schedule shown is illustrative of planned pre-launch tiers. Complete partner terms and currency caps will be published prior to public launch.
        </div>
      </div>
    </section>
  );
}
