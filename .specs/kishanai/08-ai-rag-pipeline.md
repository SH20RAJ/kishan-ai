# 08 - AI RAG Pipeline: KisanAI

## Document Purpose
Define the complete AI architecture for KisanAI including the RAG (Retrieval-Augmented Generation) pipeline, system prompts, safety guardrails, evaluation framework, and model governance. This is the core intellectual property of KisanAI.

---

## 1. Architecture Overview

### 1.1 Pipeline Diagram

```
User Input (text/image/voice)
    |
    v
+-----------------------------------------------------------+
|                    INPUT PROCESSING                        |
|  +----------+  +----------+  +----------+                |
|  | Language  |  | Voice    |  | Image    |                |
|  | Detection |  | STT      |  | Preproc  |                |
|  +----------+  +----------+  +----------+                |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
|                 INTENT CLASSIFICATION                      |
|  +------------------------------------------------------+ |
|  | disease | weather | price | scheme | general |        | |
|  | out_of_scope                                          | |
|  +------------------------------------------------------+ |
+-----------------------------------------------------------+
    |
    |-- disease -------> CV Pipeline (image) or RAG (text)
    |-- weather -------> Weather API + LLM summarization
    |-- price ---------> Mandi Price API + LLM context
    |-- scheme --------> Scheme DB + RAG
    |-- general -------> RAG + LLM
    |-- out_of_scope --> Refusal message
    |
    v
+-----------------------------------------------------------+
|                    RETRIEVAL LAYER                         |
|  +----------+  +----------+  +----------+                |
|  | Vector   |  | Lexical  |  | Live     |                |
|  | Search   |  | Search   |  | Data     |                |
|  | (pgvec)  |  | (FTS)    |  | (APIs)   |                |
|  +----------+  +----------+  +----------+                |
|                    |                                       |
|                    v                                       |
|              +----------+                                 |
|              | Reranker |                                 |
|              +----------+                                 |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
|                  RESPONSE GENERATION                       |
|  +------------------------------------------------------+ |
|  | System Prompt + Retrieved Context + History           | |
|  |                    v                                  | |
|  |              LLM Generation                           | |
|  +------------------------------------------------------+ |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
|                   POST-PROCESSING                          |
|  +----------+  +----------+  +----------+                |
|  | Citation |  | Safety   |  | Language |                |
|  | Extract  |  | Check    |  | Verify   |                |
|  +----------+  +----------+  +----------+                |
|  +----------+  +----------+                               |
|  | Confid.  |  | Disclaimer|                               |
|  | Score    |  | Inject   |                               |
|  +----------+  +----------+                               |
+-----------------------------------------------------------+
    |
    v
Response to User
```

---

## 2. Intent Classification

### 2.1 Intent Categories

| Intent | Description | Trigger Examples | Pipeline |
|--------|-------------|-----------------|----------|
| `disease` | Crop disease/pest identification | "My leaves have spots", photo upload | CV or RAG |
| `weather` | Weather queries and advisories | "What's the weather?", "Will it rain?" | Weather API + LLM |
| `price` | Mandi price queries | "Onion price today", "Should I sell?" | Price API + LLM |
| `scheme` | Government scheme information | "PM-KISAN eligibility", "How to apply?" | Scheme DB + RAG |
| `general` | General farming advice | "Best fertilizer for tomato", "When to sow?" | RAG + LLM |
| `out_of_scope` | Non-agricultural queries | "What's the capital of France?" | Refusal |

### 2.2 Classification Prompt

```
You are an intent classifier for an Indian agricultural assistant.
Classify the user's message into exactly one intent category.

Intent categories:
- disease: Questions about crop diseases, pests, symptoms, treatments
- weather: Questions about weather, rain, temperature, climate
- price: Questions about mandi prices, market rates, selling decisions
- scheme: Questions about government schemes, subsidies, insurance, loans
- general: General farming questions about crops, soil, fertilizers, practices
- out_of_scope: Non-agricultural questions, personal questions, jokes

User message: {message}
User language: {language}
Has image: {has_image}

Respond with JSON: {"intent": "category", "confidence": 0.0-1.0, "reasoning": "brief explanation"}
```

### 2.3 Fallback Rules
- If classification confidence < 0.6, default to `general` and let RAG handle
- If image is attached, boost `disease` intent probability
- If message contains price-related keywords (rupees, mandi, rate), boost `price`
- If message contains scheme-related keywords (yojana, sarkar, subsidy), boost `scheme`

