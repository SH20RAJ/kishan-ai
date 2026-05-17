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
      const data = await res.json();
      setWeather(data.data);
    } catch { setWeather(mockWeatherData); }
    finally { setLoading(false); }
  };

  const w = weather || mockWeatherData;

  return (
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-info to-blue-700 flex items-center justify-center text-2xl shadow-[0_3px_0_#1e40af]">🌦️</div>
        <div>
          <h1 className="text-lg font-extrabold text-foreground">Weather Advisory</h1>
          <p className="text-xs text-muted">Weather-based farming recommendations</p>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} className="flex gap-2 mb-6">
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your district..." className="flex-1 px-5 py-3.5 rounded-2xl bg-surface border-2 border-border text-foreground placeholder:text-muted-light font-medium focus:border-primary focus:ring-2 focus:ring-primary/20" />
        <button type="submit" disabled={loading}
          className="btn-3d-primary px-5 py-3.5 shadow-[0_4px_0_var(--primary-dark)] disabled:opacity-50">
          {loading ? '...' : '🔍'}
        </button>
      </form>

      {/* Current Weather — Gradient Card */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 mb-5 shadow-[0_5px_0_#1e40af] border-2 border-blue-400/30">
        <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">{w.location}</p>
        <div className="flex items-end gap-4 mt-2">
          <span className="text-5xl font-extrabold">{w.current.temperature}°</span>
          <div>
            <p className="text-blue-100 font-bold">{w.current.description}</p>
            <p className="text-blue-200 text-xs mt-1">💧 {w.current.humidity}% | 💨 {w.current.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <h2 className="font-extrabold text-foreground mb-3 text-sm uppercase tracking-wider">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {w.forecast.map((day, i) => (
          <div key={i} className="text-center p-2.5 rounded-2xl bg-surface border-2 border-border shadow-[0_2px_0_rgba(0,0,0,0.04)]">
            <p className="text-[10px] font-bold text-muted uppercase">{day.date}</p>
            <p className="text-lg font-extrabold text-foreground mt-1">{day.high}°</p>
            <p className="text-[10px] text-muted">{day.low}°</p>
            <p className="text-[10px] text-blue-500 font-bold mt-1">💧{day.rainfall}mm</p>
          </div>
        ))}
      </div>

      {/* Farming Actions — Tactile Cards */}
      <h2 className="font-extrabold text-foreground mb-3 text-sm uppercase tracking-wider">🦜 Kino Recommends</h2>
      <div className="space-y-3 mb-6">
        {w.farmingActions.map((action, i) => (
          <div key={i} className="flex gap-3 p-4 rounded-2xl bg-surface border-2 border-border shadow-[0_3px_0_rgba(0,0,0,0.04)]">
            <span className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
              action.urgency === 'high' ? 'bg-error' : action.urgency === 'medium' ? 'bg-warning' : 'bg-success'
            }`} />
            <div>
              <p className="font-bold text-foreground text-sm">{action.action}</p>
              <p className="text-xs text-muted mt-0.5">{action.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {w.riskAlerts.length > 0 && (
        <>
          <h2 className="font-extrabold text-foreground mb-3 text-sm uppercase tracking-wider">⚠️ Risk Alerts</h2>
          <div className="space-y-3 mb-6">
            {w.riskAlerts.map((alert, i) => (
              <div key={i} className={`p-4 rounded-2xl border-2 ${
                alert.severity === 'high' ? 'bg-red-50 border-red-200 shadow-[0_3px_0_rgba(239,68,68,0.1)]' : 'bg-amber-50 border-amber-200 shadow-[0_3px_0_rgba(217,119,6,0.1)]'
              }`}>
                <p className={`font-bold text-sm ${alert.severity === 'high' ? 'text-red-800' : 'text-amber-800'}`}>{alert.message}</p>
                <p className="text-xs text-muted mt-1">Valid: {alert.validUntil}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-[10px] text-muted text-center font-medium">Demo data — connect IMD API for live forecasts</p>
    </div>
  );
}
