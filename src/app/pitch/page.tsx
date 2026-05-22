import type { Metadata } from "next";
import {
  AISafetySection,
  AskUseOfFundsSection,
  BusinessModelSection,
  CompetitorSection,
  DataProofSection,
  GTMSection,
  GovernmentPilotSection,
  HowItWorksSection,
  InvestorQASection,
  InvestorSnapshot,
  MarketSizingSection,
  MetricsSection,
  PitchCTA,
  PitchHero,
  PitchNavigation,
  PitchTableOfContents,
  ProblemSection,
  ProductSection,
  RiskMitigationSection,
  RoadmapSection,
  TechnicalMoatSection,
  WhyNowSection,
} from "@/components/pitch";
import { investorQuestions } from "@/lib/pitch";

export const metadata: Metadata = {
  title: "Pitch",
  description:
    "KisanAI investor pitch: a vernacular-first, source-backed AI decision infrastructure layer for Indian agriculture.",
  alternates: { canonical: "/pitch" },
  openGraph: {
    title: "KisanAI Pitch",
    description:
      "Investor-grade pitch memo for KisanAI: product, market, GTM, government pilot, safety, Q&A, and data proof room.",
    url: "/pitch",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KisanAI pitch memo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KisanAI Pitch",
    description: "Source-backed investor pitch memo for KisanAI.",
    images: ["/og-image.png"],
  },
};

export default function PitchPage() {
  return (
    <div className="pitch-page min-h-screen bg-[#FAF7F0] text-[#1F2A24]">
      <PitchNavigation />
      <PitchTableOfContents />
      <main>
        <PitchHero />
        <InvestorSnapshot />
        <ProblemSection />
        <WhyNowSection />
        <MarketSizingSection />
        <ProductSection />
        <HowItWorksSection />
        <BusinessModelSection />
        <GTMSection />
        <CompetitorSection />
        <TechnicalMoatSection />
        <AISafetySection />
        <GovernmentPilotSection />
        <MetricsSection />
        <RoadmapSection />
        <InvestorQASection questions={investorQuestions} />
        <DataProofSection />
        <RiskMitigationSection />
        <AskUseOfFundsSection />
        <PitchCTA />
      </main>
      <footer className="bg-[#1F2A24] px-4 py-8 text-center text-sm text-[#E8E0CF] sm:px-6">
        <p className="font-semibold">KisanAI provides decision support, not regulated agricultural, financial, legal, insurance, or pesticide-prescription advice.</p>
        <p className="mt-2 text-[#CFC2AA]">All unsupported claims on this page are labeled as assumptions, risks, or validation gaps.</p>
      </footer>
    </div>
  );
}

