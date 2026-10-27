'use client';

import Image from 'next/image';

interface ParallelFeature {
  id: string;
  badge: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  statLabel: string;
  statValue: string;
  statDetail: string;
  accentColor: string;
  imagePosition: 'left' | 'right';
  theme: 'white' | 'green';
  aspectRatio: string;
}

const features: ParallelFeature[] = [
  {
    id: 'local-qr-payments',
    badge: 'Local QR Pay',
    headline: 'Scan & pay locally.',
    description: 'Instant checkout at any merchant standee.',
    image: '/local-payment.png',
    imageAlt: 'Zazo Scan to Pay QR standee and instant local checkout',
    statLabel: 'Settlement Speed',
    statValue: 'Instant',
    statDetail: 'Zero hidden fees',
    accentColor: '#6CFF94',
    imagePosition: 'right', // Row 1: Text Left | Image Right
    theme: 'white',
    aspectRatio: '1536 / 1024',
  },
  {
    id: 'global-to-local',
    badge: 'Global to Local',
    headline: 'From payout to local spend.',
    description: 'Spend your earnings anywhere across Pakistan.',
    image: '/local-merchant.png',
    imageAlt: 'Zazo connecting global receiving to local shop spending in Pakistan',
    statLabel: 'Settlement Speed',
    statValue: 'Instant',
    statDetail: 'Zero bank queues',
    accentColor: '#FFE600',
    imagePosition: 'left', // Row 2: Image Left | Text Right
    theme: 'white',
    aspectRatio: '1536 / 1024',
  },
  {
    id: 'scan-to-pay',
    badge: 'Zero Cash',
    headline: 'Pay with a tap.',
    description: 'No cash or cards needed for daily checkout.',
    image: '/pay-QR.png',
    imageAlt: 'Customer scanning Zazo counter QR code at local cafe in Pakistan',
    statLabel: 'Checkout Time',
    statValue: '< 2 Sec',
    statDetail: 'Fast counter confirmation',
    accentColor: '#38BDF8',
    imagePosition: 'right', // Row 3: Text Left | Image Right
    theme: 'white',
    aspectRatio: '1536 / 1024',
  },
  {
    id: 'multi-currency-card',
    badge: 'Multi-Currency',
    headline: 'Hold USD, spend PKR.',
    description: 'Virtual and physical cards with zero maintenance fees.',
    image: '/Agencies.png',
    imageAlt: 'Zazo Multi-currency wallet and physical debit cards',
    statLabel: 'Card Fee',
    statValue: 'Rs 0 Fee',
    statDetail: 'Zero annual charges',
    accentColor: '#6CFF94',
    imagePosition: 'left', // Row 4: Image Left | Text Right
    theme: 'green',
    aspectRatio: '1672 / 941',
  },
];

