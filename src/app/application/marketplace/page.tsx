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
    <div className="px-4 py-6 pb-8 max-w-lg mx-auto bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FF9600] flex items-center justify-center text-2xl shadow-[0_3px_0_#E68600]">🏪</div>
        <div>
          <h1 className="text-lg font-extrabold text-[#4B4B4B]">Marketplace</h1>
          <p className="text-xs text-[#777777]">🦜 Verified agricultural services and products</p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-[#1CB0F6]/10 border-2 border-[#1CB0F6] mb-6 shadow-[0_2px_0_#1CB0F6]">
        <p className="text-xs text-[#4B4B4B] font-extrabold">
          🚀 <strong>Pilot Phase:</strong> Marketplace is currently in pilot. Services are provided by verified partners.
        </p>
      </div>

      <div className="space-y-3">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl bg-white border-2 border-[#E5E5E5] p-5 shadow-[0_2px_0_#E5E5E5]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-extrabold text-[#4B4B4B]">{s.name}</h3>
              {s.verified && (
                <span className="text-xs px-3 py-1 rounded-full bg-[#58CC02]/10 text-[#58CC02] font-extrabold border border-[#58CC02]/20">✓ Verified</span>
              )}
            </div>
            <p className="text-xs text-[#777777] mb-1 font-medium">{s.provider}</p>
            <span className="text-xs px-3 py-1 rounded-full bg-[#F7F7F7] border-2 border-[#E5E5E5] font-extrabold text-[#4B4B4B]">{s.category}</span>
            <p className="text-sm text-[#777777] mt-2">{s.desc}</p>
            <button className="mt-3 px-5 py-2.5 rounded-2xl bg-[#1CB0F6] text-white text-sm font-extrabold shadow-[0_3px_0_#1899D6] active:translate-y-[3px] active:shadow-none transition-all min-h-[44px] min-w-[44px]">
              Inquire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
