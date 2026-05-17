interface MetricCardProps {
  value: string;
  label: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  demo?: boolean;
  className?: string;
}

export default function MetricCard({
  value,
  label,
  trend,
  trendValue,
  demo = false,
  className = "",
}: MetricCardProps) {
  const trendIcons: Record<string, string> = {
    up: "\u2191",
    down: "\u2193",
    stable: "\u2192",
  };

  const trendColors: Record<string, string> = {
    up: "text-success",
    down: "text-error",
    stable: "text-muted",
  };

  return (
    <article
      className={`relative rounded-xl border border-border bg-surface p-5 ${className}`}
    >
      {demo && (
        <span className="absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full bg-secondary-light/15 text-secondary">
          Demo
        </span>
      )}
      <p className="text-3xl font-bold text-foreground tracking-tight">
        {value}
      </p>
      <p className="text-sm text-muted mt-1">{label}</p>
      {trend && trendValue && (
        <p
          className={`text-sm font-medium mt-2 ${trendColors[trend]}`}
          aria-label={`Trend: ${trend} by ${trendValue}`}
        >
          <span aria-hidden="true">{trendIcons[trend]}</span> {trendValue}
        </p>
      )}
    </article>
  );
}
