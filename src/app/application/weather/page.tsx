'use client';

import { useState } from 'react';
import type { WeatherData } from '@/types';
import { mockWeatherData } from '@/lib/ai/mock-responses';

export default function WeatherPage() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!location.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
      const data = (await res.json()) as { data: WeatherData };
      setWeather(data.data);
    } catch { setWeather(mockWeatherData); }
    finally { setLoading(false); }
  };

  const w = weather || mockWeatherData;

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#1CB0F6] flex items-center justify-center text-2xl shadow-[0_3px_0_#1899D6]">🌦️</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Weather Advisory</h1>
          <p className="text-xs text-[#777777]">🦜 Weather-based farming recommendations</p>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} className="flex gap-2 mb-6">
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your district..." className="flex-1 px-5 py-3.5 rounded-2xl bg-white border-2 border-[#E5E5E5] text-[#4B4B4B] placeholder:text-[#AFAFAF] font-medium focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 min-h-[44px]" />
        <button type="submit" disabled={loading}
          className="bg-[#58CC02] text-white px-5 py-3.5 rounded-2xl font-extrabold shadow-[0_4px_0_#46A302] active:translate-y-[4px] active:shadow-none disabled:opacity-50 transition-all min-h-[44px] min-w-[44px]">
          {loading ? '...' : '🔍'}
        </button>
      </form>

      {/* Current Weather — Gradient Card */}
      <div className="rounded-2xl bg-[#1CB0F6] text-white p-6 mb-5 shadow-[0_5px_0_#1899D6] border-2 border-[#1899D6]">
        <p className="text-blue-100 text-xs font-extrabold uppercase tracking-wider">{w.location}</p>
        <div className="flex items-end gap-4 mt-2">
          <span className="text-5xl font-extrabold">{w.current.temperature}°</span>
          <div>
            <p className="text-white font-extrabold">{w.current.description}</p>
            <p className="text-blue-100 text-xs mt-1 font-bold">💧 {w.current.humidity}% | 💨 {w.current.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <h2 className="font-extrabold text-[#4B4B4B] mb-3 text-sm uppercase tracking-wider">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {w.forecast.map((day, i) => (
          <div key={i} className="text-center p-2.5 rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <p className="text-[10px] font-extrabold text-[#777777] uppercase">{day.date}</p>
            <p className="text-lg font-extrabold text-[#4B4B4B] mt-1">{day.high}°</p>
            <p className="text-[10px] text-[#777777]">{day.low}°</p>
            <p className="text-[10px] text-[#1CB0F6] font-extrabold mt-1">💧{day.rainfall}mm</p>
          </div>
        ))}
      </div>

      {/* Farming Actions — Tactile Cards */}
      <h2 className="font-extrabold text-[#4B4B4B] mb-3 text-sm uppercase tracking-wider">🦜 Kino Recommends</h2>
      <div className="space-y-3 mb-6">
        {w.farmingActions.map((action, i) => (
          <div key={i} className="flex gap-3 p-4 rounded-2xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
            <span className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
              action.urgency === 'high' ? 'bg-[#FF4B4B]' : action.urgency === 'medium' ? 'bg-[#FFC800]' : 'bg-[#58CC02]'
            }`} />
            <div>
              <p className="font-extrabold text-[#4B4B4B] text-sm">{action.action}</p>
              <p className="text-xs text-[#777777] mt-0.5">{action.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {w.riskAlerts.length > 0 && (
        <>
          <h2 className="font-extrabold text-[#4B4B4B] mb-3 text-sm uppercase tracking-wider">⚠️ Risk Alerts</h2>
          <div className="space-y-3 mb-6">
            {w.riskAlerts.map((alert, i) => (
              <div key={i} className={`p-4 rounded-2xl border-2 ${
                alert.severity === 'high' ? 'bg-[#FF4B4B]/10 border-[#FF4B4B] shadow-[0_2px_0_#FF4B4B]' : 'bg-[#FFC800]/10 border-[#FFC800] shadow-[0_2px_0_#FFC800]'
              }`}>
                <p className={`font-extrabold text-sm ${alert.severity === 'high' ? 'text-[#FF4B4B]' : 'text-[#4B4B4B]'}`}>{alert.message}</p>
                <p className="text-xs text-[#777777] mt-1">Valid: {alert.validUntil}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-[10px] text-[#777777] text-center font-extrabold">Demo data — connect IMD API for live forecasts</p>
    </div>
  );
}
