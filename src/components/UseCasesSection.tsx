'use client';

import Image from 'next/image';

interface UseCaseItem {
  id: string;
  tabLabel: string;
  headline: string;
  description: string;
  extendedDetail?: string;
  bgColor: string;
  themeAttr: 'magenta' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'green';
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
    id: 'sellers',
    tabLabel: 'Sellers',
    headline: 'Amazon, eBay & Etsy sellers',
    description: 'Receive marketplace payouts. Spend locally.',
    bgColor: '#4929dd',
    themeAttr: 'indigo',
    textColor: 'white',
    image: '/amazon-etsy.png',
    mobileImage: '/amazon-etsy-mobile.png',
    imageAlt: 'Zazo for Sellers receiving marketplace payouts and spending locally',
  },
  {
    id: 'agencies',
    tabLabel: 'Agencies',
    headline: 'Agencies & software houses',
    description: 'Receive client payments. Pay locally.',
    bgColor: '#ADE3FD',
    themeAttr: 'blue',
    textColor: 'black',
    image: '/business.png',
    mobileImage: '/business-mobile.png',
    imageAlt: 'Zazo for Agencies receiving client payments and paying locally',
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
    id: 'local-users',
    tabLabel: 'Local Users',
    headline: 'Local users',
    description: 'Add funds. Pay by QR. Save on eligible purchases.',
    extendedDetail: 'Open a PKR account in minutes with your CNIC. Send, receive, and get up to 10% discount every time you scan to pay.',
    bgColor: '#047857',
    themeAttr: 'green',
    textColor: 'white',
    image: '/pay-QR.png',
    mobileImage: '/pay-QR-mobile.png',
    imageAlt: 'Zazo for Local Users scanning to pay and saving up to 10%',
  },
  {
    id: 'merchants',
    tabLabel: 'Merchants',
    headline: 'Merchants',
    description: 'Ditch the card machine. Accept QR payments, no MDR on eligible payments.* Free QR code. Cashback for your customers.**',
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
    <section id="use-cases" className="relative w-full bg-white">
      {/* 
        ========================================================================
        SECTION TITLE: "MADE FOR EVERYDAY PAKISTAN"
        Directly matches Document 122:
        "3. MADE FOR EVERYDAY PAKISTAN (Show this heading as well)"
        ========================================================================
      */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 sm:py-16 text-center">
        <span className="inline-flex h-7 items-center rounded-full bg-black/5 px-3.5 text-[11px] sm:text-[12px] font-bold tracking-widest uppercase text-neutral-800 border border-black/10">
          2. Made For Everyday Pakistan
        </span>
        <h2 className="mt-3 text-[36px] sm:text-[50px] lg:text-[64px] font-extrabold tracking-[-1.8px] sm:tracking-[-2.6px] leading-[1.08] text-black m-0">
          Your money. Your life.
        </h2>
        <p className="mt-2.5 text-[16px] sm:text-[19px] text-neutral-600 font-normal max-w-xl mx-auto">
          Tailored financial rails for everyone who earns globally and spends locally.
        </p>
      </div>

      {/* 
        ========================================================================
        NORMAL SECTION-BY-SECTION FLOW
        Each section scrolls naturally one after another without sticky stacking.
        ========================================================================
      */}
      <div className="relative w-full flex flex-col">
        {useCases.map((uc, index) => {
          const isWhiteText = uc.textColor === 'white';

          return (
            <div
              key={uc.id}
              id={uc.id}
              data-snap-point
              data-snap-id={uc.id}
              data-theme-bg={uc.themeAttr}
              className="snap-section relative min-h-0 sm:min-h-[calc(100vh-74px)] w-full overflow-hidden flex flex-col justify-between"
              style={{
                backgroundColor: uc.bgColor,
              }}
            >
              {/* Content Header inside Panel */}
              <div className="mx-auto max-w-[1440px] w-full px-5 sm:px-6 lg:px-12 pt-6 sm:pt-10 lg:pt-12 pb-2 sm:pb-3">
                <div className="flex flex-col w-full">
                  {/* Top Row: Eyebrow + Heading on Left, and CTA button right in front of heading on the right */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full">
                    <div>
                      {/* Eyebrow matching Section Heading */}
                      <span
                        className={`text-[12px] sm:text-[14px] font-bold tracking-widest uppercase mb-1.5 sm:mb-2 block ${
                          isWhiteText ? 'text-white/70' : 'text-black/60'
                        }`}
                      >
                        Made for Everyday Pakistan
                      </span>

                      <h3
                        className={`whitespace-pre-line text-[52px] sm:text-[68px] lg:text-[82px] xl:text-[96px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] m-0 ${
                          isWhiteText ? 'text-white' : 'text-black'
                        }`}
                      >
                        {uc.headline}
                      </h3>
                    </div>

                    {/* CTA button right in front of heading on right side */}
                    {uc.id === 'merchants' && (
                      <div className="shrink-0 pb-1 sm:pb-2">
                        <a
                          href="#footer"
                          className="btn-pill bg-[#6CFF94] text-black font-bold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-[#5ce883] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg inline-flex items-center gap-2"
                        >
                          <span>Sign Up as a Merchant → Talk to Sales</span>
                        </a>
                      </div>
                    )}

                    {/* Local Users text box right in front of heading on right side */}
                    {uc.extendedDetail && (
                      <div className="shrink-0 pb-1 sm:pb-2 max-w-lg lg:max-w-xl">
                        <div className="inline-flex items-center gap-2 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[15px] text-white shadow-sm leading-snug">
                          <span>
                            Open a PKR account in minutes with your CNIC. Send, receive, and get up to{' '}
                            <strong className="inline-block bg-[#6CFF94] text-black font-extrabold px-2 py-0.5 rounded-md shadow-xs mx-0.5">
                              10% discount
                            </strong>{' '}
                            every time you scan to pay.
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Extended description text width so it flows more to the right */}
                  <p
                    className={`mt-2.5 sm:mt-3.5 text-[18px] sm:text-[22px] lg:text-[26px] leading-snug tracking-[-0.5px] font-normal m-0 ${
                      uc.id === 'merchants' || uc.id === 'local-users' ? 'max-w-5xl' : 'max-w-3xl'
                    } ${isWhiteText ? 'text-white/90' : 'text-black/85'}`}
                  >
                    {uc.description}
                  </p>

                  {/* Merchants Footnote from PDF */}
                  {uc.id === 'merchants' && (
                    <p className="mt-2 text-[11px] sm:text-[12px] text-white/70 italic m-0 max-w-4xl">
                      *Subject to merchant eligibility and terms. Confirm charges in the merchant agreement before publishing. **Cashback subject to terms and eligibility.
                    </p>
                  )}
                </div>
              </div>

              {/* 
                MAX WIDTH IMAGE CONTAINER
                Mobile: 4:5 portrait aspect ratio, flush against card bottom
                Desktop: 1672/941 widescreen banner, scaled larger for grand presence
              */}
              <div className="relative w-full max-w-[1680px] mx-auto aspect-[4/5] sm:aspect-[1672/941] max-h-[48vh] sm:max-h-[66vh] lg:max-h-[70vh] px-2 sm:px-4 lg:px-6 pb-0 flex items-end justify-center sm:flex-1 mt-2 sm:mt-0">
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
