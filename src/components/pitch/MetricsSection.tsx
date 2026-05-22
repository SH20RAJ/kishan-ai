import { costBuckets, financialScenarios } from "@/lib/pitch";
import { PitchSection } from "./PitchSection";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function MetricsSection() {
  return (
    <PitchSection
      id="financials"
      label="Financial Model & Unit Economics"
      title="Scenario models, not claimed company metrics."
      intro="The page intentionally labels financials as assumptions until real paid pilots, renewal data, CAC, and usage cost are available."
      tone="surface"
    >
      <div className="mb-6">
        <SourceReliabilityBadge label="assumption" />
      </div>
      <div className="overflow-x-auto rounded-lg border border-[#DDD2BD] bg-[#FFFDF8]">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead className="bg-[#F1EBDD] text-xs uppercase tracking-[0.08em] text-[#667066]">
            <tr>
              <th className="px-4 py-3">Scenario</th>
              <th className="px-4 py-3">Users/Farmers covered</th>
              <th className="px-4 py-3">Revenue model</th>
              <th className="px-4 py-3">Annual revenue</th>
              <th className="px-4 py-3">Key assumption</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD2BD]">
            {financialScenarios.map((scenario) => (
              <tr key={scenario.scenario} className="align-top">
                <td className="px-4 py-4 font-black text-[#174C35]">{scenario.scenario}</td>
                <td className="px-4 py-4 text-[#47524A]">{scenario.farmersCovered}</td>
                <td className="px-4 py-4 text-[#47524A]">{scenario.revenueModel}</td>
                <td className="px-4 py-4 font-black text-[#1F2A24]">{scenario.annualRevenue}</td>
                <td className="px-4 py-4 text-[#47524A]">{scenario.keyAssumption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {costBuckets.map((bucket) => (
          <article key={bucket.bucket} className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5">
            <h3 className="text-lg font-black text-[#174C35]">{bucket.bucket}</h3>
            <p className="mt-3 text-sm leading-6 text-[#47524A]"><span className="font-black text-[#1F2A24]">Driver: </span>{bucket.driver}</p>
            <p className="mt-2 text-sm leading-6 text-[#47524A]"><span className="font-black text-[#1F2A24]">How to reduce: </span>{bucket.reduction}</p>
          </article>
        ))}
      </div>
    </PitchSection>
  );
}