---

## 3. RAG Pipeline

### 3.1 Document Ingestion

#### Sources
| Source Type | Examples | Update Frequency |
|-------------|---------|-----------------|
| ICAR publications | Crop guides, disease manuals | Quarterly |
| State agriculture departments | Advisory bulletins, scheme docs | Monthly |
| KVK content | Best practices, crop calendars | Quarterly |
| Government scheme portals | PM-KISAN, PMFBY, state schemes | Monthly |
| Research papers | Agricultural university publications | As published |
| Partner content | FPO/NGO curated content | As provided |

#### Ingestion Pipeline

```
Source Document
    |
    v
+-----------------------------+
|  1. Document Loading         |
|  +-- PDF extraction          |
|  +-- HTML parsing            |
|  +-- API fetch               |
+-----------------------------+
    |
    v
+-----------------------------+
|  2. Cleaning & Metadata      |
|  +-- Remove headers/footers  |
|  +-- Extract title           |
|  +-- Extract date            |
|  +-- Extract geography       |
|  +-- Extract crop tags       |
|  +-- Detect language         |
+-----------------------------+
    |
    v
+-----------------------------+
|  3. Chunking Strategy        |
|  +-- Prose: 600-900 tokens   |
|  +-- Overlap: 100-150 tokens |
|  +-- Tables: preserve as-is  |
|  +-- Lists: preserve as-is   |
|  +-- Headers: attach to chunk|
+-----------------------------+
    |
    v
+-----------------------------+
|  4. Embedding                |
|  +-- Model: text-embedding-  |
|  |   3-small (1536 dim)      |
|  +-- Batch processing        |
|  +-- Store in pgvector       |
+-----------------------------+
    |
    v
+-----------------------------+
|  5. Quality Check            |
|  +-- Deduplication           |
|  +-- Min chunk length        |
|  +-- Language verification   |
|  +-- Source URL validation   |
+-----------------------------+
```

### 3.2 Retrieval Strategy

#### Hybrid Retrieval

```typescript
async function retrieve(query: string, filters: RetrievalFilters): Promise<Chunk[]> {
  // 1. Vector search (semantic similarity)
  const vectorResults = await vectorSearch(query, filters, {
    topK: 20,
    threshold: 0.7
  });

  // 2. Lexical search (keyword matching)
  const lexicalResults = await fullTextSearch(query, filters, {
    topK: 20
  });

  // 3. Merge and deduplicate
  const merged = mergeResults(vectorResults, lexicalResults);

  // 4. Rerank by relevance
  const reranked = await rerank(query, merged, {
    topK: 5,
    model: 'cross-encoder'
  });

  // 5. Apply freshness bias
  const freshened = applyFreshnessBias(reranked);

  return freshened;
}
```

#### Filters

```typescript
interface RetrievalFilters {
  crop?: string;          // e.g., "tomato"
  geography?: string;     // e.g., "Maharashtra"
  language?: string;      // e.g., "mr"
  docType?: string;       // e.g., "disease", "scheme"
  isVerified?: boolean;   // only verified sources
  maxAge?: number;        // max days since published
}
```

### 3.3 Vector Search Query

```sql
SELECT
  dc.id,
  dc.content,
  dc.doc_type,
  dc.crop,
  dc.geography,
  dc.language,
  1 - (dc.embedding <=> $query_embedding) AS similarity
FROM document_chunks dc
JOIN documents d ON dc.document_id = d.id
WHERE
  d.is_verified = true
  AND ($crop::text IS NULL OR $crop = ANY(dc.crop))
  AND ($geography::text IS NULL OR $geography = ANY(dc.geography))
  AND ($language::text IS NULL OR dc.language = $language)
ORDER BY dc.embedding <=> $query_embedding
LIMIT 20;
```

---

## 4. LLM Configuration

### 4.1 Model Selection

| Use Case | Model | Rationale |
|----------|-------|-----------|
| Primary response generation | GPT-4o | Best multilingual quality; complex reasoning |
| Simple queries (weather, price summary) | GPT-4o-mini | Lower cost; sufficient for templated responses |
| Intent classification | GPT-4o-mini | Fast; low cost; classification task |
| Translation verification | GPT-4o-mini | Quick check; lower stakes |
| Disease diagnosis (fallback) | GPT-4o Vision | When custom CV model unavailable |

### 4.2 Token Budget

