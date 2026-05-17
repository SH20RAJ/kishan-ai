interface TrustBadgeProps {
  type: "government" | "kvk" | "research" | "expert";
  label?: string;
  href?: string;
  className?: string;
}

const badgeConfig: Record<
  TrustBadgeProps["type"],
  { bg: string; text: string; border: string; defaultLabel: string; icon: string }
> = {
  government: {
    bg: "bg-primary/10",
    text: "text-primary-dark",
    border: "border-primary/20",
    defaultLabel: "Government Source",
    icon: "\u2605",
  },
  kvk: {
    bg: "bg-info/10",
    text: "text-info",
    border: "border-info/20",
    defaultLabel: "KVK Verified",
    icon: "\u2714",
  },
  research: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/20",
    defaultLabel: "Research Source",
    icon: "\u29C9",
  },
  expert: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    defaultLabel: "Expert Reviewed",
    icon: "\u269B",
  },
};

export default function TrustBadge({
  type,
  label,
  href,
  className = "",
}: TrustBadgeProps) {
  const config = badgeConfig[type];
  const displayLabel = label || config.defaultLabel;

  const inner = (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${config.bg} ${config.text} ${config.border} ${className}`}
    >
      <span aria-hidden="true">{config.icon}</span>
      {displayLabel}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-80 transition-opacity"
        aria-label={`Source: ${displayLabel}. Opens in new tab.`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}
