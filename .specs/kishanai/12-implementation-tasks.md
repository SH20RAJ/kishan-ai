# 12 - Implementation Tasks: KisanAI

## Document Purpose
Provide a phased, actionable task breakdown for building KisanAI from current state to pilot launch. Each task has clear ownership, dependencies, effort estimates, and acceptance criteria.

---

## 1. Phase Overview

| Phase | Duration | Goal | Key Deliverables |
|-------|----------|------|-----------------|
| Phase 1: Foundation | Weeks 1-3 | Core infrastructure and chat | Working chat interface, basic AI pipeline |
| Phase 2: Features | Weeks 4-6 | Disease triage, weather, prices | All MVP features functional |
| Phase 3: Polish | Weeks 7-8 | Quality, safety, analytics | Production-ready system |
| Phase 4: Pilot | Weeks 9-12 | Launch with FPO partners | Live users, feedback loop |

---

## 2. Phase 1: Foundation (Weeks 1-3)

### 2.1 Week 1: Project Setup

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Set up Next.js project with App Router | Engineer 1 | 4h | None | Project runs locally, TypeScript configured |
| Configure Tailwind CSS + design tokens | Engineer 1 | 3h | Next.js setup | Design system colors/fonts working |
| Set up Neon PostgreSQL database | Engineer 2 | 2h | None | Database accessible, pgvector extension enabled |
| Create Prisma schema (users, conversations, messages) | Engineer 2 | 4h | Database setup | Schema generates, migrations work |
| Set up Cloudflare R2 bucket | Engineer 1 | 2h | None | Bucket accessible, upload/download working |
| Configure environment variables | Both | 1h | All services | .env.example documented |
| Set up GitHub repo + CI/CD | Engineer 1 | 3h | None | Lint, type-check, test on push |
| Create base layout with navigation | Engineer 1 | 4h | Next.js + Tailwind | Bottom nav, top bar, responsive |

### 2.2 Week 2: Chat Interface

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Build ChatBubble component (user + bot) | Engineer 1 | 4h | Layout | Renders text, timestamps, citations |
| Build ChatInput component | Engineer 1 | 3h | Layout | Text input, send button, keyboard handling |
| Build SuggestedQuestions component | Engineer 1 | 2h | ChatInput | Displays clickable suggestions |
| Create chat page (/chat) | Engineer 1 | 3h | All chat components | Functional chat UI |
| Implement useChat hook | Engineer 2 | 4h | Chat page | Manages state, sends messages |
| Create POST /api/chat endpoint | Engineer 2 | 4h | Prisma schema | Accepts message, returns response |
| Implement basic LLM integration (OpenAI) | Engineer 2 | 4h | API endpoint | Sends prompt, gets response |
| Add message persistence to database | Engineer 2 | 3h | Prisma schema | Messages saved and retrievable |

### 2.3 Week 3: AI Pipeline Basics

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Implement intent classifier | Engineer 2 | 6h | LLM integration | Classifies into 6 intents with confidence |
| Create system prompt for general queries | Engineer 2 | 4h | LLM integration | Responds in user's language, cites sources |
| Implement language detection | Engineer 2 | 3h | None | Detects Hindi, Marathi, Telugu, etc. |
| Set up pgvector for document chunks | Engineer 2 | 4h | Database setup | Vector search working |
| Create document ingestion script | Engineer 2 | 6h | pgvector | Can ingest and chunk documents |
| Seed initial knowledge base (50 documents) | Content | 8h | Ingestion script | Documents indexed and searchable |
| Implement basic retrieval (vector search) | Engineer 2 | 4h | pgvector + documents | Retrieves relevant chunks |
| Add conversation history to prompts | Engineer 2 | 3h | Message persistence | Last 5 messages in context |

---

## 3. Phase 2: Features (Weeks 4-6)

### 3.1 Week 4: Disease Triage

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Build ImagePreview component | Engineer 1 | 3h | Chat UI | Shows preview before sending |
| Create camera capture flow | Engineer 1 | 4h | ImagePreview | Can take photo on mobile |
| Create gallery upload flow | Engineer 1 | 2h | ImagePreview | Can select from gallery |
| Build DiseaseCard component | Engineer 1 | 4h | None | Shows diagnosis, confidence, treatments |
| Create POST /api/scan endpoint | Engineer 2 | 4h | R2 storage | Accepts image, returns diagnosis |
| Integrate crop-disease CV model | Engineer 2 | 8h | API endpoint | Returns top-3 diagnoses |
| Implement treatment retrieval | Engineer 2 | 4h | Knowledge base | Retrieves treatments for diagnosed disease |
| Create disease diagnosis prompt | Engineer 2 | 3h | CV + retrieval | Generates structured diagnosis response |
| Add disease disclaimer to responses | Engineer 1 | 1h | DiseaseCard | Disclaimer shown on every diagnosis |

