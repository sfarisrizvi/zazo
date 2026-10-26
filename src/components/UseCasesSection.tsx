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
  imageAlt: string;
  features: string[];
}

const useCases: UseCaseItem[] = [
  {
    id: 'freelancers',
    tabLabel: 'Freelancers & Creators',
    badge: 'Use Case 01 · Freelancers & Creators',
    headline: 'Your work goes global.\nYour money should fit life at home.',
    description:
      'Receive client payments via dedicated US routing and account details from Upwork, Deel, and Stripe with 0% intermediary cuts. Convert when rates are best and spend instantly via QR across Pakistan.',
    bgColor: '#DB1584',
    themeAttr: 'magenta',
    textColor: 'white',
    image: '/freelancer.png',
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
    badge: 'Use Case 02 · Everyday Spending & Purchases',
    headline: 'Money from abroad,\nready for everyday life.',
    description:
      'Keep PKR in your Zazo wallet to scan any merchant QR code, pay utility bills, or send money to friends in seconds. No bank queues, no ATM withdrawal fees.',
    bgColor: '#FEDD42',
    themeAttr: 'yellow',
    textColor: 'black',
    image: '/local-purchase.png',
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
    badge: 'Use Case 03 · Businesses & Agencies',
    headline: 'Connect international revenue\nwith local business spending.',
    description:
      'Manage foreign client retainers, SaaS tools, and local Pakistani operational vendor payroll in one connected wallet. Complete transparent receipts and automated Raast batch settlements.',
    bgColor: '#ADE3FD',
    themeAttr: 'blue',
    textColor: 'black',
    image: '/business.png',
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
  const jumpToUseCase = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topY = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: Math.max(0, topY), behavior: 'smooth' });
    }
  };

  return (
    <section id="use-cases" className="relative w-full bg-transparent">
      {/* Intro Header */}
      <div className="w-full bg-black py-16 px-6 lg:px-12 text-center text-white border-t border-white/10 relative z-0">
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <span className="inline-flex h-7 items-center rounded-full bg-white/10 px-3.5 text-[12px] font-medium tracking-wide uppercase text-white/90 border border-white/15">
            Audience Use Cases
          </span>
          <h2 className="mt-4 text-[36px] sm:text-[46px] lg:text-[54px] font-normal leading-tight tracking-[-1.5px] text-white m-0">
            Different lives.
            <br />
            One connected money journey.
          </h2>
          <p className="mt-4 text-[17px] sm:text-[19px] leading-relaxed text-[#A3A3A3] font-normal m-0 max-w-xl">
            Whether you earn across borders, run a growing agency, or spend in Pakistan, Zazo brings money home to work for you.
          </p>

          {/* Quick Jump Pill Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {useCases.map((uc) => (
              <button
                key={uc.id}
                type="button"
                onClick={() => jumpToUseCase(uc.id)}
                className="btn-pill text-[13px] tracking-[-0.26px] bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                {uc.tabLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

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
                Displays image up to 1536px width, fluidly scaling so it fits on screen while pinned!
              */}
              <div className="relative w-full max-w-[1480px] mx-auto aspect-[1672/840] max-h-[56vh] px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 flex items-end justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[32px]">
                  <Image
                    src={uc.image}
                    alt={uc.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1536px) 100vw, 1480px"
                    className="object-contain object-bottom select-none"
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
