'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const quickActions = [
  {
    href: '/application/chat',
    label: 'Ask Question',
    icon: ChatBubbleIcon,
    color: 'bg-[var(--primary)]',
  },
  {
    href: '/application/disease-detection',
    label: 'Detect Disease',
    icon: CameraIcon,
    color: 'bg-[var(--secondary)]',
  },
  {
    href: '/application/weather',
    label: 'Check Weather',
    icon: SunIcon,
    color: 'bg-[var(--info)]',
  },
  {
    href: '/application/mandi-prices',
    label: 'Mandi Prices',
    icon: ChartIcon,
    color: 'bg-[var(--saffron)]',
  },
  {
    href: '/application/schemes',
    label: 'Schemes',
    icon: DocumentIcon,
    color: 'bg-[var(--earth)]',
  },
  {
    href: '/application/marketplace',
    label: 'Marketplace',
    icon: StoreIcon,
    color: 'bg-[var(--accent)]',
  },
];

export default function DashboardPage() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setDateStr(formatted);
  }, []);

  return (
    <div className="px-4 py-6 pb-8">
      {/* Greeting */}
      <section className="mb-6">
        <h1 className="text-[var(--foreground)]">Namaste, Farmer</h1>
        <p className="text-[var(--muted)] mt-1">{dateStr || '\u00A0'}</p>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-[var(--foreground)] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] min-h-[100px] active:scale-[0.97]"
            >
              <span
                className={`flex items-center justify-center w-12 h-12 rounded-full ${action.color} text-white`}
              >
                <action.icon />
              </span>
              <span className="text-sm font-medium text-[var(--foreground)] text-center leading-tight">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-8">
        <h2 className="text-[var(--foreground)] mb-4">Recent Activity</h2>
        <div className="flex flex-col items-center justify-center py-12 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
          <EmptyIcon />
          <p className="text-[var(--muted)] mt-3 text-center text-sm">
            No recent activity yet.
          </p>
          <p className="text-[var(--muted-light)] text-sm text-center mt-1">
            Start by asking a question or scanning a crop.
          </p>
        </div>
      </section>

      {/* Safety Note */}
      <section className="rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-4">
        <div className="flex gap-3">
          <span className="shrink-0 mt-0.5">
            <ShieldIcon />
          </span>
          <div>
            <p className="font-semibold text-[var(--primary-dark)] text-sm">
              Safety Note
            </p>
            <p className="text-[var(--muted)] text-sm mt-1 leading-relaxed">
              KisanAI provides AI-assisted guidance only. For critical farming
              decisions, always consult your local agriculture officer or Krishi
              Vigyan Kendra (KVK).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Icon Components --- */

function ChatBubbleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function EmptyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
