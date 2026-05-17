interface QuickAction {
  key: string;
  icon: string;
  label: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

interface FarmerQuickActionsProps {
  actions?: QuickAction[];
  className?: string;
}

const defaultActions: QuickAction[] = [
  {
    key: "ask",
    icon: "\uD83D\uDCAC",
    label: "Ask Question",
    description: "Get instant farming advice in your language",
    href: "/chat",
  },
  {
    key: "detect",
    icon: "\uD83D\uDCF7",
    label: "Detect Disease",
    description: "Upload a photo to identify crop diseases",
    href: "/scan",
  },
  {
    key: "weather",
    icon: "\u26C5",
    label: "Check Weather",
    description: "7-day forecast and farming alerts",
    href: "/weather",
  },
  {
    key: "mandi",
    icon: "\uD83D\uDCC8",
    label: "Mandi Prices",
    description: "Today's crop prices at nearby markets",
    href: "/mandi",
  },
  {
    key: "schemes",
    icon: "\uD83C\uDFDB\uFE0F",
    label: "Govt. Schemes",
    description: "PM-Kisan, insurance, subsidies for you",
    href: "/schemes",
  },
  {
    key: "more",
    icon: "\u2699\uFE0F",
    label: "More Tools",
    description: "Soil health, crop calendar, and more",
    href: "/tools",
  },
];

export default function FarmerQuickActions({
  actions = defaultActions,
  className = "",
}: FarmerQuickActionsProps) {
  return (
    <section aria-label="Quick actions" className={className}>
      <h2 className="text-lg font-semibold text-foreground mb-4 px-1">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {actions.map((action) => {
          const Wrapper = action.href ? "a" : "button";
          const wrapperProps = action.href
            ? { href: action.href }
            : { onClick: action.onClick };

          return (
            <Wrapper
              key={action.key}
              {...wrapperProps}
              className="group flex flex-col items-start gap-2 p-4 rounded-2xl border border-border bg-surface hover:bg-surface-raised hover:border-primary/20 hover:shadow-sm active:scale-[0.98] transition-all text-left min-h-[120px]"
            >
              <span
                aria-hidden="true"
                className="text-2xl group-hover:scale-110 transition-transform"
              >
                {action.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {action.label}
                </p>
                <p className="text-xs text-muted mt-0.5 leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
