'use client';

import { motion } from 'framer-motion';

export default function SecurityTrust() {
  const points = [
    {
      title: 'Segregated funds.',
      description: "Your PKR sits in your own name at a licensed Pakistan bank — separate from Zazo's operating funds.",
    },
    {
      title: 'Licensed rails.',
      description: 'Built on regulated banking and payment rails in Pakistan.',
    },
    {
      title: 'Encrypted.',
      description: 'AES-256 encryption on your data and transactions.',
    },
    {
      title: 'Fraud protection.',
      description: 'Real-time monitoring on every transaction.',
    },
    {
      title: 'Your data stays yours.',
      description: "We don't sell your data.",
    },
  ];

  return (
    <section
      id="security"
      data-snap-point
      data-snap-id="security"
      data-theme-bg="white"
      className="snap-section w-full bg-transparent py-20 lg:py-28 text-black border-t border-black/10"
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
            5. TRUST & SECURITY
          </span>
          <h2 className="mt-2 text-[36px] sm:text-[46px] leading-[1.1] tracking-[-1.3px] font-bold text-black m-0">
            Your money, held the right way.
          </h2>
        </motion.div>

        {/* 5 Security Points Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] p-7 border border-black/10 bg-black/[0.02] flex flex-col justify-start hover:border-black/25 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6CFF94] text-black text-[12px] font-bold">
                  ✓
                </span>
                <h3 className="text-[20px] font-semibold tracking-[-0.5px] text-black m-0">
                  {item.title}
                </h3>
              </div>
              <p className="text-[15px] leading-[22px] tracking-[-0.45px] text-black/75 m-0 pl-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Partner Footnote from Document */}
        <div className="mt-12 pt-6 border-t border-black/10 text-[12px] sm:text-[13px] text-black/60 italic">
          <p className="m-0">
            Zazo is a technology company, not a bank. Wallet services are provided through licensed partners.
          </p>
        </div>

      </div>
    </section>
  );
}
