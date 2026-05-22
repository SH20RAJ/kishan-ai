import { whyNowCards } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { PitchSection } from "./PitchSection";

export function WhyNowSection() {
  return (
    <PitchSection
      id="why-now"
      label="Why Now"
      title="Digital rails, AI capability, and agricultural pressure are converging."
      intro="The timing story is not simply that AI is popular. It is that farmers are already using digital ag tools, government is validating AI advisory, and modern AI can now support vernacular, multimodal, source-backed workflows."
      tone="muted"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {whyNowCards.map((card) => (
          <article key={card.title} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <h3 className="text-xl font-black text-[#1F2A24]">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#47524A]">{card.body}</p>
            <CitationGroup sourceIds={card.sourceIds} />
          </article>
        ))}
      </div>
    </PitchSection>
  );
}

