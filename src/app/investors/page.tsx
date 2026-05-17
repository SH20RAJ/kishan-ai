import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Brief",
  description:
    "KisanAI: AI farming assistant for 9.7 crore digitally traceable Indian farmers. TAM of Rs 58.2B. RAG-based, vernacular, source-attributed advisory.",
};

const marketCards = [
  { label: "TAM", value: "9.7 Cr farmers", detail: "Digitally traceable via PM-KISAN. Conservative TAM at Rs 600/farmer/year = Rs 58.2 billion.", source: "PM-KISAN database, Union Budget documents", emoji: "🎯" },
  { label: "SAM", value: "~45% of TAM", detail: "Farmers with smartphone access and basic digital literacy in our target states.", source: "NSSO 78th Round, IAMAI 2024", emoji: "📱" },
  { label: "SOM (Year 3)", value: "0.5% of SAM", detail: "Target: ~2.2 lakh paying users by end of Year 3 through FPO and enterprise channels.", source: "Internal planning assumption", emoji: "🚀" },
];

const whyNow = [
  { title: "5G rural coverage", desc: "99% district coverage. Rural internet penetration exceeds 41%. The infrastructure gap that blocked digital farming tools five years ago is closing.", emoji: "📡" },
  { title: "Government push", desc: "Bharat-VISTAAR (2026), Digital Agriculture Mission, and AgriStack create policy tailwinds and interoperability standards.", emoji: "🏛️" },
  { title: "Category validation", desc: "Bayer FarmRise (5M+ users), DeHaat (Rs 3,000 Cr revenue), Ninjacart, and others have proven farmer willingness to adopt digital tools.", emoji: "✅" },
  { title: "LLM cost curve", desc: "Inference costs dropped 90%+ in 24 months. RAG-based agricultural QA is now economically viable at Indian price points.", emoji: "💰" },
];

const productModules = [
  { title: "Chat Assistant", desc: "Multilingual farming Q&A with source attribution and confidence levels.", emoji: "💬" },
  { title: "Disease Detection", desc: "Photo-based crop diagnosis with actionable next steps and expert escalation.", emoji: "🔬" },
  { title: "Weather Advisory", desc: "Hyper-local weather with crop-specific action items, not just forecasts.", emoji: "🌤️" },
  { title: "Mandi Prices", desc: "Real-time prices from AgMarkNet with trend context and nearby mandi comparison.", emoji: "📈" },
  { title: "Scheme Finder", desc: "Eligibility matching for 100+ central and state schemes with plain-language guidance.", emoji: "📋" },
];

const competitors = [
  { name: "Generic Agri Apps", us: "Unified assistant in one conversation", them: "Single-purpose (weather OR prices OR disease)" },
  { name: "WhatsApp Groups", us: "Source-attributed, curated answers", them: "Unverified, often wrong advice" },
  { name: "Govt Portals", us: "Plain language, vernacular, mobile-first", them: "Complex forms, English-heavy, desktop-centric" },
  { name: "LLM Chatbots", us: "Curated RAG over agricultural corpus", them: "Open-ended generation, hallucination risk" },
];

const businessModel = [
  { phase: "Phase 1: B2B2C", desc: "Partner with FPOs, NGOs, and state departments. They pay for farmer access. Revenue from service contracts.", timeline: "Now", emoji: "🤝" },
  { phase: "Phase 2: Freemium", desc: "Free core assistant for all farmers. Premium features (detailed reports, priority support, multi-crop tracking) for a subscription.", timeline: "Year 1-2", emoji: "⭐" },
  { phase: "Phase 3: Enterprise", desc: "API access for agri-companies, insurers, and lenders. Data insights (aggregated, anonymised) for institutional buyers.", timeline: "Year 2-3", emoji: "🏢" },
];

const gtm = [
  { channel: "FPO Partnerships", desc: "Onboard through 10-15 large FPOs in target states. Each FPO gives access to 5,000-50,000 farmer households.", emoji: "🤝" },
  { channel: "KVK Network", desc: "Partner with Krishi Vigyan Kendras for credibility and content validation. 731 KVKs across India.", emoji: "🎓" },
  { channel: "NGO Extension", desc: "Co-deploy with agricultural NGOs who already have farmer trust and ground presence.", emoji: "💚" },
  { channel: "Digital Outreach", desc: "YouTube, WhatsApp, and regional-language content for organic farmer acquisition.", emoji: "📱" },
];

const roadmap = [
  { quarter: "Q2 2026", items: ["MVP launch: Chat + Disease Detection", "Hindi + 2 regional languages", "First FPO pilot (500 farmers)"] },
  { quarter: "Q3 2026", items: ["Weather + Mandi Prices modules", "Scheme finder v1", "3 FPO pilots, 2 KVK partnerships"] },
  { quarter: "Q4 2026", items: ["5 regional languages", "Impact dashboard for partners", "First enterprise conversations"] },
  { quarter: "Q1 2027", items: ["Freemium model launch", "API for enterprise partners", "10+ FPO partners"] },
];

const knownVsUnknown = [
  { type: "known", items: ["Farmer pain points are documented and real", "Digital infrastructure is ready", "RAG-based agricultural QA works technically", "FPOs and KVKs are willing distribution partners", "LLM costs support Indian price points"] },
  { type: "unknown", items: ["Which crop-region combination has highest retention", "Optimal pricing for freemium model", "Farmer willingness to pay for premium features", "Best channel mix for organic acquisition", "Long-term retention patterns in rural India"] },
];

