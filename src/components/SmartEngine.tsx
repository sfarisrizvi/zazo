'use client';

import { motion } from 'framer-motion';
import CardStackAnimation from './CardStackAnimation';

export default function SmartEngine() {
  const features = [
    {
      title: 'Better rate.',
      body: 'Your USD converts at the Zazo rate — shown before you confirm.',
    },
    {
      title: 'Spend local.',
      body: 'Your PKR pays by QR at supported merchants.',
    },
    {
      title: 'Earn on spend.',
      body: 'Eligible QR payments earn dynamic discounts, up to 10%. The higher your PKR balance, the more you can save.',
      badge: '10% Highlight',
    },
    {
      title: 'One balance.',
      body: 'Receive, hold, spend and send from one wallet.',
    },
  ];

  return (
    <section
      id="smart-engine"
      data-snap-point
      data-snap-id="smart-engine"
      data-theme-bg="white"
      className="snap-section w-full bg-white py-20 lg:py-28 text-black border-t border-black/10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[13px] tracking-[-0.26px] text-black/50 font-normal uppercase">
            4. THE ZAZO SMART ENGINE
          </span>
          <h2 className="mt-2 text-[36px] sm:text-[46px] leading-[1.1] tracking-[-1.3px] font-bold text-black m-0">
            Smarter rates. Smarter rewards.
          </h2>
        </motion.div>

        {/* 2-Column Layout: Left Features, Right Card Stack Visual */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[32px] p-7 border border-black/10 bg-[#F9F9F9] flex flex-col justify-between hover:border-black/25 transition-all"
              >
                <div>
                  {item.badge && (
                    <span className="inline-block rounded-full bg-[#6CFF94] text-black px-3 py-1 text-[12px] font-semibold tracking-tight mb-4">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-[22px] font-medium tracking-[-0.6px] text-black m-0 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-[23px] tracking-[-0.45px] text-black/75 m-0">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Card Stack Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center py-6"
          >
            <CardStackAnimation isRevealed={true} />
          </motion.div>

        </div>

        {/* Footnote from Document */}
        <div className="mt-12 pt-6 border-t border-black/10 text-[12px] sm:text-[13px] text-black/55 italic">
          <p className="m-0">Terms, eligibility and limits apply.</p>
        </div>

      </div>
    </section>
  );
}
