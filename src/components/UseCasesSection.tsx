'use client';

import Image from 'next/image';

interface UseCaseItem {
  id: string;
  tabLabel: string;
  headline: string;
  description: string;
  bgColor: string;
  themeAttr: 'magenta' | 'yellow' | 'blue' | 'indigo' | 'purple';
  textColor: 'white' | 'black';
  image: string;
  mobileImage: string;
  imageAlt: string;
}

const useCases: UseCaseItem[] = [
  {
    id: 'freelancers',
    tabLabel: 'Freelancers',
    headline: 'Freelancers',
    description: 'Get paid globally. Spend locally.',
    bgColor: '#DB1584',
    themeAttr: 'magenta',
    textColor: 'white',
    image: '/freelancer.png',
    mobileImage: '/freelancer-mobile.png',
    imageAlt: 'Zazo for Freelancers getting paid globally and spending locally',
  },
  {
    id: 'families',
    tabLabel: 'Families',
    headline: 'Families',
    description: 'Receive remittances. Spend at home.',
    bgColor: '#FEDD42',
    themeAttr: 'yellow',
    textColor: 'black',
    image: '/local-purchase.png',
    mobileImage: '/local-purchase-mobile.png',
    imageAlt: 'Zazo for Families receiving remittances and spending at home',
  },
  {
    id: 'agencies',
    tabLabel: 'Agencies & Software Houses',
    headline: 'Agencies & Software Houses',
    description: 'Receive client payments. Pay locally.',
    bgColor: '#ADE3FD',
    themeAttr: 'blue',
    textColor: 'black',
    image: '/business.png',
    mobileImage: '/business-mobile.png',
    imageAlt: 'Zazo for Agencies and software houses receiving client payments and paying locally',
  },
  {
    id: 'amazon-ebay-etsy',
    tabLabel: 'Amazon, eBay & Etsy Sellers',
    headline: 'Amazon, eBay & Etsy Sellers',
    description: 'Receive marketplace payouts. Spend locally.',
    bgColor: '#4929dd',
    themeAttr: 'indigo',
    textColor: 'white',
    image: '/amazon-etsy.png',
    mobileImage: '/amazon-etsy-mobile.png',
    imageAlt: 'Zazo for Amazon, eBay & Etsy Sellers receiving marketplace payouts and spending locally',
  },
  {
    id: 'merchants',
    tabLabel: 'Merchants',
    headline: 'Merchants',
    description: 'Ditch the card machine. Accept QR payments, no MDR on eligible payments.',
    bgColor: '#6b25b3',
    themeAttr: 'purple',
    textColor: 'white',
    image: '/merchange-usercase.png',
    mobileImage: '/merchange-usercase-mobile.png',
    imageAlt: 'Zazo for Merchants accepting QR payments with zero MDR',
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative w-full bg-transparent">
      {/* 
        ========================================================================
        STACKING SECTIONS CONTAINER
        Each section sticks at top-[74px] as you scroll down.
        The next section slides up directly OVER the previous section, creating
        a tactile, high-end stacking card sight!
        ========================================================================
      */}
      <div className="relative w-full">
        {useCases.map((uc, index) => {
          const isWhiteText = uc.textColor === 'white';
          const zIndex = 10 + index * 10; // 10, 20, 30

          return (
            <div
              key={uc.id}
              id={uc.id}
              data-snap-point
              data-snap-id={uc.id}
              data-theme-bg={uc.themeAttr}
              className="sticky top-[74px] min-h-[calc(100vh-74px)] w-full overflow-hidden flex flex-col justify-between transition-colors duration-500 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-20px_50px_rgba(0,0,0,0.18)] border-t border-black/10"
              style={{
                backgroundColor: uc.bgColor,
                zIndex: zIndex,
              }}
            >
              {/* Content Header inside Panel */}
              <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-2 sm:pb-3">
                <div className="flex flex-col max-w-4xl">
                  <h3
                    className={`whitespace-pre-line text-[48px] sm:text-[64px] lg:text-[76px] xl:text-[88px] leading-[1.05] font-bold tracking-[-2px] sm:tracking-[-3px] m-0 ${isWhiteText ? 'text-white' : 'text-black'
                      }`}
                  >
                    {uc.headline}
                  </h3>

                  <p
                    className={`mt-3 sm:mt-4 text-[20px] sm:text-[24px] lg:text-[28px] leading-snug tracking-[-0.6px] font-normal m-0 max-w-2xl ${isWhiteText ? 'text-white/90' : 'text-black/85'
                      }`}
                  >
                    {uc.description}
                  </p>
                </div>
              </div>

              {/* 
                MAX WIDTH IMAGE CONTAINER
                Mobile: 4:5 portrait aspect ratio, flush against card bottom
                Desktop: 1672/941 widescreen banner, scaled larger for grand presence
              */}
              <div className="relative w-full max-w-[1680px] mx-auto aspect-[4/5] sm:aspect-[1672/941] max-h-[66vh] sm:max-h-[68vh] lg:max-h-[74vh] px-2 sm:px-4 lg:px-6 pb-0 flex items-end justify-center flex-1">
                <div className="relative w-full h-full overflow-hidden rounded-t-[20px] sm:rounded-t-[32px] rounded-b-none">
                  {/* Desktop Image */}
                  <div className="hidden sm:block relative w-full h-full">
                    <Image
                      src={uc.image}
                      alt={uc.imageAlt}
                      fill
                      unoptimized
                      priority={index === 0}
                      sizes="(max-width: 1720px) 100vw, 1680px"
                      className="object-contain object-bottom select-none"
                    />
                  </div>

                  {/* Mobile 4:5 Image */}
                  <div className="block sm:hidden relative w-full h-full">
                    <Image
                      src={uc.mobileImage}
                      alt={uc.imageAlt}
                      fill
                      unoptimized
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, 540px"
                      className="object-contain object-bottom select-none"
                    />
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
