# 13 - Testing Plan: KisanAI

## Document Purpose
Define the comprehensive testing strategy for KisanAI covering unit tests, integration tests, end-to-end tests, AI quality evaluation, security testing, and user acceptance testing. This plan ensures quality, safety, and reliability before pilot launch.

---

## 1. Testing Philosophy

### 1.1 Principles
1. **Safety first**: AI responses must be tested for harmful recommendations before any user sees them
2. **Vernacular accuracy**: Language quality is a feature, not a nice-to-have
3. **Real-world conditions**: Test on low-end devices, slow networks, and real farmer inputs
4. **Continuous evaluation**: AI quality is measured daily, not just at launch
5. **Farmer-centric**: Test with real farmers, not just engineers

### 1.2 Testing Pyramid

```
         /\
        /  \        E2E Tests (10%)
       /    \       - Critical user journeys
      /------\      - WhatsApp integration
     /        \
    /          \    Integration Tests (30%)
   /            \   - API endpoints
  /--------------\  - Database operations
 /                \ - AI pipeline
/                  \
/                  \ Unit Tests (60%)
/                    \ - Components
/                      \- Utilities
/                        \- AI functions
```

---

## 2. Unit Testing

### 2.1 Frontend Unit Tests

**Framework**: Vitest + React Testing Library

| Component | Test Cases | Priority |
|-----------|-----------|----------|
| ChatBubble | Renders text, shows timestamp, handles citations, user vs bot styling | P0 |
| ChatInput | Sends message on submit, disables when empty, handles keyboard | P0 |
| DiseaseCard | Shows diagnosis, confidence bar, treatments, disclaimer | P0 |
| WeatherCard | Shows forecast, advisory, actions, source | P0 |
| PriceCard | Shows prices, trends, MSP comparison | P0 |
| SchemeCard | Shows eligibility, benefits, apply link, disclaimer | P0 |
| LanguageToggle | Switches language, reflects current selection | P1 |
| BottomNav | Highlights active tab, navigates correctly | P1 |
| VoiceRecorder | Starts/stops recording, shows waveform | P1 |
| SuggestedQuestions | Displays suggestions, handles click | P1 |

**Example Test**:
```typescript
// ChatBubble.test.tsx
describe('ChatBubble', () => {
  it('renders user message with correct styling', () => {
    render(<ChatBubble message={{ role: 'user', content: 'Hello' }} />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByTestId('chat-bubble')).toHaveClass('bg-primary-50');
  });

  it('renders bot message with source citation', () => {
    render(<ChatBubble message={{
      role: 'assistant',
      content: 'Answer',
      sources: [{ title: 'ICAR Guide', url: 'https://...' }]
    }} />);
    expect(screen.getByText('ICAR Guide')).toBeInTheDocument();
  });

  it('renders disclaimer for disease responses', () => {
    render(<ChatBubble message={{
      role: 'assistant',
      content: 'Diagnosis',
      intent: 'disease'
    }} />);
    expect(screen.getByText(/preliminary assessment/)).toBeInTheDocument();
  });
});
```

### 2.2 Backend Unit Tests

**Framework**: Vitest

| Module | Test Cases | Priority |
|--------|-----------|----------|
| Intent classifier | Correct classification for each intent, confidence scoring | P0 |
| Language detector | Detects Hindi, Marathi, Telugu, etc., handles code-mixing | P0 |
| Prompt builder | Correct system prompt assembly, context injection | P0 |
| Response parser | Parses LLM JSON output, handles malformed responses | P0 |
| Safety guardrails | Blocks banned patterns, flags unsafe content | P0 |
| Citation extractor | Extracts sources from context, formats citations | P1 |
| PII masker | Masks Aadhaar, bank details, phone numbers | P0 |
| Rate limiter | Enforces limits, handles edge cases | P1 |
| Input validator | Validates all API inputs (Zod schemas) | P0 |

**Example Test**:
```typescript
// intent-classifier.test.ts
describe('Intent Classifier', () => {
  it('classifies disease queries correctly', async () => {
    const result = await classifyIntent('My tomato leaves have white spots');
    expect(result.intent).toBe('disease');
    expect(result.confidence).toBeGreaterThan(0.7);
  });

  it('classifies price queries correctly', async () => {
    const result = await classifyIntent('What is onion price in Nashik?');
    expect(result.intent).toBe('price');
  });

  it('classifies out-of-scope queries', async () => {
    const result = await classifyIntent('What is the capital of France?');
    expect(result.intent).toBe('out_of_scope');
  });

  it('handles code-mixed input', async () => {
    const result = await classifyIntent('Mere tomato ke patton par white spots hain');
    expect(result.intent).toBe('disease');
  });
});
```

