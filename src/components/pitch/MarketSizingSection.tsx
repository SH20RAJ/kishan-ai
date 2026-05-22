import { marketSizing } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { PitchSection } from "./PitchSection";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function MarketSizingSection() {
  return (
    <PitchSection
      id="market-opportunity"
      label="Market Opportunity"
      title="Large opportunity, discounted for reachability and execution."
      intro="KisanAI should use a conservative software market model, not national agriculture GDP as a vanity proxy."
      tone="surface"
    >
      <div className="mb-6 rounded-lg border border-[#D9C58B] bg-[#F3E6C8] p-5 text-sm font-semibold leading-6 text-[#6F4E37]">
        We do not treat national farmer count as direct paid users. Our model discounts for reachability, language, geography, crop coverage, and distribution.
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {marketSizing.map((row) => (
          <article key={row.layer} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-black text-[#174C35]">{row.layer}</h3>
              <SourceReliabilityBadge label="assumption" />
            </div>
            <p className="text-sm font-semibold text-[#1F2A24]">{row.definition}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Assumption</dt>
                <dd className="mt-1 text-[#47524A]">{row.assumption}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Calculation</dt>
                <dd className="mt-1 text-[#47524A]">{row.calculation}</dd>
              </div>
              <div>
                <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Annual value</dt>
                <dd className="mt-1 text-xl font-black text-[#174C35]">{row.annualValue}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <CitationGroup sourceIds={["pm-kisan-toi", "internal-assumptions"]} />
    </PitchSection>
  );
}

