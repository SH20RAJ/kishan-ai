import { safetyRisks } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

const additionalRisks = [
  { risk: "Partner adoption", whyItMatters: "Pilot enthusiasm may not convert to annual contracts.", mitigation: "Define conversion criteria before pilot launch." },
  { risk: "Too-broad roadmap", whyItMatters: "Quality drops when crop, language, and workflow scope expand too fast.", mitigation: "Gate expansion on answer quality and retention." },
  { risk: "Founder-market fit", whyItMatters: "Public materials do not yet prove domain access or advisor network.", mitigation: "Add agronomist/KVK advisors and named pilot partners as evidence develops." },
  { risk: "Unsupported public claims", whyItMatters: "Fake traction or government logos destroy trust.", mitigation: "Keep proof, assumptions, and validation gaps visibly separated." },
];

export function RiskMitigationSection() {
  const risks = [...safetyRisks, ...additionalRisks];

  return (
    <PitchSection
      id="risks"
      label="Risks & Mitigations"
      title="The credible version of KisanAI is clear about what can go wrong."
      intro="The goal is not to hide risk. The goal is to show investors, partners, and public officers that the company knows how to manage it."
      tone="muted"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {risks.map((item) => (
          <article key={item.risk} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <h3 className="text-lg font-black text-[#9F3A2F]">{item.risk}</h3>
            <p className="mt-3 text-sm leading-6 text-[#47524A]"><span className="font-black text-[#1F2A24]">Why it matters: </span>{item.whyItMatters}</p>
            <p className="mt-2 text-sm leading-6 text-[#47524A]"><span className="font-black text-[#1F2A24]">Mitigation: </span>{item.mitigation}</p>
          </article>
        ))}
      </div>
    </PitchSection>
  );
}