### 3.2 Week 5: Weather and Prices

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Build WeatherCard component | Engineer 1 | 4h | None | Shows forecast, advisory, actions |
| Build PriceCard component | Engineer 1 | 4h | None | Shows prices, trends, MSP comparison |
| Create weather API connector | Engineer 2 | 4h | None | Fetches district-level weather |
| Create mandi price scraper/API | Engineer 2 | 6h | None | Fetches daily prices from AGMARKNET |
| Create GET /api/weather endpoint | Engineer 2 | 3h | Weather connector | Returns weather + crop advisory |
| Create GET /api/prices endpoint | Engineer 2 | 3h | Price scraper | Returns prices + trends |
| Implement weather advisory prompt | Engineer 2 | 3h | Weather endpoint | Generates crop-specific weather advice |
| Implement price context prompt | Engineer 2 | 3h | Price endpoint | Generates price trend explanation |
| Add proactive weather alerts | Engineer 2 | 4h | Weather connector | Sends alerts for extreme weather |

### 3.3 Week 6: Schemes and Polish

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Build SchemeCard component | Engineer 1 | 4h | None | Shows eligibility, benefits, apply link |
| Seed scheme database (50 central + 20 state) | Content | 8h | None | Schemes indexed and searchable |
| Create GET /api/schemes endpoint | Engineer 2 | 3h | Scheme DB | Returns matching schemes |
| Implement scheme explainer prompt | Engineer 2 | 3h | Scheme endpoint | Generates plain-language explanation |
| Add scheme disclaimer to responses | Engineer 1 | 1h | SchemeCard | Disclaimer shown on every scheme response |
| Implement feedback buttons (thumbs up/down) | Engineer 1 | 3h | Chat UI | Users can rate responses |
| Create POST /api/feedback endpoint | Engineer 2 | 2h | None | Stores feedback in database |
| Build shareable answer cards | Engineer 1 | 4h | All cards | Cards render as images for WhatsApp |
| Implement WhatsApp share functionality | Engineer 1 | 3h | Shareable cards | One-tap share to WhatsApp |

---

## 4. Phase 3: Polish (Weeks 7-8)

### 4.1 Week 7: Safety and Quality

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Implement hallucination detection | Engineer 2 | 6h | AI pipeline | Flags unsupported claims |
| Implement safety guardrails | Engineer 2 | 6h | AI pipeline | Blocks unsafe recommendations |
| Add PII detection and masking | Engineer 2 | 4h | None | Masks Aadhaar, bank details |
| Implement rate limiting | Engineer 2 | 3h | None | 30 req/min per user |
| Create consent flow (first interaction) | Engineer 1 | 4h | None | Shows consent, records acceptance |
| Implement language verification | Engineer 2 | 3h | AI pipeline | Ensures response matches user language |
| Add confidence thresholds | Engineer 2 | 3h | AI pipeline | Abstains when confidence < 0.4 |
| Create golden evaluation dataset (100 queries) | Content + ML | 8h | None | Expert-verified Q&A pairs |
| Run evaluation pipeline | ML | 4h | Golden dataset | Quality metrics report |

### 4.2 Week 8: Analytics and Admin

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Set up PostHog analytics | Engineer 1 | 3h | None | Events tracking working |
| Implement key event tracking | Engineer 1 | 4h | PostHog | Tracks activation, retention, quality |
| Build admin dashboard layout | Engineer 1 | 4h | None | Sidebar navigation, responsive |
| Build admin overview page | Engineer 1 | 4h | PostHog | Shows key metrics |
| Build member management page | Engineer 1 | 4h | Prisma | Lists, filters, details |
| Build analytics page | Engineer 1 | 6h | PostHog | Charts for queries, retention, quality |
| Create bulk import endpoint | Engineer 2 | 4h | Prisma | CSV import for FPO members |
| Implement admin authentication | Engineer 2 | 3h | NextAuth | Role-based access control |
| Add audit logging | Engineer 2 | 3h | None | Logs key system events |

---

## 5. Phase 4: Pilot (Weeks 9-12)

### 5.1 Week 9: WhatsApp Integration

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Set up WhatsApp Business API | Engineer 2 | 4h | Meta verification | API accessible |
| Implement WhatsApp webhook | Engineer 2 | 6h | API setup | Receives messages |
| Implement message parsing (text, image, voice) | Engineer 2 | 6h | Webhook | Handles all message types |
| Implement response sending | Engineer 2 | 4h | Webhook | Sends text and card responses |
| Add voice transcription (Whisper) | Engineer 2 | 4h | None | Transcribes voice notes |
| Test end-to-end WhatsApp flow | Both | 4h | All WhatsApp | Full conversation working |
| Set up Telegram bot | Engineer 2 | 3h | None | Basic bot working |

### 5.2 Week 10: FPO Onboarding

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Finalize FPO partnership (1st partner) | Founder | 8h | None | Signed MOU |
| Create onboarding materials (vernacular) | Content | 6h | None | PDF/WhatsApp-ready materials |
| Set up co-branded WhatsApp group | Engineer 2 | 2h | WhatsApp | Group created with FPO branding |
| Configure admin dashboard for FPO | Engineer 1 | 4h | Admin dashboard | FPO-specific view |
| Train FPO staff (2-hour session) | Founder | 2h | All systems | Staff can demo KisanAI |
| Onboard first 50 farmers | Founder + FPO | 8h | Training | 50 farmers in system |
| Conduct 10 farmer interviews | Founder | 6h | Onboarding | Interview notes documented |

