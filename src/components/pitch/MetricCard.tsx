import type { PitchMetric } from "@/lib/pitch";
import { CitationGroup } from "./CitationBadge";
import { SourceReliabilityBadge } from "./SourceReliabilityBadge";

export function MetricCard({ metric }: { metric: PitchMetric }) {
  return (
    <article className="rounded-lg border border-[#DDD2BD] bg-[#FFFDF8] p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#667066]">{metric.label}</p>
        <SourceReliabilityBadge confidence={metric.confidence} label={metric.labelType} />
      </div>
      <p className="text-3xl font-black tracking-normal text-[#174C35]">{metric.value}</p>
      <p className="mt-3 text-sm leading-6 text-[#47524A]">{metric.detail}</p>
      <CitationGroup sourceIds={metric.sourceIds} />
    </article>
  );
}

