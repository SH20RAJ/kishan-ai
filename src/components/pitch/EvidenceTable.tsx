import type { PitchClaim } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function EvidenceTable({ claims }: { claims: PitchClaim[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
      <table className="min-w-[920px] w-full border-collapse text-left text-sm">
        <thead className="bg-[#F1EBDD] text-xs uppercase tracking-[0.08em] text-[#667066]">
          <tr>
            <th className="px-4 py-3">Claim</th>
            <th className="px-4 py-3">Number / Fact</th>
            <th className="px-4 py-3">Confidence</th>
            <th className="px-4 py-3">Source</th>
            <th className="px-4 py-3">How to use</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#DDD2BD]">
          {claims.map((claim) => (
            <tr key={claim.id} className="align-top">
              <td className="px-4 py-4 font-semibold text-[#1F2A24]">{claim.claim}</td>
              <td className="px-4 py-4 text-[#47524A]">{claim.value || "N/A"}</td>
              <td className="px-4 py-4">
                <SourceReliabilityBadge confidence={claim.confidence} label={claim.label} />
              </td>
              <td className="px-4 py-4">
                <CitationGroup sourceIds={claim.sourceIds} />
              </td>
              <td className="px-4 py-4 text-[#47524A]">{claim.useInPitch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

