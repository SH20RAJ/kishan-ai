import { businessModelRows } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function BusinessModelSection() {
  return (
    <PitchSection
      id="business-model"
      label="Business Model"
      title="Partner-led revenue first; farmer premium only after trust."
      intro="All pricing is currently a hypothesis unless new evidence is added. The strongest early path is B2B2C distribution through institutions that already aggregate farmers."
      tone="surface"
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {["Stage 1: Pilot revenue", "Stage 2: B2B SaaS", "Stage 3: B2B2C monetization", "Stage 4: Farmer premium", "Stage 5: Future expansion"].map((stage) => (
          <span key={stage} className="rounded-full border border-[#DDD2BD] bg-[#FAF7F0] px-3 py-1.5 text-xs font-bold text-[#47524A]">
            {stage}
          </span>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
        <table className="min-w-[980px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#F1EBDD] text-xs uppercase tracking-[0.08em] text-[#667066]">
            <tr>
              <th className="px-4 py-3">Model</th>
              <th className="px-4 py-3">Buyer</th>
              <th className="px-4 py-3">Pricing hypothesis</th>
              <th className="px-4 py-3">Why it works</th>
              <th className="px-4 py-3">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD2BD]">
            {businessModelRows.map(([model, buyer, pricing, why, risk]) => (
              <tr key={model} className="align-top">
                <td className="px-4 py-4 font-black text-[#174C35]">{model}</td>
                <td className="px-4 py-4 text-[#47524A]">{buyer}</td>
                <td className="px-4 py-4 text-[#47524A]">
                  <div className="mb-2"><SourceReliabilityBadge label="assumption" /></div>
                  {pricing}
                </td>
                <td className="px-4 py-4 text-[#47524A]">{why}</td>
                <td className="px-4 py-4 text-[#47524A]">{risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PitchSection>
  );
}

