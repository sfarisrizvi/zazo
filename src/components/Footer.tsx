import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="footer" data-snap-point data-snap-id="footer" data-theme-bg="black" className="snap-section w-full bg-transparent pt-[90px] pb-16 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        {/* Top Grid: Brand & Links */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" className="inline-block" aria-label="Zazo Home">
              <Logo height={34} className="text-white hover:opacity-85 transition-opacity" />
            </a>

            <p className="text-[16px] leading-[23px] tracking-[-0.48px] text-[#888888] font-normal max-w-sm m-0">
              Get paid in USD. Spend in PKR. Bringing international income and everyday local spending together in one simple app.
            </p>

            {/* App Store & Google Play Pills */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="btn-pill inline-flex items-center gap-2 border border-white/15 bg-black text-white hover:bg-white/10 cursor-pointer transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.05 1.71-.92 2.73.99.08 2.02-.48 2.63-1.23z"/>
                </svg>
                <span>App Store</span>
              </div>

              <div className="btn-pill inline-flex items-center gap-2 border border-white/15 bg-black text-white hover:bg-white/10 cursor-pointer transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.29 2.29 0 0 1 3 20.612V3.388c0-.623.23-1.2-.609-1.574zm11.23 11.23l2.25 2.25-10.97 6.27a2.16 2.16 0 0 1-.72.22l9.44-8.74zm0-2.088L5.4 2.216a2.16 2.16 0 0 1 .72.22l10.97 6.27-2.25 2.25zm1.53 1.044l3.12 1.78a1.27 1.27 0 0 1 0 2.22l-3.12 1.78-2.02-2.02 2.02-2.02z"/>
                </svg>
                <span>Google Play</span>
              </div>
            </div>
          </div>

          {/* Directory Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div className="flex flex-col gap-3">
              <span className="text-[13px] tracking-[-0.26px] text-white font-normal uppercase">
                Product
              </span>
              <a href="#how-it-works" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Benefits
              </a>
              <a href="#calculator" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Conversion Calculator
              </a>
              <a href="#personas" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Audience Use Cases
              </a>
              <a href="#pricing" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Pricing & Fees
              </a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="text-[13px] tracking-[-0.26px] text-white font-normal uppercase">
                Company
              </span>
              <a href="#about" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                About Zazo
              </a>
              <a href="#security" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Partner Financial Rails
              </a>
              <a href="#waitlist" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Join Early Access
              </a>
              <a href="mailto:support@zazo.com" className="text-[14px] tracking-[-0.28px] text-[#888888] hover:text-white font-normal transition-colors">
                Contact & Support
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-3">
              <span className="text-[13px] tracking-[-0.26px] text-white font-normal uppercase">
                Legal
              </span>
              <a href="#terms" className="text-[14px] tracking-[-0.28px] text-[#6CFF94] hover:underline font-normal">
                Terms of Service
              </a>
              <a href="#privacy" className="text-[14px] tracking-[-0.28px] text-[#6CFF94] hover:underline font-normal">
                Privacy Notice
              </a>
              <a href="#disclosures" className="text-[14px] tracking-[-0.28px] text-[#6CFF94] hover:underline font-normal">
                Regulatory Disclosures
              </a>
              <a href="#security" className="text-[14px] tracking-[-0.28px] text-[#6CFF94] hover:underline font-normal">
                Security Architecture
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom Legal Block */}
        <div className="flex flex-col gap-4 text-[12px] leading-[18px] tracking-[-0.24px] text-[#666666] font-normal">
          <p className="m-0">
            Zazo is a financial technology platform, not a bank. Banking, international currency exchange, and custody services are provided through licensed financial institution partners. Zazo accounts and funds are not directly insured by FDIC or standard deposit insurance unless deposited with authorized partner banking rails. Exchange rate quotes are provided dynamically; final rates are confirmed immediately prior to conversion.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 pt-4">
            <span>© 2026 Zazo Inc. / Yato Inc. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#privacy" className="text-[#6CFF94] hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#6CFF94] hover:underline">
                Terms of Use
              </a>
              <a href="#disclosures" className="text-[#6CFF94] hover:underline">
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
