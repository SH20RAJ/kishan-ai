import { executiveSnapshot } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function InvestorSnapshot() {
  return (
    <PitchSection
      id="executive-snapshot"
      label="Executive snapshot"
      title="A concise view of the company KisanAI should become"
      intro="The page separates what is proven, what is planned, and what still needs validation."
      tone="surface"
    >
      <div className="overflow-hidden rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
        <table className="w-full border-collapse text-left text-sm">
          <tbody className="divide-y divide-[#DDD2BD]">
            {executiveSnapshot.map(([category, answer]) => (
              <tr key={category} className="align-top">
                <th className="w-1/3 bg-[#F1EBDD] px-4 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#667066]">
                  {category}
                </th>
                <td className="px-4 py-4 font-semibold text-[#1F2A24]">{answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PitchSection>
  );
}

