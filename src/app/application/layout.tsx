'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/application', label: 'Home', icon: HomeIcon },
  { href: '/application/chat', label: 'Chat', icon: ChatIcon },
  { href: '/application/disease-detection', label: 'Scan', icon: ScanIcon },
  { href: '/application/weather', label: 'Weather', icon: WeatherIcon },
  { href: '/application/profile', label: 'More', icon: MoreIcon },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
];

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  const isActive = (href: string) => {
    if (href === '/application') return pathname === '/application';
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-[var(--background)]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 h-14">
          <Link
            href="/application"
            className="flex items-center gap-2 text-[var(--primary)] font-bold text-lg"
            aria-label="KisanAI Home"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="14" fill="var(--primary)" />
              <path d="M8 18c0-4 3-10 6-10s6 6 6 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 8v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 14c2-1 4-1 8 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>KisanAI</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-raised)] min-h-[48px] min-w-[48px]"
                aria-label="Select language"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <GlobeIcon />
                <span className="hidden sm:inline">{languages.find(l => l.code === selectedLang)?.label}</span>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 bg-[var(--surface)] border border-[var(--border-color)] rounded-lg shadow-lg overflow-hidden z-50"
                  role="listbox"
                  aria-label="Language options"
                >
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-3 text-sm min-h-[48px] hover:bg-[var(--surface-raised)] ${
                        selectedLang === lang.code ? 'font-bold text-[var(--primary)] bg-[var(--primary)]/5' : 'text-[var(--foreground)]'
                      }`}
                      role="option"
                      aria-selected={selectedLang === lang.code}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <Link
              href="/application/profile"
              className="flex items-center justify-center min-h-[48px] min-w-[48px] rounded-lg hover:bg-[var(--surface-raised)]"
              aria-label="Profile"
            >
              <ProfileIcon />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav
        className="sticky bottom-0 z-40 bg-[var(--surface)] border-t border-[var(--border-color)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-2xl mx-auto flex items-center justify-around px-2 h-16">
          {navItems.map(item => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[48px] rounded-lg ${
                  active
                    ? 'text-[var(--primary)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                <item.icon active={active} />
                <span className={`text-xs font-medium ${active ? 'font-bold' : ''}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

/* --- Icon Components --- */

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V10" />
    </svg>
  );
}

function ChatIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ScanIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7V4h3" />
      <path d="M20 7V4h-3" />
      <path d="M4 17v3h3" />
      <path d="M20 17v3h-3" />
      <circle cx="12" cy="12" r="3" fill={active ? 'currentColor' : 'none'} />
    </svg>
  );
}

function WeatherIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function MoreIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}
