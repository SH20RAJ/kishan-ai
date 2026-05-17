"use client";

import { useState } from "react";

interface FeedbackWidgetProps {
  onSubmit?: (data: { helpful: boolean; comment?: string }) => void;
  className?: string;
}

export default function FeedbackWidget({
  onSubmit,
  className = "",
}: FeedbackWidgetProps) {
  const [open, setOpen] = useState(false);
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (helpful === null) return;
    onSubmit?.({ helpful, comment: comment.trim() || undefined });
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setHelpful(null);
      setComment("");
    }, 2000);
  };

  return (
    <div className={`fixed bottom-24 right-4 z-40 ${className}`}>
      {open ? (
        <div
          role="dialog"
          aria-label="Send feedback"
          className="w-80 rounded-2xl border border-border bg-surface shadow-xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">
              {submitted ? "Thank you!" : "Was this helpful?"}
            </h3>
            <button
              onClick={() => {
                setOpen(false);
                setSubmitted(false);
                setHelpful(null);
                setComment("");
              }}
              aria-label="Close feedback"
              className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-surface-raised text-muted"
            >
              {"\u2715"}
            </button>
          </div>

          {submitted ? (
            <div className="p-6 text-center">
              <span className="text-3xl" aria-hidden="true">{"\uD83D\uDC4D"}</span>
              <p className="text-sm text-muted mt-2">
                Your feedback helps us improve for all farmers.
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setHelpful(true)}
                  aria-label="Yes, helpful"
                  aria-pressed={helpful === true}
                  className={`h-14 w-14 flex items-center justify-center rounded-xl text-2xl border-2 transition-all ${
                    helpful === true
                      ? "border-success bg-success/10 scale-110"
                      : "border-border hover:border-success/40"
                  }`}
                >
                  {"\uD83D\uDC4D"}
                </button>
                <button
                  onClick={() => setHelpful(false)}
                  aria-label="No, not helpful"
                  aria-pressed={helpful === false}
                  className={`h-14 w-14 flex items-center justify-center rounded-xl text-2xl border-2 transition-all ${
                    helpful === false
                      ? "border-error bg-error/10 scale-110"
                      : "border-border hover:border-error/40"
                  }`}
                >
                  {"\uD83D\uDC4E"}
                </button>
              </div>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Any suggestions? (optional)"
                rows={3}
                aria-label="Feedback comment"
                className="w-full rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              <button
                onClick={handleSubmit}
                disabled={helpful === null}
                className="w-full h-11 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Send Feedback
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open feedback form"
          className="h-12 w-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark active:scale-95 flex items-center justify-center text-lg transition-all"
        >
          {"\uD83D\uDCAC"}
        </button>
      )}
    </div>
  );
}
