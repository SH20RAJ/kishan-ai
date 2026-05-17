import type { QueryIntent, QueryContext, RetrievedDocument, RAGResult } from './types';

// ---------------------------------------------------------------------------
// Intent classification
// ---------------------------------------------------------------------------

const INTENT_KEYWORDS: Record<QueryIntent, string[]> = {
  disease: [
    'disease', 'pest', 'infection', 'spots', 'wilting', 'yellowing', 'rot',
    'blight', 'rust', 'mildew', 'fungus', 'fungal', 'bacterial', 'virus',
    'insect', 'bug', 'worm', 'larva', 'caterpillar', 'aphid', 'whitefly',
    'bollworm', 'stem borer', 'leaf', 'symptom', 'damage', 'affected',
    'sick', 'dying', 'dead plant', 'brown', 'black spot', 'powdery',
    'downy', 'root rot', 'wilt', 'mosaic', 'curl', 'gall',
    // Hindi
    'रोग', 'कीट', 'पत्ती', 'पीला', 'सूखा', 'धब्बा', 'सड़न', 'झुलसा',
  ],
  weather: [
    'weather', 'rain', 'rainfall', 'forecast', 'temperature', 'humidity',
    'drought', 'flood', 'frost', 'heatwave', 'storm', 'cyclone', 'wind',
    'irrigation', 'water', 'drainage', 'monsoon', 'season',
    'kharif', 'rabi', 'zaid',
    // Hindi
    'मौसम', 'बारिश', 'तापमान', 'सिंचाई', 'पानी', 'खरीफ', 'रबी', 'जायद',
  ],
  market: [
    'price', 'mandi', 'market', 'sell', 'selling', 'rate', 'cost',
    'msp', 'minimum support', 'agmarknet', 'buyer', 'trader', 'commission',
    'wholesale', 'retail', 'commodity', 'quintal', 'procurement',
    // Hindi
    'भाव', 'मंडी', 'बेचना', 'दाम', 'कीमत', 'खरीद', 'व्यापारी',
  ],
  scheme: [
    'scheme', 'subsidy', 'loan', 'insurance', 'credit', 'kisan',
    'pm-kisan', 'pm kisan', 'fasal bima', 'soil health card',
    'kcc', 'kisan credit', 'government', 'yojana', 'apply',
    'eligibility', 'eligible', 'benefit', 'csc', 'registration',
    // Hindi
    'योजना', 'सब्सिडी', 'लोन', 'बीमा', 'किसान', 'सरकारी', 'आवेदन',
  ],
  general: [
    'farming', 'agriculture', 'crop', 'seed', 'fertilizer', 'soil',
    'harvest', 'sowing', 'planting', 'organic', 'compost', 'manure',
    'variety', 'yield', 'production', 'technique', 'practice',
    // Hindi
    'खेती', 'बीज', 'खाद', 'मिट्टी', 'फसल', 'कटाई', 'बुवाई',
  ],
};

/**
 * Classifies a farmer's query into one of the supported intents.
 * Uses keyword matching with weighted scoring.
 */
export function classifyIntent(query: string): QueryIntent {
  const lower = query.toLowerCase();
  const scores: Record<QueryIntent, number> = {
    disease: 0,
    weather: 0,
    market: 0,
    scheme: 0,
    general: 0,
  };

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [QueryIntent, string[]][]) {
    for (const keyword of keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        scores[intent] += 1;
      }
    }
  }

  // Find the intent with the highest score
  let bestIntent: QueryIntent = 'general';
  let bestScore = 0;
  for (const [intent, score] of Object.entries(scores) as [QueryIntent, number][]) {
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestIntent;
}

// ---------------------------------------------------------------------------
// Mock knowledge base
// ---------------------------------------------------------------------------