### 2.3 AI Function Unit Tests

| Function | Test Cases | Priority |
|----------|-----------|----------|
| Vector search | Returns relevant chunks, handles empty results, filters work | P0 |
| Reranker | Orders results by relevance, respects topK | P1 |
| Confidence scorer | Calculates correct confidence, handles edge cases | P0 |
| Response generator | Generates valid JSON, handles timeouts | P0 |
| Safety checker | Detects unsafe content, passes safe content | P0 |

---

## 3. Integration Testing

### 3.1 API Integration Tests

**Framework**: Vitest + Supertest

| Endpoint | Test Cases | Priority |
|----------|-----------|----------|
| POST /api/chat | Returns response, persists message, handles errors | P0 |
| POST /api/scan | Accepts image, returns diagnosis, handles large files | P0 |
| GET /api/weather | Returns weather data, handles missing location | P0 |
| GET /api/prices | Returns prices, handles missing commodity | P0 |
| GET /api/schemes | Returns schemes, filters work | P1 |
| POST /api/feedback | Stores feedback, validates input | P1 |
| POST /api/auth/whatsapp-otp/send | Sends OTP, rate limits | P0 |
| POST /api/auth/whatsapp-otp/verify | Verifies OTP, creates session | P0 |

**Example Test**:
```typescript
// chat.integration.test.ts
describe('POST /api/chat', () => {
  it('returns AI response for valid message', async () => {
    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'What is the weather today?', language: 'hi' })
      .set('Cookie', validSessionCookie);

    expect(response.status).toBe(200);
    expect(response.body.message.content).toBeDefined();
    expect(response.body.message.intent).toBeDefined();
  });

  it('persists message to database', async () => {
    await request(app)
      .post('/api/chat')
      .send({ message: 'Test message', language: 'hi' })
      .set('Cookie', validSessionCookie);

    const messages = await db.message.findMany();
    expect(messages).toHaveLength(2); // user + assistant
  });

  it('returns 401 without authentication', async () => {
    const response = await request(app)
      .post('/api/chat')
      .send({ message: 'Test' });

    expect(response.status).toBe(401);
  });
});
```

### 3.2 Database Integration Tests

| Operation | Test Cases | Priority |
|-----------|-----------|----------|
| User CRUD | Create, read, update, soft delete | P0 |
| Conversation CRUD | Create, list, update last message | P0 |
| Message CRUD | Create, list by conversation, paginate | P0 |
| Document chunk search | Vector search, filters, pagination | P0 |
| Mandi price queries | Filter by commodity, location, date | P1 |
| Scheme queries | Filter by level, state, category | P1 |

### 3.3 AI Pipeline Integration Tests

| Pipeline | Test Cases | Priority |
|----------|-----------|----------|
| End-to-end chat | Input -> intent -> retrieval -> generation -> response | P0 |
| Disease diagnosis | Image -> preprocessing -> CV model -> treatment -> response | P0 |
| Weather advisory | Query -> weather API -> LLM summarization -> response | P0 |
| Price context | Query -> price API -> LLM context -> response | P0 |
| Scheme lookup | Query -> scheme DB -> LLM explanation -> response | P1 |

---

## 4. End-to-End Testing

**Framework**: Playwright

### 4.1 Critical User Journeys

| Journey | Steps | Priority |
|---------|-------|----------|
| First-time user activation | Open PWA -> consent -> ask first question -> receive answer | P0 |
| Disease triage | Open chat -> upload photo -> receive diagnosis -> view treatments | P0 |
| Weather advisory | Open weather -> see forecast -> read crop advisory | P0 |
| Price check | Open prices -> select commodity -> view prices and trends | P0 |
| Scheme lookup | Open schemes -> search -> view eligibility -> click apply link | P1 |
| Share answer | Receive answer -> click share -> WhatsApp opens | P1 |
| Language switch | Change language -> UI updates -> bot responds in new language | P1 |
| Feedback | Receive answer -> click thumbs down -> submit reason | P1 |

**Example Test**:
```typescript
// first-time-user.spec.ts
test.describe('First-time User', () => {
  test('can ask first question and receive answer', async ({ page }) => {
    await page.goto('/');

    // Consent flow
    await page.click('text=I Agree');
    await page.waitForURL('/chat');

    // Ask question
    await page.fill('[data-testid="chat-input"]', 'My tomato leaves have spots');
    await page.click('[data-testid="send-button"]');

    // Wait for response
    await page.waitForSelector('[data-testid="bot-response"]', { timeout: 10000 });

    // Verify response
    const response = await page.textContent('[data-testid="bot-response"]');
    expect(response).toBeTruthy();
    expect(response.length).toBeGreaterThan(50);

    // Verify source citation
    const citation = await page.textContent('[data-testid="source-citation"]');
    expect(citation).toBeTruthy();
  });
});
```

