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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
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
            <Link href="/investors" className="text-muted hover:text-primary transition-colors">Investors</Link>
            <Link href="/partners" className="text-primary border-b-2 border-primary pb-0.5">Partners</Link>
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-amber-300 font-bold text-sm tracking-wide uppercase mb-4">Partnerships</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight">
              Bring AI advisory to your farmers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
              Whether you are an FPO, NGO, input retailer, research institution, or government body -- we make it easy to offer your farmers trusted, multilingual AI advisory.
            </p>
            <div className="mt-10">
              <a 
                href="#partner-form" 
                className="btn-3d-saffron px-8 py-4 text-lg inline-flex items-center gap-2 group shadow-[0_5px_0_#9a3412]"
              >
                Become a Partner
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
              <p className="text-primary font-bold text-sm tracking-wide uppercase mb-3">Who We Work With</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Partnership models for every type of organisation
              </h2>
            </div>
            <div className="space-y-8">
              {partnerTypes.map((p, i) => (
                <article 
                  key={i} 
                  className="bg-surface rounded-3xl p-8 border-2 border-border shadow-[0_4px_0_rgba(0,0,0,0.03)] hover:shadow-none hover:translate-y-[4px] hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border-2 border-primary/5 shadow-[0_4px_0_rgba(22,101,52,0.08)]">
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-foreground mb-2">{p.title}</h3>
                      <p className="text-muted leading-relaxed text-sm mb-4">{p.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {p.benefits.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-xs text-muted">
                            <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
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
        <section className="py-20 sm:py-28 bg-surface-raised border-y-2 border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-bold text-sm tracking-wide uppercase mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                From conversation to deployment
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 stepper-dashed-path">
              {howItWorks.map((s, i) => (
                <div key={i} className="text-center group relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white text-primary text-xl font-extrabold flex items-center justify-center mx-auto mb-4 border-2 border-primary/20 shadow-[0_4px_0_rgba(22,101,52,0.15)] group-hover:scale-110 transition-transform duration-300">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted text-xs leading-relaxed max-w-[180px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Lead Form */}
        <section id="partner-form" className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white border-b-4 border-earth">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Become a partner</h2>
            <p className="mt-4 text-lg text-amber-100 leading-relaxed max-w-lg mx-auto">
              Tell us about your organisation and farmer network. We will get back to you within 3 business days to discuss a pilot.
            </p>
            <form className="mt-10 space-y-4 text-left" action="/api/partner-lead" method="POST">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="organizationName" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    Organisation Name
                  </label>
                  <input 
                    type="text" 
                    id="organizationName" 
                    name="organizationName" 
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                    placeholder="Your FPO / NGO / Company" 
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    Contact Name
                  </label>
                  <input 
                    type="text" 
                    id="contactName" 
                    name="contactName" 
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                    placeholder="Your name" 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                    placeholder="you@org.com" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                    placeholder="+91 ..." 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="type" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    Organisation Type
                  </label>
                  <select 
                    id="type" 
                    name="type" 
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                  >
                    <option value="" className="text-foreground">Select type</option>
                    <option value="fpo" className="text-foreground">FPO</option>
                    <option value="ngo" className="text-foreground">NGO</option>
                    <option value="retailer" className="text-foreground">Input Retailer</option>
                    <option value="institution" className="text-foreground">Research Institution</option>
                    <option value="government" className="text-foreground">Government Body</option>
                    <option value="other" className="text-foreground">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="state" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                    State
                  </label>
                  <input 
                    type="text" 
                    id="state" 
                    name="state" 
                    required 
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                    placeholder="e.g. Maharashtra" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="farmersCount" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                  Approximate Farmer Count
                </label>
                <input 
                  type="number" 
                  id="farmersCount" 
                  name="farmersCount" 
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all" 
                  placeholder="e.g. 5000" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-amber-100 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all resize-none" 
                  placeholder="Tell us about your farmer network and what you are looking for..." 
                />
              </div>
              <button 
                type="submit" 
                className="btn-3d-saffron w-full sm:w-auto px-8 py-4 text-lg shadow-[0_5px_0_#9a3412] mt-2 cursor-pointer"
              >
                Submit Partnership Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="text-xl font-extrabold text-white flex items-center gap-2 mb-4 tracking-tight">
                <div className="w-7 h-7 rounded-md overflow-hidden bg-white flex items-center justify-center border border-white/20">
                  <img src="/logo.png" alt="KisanAI Logo" className="w-6 h-6 object-contain" />
                </div>
                KisanAI
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI farming assistant for every Indian farmer. Crop advice, weather, mandi prices, and schemes in your language.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/application" className="hover:text-white transition-colors">Try KisanAI</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
                <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Organisations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/government" className="hover:text-white transition-colors">Government</Link></li>
                <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
            <p className="text-xs text-gray-500">KisanAI provides decision support, not regulated agricultural, financial, or legal advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