interface KnowledgeEntry {
  content: string;
  source: string;
  sourceUrl?: string;
  type: RetrievedDocument['type'];
  freshness: string;
  intents: QueryIntent[];
  crops?: string[];
  seasons?: string[];
  states?: string[];
  keywords: string[];
}

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // === DISEASE KNOWLEDGE ===
  {
    content:
      'Early Blight (Alternaria solani) appears as dark brown to black concentric rings on older leaves, often called "target spot." It thrives in warm (24-29C), humid conditions. Management: remove infected debris, rotate crops (3-year cycle), apply Mancozeb 75% WP @ 2g/liter or Copper Oxychloride 50% WP @ 3g/liter as per label. Use resistant varieties like Arka Rakshak (tomato).',
    source: 'ICAR-IIVR Vegetable Disease Management Guide',
    sourceUrl: 'https://iivr.ac.in',
    type: 'research',
    freshness: '2024',
    intents: ['disease'],
    crops: ['tomato', 'potato', 'brinjal'],
    seasons: ['kharif', 'rabi'],
    keywords: ['blight', 'spots', 'brown', 'target', 'concentric', 'tomato', 'potato'],
  },
  {
    content:
      'Late Blight (Phytophthora infestans) causes water-soaked lesions on leaves that turn dark brown to black with white fuzzy growth on the underside. It spreads rapidly in cool, wet conditions (10-25C, >90% humidity). This is the same disease that caused the Irish Potato Famine. Management: use Metalaxyl Mancozeb (Ridomil MZ) as per label, destroy infected plants immediately, avoid overhead irrigation.',
    source: 'ICAR-Central Potato Research Institute',
    sourceUrl: 'https://cpri.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['disease'],
    crops: ['potato', 'tomato'],
    seasons: ['kharif', 'rabi'],
    keywords: ['late blight', 'water soaked', 'white growth', 'fuzzy', 'potato'],
  },
  {
    content:
      'Cotton Bollworm (Helicoverpa armigera) is a major pest of cotton, chickpea, and tomato. Larvae bore into bolls/fruits. Management: install pheromone traps (5/acre), spray HaNPV (nuclear polyhedrosis virus) 250 LE/acre, use Neem oil 5% as first resort. Chemical control only if >5 larvae per 20 plants -- consult KVK for approved insecticide and dosage.',
    source: 'ICAR-Central Institute for Cotton Research',
    sourceUrl: 'https://cicr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['disease'],
    crops: ['cotton', 'chickpea', 'tomato'],
    seasons: ['kharif'],
    keywords: ['bollworm', 'worm', 'larva', 'bore', 'cotton', 'boll'],
  },
  {
    content:
      'Powdery Mildew appears as white powdery spots on leaves and stems, common in cucurbits (cucumber, bottle gourd, watermelon) and peas. Favored by warm days and cool nights with high humidity. Management: spray Potassium Bicarbonate 0.5% or Sulphur 80% WP as per label. Avoid excessive nitrogen fertilization. Use tolerant varieties.',
    source: 'ICAR-Indian Institute of Horticultural Research',
    sourceUrl: 'https://iihr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['disease'],
    crops: ['cucumber', 'bottle gourd', 'watermelon', 'peas'],
    seasons: ['rabi', 'zaid'],
    keywords: ['powdery', 'mildew', 'white', 'powder', 'cucumber', 'gourd'],
  },
  {
    content:
      'Stem Borer (Scirpophaga incertulas) is the most damaging pest of rice. Larvae bore into the stem causing "dead heart" (drying of central shoot) in vegetative stage and "white ear" in reproductive stage. Management: release Trichogramma japonicum egg parasitoid @ 1 lakh/acre at 30 and 45 DAT, apply Carbofuran 3G granules in the leaf whorl as per label direction. Avoid late planting.',
    source: 'ICAR-Indian Rice Research Institute',
    sourceUrl: 'https://icar-iirr.res.in',
    type: 'research',
    freshness: '2024',
    intents: ['disease'],
    crops: ['rice', 'paddy'],
    seasons: ['kharif'],
    keywords: ['stem borer', 'dead heart', 'white ear', 'rice', 'paddy', 'bore'],
  },

  // === WEATHER KNOWLEDGE ===
  {
    content:
      'IMD issues color-coded weather warnings: Green (no warning), Yellow (be updated), Orange (be prepared), Red (take action). For farming: during heavy rain warnings (>65mm/day), ensure field drainage channels are clear, harvest mature crops, and postpone fertilizer/pesticide application. Check IMD district forecast at mausam.imd.gov.in daily.',
    source: 'India Meteorological Department - Agricultural Advisory',
    sourceUrl: 'https://mausam.imd.gov.in',
    type: 'government',
    freshness: 'Current',
    intents: ['weather'],
    keywords: ['rain', 'warning', 'drainage', 'heavy rain', 'imd', 'forecast'],
  },
  {
    content:
      'Kharif season (June-October) key weather risks: Excess rain in July-August causes waterlogging and root rot. Dry spells in September affect grain filling of rice and maize. Late season cyclones in October can damage standing cotton and pulses. Precautions: maintain drainage, keep harvested grain dry, use weather-based crop advisories from your KVK.',
    source: 'ICAR-Directorate of Cropping Systems Research',
    sourceUrl: 'https://dcsr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['weather'],
    seasons: ['kharif'],
    keywords: ['kharif', 'monsoon', 'waterlog', 'cyclone', 'rain'],
  },
  {
    content:
      'Rabi season (October-March) key weather risks: Early frost (Nov-Dec) can damage potato, mustard, and vegetables. Terminal heat in March affects wheat grain filling. Untimely rain in February-March can cause lodging in wheat and disease in mustard. Precautions: use frost protection (irrigation before frost night), sow early-maturing wheat varieties, monitor IMD advisories.',
    source: 'ICAR-Indian Institute of Wheat and Barley Research',
    sourceUrl: 'https://iiwbr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['weather'],
    seasons: ['rabi'],
    keywords: ['rabi', 'frost', 'winter', 'wheat', 'heat', 'cold'],
  },
  {
    content:
      'Optimal sowing windows: Wheat -- Nov 1 to Nov 25 (North India), Nov 15 to Dec 15 (Central India). Rice transplanting -- June-July for kharif. Cotton -- April-May after pre-monsoon showers. Onion -- Oct-Nov for rabi, May-June for kharif. Tomato -- year-round with protective measures. Consult your state agriculture university for local varieties and dates.',
    source: 'ICAR-Indian Institute of Farming Systems Research',
    sourceUrl: 'https://iifsr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['general', 'weather'],
    keywords: ['sowing', 'planting', 'when to sow', 'transplant', 'date', 'window'],
  },

  // === MARKET/MANDI KNOWLEDGE ===
  {
    content:
      'MSP (Minimum Support Price) for major crops 2024-25: Wheat Rs 2275/quintal, Paddy (Grade A) Rs 2320/quintal, Cotton (long staple) Rs 7020/quintal, Mustard Rs 5650/quintal, Gram (chana) Rs 5440/quintal, Onion has no MSP. MSP is announced by CACP and approved by the Cabinet. Procurement happens through FCI, NAFED, and state agencies at designated centers.',
    source: 'Commission for Agricultural Costs and Prices (CACP)',
    sourceUrl: 'https://cacp.dacnet.nic.in',
    type: 'government',
    freshness: '2024-25 season',
    intents: ['market'],
    crops: ['wheat', 'rice', 'cotton', 'mustard', 'gram', 'chickpea'],
    keywords: ['msp', 'minimum support', 'price', 'procurement', 'fci', 'nafed'],
  },
  {
    content:
      'Agmarknet (agmarknet.gov.in) provides real-time mandi prices from 7000+ markets across India. To check prices: visit the portal, select your commodity and state, view daily modal/min/max prices. Prices are updated daily by mandis. For best selling decision: compare prices at 2-3 nearby mandis, factor in transport cost, and check quality grading requirements.',
    source: 'Agmarknet - Agricultural Marketing Information Network',
    sourceUrl: 'https://agmarknet.gov.in',
    type: 'government',
    freshness: 'Daily updates',
    intents: ['market'],
    keywords: ['mandi', 'price', 'market', 'rate', 'sell', 'agmarknet', 'commodity'],
  },
  {
    content:
      'eNAM (National Agriculture Market) is an online trading platform connecting APMC mandis across India. Benefits: transparent price discovery, direct buyer-seller contact, electronic payment. Currently operational in 1000+ mandis. Farmers can register at enam.gov.in with Aadhaar, bank details, and land records. Quality assaying facilities available at integrated mandis.',
    source: 'eNAM - National Agriculture Market',
    sourceUrl: 'https://enam.gov.in',
    type: 'government',
    freshness: 'Active',
    intents: ['market'],
    keywords: ['enam', 'online', 'trading', 'apmc', 'sell online'],
  },

  // === SCHEME KNOWLEDGE ===
  {
    content:
      'PM-KISAN: Income support of Rs 6000/year in 3 installments of Rs 2000 each. Eligibility: all landholding farmer families (subject to exclusion criteria -- serving/retired government employees, income taxpayers excluded). Documents: Aadhaar, land records, bank account. Apply: pmkisan.gov.in or nearest CSC. Status check: same portal with Aadhaar or mobile number.',
    source: 'PM-KISAN Official Portal',
    sourceUrl: 'https://pmkisan.gov.in',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['scheme'],
    keywords: ['pm kisan', 'pm-kisan', '6000', 'installment', 'income support'],
  },
  {
    content:
      'PM Fasal Bima Yojana (PMFBY): Crop insurance scheme. Premium: Kharif 2%, Rabi 1.5%, Commercial/Horticultural 5% of sum insured. Coverage: prevented sowing, standing crop loss, post-harvest loss (14 days), localized calamities. Apply through banks (loanee farmers auto-enrolled), CSCs, or insurance company portals. Deadline: within the notified sowing period for your crop and district.',
    source: 'PM Fasal Bima Yojana Portal',
    sourceUrl: 'https://pmfby.gov.in',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['scheme'],
    keywords: ['fasal bima', 'crop insurance', 'pmfby', 'insurance', 'premium'],
  },
  {
    content:
      'Kisan Credit Card (KCC): Provides affordable credit for agriculture. Interest rate: 4% per annum (after subvention) for prompt repayment. Limit: based on land holding and crop plan. Covers: crop production, post-harvest, animal husbandry, fisheries. Documents: Aadhaar, land records, passport photo, bank account. Apply at any commercial bank, cooperative bank, or RRB. KCC is also available for animal husbandry and fisheries at 4% interest up to Rs 2 lakh.',
    source: 'NABARD - Kisan Credit Card',
    sourceUrl: 'https://www.nabard.org',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['scheme'],
    keywords: ['kcc', 'credit card', 'kisan credit', 'loan', 'interest', 'nabard'],
  },
  {
    content:
      'Soil Health Card Scheme: Free soil testing and nutrient recommendations. Every farmer can get a soil health card every 2 years. Card contains: soil pH, organic carbon, N, P, K, S, Zn, Fe, Cu, Mn, B levels with crop-wise fertilizer recommendations. Get tested at: nearest Soil Testing Lab, mobile soil testing van, or through KVK. Results available on soilhealth.dac.gov.in.',
    source: 'Soil Health Card Portal',
    sourceUrl: 'https://soilhealth.dac.gov.in',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['scheme', 'general'],
    keywords: ['soil health', 'soil test', 'fertilizer', 'nutrient', 'soil card'],
  },
  {
    content:
      'PM Kisan Maandhan Yojana: Pension scheme for small and marginal farmers. Rs 55-200/month contribution (matched by government). Pension of Rs 3000/month after age 60. Eligibility: farmer with <2 hectares, age 18-40. Apply at CSC with Aadhaar and bank passbook. Also check: PM Kisan Samman Nidhi for direct income support.',
    source: 'Ministry of Agriculture & Farmers Welfare',
    sourceUrl: 'https://agricoop.nic.in',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['scheme'],
    keywords: ['pension', 'maandhan', 'old age', 'retirement'],
  },

  // === GENERAL FARMING KNOWLEDGE ===
  {
    content:
      'ICAR recommends soil testing every 2-3 years before sowing. Optimal soil pH for most crops: 6.0-7.5. For acidic soil (pH <6): apply lime/dolomite @ 2-4 tonnes/hectare. For alkaline soil (pH >8): apply gypsum @ 2-5 tonnes/hectare. Organic carbon should be >0.5%. To improve: add FYM (farmyard manure) 5-10 tonnes/hectare, practice green manuring with dhaincha or sunhemp before kharif sowing.',
    source: 'ICAR-Indian Institute of Soil Science',
    sourceUrl: 'https://iiss.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['general'],
    keywords: ['soil', 'ph', 'lime', 'gypsum', 'organic', 'fym', 'manure'],
  },
  {
    content:
      'Drip irrigation saves 30-50% water compared to flood irrigation and improves yield by 20-30%. Government subsidy: 55% for small/marginal farmers, 45% for others under PMKSY (Per Drop More Crop). Components: main line, sub-main, laterals, drippers. Suitable for: vegetables, fruit crops, sugarcane, cotton. Apply through state agriculture department or micro-irrigation portal.',
    source: 'PMKSY - Per Drop More Crop',
    sourceUrl: 'https://pmksy.gov.in',
    type: 'government',
    freshness: 'Active scheme',
    intents: ['general'],
    keywords: ['drip', 'irrigation', 'water', 'subsidy', 'pmksy', 'micro irrigation'],
  },
  {
    content:
      'Crop rotation best practices for Indian conditions: Rice-Wheat (North India), Rice-Pulse-Maize (Eastern India), Cotton-Wheat (Central India), Sugarcane-Wheat (Irrigated). Benefits: breaks pest/disease cycle, improves soil fertility, manages weeds. After legumes (chickpea, moong, urad), reduce nitrogen dose by 20-25 kg/ha for the next crop due to biological nitrogen fixation.',
    source: 'ICAR-Indian Institute of Farming Systems Research',
    sourceUrl: 'https://iifsr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['general'],
    keywords: ['rotation', 'crop rotation', 'sequence', 'rotation benefits'],
  },
  {
    content:
      'Seed treatment is a low-cost, high-impact practice. For cereals: treat with Carbozim/Thiram @ 2g/kg seed to prevent seed-borne diseases. For pulses: Rhizobium + PSB biofertilizer coating @ 25g/kg seed. For cotton: Imidacloprid 48FS @ 10ml/kg seed for early pest protection. Always buy certified seeds from authorized dealers -- look for the blue label tag from NSC/SFCI/state seed corporations.',
    source: 'ICAR-Directorate of Seed Research',
    sourceUrl: 'https://dsr.icar.gov.in',
    type: 'research',
    freshness: '2024',
    intents: ['general'],
    keywords: ['seed', 'treatment', 'seed treatment', 'certified', 'biofertilizer'],
  },
];

