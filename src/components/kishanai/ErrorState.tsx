"use client";

import { ReactNode } from "react";

interface ErrorStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export default function ErrorState({
  icon,
  title = "Something went wrong",
  description = "We could not load this content. Please try again.",
  onRetry,
  retryLabel = "Try Again",
  className = "",
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`flex flex-col items-center justify-center text-center px-6 py-16 ${className}`}
    >
      {icon && (
        <div className="mb-4 text-error" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-base text-muted max-w-md mb-6">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark active:scale-[0.98] transition-all"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
