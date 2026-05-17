'use client';

const metrics = [
  { label: 'Users Onboarded', value: '0', demo: true },
  { label: 'Questions Asked', value: '0', demo: true },
  { label: 'Disease Scans', value: '0', demo: true },
  { label: 'Weather Checks', value: '0', demo: true },
  { label: 'Mandi Checks', value: '0', demo: true },
  { label: 'Scheme Queries', value: '0', demo: true },
  { label: 'Partner Leads', value: '0', demo: true },
  { label: 'Feedback Score', value: 'N/A', demo: true },
];

export default function AdminPage() {
  return (
    <div className="min-h-dvh bg-[var(--surface-raised)]">
      <header className="bg-[var(--foreground)] text-white px-6 py-4">
        <h1 className="text-lg font-bold">KisanAI Admin Dashboard</h1>
        <p className="text-sm text-gray-400">Demo Mode — Connect database for live metrics</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
              <div className="flex items-center justify-between mb-1">
                <p className="text-2xl font-bold text-[var(--primary)]">{m.value}</p>
                {m.demo && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Demo</span>}
              </div>
              <p className="text-sm text-[var(--muted)]">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <section className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-5">
            <h2 className="font-bold text-[var(--foreground)] mb-4">Waitlist Signups</h2>
            <div className="text-center py-8 text-[var(--muted)] text-sm">
              <p>No signups yet</p>
              <p className="text-xs mt-1">Connect database to see waitlist entries</p>
            </div>
          </section>

          <section className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-5">
            <h2 className="font-bold text-[var(--foreground)] mb-4">Partner Leads</h2>
            <div className="text-center py-8 text-[var(--muted)] text-sm">
              <p>No leads yet</p>
              <p className="text-xs mt-1">Connect database to see partner inquiries</p>
            </div>
          </section>

          <section className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-5">
            <h2 className="font-bold text-[var(--foreground)] mb-4">Recent Feedback</h2>
            <div className="text-center py-8 text-[var(--muted)] text-sm">
              <p>No feedback yet</p>
              <p className="text-xs mt-1">Feedback will appear here after user interactions</p>
            </div>
          </section>

          <section className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-5">
            <h2 className="font-bold text-[var(--foreground)] mb-4">Disease Scans</h2>
            <div className="text-center py-8 text-[var(--muted)] text-sm">
              <p>No scans yet</p>
              <p className="text-xs mt-1">Disease detection results will appear here</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
