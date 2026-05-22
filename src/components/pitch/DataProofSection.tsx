import { pitchClaims, pitchSources } from "@/lib/pitch";
import { ClaimCard } from "./ClaimCard";
import { EvidenceTable } from "./EvidenceTable";
import { PitchSection } from "./PitchSection";

const featuredClaimIds = [
  "claim-product-scope",
  "claim-pm-kisan",
  "claim-farmrise",
  "claim-bharat-vistaar",
  "claim-cropin",
  "claim-traction-gap",
];

export function DataProofSection() {
  const featured = pitchClaims.filter((claim) => featuredClaimIds.includes(claim.id));

  return (
    <PitchSection
      id="data-proof"
      label="Data Proof Room"
      title="A preview of claims, sources, confidence, assumptions, and validation gaps."
      intro="Investors should be able to tell exactly what is sourced, what is assumption-led, and what must be validated during pilots."
      tone="surface"
    >
      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        ))}
      </div>
      <EvidenceTable claims={pitchClaims} />
      <div className="mt-10 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
        <h3 className="text-xl font-black text-[#1F2A24]">Source list</h3>
        <p className="mt-2 text-sm leading-6 text-[#47524A]">
          External links open in a new tab. Low-confidence entries are assumptions, crawler-local references, or items that need direct verification before being used as headline proof.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {pitchSources.map((source) => (
            source.url ? (
              <a key={source.id} href={source.url} target="_blank" rel="noreferrer" className="rounded-md border border-[#DDD2BD] bg-[#FAF7F0] p-3 text-sm font-semibold text-[#174C35] transition hover:border-[#B8892E]">
                {source.title}
                {source.publisher && <span className="block text-xs font-bold text-[#667066]">{source.publisher}</span>}
              </a>
            ) : (
              <div key={source.id} className="rounded-md border border-[#DDD2BD] bg-[#FAF7F0] p-3 text-sm font-semibold text-[#47524A]">
                {source.title}
                {source.publisher && <span className="block text-xs font-bold text-[#667066]">{source.publisher}</span>}
              </div>
            )
          ))}
        </div>
      </div>
    </PitchSection>
  );
}
