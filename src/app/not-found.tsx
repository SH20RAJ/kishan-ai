import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-[var(--primary)] mb-4">404</p>
      <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">Page not found</h1>
      <p className="text-[var(--muted)] mb-8">The page you are looking for does not exist.</p>
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium min-h-[48px]">Go Home</Link>
        <Link href="/application" className="px-6 py-3 rounded-xl border border-[var(--primary)] text-[var(--primary)] font-medium min-h-[48px]">Try KisanAI</Link>
      </div>
    </div>
  );
}