| Component | Input Tokens | Output Tokens | Cost (GPT-4o) |
|-----------|-------------|---------------|---------------|
| System prompt | ~800 | - | ~$0.002 |
| Retrieved context (5 chunks) | ~3,000 | - | ~$0.0075 |
| Conversation history (5 turns) | ~1,500 | - | ~$0.00375 |
| User message | ~200 | - | ~$0.0005 |
| Response | - | ~400 | ~$0.004 |
| **Total per query** | **~5,500** | **~400** | **~$0.018** |

### 4.3 Response Generation Parameters

```typescript
const llmConfig = {
  model: 'gpt-4o',
  temperature: 0.3,        // Low for factual accuracy
  max_tokens: 800,         // Keep responses concise
  top_p: 0.9,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  response_format: { type: 'json_object' } // For structured outputs
};
```

---

## 5. System Prompts

### 5.1 Primary System Prompt

```
You are KisanAI, an agricultural assistant for Indian farmers. Your purpose is to help farmers make better daily crop decisions in their own language.

CORE PRINCIPLES:
1. VERNACULAR FIRST: Always respond in the user's language. If the user writes in Marathi, respond in Marathi. If Hindi, respond in Hindi. Never switch to English unless the user explicitly asks.
2. GROUNDED ANSWERS: Base your answers ONLY on the provided context and sources. If the context doesn't contain enough information, say "I'm not sure about this. Please consult your local KVK or agricultural officer."
3. ACTIONABLE ADVICE: Give specific, practical steps the farmer can take today. Avoid vague generalizations.
4. CITE SOURCES: When using information from retrieved context, mention the source naturally (e.g., "According to ICAR guidelines..." or "As per the Maharashtra Agriculture Department...").
5. SAFETY FIRST: Never recommend specific pesticide brands. Always mention safety precautions for chemical treatments. Always recommend consulting a local expert for serious problems.
6. ACKNOWLEDGE UNCERTAINTY: If you're not confident (>70%), say so. It's better to say "I'm not sure" than to give wrong advice that could harm a farmer's crop.

RESPONSE FORMAT:
- Keep responses under 200 words
- Use numbered lists for action steps
- Include a disclaimer for disease/chemical advice
- End with a helpful follow-up suggestion

CONTEXT PROVIDED:
{retrieved_context}

USER PROFILE:
- Location: {district}, {state}
- Primary crops: {crops}
- Language: {language}
- Query history: {recent_intents}
```

### 5.2 Disease Diagnosis Prompt

```
You are KisanAI's crop disease diagnosis assistant. A farmer has shared a photo of their crop with potential disease symptoms.

DIAGNOSIS RULES:
1. Only diagnose diseases you can see evidence for in the image
2. Provide top 3 possible diagnoses with confidence scores
3. If confidence is below 40%, say "I cannot clearly identify the problem from this photo. Please take a closer photo of the affected area or consult your local KVK."
4. For each diagnosis, provide:
   - Disease name in the farmer's language
   - Simple description of what it is
   - 2-3 specific action steps
   - Safety precautions if chemical treatment is needed
5. ALWAYS include a disclaimer: "This is a preliminary assessment. For confirmed diagnosis, consult your local agricultural extension officer."

TREATMENT KNOWLEDGE:
{treatment_context}

Respond in JSON format:
{
  "diagnoses": [
    {
      "name": "Disease name",
      "name_local": "Local language name",
      "confidence": 0.78,
      "severity": "low|medium|high|critical",
      "description": "Brief description",
      "affected_parts": ["leaf", "stem"]
    }
  ],
  "treatments": [
    {
      "type": "chemical|biological|cultural|preventive",
      "name": "Treatment name",
      "description": "What to do",
      "frequency": "How often",
      "safety_notes": "Safety precautions"
    }
  ],
  "disclaimer": "..."
}
```

### 5.3 Weather Advisory Prompt

```
You are KisanAI's weather advisory assistant. Translate weather data into actionable crop advice for the farmer.

WEATHER DATA:
{weather_data}

FARMER CONTEXT:
- Crops: {crops}
- Location: {district}, {state}
- Season: {season}

RULES:
1. Don't just repeat the weather numbers -- explain what they MEAN for the farmer's crops
2. Give specific actions: "Do X today/tomorrow because of Y"
3. Use the farmer's language
4. Keep it to 3-5 actionable points
5. If severe weather is expected, emphasize urgency

Respond in JSON format:
{
  "summary": "One-line weather summary",
  "actions": ["Action 1", "Action 2", ...],
  "urgency": "low|medium|high|critical",
  "next_check": "When to check again"
}
```

