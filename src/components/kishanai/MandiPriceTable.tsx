"use client";

import { useState } from "react";

interface MandiPrice {
  commodity: string;
  mandi: string;
  state: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  trend: "up" | "down" | "stable";
  date: string;
}

interface MandiPriceTableProps {
  prices?: MandiPrice[];
  demo?: boolean;
  className?: string;
}

const demoPrices: MandiPrice[] = [
  { commodity: "Wheat", mandi: "Indore", state: "Madhya Pradesh", minPrice: 2125, maxPrice: 2275, modalPrice: 2200, unit: "/qtl", trend: "up", date: "17 May 2026" },
  { commodity: "Rice (Paddy)", mandi: "Karnal", state: "Haryana", minPrice: 2060, maxPrice: 2180, modalPrice: 2120, unit: "/qtl", trend: "stable", date: "17 May 2026" },
  { commodity: "Cotton", mandi: "Rajkot", state: "Gujarat", minPrice: 6200, maxPrice: 6800, modalPrice: 6500, unit: "/qtl", trend: "down", date: "17 May 2026" },
  { commodity: "Tomato", mandi: "Nagpur", state: "Maharashtra", minPrice: 800, maxPrice: 1500, modalPrice: 1200, unit: "/qtl", trend: "up", date: "17 May 2026" },
  { commodity: "Onion", mandi: "Lasalgaon", state: "Maharashtra", minPrice: 900, maxPrice: 1400, modalPrice: 1100, unit: "/qtl", trend: "down", date: "17 May 2026" },
  { commodity: "Soybean", mandi: "Latur", state: "Maharashtra", minPrice: 4200, maxPrice: 4600, modalPrice: 4400, unit: "/qtl", trend: "up", date: "17 May 2026" },
];

const trendIcons: Record<string, { icon: string; color: string }> = {
  up: { icon: "\u2191", color: "text-success" },
  down: { icon: "\u2193", color: "text-error" },
  stable: { icon: "\u2192", color: "text-muted" },
};

export default function MandiPriceTable({
  prices = demoPrices,
  demo = true,
  className = "",
}: MandiPriceTableProps) {
  const [filterCrop, setFilterCrop] = useState("");
  const [filterState, setFilterState] = useState("");

  const crops = [...new Set(prices.map((p) => p.commodity))];
  const states = [...new Set(prices.map((p) => p.state))];

  const filtered = prices.filter((p) => {
    if (filterCrop && p.commodity !== filterCrop) return false;
    if (filterState && p.state !== filterState) return false;
    return true;
  });

  return (
    <div className={`rounded-2xl border border-border bg-surface overflow-hidden ${className}`}>
      <div className="p-5 border-b border-border">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Mandi Prices</h3>
            <p className="text-sm text-muted mt-0.5">
              {demo ? "Sample data for demonstration" : `Updated ${prices[0]?.date || ""}`}
            </p>
          </div>
          {demo && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary-light/15 text-secondary">
              Demo
            </span>
          )}
        </div>

        {/* Filters */}
        <div className="flex gap-3 mt-4">
          <select
            value={filterCrop}
            onChange={(e) => setFilterCrop(e.target.value)}
            aria-label="Filter by crop"
            className="flex-1 h-10 px-3 rounded-lg border border-border bg-surface-raised text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All Crops</option>
            {crops.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            aria-label="Filter by state"
            className="flex-1 h-10 px-3 rounded-lg border border-border bg-surface-raised text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">All States</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="bg-surface-raised text-left">
              <th scope="col" className="px-4 py-3 font-semibold text-muted">Crop</th>
              <th scope="col" className="px-4 py-3 font-semibold text-muted">Mandi</th>
              <th scope="col" className="px-4 py-3 font-semibold text-muted text-right">Min</th>
              <th scope="col" className="px-4 py-3 font-semibold text-muted text-right">Max</th>
              <th scope="col" className="px-4 py-3 font-semibold text-right">
                <span className="text-foreground">Modal</span>
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-muted text-center">Trend</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => {
              const trend = trendIcons[p.trend];
              return (
                <tr key={i} className="border-t border-border hover:bg-surface-raised transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{p.commodity}</td>
                  <td className="px-4 py-3 text-muted">
                    {p.mandi}
                    <span className="text-xs text-muted-light block">{p.state}</span>
                  </td>
                  <td className="px-4 py-3 text-right text-muted">{p.minPrice.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3 text-right text-muted">{p.maxPrice.toLocaleString("en-IN")}</td>
                  <td className="px-4 py-3 text-right font-semibold text-foreground">
                    {p.modalPrice.toLocaleString("en-IN")}
                    <span className="text-xs text-muted font-normal">{p.unit}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`${trend.color} font-bold text-lg`} aria-label={`Trend: ${p.trend}`}>
                      {trend.icon}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="p-8 text-center text-sm text-muted">
          No prices match your filters.
        </div>
      )}
    </div>
  );
}
