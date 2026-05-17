import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Brief",
  description:
    "KisanAI: AI farming assistant for 9.7 crore digitally traceable Indian farmers. TAM of Rs 58.2B. RAG-based, vernacular, source-attributed advisory.",
};

const marketCards = [
  { label: "TAM", value: "9.7 Cr farmers", detail: "Digitally traceable via PM-KISAN. Conservative TAM at Rs 600/farmer/year = Rs 58.2 billion.", source: "PM-KISAN database, Union Budget documents" },
  { label: "SAM", value: "~45% of TAM", detail: "Farmers with smartphone access and basic digital literacy in our target states.", source: "NSSO 78th Round, IAMAI 2024" },
  { label: "SOM (Year 3)", value: "0.5% of SAM", detail: "Target: ~2.2 lakh paying users by end of Year 3 through FPO and enterprise channels.", source: "Internal planning assumption" },
];

const whyNow = [
  { title: "5G rural coverage", desc: "99% district coverage. Rural internet penetration exceeds 41%. The infrastructure gap that blocked digital farming tools five years ago is closing." },
  { title: "Government push", desc: "Bharat-VISTAAR (2026), Digital Agriculture Mission, and AgriStack create policy tailwinds and interoperability standards." },
  { title: "Category validation", desc: "Bayer FarmRise (5M+ users), DeHaat (Rs 3,000 Cr revenue), Ninjacart, and others have proven farmer willingness to adopt digital tools." },
  { title: "LLM cost curve", desc: "Inference costs dropped 90%+ in 24 months. RAG-based agricultural QA is now economically viable at Indian price points." },
];

const productModules = [
  { title: "Chat Assistant", desc: "Multilingual farming Q&A with source attribution and confidence levels." },
  { title: "Disease Detection", desc: "Photo-based crop diagnosis with actionable next steps and expert escalation." },
  { title: "Weather Advisory", desc: "Hyper-local weather with crop-specific action items, not just forecasts." },
  { title: "Mandi Prices", desc: "Real-time prices from AgMarkNet with trend context and nearby mandi comparison." },
  { title: "Scheme Finder", desc: "Eligibility matching for 100+ central and state schemes with plain-language guidance." },
];

const competitors = [
  { name: "Generic Agri Apps", us: "Unified assistant in one conversation", them: "Single-purpose (weather OR prices OR disease)" },
  { name: "WhatsApp Groups", us: "Source-attributed, curated answers", them: "Unverified, often wrong advice" },
  { name: "Govt Portals", us: "Plain language, vernacular, mobile-first", them: "Complex forms, English-heavy, desktop-centric" },
  { name: "LLM Chatbots", us: "Curated RAG over agricultural corpus", them: "Open-ended generation, hallucination risk" },
];

const businessModel = [
  { phase: "Phase 1: B2B2C", desc: "Partner with FPOs, NGOs, and state departments. They pay for farmer access. Revenue from service contracts.", timeline: "Now" },
  { phase: "Phase 2: Freemium", desc: "Free core assistant for all farmers. Premium features (detailed reports, priority support, multi-crop tracking) for a subscription.", timeline: "Year 1-2" },
  { phase: "Phase 3: Enterprise", desc: "API access for agri-companies, insurers, and lenders. Data insights (aggregated, anonymised) for institutional buyers.", timeline: "Year 2-3" },
];

