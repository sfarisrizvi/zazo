'use client';

import Image from 'next/image';

interface UseCaseItem {
  id: string;
  tabLabel: string;
  badge: string;
  headline: string;
  description: string;
  bgColor: string;
  themeAttr: 'magenta' | 'yellow' | 'blue';
  textColor: 'white' | 'black';
  image: string;
  mobileImage: string;
  imageAlt: string;
  features: string[];
}

const useCases: UseCaseItem[] = [
  {
    id: 'freelancers',
    tabLabel: 'Freelancers & Creators',
    badge: 'Freelancers & Creators',
    headline: 'Your work goes global.\nYour money should fit your everyday life.',
    description:
      'Receive payment for international work and understand what it means for your local spending.',
    bgColor: '#DB1584',
    themeAttr: 'magenta',
    textColor: 'white',
    image: '/freelancer.png',
    mobileImage: '/freelancer-mobile.png',
    imageAlt: 'Zazo for Freelancers and Creators receiving global earnings in Pakistan',
    features: [
      'Dedicated US Routing & Account Details',
      'Zero Intermediary Wire Deductions',
      'Real-Time Live Rate Lock',
      'Instant Raast Domestic Transfers',
    ],
  },
  {
    id: 'everyday-spending',
    tabLabel: 'Everyday Life & Purchases',
    badge: 'Everyday Spending & Purchases',
    headline: 'Money from abroad,\nready for life at home.',
    description:
      'Understand how money sent from abroad can reach you and be used locally.',
    bgColor: '#FEDD42',
    themeAttr: 'yellow',
    textColor: 'black',
    image: '/local-purchase.png',
    mobileImage: '/local-purchase-mobile.png',
    imageAlt: 'Zazo for Everyday Spending and Local Purchases across Pakistan',
    features: [
      'Scan Any Merchant QR Code',
      'Up to 7% Daily Spending Cashback',
      'Zero Hidden Card Fees',
      'Direct Utility Bill Settlement',
    ],
  },
  {
    id: 'businesses',
    tabLabel: 'Businesses & Remote Teams',
    badge: 'Businesses & Agencies',
    headline: 'Connect international income\nwith local business spending.',
    description:
      'Connect supported international receipts with local business needs.',
    bgColor: '#ADE3FD',
    themeAttr: 'blue',
    textColor: 'black',
    image: '/business.png',
    mobileImage: '/business-mobile.png',
    imageAlt: 'Zazo for Businesses and Agencies managing foreign revenue and local payroll',
    features: [
      'Dedicated Corporate Accounts',
      'Automated Vendor Payroll',
      'Real-Time Inward Reconciliation',
      'Full Transaction Transparency',
    ],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative w-full bg-transparent -mb-16 sm:-mb-24">
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
              <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-12 sm:pt-16 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                  
                  {/* Left Column: Badge, Headline, 1-liner Description */}
                  <div className="lg:col-span-8 flex flex-col">
                    <span
                      className={`inline-flex h-7 items-center self-start rounded-full px-3.5 text-[12px] font-medium tracking-wide uppercase border ${
                        isWhiteText
                          ? 'bg-white/15 border-white/30 text-white'
                          : 'bg-black/10 border-black/20 text-black'
                      }`}
                    >
                      {uc.badge}
                    </span>

                    <h3
                      className={`mt-3 sm:mt-4 whitespace-pre-line text-[32px] sm:text-[42px] lg:text-[48px] leading-[36px] sm:leading-[46px] lg:leading-[52px] font-normal tracking-[-1.5px] m-0 ${
                        isWhiteText ? 'text-white' : 'text-black'
                      }`}
                    >
                      {uc.headline}
                    </h3>

                    <p
                      className={`mt-3 text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed tracking-[-0.4px] font-normal m-0 max-w-2xl ${
                        isWhiteText ? 'text-white/90' : 'text-black/85'
                      }`}
                    >
                      {uc.description}
                    </p>
                  </div>

                  {/* Right Column: Feature Badges */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2 lg:items-end justify-start lg:justify-end">
                    {uc.features.map((feat) => (
                      <span
                        key={feat}
                        className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] sm:text-[12px] font-medium tracking-tight border backdrop-blur-sm transition-transform hover:scale-[1.02] ${
                          isWhiteText
                            ? 'bg-white/15 border-white/25 text-white'
                            : 'bg-black/10 border-black/15 text-black'
                        }`}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* 
                MAX WIDTH IMAGE CONTAINER
                Mobile: 4:5 portrait aspect ratio, flush against card bottom
                Desktop: 1672/941 widescreen banner, flush against card bottom
              */}
              <div className="relative w-full max-w-[1480px] mx-auto aspect-[4/5] sm:aspect-[1672/941] max-h-[60vh] sm:max-h-[58vh] px-4 sm:px-6 lg:px-8 pb-0 flex items-end justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-t-[20px] sm:rounded-t-[32px] rounded-b-none">
                  {/* Desktop Image */}
                  <div className="hidden sm:block relative w-full h-full">
                    <Image
                      src={uc.image}
                      alt={uc.imageAlt}
                      fill
                      unoptimized
                      priority={index === 0}
                      sizes="(max-width: 1536px) 100vw, 1480px"
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
