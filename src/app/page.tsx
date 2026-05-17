import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KisanAI - AI Farming Assistant for Every Indian Farmer",
  description:
    "Crop advice, weather alerts, mandi prices, and government schemes in your language. One trusted assistant for every Indian farmer.",
};

/* ─── Shared data ─── */

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: "Fragmented Information",
    desc: "Farmers juggle weather apps, mandi portals, dealer advice, and WhatsApp groups -- none of it connected, much of it unverified.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
    title: "Language Barriers",
    desc: "Most digital farming tools are in English or Hindi. Farmers who speak Tamil, Telugu, Kannada, Marathi, or Bengali are left behind.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Complex Government Schemes",
    desc: "Hundreds of schemes exist, but eligibility rules, documents, and deadlines are buried in PDFs and bureaucratic language.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 6.174a1.125 1.125 0 0 1-1.04.701H8.51a1.125 1.125 0 0 1-1.04-.7L5 14.5m14 0H5" />
      </svg>
    ),
    title: "Disease Uncertainty",
    desc: "When a crop shows symptoms, farmers guess or rely on local dealers. Wrong treatments waste money; delays cost the harvest.",
  },
];

const modules = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: "Chat Assistant",
    desc: "Ask any farming question in your language. Get clear, sourced answers -- not jargon.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
    title: "Disease Detection",
    desc: "Take a photo of a diseased leaf. Get a diagnosis with confidence level and a next-step checklist.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "Weather Advisory",
    desc: "Hyper-local weather with crop-specific advice. Know what to do today and tomorrow, not just the forecast.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Mandi Prices",
    desc: "Real-time prices from nearby mandis with trend context. Know when to sell, not just what the price is.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: "Government Schemes",
    desc: "Find schemes you qualify for. Get plain-language explanations of eligibility, documents, and deadlines.",
  },
];

const steps = [
  {
    step: "1",
    title: "Ask",
    desc: "Type a question, upload a photo, or speak in your language. No registration needed to start.",
  },
  {
    step: "2",
    title: "Get Answer",
    desc: "Receive a clear, sourced response with confidence level. If we are not sure, we say so.",
  },
  {
    step: "3",
    title: "Take Action",
    desc: "Follow the checklist. Share with your group. Come back when the next decision moment hits.",
  },
];

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Source-Aware AI",
    desc: "Every answer links to its source. We retrieve from curated, official agricultural knowledge -- not open internet guessing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Expert Verification",
    desc: "Knowledge base curated from KVK advisories, ICAR resources, and state agriculture department content.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Government Data",
    desc: "Mandi prices from AgMarkNet. Scheme info from official portals. Weather from IMD. We do not invent data.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Privacy-First",
    desc: "No mandatory registration. No land records required. Your data is encrypted and never sold.",
  },
];

const faqs = [
  {
    q: "Is KisanAI free for farmers?",
    a: "Yes, the core assistant is free. Farmers can ask questions, check prices, and get weather advice without paying. We may introduce premium features later, but basic advisory will remain free.",
  },
  {
    q: "Which languages does KisanAI support?",
    a: "We are building for Indian farmers, so language is a priority. We currently support Hindi and are adding regional languages starting with the most-spoken ones in our pilot regions. The goal is every major Indian language.",
  },
  {
    q: "How accurate is the crop disease detection?",
    a: "Our disease detection provides a diagnosis with a confidence level. When confidence is low, we say so and suggest consulting a local expert. We never recommend chemicals without showing the source and uncertainty.",
  },
  {
    q: "Where does KisanAI get its information?",
    a: "We retrieve from curated sources: ICAR advisories, KVK content, state agriculture departments, AgMarkNet mandi data, IMD weather, and official government scheme portals. Every answer links to its source.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can start asking questions immediately. Account creation is optional and only used to save your history and preferences. We follow DPDP Act guidelines for data protection.",
  },
  {
    q: "Can KisanAI replace my local agriculture officer?",
    a: "No, and it is not designed to. KisanAI is a decision-support tool that helps you prepare questions, understand options, and act faster. For complex or high-stakes decisions, we always recommend consulting your local KVK or agriculture officer.",
  },
  {
    q: "How is KisanAI different from other farming apps?",
    a: "Most farming apps focus on one thing -- weather, or prices, or disease. KisanAI combines all of these into one conversation in your language. We also show our sources and admit when we are uncertain, which most apps do not.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. We encrypt data in transit and at rest. We do not require land records or identity documents. We do not sell farmer data to anyone. Our privacy policy is written in plain language.",
  },
];

/* ─── Client Waitlist Form ─── */
function WaitlistInline() {
  return (
    <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="/api/waitlist" method="POST">
      <input type="text" name="name" placeholder="Your name" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" aria-label="Your name" />
      <input type="tel" name="phone" placeholder="Phone number" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-white/40" aria-label="Phone number" />
      <input type="hidden" name="state" value="Unknown" />
      <button type="submit" className="px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-green-50 transition-colors whitespace-nowrap">Join Waitlist</button>
    </form>
  );
}

/* ─── Page ─── */