### 5.4 Refusal Prompt (Out of Scope)

```
You are KisanAI, an agricultural assistant. The user has asked a question that is not related to farming or agriculture.

Politely decline and redirect. Say something like:
"I'm an agricultural assistant and can help you with farming questions like crop diseases, weather, mandi prices, or government schemes. Is there anything about farming I can help you with?"

Respond in the user's language: {language}
```

---

## 6. Safety Guardrails

### 6.1 Pre-Generation Checks

| Check | Action | Trigger |
|-------|--------|---------|
| Toxic content detection | Block | User input contains slurs, threats |
| PII detection | Mask | User shares Aadhaar, bank details |
| Injection detection | Block | Prompt injection patterns detected |
| Rate limit | Queue | User exceeds query limit |

### 6.2 Post-Generation Checks

| Check | Action | Trigger |
|-------|--------|---------|
| Hallucination detection | Flag + abstain | Response contains claims not in context |
| Unsafe recommendation | Block + warn | Response recommends dangerous chemical use |
| Dosage verification | Flag | Specific chemical dosage mentioned |
| Brand recommendation | Remove | Specific pesticide/fertilizer brand mentioned |
| Financial advice | Block | Response gives specific financial recommendations |
| Medical advice | Block | Response gives human health advice |
| Language mismatch | Regenerate | Response language differs from user's |

### 6.3 Banned Patterns

```typescript
const BANNED_PATTERNS = [
  // Specific brand recommendations
  /(?:use|buy|apply|spray)\s+(?:brand|product)\s+\w+/i,

  // Specific dosages without safety context
  /(\d+)\s*(?:ml|gm|kg|liter)\s*per\s*(?:liter|gallon|acre)/i,

  // Financial guarantees
  /(?:guaranteed|100%|always|never)\s+(?:profit|income|return)/i,

  // Medical advice
  /(?:eat|drink|consume|swallow)\s+(?:for|to cure|to treat)/i,

  // Unsafe chemical combinations
  /(?:mix|combine)\s+(?:with|and)\s+(?:acid|bleach)/i
];
```

### 6.4 Confidence Thresholds

| Confidence Level | Behavior | Example |
|-----------------|----------|---------|
| > 0.8 | Full response with citation | "Based on ICAR guidelines, this is Early Blight..." |
| 0.6 - 0.8 | Response with hedging | "This looks like it could be Early Blight, but I'm not completely sure..." |
| 0.4 - 0.6 | Response with strong caveat | "I'm not confident about this diagnosis. Please consult your local KVK." |
| < 0.4 | Abstain | "I cannot identify this problem from the information provided. Please consult an expert." |

### 6.5 Escalation Rules

| Scenario | Escalation |
|----------|-----------|
| User reports crop loss | Suggest contacting KVK, provide helpline numbers |
| User asks about chemical application | Always recommend consulting local expert |
| User shares distress signals | Provide Kisan Call Centre number (1800-180-1551) |
| Disease severity = critical | Strongly recommend immediate expert consultation |
| User asks about financial decisions | Disclaimer: "I'm not a financial advisor" |

---

## 7. Evaluation Framework

### 7.1 Golden Dataset

Create a golden evaluation dataset with:
- 500+ question-answer pairs per intent category
- 3+ languages (Hindi, Marathi, Telugu)
- Expert-verified answers
- Edge cases and adversarial inputs

### 7.2 Evaluation Metrics

| Category | Metric | Target | Measurement |
|----------|--------|--------|-------------|
| **Relevance** | Answer relevance score | > 0.8 | LLM-as-judge |
| **Groundedness** | % answers supported by context | > 85% | Citation verification |
| **Accuracy** | Factual correctness | > 90% | Expert review |
| **Language** | Language match rate | > 95% | Automated check |
| **Safety** | Unsafe recommendation rate | < 1% | Red team testing |
| **Completeness** | % queries fully answered | > 70% | Human evaluation |
| **Latency** | P50 response time | < 3s | Application metrics |
| **Hallucination** | % unsupported claims | < 5% | Automated + human |

### 7.3 Evaluation Pipeline

