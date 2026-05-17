"use client";

import { useState } from "react";
import Link from "next/link";
import { translations, type LanguageCode } from "@/lib/translations";

/* ─── Shared data arrays (holding visual SVG icons and step numbers) ─── */

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 6.174a1.125 1.125 0 0 1-1.04.701H8.51a1.125 1.125 0 0 1-1.04-.7L5 14.5m14 0H5" />
      </svg>
    ),
  },
];

const modules = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
];

const steps = [
  { step: "1" },
  { step: "2" },
  { step: "3" },
];

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

/* ─── Client Waitlist Form ─── */

interface WaitlistInlineProps {
  t: any;
}

function WaitlistInline({ t }: WaitlistInlineProps) {
  return (
    <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" action="/api/waitlist" method="POST">
      <input
        type="text"
        name="name"
        placeholder={t.waitlist.name_placeholder}
        required
        className="duo-input flex-1 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-[#FFC800] focus:ring-2 focus:ring-[#FFC800]/20"
        aria-label="Your name"
      />
      <input
        type="tel"
        name="phone"
        placeholder={t.waitlist.phone_placeholder}
        required
        className="duo-input flex-1 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-[#FFC800] focus:ring-2 focus:ring-[#FFC800]/20"
        aria-label="Phone number"
      />
      <input type="hidden" name="state" value="Unknown" />
      <button
        type="submit"
        className="btn-3d-saffron px-6 py-3.5 text-base whitespace-nowrap cursor-pointer"
      >
        {t.waitlist.btn}
      </button>
    </form>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<LanguageCode>("hinglish");

  const t = translations[lang];

  // Dynamic merged arrays
  const translatedProblems = t.problems.items.map((item, idx) => ({
    ...item,
    icon: problems[idx].icon,
  }));

  const translatedModules = t.capabilities.items.map((item, idx) => ({
    ...item,
    icon: modules[idx].icon,
  }));

  const translatedSteps = t.steps.items.map((item, idx) => ({
    ...item,
    step: steps[idx].step,
  }));

  const translatedTrustPoints = t.trust.items.map((item, idx) => ({
    ...item,
    icon: trustPoints[idx].icon,
  }));

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#58CC02] flex items-center gap-2 tracking-tight">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center border-2 border-[#E5E5E5] bg-white">
              <img src="/logo.png" alt="KisanAI Logo" className="w-7 h-7 object-contain" />
            </div>
            KisanAI
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#777777] hover:text-[#58CC02] transition-colors">{t.nav.government}</Link>
            <Link href="/investors" className="text-[#777777] hover:text-[#58CC02] transition-colors">{t.nav.investors}</Link>
            <Link href="/partners" className="text-[#777777] hover:text-[#58CC02] transition-colors">{t.nav.partners}</Link>
            <Link href="/research" className="text-[#777777] hover:text-[#58CC02] transition-colors">{t.nav.research}</Link>
            <Link href="/impact" className="text-[#777777] hover:text-[#58CC02] transition-colors">{t.nav.impact}</Link>
            <Link href="/application" className="btn-3d-primary px-5 py-2 text-sm">{t.nav.try}</Link>
          </div>
          <div className="md:hidden">
            <Link href="/application" className="btn-3d-primary px-4 py-2 text-xs">{t.nav.try}</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#46A302] to-[#58CC02] text-white border-b-4 border-[#46A302]">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF9600] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#89E219] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#46A302]/50 border border-[#89E219]/20 text-[#89E219] text-xs font-extrabold uppercase tracking-wide mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9600] animate-pulse" />
                  100% Free Krishi Seva
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white tracking-tight">
                  {t.hero.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC800] to-[#FFE066]">
                    {t.hero.subtitle}
                  </span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-green-100 font-medium leading-relaxed max-w-2xl">
                  {t.hero.desc}
                </p>

                {/* Visual Language Switcher Widget (Duolingo-Inspired) */}
                <div className="mt-8 p-5 rounded-2xl bg-white/10 border-2 border-white/15 max-w-xl">
                  <p className="text-xs font-extrabold text-green-200 uppercase tracking-wider mb-3">{t.switcher}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { code: "hinglish", label: "\ud83c\uddee\ud83c\uddf3 Hinglish" },
                      { code: "english", label: "\ud83c\uddec\ud83c\udde7 English" },
                      { code: "hindi", label: "\ud83c\uddee\ud83c\uddf3 \u0939\u093f\u0902\u0926\u0940" },
                      { code: "bangla", label: "\ud83c\uddee\ud83c\uddf3 \u09ac\u09be\u0982\u09b2\u09be" },
                      { code: "marathi", label: "\ud83c\uddee\ud83c\uddf3 \u092e\u0930\u093e\u0920\u0940" }
                    ].map((item) => {
                      const isActive = lang === item.code;
                      return (
                        <button
                          key={item.code}
                          onClick={() => setLang(item.code as LanguageCode)}
                          className={`px-3.5 py-2 rounded-2xl font-extrabold text-sm transition-all cursor-pointer border-2 flex items-center gap-2 min-h-[44px] min-w-[44px] ${
                            isActive
                              ? "bg-white text-[#58CC02] border-[#E5E5E5] shadow-[0_3px_0_#E5E5E5]"
                              : "bg-white/10 text-white border-white/10 hover:bg-white/20 shadow-none"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/application"
                    className="btn-3d-saffron px-8 py-4 text-lg inline-flex items-center gap-2 group"
                  >
                    {t.hero.cta}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/partners"
                    className="btn-3d-white px-8 py-4 text-lg"
                  >
                    Partner with Us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] transition-transform hover:scale-[1.03] duration-300">
                  {/* Glowing dynamic background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9600] to-[#89E219] rounded-full blur-3xl opacity-20" />
                  
                  {/* Floating badge 1: Weather */}
                  <div className="absolute top-12 -left-16 rotate-[-4deg] hover:rotate-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 border-2 border-border shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 z-20 pointer-events-none hidden sm:flex transition-all duration-300">
                    <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-lg">🌦️</span>
                    <div>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">Weather Alert</p>
                      <p className="text-xs font-extrabold text-foreground">Pune: 28°C • Cloudy</p>
                    </div>
                  </div>

                  {/* Floating badge 2: Mandi Price */}
                  <div className="absolute bottom-24 -right-16 rotate-[4deg] hover:rotate-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 border-2 border-border shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 z-20 pointer-events-none hidden sm:flex transition-all duration-300">
                    <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-lg">🌾</span>
                    <div>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">Mandi price</p>
                      <p className="text-xs font-extrabold text-foreground">Wheat: ₹2,150/qtl <span className="text-primary font-black">+3.2%</span></p>
                    </div>
                  </div>

                  {/* Floating badge 3: Disease diagnosis scan */}
                  <div className="absolute bottom-8 -left-12 rotate-[-6deg] hover:rotate-0 bg-white/95 backdrop-blur-md rounded-2xl p-3 border-2 border-border shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 z-20 pointer-events-none hidden sm:flex transition-all duration-300">
                    <span className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-lg">📸</span>
                    <div>
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">Disease Scan</p>
                      <p className="text-xs font-extrabold text-foreground">Fasal Rog Checked! 🟢</p>
                    </div>
                  </div>

                  <img
                    src="/hero-mockup.png"
                    alt="KisanAI Chat App Mockup showing disease diagnosis"
                    width={450}
                    height={450}
                    style={{ animation: 'float 5s ease-in-out infinite' }}
                    className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mascot Kino Welcome Section (Tactile UI) */}
        <section className="py-12 bg-white border-b-2 border-[#E5E5E5] overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-[#F7F7F7] rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] relative">
              <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl border-2 border-[#E5E5E5] flex items-center justify-center overflow-hidden shadow-[0_2px_0_#E5E5E5]">
                <img src="/logo.png" alt="Kino the KisanAI Mascot" className="w-full h-full object-cover scale-[1.08]" />
              </div>
              <div className="relative flex-1">
                {/* Speech bubble tail */}
                <div className="hidden md:block absolute left-[-10px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-b-2 border-[#E5E5E5] rotate-45" />
                <div className="bg-white rounded-2xl p-6 shadow-[0_2px_0_#E5E5E5] border-2 border-[#E5E5E5]">
                  <h3 className="text-lg font-extrabold text-[#58CC02] flex items-center gap-1.5 mb-2">
                    {t.kino.title} 🦜
                  </h3>
                  <p className="text-[#777777] font-medium leading-relaxed text-sm sm:text-base">
                    &ldquo;{t.kino.bubble}&rdquo;
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-extrabold text-[#58CC02]">
                    <span className="flex items-center gap-1">✨ 100% Free</span>
                    <span className="flex items-center gap-1">📋 Verified Sources</span>
                    <span className="flex items-center gap-1">🛡️ Safe & Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 sm:py-28 bg-[#F7F7F7] border-b-2 border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#FF9600] font-extrabold text-sm tracking-wide uppercase mb-3">{t.problems.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.problems.title}</h2>
              <p className="mt-4 text-lg text-[#777777] font-medium">
                {t.problems.desc}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {translatedProblems.map((p, i) => (
                <article key={i} className="duo-card hover:border-[#58CC02]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF4B4B]/10 text-[#FF4B4B] flex items-center justify-center mb-5 border-2 border-[#FF4B4B]/10 shadow-[0_3px_0_rgba(255,75,75,0.1)]">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{p.title}</h3>
                  <p className="text-[#777777] font-medium text-sm leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modules */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">{t.capabilities.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.capabilities.title}</h2>
              <p className="mt-4 text-lg text-[#777777] font-medium">
                {t.capabilities.desc}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {translatedModules.map((m, i) => (
                <article key={i} className="duo-card p-8 hover:border-[#58CC02]/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#58CC02]/10 text-[#58CC02] flex items-center justify-center mb-6 border-2 border-[#58CC02]/10 shadow-[0_4px_0_rgba(88,204,2,0.08)] group-hover:shadow-none group-hover:translate-y-[4px] transition-all">
                    {m.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-2">{m.title}</h3>
                  <p className="text-[#777777] font-medium leading-relaxed text-sm">{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 sm:py-28 bg-[#F7F7F7] border-y-2 border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-[#FF9600] font-extrabold text-sm tracking-wide uppercase mb-3">{t.steps.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.steps.title}</h2>
              <p className="mt-4 text-[#777777] font-medium text-base">{t.steps.desc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 stepper-dashed-path">
              {translatedSteps.map((s, i) => (
                <div key={i} className="text-center relative z-10 group">
                  <div className="w-16 h-16 rounded-2xl bg-white text-[#58CC02] text-2xl font-extrabold flex items-center justify-center mx-auto mb-6 border-2 border-[#E5E5E5] shadow-[0_4px_0_#E5E5E5] group-hover:scale-110 transition-transform duration-300">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-3">{s.title}</h3>
                  <p className="text-[#777777] font-medium leading-relaxed max-w-xs mx-auto text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/application"
                className="btn-3d-saffron px-8 py-4 text-lg inline-flex items-center gap-2 group"
              >
                {t.hero.cta}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">{t.trust.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.trust.title}</h2>
              <p className="mt-4 text-lg text-[#777777] font-medium">
                {t.trust.desc}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {translatedTrustPoints.map((tPoint, i) => (
                <div key={i} className="flex gap-5 p-6 duo-card">
                  <div className="w-14 h-14 rounded-2xl bg-[#58CC02]/10 text-[#58CC02] flex items-center justify-center flex-shrink-0 border-2 border-[#58CC02]/10 shadow-[0_3px_0_rgba(88,204,2,0.08)]">
                    {tPoint.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-1">{tPoint.title}</h3>
                    <p className="text-[#777777] font-medium leading-relaxed text-sm">{tPoint.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government / FPO CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-[#FF9600] to-[#FFC800] text-white border-y-4 border-[#E68600]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.pilot.title}</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.pilot.desc}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/government"
                className="btn-3d-white px-8 py-4 text-lg"
              >
                {t.pilot.gov_btn}
              </Link>
              <Link
                href="/partners"
                className="btn-3d-saffron px-8 py-4 text-lg"
              >
                {t.pilot.partner_btn}
              </Link>
            </div>
          </div>
        </section>

        {/* Investor Teaser */}
        <section className="py-20 sm:py-28 bg-[#F7F7F7] border-b-2 border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#1CB0F6] font-extrabold text-sm tracking-wide uppercase mb-3">{t.investors.tag}</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.investors.title}</h2>
                <p className="mt-4 text-lg text-[#777777] font-medium leading-relaxed">
                  {t.investors.desc1}
                </p>
                <p className="mt-4 text-[#777777] font-medium leading-relaxed">
                  {t.investors.desc2}
                </p>
                <Link
                  href="/investors"
                  className="btn-3d-primary px-6 py-3 mt-6 text-sm"
                >
                  {t.investors.btn}
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="duo-card p-6 hover:shadow-none hover:translate-y-[2px] transition-all">
                  <p className="text-3xl font-extrabold text-[#58CC02]">9.7 Cr</p>
                  <p className="text-sm font-semibold text-[#777777] mt-1">Digitally traceable farmers (PM-KISAN)</p>
                </div>
                <div className="duo-card p-6 hover:shadow-none hover:translate-y-[2px] transition-all">
                  <p className="text-3xl font-extrabold text-[#58CC02]">41.7%</p>
                  <p className="text-sm font-semibold text-[#777777] mt-1">Rural internet penetration</p>
                </div>
                <div className="duo-card p-6 hover:shadow-none hover:translate-y-[2px] transition-all">
                  <p className="text-3xl font-extrabold text-[#58CC02]">99%</p>
                  <p className="text-sm font-semibold text-[#777777] mt-1">Districts with 5G coverage</p>
                </div>
                <div className="duo-card p-6 hover:shadow-none hover:translate-y-[2px] transition-all">
                  <p className="text-3xl font-extrabold text-[#58CC02]">Rs 58.2B</p>
                  <p className="text-sm font-semibold text-[#777777] mt-1">Conservative TAM</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-[#777777] italic">Market figures are planning assumptions based on public data, not audited projections. See Research page for methodology.</p>
          </div>
        </section>

        {/* Research-backed Insights */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">{t.research.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.research.title}</h2>
              <p className="mt-4 text-lg text-[#777777] font-medium">
                {t.research.desc}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="duo-card p-6">
                <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-3">{t.research.pain_title}</h3>
                <blockquote className="text-[#777777] font-medium italic border-l-4 border-[#FF9600] pl-4 mb-4">
                  &ldquo;{t.research.pain_quote}&rdquo;
                </blockquote>
                <p className="text-sm text-[#777777] font-medium">
                  {t.research.pain_desc}
                </p>
              </article>
              <article className="duo-card p-6">
                <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-3">{t.research.market_title}</h3>
                <p className="text-[#777777] font-medium text-sm mb-4 leading-relaxed">
                  {t.research.market_desc}
                </p>
                <p className="text-xs text-[#777777] font-medium">
                  {t.research.market_sub}
                </p>
              </article>
              <article className="duo-card p-6">
                <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-3">{t.research.tech_title}</h3>
                <p className="text-[#777777] font-medium text-sm mb-4 leading-relaxed">
                  {t.research.tech_desc}
                </p>
                <p className="text-xs text-[#777777] font-medium">
                  {t.research.tech_sub}
                </p>
              </article>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/research"
                className="btn-3d-white px-6 py-3 text-sm"
              >
                {t.research.btn}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-[#F7F7F7] border-t-2 border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#FF9600] font-extrabold text-sm tracking-wide uppercase mb-3">{t.faq.tag}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] tracking-tight">{t.faq.title}</h2>
            </div>
            <div className="space-y-4">
              {t.faq.items.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-extrabold text-[#4B4B4B] hover:text-[#58CC02] transition-colors list-none min-h-[44px]">
                    <span className="pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-[#777777] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="faq-answer px-6 pb-6 text-[#777777] font-medium text-sm leading-relaxed border-t-2 border-[#E5E5E5] pt-4 bg-[#F7F7F7]/40">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Waitlist */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-[#46A302] to-[#58CC02] text-white border-t-4 border-[#46A302]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-[0_4px_0_rgba(0,0,0,0.1)]">
              <span className="text-3xl">🦜</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.waitlist.title}</h2>
            <p className="mt-4 text-lg text-green-100 font-medium leading-relaxed">
              {t.waitlist.desc}
            </p>
            <WaitlistInline t={t} />
            <p className="mt-5 text-xs text-green-200 font-medium">{t.waitlist.spam_note}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4B4B4B] text-white py-16 border-t-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="text-xl font-extrabold text-white flex items-center gap-2 mb-4 tracking-tight">
                <div className="w-7 h-7 rounded-lg overflow-hidden bg-white flex items-center justify-center border-2 border-white/20">
                  <img src="/logo.png" alt="KisanAI Logo" className="w-6 h-6 object-contain" />
                </div>
                KisanAI
              </Link>
              <p className="text-[#AFAFAF] text-sm font-medium leading-relaxed">
                AI farming assistant for every Indian farmer. Crop advice, weather, mandi prices, and schemes in your language.
              </p>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-2 text-sm text-[#AFAFAF] font-medium">
                <li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
                <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Organisations</h4>
              <ul className="space-y-2 text-sm text-[#AFAFAF] font-medium">
                <li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li>
                <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 text-sm text-[#AFAFAF] font-medium">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#777777] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#AFAFAF] font-medium">&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
            <p className="text-xs text-[#AFAFAF] font-medium">KisanAI provides decision support, not regulated agricultural, financial, or legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
