import type { SafetyCheck, QueryIntent } from './types';

// ---------------------------------------------------------------------------
// Blocked content patterns
// ---------------------------------------------------------------------------

interface BlockedPattern {
  pattern: RegExp;
  category: string;
  severity: 'block' | 'warn';
}

const BLOCKED_PATTERNS: BlockedPattern[] = [
  // Specific pesticide dosages (e.g., "2ml per liter", "500gm per acre")
  { pattern: /\d+\s*(ml|gm|g|kg|liter|litre)\s*(per|\/)\s*(liter|litre|acre|hectare|pump)/i, category: 'pesticide_dosage', severity: 'block' },
  { pattern: /dose\s*(of|:)\s*\d+/i, category: 'pesticide_dosage', severity: 'block' },

  // Financial guarantees
  { pattern: /guarantee(d)?\s*(income|profit|return|price|earning)/i, category: 'financial_guarantee', severity: 'block' },
  { pattern: /you (will|shall|can)\s*(earn|make|get)\s*(rs|inr|₹)?\s*\d+/i, category: 'financial_guarantee', severity: 'block' },
  { pattern: /assured\s*(price|income|profit|return)/i, category: 'financial_guarantee', severity: 'block' },

  // Medical advice
  { pattern: (/(this|it)\s*(will|can|shall)\s*(cure|treat|heal)\s*(your|the)\s*(disease|infection|illness)/i), category: 'medical_advice', severity: 'block' },
  { pattern: /(eat|consume|drink)\s*this\s*(to|for)\s*(cure|treat|prevent)\s*(disease|illness|infection)/i, category: 'medical_advice', severity: 'block' },
  { pattern: /(no|without)\s*need\s*(of|for)\s*(doctor|hospital|medical)/i, category: 'medical_advice', severity: 'block' },

  // Scheme approval promises
  { pattern: /you (are|will be)\s*(definitely|certainly|surely)?\s*(approved|selected|chosen)/i, category: 'scheme_approval', severity: 'block' },
  { pattern: /(guaranteed|assured|confirmed)\s*(approval|selection|disbursement)/i, category: 'scheme_approval', severity: 'block' },
  { pattern: /you (will|shall)\s*(get|receive)\s*(the|your)\s*(money|amount|benefit)\s*(within|in)\s*\d+/i, category: 'scheme_approval', severity: 'block' },
];

// ---------------------------------------------------------------------------
// Required disclaimers by intent
// ---------------------------------------------------------------------------

const DISCLAIMER_REQUIREMENTS: Record<QueryIntent, string[]> = {
  disease: [
    'expert',
    'KVK',
    'consult',
    'preliminary',
    'diagnosis',
  ],
  weather: [
    'forecast',
    'verify',
    'check',
  ],
  market: [
    'daily',
    'verify',
    'reference',
    'Agmarknet',
  ],
  scheme: [
    'eligib',
    'official',
    'verify',
    'KisanAI does not guarantee',
  ],
  general: [
    'expert',
    'KVK',
  ],
};

// ---------------------------------------------------------------------------
// Expert referral triggers
// ---------------------------------------------------------------------------

const HIGH_RISK_KEYWORDS = [
  'pesticide',
  'fungicide',
  'herbicide',
  'insecticide',
  'chemical',
  'toxic',
  'poison',
  'chemical burn',
  'crop failure',
  'total loss',
  'emergency',
  'urgent',
  'dying',
  'dead plants',
  'loan default',
  'debt',
];

// ---------------------------------------------------------------------------
// Core safety check
// ---------------------------------------------------------------------------

/**
 * Validates an AI response string for safety issues.
 * Returns a SafetyCheck indicating whether the response is safe,
 * what categories were blocked, and whether disclaimers/referrals are needed.
 */
export function checkSafety(response: string, intent: QueryIntent = 'general'): SafetyCheck {
  const blockedCategories: string[] = [];
  let requiresDisclaimer = false;
  let requiresExpertReferral = false;

  // 1. Check blocked patterns
  for (const { pattern, category, severity } of BLOCKED_PATTERNS) {
    if (pattern.test(response)) {
      if (severity === 'block') {
        blockedCategories.push(category);
      }
    }
  }

  // 2. Check required disclaimers
  const disclaimerKeywords = DISCLAIMER_REQUIREMENTS[intent] ?? [];
  const hasDisclaimer = disclaimerKeywords.some((kw) => response.toLowerCase().includes(kw.toLowerCase()));
  if (!hasDisclaimer && intent !== 'general') {
    requiresDisclaimer = true;
  }

  // 3. Check for high-risk content requiring expert referral
  const lowerResponse = response.toLowerCase();
  const hasHighRisk = HIGH_RISK_KEYWORDS.some((kw) => lowerResponse.includes(kw));
  if (hasHighRisk) {
    requiresExpertReferral = true;
  }

  // 4. Low confidence responses should trigger expert referral
  const confidenceMatch = response.match(/"confidence"\s*:\s*"(low|medium|high)"/i);
  if (confidenceMatch && confidenceMatch[1] === 'low') {
    requiresExpertReferral = true;
  }

  // 5. Disease intent always requires expert recommendation
  if (intent === 'disease') {
    requiresExpertReferral = true;
  }

  const isSafe = blockedCategories.length === 0;

  return {
    isSafe,
    reason: blockedCategories.length > 0
      ? `Response contains blocked content in categories: ${blockedCategories.join(', ')}`
      : undefined,
    requiresDisclaimer,
    requiresExpertReferral,
    blockedCategories,
  };
}

