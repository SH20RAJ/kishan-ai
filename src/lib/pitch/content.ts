import type { PitchMetric, RiskItem, SectionLink, TimelineItem } from "./types";

export const sectionLinks: SectionLink[] = [
  { id: "hero", label: "Hero" },
  { id: "executive-snapshot", label: "Snapshot" },
  { id: "problem", label: "Problem" },
  { id: "why-now", label: "Why Now" },
  { id: "market-opportunity", label: "Market" },
  { id: "product", label: "Product" },
  { id: "how-it-works", label: "How It Works" },
  { id: "business-model", label: "Business Model" },
  { id: "gtm", label: "GTM" },
  { id: "competition", label: "Competition" },
  { id: "technical-moat", label: "Moat" },
  { id: "ai-safety", label: "Safety" },
  { id: "pilot", label: "Pilot" },
  { id: "financials", label: "Financials" },
  { id: "roadmap", label: "Roadmap" },
  { id: "investor-qa", label: "Q&A" },
  { id: "data-proof", label: "Proof Room" },
  { id: "risks", label: "Risks" },
  { id: "ask", label: "Ask" },
  { id: "final-cta", label: "CTA" },
];

export const heroMetrics: PitchMetric[] = [
  {
    label: "Farmer ecosystem scale",
    value: "9.7 Cr",
    detail: "PM-KISAN farmer beneficiary scale used as a planning anchor, not direct paid users.",
    claimId: "claim-pm-kisan",
    sourceIds: ["pm-kisan-toi"],
    confidence: "medium",
    labelType: "verified",
  },
  {
    label: "Digital ag adoption proof",
    value: "5M users",
    detail: "FarmRise scale shows farmer-facing digital agriculture can reach mass adoption.",
    claimId: "claim-farmrise",
    sourceIds: ["et-farmrise"],
    confidence: "medium",
    labelType: "verified",
  },
  {
    label: "Planning TAM",
    value: "Rs 58.2B",
    detail: "Assumption-led model: 97M farmers x Rs 600 per farmer per year.",
    claimId: "claim-tam",
    sourceIds: ["pm-kisan-toi", "internal-assumptions"],
    confidence: "low",
    labelType: "assumption",
  },
  {
    label: "Trust posture",
    value: "0 fake traction",
    detail: "No public users, revenue, or partnerships are claimed without proof.",
    claimId: "claim-traction-gap",
    sourceIds: ["internal-assumptions"],
    confidence: "high",
    labelType: "risk",
  },
];

export const executiveSnapshot = [
  ["Company type", "AI agriculture assistant / decision infrastructure"],
  ["First user", "Indian farmers and farmer-family decision helpers"],
  ["First buyer", "FPOs, NGOs, government pilots, agri partners"],
  ["Wedge", "Disease triage + weather-to-action + mandi/scheme assistant"],
  ["Distribution", "B2B2C partner-led, WhatsApp/PWA-first"],
  ["Revenue", "Pilot contracts, SaaS, partner workflows, premium advisory"],
  ["Moat", "Localized data, trust UX, partner distribution, safety layer"],
  ["Current stage", "Pilot-ready / early-stage"],
  ["Biggest risk", "Trust, distribution, retention, source quality"],
  ["Next proof", "90-day pilot with measurable engagement and outcomes"],
];

export const problemPoints = [
  {
    title: "Fragmented advice",
    body: "Farmers stitch together dealer advice, WhatsApp groups, portals, mandi agents, weather apps, and local experts.",
    sourceIds: ["founder-reddit", "toi-kisan-kapas"],
  },
  {
    title: "Language and documentation friction",
    body: "If the farmer cannot understand the document, scheme, label, or app flow, the digital system becomes another intermediary.",
    sourceIds: ["toi-kisan-kapas"],
  },
  {
    title: "Weather and disease urgency",
    body: "A late or wrong decision after rain, pest signs, or disease symptoms can turn into real debt and crop loss.",
    sourceIds: ["toi-onion-losses"],
  },
  {
    title: "Trust failure in apps",
    body: "Broken sections, failed land-detail entry, and repeated office trips show why reliability matters as much as AI capability.",
    sourceIds: ["toi-kisan-kapas", "toi-andhra-procurement"],
  },
];

