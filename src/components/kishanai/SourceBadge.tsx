"use client";

import { useState } from "react";

interface SourceBadgeProps {
  title: string;
  type?: "government" | "kvk" | "research" | "expert" | "ai";
  freshness?: string;
  url?: string;
  details?: string;
  className?: string;
}

const typeStyles: Record<string, { bg: string; text: string }> = {
  government: { bg: "bg-primary/10", text: "text-primary-dark" },
  kvk: { bg: "bg-info/10", text: "text-info" },
  research: { bg: "bg-secondary/10", text: "text-secondary" },
  expert: { bg: "bg-accent/10", text: "text-accent" },
  ai: { bg: "bg-muted/10", text: "text-muted" },
};

export default function SourceBadge({
  title,
  type = "ai",
  freshness,
  url,
  details,
  className = "",
}: SourceBadgeProps) {
  const [expanded, setExpanded] = useState(false);
  const style = typeStyles[type] || typeStyles.ai;

  return (
    <div
      className={`rounded-lg border border-border bg-surface-raised overflow-hidden ${className}`}
    >
      <div className="flex items-start gap-3 p-3">
        <span
          className={`mt-0.5 inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${style.bg} ${style.text}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <div className="flex-1 min-w-0">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
            >
              {title}
            </a>
          ) : (
            <p className="text-sm font-medium text-foreground line-clamp-2">
              {title}
            </p>
          )}
          {freshness && (
            <p className="text-xs text-muted mt-0.5">{freshness}</p>
          )}
        </div>
        {details && (
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse details" : "Expand details"}
            className="text-xs text-primary font-medium shrink-0 h-8 px-2 rounded hover:bg-primary/5"
          >
            {expanded ? "Less" : "More"}
          </button>
        )}
      </div>
      {expanded && details && (
        <div className="px-3 pb-3 pt-0">
          <p className="text-sm text-muted leading-relaxed">{details}</p>
        </div>
      )}
    </div>
  );
}
