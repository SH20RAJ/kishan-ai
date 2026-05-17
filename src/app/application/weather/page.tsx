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
      const json = await res.json() as { data: WeatherData };
      setWeather(json.data);
    } catch {
      setWeather(mockWeatherData);
    } finally {
      setLoading(false);
    }
  };

  const w = weather || mockWeatherData;

  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-1">Weather Advisory</h1>
      <p className="text-[var(--muted)] text-sm mb-4">Get weather-based farming recommendations</p>

      {/* Location Input */}
      <form onSubmit={(e) => { e.preventDefault(); fetchWeather(); }} className="flex gap-2 mb-6">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your district..."
          className="flex-1 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-[var(--foreground)] placeholder:text-[var(--muted-light)] min-h-[48px]"
        />
        <button type="submit" disabled={loading} className="px-4 py-3 rounded-xl bg-[var(--primary)] text-white font-medium min-h-[48px] disabled:opacity-50">
          {loading ? '...' : 'Check'}
        </button>
      </form>

      {/* Current Weather */}
      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white p-5 mb-4">
        <p className="text-blue-100 text-sm">{w.location}</p>
        <div className="flex items-end gap-4 mt-2">
          <span className="text-4xl font-bold">{w.current.temperature}°C</span>
          <div>
            <p className="text-blue-100">{w.current.description}</p>
            <p className="text-blue-200 text-sm">Humidity: {w.current.humidity}% | Wind: {w.current.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <h2 className="font-semibold text-[var(--foreground)] mb-3">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {w.forecast.map((day, i) => (
          <div key={i} className="text-center p-2 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
            <p className="text-xs font-medium text-[var(--muted)]">{day.date}</p>
            <p className="text-lg font-bold text-[var(--foreground)] mt-1">{day.high}°</p>
            <p className="text-xs text-[var(--muted)]">{day.low}°</p>
            <p className="text-xs text-blue-500 mt-1">{day.rainfall}mm</p>
          </div>
        ))}
      </div>

      {/* Farming Actions */}
      <h2 className="font-semibold text-[var(--foreground)] mb-3">Recommended Actions</h2>
      <div className="space-y-3 mb-6">
        {w.farmingActions.map((action, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
            <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
              action.urgency === 'high' ? 'bg-red-500' : action.urgency === 'medium' ? 'bg-amber-500' : 'bg-green-500'
            }`} />
            <div>
              <p className="font-medium text-[var(--foreground)] text-sm">{action.action}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{action.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Alerts */}
      {w.riskAlerts.length > 0 && (
        <>
          <h2 className="font-semibold text-[var(--foreground)] mb-3">Risk Alerts</h2>
          <div className="space-y-3 mb-6">
            {w.riskAlerts.map((alert, i) => (
              <div key={i} className={`p-3 rounded-xl border ${
                alert.severity === 'high' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'
              }`}>
                <p className={`font-medium text-sm ${alert.severity === 'high' ? 'text-red-800' : 'text-amber-800'}`}>{alert.message}</p>
                <p className="text-xs text-[var(--muted)] mt-1">Valid: {alert.validUntil}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-xs text-[var(--muted)] text-center">
        Demo data shown. Connect IMD API for live weather forecasts.
      </p>
    </div>
  );
}
