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
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FFC800] flex items-center justify-center text-2xl shadow-[0_3px_0_#E6B400]">📊</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Mandi Prices</h1>
          <p className="text-xs text-[#777777]">🦜 Current market prices for your crops</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <select value={commodity} onChange={(e) => setCommodity(e.target.value)}
          className="px-3 py-3 rounded-2xl bg-white border-2 border-[#E5E5E5] text-sm font-extrabold text-[#4B4B4B] focus:border-[#1CB0F6] min-h-[44px]">
          <option value="">All Crops</option>
          {commodities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)}
          className="px-3 py-3 rounded-2xl bg-white border-2 border-[#E5E5E5] text-sm font-extrabold text-[#4B4B4B] focus:border-[#1CB0F6] min-h-[44px]">
          <option value="">All States</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="space-y-3">
        {prices.map((price, i) => (
          <div key={i} className="rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-[#4B4B4B]">{price.commodity}</h3>
              <span className={`flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full ${
                price.trend === 'up' ? 'bg-[#58CC02]/10 text-[#58CC02] border border-[#58CC02]/20' :
                price.trend === 'down' ? 'bg-[#FF4B4B]/10 text-[#FF4B4B] border border-[#FF4B4B]/20' :
                'bg-[#E5E5E5] text-[#777777] border border-[#E5E5E5]'
              }`}>
                {price.trend === 'up' ? '↑' : price.trend === 'down' ? '↓' : '→'} {price.trend}
              </span>
            </div>
            <p className="text-xs text-[#777777] mb-3 font-medium">📍 {price.mandi}, {price.district}, {price.state}</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2.5 rounded-2xl bg-[#F7F7F7] border-2 border-[#E5E5E5]">
                <p className="text-[10px] text-[#777777] font-extrabold uppercase">Min</p>
                <p className="font-extrabold text-[#4B4B4B] text-sm">₹{price.minPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-[#58CC02]/10 border-2 border-[#58CC02]/20">
                <p className="text-[10px] text-[#58CC02] font-extrabold uppercase">Modal</p>
                <p className="font-extrabold text-[#58CC02] text-lg">₹{price.modalPrice.toLocaleString()}</p>
              </div>
              <div className="text-center p-2.5 rounded-2xl bg-[#F7F7F7] border-2 border-[#E5E5E5]">
                <p className="text-[10px] text-[#777777] font-extrabold uppercase">Max</p>
                <p className="font-extrabold text-[#4B4B4B] text-sm">₹{price.maxPrice.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-[10px] text-[#777777] mt-2 font-extrabold">Per {price.unit} | {price.date}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-[#777777] text-center mt-4 font-extrabold">Demo prices — always verify current prices before selling</p>
    </div>
  );
}
