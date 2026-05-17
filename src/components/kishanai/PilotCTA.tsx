interface PilotCTAProps {
  headline?: string;
  description?: string;
  primaryAction?: { label: string; href?: string; onClick?: () => void };
  secondaryAction?: { label: string; href?: string; onClick?: () => void };
  className?: string;
}

export default function PilotCTA({
  headline = "Join the KisanAI Pilot Program",
  description = "We are partnering with progressive farmers, FPOs, and agriculture officers to test and improve KisanAI. Get early access and help shape the future of farming technology in India.",
  primaryAction = { label: "Join Waitlist", href: "/waitlist" },
  secondaryAction = { label: "Partner With Us", href: "/partner" },
  className = "",
}: PilotCTAProps) {
  return (
    <section
      aria-label="Pilot program call to action"
      className={`rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-surface to-secondary/5 p-6 sm:p-10 ${className}`}
    >
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
          <span aria-hidden="true">{"\u2B50"}</span>
          Pilot Program
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
          {headline}
        </h2>
        <p className="text-base text-muted mt-3 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {primaryAction.href ? (
            <a
              href={primaryAction.href}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark active:scale-[0.98] transition-all"
            >
              {primaryAction.label}
            </a>
          ) : (
            <button
              onClick={primaryAction.onClick}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark active:scale-[0.98] transition-all"
            >
              {primaryAction.label}
            </button>
          )}
          {secondaryAction.href ? (
            <a
              href={secondaryAction.href}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-border bg-surface text-foreground font-semibold hover:bg-surface-raised active:scale-[0.98] transition-all"
            >
              {secondaryAction.label}
            </a>
          ) : (
            <button
              onClick={secondaryAction.onClick}
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-border bg-surface text-foreground font-semibold hover:bg-surface-raised active:scale-[0.98] transition-all"
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
