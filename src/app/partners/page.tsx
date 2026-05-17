import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | KisanAI",
  description:
    "Partner with KisanAI as an FPO, NGO, input retailer, agri institution, or government body. Structured pilots with measurable outcomes.",
};

const partnerTypes = [
  {
    title: "FPOs (Farmer Producer Organisations)",
    desc: "Integrate KisanAI into your farmer network. Your members get AI advisory in their language; you get a dashboard showing engagement, top queries, and scheme lookups.",
    benefits: [
      "Reduce advisory burden on your field staff",
      "Help members discover government schemes they qualify for",
      "Track what your farmers are asking about",
      "No technology investment required"
    ],
    emoji: "👥",
  },
  {
    title: "NGOs & Development Organisations",
    desc: "Co-deploy KisanAI as part of your agricultural extension programme. We provide the technology; you provide the farmer trust and ground presence.",
    benefits: [
      "Amplify your extension workers' reach",
      "Multilingual advisory without building your own system",
      "Impact dashboard for donor reporting",
      "Co-branded experience"
    ],
    emoji: "💚",
  },
  {
    title: "Input Retailers & Agri-Dealers",
    desc: "Offer KisanAI to your customers as a value-added service. Farmers who get better advice make better input decisions.",
    benefits: [
      "Differentiate your retail offering",
      "Build deeper farmer relationships",
      "Understand farmer needs through anonymised trends",
      "No integration cost"
    ],
    emoji: "🏪",
  },
  {
    title: "Agri Research Institutions",
    desc: "Use KisanAI as a research tool and knowledge dissemination channel. Curate content for your region; measure how farmers interact with it.",
    benefits: [
      "Disseminate research findings directly to farmers",
      "Measure engagement with advisory content",
      "Co-develop crop-specific knowledge bases",
      "Publishable impact data"
    ],
    emoji: "🎓",
  },
  {
    title: "Government Bodies",
    desc: "Deploy KisanAI through state agriculture departments, KVKs, or central schemes. Structured 90-day pilots with transparent metrics.",
    benefits: [
      "Multilingual advisory without building in-house AI",
      "Impact dashboard with auditable metrics",
      "DPDP Act compliant",
      "Integration with existing extension channels"
    ],
    emoji: "🏛️",
  },
];

const howItWorks = [
  { step: "1", title: "Initial Chat", desc: "We understand your farmer network, crops, regions, and goals. No commitment required." },
  { step: "2", title: "Pilot Design", desc: "We co-design a 30-90 day pilot with clear metrics, timelines, and success criteria." },
  { step: "3", title: "Deployment", desc: "We configure KisanAI for your region and crops. Your farmers access via WhatsApp or web." },
  { step: "4", title: "Measure & Grow", desc: "We share a live dashboard. We review data together. We iterate on content and UX." },
];

export default function PartnersPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#777777] hover:text-[#4B4B4B]">Government</Link>
            <Link href="/investors" className="text-[#777777] hover:text-[#4B4B4B]">Investors</Link>
            <Link href="/partners" className="text-[#58CC02]">Partners</Link>
            <Link href="/research" className="text-[#777777] hover:text-[#4B4B4B]">Research</Link>
            <Link href="/impact" className="text-[#777777] hover:text-[#4B4B4B]">Impact</Link>
            <Link href="/application" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#58CC02] text-white font-extrabold rounded-2xl text-sm shadow-[0_4px_0_#46A302] hover:brightness-105 active:translate-y-[4px] active:shadow-none transition-all">Try KisanAI</Link>
          </div>
          <div className="md:hidden"><Link href="/" className="text-[#58CC02] font-extrabold text-sm">Home</Link></div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-[#58CC02] text-white py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute top-8 right-8 text-[120px] opacity-10 select-none pointer-events-none">🦜</div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-white/80 font-extrabold text-sm tracking-wide uppercase mb-4">Partnerships</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              🌾 Bring AI advisory to your farmers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Whether you are an FPO, NGO, input retailer, research institution, or government body -- we make it easy to offer your farmers trusted, multilingual AI advisory.
            </p>
            <div className="mt-10">
              <a href="#partner-form" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all group">
                🚀 Become a Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Who We Work With</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Partnership models for every type of organisation</h2>
            </div>
            <div className="space-y-8">
              {partnerTypes.map((p, i) => (
                <article key={i} className="bg-white rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] hover:border-[#58CC02]/30 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#58CC02]/10 flex items-center justify-center flex-shrink-0 text-3xl">{p.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-2">{p.title}</h3>
                      <p className="text-[#777777] leading-relaxed text-sm mb-4">{p.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {p.benefits.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-xs text-[#777777]">
                            <span className="text-[#58CC02] flex-shrink-0 mt-0.5 font-extrabold">✓</span>
                            <span className="font-medium">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">From conversation to deployment</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#58CC02] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-[0_4px_0_#46A302]">{s.step}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{s.title}</h3>
                  <p className="text-[#777777] text-xs leading-relaxed max-w-[180px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Lead Form */}
        <section id="partner-form" className="py-20 sm:py-28 bg-[#4B4B4B] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">📝 Become a partner</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-lg mx-auto">
              Tell us about your organisation and farmer network. We will get back to you within 3 business days to discuss a pilot.
            </p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="organizationName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Organisation Name</label>
                  <input type="text" id="organizationName" name="organizationName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="Your FPO / NGO / Company" />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Contact Name</label>
                  <input type="text" id="contactName" name="contactName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="Your name" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="you@org.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="+91 ..." />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="type" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Organisation Type</label>
                  <select id="type" name="type" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all">
                    <option value="" className="text-[#4B4B4B]">Select type</option>
                    <option value="fpo" className="text-[#4B4B4B]">FPO</option>
                    <option value="ngo" className="text-[#4B4B4B]">NGO</option>
                    <option value="retailer" className="text-[#4B4B4B]">Input Retailer</option>
                    <option value="institution" className="text-[#4B4B4B]">Research Institution</option>
                    <option value="government" className="text-[#4B4B4B]">Government Body</option>
                    <option value="other" className="text-[#4B4B4B]">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="state" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">State</label>
                  <input type="text" id="state" name="state" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="e.g. Maharashtra" />
                </div>
              </div>
              <div>
                <label htmlFor="farmersCount" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Approximate Farmer Count</label>
                <input type="number" id="farmersCount" name="farmersCount" className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="e.g. 5000" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all resize-none" placeholder="Tell us about your farmer network and what you are looking for..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all cursor-pointer mt-2">
                Submit Partnership Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4B4B4B] text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="text-xl font-extrabold text-white flex items-center gap-2 mb-4 tracking-tight">🦜 KisanAI</Link>
              <p className="text-white/60 text-sm leading-relaxed">AI farming assistant for every Indian farmer. Crop advice, weather, mandi prices, and schemes in your language.</p>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
                <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Organisations</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li>
                <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-white mb-3 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
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
