import ScrollBackgroundProvider from "@/components/ScrollBackgroundContext";
import SectionSnapManager from "@/components/SectionSnapManager";
import Navbar from "@/components/Navbar";
import HeroAndShowcase from "@/components/HeroAndShowcase";
import ThreeSteps from "@/components/ThreeSteps";
import BentoFeatures from "@/components/BentoFeatures";
import LiveFxCalculator from "@/components/LiveFxCalculator";
import AudienceTabs from "@/components/AudienceTabs";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import SecurityTrust from "@/components/SecurityTrust";
import FaqAccordion from "@/components/FaqAccordion";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrollBackgroundProvider>
      <SectionSnapManager />
      <div className="flex min-h-screen flex-col bg-transparent">
        {/* 1. Full-Bleed Sticky Navigation */}
        <Navbar />

        <main className="flex-1">
        {/* 2. Unified Hero & Cash App / Tomi Pinned Phone Journey (1 Continuous Phone) */}
        <HeroAndShowcase />

        {/* 3. Three Simple Steps (Green Accent BG) */}
        <ThreeSteps />

        {/* 4. Core Rails Bento Grid (White BG) */}
        <BentoFeatures />

        {/* 5. Live Mid-Market FX Calculator (Black BG) */}
        <LiveFxCalculator />

        {/* 6. Audience Personas (Freelancers, Businesses, Remittance, Merchants, Local Users) */}
        <AudienceTabs />

        {/* 7. Workflow Comparison: Fragmented Banking vs Zazo Connected Journey */}
        <Comparison />

        {/* 8. Transparent Pricing & Zero Surprise Fees */}
        <Pricing />

        {/* 9. Security, Regulated Partner Rails & Compliance */}
        <SecurityTrust />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqAccordion />

        {/* 11. Early Access Waitlist Form */}
        <WaitlistSection />
      </main>

      {/* 11. Directory Footer with Legal Disclaimer & Blue Links */}
      <Footer />
    </div>
    </ScrollBackgroundProvider>
  );
}