export default function InvestorsPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#777777] hover:text-[#4B4B4B]">Government</Link>
            <Link href="/investors" className="text-[#58CC02]">Investors</Link>
            <Link href="/partners" className="text-[#777777] hover:text-[#4B4B4B]">Partners</Link>
            <Link href="/research" className="text-[#777777] hover:text-[#4B4B4B]">Research</Link>
            <Link href="/impact" className="text-[#777777] hover:text-[#4B4B4B]">Impact</Link>
            <Link href="/application" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-[#58CC02] font-extrabold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        <section className="bg-[#58CC02] text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-[120px] opacity-10 select-none pointer-events-none">🦜</div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <p className="text-white/80 font-extrabold text-sm tracking-wide uppercase mb-4">Investor Brief</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">🌾 AI farming assistant for every Indian farmer</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">India has 9.7 crore digitally traceable farmers. Rural internet penetration exceeds 41%. No farmer-first, vernacular AI assistant has achieved meaningful scale. We are building the lowest-friction, highest-trust wrapper around existing agricultural information channels.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Vision</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B] mb-6">🎯 Become the default daily decision tool for Indian farmers</h2>
            <div className="space-y-4 text-lg text-[#777777] leading-relaxed">
              <p>Farmers do not need another app. They need one trusted place to ask: &ldquo;Should I spray today?&rdquo; &ldquo;What is the price at my mandi?&rdquo; &ldquo;Am I eligible for this scheme?&rdquo;</p>
              <p>KisanAI is not a marketplace, not an input seller, not a fintech. We are the AI layer that sits between the farmer and the information they already need -- delivered in their language, with sources they can verify.</p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Market Opportunity</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Large, underserved, and timing is right</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {marketCards.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{m.emoji}</div>
                  <p className="text-sm font-extrabold text-[#58CC02] uppercase tracking-wide mb-2">{m.label}</p>
                  <p className="text-3xl font-extrabold text-[#4B4B4B] mb-3">{m.value}</p>
                  <p className="text-[#777777] leading-relaxed mb-4">{m.detail}</p>
                  <p className="text-xs text-[#777777] italic">Source: {m.source}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#777777] italic text-center">Market figures are planning assumptions based on public data, not audited projections.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Why Now</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Four converging tailwinds</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyNow.map((item, i) => (
                <article key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{item.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Product</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">One assistant, five capabilities</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productModules.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{m.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{m.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Competitive Positioning</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">How we are different</h2>
            </div>
            <div className="space-y-4">
              {competitors.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] grid sm:grid-cols-3 gap-4 items-center">
                  <div className="font-extrabold text-[#4B4B4B]">{c.name}</div>
                  <div><p className="text-xs text-[#58CC02] font-extrabold uppercase mb-1">KisanAI</p><p className="text-sm text-[#777777]">{c.us}</p></div>
                  <div><p className="text-xs text-[#777777] font-extrabold uppercase mb-1">Alternatives</p><p className="text-sm text-[#777777]">{c.them}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Business Model</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">💰 Three-phase monetisation</h2>
            </div>
            <div className="space-y-6">
              {businessModel.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#58CC02]/10 flex items-center justify-center flex-shrink-0 text-3xl">{b.emoji}</div>
                  <div><p className="text-xs font-extrabold text-[#58CC02] uppercase tracking-wide mb-1">{b.timeline}</p><h3 className="text-lg font-extrabold text-[#4B4B4B] mb-1">{b.phase}</h3><p className="text-[#777777] leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Go-to-Market</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Institution-led distribution</h2>
              <p className="mt-4 text-lg text-[#777777]">We do not build parallel distribution. We plug into institutions farmers already trust.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {gtm.map((g, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{g.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{g.channel}</h3>
                  <p className="text-[#777777] leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Roadmap</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">🗓️ What we are building next</h2>
            </div>
            <div className="space-y-6">
              {roadmap.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <p className="text-sm font-extrabold text-[#58CC02] uppercase tracking-wide mb-3">{r.quarter}</p>
                  <ul className="space-y-2">
                    {r.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#777777]"><span className="text-[#58CC02] flex-shrink-0 mt-0.5">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Intellectual Honesty</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">What we know vs. what we don&apos;t</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {knownVsUnknown.map((section, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <h3 className={`text-lg font-extrabold mb-4 ${section.type === "known" ? "text-[#58CC02]" : "text-[#FF9600]"}`}>{section.type === "known" ? "✅ What we know" : "❓ What we are still figuring out"}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#777777] text-sm"><span className={`flex-shrink-0 mt-0.5 ${section.type === "known" ? "text-[#58CC02]" : "text-[#FF9600]"}`}>{section.type === "known" ? "✓" : "?"}</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#4B4B4B] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">📞 Let&apos;s talk</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">Interested in KisanAI? We are happy to share our detailed deck, financial model, and technical architecture.</p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <input type="hidden" name="type" value="investor" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="contactName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Name</label><input type="text" id="contactName" name="contactName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="Your name" /></div>
                <div><label htmlFor="organizationName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Fund / Organisation</label><input type="text" id="organizationName" name="organizationName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="Fund name" /></div>
              </div>
              <div><label htmlFor="email" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Email</label><input type="email" id="email" name="email" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="you@fund.com" /></div>
              <div><label htmlFor="message" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Message</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all resize-none" placeholder="What would you like to know?" /></div>
              <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all cursor-pointer">Get in Touch</button>
            </form>
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
