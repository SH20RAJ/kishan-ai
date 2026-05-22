import { problemPoints } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { PitchSection } from "./PitchSection";

export function ProblemSection() {
  return (
    <PitchSection
      id="problem"
      label="The Problem"
      title="The issue is not lack of information. It is lack of usable, trusted information at the decision moment."
      intro="A farmer facing a symptom, rain event, price decision, or scheme deadline needs a safe next step in the right language, not another portal or unverified message."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {problemPoints.map((point) => (
          <article key={point.title} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <h3 className="text-xl font-black text-[#1F2A24]">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#47524A]">{point.body}</p>
            <CitationGroup sourceIds={point.sourceIds} />
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-lg border-l-4 border-[#174C35] bg-[#FFFDF8] p-6">
        <p className="text-xl font-black leading-8 text-[#174C35]">
          The real problem is not lack of information. The real problem is that the right information is not available at the right time, in the right language, with enough trust to act.
        </p>
      </div>
    </PitchSection>
  );
}

