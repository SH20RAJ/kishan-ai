// === AI Response Types ===
export interface AIResponse {
  answer: string;
  recommendedActions: string[];
  caution?: string;
  confidence: 'low' | 'medium' | 'high';
  sources: AISource[];
  followUpQuestions: string[];
  language: string;
}

export interface AISource {
  title: string;
  url?: string;
  freshness?: string;
  type: 'government' | 'research' | 'kvk' | 'expert' | 'market';
}

// === Chat Types ===
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  language?: string;
  feedback?: 'helpful' | 'not_helpful';
  sources?: AISource[];
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  crop?: string;
  location?: string;
  season?: string;
  createdAt: string;
  updatedAt: string;
}

// === Disease Detection Types ===
export interface DiseaseScan {
  id: string;
  imageUrl: string;
  crop: string;
  symptoms?: string;
  result: DiseaseResult;
  createdAt: string;
}

export interface DiseaseResult {
  possibleIssue: string;
  confidence: 'low' | 'medium' | 'high';
  description: string;
  recommendedActions: string[];
  caution: string;
  consultExpert: boolean;
  similarIssues?: string[];
}

// === Weather Types ===
export interface WeatherData {
  location: string;
  current: WeatherCondition;
  forecast: WeatherDay[];
  farmingActions: FarmingAction[];
  riskAlerts: RiskAlert[];
  lastUpdated: string;
}

export interface WeatherCondition {
  temperature: number;
  humidity: number;
  description: string;
  windSpeed: number;
  rainfall: number;
}

export interface WeatherDay {
  date: string;
  high: number;
  low: number;
  rainfall: number;
  humidity: number;
  description: string;
}

export interface FarmingAction {
  action: string;
  reason: string;
  urgency: 'low' | 'medium' | 'high';
  crop?: string;
}

export interface RiskAlert {
  type: 'frost' | 'heat' | 'rain' | 'pest' | 'drought';
  severity: 'low' | 'medium' | 'high';
  message: string;
  validUntil: string;
}

// === Mandi Price Types ===
export interface MandiPrice {
  commodity: string;
  mandi: string;
  district: string;
  state: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
}

export interface MandiPriceQuery {
  commodity: string;
  state?: string;
  district?: string;
  mandi?: string;
}

// === Government Scheme Types ===
export interface Scheme {
  id: string;
  name: string;
  nameHi?: string;
  ministry: string;
  description: string;
  eligibility: string[];
  benefits: string;
  documentsRequired: string[];
  howToApply: string;
  officialUrl?: string;
  category: 'subsidy' | 'insurance' | 'loan' | 'training' | 'market' | 'other';
  state?: string;
  lastUpdated: string;
}

// === User/Farmer Types ===
export interface FarmerProfile {
  id: string;
  name?: string;
  phone?: string;
  language: string;
  state?: string;
  district?: string;
  crops: string[];
  farmSize?: number;
  consentGiven: boolean;
  createdAt: string;
}

// === Form Types ===
export interface WaitlistEntry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  state: string;
  district?: string;
  crops?: string[];
  language: string;
  source?: string;
  createdAt: string;
}

export interface PartnerLead {
  id: string;
  organizationName: string;
  contactName: string;
  email: string;
  phone: string;
  type: 'fpo' | 'ngo' | 'retailer' | 'institution' | 'government' | 'other';
  state: string;
  farmersCount?: number;
  message?: string;
  createdAt: string;
}

export interface FeedbackEntry {
  id: string;
  userId?: string;
  type: 'chat' | 'disease' | 'weather' | 'mandi' | 'scheme' | 'general';
  rating: 'helpful' | 'not_helpful';
  comment?: string;
  context?: string;
  createdAt: string;
}

// === Impact Metrics ===
export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
  isDemo: boolean;
}

// === API Response Types ===
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// === Marketplace Types ===
export interface MarketplaceItem {
  id: string;
  name: string;
  category: 'advisory' | 'testing' | 'inputs' | 'fpo' | 'other';
  provider: string;
  description: string;
  price?: string;
  contact?: string;
  verified: boolean;
  state?: string;
}
