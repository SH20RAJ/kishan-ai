import { moatLayers } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function TechnicalMoatSection() {
  return (
    <PitchSection
      id="technical-moat"
      label="Technical Moat"
      title="The base LLM is not the moat."
      intro="The moat is the workflow, distribution, data quality, safety system, and trust layer around it."
      tone="surface"
    >
      <div className="grid gap-3 md:grid-cols-3">
        {moatLayers.map((layer) => (
          <div key={layer} className="rounded-lg border border-[#DDD2BD] bg-[#FAF7F0] p-4 text-sm font-bold leading-6 text-[#1F2A24]">
            {layer}
          </div>
        ))}
      </div>
    </PitchSection>
  );
}

