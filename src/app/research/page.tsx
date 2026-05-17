import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The research behind KisanAI: farmer pain points, market analysis, competitive landscape, and our transparent assumptions.",
};

const problemFindings = [
  { title: "Financial distress from information gaps", finding: "Public reports document onion farmers spending Rs 80,000/acre on cultivation while receiving Rs 300-1,200 for damaged produce. Farmers cite inability to access timely market and weather information as a primary factor.", source: "Public agricultural distress reports, media documentation", emoji: "💸" },
  { title: "Extension worker shortage", finding: "India has approximately 1 extension worker per 1,000 farmers. The ratio is worse in tribal and remote areas. KVKs cover only a fraction of the 600,000+ villages.", source: "ICAR annual reports, DAC&FW statistics", emoji: "👷" },
  { title: "Low scheme awareness and uptake", finding: "PMFBY, PM-KISAN, and KCC have significant unclaimed benefits. Surveys show many eligible farmers are unaware of schemes or unable to navigate application processes.", source: "PMFBY portal data, Parliamentary standing committee reports", emoji: "📋" },
  { title: "Language barrier in digital tools", finding: "Most digital farming tools are available only in English or Hindi. India has 22 scheduled languages and hundreds of dialects. Farmers who speak regional languages are excluded from digital advisory.", source: "Census 2011 language data, IAMAI internet reports", emoji: "🌐" },
];

const marketData = [
  { label: "Digitally traceable farmers", value: "~9.7 crore", note: "PM-KISAN beneficiaries with Aadhaar-linked bank accounts, providing a digital identity layer.", source: "PM-KISAN dashboard, Union Budget documents", emoji: "👨‍🌾" },
  { label: "Rural internet penetration", value: "41.7%", note: "Up from ~20% in 2018. Mobile internet is the primary access mode.", source: "IAMAI-Kantar India Internet Report 2024", emoji: "📡" },
  { label: "5G district coverage", value: "99%", note: "Enables low-latency AI interactions even in semi-rural areas.", source: "DoT coverage data, 2025", emoji: "📶" },
  { label: "Agri-tech market (India)", value: "Growing rapidly", note: "DeHaat crossed Rs 3,000 Cr revenue. FarmRise reached 5M+ farmers. Category is validated.", source: "Company disclosures, press reports", emoji: "📈" },
  { label: "Conservative TAM", value: "Rs 58.2 billion", note: "9.7 crore farmers x Rs 600/farmer/year. This assumes only basic advisory monetisation.", source: "Internal planning calculation based on public data", emoji: "🎯" },
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
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#777777] hover:text-[#4B4B4B]">Government</Link>
            <Link href="/investors" className="text-[#777777] hover:text-[#4B4B4B]">Investors</Link>
            <Link href="/partners" className="text-[#777777] hover:text-[#4B4B4B]">Partners</Link>
            <Link href="/research" className="text-[#58CC02]">Research</Link>
            <Link href="/impact" className="text-[#777777] hover:text-[#4B4B4B]">Impact</Link>
            <Link href="/application" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-[#58CC02] font-extrabold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        <section className="bg-[#58CC02] text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-[120px] opacity-10 select-none pointer-events-none">🦜</div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-white/80 font-extrabold text-sm tracking-wide uppercase mb-4">Research</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">📊 Grounded in evidence, transparent about assumptions</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">We built KisanAI because the pain is documented, the market is validated, and the timing is right. Here is our research and the assumptions we are testing.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Problem Research</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">The pain is real and documented</h2>
              <p className="mt-4 text-lg text-[#777777]">These are publicly verifiable findings that informed our decision to build KisanAI.</p>
            </div>
            <div className="space-y-6">
              {problemFindings.map((f, i) => (
                <article key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{f.emoji}</span>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{f.title}</h3>
                      <p className="text-[#777777] leading-relaxed mb-3">{f.finding}</p>
                      <p className="text-xs text-[#777777] italic">Source: {f.source}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Market Analysis</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">The numbers behind the opportunity</h2>
              <p className="mt-4 text-lg text-[#777777]">All figures are from public sources. Our TAM calculation is a planning assumption, not an audited projection.</p>
            </div>
            <div className="space-y-4">
              {marketData.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="text-3xl flex-shrink-0">{d.emoji}</div>
                  <div className="sm:w-48 flex-shrink-0">
                    <p className="text-sm text-[#777777]">{d.label}</p>
                    <p className="text-2xl font-extrabold text-[#58CC02]">{d.value}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#777777] text-sm leading-relaxed">{d.note}</p>
                    <p className="text-xs text-[#777777] italic mt-1">Source: {d.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Competitive Landscape</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Who else is working on this</h2>
              <p className="mt-4 text-lg text-[#777777]">The category is validated by significant players. Our positioning is narrow and deliberate.</p>
            </div>
            <div className="space-y-6">
              {competitors.map((c, i) => (
                <article key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{c.name}</h3>
                  <p className="text-[#777777] text-sm mb-3">{c.focus}</p>
                  <div className="bg-[#58CC02]/5 rounded-2xl p-4">
                    <p className="text-sm font-extrabold text-[#58CC02] mb-1">How KisanAI differs</p>
                    <p className="text-sm text-[#777777] leading-relaxed">{c.differentiation}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Transparent Assumptions</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">What we believe and what we are testing</h2>
              <p className="mt-4 text-lg text-[#777777]">Honest about what we know, what we assume, and what we need to validate.</p>
            </div>
            <div className="space-y-8">
              {assumptions.map((category, i) => (
                <div key={i}>
                  <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-4">{category.category} Assumptions</h3>
                  <div className="space-y-3">
                    {category.items.map((item, j) => (
                      <div key={j} className="bg-white rounded-2xl p-5 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                        <p className="text-[#4B4B4B] font-medium mb-2">{item.assumption}</p>
                        <p className="text-sm text-[#777777]"><span className="font-extrabold">Status:</span> {item.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#4B4B4B] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">💬 Want to discuss our research?</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">We are happy to share our detailed methodology, data sources, and analysis.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/investors" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E5E5E5] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">Investor Brief</Link>
              <Link href="/partners" className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">Partner with Us</Link>
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