/**
 * Strips or rewrites blocked content from a response, returning a safe version.
 * Used as a post-processing step when a response fails the safety check.
 */
export function sanitizeResponse(
  response: string,
  safetyCheck: SafetyCheck,
): string {
  if (safetyCheck.isSafe) return response;

  let sanitized = response;

  // Remove specific dosage numbers
  sanitized = sanitized.replace(
    /\d+\s*(ml|gm|g|kg|liter|litre)\s*(per|\/)\s*(liter|litre|acre|hectare|pump)/gi,
    '[dosage removed - consult KVK or product label]',
  );
  sanitized = sanitized.replace(
    /dose\s*(of|:)\s*\d+/gi,
    'dose: [consult product label or KVK]',
  );

  // Remove financial guarantees
  sanitized = sanitized.replace(
    /guarantee(d)?\s*(income|profit|return|price|earning)/gi,
    'potential income',
  );
  sanitized = sanitized.replace(
    /assured\s*(price|income|profit|return)/gi,
    'expected price',
  );

  return sanitized;
}

// ---------------------------------------------------------------------------
// Source validation
// ---------------------------------------------------------------------------

const TRUSTED_DOMAINS = [
  'icar.org.in',
  'kvk.icar.gov.in',
  'agmarknet.gov.in',
  'pmkisan.gov.in',
  'pmfby.gov.in',
  'agricoop.nic.in',
  'mausam.imd.gov.in',
  'soilhealth.dac.gov.in',
  'india.gov.in',
  'dac.gov.in',
  'nfsm.gov.in',
  'seednet.gov.in',
  'farmer.gov.in',
  'enam.gov.in',
];

interface SourceInput {
  title: string;
  url?: string;
  type?: string;
}

interface SourceValidation {
  isValid: boolean;
  issues: string[];
}

/**
 * Validates that cited sources appear to be real and trustworthy.
 */
export function validateSources(sources: SourceInput[]): SourceValidation {
  const issues: string[] = [];

  if (!Array.isArray(sources) || sources.length === 0) {
    return { isValid: true, issues: [] }; // No sources is okay
  }

  for (const source of sources) {
    // Check that source has a title
    if (!source.title || source.title.trim().length === 0) {
      issues.push('Source missing title');
      continue;
    }

    // If URL is provided, check it's from a trusted domain
    if (source.url) {
      try {
        const hostname = new URL(source.url).hostname;
        const isTrusted = TRUSTED_DOMAINS.some((d) => hostname === d || hostname.endsWith(`.${d}`));
        if (!isTrusted) {
          issues.push(`Source URL not from a recognized trusted domain: ${source.url}`);
        }
      } catch {
        issues.push(`Invalid source URL: ${source.url}`);
      }
    }

    // Check for suspiciously generic titles
    const genericTitles = ['source', 'reference', 'link', 'website', 'data'];
    if (genericTitles.includes(source.title.toLowerCase().trim())) {
      issues.push(`Generic source title: "${source.title}"`);
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

// ---------------------------------------------------------------------------
// Convenience: full safety pipeline
// ---------------------------------------------------------------------------

export interface FullSafetyResult {
  safetyCheck: SafetyCheck;
  sanitizedResponse: string;
  sourceValidation: SourceValidation;
  passed: boolean;
}

/**
 * Runs the complete safety pipeline on a response:
 * 1. Content safety check
 * 2. Source validation
 * 3. Sanitization if needed
 */
export function runSafetyPipeline(
  response: string,
  intent: QueryIntent,
  sources: SourceInput[] = [],
): FullSafetyResult {
  const safetyCheck = checkSafety(response, intent);
  const sourceValidation = validateSources(sources);
  const sanitizedResponse = safetyCheck.isSafe ? response : sanitizeResponse(response, safetyCheck);

  return {
    safetyCheck,
    sanitizedResponse,
    sourceValidation,
    passed: safetyCheck.isSafe && (safetyCheck.blockedCategories.length === 0),
  };
}