const gtm = [
  { channel: "FPO Partnerships", desc: "Onboard through 10-15 large FPOs in target states. Each FPO gives access to 5,000-50,000 farmer households." },
  { channel: "KVK Network", desc: "Partner with Krishi Vigyan Kendras for credibility and content validation. 731 KVKs across India." },
  { channel: "NGO Extension", desc: "Co-deploy with agricultural NGOs who already have farmer trust and ground presence." },
  { channel: "Digital Outreach", desc: "YouTube, WhatsApp, and regional-language content for organic farmer acquisition." },
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
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b-2 border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-white flex items-center gap-2 tracking-tight">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/20">
              <img src="/logo.png" alt="KisanAI Logo" className="w-7 h-7 object-contain" />
            </div>
            <span className="text-foreground">KisanAI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-muted hover:text-primary transition-colors">Government</Link>
            <Link href="/investors" className="text-primary border-b-2 border-primary pb-0.5">Investors</Link>
            <Link href="/partners" className="text-muted hover:text-primary transition-colors">Partners</Link>
            <Link href="/research" className="text-muted hover:text-primary transition-colors">Research</Link>
            <Link href="/impact" className="text-muted hover:text-primary transition-colors">Impact</Link>
            <Link 
              href="/application" 
              className="btn-3d-primary px-4 py-2 text-xs shadow-[0_3px_0_var(--primary-dark)]"
            >
              Try KisanAI
            </Link>
          </div>
          <div className="md:hidden">
            <Link href="/" className="text-primary font-bold text-sm">Home</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-dark to-primary text-white py-20 sm:py-28 border-b-4 border-primary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <p className="text-amber-300 font-bold text-sm tracking-wide uppercase mb-4">Investor Brief</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">AI farming assistant for every Indian farmer</h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-3xl">India has 9.7 crore digitally traceable farmers. Rural internet penetration exceeds 41%. No farmer-first, vernacular AI assistant has achieved meaningful scale. We are building the lowest-friction, highest-trust wrapper around existing agricultural information channels.</p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Vision</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Become the default daily decision tool for Indian farmers</h2>
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>Farmers do not need another app. They need one trusted place to ask: &ldquo;Should I spray today?&rdquo; &ldquo;What is the price at my mandi?&rdquo; &ldquo;Am I eligible for this scheme?&rdquo;</p>
              <p>KisanAI is not a marketplace, not an input seller, not a fintech. We are the AI layer that sits between the farmer and the information they already need -- delivered in their language, with sources they can verify.</p>
            </div>
          </div>
        </section>

        {/* Market */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Market Opportunity</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Large, underserved, and timing is right</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {marketCards.map((m, i) => (
                <div key={i} className="bg-surface rounded-2xl p-8 border border-border">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{m.label}</p>
                  <p className="text-3xl font-bold text-foreground mb-3">{m.value}</p>
                  <p className="text-muted leading-relaxed mb-4">{m.detail}</p>
                  <p className="text-xs text-muted italic">Source: {m.source}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted italic text-center">Market figures are planning assumptions based on public data, not audited projections.</p>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Why Now</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Four converging tailwinds</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyNow.map((item, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Product</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">One assistant, five capabilities</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productModules.map((m, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Positioning */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Competitive Positioning</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How we are different</h2>
            </div>
            <div className="space-y-4">
              {competitors.map((c, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border grid sm:grid-cols-3 gap-4 items-center">
                  <div className="font-bold text-foreground">{c.name}</div>
                  <div><p className="text-xs text-primary font-semibold uppercase mb-1">KisanAI</p><p className="text-sm text-muted">{c.us}</p></div>
                  <div><p className="text-xs text-muted font-semibold uppercase mb-1">Alternatives</p><p className="text-sm text-muted">{c.them}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Business Model</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Three-phase monetisation</h2>
            </div>
            <div className="space-y-6">
              {businessModel.map((b, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-center leading-tight">{b.timeline}</span></div>
                  <div><h3 className="text-lg font-bold text-foreground mb-1">{b.phase}</h3><p className="text-muted leading-relaxed">{b.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GTM */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Go-to-Market</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Institution-led distribution</h2>
              <p className="mt-4 text-lg text-muted">We do not build parallel distribution. We plug into institutions farmers already trust.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {gtm.map((g, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{g.channel}</h3>
                  <p className="text-muted leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Roadmap</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What we are building next</h2>
            </div>
            <div className="space-y-6">
              {roadmap.map((r, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide mb-3">{r.quarter}</p>
                  <ul className="space-y-2">
                    {r.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Known vs Unknown */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Intellectual Honesty</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What we know vs. what we don&apos;t</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {knownVsUnknown.map((section, i) => (
                <div key={i} className="bg-surface rounded-2xl p-8 border border-border">
                  <h3 className={`text-lg font-bold mb-4 ${section.type === "known" ? "text-primary" : "text-accent"}`}>
                    {section.type === "known" ? "What we know" : "What we are still figuring out"}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted text-sm">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          {section.type === "known" ? <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />}
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s talk</h2>
            <p className="mt-4 text-lg text-amber-100 leading-relaxed">Interested in KisanAI? We are happy to share our detailed deck, financial model, and technical architecture.</p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <input type="hidden" name="type" value="investor" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="contactName" className="block text-sm font-medium text-amber-100 mb-1">Name</label><input type="text" id="contactName" name="contactName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Your name" /></div>
                <div><label htmlFor="organizationName" className="block text-sm font-medium text-amber-100 mb-1">Fund / Organisation</label><input type="text" id="organizationName" name="organizationName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Fund name" /></div>
              </div>
              <div><label htmlFor="email" className="block text-sm font-medium text-amber-100 mb-1">Email</label><input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="you@fund.com" /></div>
              <div><label htmlFor="message" className="block text-sm font-medium text-amber-100 mb-1">Message</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none" placeholder="What would you like to know?" /></div>
              <button type="submit" className="w-full sm:w-auto btn-3d-saffron text-amber-950 font-extrabold shadow-[0_5px_0_#9a3412] px-8 py-4 text-lg">Get in Touch</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-lg font-extrabold text-white flex items-center gap-2 mb-4 tracking-tight">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-white/20">
                  <img src="/logo.png" alt="KisanAI Logo" className="w-7 h-7 object-contain" />
                </div>
                <span>KisanAI</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">AI farming assistant for every Indian farmer.</p>
            </div>
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
