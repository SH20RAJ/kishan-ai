'use client';

import { useState } from 'react';
import { mockSchemes } from '@/lib/ai/mock-responses';

export default function SchemesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState('');

  let schemes = [...mockSchemes];
  if (category) schemes = schemes.filter(s => s.category === category);

  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-1">Government Schemes</h1>
      <p className="text-[var(--muted)] text-sm mb-4">Find schemes you may be eligible for</p>

      {/* Category Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['', 'subsidy', 'insurance', 'loan'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap min-h-[40px] ${
              category === cat ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--border-color)] text-[var(--foreground)]'
            }`}
          >
            {cat === '' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Scheme Cards */}
      <div className="space-y-3">
        {schemes.map(scheme => (
          <div key={scheme.id} className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === scheme.id ? null : scheme.id)}
              className="w-full p-4 text-left min-h-[48px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[var(--foreground)]">{scheme.name}</h3>
                  {scheme.nameHi && <p className="text-xs text-[var(--muted)]">{scheme.nameHi}</p>}
                  <p className="text-xs text-[var(--muted)] mt-1">{scheme.ministry}</p>
                </div>
                <svg className={`w-5 h-5 text-[var(--muted)] shrink-0 transition-transform ${expanded === scheme.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <p className="text-sm text-[var(--muted)] mt-2">{scheme.description}</p>
            </button>

            {expanded === scheme.id && (
              <div className="px-4 pb-4 space-y-3 border-t border-[var(--border-color)] pt-3">
                <div>
                  <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">Eligibility</h4>
                  <ul className="space-y-1">
                    {scheme.eligibility.map((e, i) => (
                      <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                        <span className="text-[var(--primary)] mt-0.5">•</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">Benefits</h4>
                  <p className="text-sm text-[var(--muted)]">{scheme.benefits}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">Documents Required</h4>
                  <div className="flex flex-wrap gap-1">
                    {scheme.documentsRequired.map((d, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-[var(--surface-raised)] border border-[var(--border-color)]">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[var(--foreground)] mb-1">How to Apply</h4>
                  <p className="text-sm text-[var(--muted)]">{scheme.howToApply}</p>
                </div>
                {scheme.officialUrl && (
                  <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-[var(--primary)] font-medium">
                    Visit Official Website →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
        <p className="text-xs text-amber-800">
          <strong>Disclaimer:</strong> Eligibility depends on specific criteria. KisanAI does not guarantee scheme approval. Please verify with official sources.
        </p>
      </div>
    </div>
  );
}
