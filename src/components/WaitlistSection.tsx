'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="waitlist"
      data-snap-point
      data-snap-id="waitlist"
      data-theme-bg="black"
      className="snap-section w-full bg-black py-20 lg:py-28 text-white border-t border-white/10"
    >
      <div className="mx-auto max-w-[900px] px-5 lg:px-8 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[13px] tracking-[-0.26px] text-[#888888] font-normal uppercase">
            7. FINAL CTA
          </span>
          <h2 className="mt-3 text-[42px] sm:text-[54px] xl:text-[60px] leading-[1.05] tracking-[-1.6px] font-normal text-white m-0">
            Make your money go further.
          </h2>
        </motion.div>

        {/* Waitlist Form and Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-md mx-auto"
        >
          {submitted ? (
            <div className="rounded-[24px] border border-[#6CFF94]/30 bg-[#6CFF94]/10 p-6 text-center">
              <span className="text-[#6CFF94] text-[18px] font-medium block">
                You’re on the waitlist!
              </span>
              <p className="mt-2 text-[14px] text-white/80 m-0">
                We’ll notify you as soon as early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-[15px] text-white placeholder-white/50 outline-none focus:border-[#6CFF94] transition-colors"
              />
              <button
                type="submit"
                className="btn-pill bg-[#6CFF94] text-black font-semibold hover:bg-[#5CE883] px-7 py-3.5 whitespace-nowrap text-[14px]"
              >
                Join the Waitlist
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#difference"
              className="inline-flex items-center gap-2 text-[14px] text-[#888888] hover:text-[#6CFF94] transition-colors"
            >
              <span>Check Live Rate →</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
