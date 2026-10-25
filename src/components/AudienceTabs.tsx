'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudienceTabs() {
  const personas = [
    {
      id: 'freelancers',
      label: 'Freelancers',
      tagline: 'Global work. Money that fits life at home.',
      situation: 'Earning from international clients and platforms while managing everyday local expenses in Pakistan.',
      points: [
        'Collect client funds via direct US routing and account details (Upwork, Deel, Stripe).',
        'Avoid double currency conversion fees and hidden intermediary wire deductions.',
        'Convert to PKR when you want and spend immediately via local QR or Raast.',
      ],
      image: '/freelancer.jpg',
      imageAlt: 'Zazo Freelancers earning globally and managing expenses in Pakistan',
    },
    {
      id: 'businesses',
      label: 'Businesses',
      tagline: 'Connect international income with local business spending.',
      situation: 'Managing foreign client retainers, SaaS subscriptions, and local Pakistani operational vendor payroll.',
      points: [
        'Dedicated corporate receiving channels with transparent transaction records.',
        'Real-time reconciliation of incoming foreign exchange receipts.',
        'Instant settlement into local vendor accounts without bank paperwork.',
      ],
      image: '/business.jpg',
      imageAlt: 'Zazo Businesses managing international revenue and local payroll',
    },
    {
      id: 'remittances',
      label: 'Remittances',
      tagline: 'Money from abroad, ready for life at home.',
      situation: 'Receiving family financial support from overseas without mystery exchange spreads or bank queues.',
      points: [
        'Track payments every step of the journey with instant delivery notifications.',
        'Guaranteed exchange rate shown before the sender hits confirm.',
        'Funds immediately available to pay electricity, school fees, and daily needs.',
      ],
      image: '/remitance.jpg',
      imageAlt: 'Zazo Remittances receiving family support directly with locked exchange rates',
    },
    {
      id: 'merchants',
      label: 'Local Merchants',
      tagline: 'Make it easier for customers to pay your business.',
      situation: 'Accepting in-store customer payments without expensive POS hardware terminals or high transaction interchange fees.',
      points: [
        'Display a single QR code on your counter for instant customer scan-to-pay.',
        'Zero setup hardware cost and immediate wallet balance settlement.',
        'Offer customer cashback rewards supported by the Zazo network.',
      ],
      image: '/local.jpg',
      imageAlt: 'Zazo Local Merchants counter QR payments and instant settlement',
    },
  ];

  const [activeTab, setActiveTab] = useState(personas[0].id);
  const currentPersona = personas.find((p) => p.id === activeTab) || personas[0];

  return (
    <section id="personas" data-snap-point data-snap-id="personas" data-theme-bg="white" className="snap-section w-full bg-transparent py-[90px] text-black border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Audience Use Cases
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            Different lives. One connected money journey.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#999999] font-normal m-0">
            Whether you earn across borders or run a local shop, Zazo brings money home to work for you.
          </p>
        </motion.div>

        {/* Tab Pills */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {personas.map((p) => {
            const isActive = p.id === activeTab;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveTab(p.id)}
                className={`btn-pill text-[13px] tracking-[-0.26px] transition-all duration-150 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-[#F7F7F7] text-black border border-[#E5E5E5] hover:bg-black/5'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Active Persona Content in Oversized Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPersona.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="card-oversized mt-8 border border-[#E5E5E5] bg-[#FFFFFF] p-8 sm:p-14"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              {/* Left Column: Story & Points */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="inline-flex h-7 items-center self-start rounded-full bg-[#F7F7F7] px-3.5 text-[12px] tracking-[-0.24px] text-black border border-[#E5E5E5]">
                  {currentPersona.label} Focus
                </span>
                <h3 className="mt-4 text-[28px] sm:text-[34px] leading-[32px] sm:leading-[38px] tracking-[-1.02px] font-normal text-black m-0">
                  {currentPersona.tagline}
                </h3>
                <p className="mt-4 text-[17px] sm:text-[18px] leading-[25px] tracking-[-0.54px] text-black/80 font-normal m-0">
                  {currentPersona.situation}
                </p>

                <ul className="mt-6 flex flex-col gap-3 pl-0 list-none m-0">
                  {currentPersona.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[23px] tracking-[-0.48px] text-black">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6CFF94] text-black">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Persona Image */}
              <div className="lg:col-span-5 w-full">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E5E5E5] bg-[#F7F7F7] shadow-sm">
                  <Image
                    src={currentPersona.image}
                    alt={currentPersona.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
