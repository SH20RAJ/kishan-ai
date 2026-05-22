import { safetyRisks } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function AISafetySection() {
  return (
    <PitchSection
      id="ai-safety"
      label="AI Safety & Trust"
      title="A serious agriculture assistant must be safer than a confident text box."
      intro="KisanAI should make uncertainty visible, ground answers in sources, and escalate high-risk cases."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {safetyRisks.map((item) => (
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

