import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Partnerships",
  description:
    "Partner with KisanAI to deliver AI-powered farming advisory through FPOs, KVKs, and NGOs. Structured 90-day pilots with measurable outcomes.",
};

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Information Asymmetry",
    desc: "Farmers lack timely access to weather, mandi prices, and scheme information. Extension workers are stretched thin -- India has roughly 1 extension worker per 1,000 farmers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
    title: "Language Gaps",
    desc: "Scheme documents and advisories are published in English or Hindi. Farmers speaking regional languages cannot access benefits they are eligible for.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Low Scheme Uptake",
    desc: "PMFBY, PM-KISAN, and KCC have significant unclaimed benefits. Farmers do not know they qualify or cannot navigate the application process.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "No Measurable Impact",
    desc: "Current extension channels lack feedback loops. It is difficult to measure whether advisory content reaches farmers or changes behaviour.",
  },
];

const solutions = [
  { title: "Multilingual AI Advisory", desc: "Farmers ask questions in their language and get sourced answers from curated government and research content." },
  { title: "Scheme Eligibility Checker", desc: "Plain-language scheme matching based on crop, location, and land size. Direct links to application portals." },
  { title: "Disease Detection with Escalation", desc: "Photo-based crop disease diagnosis with confidence levels. Low-confidence cases routed to local experts." },
  { title: "Impact Dashboard", desc: "Real-time view of queries, topics, scheme lookups, and farmer engagement. Filterable by region and crop." },
];

const deploymentModels = [
  {
    title: "FPO Integration",
    desc: "Deploy KisanAI through existing FPO networks. The FPO admin gets a dashboard; farmers get the assistant via WhatsApp or web.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "KVK Channel",
    desc: "KVK scientists use KisanAI as a force multiplier. Pre-configured with region-specific crop calendars and local advisory content.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "NGO Partnership",
    desc: "NGOs with existing farmer networks onboard KisanAI as part of their extension programme. Co-branded, co-measured.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
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
  { label: "Queries Answered", desc: "Total farmer questions handled by the assistant" },
  { label: "Source Attribution Rate", desc: "Percentage of answers with verifiable source links" },
  { label: "Scheme Lookups", desc: "Number of government scheme eligibility checks performed" },
  { label: "Disease Scans", desc: "Crop disease photos analysed with diagnosis provided" },
  { label: "Farmer Retention", desc: "Percentage of farmers returning after first use" },
  { label: "Response Satisfaction", desc: "Helpful vs not-helpful feedback ratio" },
  { label: "Language Distribution", desc: "Queries broken down by language used" },
  { label: "Topic Heatmap", desc: "Most-asked questions by crop, region, and season" },
];

export default function GovernmentPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            KisanAI
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/government" className="text-primary font-semibold">Government</Link>
            <Link href="/investors" className="text-muted hover:text-primary">Investors</Link>
            <Link href="/partners" className="text-muted hover:text-primary">Partners</Link>
            <Link href="/research" className="text-muted hover:text-primary">Research</Link>
            <Link href="/impact" className="text-muted hover:text-primary">Impact</Link>
            <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Try KisanAI</Link>
          </div>
          <div className="md:hidden">
            <Link href="/" className="text-primary font-semibold text-sm">Home</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary-dark to-primary text-white py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">For Government & Public Institutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              AI-powered farming advisory at population scale
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
              Deliver multilingual, source-attributed crop advisory through FPOs, KVKs, and NGO networks. Structured pilots with measurable outcomes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pilot" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg hover:bg-green-50">
                Start a 90-Day Pilot
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Extension services are overstretched</h2>
              <p className="mt-4 text-lg text-muted">India has approximately 1 extension worker per 1,000 farmers. Critical information does not reach those who need it most.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-error flex items-center justify-center mb-4">{p.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Solution</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">One assistant, four public-good capabilities</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <article key={i} className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Public Impact */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Public Impact</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What structured advisory can achieve</h2>
              <p className="mt-4 text-lg text-muted">These are outcomes we aim to measure during pilots. We do not claim results until we have data.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Scheme Awareness", desc: "Help eligible farmers discover schemes they do not know about. Track scheme lookup-to-application intent." },
                { title: "Decision Speed", desc: "Reduce time from symptom observation to informed action. Measure query-to-answer latency and follow-up rates." },
                { title: "Information Quality", desc: "Replace WhatsApp rumours with sourced, verifiable answers. Track source attribution rate across all responses." },
                { title: "Extension Reach", desc: "Multiply the effective reach of each extension worker. Measure queries per FPO/KVK partner." },
              ].map((item, i) => (
                <div key={i} className="bg-surface rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Model */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Deployment Model</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Reach farmers through existing networks</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {deploymentModels.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">{d.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-muted leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Safety & Trust</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Designed for responsible deployment</h2>
            </div>
            <ul className="space-y-4">
              {safetyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 bg-surface rounded-xl p-5 border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-foreground leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 90-Day Pilot */}
        <section id="pilot" className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Pilot Proposal</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">90-day structured pilot</h2>
              <p className="mt-4 text-lg text-muted">A low-risk, measurable engagement designed to validate AI advisory in your farmer network.</p>
            </div>
            <div className="space-y-6">
              {pilotSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 bg-surface rounded-2xl p-6 border border-border">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 text-sm font-bold text-center leading-tight">{step.week}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics We Track */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">Metrics We Track</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Transparent, auditable reporting</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="bg-surface rounded-xl p-5 border border-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{m.label}</h4>
                    <p className="text-sm text-muted">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Start a conversation</h2>
            <p className="mt-4 text-lg text-amber-100 leading-relaxed">Interested in a pilot for your FPO, KVK, NGO, or state department? Share your details and we will get back to you within 3 business days.</p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <input type="hidden" name="type" value="government" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-amber-100 mb-1">Contact Name</label>
                  <input type="text" id="contactName" name="contactName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-amber-100 mb-1">Organisation</label>
                  <input type="text" id="organizationName" name="organizationName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="FPO / KVK / NGO / Dept" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-100 mb-1">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-amber-100 mb-1">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="+91 ..." />
                </div>
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-amber-100 mb-1">State</label>
                <input type="text" id="state" name="state" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="e.g. Maharashtra" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-100 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40 resize-none" placeholder="Tell us about your farmer network and what you are looking for..." />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-white text-earth font-bold rounded-xl text-lg hover:bg-amber-50 transition-colors">Submit Enquiry</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                KisanAI
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">AI farming assistant for every Indian farmer.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
                <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Organisations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li>
                <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
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
