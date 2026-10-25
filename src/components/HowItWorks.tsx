'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Create your account',
      copy: 'Sign up and complete the digital verification required for your account in minutes.',
      detail: 'Streamlined onboarding designed to fit cross-border workers and modern businesses.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Receive money',
      copy: 'Use your dedicated receiving details to collect international payments from clients and platforms.',
      detail: 'Direct US routing and account numbers compatible with Upwork, Deel, Stripe, and wire transfers.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Convert with clarity',
      copy: 'Review the quoted rate, transparent flat fees, and expected local PKR amount before confirming.',
      detail: 'What you see is exactly what you get. Locked rates with zero hidden currency markups.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Use your money locally',
      copy: 'Use your PKR balance for supported local payments, instant Raast transfers, and QR spending.',
      detail: 'Zero delays. Move directly from a client receipt to everyday groceries, fuel, and utility bills.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-[90px] text-black">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Step-by-step
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            From getting paid to everyday spending.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            A continuous four-step flow that turns international earnings into ready-to-use local funds.
          </p>
        </motion.div>

        {/* 4 Oversized Step Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-oversized flex flex-col justify-between border border-[#E5E5E5] bg-[#FFFFFF] p-8 lg:p-9 min-h-[380px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] tracking-[-0.28px] text-[#999999]">
                    Step {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F7F7] text-black">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-[24px] leading-[28px] tracking-[-0.72px] font-normal text-black m-0">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[23px] tracking-[-0.48px] text-black font-normal m-0">
                  {item.copy}
                </p>
              </div>

              <div className="mt-6 border-t border-[#E5E5E5] pt-4 text-[13px] leading-[18px] tracking-[-0.26px] text-[#999999]">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