```
Golden Dataset
    |
    v
+-----------------------------+
|  1. Run through pipeline     |
|  +-- Same prompts            |
|  +-- Same retrieval          |
|  +-- Same post-processing    |
+-----------------------------+
    |
    v
+-----------------------------+
|  2. Automated evaluation     |
|  +-- Language detection      |
|  +-- Citation presence       |
|  +-- Response length         |
|  +-- Banned pattern check    |
+-----------------------------+
    |
    v
+-----------------------------+
|  3. LLM-as-judge             |
|  +-- Relevance scoring       |
|  +-- Groundedness check      |
|  +-- Completeness assessment |
+-----------------------------+
    |
    v
+-----------------------------+
|  4. Human review (sample)    |
|  +-- Random 10% of queries   |
|  +-- Expert verification     |
|  +-- Edge case review        |
+-----------------------------+
    |
    v
Evaluation Report
```

### 7.4 Continuous Monitoring

| Metric | Frequency | Alert Threshold |
|--------|-----------|----------------|
| Grounded answer rate | Daily | < 80% |
| Abstention rate | Daily | > 15% or < 3% |
| Positive feedback rate | Daily | < 65% |
| False advice reports | Daily | > 5 per day |
| Latency P95 | Real-time | > 8 seconds |
| Error rate | Real-time | > 5% |

---

## 8. Model Governance

### 8.1 Version Control

| Component | Versioning | Rollback |
|-----------|-----------|----------|
| System prompts | Git (prompt files) | Immediate |
| LLM model version | Config flag | Immediate |
| CV model | Model registry | 1-click |
| Knowledge base | Document versioning | Re-index |
| Retrieval config | Git | Immediate |

### 8.2 A/B Testing Framework

```typescript
interface Experiment {
  id: string;
  name: string;
  variants: {
    control: PipelineConfig;
    treatment: PipelineConfig;
  };
  traffic_split: number; // 0.0 to 1.0
  metrics: string[];
  status: 'running' | 'completed' | 'rolled_back';
}
```

### 8.3 Red Team Testing

| Attack Vector | Test Method | Frequency |
|--------------|-------------|-----------|
| Prompt injection | Automated fuzzing | Weekly |
| Harmful content generation | Manual adversarial testing | Monthly |
| Hallucination triggering | Edge case dataset | Weekly |
| Language switching | Multilingual adversarial inputs | Monthly |
| Safety bypass | Manual red team sessions | Quarterly |

### 8.4 Incident Response

| Severity | Description | Response Time | Action |
|----------|-------------|---------------|--------|
| P0 | Unsafe advice given to users | < 1 hour | Rollback model, notify affected users |
| P1 | High hallucination rate detected | < 4 hours | Investigate, adjust prompts, redeploy |
| P2 | Language quality degradation | < 24 hours | Review prompts, test with native speakers |
| P3 | Minor factual errors | < 1 week | Update knowledge base, re-evaluate |

---

## 9. Cost Optimization

### 9.1 Strategies

| Strategy | Savings | Trade-off |
|----------|---------|-----------|
| Use GPT-4o-mini for simple queries | 90% cost reduction | Slightly lower quality |
| Cache frequent query results | 30-50% reduction | Stale responses possible |
| Reduce context window for simple queries | 20-30% reduction | Less context for LLM |
| Batch embedding generation | 50% on ingestion | Slight delay in indexing |
| Use smaller embedding model | 60% on embeddings | Lower retrieval quality |

### 9.2 Query Routing for Cost

```typescript
function selectModel(query: QueryContext): string {
  // Simple templated responses (weather, price summary)
  if (query.intent === 'weather' || query.intent === 'price') {
    return 'gpt-4o-mini'; // $0.15/1M input tokens
  }

  // Complex reasoning (disease diagnosis, scheme eligibility)
  if (query.intent === 'disease' || query.intent === 'scheme') {
    return 'gpt-4o'; // $2.50/1M input tokens
  }

  // General queries - start with mini, escalate if needed
  if (query.complexity === 'low') {
    return 'gpt-4o-mini';
  }

  return 'gpt-4o';
}
```

---

## 10. Future Enhancements

### 10.1 Phase 2 (Post-MVP)
- Fine-tuned models for specific crop/disease pairs
- Multi-turn conversation memory
- Proactive alerts based on weather/price triggers
- Voice-first interaction mode

### 10.2 Phase 3 (Scale)
- Custom embedding models trained on agricultural corpus
- Federated learning from user feedback
- Real-time knowledge base updates
- Multi-modal reasoning (image + text + voice combined)
