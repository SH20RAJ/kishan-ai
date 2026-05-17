export type QueryIntent = 'disease' | 'weather' | 'market' | 'scheme' | 'general';

export interface QueryContext {
  crop?: string;
  location?: string;
  state?: string;
  district?: string;
  season?: string;
  language: string;
  intent?: QueryIntent;
}

export interface PromptTemplate {
  system: string;
  user: string;
  context: QueryContext;
}

export interface SafetyCheck {
  isSafe: boolean;
  reason?: string;
  requiresDisclaimer: boolean;
  requiresExpertReferral: boolean;
  blockedCategories: string[];
}

export interface RetrievedDocument {
  content: string;
  source: string;
  sourceUrl?: string;
  freshness: string;
  relevance: number;
  type: 'government' | 'research' | 'kvk' | 'expert' | 'market';
}

export interface RAGResult {
  documents: RetrievedDocument[];
  query: string;
  intent: QueryIntent;
  confidence: number;
}
