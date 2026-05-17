"use client";

import { useState, useRef, useEffect } from "react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "hi", name: "Hindi", nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "bn", name: "Bengali", nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "te", name: "Telugu", nativeName: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "mr", name: "Marathi", nativeName: "\u092E\u0930\u093E\u0920\u0940", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "ta", name: "Tamil", nativeName: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "gu", name: "Gujarati", nativeName: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "kn", name: "Kannada", nativeName: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "ml", name: "Malayalam", nativeName: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
  { code: "pa", name: "Punjabi", nativeName: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", flag: "\uD83C\uDDEE\uD83C\uDDF3" },
];

interface LanguageSelectorProps {
  currentCode?: string;
  onSelect?: (lang: Language) => void;
  className?: string;
}

export default function LanguageSelector({
  currentCode = "en",
  onSelect,
  className = "",
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === currentCode) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Select language. Current: ${current.nativeName}`}
        className="flex items-center gap-2 h-10 px-3 rounded-lg border border-border bg-surface hover:bg-surface-raised text-sm font-medium"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.nativeName}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
        <span
          aria-hidden="true"
          className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
        >
          {"\u25BC"}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 top-full mt-1 z-50 w-56 max-h-80 overflow-auto rounded-xl border border-border bg-surface shadow-lg"
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={lang.code === currentCode}
              className={`flex items-center gap-3 px-4 py-3 text-sm cursor-pointer hover:bg-surface-raised ${
                lang.code === currentCode ? "bg-primary/5 font-semibold" : ""
              }`}
              onClick={() => {
                onSelect?.(lang);
                setOpen(false);
              }}
            >
              <span aria-hidden="true">{lang.flag}</span>
              <span className="flex-1">{lang.nativeName}</span>
              <span className="text-xs text-muted">{lang.name}</span>
              {lang.code === currentCode && (
                <span className="text-primary" aria-hidden="true">{"\u2713"}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
