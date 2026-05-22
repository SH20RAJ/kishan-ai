"use client";

import type { PitchQA } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function QAAccordion({ item }: { item: PitchQA }) {
  const badgeLabel =
    item.confidence === "High proof"
      ? "verified"
      : item.confidence === "Medium proof"
        ? "to-validate"
        : item.confidence === "Assumption"
          ? "assumption"
          : "risk";

  return (
    <details className="group rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5 open:border-[#B8892E]">
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#DDD2BD] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#667066]">
                {item.category}
              </span>
              <span className="rounded-full border border-[#DDD2BD] bg-[#FAF7F0] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#667066]">
                {item.difficulty}
              </span>
              <SourceReliabilityBadge label={badgeLabel} />
            </div>
            <h3 className="text-lg font-black leading-6 text-[#1F2A24]">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-[#47524A]">{item.shortAnswer}</p>
          </div>
          <span className="text-sm font-black text-[#B8892E] group-open:hidden">Expand</span>
          <span className="hidden text-sm font-black text-[#B8892E] group-open:inline">Collapse</span>
        </div>
      </summary>
      <div className="mt-5 grid gap-4 border-t border-[#DDD2BD] pt-5 lg:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#667066]">Why investor asks this</p>
          <p className="mt-2 text-sm leading-6 text-[#47524A]">{item.whyInvestorAsks}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#667066]">Detailed answer</p>
          <p className="mt-2 text-sm leading-6 text-[#47524A]">{item.detailedAnswer}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#667066]">Proof / citation</p>
          <p className="mt-2 text-sm leading-6 text-[#47524A]">{item.proof}</p>
          <CitationGroup sourceIds={item.sourceIds} />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#667066]">What not to say</p>
          <p className="mt-2 text-sm leading-6 text-[#9F3A2F]">{item.whatNotToSay}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs font-black uppercase tracking-[0.08em] text-[#667066]">Best founder answer</p>
          <p className="mt-2 rounded-lg border border-[#DDD2BD] bg-[#FAF7F0] p-4 text-sm font-semibold leading-6 text-[#1F2A24]">
            {item.bestFounderAnswer}
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-[#667066]">
            Suggested reference: <span className="text-[#174C35]">{item.suggestedReference}</span>
          </p>
        </div>
      </div>
    </details>
  );
}

