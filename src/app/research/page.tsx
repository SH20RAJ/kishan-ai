import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The research behind KisanAI: farmer pain points, market analysis, competitive landscape, and our transparent assumptions.",
};

const problemFindings = [
  { title: "Financial distress from information gaps", finding: "Public reports document onion farmers spending Rs 80,000/acre on cultivation while receiving Rs 300-1,200 for damaged produce. Farmers cite inability to access timely market and weather information as a primary factor.", source: "Public agricultural distress reports, media documentation" },
  { title: "Extension worker shortage", finding: "India has approximately 1 extension worker per 1,000 farmers. The ratio is worse in tribal and remote areas. KVKs cover only a fraction of the 600,000+ villages.", source: "ICAR annual reports, DAC&FW statistics" },
  { title: "Low scheme awareness and uptake", finding: "PMFBY, PM-KISAN, and KCC have significant unclaimed benefits. Surveys show many eligible farmers are unaware of schemes or unable to navigate application processes.", source: "PMFBY portal data, Parliamentary standing committee reports" },
  { title: "Language barrier in digital tools", finding: "Most digital farming tools are available only in English or Hindi. India has 22 scheduled languages and hundreds of dialects. Farmers who speak regional languages are excluded from digital advisory.", source: "Census 2011 language data, IAMAI internet reports" },
];

const marketData = [
  { label: "Digitally traceable farmers", value: "~9.7 crore", note: "PM-KISAN beneficiaries with Aadhaar-linked bank accounts, providing a digital identity layer.", source: "PM-KISAN dashboard, Union Budget documents" },
  { label: "Rural internet penetration", value: "41.7%", note: "Up from ~20% in 2018. Mobile internet is the primary access mode.", source: "IAMAI-Kantar India Internet Report 2024" },
  { label: "5G district coverage", value: "99%", note: "Enables low-latency AI interactions even in semi-rural areas.", source: "DoT coverage data, 2025" },
  { label: "Agri-tech market (India)", value: "Growing rapidly", note: "DeHaat crossed Rs 3,000 Cr revenue. FarmRise reached 5M+ farmers. Category is validated.", source: "Company disclosures, press reports" },
  { label: "Conservative TAM", value: "Rs 58.2 billion", note: "9.7 crore farmers x Rs 600/farmer/year. This assumes only basic advisory monetisation.", source: "Internal planning calculation based on public data" },
];

const competitors = [
  { name: "Bayer FarmRise", focus: "Input company extension app. 5M+ users. Primarily pushes Bayer products alongside advisory.", differentiation: "KisanAI is input-agnostic. We do not sell products. Our recommendations are source-attributed and not tied to any manufacturer." },
  { name: "DeHaat", focus: "Full-stack agri platform: inputs, output marketplaces, advisory. Rs 3,000 Cr revenue.", differentiation: "KisanAI is advisory-only. We do not compete on inputs or output sales. We are complementary to platforms like DeHaat." },
  { name: "Government portals (Bhuvan, AgMarkNet, PMFBY)", focus: "Official data sources. Accurate but fragmented, English-heavy, desktop-centric.", differentiation: "KisanAI wraps these sources into a conversational, mobile-first, multilingual interface. We link back to official portals as sources." },
  { name: "Generic LLM chatbots", focus: "ChatGPT, Gemini, etc. can answer farming questions but hallucinate and lack agricultural curation.", differentiation: "KisanAI uses RAG over curated agricultural corpora. We abstain when uncertain. We show sources. We do not generate open-ended advice." },
  { name: "WhatsApp farming groups", focus: "The dominant current channel. Unverified advice, rumours, dealer promotions.", differentiation: "KisanAI provides the same convenience (mobile, conversational) but with source attribution and expert verification." },
];

