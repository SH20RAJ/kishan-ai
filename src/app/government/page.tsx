import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Partnerships",
  description:
    "Partner with KisanAI to deliver AI-powered farming advisory through FPOs, KVKs, and NGOs. Structured 90-day pilots with measurable outcomes.",
};

const problems = [
  { emoji: "⚠️", title: "Information Asymmetry", desc: "Farmers lack timely access to weather, mandi prices, and scheme information. Extension workers are stretched thin -- India has roughly 1 extension worker per 1,000 farmers." },
  { emoji: "🌐", title: "Language Gaps", desc: "Scheme documents and advisories are published in English or Hindi. Farmers speaking regional languages cannot access benefits they are eligible for." },
  { emoji: "📋", title: "Low Scheme Uptake", desc: "PMFBY, PM-KISAN, and KCC have significant unclaimed benefits. Farmers do not know they qualify or cannot navigate the application process." },
  { emoji: "📊", title: "No Measurable Impact", desc: "Current extension channels lack feedback loops. It is difficult to measure whether advisory content reaches farmers or changes behaviour." },
];

const solutions = [
  { title: "Multilingual AI Advisory", desc: "Farmers ask questions in their language and get sourced answers from curated government and research content." },
  { title: "Scheme Eligibility Checker", desc: "Plain-language scheme matching based on crop, location, and land size. Direct links to application portals." },
  { title: "Disease Detection with Escalation", desc: "Photo-based crop disease diagnosis with confidence levels. Low-confidence cases routed to local experts." },
  { title: "Impact Dashboard", desc: "Real-time view of queries, topics, scheme lookups, and farmer engagement. Filterable by region and crop." },
];

const deploymentModels = [
  { title: "FPO Integration", desc: "Deploy KisanAI through existing FPO networks. The FPO admin gets a dashboard; farmers get the assistant via WhatsApp or web.", emoji: "👥" },
  { title: "KVK Channel", desc: "KVK scientists use KisanAI as a force multiplier. Pre-configured with region-specific crop calendars and local advisory content.", emoji: "🎓" },
  { title: "NGO Partnership", desc: "NGOs with existing farmer networks onboard KisanAI as part of their extension programme. Co-branded, co-measured.", emoji: "💚" },
];

const safetyPoints = [
  "Every answer is source-attributed. If we do not know, we say so.",
  "Disease detection includes confidence levels and recommends expert consultation for low-confidence cases.",
  "We do not collect land records, Aadhaar, or financial data from farmers.",
  "All data is encrypted in transit and at rest. We follow DPDP Act guidelines.",
  "We do not sell or share farmer data with third parties.",
  "Content is curated from ICAR, KVK, IMD, AgMarkNet, and official government portals.",
];

const pilotSteps = [
  { week: "Week 1-2", title: "Setup & Onboarding", desc: "Define pilot geography, crops, and success metrics. Configure regional content. Train partner staff." },
  { week: "Week 3-4", title: "Soft Launch", desc: "Deploy to 50-100 farmers through partner network. Collect baseline data. Monitor query quality." },
  { week: "Week 5-8", title: "Scale & Iterate", desc: "Expand to 500+ farmers. Refine answers based on feedback. Add local content. Track engagement metrics." },
  { week: "Week 9-12", title: "Measure & Report", desc: "Compile impact report. Farmer satisfaction survey. Recommendation for scale-up. Handover documentation." },
];

const metrics = [
  { label: "Queries Answered", desc: "Total farmer questions handled by the assistant", emoji: "💬" },
  { label: "Source Attribution Rate", desc: "Percentage of answers with verifiable source links", emoji: "🔗" },
  { label: "Scheme Lookups", desc: "Number of government scheme eligibility checks performed", emoji: "📋" },
  { label: "Disease Scans", desc: "Crop disease photos analysed with diagnosis provided", emoji: "🔬" },
  { label: "Farmer Retention", desc: "Percentage of farmers returning after first use", emoji: "🔄" },
  { label: "Response Satisfaction", desc: "Helpful vs not-helpful feedback ratio", emoji: "👍" },
  { label: "Language Distribution", desc: "Queries broken down by language used", emoji: "🌐" },
  { label: "Topic Heatmap", desc: "Most-asked questions by crop, region, and season", emoji: "🔥" },
];

