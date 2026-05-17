const services = [
  { name: 'Soil Testing Lab', provider: 'AgriLab India', category: 'Testing', desc: 'Get your soil tested for nutrient levels and pH. Includes recommendations.', verified: true },
  { name: 'Crop Advisory Service', provider: 'KVK Network', category: 'Advisory', desc: 'Personalized crop advisory from certified agriculture experts.', verified: true },
  { name: 'Organic Fertilizers', provider: 'GreenGrow', category: 'Inputs', desc: 'Certified organic fertilizers and compost for sustainable farming.', verified: true },
  { name: 'FPO Registration Help', provider: 'FPO Connect', category: 'FPO', desc: 'Assistance with forming and registering Farmer Producer Organizations.', verified: true },
  { name: 'Drip Irrigation Setup', provider: 'WaterSmart', category: 'Inputs', desc: 'Affordable drip irrigation systems with installation support.', verified: false },
  { name: 'Farm Mechanization', provider: 'FarmEquip', category: 'Inputs', desc: 'Tractor and equipment rental services for small farmers.', verified: false },
];

export default function MarketplacePage() {
  return (
    <div className="px-4 py-6 pb-8">
      <h1 className="text-xl font-bold text-[var(--foreground)] mb-1">Marketplace</h1>
      <p className="text-[var(--muted)] text-sm mb-2">Verified agricultural services and products</p>
      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 mb-6">
        <p className="text-xs text-blue-800">
          <strong>Pilot Phase:</strong> Marketplace is currently in pilot. Services are provided by verified partners.
        </p>
      </div>

      <div className="space-y-3">
        {services.map((s, i) => (
          <div key={i} className="rounded-xl bg-[var(--surface)] border border-[var(--border-color)] p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[var(--foreground)]">{s.name}</h3>
              {s.verified && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">Verified</span>
              )}
            </div>
            <p className="text-xs text-[var(--muted)] mb-1">{s.provider}</p>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--surface-raised)] border border-[var(--border-color)]">{s.category}</span>
            <p className="text-sm text-[var(--muted)] mt-2">{s.desc}</p>
            <button className="mt-3 px-4 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] text-sm font-medium min-h-[40px]">
              Inquire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