const assumptions = [
  { category: "Technical", items: [
    { assumption: "RAG over curated agricultural content produces more reliable answers than open-ended LLM generation", status: "Validated by academic research on Indian agricultural QA systems" },
    { assumption: "Multi-language support is feasible with current LLM capabilities", status: "Hindi validated; regional languages in progress" },
    { assumption: "Photo-based disease detection is useful at farmer level", status: "Academic models show 85%+ accuracy on common crops; field validation needed" },
  ]},
  { category: "Market", items: [
    { assumption: "Farmers will use a digital assistant if it is free, fast, and in their language", status: "Supported by FarmRise, DeHaat adoption data; needs our own validation" },
    { assumption: "FPOs and KVKs are willing distribution partners", status: "Early conversations positive; structured pilots pending" },
    { assumption: "Freemium model can work at Rs 1-3/day price point", status: "Untested; needs farmer willingness-to-pay research" },
  ]},
  { category: "Operational", items: [
    { assumption: "Content curation at scale is feasible with a small team", status: "MVP yes; scale requires automation and partner contributions" },
    { assumption: "LLM costs will continue to decline", status: "Strong trend (90%+ drop in 24 months); not guaranteed" },
    { assumption: "DPDP Act compliance is achievable without heavy infrastructure", status: "Designing for compliance from day one; legal review ongoing" },
  ]},
];

export default function ResearchPage() {
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
            <Link href="/research" className="text-primary font-semibold">Research</Link>
            <Link href="/impact" className="text-muted hover:text-primary">Impact</Link>
            <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-primary font-semibold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-dark to-primary text-white py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">Research</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">Grounded in evidence, transparent about assumptions</h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">We built KisanAI because the pain is documented, the market is validated, and the timing is right. Here is our research and the assumptions we are testing.</p>
          </div>
        </section>

        {/* Problem Research */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Problem Research</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The pain is real and documented</h2>
              <p className="mt-4 text-lg text-muted">These are publicly verifiable findings that informed our decision to build KisanAI.</p>
            </div>
            <div className="space-y-6">
              {problemFindings.map((f, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted leading-relaxed mb-3">{f.finding}</p>
                  <p className="text-xs text-muted italic">Source: {f.source}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Market Analysis</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The numbers behind the opportunity</h2>
              <p className="mt-4 text-lg text-muted">All figures are from public sources. Our TAM calculation is a planning assumption, not an audited projection.</p>
            </div>
            <div className="space-y-4">
              {marketData.map((d, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="sm:w-48 flex-shrink-0">
                    <p className="text-sm text-muted">{d.label}</p>
                    <p className="text-2xl font-bold text-primary">{d.value}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-muted text-sm leading-relaxed">{d.note}</p>
                    <p className="text-xs text-muted italic mt-1">Source: {d.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Competitive Landscape</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Who else is working on this</h2>
              <p className="mt-4 text-lg text-muted">The category is validated by significant players. Our positioning is narrow and deliberate.</p>
            </div>
            <div className="space-y-6">
              {competitors.map((c, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.name}</h3>
                  <p className="text-muted text-sm mb-3">{c.focus}</p>
                  <div className="bg-primary/5 rounded-xl p-4">
                    <p className="text-sm font-semibold text-primary mb-1">How KisanAI differs</p>
                    <p className="text-sm text-muted leading-relaxed">{c.differentiation}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Assumptions */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Transparent Assumptions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What we believe and what we are testing</h2>
              <p className="mt-4 text-lg text-muted">Honest about what we know, what we assume, and what we need to validate.</p>
            </div>
            <div className="space-y-8">
              {assumptions.map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-foreground mb-4">{category.category} Assumptions</h3>
                  <div className="space-y-3">
                    {category.items.map((item, j) => (
                      <div key={j} className="bg-surface rounded-xl p-5 border border-border">
                        <p className="text-foreground font-medium mb-2">{item.assumption}</p>
                        <p className="text-sm text-muted"><span className="font-semibold">Status:</span> {item.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Want to discuss our research?</h2>
            <p className="mt-4 text-lg text-amber-100 leading-relaxed">We are happy to share our detailed methodology, data sources, and analysis.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investors" className="inline-flex items-center justify-center px-8 py-4 bg-white text-earth font-bold rounded-xl text-lg hover:bg-amber-50">Investor Brief</Link>
              <Link href="/partners" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/10">Partner with Us</Link>
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
