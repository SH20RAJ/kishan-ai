import { competitors } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function CompetitorSection() {
  return (
    <PitchSection
      id="competition"
      label="Competition"
      title="The market is not empty. That is the point."
      intro="Existing players prove demand. KisanAI's opportunity is to become the simplest trusted decision layer inside existing farmer and partner workflows."
      tone="muted"
    >
      <div className="overflow-x-auto rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#F1EBDD] text-xs uppercase tracking-[0.08em] text-[#667066]">
            <tr>
              <th className="px-4 py-3">Competitor</th>
              <th className="px-4 py-3">Strength</th>
              <th className="px-4 py-3">Weakness</th>
              <th className="px-4 py-3">KisanAI positioning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD2BD]">
            {competitors.map(([name, strength, weakness, position]) => (
              <tr key={name} className="align-top">
                <td className="px-4 py-4 font-black text-[#174C35]">{name}</td>
                <td className="px-4 py-4 text-[#47524A]">{strength}</td>
                <td className="px-4 py-4 text-[#47524A]">{weakness}</td>
                <td className="px-4 py-4 text-[#47524A]">{position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 rounded-lg border-l-4 border-[#174C35] bg-[#FFFDF8] p-5 text-lg font-black leading-7 text-[#174C35]">
        KisanAI does not compete by having the biggest app. It competes by becoming the simplest trusted decision layer inside existing farmer and partner workflows.
      </p>
    </PitchSection>
  );
}

