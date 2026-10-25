'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BentoFeatures() {
  const audienceCards = [
    {
      title: 'Freelancers',
      description: 'Get paid by international clients. Spend in PKR the same day.',
      icon: '/figma-icons/freelancers.svg',
    },
    {
      title: 'Businesses',
      description: 'Receive USD from global clients. Pay local teams and vendors.',
      icon: '/figma-icons/businesses.svg',
    },
    {
      title: 'Families',
      description: 'Money from abroad lands ready to spend. No agent, no cash pickup.',
      icon: '/figma-icons/families.svg',
    },
    {
      title: 'Local merchants',
      description: 'Accept Zazo payments with low or no fees — and earn cashback.',
      icon: '/figma-icons/merchants.svg',
    },
    {
      title: 'Everyday users',
      description: 'Spend, send and receive PKR instantly, in one app.',
      icon: '/figma-icons/everyday.svg',
    },
    {
      title: 'Enterprise',
      description: 'Programmatic access for platforms to send and receive at scale.',
      icon: '/figma-icons/enterprise.svg',
      badge: 'Coming soon',
    },
  ];

  const paymentSources = [
    { label: 'Clients', icon: '/figma-icons/clients.svg' },
    { label: 'Invoices', icon: '/figma-icons/invoices.svg' },
    { label: 'Platforms', icon: '/figma-icons/platforms.svg' },
    { label: 'Family', icon: '/figma-icons/family.svg' },
  ];

  return (
    <section
      id="benefits"
      data-snap-point
      data-snap-id="benefits"
      data-theme-bg="white"
      className="snap-section relative w-full bg-transparent text-black px-5 sm:px-8 lg:px-12 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Headline matching other headings styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#999999] font-normal uppercase">
            Who It&apos;s For
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-black m-0">
            Built for everyone who <br className="hidden sm:inline" />moves money across borders.
          </h2>
        </motion.div>

        {/* 6 Audience Cards (3x2 Grid) */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-between h-[270px] sm:h-[290px] lg:h-[300px] rounded-[28px] bg-[#f4f6f5] p-8 overflow-hidden hover:bg-[#ebedec] transition-colors"
            >
              {/* Top row: Icon & Optional Coming Soon Badge */}
              <div className="flex items-start justify-between w-full">
                <div className="w-[52px] h-[52px] shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={52}
                    height={52}
                    className="w-full h-full"
                  />
                </div>
                {card.badge && (
                  <span className="rounded-full bg-white px-3 py-1 text-[13px] font-medium text-[#3a3f3e] shadow-xs">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Bottom text */}
              <div>
                <h3 className="text-[24px] lg:text-[26px] font-medium tracking-[-0.39px] text-[#020202] m-0">
                  {card.title}
                </h3>
                <p className="mt-2 text-[16px] lg:text-[17px] leading-[1.45] text-[#4a4f4e] font-normal m-0">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Payment Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 rounded-[28px] border border-[#e3e8e7] bg-white px-8 lg:px-10 py-7 lg:py-8 shadow-xs"
        >
          <div>
            <h3 className="text-[22px] lg:text-[26px] font-medium tracking-[-0.39px] text-[#020202] m-0">
              If it arrives in USD, Zazo can receive it.
            </h3>
            <p className="mt-1.5 text-[15px] lg:text-[17px] text-[#4a4f4e] font-normal m-0">
              From international clients, freelance platforms or family abroad.
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 self-center lg:self-auto">
            {paymentSources.map((source) => (
              <div key={source.label} className="flex flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-[28px] bg-[#f4f6f5] hover:bg-[#e8eae9] transition-colors">
                  <Image src={source.icon} alt={source.label} width={22} height={22} />
                </div>
                <span className="text-[13px] font-medium text-[#4a4f4e]">{source.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
