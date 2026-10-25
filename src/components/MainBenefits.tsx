'use client';

import { motion } from 'framer-motion';

export default function MainBenefits() {
  const benefits = [
    {
      badge: 'Global Receiving',
      title: 'Get paid globally',
      copy: 'Bring supported international payments into one place, with a clearer view of your balance and real-time transaction activity.',
      visual: (
        <div className="rounded-[40px] bg-[#F7F7F7] p-6 border border-[#E5E5E5] text-black">
          <div className="flex items-center justify-between text-[13px] tracking-[-0.26px] text-[#999999]">
            <span>Direct Client Transfer</span>
            <span className="text-[#000000]">Active</span>
          </div>
          <div className="mt-2 text-[32px] tracking-[-0.96px] font-normal text-black">
            $4,850.00
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex h-6 items-center rounded-full bg-white px-3 text-[11px] border border-[#E5E5E5] text-black">
              ACH Payout
            </span>
            <span className="inline-flex h-6 items-center rounded-full bg-white px-3 text-[11px] border border-[#E5E5E5] text-black">
              Upwork Wire
            </span>
          </div>
        </div>
      ),
    },
    {
      badge: 'Conversion Transparency',
      title: 'Understand your conversion',
      copy: 'See the quoted exchange rate and expected local currency amount together, so you can make informed decisions before confirming.',
      visual: (
        <div className="rounded-[40px] bg-[#F7F7F7] p-6 border border-[#E5E5E5] text-black">
          <div className="flex items-center justify-between text-[13px] tracking-[-0.26px]">
            <span className="text-[#999999]">Guaranteed Quote</span>
            <span className="text-black">1 USD = 278.40 PKR</span>
          </div>
          <div className="mt-2 text-[32px] tracking-[-0.96px] font-normal text-black">
            ₨ 278,400
          </div>
          <div className="mt-3 text-[12px] tracking-[-0.24px] text-[#999999]">
            Zero spread markup • 100% transparent rate
          </div>
        </div>
      ),
    },
    {
      badge: 'Local Utility',
      title: 'Spend locally with ease',
      copy: 'Connect your international income directly with supported everyday QR payments and instant bank transfers across Pakistan.',
      visual: (
        <div className="rounded-[40px] bg-[#F7F7F7] p-6 border border-[#E5E5E5] text-black">
          <div className="flex items-center justify-between text-[13px] tracking-[-0.26px]">
            <span className="text-[#999999]">Everyday Settlement</span>
            <span className="text-black">Instant</span>
          </div>
          <div className="mt-2 text-[32px] tracking-[-0.96px] font-normal text-black">
            QR + Raast
          </div>
          <div className="mt-3 text-[12px] tracking-[-0.24px] text-[#999999]">
            Supported at restaurants, superstores & local banks
          </div>
        </div>
      ),
    },
    {
      badge: 'Activity Rewards',
      title: 'Explore activity rewards',
      copy: 'Learn how eligible payment activity and balances may qualify for rewards, with all criteria and conditions explained upfront.',
      visual: (
        <div className="rounded-[40px] bg-[#F7F7F7] p-6 border border-[#E5E5E5] text-black">
          <div className="flex items-center justify-between text-[13px] tracking-[-0.26px]">
            <span className="text-[#999999]">Rewards Tier</span>
            <span className="text-black">Tier 1 Active</span>
          </div>
          <div className="mt-2 text-[32px] tracking-[-0.96px] font-normal text-black">
            ₨ 1,200 Cash
          </div>
          {/* Thin 8px green progress pill */}
          <div className="mt-3">
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E5E5]">
              <div className="h-full w-[70%] rounded-full bg-[#6CFF94]"></div>
            </div>
            <div className="mt-1.5 flex justify-between text-[11px] text-[#999999]">
              <span>Progress to Tier 2</span>
              <span className="text-black">70%</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="benefits" className="w-full bg-white py-[90px] text-black border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Core Advantages
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            Built for money that moves across borders.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Every feature is engineered to replace fragmented steps with clarity, control, and zero unexpected surprises.
          </p>
        </motion.div>

        {/* 2x2 Bento Grid of Oversized Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-oversized flex flex-col justify-between border border-[#E5E5E5] bg-[#FFFFFF] p-8 sm:p-12"
            >
              <div>
                <span className="inline-flex h-7 items-center rounded-full bg-[#F7F7F7] px-3 text-[12px] tracking-[-0.24px] text-black border border-[#E5E5E5]">
                  {item.badge}
                </span>
                <h3 className="mt-6 text-[28px] sm:text-[32px] leading-[32px] sm:leading-[36px] tracking-[-0.96px] font-normal text-black m-0">
                  {item.title}
                </h3>
                <p className="mt-4 text-[18px] leading-[25px] tracking-[-0.54px] text-black font-normal m-0">
                  {item.copy}
                </p>
              </div>

              <div className="mt-8">
                {item.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
