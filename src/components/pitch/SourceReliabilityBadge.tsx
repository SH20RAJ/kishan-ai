import type { ClaimLabel, SourceConfidence } from "@/lib/pitch";

const confidenceStyles: Record<SourceConfidence, string> = {
  high: "border-[#9FB69E] bg-[#DDE9DD] text-[#174C35]",
  medium: "border-[#D9C58B] bg-[#F3E6C8] text-[#6F4E37]",
  low: "border-[#D8B7A5] bg-[#E9DDD1] text-[#7A332B]",
};

const labelStyles: Record<ClaimLabel, string> = {
  verified: "border-[#9FB69E] bg-[#DDE9DD] text-[#174C35]",
  assumption: "border-[#D9C58B] bg-[#F3E6C8] text-[#6F4E37]",
  "to-validate": "border-[#D8B7A5] bg-[#E9DDD1] text-[#7A332B]",
  risk: "border-[#D8B7A5] bg-[#F4D9D4] text-[#9F3A2F]",
};

export function SourceReliabilityBadge({
  confidence,
  label,
}: {
  confidence?: SourceConfidence;
  label?: ClaimLabel | string;
}) {
  const normalized = label as ClaimLabel | undefined;
  const className = normalized && normalized in labelStyles
    ? labelStyles[normalized]
    : confidence
      ? confidenceStyles[confidence]
      : confidenceStyles.low;

  const text = label
    ? label.replace("-", " ")
    : confidence
      ? `${confidence} confidence`
      : "needs validation";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${className}`}>
      {text}
    </span>
  );
}

