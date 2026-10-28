'use client';

import { motion } from 'framer-motion';

export default function ThreeSteps() {
  const steps = [
    {
      step: '01',
      title: 'Instant Account Setup',
      badge: '3-min verification',
      description:
        'Sign up in 3 minutes with CNIC/identity verification. Get dedicated US routing and account details right away in your own name.',
      mockup: (
        <div className="mt-6 rounded-[24px] border border-black/10 bg-[#F9F9F9] p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6CFF94] text-black text-[12px] font-bold">
                ✓
              </span>
              <span className="text-[13px] font-medium text-black">CNIC Verified</span>
            </div>
            <span className="text-[11px] font-mono uppercase text-black/50">ACH Checking</span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-black/60">Routing (ACH)</span>
              <span className="font-mono font-medium text-black">026073150</span>
            </div>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-black/60">Account Number</span>
              <span className="font-mono font-medium text-black">822000123456</span>
            </div>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-black/60">Bank Partner</span>
              <span className="text-black font-medium text-right text-[11px]">Community Federal SB</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      step: '02',
      title: 'Get Paid in USD',
      badge: 'Zero Wire Deductions',
      description:
        'Share your routing details with international clients, Upwork, Deel, Stripe, or direct ACH. Settle client funds without intermediate correspondent wire fees.',
      mockup: (
        <div className="mt-6 rounded-[24px] border border-black/10 bg-[#F9F9F9] p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-black/50">Available Balance</span>
              <div className="text-[26px] font-semibold tracking-tight text-black">$8,500.00</div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6CFF94]/20 text-[#008A20] font-bold text-[14px]">
              $
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-2.5 border border-black/5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                UW
              </div>
              <div>
                <div className="text-[12px] font-medium text-black">Upwork Inc.</div>
                <div className="text-[10px] text-black/50">ACH Transfer Received</div>
              </div>
            </div>
            <div className="text-[13px] font-semibold text-[#00A80E]">+$500.00</div>
          </div>
        </div>
      ),
    },
    {
      step: '03',
      title: 'Spend & Transfer Locally',
      badge: 'Instant Raast Settlement',
      description:
        'Convert to PKR with real-time transparent rates and 0% spread markup. Pay at 100,000+ merchant QR codes nationwide or transfer 24/7 via Raast.',
      mockup: (
        <div className="mt-6 rounded-[24px] border border-black/10 bg-[#F9F9F9] p-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#6CFF94] text-[11px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </span>
              <span className="text-[13px] font-medium text-black">Universal QR Pay</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#6CFF94]/20 px-2 py-0.5 text-[10px] font-medium text-[#007A0A]">
              ● Instant
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3 border border-black/5">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[13px] font-semibold text-black">Cafe Mocca</span>
                <span className="text-emerald-600 text-[11px]">✓</span>
              </div>
              <div className="text-[11px] text-black/50">Verified Zazo Merchant QR</div>
            </div>
            <div className="text-right">
              <div className="text-[14px] font-semibold text-black">Rs 1,250</div>
              <div className="text-[10px] text-[#00A80E] font-medium">Earned +Rs 87</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="three-steps" data-snap-point data-snap-id="three-steps" data-theme-bg="green" className="snap-section relative w-full bg-transparent text-black px-5 lg:px-8 py-24">
      <div className="mx-auto max-w-[1440px]">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/10 px-4 py-1.5 text-[13px] tracking-[-0.26px] text-black font-medium">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span>Simple, Connected Onboarding</span>
            </div>

            <h2 className="text-[38px] sm:text-[48px] xl:text-[54px] leading-[42px] sm:leading-[52px] xl:leading-[58px] tracking-[-1.6px] font-bold text-black m-0">
              Sign up. Get paid. Spend instantly.
            </h2>

            <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] tracking-[-0.6px] text-black/85 font-normal m-0 max-w-xl">
              Three simple steps to start moving money without borders. No branch visits, no hidden wire deductions.
            </p>
          </motion.div>

          {/* 3 Step Cards Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-[36px] bg-white p-7 sm:p-8 border border-black/10 shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 px-3 items-center justify-center rounded-full bg-black text-[#6CFF94] text-[13px] font-mono font-bold tracking-tight">
                      Step {item.step}
                    </span>
                    <span className="rounded-full bg-[#6CFF94]/20 px-3 py-1 text-[11px] font-medium text-[#007A0A]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-[24px] sm:text-[26px] leading-[30px] sm:leading-[32px] tracking-[-0.8px] font-medium text-black m-0">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[22px] tracking-[-0.45px] text-black/70 font-normal m-0">
                    {item.description}
                  </p>
                </div>

                {/* Mockup Preview */}
                {item.mockup}
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Pill */}
          <div className="mt-12 flex justify-center">
            <a
              href="#waitlist"
              className="btn-pill inline-flex items-center gap-2 bg-black text-white hover:bg-black/85 px-8 py-3.5 text-[15px] shadow-lg font-medium transition-all"
            >
              <span>Get Early Access to Zazo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
    </section>
  );
}
