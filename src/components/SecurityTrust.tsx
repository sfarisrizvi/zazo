'use client';

import { motion } from 'framer-motion';

export default function SecurityTrust() {
  const pillars = [
    {
      title: 'Regulated Financial Rails',
      subtitle: 'Licensed Institution Custody',
      copy: 'Zazo is a financial technology platform. Custody and banking services are provided in direct partnership with licensed and regulated financial institutions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: '256-Bit Data Encryption',
      subtitle: 'End-to-End Protection',
      copy: 'All account data and financial communications are encrypted in transit and at rest using bank-grade 256-bit AES standards with biometric app authentication.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
    },
    {
      title: 'AML/CFT Compliance',
      subtitle: 'Proactive Fraud Detection',
      copy: 'Continuous monitoring and identity verification aligned with State Bank and global anti-money laundering and counter-financing of terrorism compliance standards.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="security" data-snap-point data-snap-id="security" data-theme-bg="white" className="snap-section w-full bg-transparent py-[90px] text-black border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Trust & Security
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            Understand how your money and information are handled.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Specific, transparent security practices designed to safeguard funds and personal identity without ambiguity.
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-oversized flex flex-col justify-between border border-[#E5E5E5] bg-[#FFFFFF] p-8 lg:p-10 min-h-[350px]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F7F7] text-black">
                  {item.icon}
                </div>
                <div className="mt-6 text-[13px] tracking-[-0.26px] text-[#999999]">
                  {item.subtitle}
                </div>
                <h3 className="mt-2 text-[22px] leading-[28px] tracking-[-0.66px] font-normal text-black m-0">
                  {item.title}
                </h3>
              </div>

              <p className="mt-6 border-t border-[#E5E5E5] pt-4 text-[15px] leading-[22px] tracking-[-0.45px] text-black font-normal m-0">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
