export const marketSizing = [
  {
    layer: "TAM",
    definition: "Indian farmers addressable by digital agriculture advisory",
    assumption: "9.7 crore PM-KISAN-linked farmer beneficiaries",
    calculation: "97,000,000 x Rs 600/year",
    annualValue: "Rs 58.2B",
    confidence: "Assumption-led",
  },
  {
    layer: "SAM",
    definition: "Farmers reachable through smartphone-assisted, vernacular, partner-led advisory",
    assumption: "45% near-term reachability discount",
    calculation: "43,650,000 x Rs 600/year",
    annualValue: "Rs 26.19B",
    confidence: "Assumption-led",
  },
  {
    layer: "SOM",
    definition: "Initial covered farmers through FPO, government, NGO, and agri-input pilots",
    assumption: "0.5% of SAM by year three",
    calculation: "218,250 covered farmers x Rs 600/year",
    annualValue: "Rs 130.95M",
    confidence: "Scenario, not forecast",
  },
];

export const financialScenarios = [
  {
    scenario: "Conservative pilot-led",
    farmersCovered: "25,000",
    revenueModel: "Paid pilots and small FPO contracts",
    annualRevenue: "Rs 54L",
    keyAssumption: "Rs 216 per covered farmer per year; partner-led CAC remains low",
  },
  {
    scenario: "Base partner SaaS",
    farmersCovered: "100,000",
    revenueModel: "FPO/NGO dashboard + advisory automation",
    annualRevenue: "Rs 2.16Cr",
    keyAssumption: "Multiple annual contracts renew after engagement proof",
  },
  {
    scenario: "Aggressive multi-state",
    farmersCovered: "250,000",
    revenueModel: "B2B2C contracts + enterprise/API pilots",
    annualRevenue: "Rs 5.4Cr plus enterprise upside",
    keyAssumption: "State/crop expansion does not dilute answer quality",
  },
];

export const costBuckets = [
  {
    bucket: "AI inference",
    driver: "Query volume, image triage, voice usage, model mix",
    reduction: "Routing, retrieval, caching, templates, smaller models for low-risk tasks",
  },
  {
    bucket: "Cloud and storage",
    driver: "Images, logs, embeddings, dashboard traffic",
    reduction: "Object lifecycle rules, Postgres + pgvector first, selective retention",
  },
  {
    bucket: "Agronomy review",
    driver: "Crop coverage, high-risk recommendations, expert escalation",
    reduction: "Narrow crop wedge, golden answer sets, batch review workflows",
  },
  {
    bucket: "Field onboarding",
    driver: "Partner training, demos, support, language complexity",
    reduction: "Partner playbooks, shareable cards, assisted onboarding scripts",
  },
  {
    bucket: "Support and safety",
    driver: "Complaints, low-confidence cases, wrong-data incidents",
    reduction: "Abstention rules, freshness labels, escalation queue, audit logs",
  },
];