export default function ParallelShowcase() {
  return (
    <section
      id="features"
      data-snap-point
      data-snap-id="features"
      className="relative w-full bg-transparent py-16 lg:py-24 overflow-hidden transition-colors duration-700"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          data-theme-bg="white"
          className="mx-auto max-w-3xl text-center flex flex-col items-center pt-8 pb-16 lg:pt-12 lg:pb-24"
        >
          <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[12px] font-medium tracking-wide uppercase text-neutral-800 border border-black/10">
            Connected Money Features
          </span>
          <h2 className="mt-4 text-[36px] sm:text-[46px] lg:text-[54px] font-normal leading-tight tracking-[-1.5px] text-black m-0">
            Engineered for clarity.
            <br />
            Built for Pakistan.
          </h2>
          <p className="mt-3 text-[17px] sm:text-[19px] leading-relaxed text-neutral-600 font-normal m-0 max-w-xl">
            Settle local payments instantly with zero hidden fees.
          </p>
        </div>

        {/* 
          ======================================================================
          FULL-SCREEN PARALLEL SHOWCASE ROWS
          Each row occupies min-h-screen so ONLY ONE section fits on screen at once
          ======================================================================
        */}
        <div className="flex flex-col">
          {features.map((feat) => {
            const isImageLeft = feat.imagePosition === 'left';

            return (
              <div
                key={feat.id}
                id={feat.id}
                data-snap-point
                data-snap-id={`feat-${feat.id}`}
                data-theme-bg={feat.theme}
                className="relative w-full min-h-screen flex flex-col justify-center py-28 lg:py-40 my-16 lg:my-28"
              >
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 w-full">
                  {/* 
                    TEXT CARD
                    Overlaps a portion of the big image with negative margin & high z-index
                  */}
                  <div
                    className={`w-full lg:w-[44%] xl:w-[42%] z-10 shrink-0 ${
                      isImageLeft
                        ? 'lg:order-2 lg:-ml-24 xl:-ml-28'
                        : 'lg:order-1 lg:-mr-24 xl:-mr-28'
                    }`}
                  >
                    {(() => {
                      const isWhiteGlass = feat.theme === 'white' || feat.theme === 'green';
                      const accentColor =
                        isWhiteGlass && feat.accentColor === '#6CFF94'
                          ? '#047857'
                          : isWhiteGlass && feat.accentColor === '#FFE600'
                          ? '#B45309'
                          : isWhiteGlass && feat.accentColor === '#38BDF8'
                          ? '#0284C7'
                          : feat.accentColor;

                      return (
                        <div
                          className={`rounded-[32px] p-8 sm:p-10 backdrop-blur-2xl transition-all duration-500 ${
                            isWhiteGlass
                              ? 'border border-white/80 bg-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-black'
                              : 'border border-white/15 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-white'
                          }`}
                        >
                          {/* Badge */}
                          <span
                            className="inline-flex h-7 items-center rounded-full px-3 text-[11px] sm:text-[12px] font-medium uppercase tracking-wider border"
                            style={{
                              backgroundColor: `${feat.accentColor}18`,
                              borderColor: isWhiteGlass ? `${accentColor}40` : `${feat.accentColor}40`,
                              color: accentColor,
                            }}
                          >
                            {feat.badge}
                          </span>

                          {/* Headline */}
                          <h3
                            className={`mt-4 whitespace-pre-line text-[28px] sm:text-[34px] lg:text-[38px] leading-[32px] sm:leading-[38px] lg:leading-[42px] font-normal tracking-[-1.2px] m-0 ${
                              isWhiteGlass ? 'text-black' : 'text-white'
                            }`}
                          >
                            {feat.headline}
                          </h3>

                          {/* Description */}
                          <p
                            className={`mt-3 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed tracking-[-0.3px] font-normal m-0 ${
                              isWhiteGlass ? 'text-neutral-600' : 'text-[#A3A3A3]'
                            }`}
                          >
                            {feat.description}
                          </p>

                          {/* Stat Card Highlight */}
                          <div
                            className={`mt-6 pt-5 border-t flex items-baseline justify-between gap-4 ${
                              isWhiteGlass ? 'border-black/10' : 'border-white/10'
                            }`}
                          >
                            <div>
                              <span
                                className={`text-[11px] uppercase tracking-wider block ${
                                  isWhiteGlass ? 'text-neutral-500' : 'text-[#888888]'
                                }`}
                              >
                                {feat.statLabel}
                              </span>
                              <div
                                className="mt-1 text-[24px] sm:text-[28px] font-normal tracking-tight"
                                style={{ color: accentColor }}
                              >
                                {feat.statValue}
                              </div>
                            </div>
                            <span
                              className={`text-[12px] text-right max-w-[160px] ${
                                isWhiteGlass ? 'text-neutral-600' : 'text-[#A3A3A3]'
                              }`}
                            >
                              {feat.statDetail}
                            </span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* 
                    BIG EXPANSIVE IMAGE
                    Occupies ~64% width on desktop, giving it grand hero-scale presence!
                  */}
                  <div
                    className={`w-full lg:w-[64%] xl:w-[66%] z-0 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      className="group relative w-full rounded-[32px] sm:rounded-[44px] overflow-hidden border border-black/10 bg-[#f7f7f7] shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-[1.01]"
                      style={{ aspectRatio: feat.aspectRatio }}
                    >
                      <Image
                        src={feat.image}
                        alt={feat.imageAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 980px"
                        className="object-contain object-center select-none"
                      />
                      {/* Ambient inner glow */}
                      <div
                        className="absolute inset-0 pointer-events-none rounded-[32px] sm:rounded-[44px] transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                        style={{
                          boxShadow: `inset 0 0 60px ${feat.accentColor}30`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
