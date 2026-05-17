'use client';

import { useState } from 'react';
import { mockSchemes } from '@/lib/ai/mock-responses';

export default function SchemesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState('');

  let schemes = [...mockSchemes];
  if (category) schemes = schemes.filter(s => s.category === category);

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#58CC02] flex items-center justify-center text-2xl shadow-[0_3px_0_#46A302]">🏛️</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Government Schemes</h1>
          <p className="text-xs text-[#777777]">🦜 Find schemes you may be eligible for</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['', 'subsidy', 'insurance', 'loan'].map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-4 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap min-h-[44px] min-w-[44px] ${
              category === cat ? 'bg-[#58CC02] text-white shadow-[0_3px_0_#46A302]' : 'bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] hover:border-[#1CB0F6] shadow-[0_2px_0_#E5E5E5]'
            }`}>
            {cat === '' ? '🏛️ All' : cat === 'subsidy' ? '💰 Subsidy' : cat === 'insurance' ? '🛡️ Insurance' : '🏦 Loan'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {schemes.map(scheme => (
          <div key={scheme.id} className="rounded-2xl bg-white border-2 border-[#E5E5E5] overflow-hidden shadow-[0_2px_0_#E5E5E5]">
            <button onClick={() => setExpanded(expanded === scheme.id ? null : scheme.id)}
              className="w-full p-5 text-left min-h-[44px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-[#4B4B4B]">{scheme.name}</h3>
                  {scheme.nameHi && <p className="text-xs text-[#777777]">{scheme.nameHi}</p>}
                  <p className="text-[10px] text-[#AFAFAF] mt-1 font-extrabold">{scheme.ministry}</p>
                </div>
                <svg className={`w-5 h-5 text-[#777777] shrink-0 transition-transform ${expanded === scheme.id ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <p className="text-sm text-[#777777] mt-2">{scheme.description}</p>
            </button>

            {expanded === scheme.id && (
              <div className="px-5 pb-5 space-y-4 border-t-2 border-[#E5E5E5] pt-4">
                <div>
                  <h4 className="font-extrabold text-xs text-[#4B4B4B] mb-2 uppercase tracking-wider">Eligibility</h4>
                  <ul className="space-y-1.5">
                    {scheme.eligibility.map((e, i) => (
                      <li key={i} className="text-sm text-[#777777] flex items-start gap-2">
                        <span className="text-[#58CC02] font-extrabold">✓</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-[#4B4B4B] mb-2 uppercase tracking-wider">Benefits</h4>
                  <p className="text-sm text-[#777777]">{scheme.benefits}</p>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-[#4B4B4B] mb-2 uppercase tracking-wider">Documents Required</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.documentsRequired.map((d, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#F7F7F7] border-2 border-[#E5E5E5] font-extrabold text-[#4B4B4B]">{d}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-[#4B4B4B] mb-2 uppercase tracking-wider">How to Apply</h4>
                  <p className="text-sm text-[#777777]">{scheme.howToApply}</p>
                </div>
                {scheme.officialUrl && (
                  <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#1CB0F6] font-extrabold min-h-[44px]">
                    🌐 Visit Official Website →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-2xl bg-[#FFC800]/10 border-2 border-[#FFC800] shadow-[0_2px_0_#FFC800]">
        <p className="text-xs text-[#4B4B4B] font-extrabold">⚠️ <strong>Disclaimer:</strong> Eligibility depends on specific criteria. KisanAI does not guarantee scheme approval. Verify with official sources.</p>
      </div>
    </div>
  );
}
