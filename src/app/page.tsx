import ScrollBackgroundProvider from "@/components/ScrollBackgroundContext";
import SectionSnapManager from "@/components/SectionSnapManager";
import Navbar from "@/components/Navbar";
import HeroAndShowcase from "@/components/HeroAndShowcase";
import ParallelShowcase from "@/components/ParallelShowcase";
import UseCasesSection from "@/components/UseCasesSection";
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

          {/* 2. Parallel Feature Sections with Overlapping Text */}
          <ParallelShowcase />

          {/* 3. Full-Width Stacking Use Cases Section */}
          <UseCasesSection />
        </main>

        {/* FOOTER & Product Pages Modals */}
        <Footer />
      </div>
    </ScrollBackgroundProvider>
  );
}
