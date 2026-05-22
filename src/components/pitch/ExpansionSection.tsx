import { PitchSection } from "./PitchSection";

export function ExpansionSection() {
  const paths = [
    "Insurance risk support",
    "Lending data layer",
    "Procurement intelligence",
    "Carbon and climate programs",
    "API or white-label agri AI assistant",
  ];

  return (
    <PitchSection
      id="expansion"
      label="Expansion Logic"
      title="Expansion follows trust, not feature ambition."
      intro="These paths become credible only after source quality, consent, retention, and partner distribution are proven."
      tone="surface"
    >
      <div className="grid gap-3 md:grid-cols-5">
        {paths.map((path) => (
          <div key={path} className="rounded-lg border border-[#DDD2BD] bg-[#FAF7F0] p-4 text-sm font-black text-[#1F2A24]">
            {path}
          </div>
        ))}
      </div>
    </PitchSection>
  );
}