export const whyNowCards = [
  {
    title: "Government is validating AI advisory",
    body: "Bharat-VISTAAR makes multilingual AI farm advisory a public-sector category, not just a startup narrative.",
    sourceIds: ["toi-bharat-vistaar"],
  },
  {
    title: "Farmer digital adoption is already real",
    body: "FarmRise crossing 5 million users is category proof. It is not KisanAI traction, but it proves farmers can adopt digital agriculture tools.",
    sourceIds: ["et-farmrise"],
  },
  {
    title: "AI can now support vernacular workflows",
    body: "Multilingual QA, retrieval, and multimodal routing make it practical to build a source-grounded assistant around local context.",
    sourceIds: ["arxiv-agri-qa", "arxiv-aiep"],
  },
  {
    title: "Risk is rising at the decision layer",
    body: "Weather, disease, price, and scheme moments create repeated demand for fast, trusted, local guidance.",
    sourceIds: ["toi-onion-losses", "reuters-cropin"],
  },
];

export const productModules = [
  ["Multilingual farm chat", "Advice is scattered and not language-first", "Ask in local language, get source-backed next step", "First query completion, repeat questions"],
  ["Crop disease triage", "Symptom decisions are urgent and risky", "Upload photo, get possible issue, confidence, next step, caution", "Scan completion, escalation rate"],
  ["Weather-to-action advisory", "Forecasts are not farm instructions", "Convert weather into crop-stage action and risk note", "Weather advisory opens, helpfulness"],
  ["Mandi price context", "Raw prices lack local interpretation", "Show nearby price context, trend, and freshness", "Price checks around market days"],
  ["Scheme guidance", "Scheme docs are difficult to interpret", "Explain eligibility and document checklist", "Scheme completion intent"],
  ["Partner/FPO dashboard", "Field teams lack cohort visibility", "Show usage, topics, escalations, and feedback", "Partner dashboard usage"],
  ["Feedback and escalation", "Advice quality must improve safely", "Capture helpfulness, uncertainty, and action taken", "CSAT, grounded-answer rate"],
];

export const howItWorksSteps = [
  "Ask, upload, or select crop",
  "Intent and risk classification",
  "Crop, location, language, and stage context",
  "Verified source retrieval and live connector checks",
  "AI answer with caution, confidence, and source",
  "Farmer action, escalation, or feedback",
  "Partner dashboard and learning loop",
];

export const businessModelRows = [
  ["Government / NGO pilot", "District office, NGO, CSR program", "Fixed 90-day pilot fee or covered-farmer fee", "Procurement is tied to measurable public-good outputs", "Long sales cycle and proof burden"],
  ["FPO SaaS", "FPO or cooperative", "Rs 15-30 per covered farmer/month assumption", "Concentrated cohorts and member support value", "Small budgets and renewal proof"],
  ["Agri partner workflow", "Input company, retailer network, agribusiness", "Annual contract plus dashboard seats", "Partners need farmer engagement and support automation", "Advice neutrality risk"],
  ["Farmer premium", "Farmer or family decision helper", "Rs 49/month or Rs 399-699/year assumption", "Expert escalation and alerts can become paid", "Only after trust and retention"],
  ["Enterprise/API", "Insurer, lender, white-label partner", "Custom annual contract assumption", "High ACV if advisory and data quality are proven", "Requires compliance and reliability"],
];

export const gtmChannels = [
  ["FPOs", "Use field staff and member groups to onboard concentrated farmer cohorts."],
  ["NGOs and CSR programs", "Bundle KisanAI into livelihood, climate resilience, or scheme-awareness pilots."],
  ["Government pilots", "Start as a 90-day measurable proposal, not a claimed partnership."],
  ["KVK and extension networks", "Escalate hard cases and use demos to build credibility."],
  ["Agri-input retailers", "Use QR and assisted onboarding at high-intent purchase moments."],
  ["WhatsApp/PWA", "Reduce install friction and support family-assisted use."],
];

export const competitors = [
  ["Existing agri apps", "Scale, content, category familiarity", "Often point-solution, commerce-first, or less workflow-embedded", "Simplest trusted decision layer inside farmer workflows"],
  ["Government platforms", "Legitimacy and scale", "May be complex, broad, or slow to localize UX", "Interprets and explains public systems, does not replace them"],
  ["KVK/extension officers", "High trust and domain expertise", "Human capacity is limited", "Triage common questions and escalate uncertain cases"],
  ["WhatsApp groups", "Already used and socially trusted", "Unverified, inconsistent, and hard to audit", "Source-backed answers that can still be shared"],
  ["Input dealers", "Local access and farmer relationships", "Potential bias toward product sales", "Neutral second opinion with disclosed sources"],
  ["Mandi agents", "Market knowledge and buyer access", "Information asymmetry and dependence", "Fresh price context and decision support"],
  ["ChatGPT/Gemini", "Powerful general models", "No local workflow, live data, safety, or partner distribution by default", "Agriculture-specific orchestration and trust layer"],
  ["Plantix", "Crop disease brand and scale", "Disease-first and possible commerce trust tension", "Broader decision assistant with escalation and transparency"],
  ["DeHaat / Cropin / FarmRise", "Distribution, enterprise depth, and category proof", "Not the same lightweight assistant-first wedge", "Pilot-ready vernacular decision layer for partners"],
];

