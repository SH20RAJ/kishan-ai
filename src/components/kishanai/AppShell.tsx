"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

interface NavItem {
  key: string;
  label: string;
  icon: string;
  href: string;
}

interface AppShellProps {
  children: ReactNode;
  currentRoute?: string;
  currentLang?: string;
  onLangChange?: (code: string) => void;
  navItems?: NavItem[];
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { key: "home", label: "Home", icon: "\uD83C\uDFE0", href: "/" },
  { key: "chat", label: "Chat", icon: "\uD83D\uDCAC", href: "/chat" },
  { key: "scan", label: "Scan", icon: "\uD83D\uDCF7", href: "/scan" },
  { key: "weather", label: "Weather", icon: "\u26C5", href: "/weather" },
  { key: "more", label: "More", icon: "\u2630", href: "/more" },
];

export default function AppShell({
  children,
  currentRoute = "/",
  currentLang = "en",
  onLangChange,
  navItems = defaultNavItems,
  className = "",
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-dvh flex flex-col bg-background ${className}`}>
      {/* Top bar */}
      <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-surface-raised"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={sidebarOpen}
          >
            <span aria-hidden="true" className="text-lg">
              {sidebarOpen ? "\u2715" : "\u2630"}
            </span>
          </button>
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <span className="text-xl" aria-hidden="true">{"\uD83C\uDF3E"}</span>
            <span className="text-lg font-bold text-primary tracking-tight">
              KisanAI
            </span>
          </Link>
        </div>
        <LanguageSelector
          currentCode={currentLang}
          onSelect={(lang) => onLangChange?.(lang.code)}
        />
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <aside
          className="hidden lg:flex flex-col w-60 border-r border-border bg-surface shrink-0"
          aria-label="Main navigation"
        >
          <nav className="flex-1 py-4 px-3 space-y-1">
            {navItems.map((item) => {
              const active = currentRoute === item.href;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 h-12 px-4 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-surface-raised hover:text-foreground"
                  }`}
                >
                  <span aria-hidden="true" className="text-lg">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            />
            <nav className="absolute left-0 top-0 bottom-0 w-64 bg-surface shadow-xl p-4 pt-20 space-y-1">
              {navItems.map((item) => {
                const active = currentRoute === item.href;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 h-12 px-4 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface-raised hover:text-foreground"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span aria-hidden="true" className="text-lg">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto pb-20 lg:pb-0" role="main">
          {children}
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-30 lg:hidden h-16 flex items-stretch border-t border-border bg-surface/95 backdrop-blur-sm"
        aria-label="Bottom navigation"
      >
        {navItems.map((item) => {
          const active = currentRoute === item.href;
          return (
            <a
              key={item.key}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span aria-hidden="true" className="text-xl leading-none">
                {item.icon}
              </span>
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