### 4.2 Device and Network Testing

| Condition | Devices | Network | Priority |
|-----------|---------|---------|----------|
| Low-end Android | Redmi 9A, Samsung Galaxy A03 | 3G (750kbps) | P0 |
| Mid-range Android | Pixel 6a, Samsung Galaxy A53 | 4G (5Mbps) | P0 |
| iPhone | iPhone SE, iPhone 14 | 4G (5Mbps) | P1 |
| Tablet | iPad, Samsung Tab | WiFi | P2 |
| Slow network | Any | 2G (250kbps) | P0 |
| Intermittent | Any | Drops every 30s | P1 |

---

## 5. AI Quality Evaluation

### 5.1 Evaluation Dataset

| Category | Size | Languages | Source |
|----------|------|-----------|--------|
| Disease queries | 200 | Hindi, Marathi, Telugu | Expert-verified |
| Weather queries | 100 | Hindi, Marathi | Expert-verified |
| Price queries | 100 | Hindi, Marathi | Expert-verified |
| Scheme queries | 100 | Hindi, Marathi | Expert-verified |
| General farming | 200 | Hindi, Marathi, Telugu | Expert-verified |
| Out-of-scope | 50 | Mixed | Adversarial |
| Edge cases | 50 | Mixed | Adversarial |
| **Total** | **800** | **3+ languages** | - |

### 5.2 Evaluation Metrics

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Grounded answer rate | > 85% | Citation verification + human review |
| Factual accuracy | > 90% | Expert verification of random 10% |
| Language match | > 95% | Automated language detection |
| Response completeness | > 70% | Human evaluation |
| Safety compliance | 100% | Automated + human review |
| Hallucination rate | < 5% | Automated + human review |
| Abstention appropriateness | > 90% | Human evaluation |

### 5.3 Evaluation Pipeline

```
Evaluation Dataset
    |
    v
+-----------------------------+
|  1. Run through pipeline     |
|  (same prompts, retrieval)   |
+-----------------------------+
    |
    v
+-----------------------------+
|  2. Automated checks         |
|  - Language detection        |
|  - Citation presence         |
|  - Banned pattern check      |
|  - Response length           |
+-----------------------------+
    |
    v
+-----------------------------+
|  3. LLM-as-judge             |
|  - Relevance scoring         |
|  - Groundedness check        |
|  - Completeness assessment   |
+-----------------------------+
    |
    v
+-----------------------------+
|  4. Human review (10%)       |
|  - Expert verification       |
|  - Edge case review          |
|  - Safety review             |
+-----------------------------+
    |
    v
Evaluation Report
```

### 5.4 Red Team Testing

| Attack Vector | Test Method | Frequency |
|--------------|-------------|-----------|
| Prompt injection | Automated fuzzing + manual | Weekly |
| Harmful content generation | Manual adversarial testing | Monthly |
| Hallucination triggering | Edge case dataset | Weekly |
| Language switching attacks | Multilingual adversarial inputs | Monthly |
| PII extraction attempts | Automated + manual | Weekly |
| Safety bypass attempts | Manual red team sessions | Quarterly |

---

## 6. Security Testing

### 6.1 Automated Security Scans

| Tool | Frequency | Scope |
|------|-----------|-------|
| npm audit | Every build | Dependency vulnerabilities |
| Snyk | Weekly | Dependency + container vulnerabilities |
| OWASP ZAP | Monthly | Web application vulnerabilities |
| ESLint security | Every commit | Code-level security issues |

### 6.2 Manual Security Testing

| Test | Frequency | Scope |
|------|-----------|-------|
| Authentication bypass | Monthly | All auth flows |
| Authorization escalation | Monthly | Role-based access |
| Input validation | Monthly | All API endpoints |
| File upload vulnerabilities | Monthly | Image upload flow |
| Session management | Monthly | Token handling |
| API rate limiting | Monthly | All endpoints |

### 6.3 Privacy Testing

| Test | Frequency | Scope |
|------|-----------|-------|
| PII detection accuracy | Weekly | Chat messages, images |
| Data retention compliance | Monthly | All data types |
| Consent flow completeness | Monthly | All consent points |
| Data deletion verification | Monthly | User deletion flow |
| Cross-border transfer audit | Quarterly | External API calls |

---

## 7. Performance Testing

### 7.1 Load Testing

**Tool**: k6

| Scenario | Concurrent Users | Duration | Target |
|----------|-----------------|----------|--------|
| Normal load | 100 | 10 min | P95 < 6s |
| Peak load | 500 | 5 min | P95 < 10s |
| Stress test | 1000 | 5 min | No crashes |
| Spike test | 0 -> 500 -> 0 | 5 min | Graceful handling |

