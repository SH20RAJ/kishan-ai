'use client';

import { useState } from 'react';
import { mockMandiPrices } from '@/lib/ai/mock-responses';

const commodities = ['Wheat', 'Rice (Paddy)', 'Mustard', 'Cotton', 'Onion'];
const states = ['Punjab', 'Rajasthan', 'Gujarat', 'Maharashtra'];

export default function MandiPricesPage() {
  const [commodity, setCommodity] = useState('');
  const [state, setState] = useState('');

  let prices = [...mockMandiPrices];
  if (commodity) prices = prices.filter(p => p.commodity === commodity);
  if (state) prices = prices.filter(p => p.state === state);

  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-1">Mandi Prices</h1>
      <p className="text-[var(--muted)] text-sm mb-4">Check current market prices for your crops</p>

      {/* Filters */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="px-3 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-sm min-h-[48px]">
          <option value="">All Commodities</option>
          {commodities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)} className="px-3 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-sm min-h-[48px]">
          <option value="">All States</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Price Cards */}
      <div className="space-y-3">
        {prices.map((price, i) => (
          <div key={i} className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[var(--foreground)]">{price.commodity}</h3>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                price.trend === 'up' ? 'text-green-600' : price.trend === 'down' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {price.trend === 'up' ? '↑' : price.trend === 'down' ? '↓' : '→'} {price.trend}
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] mb-3">{price.mandi}, {price.district}, {price.state}</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 rounded-lg bg-[var(--surface-raised)]">
                <p className="text-xs text-[var(--muted)]">Min</p>
                <p className="font-bold text-[var(--foreground)]">₹{price.minPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-[var(--primary)]/5 border border-[var(--primary)]/20">
                <p className="text-xs text-[var(--primary)]">Modal</p>
                <p className="font-bold text-[var(--primary)]">₹{price.modalPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-[var(--surface-raised)]">
                <p className="text-xs text-[var(--muted)]">Max</p>
                <p className="font-bold text-[var(--foreground)]">₹{price.maxPrice.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-[var(--muted)] mt-2">Per {price.unit} | {price.date}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-[var(--muted)] text-center mt-4">
        Demo prices from Agmarknet. Always verify current prices before selling.
      </p>
    </div>
  );
}