### 5.3 Week 11: Iteration

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Analyze first 2 weeks of data | Both | 4h | Analytics | Quality report |
| Fix top 5 user-reported issues | Both | 8h | Data analysis | Issues resolved |
| Improve disease model accuracy | ML | 8h | User feedback | Accuracy improved |
| Optimize response latency | Engineer 2 | 4h | Analytics | P95 < 6 seconds |
| Expand to 200 farmers | Founder | 4h | Fixes deployed | 200 active users |
| Conduct 10 more farmer interviews | Founder | 6h | Expansion | Interview notes documented |

### 5.4 Week 12: Scale and Review

| Task | Owner | Effort | Dependencies | Acceptance Criteria |
|------|-------|--------|-------------|-------------------|
| Finalize 2nd FPO partnership | Founder | 8h | None | Signed MOU |
| Expand to 500 farmers | Founder | 4h | 2nd FPO | 500 active users |
| Generate pilot metrics report | Both | 4h | Analytics | All KPIs documented |
| Update investor deck with data | Founder | 4h | Metrics report | Deck ready |
| Create expansion plan | Both | 4h | Pilot learnings | Plan documented |
| Conduct 10 final farmer interviews | Founder | 6h | Scale | Interview notes documented |
| Prepare 90-day review presentation | Founder | 4h | All data | Presentation ready |

---

## 6. Task Dependencies

### 6.1 Critical Path

```
Project Setup (Week 1)
    |
    v
Chat Interface (Week 2)
    |
    v
AI Pipeline (Week 3)
    |
    +-- Disease Triage (Week 4) --+
    |                              |
    +-- Weather + Prices (Week 5) -+
    |                              |
    +-- Schemes (Week 6) ----------+
    |                              |
    v                              v
Safety + Quality (Week 7)
    |
    v
Analytics + Admin (Week 8)
    |
    v
WhatsApp Integration (Week 9)
    |
    v
FPO Onboarding (Week 10)
    |
    v
Iteration (Week 11)
    |
    v
Scale + Review (Week 12)
```

### 6.2 Parallel Tracks

| Track | Weeks 1-3 | Weeks 4-6 | Weeks 7-8 | Weeks 9-12 |
|-------|-----------|-----------|-----------|------------|
| Frontend | Chat UI | Feature cards | Admin dashboard | Polish |
| Backend | API + DB | Feature APIs | Safety + analytics | WhatsApp |
| AI/ML | Pipeline basics | Disease model | Evaluation | Optimization |
| Content | Knowledge base | Schemes | Golden dataset | Iteration |
| Business | Research | Partner outreach | Pilot prep | Onboarding |

---

## 7. Effort Summary

### 7.1 By Phase

| Phase | Engineering | Content | Business | Total |
|-------|-----------|---------|----------|-------|
| Phase 1 (Weeks 1-3) | 96h | 8h | 4h | 108h |
| Phase 2 (Weeks 4-6) | 96h | 8h | 4h | 108h |
| Phase 3 (Weeks 7-8) | 72h | 12h | 4h | 88h |
| Phase 4 (Weeks 9-12) | 64h | 6h | 40h | 110h |
| **Total** | **328h** | **34h** | **52h** | **414h** |

### 7.2 By Role

| Role | Total Hours | Weekly Average |
|------|-----------|---------------|
| Engineer 1 (Frontend) | 164h | 13.7h |
| Engineer 2 (Backend/ML) | 164h | 13.7h |
| Content Specialist | 34h | 2.8h |
| Founder (Business) | 52h | 4.3h |

---

## 8. Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-----------|--------|-----------|
| CV model accuracy too low | Medium | High | Start with text-based diagnosis, improve model iteratively |
| WhatsApp API approval delayed | Medium | Medium | Have PWA as primary channel, WhatsApp as enhancement |
| FPO partner drops out | Low | High | Maintain pipeline of 3+ potential partners |
| Knowledge base quality issues | Medium | Medium | Human review all content, start with verified sources |
| Latency too high | Medium | Medium | Optimize prompts, cache frequent queries |
| Farmer adoption low | Medium | High | Manual onboarding, FPO support, iterate on UX |

---

## 9. Definition of Done

### 9.1 Feature Complete
- All acceptance criteria met
- Code reviewed by at least one other engineer
- Unit tests written (>80% coverage for new code)
- Integration tests passing
- No critical or high-severity bugs
- Documentation updated

### 9.2 Pilot Ready
- All Phase 1-3 tasks complete
- Safety guardrails tested and verified
- Analytics dashboard functional
- FPO onboarding materials ready
- Legal disclaimers in place
- At least 50 test queries validated