export const moatLayers = [
  "Vernacular UX tuned to farmer and family-assisted use",
  "Localized crop-region knowledge base with source metadata",
  "Verified source corpus and live freshness labels",
  "Partner distribution through FPOs, NGOs, government pilots, and agri institutions",
  "Crop/location-specific interaction data and feedback loops",
  "Safety, abstention, and escalation infrastructure",
  "Partner dashboard for cohort support and measurable outcomes",
  "Low-friction WhatsApp/PWA distribution",
  "Trust through transparency rather than model mystique",
];

export const safetyRisks: RiskItem[] = [
  { risk: "Hallucination", whyItMatters: "A confident wrong answer can damage crops, money, and trust.", mitigation: "Source-grounded answers, abstention, confidence labels, and escalation for high-risk cases." },
  { risk: "Wrong crop advice", whyItMatters: "Disease and chemical guidance can create real field harm.", mitigation: "Use 'possible issue', require verified source for pesticide/dosage, and route uncertain cases to experts." },
  { risk: "Outdated scheme data", whyItMatters: "Farmers may waste time or miss benefits.", mitigation: "Freshness labels, official source links, and no eligibility guarantees." },
  { risk: "Outdated mandi data", whyItMatters: "Price decisions are time-sensitive.", mitigation: "Show timestamp, source, and uncertainty. Avoid trading promises." },
  { risk: "Over-reliance", whyItMatters: "Farmers may treat AI as final expert advice.", mitigation: "Clear decision-support framing and expert escalation prompts." },
  { risk: "Privacy concerns", whyItMatters: "Images, location, phone, crop and chat data are sensitive.", mitigation: "Consent, minimization, retention windows, deletion process, RBAC, and audit logs." },
  { risk: "Low digital literacy", whyItMatters: "A strong product can still fail if onboarding is too complex.", mitigation: "Assisted onboarding, voice/image input, local language, and no mandatory long profile." },
  { risk: "Unit economics", whyItMatters: "Direct B2C CAC can overwhelm low-ticket subscriptions.", mitigation: "Partner-led cohorts first, dashboard value, and careful AI cost controls." },
];

export const pilotPlan = {
  objective: "Validate repeatable, safe, source-backed advisory usage in one crop/geography cohort over 90 days.",
  attributes: [
    ["Target geography", "One district or crop cluster selected with partner input"],
    ["Target farmers", "500-2,000 farmers or assisted beneficiaries in first pilot"],
    ["Crops", "One primary crop plus limited adjacent crop support"],
    ["Languages", "One dominant regional language plus Hindi/English fallback"],
    ["Partner roles", "Onboarding, field feedback, expert escalation, outcome review"],
    ["Advisory modules", "Disease triage, weather-to-action, mandi context, scheme guidance"],
    ["Privacy/safety", "Consent for image/location, source labels, audit logs, no unsupported claims"],
    ["Expected outputs", "Pilot report, usage dashboard, risk log, conversion recommendation"],
  ],
  kpis: [
    "Farmers onboarded",
    "Weekly active farmers",
    "Queries per farmer",
    "Disease scans",
    "Weather advisory opens",
    "Scheme guidance completions",
    "Mandi checks",
    "Escalated cases",
    "Answer helpfulness score",
    "Repeat usage",
    "Partner dashboard usage",
    "Cost per active farmer",
  ],
};

export const roadmap: TimelineItem[] = [
  {
    timeframe: "0-90 days",
    title: "Pilot-ready wedge",
    items: ["One crop cluster", "Advisory MVP", "Partner dashboard", "Safety system", "Feedback and retention measurement"],
  },
  {
    timeframe: "3-6 months",
    title: "Paid pilot conversion",
    items: ["Add more crops carefully", "Improve disease triage", "Add voice where needed", "Expand partner channels", "Start paid pilots"],
  },
  {
    timeframe: "6-12 months",
    title: "Repeatable B2B2C motion",
    items: ["Multi-state expansion", "B2B SaaS contracts", "Marketplace-lite referrals", "Expert escalation network", "More languages"],
  },
  {
    timeframe: "12-24 months",
    title: "Infrastructure layer",
    items: ["Enterprise/white-label", "Insurance and lending partnerships", "Procurement intelligence", "Climate advisory", "Similar emerging markets"],
  },
];

export const useOfFunds = [
  "Product and AI safety",
  "Agronomy expert review",
  "Data and source corpus building",
  "Pilot deployment",
  "Field onboarding",
  "Partner dashboard",
  "Voice and regional language UX",
  "Compliance and security",
  "GTM and partnerships",
];

