'use client';

import { motion } from 'framer-motion';

export default function EverydayPakistan() {
  const personas = [
    {
      role: 'Freelancers',
      text: 'Get paid globally. Spend locally.',
    },
    {
      role: 'Amazon, eBay & Etsy sellers',
      text: 'Receive marketplace payouts. Spend locally.',
    },
    {
      role: 'Agencies & software houses',
      text: 'Receive client payments. Pay locally.',
    },
    {
      role: 'Families',
      text: 'Receive remittances. Spend at home.',
    },
    {
      role: 'Local users',
      text: 'Add funds. Pay by QR. Save on eligible purchases.',
    },
    {
      role: 'Merchants',
      text: 'Ditch the card machine. Accept QR payments, no MDR on eligible payments.* Free QR code. Cashback for your customers.**',
      highlight: true,
    },
  ];

  return (
    <section
      id="everyday-pakistan"
      data-snap-point
      data-snap-id="everyday-pakistan"
      data-theme-bg="white"
      className="snap-section w-full bg-transparent py-20 lg:py-28 text-black border-t border-black/10"
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[13px] tracking-[-0.26px] text-black/50 font-normal uppercase">
            2. MADE FOR EVERYDAY PAKISTAN
          </span>
          <h2 className="mt-2 text-[36px] sm:text-[46px] leading-[1.1] tracking-[-1.3px] font-normal text-black m-0">
            Your money. Your life.
          </h2>
        </motion.div>

        {/* Persona Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[32px] p-7 flex flex-col justify-between transition-all duration-300 ${
                item.highlight
                  ? 'border-2 border-black bg-black text-white shadow-md'
                  : 'border border-black/10 bg-black/[0.02] text-black hover:border-black/25 hover:bg-black/[0.04]'
              }`}
            >
              <div>
                <span
                  className={`inline-block text-[12px] font-mono uppercase tracking-wider mb-4 px-3 py-1 rounded-full ${
                    item.highlight ? 'bg-[#6CFF94] text-black' : 'bg-black/5 text-black/70'
                  }`}
                >
                  0{idx + 1}
                </span>
                <h3
                  className={`text-[20px] sm:text-[22px] leading-snug font-normal tracking-[-0.6px] mb-3 m-0 ${
                    item.highlight ? 'text-white' : 'text-black'
                  }`}
                >
                  {item.role}
                </h3>
                <p
                  className={`text-[15px] sm:text-[16px] leading-[22px] tracking-[-0.45px] font-normal m-0 ${
                    item.highlight ? 'text-white/85' : 'text-black/70'
                  }`}
                >
                  {item.text}
                </p>
              </div>

              {item.highlight && (
                <div className="mt-6 pt-5 border-t border-white/15">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-[#6CFF94] hover:underline"
                  >
                    <span>Sign Up as a Merchant → Talk to Sales</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Disclaimers from Document */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-black/10 text-[12px] sm:text-[13px] leading-relaxed text-black/55"
        >
          <p className="m-0">
            *Subject to merchant eligibility and terms. Confirm charges in the merchant agreement before publishing. **Cashback subject to terms and eligibility.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
