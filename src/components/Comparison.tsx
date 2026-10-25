'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type StatusType = 'check' | 'partial' | 'dash';

export default function Comparison() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<'elevate' | 'payoneer' | 'nsave' | 'all'>('elevate');

  const comparisonRows: {
    title: string;
    subtitle: string;
    zazo: StatusType;
    nsave: StatusType;
    elevate: StatusType;
    payoneer: StatusType;
  }[] = [
    {
      title: 'Receive global payments',
      subtitle: 'USD now · more currencies soon',
      zazo: 'check',
      nsave: 'check',
      elevate: 'check',
      payoneer: 'check',
    },
    {
      title: 'See the exact rate before converting',
      subtitle: '',
      zazo: 'check',
      nsave: 'partial',
      elevate: 'partial',
      payoneer: 'partial',
    },
    {
      title: 'Withdraw to local bank or wallet',
      subtitle: '',
      zazo: 'check',
      nsave: 'check',
      elevate: 'check',
      payoneer: 'check',
    },
    {
      title: 'Spend in-app, in local currency',
      subtitle: '',
      zazo: 'check',
      nsave: 'dash',
      elevate: 'dash',
      payoneer: 'dash',
    },
    {
      title: 'Earn rewards on local spend',
      subtitle: '',
      zazo: 'check',
      nsave: 'dash',
      elevate: 'dash',
      payoneer: 'dash',
    },
    {
      title: 'Merchants pay low or no fees + cashback',
      subtitle: '',
      zazo: 'check',
      nsave: 'dash',
      elevate: 'dash',
      payoneer: 'dash',
    },
    {
      title: 'One app, start to finish',
      subtitle: '',
      zazo: 'check',
      nsave: 'dash',
      elevate: 'dash',
      payoneer: 'dash',
    },
  ];

  const renderStatus = (status: 'check' | 'partial' | 'dash', isZazo = false) => {
    if (status === 'check') {
      if (isZazo) {
        return (
          <div className="flex items-center justify-center">
            <div className="size-[30px] rounded-full bg-[#6cff94] flex items-center justify-center shadow-xs">
              <Image
                src="/figma-icons/check-green.svg"
                alt="Supported"
                width={16}
                height={16}
                className="size-[16px]"
              />
            </div>
          </div>
        );
      }
      return (
        <div className="flex items-center justify-center">
          <div className="size-[30px] rounded-full bg-white/10 flex items-center justify-center">
            <Image
              src="/figma-icons/check-gray.svg"
              alt="Supported"
              width={16}
              height={16}
              className="size-[16px]"
            />
          </div>
        </div>
      );
    }

    if (status === 'partial') {
      return (
        <div className="flex items-center justify-center">
          <span className="text-[#6a706f] text-[14px] font-medium tracking-tight">
            Partial
          </span>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center">
        <span className="text-[#3a3f3e] text-[20px] font-normal select-none leading-none">
          —
        </span>
      </div>
    );
  };

  return (
    <section
      id="comparison"
      data-snap-point
      data-snap-id="comparison"
      data-theme-bg="black"
      className="snap-section relative w-full bg-transparent py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-2px] font-normal text-white m-0">
            One app
            <br />
            instead of three.
          </h2>
          <div className="text-[17px] sm:text-[20px] leading-[1.5] text-[#9aa09f] font-normal max-w-xl">
            <p className="m-0">Most cross-border apps stop at your bank account.</p>
            <p className="m-0">Zazo finishes the job.</p>
          </div>
        </motion.div>

        {/* 
          ======================================================================
          MOBILE VIEW (< lg): Dedicated responsive card with Competitor Switcher
          ======================================================================
        */}
        <div className="block lg:hidden mt-10">
          {/* Competitor Selector Segmented Control */}
          <div className="flex items-center justify-between gap-1 p-1 rounded-full bg-[#141716] border border-white/10 max-w-sm mx-auto mb-6">
            <button
              onClick={() => setSelectedCompetitor('elevate')}
              className={`flex-1 py-1.5 px-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all ${
                selectedCompetitor === 'elevate'
                  ? 'bg-[#6CFF94] text-black shadow-sm font-semibold'
                  : 'text-[#9aa09f] hover:text-white'
              }`}
            >
              ElevatePay
            </button>
            <button
              onClick={() => setSelectedCompetitor('payoneer')}
              className={`flex-1 py-1.5 px-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all ${
                selectedCompetitor === 'payoneer'
                  ? 'bg-[#6CFF94] text-black shadow-sm font-semibold'
                  : 'text-[#9aa09f] hover:text-white'
              }`}
            >
              Payoneer
            </button>
            <button
              onClick={() => setSelectedCompetitor('nsave')}
              className={`flex-1 py-1.5 px-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all ${
                selectedCompetitor === 'nsave'
                  ? 'bg-[#6CFF94] text-black shadow-sm font-semibold'
                  : 'text-[#9aa09f] hover:text-white'
              }`}
            >
              nsave
            </button>
            <button
              onClick={() => setSelectedCompetitor('all')}
              className={`flex-1 py-1.5 px-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all ${
                selectedCompetitor === 'all'
                  ? 'bg-white/20 text-white shadow-sm font-semibold'
                  : 'text-[#9aa09f] hover:text-white'
              }`}
            >
              All
            </button>
          </div>

          {selectedCompetitor !== 'all' ? (
            /* Head-to-Head 3-Column Card (Fits screen 100% without horizontal scroll) */
            <div className="w-full rounded-[24px] bg-[#0E100F] border border-white/10 p-4 sm:p-5 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_80px_80px] items-center pb-3.5 border-b border-white/10 text-center">
                <div className="text-left text-[#6a706f] text-[12px] uppercase font-medium tracking-tight">
                  Features
                </div>
                {/* Zazo Header Highlight */}
                <div className="flex items-center justify-center gap-1.5 rounded-[14px] bg-[#141A17] border border-[#6CFF94]/40 py-1 px-1.5 shadow-[0_0_15px_rgba(108,255,148,0.12)]">
                  <div className="relative w-3.5 h-3.5">
                    <Image
                      src="/figma-icons/zazo-logo-mark.svg"
                      alt="Zazo"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-bold text-white tracking-tight">ZAZO</span>
                </div>
                {/* Competitor Header */}
                <div className="flex items-center justify-center">
                  <span className="text-[13px] font-medium text-[#9aa09f]">
                    {selectedCompetitor === 'elevate'
                      ? 'ElevatePay'
                      : selectedCompetitor === 'payoneer'
                      ? 'Payoneer'
                      : 'nsave'}
                  </span>
                </div>
              </div>

              {/* Feature Rows */}
              <div className="divide-y divide-white/[0.07]">
                {comparisonRows.map((row) => (
                  <div
                    key={row.title}
                    className="grid grid-cols-[1fr_80px_80px] items-center py-3 gap-2"
                  >
                    <div className="flex flex-col pr-1">
                      <span className="text-[14px] font-normal text-white leading-snug">
                        {row.title}
                      </span>
                      {row.subtitle && (
                        <span className="text-[11px] text-[#6a706f] mt-0.5">
                          {row.subtitle}
                        </span>
                      )}
                    </div>
                    {/* Zazo Status */}
                    <div className="flex justify-center">
                      <div className="size-[26px] rounded-full bg-[#6CFF94] flex items-center justify-center shadow-xs">
                        <Image
                          src="/figma-icons/check-green.svg"
                          alt="Supported"
                          width={14}
                          height={14}
                          className="size-[14px]"
                        />
                      </div>
                    </div>
                    {/* Competitor Status */}
                    <div className="flex justify-center">
                      {renderStatus(row[selectedCompetitor as 'elevate' | 'payoneer' | 'nsave'])}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* All Competitors Swipe View with Sticky Feature Column */
            <div className="w-full rounded-[24px] bg-[#0E100F] border border-white/10 shadow-2xl overflow-hidden">
              <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-center text-[11px] text-[#9aa09f]">
                ← Swipe table horizontally to compare all providers →
              </div>
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[540px]">
                  {/* Header Row */}
                  <div className="grid grid-cols-[160px_90px_90px_90px_90px] items-center h-[56px] border-b border-white/10 px-3">
                    <div className="sticky left-0 bg-[#0E100F] z-20 text-[#6a706f] text-[12px] font-medium pr-2">
                      Features
                    </div>
                    <div className="flex items-center justify-center gap-1.5 font-bold text-white text-[13px] bg-[#141A17] py-1 rounded-xl border border-[#6CFF94]/30">
                      <Image
                        src="/figma-icons/zazo-logo-mark.svg"
                        alt="Zazo"
                        width={13}
                        height={13}
                      />
                      <span>ZAZO</span>
                    </div>
                    <div className="text-center text-[13px] font-medium text-[#9aa09f]">ElevatePay</div>
                    <div className="text-center text-[13px] font-medium text-[#9aa09f]">Payoneer</div>
                    <div className="text-center text-[13px] font-medium text-[#9aa09f]">nsave</div>
                  </div>

                  {/* Data Rows */}
                  {comparisonRows.map((row, idx) => (
                    <div
                      key={row.title}
                      className={`grid grid-cols-[160px_90px_90px_90px_90px] items-center min-h-[56px] py-2 px-3 ${
                        idx !== comparisonRows.length - 1 ? 'border-b border-white/[0.06]' : ''
                      }`}
                    >
                      <div className="sticky left-0 bg-[#0E100F] z-20 flex flex-col pr-2">
                        <span className="text-[13px] font-normal text-white leading-tight">
                          {row.title}
                        </span>
                        {row.subtitle && (
                          <span className="text-[10px] text-[#6a706f] mt-0.5">
                            {row.subtitle}
                          </span>
                        )}
                      </div>
                      <div>{renderStatus(row.zazo, true)}</div>
                      <div>{renderStatus(row.elevate)}</div>
                      <div>{renderStatus(row.payoneer)}</div>
                      <div>{renderStatus(row.nsave)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 
          ======================================================================
          DESKTOP VIEW (>= lg): Full spacious 5-column comparison table
          ======================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block mt-14 lg:mt-20 overflow-x-auto pb-6"
        >
          <div className="min-w-[900px] max-w-[1140px] mx-auto relative">
            {/* 
              Highlight Card for Zazo column
              Sits behind the 2nd column (exact width 170px, exactly 510px from the right edge where nsave, ElevatePay, Payoneer live)
            */}
            <div
              className="absolute -top-3 -bottom-3 right-[510px] w-[170px] rounded-[28px] bg-[#111413] border border-[#6cff94]/35 shadow-[0px_0px_40px_0px_rgba(107,255,148,0.12)] pointer-events-none z-0"
            />

            {/* Header Row */}
            <div className="relative z-10 grid grid-cols-[1fr_170px_170px_170px_170px] items-center h-[100px] border-b border-white/[0.08]">
              {/* Features Label */}
              <div className="pr-4">
                <span className="text-[#6a706f] text-[15px] font-medium tracking-tight">
                  Features
                </span>
              </div>

              {/* Zazo Header */}
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-[22px] h-[25px]">
                  <Image
                    src="/figma-icons/zazo-logo-mark.svg"
                    alt="Zazo"
                    width={22}
                    height={25}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[20px] font-bold text-white tracking-tight">
                  ZAZO
                </span>
              </div>

              {/* nsave */}
              <div className="flex items-center justify-center">
                <span className="text-[#9aa09f] text-[16px] font-medium tracking-tight">
                  nsave
                </span>
              </div>

              {/* ElevatePay */}
              <div className="flex items-center justify-center">
                <span className="text-[#9aa09f] text-[16px] font-medium tracking-tight">
                  ElevatePay
                </span>
              </div>

              {/* Payoneer */}
              <div className="flex items-center justify-center">
                <span className="text-[#9aa09f] text-[16px] font-medium tracking-tight">
                  Payoneer
                </span>
              </div>
            </div>

            {/* 7 Feature Data Rows */}
            {comparisonRows.map((row, idx) => {
              const isLast = idx === comparisonRows.length - 1;
              const borderClass = isLast ? '' : 'border-b border-white/[0.08]';

              return (
                <div
                  key={row.title}
                  className={`relative z-10 grid grid-cols-[1fr_170px_170px_170px_170px] items-center h-[76px] ${borderClass}`}
                >
                  {/* Feature Title + Subtitle */}
                  <div className="flex flex-col justify-center pr-4">
                    <span className="text-[17px] sm:text-[18px] font-normal text-white">
                      {row.title}
                    </span>
                    {row.subtitle && (
                      <span className="text-[13px] font-normal text-[#6a706f] mt-0.5">
                        {row.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Zazo Status */}
                  <div>{renderStatus(row.zazo, true)}</div>

                  {/* nsave Status */}
                  <div>{renderStatus(row.nsave)}</div>

                  {/* ElevatePay Status */}
                  <div>{renderStatus(row.elevate)}</div>

                  {/* Payoneer Status */}
                  <div>{renderStatus(row.payoneer)}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Closing Footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col gap-3.5 items-center text-center px-4"
        >
          <div className="text-[18px] sm:text-[20px] leading-[1.5] text-white font-normal">
            <p className="m-0">Others get your money to your local account.</p>
            <p className="m-0">Zazo gets it into your pocket — and rewards you for spending it at home.</p>
          </div>
          <p className="text-[13px] leading-normal text-[#6a706f] font-normal m-0 max-w-2xl">
            Feature comparison based on publicly available information as of [date]; rates and terms vary by provider.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
