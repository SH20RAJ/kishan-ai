import { pilotPlan } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function GovernmentPilotSection() {
  return (
    <PitchSection
      id="pilot"
      label="Government / FPO Pilot Proposal"
      title="90-Day Government / FPO Pilot Proposal"
      intro={pilotPlan.objective}
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="overflow-hidden rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
          <table className="w-full border-collapse text-left text-sm">
            <tbody className="divide-y divide-[#DDD2BD]">
              {pilotPlan.attributes.map(([label, value]) => (
                <tr key={label} className="align-top">
                  <th className="w-1/3 bg-[#F1EBDD] px-4 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#667066]">{label}</th>
                  <td className="px-4 py-4 font-semibold text-[#1F2A24]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
          <h3 className="text-xl font-black text-[#1F2A24]">Pilot KPIs</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {pilotPlan.kpis.map((kpi) => (
              <span key={kpi} className="rounded-md bg-[#FAF7F0] px-3 py-2 text-sm font-bold text-[#47524A]">{kpi}</span>
            ))}
          </div>
        </div>
      </div>
    </PitchSection>
  );
}

