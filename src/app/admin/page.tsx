'use client';

import Link from 'next/link';

const metrics = [
  { label: 'Users Onboarded', value: '0', demo: true, emoji: '👥' },
  { label: 'Questions Asked', value: '0', demo: true, emoji: '💬' },
  { label: 'Disease Scans', value: '0', demo: true, emoji: '🔬' },
  { label: 'Weather Checks', value: '0', demo: true, emoji: '🌤️' },
  { label: 'Mandi Checks', value: '0', demo: true, emoji: '📈' },
  { label: 'Scheme Queries', value: '0', demo: true, emoji: '📋' },
  { label: 'Partner Leads', value: '0', demo: true, emoji: '🤝' },
  { label: 'Feedback Score', value: 'N/A', demo: true, emoji: '⭐' },
];

export default function AdminPage() {
  return (
    <div className="min-h-dvh bg-[#F7F7F7]">
      <header className="bg-[#4B4B4B] text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-extrabold flex items-center gap-2">🦜 KisanAI Admin Dashboard</h1>
            <p className="text-sm text-white/60">Demo Mode — Connect database for live metrics</p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{m.emoji}</span>
                {m.demo && <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFC800] text-[#4B4B4B] font-extrabold">Demo</span>}
              </div>
              <p className="text-2xl font-extrabold text-[#58CC02]">{m.value}</p>
              <p className="text-sm text-[#777777] font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <section className="rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] p-6">
            <h2 className="font-extrabold text-[#4B4B4B] mb-4 text-sm uppercase tracking-wide">📋 Waitlist Signups</h2>
            <div className="text-center py-8 text-[#777777] text-sm">
              <p className="text-3xl mb-2">📭</p>
              <p>No signups yet</p>
              <p className="text-xs mt-1">Connect database to see waitlist entries</p>
            </div>
          </section>

          <section className="rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] p-6">
            <h2 className="font-extrabold text-[#4B4B4B] mb-4 text-sm uppercase tracking-wide">🤝 Partner Leads</h2>
            <div className="text-center py-8 text-[#777777] text-sm">
              <p className="text-3xl mb-2">📭</p>
              <p>No leads yet</p>
              <p className="text-xs mt-1">Connect database to see partner inquiries</p>
            </div>
          </section>

          <section className="rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] p-6">
            <h2 className="font-extrabold text-[#4B4B4B] mb-4 text-sm uppercase tracking-wide">⭐ Recent Feedback</h2>
            <div className="text-center py-8 text-[#777777] text-sm">
              <p className="text-3xl mb-2">📭</p>
              <p>No feedback yet</p>
              <p className="text-xs mt-1">Feedback will appear here after user interactions</p>
            </div>
          </section>

          <section className="rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] p-6">
            <h2 className="font-extrabold text-[#4B4B4B] mb-4 text-sm uppercase tracking-wide">🔬 Disease Scans</h2>
            <div className="text-center py-8 text-[#777777] text-sm">
              <p className="text-3xl mb-2">📭</p>
              <p>No scans yet</p>
              <p className="text-xs mt-1">Disease detection results will appear here</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
