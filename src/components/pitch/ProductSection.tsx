import { productModules } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";

export function ProductSection() {
  return (
    <PitchSection
      id="product"
      label="KisanAI Product"
      title="A practical assistant for repeated farmer decision moments."
      intro="Each module is framed as a user pain, a KisanAI workflow, and a metric to prove whether it is working."
    >
      <div className="overflow-x-auto rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
        <table className="min-w-[860px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#F1EBDD] text-xs uppercase tracking-[0.08em] text-[#667066]">
            <tr>
              <th className="px-4 py-3">Module</th>
              <th className="px-4 py-3">User pain</th>
              <th className="px-4 py-3">KisanAI flow</th>
              <th className="px-4 py-3">Proof metric</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD2BD]">
            {productModules.map(([module, pain, flow, metric]) => (
              <tr key={module} className="align-top">
                <td className="px-4 py-4 font-black text-[#174C35]">{module}</td>
                <td className="px-4 py-4 text-[#47524A]">{pain}</td>
                <td className="px-4 py-4 text-[#47524A]">{flow}</td>
                <td className="px-4 py-4 text-[#47524A]">{metric}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PitchSection>
  );
}

