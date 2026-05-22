import { roadmap } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function RoadmapSection() {
  return (
    <PitchSection
      id="roadmap"
      label="Roadmap"
      title="A proof-led roadmap, not a feature dump."
      intro="Every stage is tied to the next evidence milestone: trust, retention, partner conversion, and controlled expansion."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {roadmap.map((item) => (
          <article key={item.timeframe} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <p className="text-xs font-black uppercase tracking-[0.08em] text-[#B8892E]">{item.timeframe}</p>
            <h3 className="mt-2 text-xl font-black text-[#1F2A24]">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#47524A]">
              {item.items.map((roadmapItem) => (
                <li key={roadmapItem} className="border-l-2 border-[#DDD2BD] pl-3">{roadmapItem}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PitchSection>
  );
}

