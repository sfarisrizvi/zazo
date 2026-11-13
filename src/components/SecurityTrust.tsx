'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Lock, Activity, UserCheck } from 'lucide-react';

export default function SecurityTrust() {
  return (
    <section
      id="security"
      data-snap-point
      data-snap-id="security"
      data-theme-bg="white"
      className="relative w-full bg-white py-20 lg:py-28 overflow-hidden transition-colors duration-700"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-[38px] sm:text-[50px] lg:text-[62px] font-bold text-black tracking-[-1.8px] sm:tracking-[-2.4px] leading-[1.08] m-0">
            Your money, held the right way.
          </h2>
        </div>

        {/* Visual-First Asymmetric Bento Vault Grid */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {/* TOP ROW (7 / 5 Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* 1. Segregated funds (Featured Dark Custody Vault Visual) */}
            <div
              className="group relative lg:col-span-7 rounded-[28px] sm:rounded-[36px] bg-[#0A0D0B] text-white p-6 sm:p-8 lg:p-10 overflow-hidden border border-black/10 flex flex-col justify-between min-h-[360px] sm:min-h-[410px]"
            >
              {/* Ambient Mint Glow & Subtle Grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#6CFF94]/15 blur-[110px] transition-opacity duration-500 group-hover:opacity-90"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #6CFF94 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Interactive Visual Stage: Ring-Fenced Custody Chamber */}
              <div
                aria-hidden="true"
                className="relative z-10 flex-1 flex items-center justify-center py-4 sm:py-6"
              >
                <div className="relative w-full max-w-[520px] flex items-center justify-between gap-3 sm:gap-5">
                  {/* Outer Platform Layer (Left Node) */}
                  <div className="relative z-10 flex flex-col items-center gap-2.5 shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[22px] bg-[#6CFF94] p-3.5 shadow-[0_0_35px_rgba(108,255,148,0.28)] flex items-center justify-center">
                      <Image
                        src="/favicon.svg"
                        alt=""
                        width={52}
                        height={52}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Animated Custody Flow Line */}
                  <div className="relative flex-1 h-10 flex items-center">
                    <svg
                      viewBox="0 0 180 24"
                      fill="none"
                      className="w-full h-6 overflow-visible"
                    >
                      <line
                        x1="0"
                        y1="12"
                        x2="180"
                        y2="12"
                        stroke="rgba(255,255,255,0.16)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                      />
                      <motion.circle
                        r="4"
                        cy="12"
                        fill="#6CFF94"
                        initial={{ cx: 8 }}
                        animate={{ cx: [8, 172, 8] }}
                        transition={{
                          duration: 3.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        style={{
                          filter: 'drop-shadow(0 0 8px #6CFF94)',
                        }}
                      />
                    </svg>
                  </div>

                  {/* Ring-Fenced Bank Custody Core (Right Vault Card) */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    {/* Concentric Ring-Fence Halo */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-4 sm:-inset-5 rounded-[34px] border border-dashed border-[#6CFF94]/35 pointer-events-none"
                    />
                    <div className="relative rounded-[24px] bg-white/[0.06] backdrop-blur-md border border-[#6CFF94]/30 p-4 sm:p-5 w-[170px] sm:w-[230px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                      {/* Vault Header Bar */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-9 h-9 rounded-xl bg-[#6CFF94]/15 border border-[#6CFF94]/30 flex items-center justify-center text-[#6CFF94]">
                          <Landmark className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#6CFF94] shadow-[0_0_10px_#6CFF94]" />
                      </div>
                      {/* Abstract Segregated Ledger Bars */}
                      <div className="space-y-2.5">
                        <div className="h-2.5 w-3/4 rounded-full bg-white/80" />
                        <div className="h-2 w-1/2 rounded-full bg-white/30" />
                        <div className="pt-2 flex items-center gap-1.5">
                          <div className="h-6 flex-1 rounded-lg bg-[#6CFF94]/25 border border-[#6CFF94]/40" />
                          <div className="h-6 w-10 rounded-lg bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy Footer */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-bold tracking-[-0.6px] text-white m-0 leading-tight">
                    Segregated funds.
                  </h3>
                  <p className="mt-1.5 text-[15px] sm:text-[16px] text-neutral-300 font-normal m-0">
                    Held in your name at a licensed bank.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[#6CFF94] shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 2. Licensed rails (Architectural Settlement Topology) */}
            <div
              className="group relative lg:col-span-5 rounded-[28px] sm:rounded-[36px] bg-[#F2F5F3] border border-black/[0.08] p-6 sm:p-8 lg:p-10 overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[410px]"
            >
              {/* Soft Emerald Wash */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#6CFF94]/30 blur-[90px]"
              />

              {/* Visual Stage: Multi-Node Banking Rail Diagram */}
              <div
                aria-hidden="true"
                className="relative z-10 flex-1 flex items-center justify-center py-4"
              >
                <div className="relative w-full max-w-[340px] h-[200px] flex items-center justify-center">
                  {/* Connecting Curved SVG Rails */}
                  <svg
                    viewBox="0 0 340 190"
                    fill="none"
                    className="w-full h-full"
                  >
                    {/* Rail Grid Lines */}
                    <path
                      d="M42 95 C 105 95, 115 42, 170 42 C 225 42, 235 95, 298 95"
                      stroke="rgba(4,120,87,0.22)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M42 95 C 105 95, 115 148, 170 148 C 225 148, 235 95, 298 95"
                      stroke="rgba(4,120,87,0.22)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="42"
                      y1="95"
                      x2="298"
                      y2="95"
                      stroke="#047857"
                      strokeWidth="3"
                      strokeDasharray="6 6"
                    />

                    {/* Traveling Signal Dot along Center Rail */}
                    <motion.circle
                      r="5"
                      cy="95"
                      fill="#047857"
                      initial={{ cx: 48 }}
                      animate={{ cx: [48, 292] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.circle
                      r="9"
                      cy="95"
                      fill="rgba(108,255,148,0.5)"
                      initial={{ cx: 48 }}
                      animate={{ cx: [48, 292] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </svg>

                  {/* Left Endpoint Pillar */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white border border-black/10 shadow-md flex items-center justify-center">
                    <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6CFF94]" />
                    </div>
                  </div>

                  {/* Center Regulated Bank Shield Pillar */}
                  <div className="relative z-10 w-20 h-20 rounded-[24px] bg-white border-2 border-[#047857]/30 shadow-[0_14px_35px_rgba(4,120,87,0.16)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-[#6CFF94]/35 flex items-center justify-center text-[#047857]">
                      <ShieldCheck className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Right Endpoint Settlement Node */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white border border-black/10 shadow-md flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-[#047857]" />
                  </div>
                </div>
              </div>

              {/* Copy Footer */}
              <div className="relative z-10 pt-4 border-t border-black/10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-bold tracking-[-0.6px] text-black m-0 leading-tight">
                    Licensed rails.
                  </h3>
                  <p className="mt-1.5 text-[15px] sm:text-[16px] text-neutral-600 font-normal m-0">
                    Regulated Pakistani banking and offshore partners.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-black shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW (3 Equal Visual Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* 3. Encrypted (Cipher Ring & Hardware Lock Visual) */}
            <div
              className="group relative rounded-[28px] sm:rounded-[34px] bg-[#121514] text-white p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[340px]"
            >
              {/* Subtle Matrix Pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12] font-mono text-[10px] leading-5 tracking-widest text-[#6CFF94] select-none overflow-hidden p-4 mask-b-from-60%"
                style={{
                  maskImage: 'radial-gradient(circle at 50% 42%, black 20%, transparent 78%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at 50% 42%, black 20%, transparent 78%)',
                }}
              >
                <div>7F 4A 9C 2E 11 B8 D4 06 8E 31 5A C0 92 F7</div>
                <div>A4 19 6D 88 F1 3C 02 7B 5E D9 40 1A 63 8B</div>
                <div>2C E5 09 4F 73 A1 84 6C B0 29 5D 9E 37 14</div>
                <div>D8 61 B2 3A 0F 94 C7 52 E6 18 4B 7D A3 60</div>
                <div>59 0C 7E 85 D2 47 1B 9A 6F 34 8C E1 25 B3</div>
                <div>13 F6 48 A0 6B 2D 54 E9 07 C3 7A 15 98 4E</div>
                <div>8D 24 67 1E 9B 50 3F A8 D1 76 04 C9 52 8F</div>
              </div>

              {/* Data Pipeline: Plaintext (ABCD) -> Lock Core -> Ciphertext (01010) */}
              <div
                aria-hidden="true"
                className="relative z-10 flex-1 flex flex-col items-center justify-center py-3 select-none"
              >
                {/* Stage Track Header: Labels */}
                <div className="w-full max-w-[270px] flex items-center justify-between text-[10px] font-mono tracking-wider mb-2.5 px-1">
                  <span className="text-neutral-400">PLAIN</span>
                  <span className="text-[#6CFF94]/85">CIPHER</span>
                </div>

                {/* Horizontal Conveyor Rail */}
                <div className="relative w-full max-w-[280px] h-14 flex items-center justify-between">
                  {/* Background Track Line */}
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                  {/* LEFT: Plaintext Stream (ABCD flowing right into lock) */}
                  <div className="relative w-[95px] sm:w-[105px] h-10 overflow-hidden flex items-center justify-end">
                    {/* Left edge fade */}
                    <div className="pointer-events-none absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-[#121514] to-transparent z-10" />

                    <motion.div
                      className="flex items-center gap-1.5 shrink-0"
                      animate={{ x: [-34, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                    >
                      {['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'].map((char, i) => (
                        <span
                          key={i}
                          className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[12px] font-mono font-bold text-white shadow-xs"
                        >
                          {char}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* CENTER: Hardware Lock Processing Core */}
                  <div className="relative z-20 shrink-0 flex items-center justify-center mx-1">
                    {/* Concentric Cipher Dials */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-2.5 rounded-full border border-dashed border-[#6CFF94]/35"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.7, 0.35] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -inset-1 rounded-2xl bg-[#6CFF94]/20 blur-xs"
                    />
                    <div className="relative w-12 h-12 rounded-2xl bg-[#6CFF94] text-black flex items-center justify-center shadow-[0_0_26px_rgba(108,255,148,0.45)] group-hover:scale-105 transition-transform duration-300">
                      <Lock className="w-5 h-5 stroke-[2.3]" />
                    </div>
                  </div>

                  {/* RIGHT: Encrypted Binary Stream (01010 flowing out to the right) */}
                  <div className="relative w-[95px] sm:w-[105px] h-10 overflow-hidden flex items-center justify-start">
                    {/* Right edge fade */}
                    <div className="pointer-events-none absolute right-0 inset-y-0 w-6 bg-gradient-to-l from-[#121514] to-transparent z-10" />

                    <motion.div
                      className="flex items-center gap-1.5 shrink-0"
                      animate={{ x: [-34, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                    >
                      {['0', '1', '0', '1', '0', '1', '0', '1'].map((bit, i) => (
                        <span
                          key={i}
                          className="w-7 h-7 rounded-lg bg-[#6CFF94]/15 border border-[#6CFF94]/40 flex items-center justify-center text-[12px] font-mono font-bold text-[#6CFF94] shadow-[0_0_8px_rgba(108,255,148,0.25)]"
                        >
                          {bit}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <h3 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.5px] text-white m-0">
                  Encrypted.
                </h3>
                <p className="mt-1 text-[15px] text-neutral-300 font-normal m-0">
                  AES-256 security.
                </p>
              </div>
            </div>

            {/* 4. Fraud protection (Live Radar & Waveform Visual) */}
            <div
              className="group relative rounded-[28px] sm:rounded-[34px] bg-gradient-to-br from-[#EEFFF4] via-[#DCFFE7] to-[#6CFF94]/45 border border-[#047857]/20 p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[340px]"
            >
              {/* Telemetry Waveform & Sonar Pulse Visual */}
              <div
                aria-hidden="true"
                className="relative z-10 flex-1 flex items-center justify-center py-4"
              >
                <div className="relative w-full h-36 rounded-2xl bg-white/75 backdrop-blur-sm border border-[#047857]/15 shadow-inner flex items-center justify-center overflow-hidden px-4">
                  {/* Subtle Horizontal Monitoring Grid */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(4,120,87,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(4,120,87,0.12) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Crisp Real-Time Pulse Wave SVG */}
                  <svg
                    viewBox="0 0 280 90"
                    fill="none"
                    className="relative z-10 w-full h-24 overflow-visible"
                  >
                    <path
                      d="M0 52 L55 52 L72 52 L84 28 L98 72 L112 16 L126 62 L138 46 L152 52 L210 52 L224 38 L234 58 L244 52 L280 52"
                      stroke="rgba(4,120,87,0.22)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      d="M0 52 L55 52 L72 52 L84 28 L98 72 L112 16 L126 62 L138 46 L152 52 L210 52 L224 38 L234 58 L244 52 L280 52"
                      stroke="#047857"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0.25, pathOffset: 0 }}
                      animate={{ pathLength: [0.35, 0.7, 0.35], pathOffset: [0, 0.65, 0] }}
                      transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    {/* Flagged Anomaly / Fraud Alert Node */}
                    <motion.circle
                      cx="112"
                      cy="16"
                      r="9"
                      fill="rgba(239,68,68,0.35)"
                      animate={{ r: [8, 12, 8], fillOpacity: [0.25, 0.55, 0.25] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <circle cx="112" cy="16" r="4.5" fill="#EF4444" />
                  </svg>

                  {/* Active Sensor Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#047857] text-white flex items-center justify-center shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#047857]/15">
                <h3 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.5px] text-black m-0">
                  Fraud protection.
                </h3>
                <p className="mt-1 text-[15px] text-neutral-700 font-normal m-0">
                  Real-time monitoring.
                </p>
              </div>
            </div>

            {/* 5. Your data (Zero-Sharing Privacy Shield Visual) */}
            <div
              className="group relative rounded-[28px] sm:rounded-[34px] bg-[#F5F6F5] border border-black/[0.08] p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[340px]"
            >
              {/* Soft Ambient Privacy Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-[#6CFF94]/25 blur-[50px]" />
              </div>

              {/* Privacy Shield Stage */}
              <div
                aria-hidden="true"
                className="relative z-10 flex-1 flex items-center justify-center py-2"
              >
                {/* Concentric Defense Rings & Centered Identity Vault */}
                <div className="relative w-full max-w-[260px] h-[170px] flex items-center justify-center">
                  {/* Expanding Sonar Forcefield Waves */}
                  <motion.div
                    className="absolute rounded-full border border-[#047857]/30 pointer-events-none"
                    initial={{ width: 130, height: 130, opacity: 0.8 }}
                    animate={{ width: [130, 220], height: [130, 220], opacity: [0.7, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <motion.div
                    className="absolute rounded-full border border-[#047857]/20 pointer-events-none"
                    initial={{ width: 130, height: 130, opacity: 0.8 }}
                    animate={{ width: [130, 220], height: [130, 220], opacity: [0.7, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 1.4 }}
                  />

                  {/* Outer Dashed Rotating Barrier with Orbiting Satellite Node */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-[185px] h-[185px] rounded-full border border-dashed border-[#047857]/30 pointer-events-none"
                  >
                    {/* Orbiting Defense Satellite Dot */}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#047857] shadow-[0_0_8px_#6CFF94]" />
                  </motion.div>

                  {/* Inner Protective Pulse Aura */}
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-[145px] h-[145px] rounded-full bg-[#6CFF94]/20 border border-[#047857]/20 pointer-events-none"
                  />

                  {/* Central Identity Vault Card with Scanner & Shield Animations */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 w-[210px] rounded-[20px] bg-white border border-black/10 shadow-[0_14px_30px_rgba(0,0,0,0.07)] p-3.5 flex flex-col gap-2.5 group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
                  >
                    {/* Live Laser Scanner Beam */}
                    <motion.div
                      className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#047857]/65 to-transparent shadow-[0_0_8px_rgba(108,255,148,0.8)] z-30"
                      animate={{ top: ['4%', '94%', '4%'] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Top Row: User Avatar + Verified Status */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-8 h-8 rounded-full bg-[#6CFF94]/40 flex items-center justify-center text-[#047857]"
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <UserCheck className="w-4 h-4 stroke-[2.2]" />
                        </motion.div>
                        <div className="flex flex-col text-left">
                          <span className="text-[12px] font-bold text-black leading-tight">
                            Identity Vault
                          </span>
                          <span className="text-[10px] text-neutral-500 font-medium">
                            Zero-Knowledge
                          </span>
                        </div>
                      </div>

                      {/* Lock Pill with subtle glow */}
                      <motion.div
                        className="w-6 h-6 rounded-full bg-black/[0.05] border border-black/10 flex items-center justify-center text-neutral-700"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Lock className="w-3 h-3 stroke-[2.2]" />
                      </motion.div>
                    </div>

                    {/* Middle: Masked / Encrypted Data Rows with Shimmer Sweep */}
                    <div className="relative rounded-xl bg-[#F7F8F7] border border-black/[0.06] p-2 flex flex-col gap-1.5 overflow-hidden z-10">
                      {/* Encryption Shimmer Beam */}
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                        animate={{ x: ['-100%', '280%'] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
                      />

                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                        <span>CNIC / ID</span>
                        <span className="font-semibold text-neutral-800 tracking-wider">••••-••••••</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
                        <span>Activity</span>
                        <span className="font-semibold text-neutral-800 tracking-wider">••••-••••••</span>
                      </div>
                    </div>

                    {/* Bottom Status Pill with Active Ping */}
                    <div className="flex items-center justify-between pt-0.5 relative z-10">
                      <span className="text-[10px] font-medium text-neutral-500">
                        Third-Party Sharing
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#6CFF94]/35 text-[#047857] text-[10px] font-bold tracking-tight shadow-2xs">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#047857] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#047857]"></span>
                        </span>
                        0% Shared
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-black/10">
                <h3 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.5px] text-black m-0">
                  Your data.
                </h3>
                <p className="mt-1 text-[15px] text-neutral-600 font-normal m-0">
                  Never sold.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Partner Footnote */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-black/10 text-center max-w-2xl mx-auto">
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-neutral-500 font-normal m-0">
            Zazo is a tech company, not a bank.
          </p>
        </div>
      </div>
    </section>
  );
}