**Example Script**:
```javascript
// load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 500 },
    { duration: '5m', target: 500 },
    { duration: '2m', target: 0 },
  ],
};

export default function () {
  const payload = JSON.stringify({
    message: 'What is the weather today?',
    language: 'hi',
  });

  const res = http.post('https://kishanai.strivio.world/api/chat', payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 6s': (r) => r.timings.duration < 6000,
    'has response content': (r) => JSON.parse(r.body).message?.content?.length > 0,
  });

  sleep(1);
}
```

### 7.2 Performance Benchmarks

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | < 1.5s (3G) | Lighthouse |
| Largest Contentful Paint | < 2.5s (3G) | Lighthouse |
| Time to Interactive | < 3.0s (3G) | Lighthouse |
| Chat response (P50) | < 3s | Application metrics |
| Chat response (P95) | < 6s | Application metrics |
| Disease diagnosis (P50) | < 5s | Application metrics |
| API response (P50) | < 200ms | Cloudflare Analytics |
| Bundle size (initial) | < 500KB | Webpack analyzer |

---

## 8. User Acceptance Testing (UAT)

### 8.1 UAT Participants

| Group | Number | Selection Criteria |
|-------|--------|-------------------|
| Farmers (primary) | 20 | Different crops, languages, tech comfort |
| FPO managers | 3 | From pilot partner FPOs |
| NGO workers | 2 | From partner NGOs |
| Agri-input retailers | 3 | From target districts |

### 8.2 UAT Scenarios

| Scenario | Success Criteria |
|----------|-----------------|
| Ask a disease question | User understands diagnosis and next steps |
| Upload a crop photo | User receives diagnosis within 10 seconds |
| Check weather advisory | User understands what action to take |
| Check mandi prices | User can compare prices and understand trends |
| Look up a scheme | User understands eligibility and how to apply |
| Share an answer | User successfully shares to WhatsApp |
| Switch language | UI and responses change to new language |

### 8.3 UAT Feedback Collection

| Method | When | Duration |
|--------|------|----------|
| Think-aloud sessions | During task completion | 30 min per user |
| Post-task questionnaire | After each scenario | 5 min per scenario |
| Overall satisfaction survey | End of session | 10 min |
| Follow-up interview | 1 week later | 15 min |

### 8.4 UAT Metrics

| Metric | Target |
|--------|--------|
| Task completion rate | > 80% |
| Time on task | < 2 min for simple queries |
| System Usability Scale (SUS) | > 68 (above average) |
| Net Promoter Score (NPS) | > 30 |
| Farmer satisfaction | > 70% positive |

---

## 9. Continuous Testing

### 9.1 CI/CD Pipeline Tests

```yaml
# On every push/PR:
- Lint (ESLint)
- Type check (TypeScript)
- Unit tests (Vitest)
- Integration tests (Vitest)

# On PR to main:
- All above
- E2E tests (Playwright)
- Security scan (npm audit)
- Performance check (Lighthouse)

# On deploy to production:
- All above
- Smoke tests (critical paths)
- Load test (quick)
```

### 9.2 Daily Automated Checks

| Check | Frequency | Alert Threshold |
|-------|-----------|----------------|
| AI quality sampling | Daily | Grounded rate < 80% |
| Error rate monitoring | Real-time | > 5% |
| Latency monitoring | Real-time | P95 > 8s |
| Uptime monitoring | Real-time | < 99.5% |
| Security scan | Daily | New critical vulnerabilities |

### 9.3 Weekly Reviews

| Review | Participants | Deliverable |
|--------|-------------|-------------|
| Quality review | Engineering + Content | Quality metrics report |
| User feedback review | Product + Content | Feedback summary |
| Security review | Engineering | Security status |
| Performance review | Engineering | Performance report |

---

## 10. Test Environment

### 10.1 Environments

| Environment | Purpose | URL | Database |
|-------------|---------|-----|----------|
| Local | Development | localhost:3000 | Local PostgreSQL |
| Preview | PR reviews | *.pages.dev | Neon preview branch |
| Staging | Pre-production | staging.kishanai.strivio.world | Neon staging |
| Production | Live | kishanai.strivio.world | Neon main |

### 10.2 Test Data

| Data Type | Source | Refresh |
|-----------|--------|---------|
| User accounts | Seeded fixtures | Weekly |
| Conversations | Seeded fixtures | Weekly |
| Knowledge base | Subset of production | Monthly |
| Disease database | Full production copy | Monthly |
| Mandi prices | Mock data | Daily |
| Weather data | Mock data | Daily |
