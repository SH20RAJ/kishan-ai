import { gtmChannels } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function GTMSection() {
  const funnel = [
    "Partner signs pilot",
    "Field staff onboard farmers",
    "Farmers use advisory for trigger moments",
    "KisanAI measures repeat usage and outcomes",
    "Partner gets dashboard",
    "Pilot converts to annual contract",
    "New districts, crops, and languages added",
  ];

  return (
    <PitchSection
      id="gtm"
      label="Go-To-Market Strategy"
      title="Distribution through trusted agricultural networks, not app-store hope."
      intro="The early GTM should be deliberately local, partner-led, and demonstration-first."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gtmChannels.map(([channel, play]) => (
          <article key={channel} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <h3 className="text-lg font-black text-[#174C35]">{channel}</h3>
            <p className="mt-3 text-sm leading-6 text-[#47524A]">{play}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
        <h3 className="text-xl font-black text-[#1F2A24]">Pilot-to-contract funnel</h3>
        <ol className="mt-5 grid gap-3 md:grid-cols-7">
          {funnel.map((step, index) => (
            <li key={step} className="rounded-md bg-[#FAF7F0] p-3 text-sm font-bold leading-5 text-[#47524A]">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.08em] text-[#B8892E]">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </PitchSection>
  );
}

