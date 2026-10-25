'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WaitlistSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Freelancer');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const audienceOptions = [
    'Freelancer',
    'Business',
    'Receiving remittances',
    'Local merchant',
    'Local user',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="waitlist" data-snap-point data-snap-id="waitlist" data-theme-bg="black" className="snap-section w-full bg-transparent py-[90px] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[14px] tracking-[-0.28px] text-[#888888] font-normal uppercase">
            Early Access
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] leading-[36px] sm:leading-[44px] tracking-[-1.2px] font-normal text-white m-0">
            Be first to get Zazo.
          </h2>
          <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-[#A3A3A3] font-normal m-0">
            Join the waitlist for updates on launch, availability, and the features relevant to you.
          </p>
        </motion.div>

        {/* Oversized Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-2xl rounded-[36px] border border-white/15 bg-black p-8 sm:p-14 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6CFF94] text-black mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-[28px] leading-[34px] tracking-[-0.84px] font-normal text-white m-0">
                  You’re on the list.
                </h3>
                <p className="mt-3 text-[18px] leading-[25px] tracking-[-0.54px] text-white/80 font-normal max-w-md m-0">
                  We’ll share relevant updates as Zazo becomes available for {role.toLowerCase()}s in your area.
                </p>
                <div className="mt-8 rounded-full border border-white/15 bg-black px-6 py-2.5 text-[13px] tracking-[-0.26px] text-[#888888]">
                  Registered with <span className="text-white font-normal">{email}</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="full-name" className="text-[14px] tracking-[-0.28px] text-[#888888]">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-[52px] w-full rounded-full border border-white/20 bg-black px-5 text-[16px] tracking-[-0.32px] text-white placeholder:text-[#555555] font-normal focus:border-[#6CFF94] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-addr" className="text-[14px] tracking-[-0.28px] text-[#888888]">
                    Email Address
                  </label>
                  <input
                    id="email-addr"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[52px] w-full rounded-full border border-white/20 bg-black px-5 text-[16px] tracking-[-0.32px] text-white placeholder:text-[#555555] font-normal focus:border-[#6CFF94] focus:outline-none"
                  />
                </div>

                {/* Phone (Optional) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-num" className="text-[14px] tracking-[-0.28px] text-[#888888]">
                    Phone Number <span className="text-[12px] text-[#888888]">(Optional for early SMS invites)</span>
                  </label>
                  <input
                    id="phone-num"
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-[52px] w-full rounded-full border border-white/20 bg-black px-5 text-[16px] tracking-[-0.32px] text-white placeholder:text-[#555555] font-normal focus:border-[#6CFF94] focus:outline-none"
                  />
                </div>

                {/* Role Pill Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] tracking-[-0.28px] text-[#888888]">
                    I am a...
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {audienceOptions.map((opt) => {
                      const isSelected = role === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setRole(opt)}
                          className={`btn-pill text-[12px] tracking-[-0.24px] cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#6CFF94] text-black font-semibold'
                              : 'bg-black text-white/70 border border-white/20 hover:bg-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {error && (
                  <div className="text-[13px] text-rose-400 font-normal">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-pill w-full text-[15px] font-semibold bg-[#6CFF94] text-black hover:bg-[#5CE883] shadow-lg cursor-pointer"
                  >
                    Join the Waitlist
                  </button>
                </div>

                {/* Reassurance text from content.md */}
                <p className="text-[12px] leading-[18px] tracking-[-0.24px] text-[#666666] text-center m-0">
                  Launch updates and relevant product news only. We respect your privacy.
                </p>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