export default function HomePage() {
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
            <Link href="/government" className="text-muted hover:text-primary">Government</Link>
            <Link href="/investors" className="text-muted hover:text-primary">Investors</Link>
            <Link href="/partners" className="text-muted hover:text-primary">Partners</Link>
            <Link href="/research" className="text-muted hover:text-primary">Research</Link>
            <Link href="/impact" className="text-muted hover:text-primary">Impact</Link>
            <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Try KisanAI</Link>
          </div>
          <div className="md:hidden">
            <Link href="/application" className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark">Try KisanAI</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark to-primary text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-saffron rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
            <div className="max-w-3xl">
              <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">AI Farming Assistant</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                AI farming assistant for every Indian farmer
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl">
                Get crop advice, weather alerts, mandi prices, and government scheme guidance in your language. One trusted assistant for the decisions that matter most.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/application"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl text-lg hover:bg-green-50 transition-colors"
                >
                  Try KisanAI
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-colors"
                >
                  Partner with Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Farming decisions should not be this hard</h2>
              <p className="mt-4 text-lg text-muted">
                Indian farmers lose money every season -- not because of lack of skill, but because critical information is scattered, late, or locked behind language and complexity barriers.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((p, i) => (
                <article key={i} className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-error flex items-center justify-center mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modules */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Product</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">One assistant, five capabilities</h2>
              <p className="mt-4 text-lg text-muted">
                Instead of juggling five apps, get everything in one conversation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, i) => (
                <article key={i} className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    {m.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted leading-relaxed">{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Three steps. No friction.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/application"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary-dark"
              >
                Try It Now
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Trust & Safety</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Built for trust, not just speed</h2>
              <p className="mt-4 text-lg text-muted">
                In agriculture, wrong advice costs real money. We take accuracy seriously.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {trustPoints.map((t, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{t.title}</h3>
                    <p className="text-muted leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government / FPO CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-earth to-earth-light text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Pilot with your organisation</h2>
            <p className="mt-4 text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              We are looking for FPOs, KVKs, NGOs, and state agriculture departments to run structured 90-day pilots. Help your farmers access better advisory while we learn what works.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/government"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-earth font-bold rounded-xl text-lg hover:bg-amber-50"
              >
                Government Partnerships
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/10"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Investor Teaser */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">For Investors</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A real problem, a clear market</h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">
                  India has ~9.7 crore digitally traceable farmers via PM-KISAN. Rural internet penetration exceeds 41%. 5G covers 99% of districts. Yet no farmer-first, vernacular AI assistant has achieved meaningful scale.
                </p>
                <p className="mt-4 text-muted leading-relaxed">
                  Our conservative TAM at Rs 600/farmer/year is Rs 58.2 billion. The opportunity is not in inventing farmer advice -- it is in becoming the lowest-friction, highest-trust wrapper around existing information channels.
                </p>
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:text-primary-dark"
                >
                  Read the investor brief
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">9.7 Cr</p>
                  <p className="text-sm text-muted mt-1">Digitally traceable farmers (PM-KISAN)</p>
                </div>
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">41.7%</p>
                  <p className="text-sm text-muted mt-1">Rural internet penetration</p>
                </div>
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">99%</p>
                  <p className="text-sm text-muted mt-1">Districts with 5G coverage</p>
                </div>
                <div className="bg-surface rounded-2xl p-6 border border-border">
                  <p className="text-3xl font-bold text-primary">Rs 58.2B</p>
                  <p className="text-sm text-muted mt-1">Conservative TAM</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted italic">Market figures are planning assumptions based on public data, not audited projections. See Research page for methodology.</p>
          </div>
        </section>

        {/* Research-backed Insights */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Research</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Grounded in evidence</h2>
              <p className="mt-4 text-lg text-muted">
                We built KisanAI because the pain is documented and the timing is right.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Farmer pain is real</h3>
                <blockquote className="text-muted italic border-l-4 border-saffron pl-4 mb-4">
                  &ldquo;I have no other option but to sell my land to repay the loan.&rdquo;
                </blockquote>
                <p className="text-sm text-muted">
                  Public reports show onion farmers spending Rs 80,000/acre while receiving Rs 300-1,200 for damaged produce. Financial distress from information gaps is measurable and immediate.
                </p>
              </article>
              <article className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Market is timing right</h3>
                <p className="text-muted mb-4">
                  The government launched Bharat-VISTAAR (multilingual AI advisory) in 2026. Bayer FarmRise crossed 5M users. DeHaat hit Rs 3,000 Cr revenue. The category is validated.
                </p>
                <p className="text-sm text-muted">
                  Our opportunity: be the simplest, most trusted operational wrapper -- not the biggest platform.
                </p>
              </article>
              <article className="bg-surface rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3">Technical approach works</h3>
                <p className="text-muted mb-4">
                  Academic research on Indian agricultural QA systems shows curated corpora, latency control, and language quality matter more than broad surface area at MVP stage.
                </p>
                <p className="text-sm text-muted">
                  We use RAG over curated sources with explicit abstention -- not open-ended generation.
                </p>
              </article>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark"
              >
                Read our full research
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28 bg-surface-raised">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-secondary font-semibold text-sm tracking-wide uppercase mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Common questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-surface rounded-2xl border border-border overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-foreground hover:text-primary transition-colors list-none">
                    <span className="pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-muted flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-muted leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Waitlist */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-primary-dark to-primary text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Join the waitlist</h2>
            <p className="mt-4 text-lg text-green-100 leading-relaxed">
              We are onboarding farmers, FPOs, and partners region by region. Sign up to get early access when we launch in your area.
            </p>
            <WaitlistInline />
            <p className="mt-4 text-sm text-green-200">We will only contact you about KisanAI access. No spam.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                KisanAI
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI farming assistant for every Indian farmer. Crop advice, weather, mandi prices, and schemes in your language.
              </p>
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
