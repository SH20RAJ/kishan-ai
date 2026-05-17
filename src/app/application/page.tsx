'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const quickActions = [
  { href: '/application/chat', label: 'Ask Question', labelHi: 'पूछो', emoji: '💬', color: 'from-primary to-primary-dark', shadow: 'shadow-[0_5px_0_#14532d]' },
  { href: '/application/disease-detection', label: 'Detect Disease', labelHi: 'रोग पहचानो', emoji: '📸', color: 'from-saffron to-accent', shadow: 'shadow-[0_5px_0_#9a3412]' },
  { href: '/application/weather', label: 'Weather', labelHi: 'मौसम', emoji: '🌦️', color: 'from-info to-blue-700', shadow: 'shadow-[0_5px_0_#1e40af]' },
  { href: '/application/mandi-prices', label: 'Mandi Prices', labelHi: 'मंडी भाव', emoji: '📊', color: 'from-secondary to-earth', shadow: 'shadow-[0_5px_0_#78350f]' },
  { href: '/application/schemes', label: 'Schemes', labelHi: 'योजनाएं', emoji: '🏛️', color: 'from-primary-light to-primary', shadow: 'shadow-[0_5px_0_#166534]' },
  { href: '/application/marketplace', label: 'Marketplace', labelHi: 'बाज़ार', emoji: '🏪', color: 'from-accent-light to-accent', shadow: 'shadow-[0_5px_0_#9a3412]' },
];

export default function DashboardPage() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto">
      {/* Kino Welcome Banner */}
      <section className="mb-6 rounded-3xl bg-gradient-to-r from-green-50 to-amber-50/50 border-2 border-primary/10 p-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center text-3xl shrink-0 shadow-[0_3px_0_rgba(22,101,52,0.1)]">
          🦜
        </div>
        <div>
          <h1 className="text-lg font-extrabold text-primary tracking-tight">Namaste, Kisan!</h1>
          <p className="text-sm text-muted mt-0.5">{dateStr || '\u00A0'}</p>
          <p className="text-xs text-primary/80 mt-1 font-medium">Kino here — what do you need today?</p>
        </div>
      </section>

      {/* Quick Actions — Tactile Duolingo Grid */}
      <section className="mb-8">
        <h2 className="text-base font-extrabold text-foreground mb-4 uppercase tracking-wide">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-3xl bg-gradient-to-b ${action.color} text-white ${action.shadow} min-h-[110px] active:translate-y-[5px] active:shadow-none transition-all duration-100`}
            >
              <span className="text-3xl">{action.emoji}</span>
              <span className="text-xs font-extrabold text-center leading-tight">{action.label}</span>
              <span className="text-[10px] opacity-80 font-medium">{action.labelHi}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Ask Kino — Primary CTA Card */}
      <section className="mb-8">
        <Link href="/application/chat" className="block rounded-3xl bg-gradient-to-br from-primary to-primary-dark border-2 border-primary/20 p-6 text-white shadow-[0_6px_0_#14532d] active:translate-y-[6px] active:shadow-none transition-all">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🦜</span>
            <div>
              <h3 className="font-extrabold text-lg">Ask Kino anything</h3>
              <p className="text-green-200 text-sm mt-1">Crop disease? Weather? Mandi price? Just ask!</p>
            </div>
            <svg className="w-6 h-6 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </Link>
      </section>

      {/* Recent Activity — Empty State */}
      <section className="mb-8">
        <h2 className="text-base font-extrabold text-foreground mb-4 uppercase tracking-wide">Recent Activity</h2>
        <div className="flex flex-col items-center justify-center py-10 rounded-3xl bg-surface border-2 border-dashed border-border">
          <span className="text-4xl mb-3">📋</span>
          <p className="text-muted font-bold text-sm">No activity yet</p>
          <p className="text-muted-light text-xs mt-1">Start by asking Kino a question!</p>
        </div>
      </section>

      {/* Safety Note — Tactile Card */}
      <section className="rounded-3xl bg-amber-50 border-2 border-amber-200 p-5 shadow-[0_3px_0_rgba(217,119,6,0.15)]">
        <div className="flex gap-3">
          <span className="text-2xl shrink-0">🛡️</span>
          <div>
            <p className="font-extrabold text-amber-800 text-sm">Safety Note</p>
            <p className="text-amber-700 text-xs mt-1 leading-relaxed">
              KisanAI provides AI-assisted guidance only. For critical farming decisions, always consult your local agriculture officer or Krishi Vigyan Kendra (KVK).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
