import type { PitchClaim } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function ClaimCard({ claim }: { claim: PitchClaim }) {
  return (
    <article className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <SourceReliabilityBadge confidence={claim.confidence} label={claim.label} />
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#667066]">{claim.category}</span>
      </div>
      <h3 className="text-lg font-black text-[#1F2A24]">{claim.claim}</h3>
      {claim.value && <p className="mt-2 text-sm font-semibold text-[#174C35]">{claim.value}</p>}
      <p className="mt-3 text-sm leading-6 text-[#47524A]">{claim.useInPitch}</p>
      <CitationGroup sourceIds={claim.sourceIds} />
    </article>
  );
}

