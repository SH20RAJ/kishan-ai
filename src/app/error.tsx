'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-[var(--error)] mb-4">!</p>
      <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">Something went wrong</h1>
      <p className="text-[var(--muted)] mb-8">{error.message || 'An unexpected error occurred.'}</p>
      <button onClick={reset} className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium min-h-[48px]">
        Try Again
      </button>
    </div>
  );
}
