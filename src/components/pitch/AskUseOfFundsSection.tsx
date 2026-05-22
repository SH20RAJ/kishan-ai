import { useOfFunds } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function AskUseOfFundsSection() {
  return (
    <PitchSection
      id="ask"
      label="Ask & Use of Funds"
      title="What We Are Raising For"
      intro="Do not hardcode a fake round amount. Use the page as a flexible fundraising asset until the round strategy is final."
      tone="surface"
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-[#DDD2BD] bg-[#FAF7F0] p-5">
          <SourceReliabilityBadge label="assumption" />
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Raising</dt>
              <dd className="mt-1 text-xl font-black text-[#1F2A24]">[Insert amount]</dd>
            </div>
            <div>
              <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Runway target</dt>
              <dd className="mt-1 text-xl font-black text-[#1F2A24]">12-18 months</dd>
            </div>
            <div>
              <dt className="font-black uppercase tracking-[0.08em] text-[#667066]">Primary goal</dt>
              <dd className="mt-1 text-sm leading-6 text-[#47524A]">Prove repeatable pilot-to-contract conversion across focused crop/geography cohorts.</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
          <h3 className="text-xl font-black text-[#1F2A24]">Use of funds</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {useOfFunds.map((item) => (
              <span key={item} className="rounded-md bg-[#FAF7F0] px-3 py-2 text-sm font-bold text-[#47524A]">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </PitchSection>
  );
}

