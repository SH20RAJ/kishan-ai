"use client";

import { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={`flex flex-col items-center justify-center text-center px-6 py-16 ${className}`}
    >
      {icon && (
        <div className="mb-4 text-muted-light" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-base text-muted max-w-md mb-6">{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark active:scale-[0.98] transition-all"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
