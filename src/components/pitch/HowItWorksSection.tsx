import { howItWorksSteps } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function HowItWorksSection() {
  return (
    <PitchSection
      id="how-it-works"
      label="How It Works"
      title="Not a chatbot wrapper: a source-grounded decision workflow."
      intro="The base LLM is only one layer. The workflow captures intent, risk, crop, location, source, answer safety, and feedback."
      tone="muted"
    >
      <ol className="grid gap-3 md:grid-cols-7">
        {howItWorksSteps.map((step, index) => (
          <li key={step} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-4">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-[#B8892E]">Step {index + 1}</p>
            <p className="mt-2 text-sm font-black leading-5 text-[#1F2A24]">{step}</p>
          </li>
        ))}
      </ol>
    </PitchSection>
  );
}

