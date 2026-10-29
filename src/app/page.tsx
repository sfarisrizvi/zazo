import ScrollBackgroundProvider from "@/components/ScrollBackgroundContext";
import SectionSnapManager from "@/components/SectionSnapManager";
import Navbar from "@/components/Navbar";
import HeroAndShowcase from "@/components/HeroAndShowcase";
import UseCasesSection from "@/components/UseCasesSection";
import RateCalculator from "@/components/RateCalculator";
import ParallelShowcase from "@/components/ParallelShowcase";
import SecurityTrust from "@/components/SecurityTrust";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScrollBackgroundProvider>
      <SectionSnapManager />
      <div className="flex min-h-screen flex-col bg-transparent">
        {/* Navigation: Hidden on hero section, reveals when scrolled */}
        <Navbar />

        <main className="flex-1">
          {/* 1. Hero & Pinned Phone Showcase Journey */}
          <HeroAndShowcase />

          {/* 2. Full-Width Stacking Use Cases Section */}
          <UseCasesSection />

          {/* 2.5 Live Rate Calculator Section */}
          <RateCalculator />

          {/* 3. Parallel Feature Sections with Overlapping Text */}
          <ParallelShowcase />

          {/* 4. Trust & Security Orbit Constellation */}
          <SecurityTrust />

          {/* 5. Frequently Asked Questions */}
          <FaqAccordion />
        </main>

        {/* FOOTER & Product Pages Modals */}
        <Footer />
      </div>
    </ScrollBackgroundProvider>
  );
}
