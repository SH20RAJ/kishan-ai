import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "KisanAI pilot-ready impact metrics. Transparent measurement framework for farming advisory outcomes.",
};

const pilotMetrics = [
  {
    label: "Queries Answered",
    description: "Total farmer questions handled by the assistant across all modules -- chat, disease, weather, mandi, schemes.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    label: "Source Attribution Rate",
    description: "Percentage of answers that include verifiable source links. Target: 95%+. If we cannot source it, we say so.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    label: "Disease Scans",
    description: "Crop disease photos analysed. Each scan includes confidence level and recommended next steps.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    label: "Scheme Lookups",
    description: "Number of government scheme eligibility checks performed. Tracks which schemes farmers are most interested in.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    label: "Farmer Retention",
    description: "Percentage of farmers who return after first use. A key indicator of whether the assistant provides real value.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    label: "Response Satisfaction",
    description: "Helpful vs not-helpful feedback ratio on assistant responses. Target: 80%+ helpful.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.728-4.118h.008v.008h-.008V10.5Zm-3.172 0h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    label: "Language Distribution",
    description: "Queries broken down by language used. Helps us prioritise which languages to support next.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
  {
    label: "Topic Heatmap",
    description: "Most-asked questions categorised by crop, region, and season. Reveals farmer priorities in real time.",
    isDemo: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
];

const principles = [
  { title: "No false claims", desc: "We do not publish impact numbers until we have real pilot data to back them. Every metric on this page is marked as pilot-ready." },
  { title: "Source everything", desc: "Every metric has a clear definition, data source, and collection method. We do not estimate or extrapolate from proxy data." },
  { title: "Share what does not work", desc: "We will publish negative results alongside positive ones. If a metric shows no improvement, that is useful data too." },
  { title: "Independent verification", desc: "For government and institutional pilots, we invite third-party verification of impact data." },
];

const measurementFramework = [
  { category: "Engagement", metrics: ["Total queries", "Queries per farmer per week", "Return rate (7-day, 30-day)", "Session duration", "Feature usage distribution"] },
  { category: "Quality", metrics: ["Source attribution rate", "Helpful feedback ratio", "Confidence level distribution", "Abstention rate (when we do not know)", "Expert escalation rate"] },
  { category: "Outcome", metrics: ["Scheme application intent", "Disease detection accuracy (vs expert)", "Decision time reduction (self-reported)", "Information quality improvement (survey)"] },
  { category: "Reach", metrics: ["Unique farmers served", "Language distribution", "Crop distribution", "Geographic distribution", "Partner channel distribution"] },
];

export default function ImpactPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            KisanAI
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/government" className="text-muted hover:text-primary">Government</Link>
            <Link href="/investors" className="text-muted hover:text-primary">Investors</Link>
            <Link href="/partners" className="text-muted hover:text-primary">Partners</Link>
            <Link href="/research" className="text-muted hover:text-primary">Research</Link>
            <Link href="/impact" className="text-primary font-semibold">Impact</Link>
            <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-primary font-semibold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-dark to-primary text-white py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">Impact</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">Measuring what matters</h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">We have designed a comprehensive measurement framework. These metrics are pilot-ready -- the infrastructure is in place, but real data collection begins with our first pilots.</p>
          </div>
        </section>

        {/* Pilot-Ready Metrics */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Pilot-Ready Metrics</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What we will track</h2>
              <p className="mt-4 text-lg text-muted">Each metric has a clear definition, data source, and collection method. They will populate with real data once pilots begin.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pilotMetrics.map((m, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">{m.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{m.label}</h3>
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-800 mb-3">{m.isDemo ? "Pilot-ready" : "Live"}</span>
                  <p className="text-muted text-sm leading-relaxed">{m.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
              <p className="text-amber-800 font-medium">All metrics above are in pilot-ready state. No real farmer data has been collected yet. Numbers will appear here once our first pilots launch.</p>
            </div>
          </div>
        </section>

        {/* Measurement Framework */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Measurement Framework</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How we measure impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {measurementFramework.map((cat, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.metrics.map((metric, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted">
                        <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Principles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How we report impact</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((p, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Help us generate real data</h2>
            <p className="mt-4 text-lg text-amber-100 leading-relaxed">The best way to validate these metrics is to run a pilot. If you are an FPO, NGO, KVK, or government body, let us measure impact together.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/government" className="inline-flex items-center justify-center px-8 py-4 bg-white text-earth font-bold rounded-xl text-lg hover:bg-amber-50">Government Pilots</Link>
              <Link href="/partners" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/10">Become a Partner</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div><Link href="/" className="text-lg font-bold text-white flex items-center gap-2 mb-4"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>KisanAI</Link><p className="text-gray-400 text-sm leading-relaxed">AI farming assistant for every Indian farmer.</p></div>
            <div><h4 className="font-semibold text-white mb-3">Product</h4><ul className="space-y-2 text-sm text-gray-400"><li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li><li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li><li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li></ul></div>
            <div><h4 className="font-semibold text-white mb-3">Organisations</h4><ul className="space-y-2 text-sm text-gray-400"><li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li><li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li><li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li></ul></div>
            <div><h4 className="font-semibold text-white mb-3">Legal</h4><ul className="space-y-2 text-sm text-gray-400"><li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li><li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li></ul></div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
            <p className="text-xs text-gray-500">KisanAI provides decision support, not regulated agricultural, financial, or legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
