'use client';

import { useState } from 'react';
import { mockSchemes } from '@/lib/ai/mock-responses';

export default function SchemesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState('');

  let schemes = [...mockSchemes];
  if (category) schemes = schemes.filter(s => s.category === category);

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-primary-light to-primary flex items-center justify-center text-2xl shadow-[0_3px_0_#166534]">🏛️</div>
        <div>
          <h1 className="text-lg font-extrabold text-foreground">Government Schemes</h1>
          <p className="text-xs text-muted">Find schemes you may be eligible for</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['', 'subsidy', 'insurance', 'loan'].map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap ${
              category === cat ? 'btn-3d-primary shadow-[0_3px_0_var(--primary-dark)]' : 'bg-surface border-2 border-border text-foreground hover:border-primary'
            }`}>
            {cat === '' ? '🏛️ All' : cat === 'subsidy' ? '💰 Subsidy' : cat === 'insurance' ? '🛡️ Insurance' : '🏦 Loan'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {schemes.map(scheme => (
          <div key={scheme.id} className="rounded-3xl bg-surface border-2 border-border overflow-hidden shadow-[0_3px_0_rgba(0,0,0,0.04)]">
            <button onClick={() => setExpanded(expanded === scheme.id ? null : scheme.id)}
              className="w-full p-5 text-left min-h-[48px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-foreground">{scheme.name}</h3>
                  {scheme.nameHi && <p className="text-xs text-muted">{scheme.nameHi}</p>}
                  <p className="text-[10px] text-muted mt-1 font-medium">{scheme.ministry}</p>
                </div>
                <svg className={`w-5 h-5 text-muted shrink-0 transition-transform ${expanded === scheme.id ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <p className="text-sm text-muted mt-2">{scheme.description}</p>
            </button>

            {expanded === scheme.id && (
              <div className="px-5 pb-5 space-y-4 border-t-2 border-border pt-4">
                <div>
                  <h4 className="font-extrabold text-xs text-foreground mb-2 uppercase tracking-wider">Eligibility</h4>
                  <ul className="space-y-1.5">
                    {scheme.eligibility.map((e, i) => (
                      <li key={i} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-foreground mb-2 uppercase tracking-wider">Benefits</h4>
                  <p className="text-sm text-muted">{scheme.benefits}</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-foreground mb-2 uppercase tracking-wider">Documents Required</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.documentsRequired.map((d, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-xl bg-surface-raised border border-border font-bold">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-foreground mb-2 uppercase tracking-wider">How to Apply</h4>
                  <p className="text-sm text-muted">{scheme.howToApply}</p>
                </div>
                {scheme.officialUrl && (
                  <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-extrabold">
                    🌐 Visit Official Website →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 shadow-[0_3px_0_rgba(217,119,6,0.1)]">
        <p className="text-xs text-amber-800 font-medium">⚠️ <strong>Disclaimer:</strong> Eligibility depends on specific criteria. KisanAI does not guarantee scheme approval. Verify with official sources.</p>
      </div>
    </div>
  );
}
