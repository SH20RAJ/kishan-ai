'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const quickActions = [
  { href: '/application/chat', label: 'Ask Question', labelHi: 'पूछो', emoji: '💬', bg: 'bg-[#58CC02]', shadow: 'shadow-[0_5px_0_#46A302]' },
  { href: '/application/disease-detection', label: 'Detect Disease', labelHi: 'रोग पहचानो', emoji: '📸', bg: 'bg-[#FF9600]', shadow: 'shadow-[0_5px_0_#E68600]' },
  { href: '/application/weather', label: 'Weather', labelHi: 'मौसम', emoji: '🌦️', bg: 'bg-[#1CB0F6]', shadow: 'shadow-[0_5px_0_#1899D6]' },
  { href: '/application/mandi-prices', label: 'Mandi Prices', labelHi: 'मंडी भाव', emoji: '📊', bg: 'bg-[#FFC800]', shadow: 'shadow-[0_5px_0_#E6B400]' },
  { href: '/application/schemes', label: 'Schemes', labelHi: 'योजनाएं', emoji: '🏛️', bg: 'bg-[#58CC02]', shadow: 'shadow-[0_5px_0_#46A302]' },
  { href: '/application/marketplace', label: 'Marketplace', labelHi: 'बाज़ार', emoji: '🏪', bg: 'bg-[#FF9600]', shadow: 'shadow-[0_5px_0_#E68600]' },
];

export default function DashboardPage() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    setDateStr(now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      {/* Kino Welcome Banner */}
      <section className="mb-6 rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] p-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-[#58CC02] border-2 border-[#46A302] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_3px_0_#46A302]">
          <img src="/logo.png" alt="Kino Mascot" className="w-14 h-14 object-cover scale-[1.08]" />
        </div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B] tracking-tight">Namaste, Kisan!</h1>
          <p className="text-sm text-[#777777] mt-0.5">{dateStr || '\u00A0'}</p>
          <p className="text-xs text-[#1CB0F6] mt-1 font-extrabold">🦜 Kino here — what do you need today?</p>
        </div>
      </section>

      {/* Quick Actions — Tactile Duolingo Grid */}
      <section className="mb-8">
        <h2 className="text-base font-extrabold text-[#4B4B4B] mb-4 uppercase tracking-wide">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl ${action.bg} text-white ${action.shadow} min-h-[110px] min-w-[44px] active:translate-y-[5px] active:shadow-none transition-all duration-100`}
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
        <Link href="/application/chat" className="block rounded-2xl bg-[#58CC02] border-2 border-[#46A302] p-6 text-white shadow-[0_5px_0_#46A302] active:translate-y-[5px] active:shadow-none transition-all min-h-[44px]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-md">
              <img src="/logo.png" alt="Kino Mascot" className="w-10 h-10 object-cover scale-[1.08]" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Ask Kino anything</h3>
              <p className="text-green-100 text-sm mt-1">Crop disease? Weather? Mandi price? Just ask!</p>
            </div>
            <svg className="w-6 h-6 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </Link>
      </section>

      {/* Recent Activity — Empty State */}
      <section className="mb-8">
        <h2 className="text-base font-extrabold text-[#4B4B4B] mb-4 uppercase tracking-wide">Recent Activity</h2>
        <div className="flex flex-col items-center justify-center py-10 rounded-2xl bg-white border-2 border-dashed border-[#E5E5E5]">
          <span className="text-4xl mb-3">📋</span>
          <p className="text-[#777777] font-extrabold text-sm">No activity yet</p>
          <p className="text-[#AFAFAF] text-xs mt-1">Start by asking Kino a question!</p>
        </div>
      </section>

      {/* Safety Note — Tactile Card */}
      <section className="rounded-2xl bg-[#FFC800]/10 border-2 border-[#FFC800] p-5 shadow-[0_2px_0_#FFC800]">
        <div className="flex gap-3">
          <span className="text-2xl shrink-0">🛡️</span>
          <div>
            <p className="font-extrabold text-[#4B4B4B] text-sm">Safety Note</p>
            <p className="text-[#777777] text-xs mt-1 leading-relaxed">
              KisanAI provides AI-assisted guidance only. For critical farming decisions, always consult your local agriculture officer or Krishi Vigyan Kendra (KVK).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