export default function GovernmentPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[#4B4B4B] flex items-center gap-2">🦜 KisanAI</Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="/government" className="text-[#58CC02]">Government</Link>
            <Link href="/investors" className="text-[#777777] hover:text-[#4B4B4B]">Investors</Link>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-white/80 font-extrabold text-sm tracking-wide uppercase mb-4">For Government & Public Institutions</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">🌾 AI-powered farming advisory at population scale</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">Deliver multilingual, source-attributed crop advisory through FPOs, KVKs, and NGO networks. Structured pilots with measurable outcomes.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pilot" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E5E5E5] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">🚀 Start a 90-Day Pilot</a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all">📞 Contact Us</a>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Extension services are overstretched</h2>
              <p className="mt-4 text-lg text-[#777777]">India has approximately 1 extension worker per 1,000 farmers. Critical information does not reach those who need it most.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <article key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-4xl mb-4">{p.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{p.title}</h3>
                  <p className="text-[#777777] text-sm leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Our Solution</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">One assistant, four public-good capabilities</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <article key={i} className="bg-white rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] hover:border-[#58CC02]/30 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#58CC02]/10 text-[#58CC02] flex items-center justify-center mb-5 text-2xl">✅</div>
                  <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-2">{s.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Public Impact</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">What structured advisory can achieve</h2>
              <p className="mt-4 text-lg text-[#777777]">These are outcomes we aim to measure during pilots. We do not claim results until we have data.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Scheme Awareness", desc: "Help eligible farmers discover schemes they do not know about. Track scheme lookup-to-application intent.", emoji: "📋" },
                { title: "Decision Speed", desc: "Reduce time from symptom observation to informed action. Measure query-to-answer latency and follow-up rates.", emoji: "⚡" },
                { title: "Information Quality", desc: "Replace WhatsApp rumours with sourced, verifiable answers. Track source attribution rate across all responses.", emoji: "✅" },
                { title: "Extension Reach", desc: "Multiply the effective reach of each extension worker. Measure queries per FPO/KVK partner.", emoji: "📡" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-2">{item.title}</h3>
                  <p className="text-[#777777] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Deployment Model</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Reach farmers through existing networks</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {deploymentModels.map((d, i) => (
                <div key={i} className="text-center bg-white rounded-2xl p-8 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="text-5xl mb-5">{d.emoji}</div>
                  <h3 className="text-xl font-extrabold text-[#4B4B4B] mb-3">{d.title}</h3>
                  <p className="text-[#777777] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Safety & Trust</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">Designed for responsible deployment</h2>
            </div>
            <ul className="space-y-4">
              {safetyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="w-8 h-8 rounded-full bg-[#58CC02] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-extrabold">✓</div>
                  <p className="text-[#4B4B4B] leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pilot" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Pilot Proposal</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">🗓️ 90-day structured pilot</h2>
              <p className="mt-4 text-lg text-[#777777]">A low-risk, measurable engagement designed to validate AI advisory in your farmer network.</p>
            </div>
            <div className="space-y-6">
              {pilotSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 bg-white rounded-2xl p-6 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5]">
                  <div className="w-16 h-16 rounded-2xl bg-[#58CC02] text-white flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-center leading-tight shadow-[0_4px_0_#46A302]">{step.week}</div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#4B4B4B] mb-1">{step.title}</h3>
                    <p className="text-[#777777] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#58CC02] font-extrabold text-sm tracking-wide uppercase mb-3">Metrics We Track</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B4B4B]">📊 Transparent, auditable reporting</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border-2 border-[#E5E5E5] shadow-[0_2px_0_#E5E5E5] flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{m.emoji}</div>
                  <div>
                    <h4 className="font-extrabold text-[#4B4B4B]">{m.label}</h4>
                    <p className="text-sm text-[#777777]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-28 bg-[#4B4B4B] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">📞 Start a conversation</h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">Interested in a pilot for your FPO, KVK, NGO, or state department? Share your details and we will get back to you within 3 business days.</p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <input type="hidden" name="type" value="government" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="contactName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Contact Name</label><input type="text" id="contactName" name="contactName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="Your name" /></div>
                <div><label htmlFor="organizationName" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Organisation</label><input type="text" id="organizationName" name="organizationName" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="FPO / KVK / NGO / Dept" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="email" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Email</label><input type="email" id="email" name="email" required className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="you@example.com" /></div>
                <div><label htmlFor="phone" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="+91 ..." /></div>
              </div>
              <div><label htmlFor="state" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">State</label><input type="text" id="state" name="state" className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all" placeholder="e.g. Maharashtra" /></div>
              <div><label htmlFor="message" className="block text-xs font-extrabold text-white/70 uppercase tracking-wider mb-2">Message</label><textarea id="message" name="message" rows={4} className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#1CB0F6] focus:ring-2 focus:ring-[#1CB0F6]/20 transition-all resize-none" placeholder="Tell us about your farmer network and what you are looking for..." /></div>
              <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[#FFC800] text-[#4B4B4B] font-extrabold rounded-2xl text-lg shadow-[0_5px_0_#E6B400] hover:brightness-105 active:translate-y-[5px] active:shadow-none transition-all cursor-pointer">Submit Enquiry</button>
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