// ---------------------------------------------------------------------------
// Document retrieval
// ---------------------------------------------------------------------------

/**
 * Scores how relevant a knowledge entry is to the given query and context.
 */
function scoreRelevance(entry: KnowledgeEntry, query: string, context: QueryContext): number {
  let score = 0;
  const lowerQuery = query.toLowerCase();

  // Intent match
  if (context.intent && entry.intents.includes(context.intent)) {
    score += 3;
  }

  // Keyword match
  for (const keyword of entry.keywords) {
    if (lowerQuery.includes(keyword.toLowerCase())) {
      score += 2;
    }
  }

  // Crop match
  if (context.crop && entry.crops?.some((c) => c.toLowerCase() === context.crop?.toLowerCase())) {
    score += 3;
  }

  // Season match
  if (context.season && entry.seasons?.some((s) => s.toLowerCase() === context.season?.toLowerCase())) {
    score += 2;
  }

  // State match
  if (context.state && entry.states?.some((s) => s.toLowerCase() === context.state?.toLowerCase())) {
    score += 2;
  }

  // Bonus for government sources (more authoritative)
  if (entry.type === 'government') {
    score += 1;
  }

  return score;
}

/**
 * Retrieves relevant documents from the mock knowledge base based on query and context.
 * Returns documents sorted by relevance with scores.
 */
