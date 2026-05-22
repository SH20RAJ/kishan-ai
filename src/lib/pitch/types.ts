export type SourceConfidence = "high" | "medium" | "low";

export type ClaimLabel = "verified" | "assumption" | "to-validate" | "risk";

export type PitchSource = {
  id: string;
  title: string;
  url?: string;
  publisher?: string;
  year?: string;
  confidence: SourceConfidence;
};

export type PitchClaim = {
  id: string;
  claim: string;
  value?: string;
  sourceIds: string[];
  confidence: SourceConfidence;
  label?: ClaimLabel;
  category:
    | "Market proof"
    | "Digital adoption proof"
    | "Agriculture pain proof"
    | "Commercial proof"
    | "Technical feasibility proof"
    | "Policy proof"
    | "Risk proof"
    | "Assumption";
  useInPitch: string;
};

export type PitchMetric = {
  label: string;
  value: string;
  detail: string;
  claimId?: string;
  sourceIds: string[];
  confidence: SourceConfidence;
  labelType?: ClaimLabel;
};

export type TableRow = Record<string, string>;

export type PitchQA = {
  id: string;
  category:
    | "Basic"
    | "Market"
    | "Farmer Adoption"
    | "Product"
    | "AI Safety"
    | "Business Model"
    | "GTM"
    | "Competition"
    | "Financial"
    | "Technical Diligence"
    | "Government/Policy"
    | "Risk"
    | "Trick/Irritating"
    | "Advanced VC Diligence";
  difficulty:
    | "Basic"
    | "Good"
    | "Tough"
    | "Irritating"
    | "Trick"
    | "Advanced VC Diligence";
  confidence: "High proof" | "Medium proof" | "Assumption" | "Needs validation";
  question: string;
  whyInvestorAsks: string;
  shortAnswer: string;
  detailedAnswer: string;
  proof: string;
  sourceIds: string[];
  whatNotToSay: string;
  bestFounderAnswer: string;
  suggestedReference: string;
};

export type SectionLink = {
  id: string;
  label: string;
};

export type TimelineItem = {
  title: string;
  timeframe: string;
  items: string[];
};

export type RiskItem = {
  risk: string;
  whyItMatters: string;
  mitigation: string;
};

