import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "KisanAI pilot-ready impact metrics. Transparent measurement framework for farming advisory outcomes.",
};

const pilotMetrics = [
  { label: "Queries Answered", description: "Total farmer questions handled by the assistant across all modules -- chat, disease, weather, mandi, schemes.", isDemo: true, emoji: "💬" },
  { label: "Source Attribution Rate", description: "Percentage of answers that include verifiable source links. Target: 95%+. If we cannot source it, we say so.", isDemo: true, emoji: "🔗" },
  { label: "Disease Scans", description: "Crop disease photos analysed. Each scan includes confidence level and recommended next steps.", isDemo: true, emoji: "🔬" },
  { label: "Scheme Lookups", description: "Number of government scheme eligibility checks performed. Tracks which schemes farmers are most interested in.", isDemo: true, emoji: "📋" },
  { label: "Farmer Retention", description: "Percentage of farmers who return after first use. A key indicator of whether the assistant provides real value.", isDemo: true, emoji: "🔄" },
  { label: "Response Satisfaction", description: "Helpful vs not-helpful feedback ratio on assistant responses. Target: 80%+ helpful.", isDemo: true, emoji: "👍" },
  { label: "Language Distribution", description: "Queries broken down by language used. Helps us prioritise which languages to support next.", isDemo: true, emoji: "🌐" },
  { label: "Topic Heatmap", description: "Most-asked questions categorised by crop, region, and season. Reveals farmer priorities in real time.", isDemo: true, emoji: "🔥" },
];

const principles = [
  { title: "No false claims", desc: "We do not publish impact numbers until we have real pilot data to back them. Every metric on this page is marked as pilot-ready.", emoji: "🚫" },
  { title: "Source everything", desc: "Every metric has a clear definition, data source, and collection method. We do not estimate or extrapolate from proxy data.", emoji: "🔗" },
  { title: "Share what does not work", desc: "We will publish negative results alongside positive ones. If a metric shows no improvement, that is useful data too.", emoji: "📊" },
  { title: "Independent verification", desc: "For government and institutional pilots, we invite third-party verification of impact data.", emoji: "✅" },
];

const measurementFramework = [
  { category: "Engagement", metrics: ["Total queries", "Queries per farmer per week", "Return rate (7-day, 30-day)", "Session duration", "Feature usage distribution"], emoji: "📱" },
  { category: "Quality", metrics: ["Source attribution rate", "Helpful feedback ratio", "Confidence level distribution", "Abstention rate (when we do not know)", "Expert escalation rate"], emoji: "⭐" },
  { category: "Outcome", metrics: ["Scheme application intent", "Disease detection accuracy (vs expert)", "Decision time reduction (self-reported)", "Information quality improvement (survey)"], emoji: "🎯" },
  { category: "Reach", metrics: ["Unique farmers served", "Language distribution", "Crop distribution", "Geographic distribution", "Partner channel distribution"], emoji: "📡" },
];

export default function ImpactPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#777777] hover:text-[#4B4B4B]">Government</Link>
            <Link href="/investors" className="text-[#777777] hover:text-[#4B4B4B]">Investors</Link>
            <Link href="/partners" className="text-[#777777] hover:text-[#4B4B4B]">Partners</Link>
            <Link href="/research" className="text-[#777777] hover:text-[#4B4B4B]">Research</Link>
            <Link href="/impact" className="text-[#58CC02]">Impact</Link>
            <Link href="/application" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-[#58CC02] font-extrabold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        <section className="bg-[#58CC02] text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-[120px] opacity-10 select-none pointer-events-none">🦜</div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-white/80 font-extrabold text-sm tracking-wide uppercase mb-4">Impact</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">📊 Measuring what matters</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">We have designed a comprehensive measurement framework. These metrics are pilot-ready -- the infrastructure is in place, but real data collection begins with our first pilots.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Pilot-Ready Metrics</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">What we will track</h2>
              <p className="mt-4 text-lg text-[#777777]">Each metric has a clear definition, data source, and collection method. They will populate with real data once pilots begin.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pilotMetrics.map((m, i) => (
                <article key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] hover:border-[#58CC02]/30 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{m.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{m.label}</h3>
                  <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-[#FFC800] text-[#4B4B4B] mb-3">{m.isDemo ? "Pilot-ready" : "Live"}</span>
                  <p className="text-[#777777] text-sm leading-relaxed">{m.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 bg-[#FFC800]/10 border-2 border-[#FFC800] rounded-2xl p-6 text-center">
              <p className="text-[#4B4B4B] font-extrabold">⚠️ All metrics above are in pilot-ready state. No real farmer data has been collected yet. Numbers will appear here once our first pilots launch.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Measurement Framework</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">How we measure impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {measurementFramework.map((cat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h3 className="text-lg font-extrabold text-[#4B4B4B]">{cat.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.metrics.map((metric, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#777777]">
                        <span className="text-[#58CC02] flex-shrink-0 mt-0.5 font-extrabold">✓</span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Our Principles</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">How we report impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{p.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{p.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#4B4B4B] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">🤝 Help us generate real data</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">The best way to validate these metrics is to run a pilot. If you are an FPO, NGO, KVK, or government body, let us measure impact together.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/government" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E5E5E5] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">Government Pilots</Link>
              <Link href="/partners" className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">Become a Partner</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#4B4B4B] text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div><Link href="/" className="text-xl font-extrabold text-white flex items-center gap-2 mb-4">🦜 KisanAI</Link><p className="text-white/60 text-sm leading-relaxed">AI farming assistant for every Indian farmer.</p></div>
            <div><h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Product</h4><ul className="space-y-2 text-sm text-white/60"><li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li><li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li><li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li></ul></div>
            <div><h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Organisations</h4><ul className="space-y-2 text-sm text-white/60"><li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li><li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li><li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li></ul></div>
            <div><h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Legal</h4><ul className="space-y-2 text-sm text-white/60"><li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li><li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li></ul></div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
            <p className="text-xs text-white/40">KisanAI provides decision support, not regulated agricultural, financial, or legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
