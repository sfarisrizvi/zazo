'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import InternalNavbar from '@/components/InternalNavbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'support',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black antialiased">
      <InternalNavbar />

      <main className="flex-1 pt-[74px]">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 border-b border-black/[0.06]">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#6CFF94]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-neutral-800 text-[12px] font-semibold tracking-wider uppercase mb-5 sm:mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-[#047857]" />
              <span>Support & Partnerships</span>
            </div>

            <h1 className="text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] leading-[1.02] font-bold tracking-[-2px] sm:tracking-[-3.5px] text-black m-0 max-w-4xl mx-auto">
              Get in touch.
            </h1>

            <p className="mt-4 sm:mt-5 text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-[-0.5px] text-neutral-600 font-normal m-0 max-w-2xl mx-auto">
              We're here to help with personal accounts, merchant setups, and API partnerships.
            </p>
          </div>
        </section>

        {/* Contact Form & Channel Grid */}
        <section className="relative w-full bg-[#f8f9fa] py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Direct Inquiries */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-[28px] bg-white border border-black/[0.08] p-7 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#6CFF94]/25 flex items-center justify-center text-[#047857] mb-4">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-[20px] font-bold text-black m-0">General Support</h3>
                  <p className="mt-1 text-[14px] text-neutral-600 font-normal m-0">
                    Questions about your account, transactions, or verification.
                  </p>
                  <a
                    href="mailto:support@zazo.co"
                    className="mt-4 inline-block text-[15px] font-semibold text-[#047857] hover:underline"
                  >
                    support@zazo.co
                  </a>
                </div>

                <div className="rounded-[28px] bg-white border border-black/[0.08] p-7 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-[20px] font-bold text-black m-0">Partnerships & Sales</h3>
                  <p className="mt-1 text-[14px] text-neutral-600 font-normal m-0">
                    Merchant standees, enterprise payouts, and B2B API integrations.
                  </p>
                  <a
                    href="mailto:partners@zazo.co"
                    className="mt-4 inline-block text-[15px] font-semibold text-black hover:underline"
                  >
                    partners@zazo.co
                  </a>
                </div>

                <div className="rounded-[28px] bg-white border border-black/[0.08] p-7 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black mb-4">
                    <HelpCircle className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-[20px] font-bold text-black m-0">Help Center FAQs</h3>
                  <p className="mt-1 text-[14px] text-neutral-600 font-normal m-0">
                    Find quick answers about USD accounts, rates, and Raast limits.
                  </p>
                  <Link
                    href="/#faq"
                    className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-neutral-800 hover:text-black"
                  >
                    <span>Browse FAQs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Direct Message Form */}
              <div className="lg:col-span-7 rounded-[32px] bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm">
                <h3 className="text-[26px] sm:text-[30px] font-bold text-black tracking-[-1px] m-0 mb-2">
                  Send us a message
                </h3>
                <p className="text-[15px] text-neutral-600 font-normal mb-8 m-0">
                  Fill in your details and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#6CFF94]/25 border border-[#047857]/30 flex items-center justify-center text-[#047857] mb-4">
                      <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                    </div>
                    <h4 className="text-[22px] font-bold text-black mb-1">Message Delivered!</h4>
                    <p className="text-[14px] text-neutral-600 font-normal max-w-sm">
                      Thank you for reaching out. We will respond to your email address shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[12px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-[48px] px-4 rounded-xl bg-neutral-50 border border-black/10 text-black placeholder-neutral-400 text-[14px] outline-none focus:border-[#047857] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[48px] px-4 rounded-xl bg-neutral-50 border border-black/10 text-black placeholder-neutral-400 text-[14px] outline-none focus:border-[#047857] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full h-[48px] px-4 rounded-xl bg-neutral-50 border border-black/10 text-black text-[14px] outline-none focus:border-[#047857] transition-all"
                      >
                        <option value="support">General Support & Account Help</option>
                        <option value="merchant">Merchant Standee & QR Setup</option>
                        <option value="connect">Zazo Connect (B2B API)</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 rounded-xl bg-neutral-50 border border-black/10 text-black placeholder-neutral-400 text-[14px] outline-none focus:border-[#047857] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[50px] rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-[15px] transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

