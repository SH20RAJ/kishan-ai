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
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-secondary to-earth flex items-center justify-center text-2xl shadow-[0_3px_0_#78350f]">📊</div>
        <div>
          <h1 className="text-lg font-extrabold text-foreground">Mandi Prices</h1>
          <p className="text-xs text-muted">Current market prices for your crops</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <select value={commodity} onChange={(e) => setCommodity(e.target.value)}
          className="px-3 py-3 rounded-2xl bg-surface border-2 border-border text-sm font-bold focus:border-primary">
          <option value="">All Crops</option>
          {commodities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)}
          className="px-3 py-3 rounded-2xl bg-surface border-2 border-border text-sm font-bold focus:border-primary">
          <option value="">All States</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="space-y-3">
        {prices.map((price, i) => (
          <div key={i} className="rounded-3xl bg-surface border-2 border-border p-5 shadow-[0_3px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-foreground">{price.commodity}</h3>
              <span className={`flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full ${
                price.trend === 'up' ? 'bg-green-100 text-green-700 border border-green-200' :
                price.trend === 'down' ? 'bg-red-100 text-red-700 border border-red-200' :
                'bg-gray-100 text-gray-600 border border-gray-200'
              }`}>
                {price.trend === 'up' ? '↑' : price.trend === 'down' ? '↓' : '→'} {price.trend}
              </span>
            </div>
            <p className="text-xs text-muted mb-3 font-medium">📍 {price.mandi}, {price.district}, {price.state}</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2.5 rounded-2xl bg-surface-raised border border-border">
                <p className="text-[10px] text-muted font-bold uppercase">Min</p>
                <p className="font-extrabold text-foreground text-sm">₹{price.minPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-primary/5 border-2 border-primary/20">
                <p className="text-[10px] text-primary font-extrabold uppercase">Modal</p>
                <p className="font-extrabold text-primary text-lg">₹{price.modalPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-surface-raised border border-border">
                <p className="text-[10px] text-muted font-bold uppercase">Max</p>
                <p className="font-extrabold text-foreground text-sm">₹{price.maxPrice.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-[10px] text-muted mt-2 font-medium">Per {price.unit} | {price.date}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted text-center mt-4 font-medium">Demo prices — always verify current prices before selling</p>
    </div>
  );
}