export async function retrieveDocuments(
  query: string,
  context: QueryContext,
): Promise<RAGResult> {
  // Simulate retrieval latency
  await new Promise((r) => setTimeout(r, 50));

  const intent = context.intent ?? classifyIntent(query);
  const contextWithIntent = { ...context, intent };

  // Score all entries
  const scored = KNOWLEDGE_BASE
    .map((entry) => ({
      entry,
      score: scoreRelevance(entry, query, contextWithIntent),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Top 5 documents

  // Normalize scores to 0-1 range
  const maxScore = scored.length > 0 ? scored[0].score : 1;

  const documents: RetrievedDocument[] = scored.map(({ entry, score }) => ({
    content: entry.content,
    source: entry.source,
    sourceUrl: entry.sourceUrl,
    freshness: entry.freshness,
    relevance: Math.round((score / maxScore) * 100) / 100,
    type: entry.type,
  }));

  // Calculate overall confidence based on retrieval quality
  const avgRelevance = documents.length > 0
    ? documents.reduce((sum, d) => sum + d.relevance, 0) / documents.length
    : 0;
  const confidence = Math.min(0.95, avgRelevance * (documents.length > 0 ? 1 : 0.3));

  return {
    documents,
    query,
    intent,
    confidence,
  };
}

/**
 * Returns the list of supported crops in the knowledge base.
 */
export function getSupportedCrops(): string[] {
  const crops = new Set<string>();
  for (const entry of KNOWLEDGE_BASE) {
    entry.crops?.forEach((c) => crops.add(c));
  }
  return Array.from(crops).sort();
}

/**
 * Returns the list of supported intents.
 */
export function getSupportedIntents(): QueryIntent[] {
  return ['disease', 'weather', 'market', 'scheme', 'general'];
}
