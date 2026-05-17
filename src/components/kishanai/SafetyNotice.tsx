"use client";

import { useState } from "react";

interface SafetyNoticeProps {
  message?: string;
  variant?: "default" | "warning" | "danger";
  dismissible?: boolean;
  className?: string;
}

const variantStyles: Record<
  string,
  { bg: string; border: string; icon: string; text: string }
> = {
  default: {
    bg: "bg-warning/5",
    border: "border-warning/30",
    icon: "text-warning",
    text: "text-foreground",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/40",
    icon: "text-warning",
    text: "text-foreground",
  },
  danger: {
    bg: "bg-error/10",
    border: "border-error/30",
    icon: "text-error",
    text: "text-foreground",
  },
};

export default function SafetyNotice({
  message = "Always consult your local agriculture officer, KVK, or experienced farmer before taking action on crop advice. AI suggestions may not apply to your specific conditions.",
  variant = "default",
  dismissible = false,
  className = "",
}: SafetyNoticeProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const style = variantStyles[variant] || variantStyles.default;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-4 rounded-xl border ${style.bg} ${style.border} ${className}`}
    >
      <span
        className={`text-xl shrink-0 mt-0.5 ${style.icon}`}
        aria-hidden="true"
      >
        {"\u26A0\uFE0F"}
      </span>
      <p className={`flex-1 text-sm leading-relaxed ${style.text}`}>
        {message}
      </p>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notice"
          className="shrink-0 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-black/5 text-muted"
        >
          {"\u2715"}
        </button>
      )}
    </div>
  );
}
