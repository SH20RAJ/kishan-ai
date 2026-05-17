# 01 - Product Requirements Document (PRD): KisanAI

## Document Metadata
- **Product**: KisanAI -- India's AI-Powered Agricultural Assistant
- **Version**: 1.0 (MVP)
- **Date**: 2026-05-17
- **Status**: Draft
- **Owner**: Product Team

---

## 1. Problem Statement

### 1.1 Core Problem
Indian smallholder farmers lose significant income because agricultural advisory is fragmented, not available in local languages, too complex to use digitally, and fails during high-stakes trigger moments (disease appearance, weather events, mandi visits, scheme deadlines).

### 1.2 Evidence
- Onion farmers spending ~Rs 80,000/acre while receiving Rs 300-1,200 for distressed produce
- Cotton farmers pushed below MSP due to digital procurement failures
- Farmers forced to make repeated trips to government offices when digital systems fail
- Users report: "Can't understand which document is needed", "Worst experience ever", "no other option but to sell my land"

### 1.3 Current Workarounds
Farmers stitch together advice from: local dealers, WhatsApp groups, KVKs, radio, neighbours, mandi agents, government portals, manual expert networks, marketplace apps. No single trusted, vernacular, low-friction source exists.

---

## 2. Product Vision

> **KisanAI helps small and lower-digital-literacy Indian farmers make better daily crop decisions in their own language through one trusted assistant for disease triage, price context, weather interpretation, and scheme guidance.**

### 2.1 What KisanAI Is
- A vernacular, messaging-first agricultural decision assistant
- A single interface for disease, weather, market, and scheme questions
- A low-friction tool that works without mandatory registration or land records

### 2.2 What KisanAI Is NOT
- Not a full agricultural ERP
- Not a marketplace-first company
- Not a regulated financial, insurance, or pesticide-prescription advisor
- Not an enterprise analytics platform (at MVP stage)

---

## 3. Target Users

### 3.1 Primary Users
- Small and lower-middle landholding farmers (0.5-5 acres)
- Age 20-45 with smartphone access
- Vernacular language speakers (Hindi as fallback)
- Facing recurring information asymmetry in crop decisions

### 3.2 Secondary Users
- Farmer-family decision helpers (spouse, adult children)
- FPO managers who aggregate farmer queries
- NGO workers running agricultural programs
- Agri-input retailers assisting walk-in farmers

### 3.3 Ideal Customer Profile (ICP)

| Dimension | Specification |
|-----------|--------------|
| Crop | Cotton, onion, tomato, chilli, paddy, or soybean cluster |
| Geography | One Indian state, one agro-climatic belt |
| Language | One dominant regional language + Hindi |
| Channel | WhatsApp / Telegram / PWA |
| Buyer | FPO, NGO, input retailer, or field partner (B2B2C) |

---

## 4. MVP Scope

### 4.1 In Scope (MVP)

| Feature | Description | Success Metric |
|---------|-------------|----------------|
| Vernacular Text Chat | Ask farming questions in one regional language + Hindi fallback | Query completion rate, language detection accuracy |
| Image Disease Triage | Upload crop photo, get disease diagnosis with confidence score + next-step checklist | Top-1/top-3 accuracy, time-to-first-action |
| Weather Interpretation | "What should I do today/tomorrow?" based on hyper-local weather | Alert open rate, advisory follow-through |
| Mandi Price Summaries | Localised price summaries with trend explanation for selected districts | Price-check frequency, retention around market days |
| Scheme Explainer | Plain-language scheme eligibility with source links; abstains when uncertain | Scheme-answer satisfaction, escalation rate |
| WhatsApp/Telegram/PWA | Entry points via messaging apps and progressive web app | Activation rate, channel distribution |
| No-Mandatory-Profile Mode | Progressive profiling; no land records or ID required for basic advisory | Onboarding completion, day-7 retention |

### 4.2 Out of Scope (Deferred)

| Feature | Reason for Deferral |
|---------|-------------------|
| Full pan-India language surface | Start with one language + Hindi; expand after retention proof |
| Broad disease coverage (many crops) | Focus on 1-2 crops for MVP quality |
| Deep agronomic planning / season scheduling | Too complex for MVP; trust not yet established |
| National live marketplace breadth | Start with selected districts |
| Automated scheme application filing | Liability and accuracy concerns |
| Native app-store distribution | WhatsApp/PWA reduces friction |
| Financial advisory / insurance | Regulatory and liability risk |
| Marketplace / input commerce | Distraction from core advisory wedge |

---

## 5. Feature Specifications

### 5.1 Vernacular Text Chat

**User Story**: As a farmer, I want to ask questions about my crops in my local language so that I can get advice without struggling with English or complex interfaces.

**Functional Requirements**:
- Auto-detect user language from first message
- Support one primary regional language (e.g., Telugu, Marathi, Tamil) + Hindi + English
- Respond in the same language as the user's query
- Handle code-mixed input (e.g., Hindi-English, Telugu-Hindi)
- Maximum response length: 200 words (short, actionable)
- Include source citations where available
- Explicitly state uncertainty when confidence is low

**Non-Functional Requirements**:
- P50 response latency: < 3 seconds
- P95 response latency: < 6 seconds
- Support concurrent users: 1,000+ at launch

### 5.2 Image Disease Triage

**User Story**: As a farmer, I want to photograph a diseased leaf/plant and get an instant diagnosis so that I can take action before the disease spreads.

**Functional Requirements**:
- Accept image via camera capture or gallery upload
- Process image through dedicated crop-disease CV model
- Return top-3 possible diagnoses with confidence scores
- Provide next-step checklist (e.g., "Remove affected leaves", "Apply X fungicide", "Consult local KVK")
- Include disclaimer: "This is a preliminary assessment. For confirmed diagnosis, consult your local agricultural extension officer."
- Support image formats: JPEG, PNG, WebP
- Maximum image size: 10MB

**Non-Functional Requirements**:
- Diagnosis latency: < 5 seconds
- Minimum accuracy: 70% top-1, 85% top-3 (for supported crops)

### 5.3 Weather Interpretation

**User Story**: As a farmer, I want to understand what today's and tomorrow's weather means for my crops so that I can take timely action.

**Functional Requirements**:
- Fetch hyper-local weather data (district/block level)
- Translate weather data into crop-specific advisory
- Example: "Heavy rain expected tomorrow. If your tomato plants are flowering, consider drainage channels to prevent waterlogging."
- Send proactive alerts for extreme weather events
- Include 3-day outlook summary

**Non-Functional Requirements**:
- Weather data freshness: updated every 3 hours
- Alert delivery latency: < 15 minutes from weather event detection

### 5.4 Mandi Price Summaries

**User Story**: As a farmer, I want to know current mandi prices and trends so that I can decide when and where to sell.

**Functional Requirements**:
- Display prices for nearby mandis (based on user's district)
- Show today's price, 7-day average, 30-day trend
- Explain price context in plain language (e.g., "Prices are 15% lower than last week due to increased supply")
- Compare modal price vs. MSP when relevant
- Include source attribution (AGMARKNET or equivalent)

**Non-Functional Requirements**:
- Price data freshness: updated daily by 10 AM IST
- Cover minimum 50 mandis per crop per state at launch

### 5.5 Scheme Explainer

**User Story**: As a farmer, I want to understand which government schemes I'm eligible for and how to apply, without reading complex PDFs.

**Functional Requirements**:
- Answer questions about central and state government agricultural schemes
- Provide eligibility checklist in plain language
- Include links to official application portals
- Explicitly abstain when information is uncertain or outdated
- Disclaimer: "Scheme details may change. Verify with your local agriculture office."

**Non-Functional Requirements**:
- Knowledge base covers minimum 50 central + 20 state schemes per target state
- Source citations on every scheme answer
- Monthly content refresh cycle

---

## 6. User Journeys

### 6.1 First-Time User (Activation)

```
1. Farmer receives WhatsApp message/link from FPO or retailer
2. Opens chat -- sees welcome message in local language
3. Types first question (e.g., "My tomato leaves have white spots")
4. Receives response with diagnosis + next steps + source
5. Follows up with another question (weather or price)
6. Shares answer card in farmer WhatsApp group
```

**Activation metric**: User asks at least 1 question and receives a response within first session.

### 6.2 Disease Triage Journey

```
1. Farmer notices unusual symptoms on crop
2. Opens KisanAI via WhatsApp
3. Takes photo of affected plant part
4. Receives top-3 diagnoses with confidence scores
5. Gets actionable next-step checklist
6. Optionally asks follow-up question about treatment
7. Shares diagnosis card with other farmers
```

### 6.3 Market Decision Journey

```
1. Farmer plans to visit mandi next day
2. Opens KisanAI, asks "What is today's onion price in Nashik?"
3. Receives price summary with trend context
4. Advised: "Prices are trending up. Consider waiting 2-3 days if produce is healthy."
5. Farmer makes informed sell/hold decision
```

### 6.4 Scheme Discovery Journey

```
1. Farmer hears about a new government scheme from neighbour
2. Opens KisanAI, asks "Am I eligible for PM-KISAN?"
3. Receives eligibility checklist with required documents
4. Gets link to official application portal
5. Follows up: "What about crop insurance?"
6. Receives scheme explainer with disclaimer
```

---

## 7. Metrics and KPIs

### 7.1 North Star Metric
**Weekly Active Query Users (WAQU)**: Number of unique users who ask at least 1 query per week and receive a response.

### 7.2 Supporting Metrics

| Category | Metric | Target (MVP) |
|----------|--------|--------------|
| **Acquisition** | Cost per activated user | < Rs 50 |
| **Acquisition** | Partner-to-user conversion | > 15% |
| **Activation** | First question asked within 24h of onboarding | > 60% |
| **Activation** | First image submitted within 7 days | > 20% |
| **Retention** | Day-7 retention (repeat query) | > 30% |
| **Retention** | Day-30 retention | > 15% |
| **Quality** | Grounded answer rate (with citation) | > 80% |
| **Quality** | Abstention rate (appropriate "I don't know") | 5-15% |
| **Quality** | False-advice rate | < 2% |
| **Trust** | CSAT (post-query thumbs up/down) | > 70% positive |
| **Operations** | P50 latency | < 3 seconds |
| **Operations** | P95 latency | < 6 seconds |
| **Vision** | Top-1 disease diagnosis accuracy | > 70% |
| **Vision** | Top-3 disease diagnosis accuracy | > 85% |

### 7.3 Dashboard Requirements
- Real-time query volume and active users
- Answer quality sampling (random 5% reviewed daily)
- Language distribution of queries
- Feature usage breakdown (chat, image, weather, price, scheme)
- Error and abstention rates
- Partner-level usage and retention cohorts

---

## 8. Constraints and Assumptions

### 8.1 Constraints
- Budget: Bootstrap / seed stage; minimize infrastructure cost
- Team: Small engineering team (2-5 people)
- Timeline: 90-day pilot target
- Language: Start with one regional language + Hindi
- Crops: Start with 1-2 crops for disease triage

### 8.2 Assumptions
- Farmers have smartphone access and basic WhatsApp literacy
- FPO/NGO partners will assist with onboarding and trust-building
- Curated knowledge base + live connectors provide sufficient coverage
- B2B2C distribution reduces CAC vs. direct B2C
- Farmers will share useful answer cards in WhatsApp groups

---

## 9. Dependencies

| Dependency | Owner | Risk |
|-----------|-------|------|
| Crop-disease CV model accuracy | Engineering + ML | High -- core value prop |
| Weather API reliability | Third-party | Medium |
| Mandi price data freshness | Third-party / scraper | Medium |
| Government scheme knowledge base | Content team | Medium -- needs curation |
| WhatsApp Business API access | Engineering | Low -- standard integration |
| FPO/NGO pilot partnerships | Business development | High -- distribution depends on this |

---

## 10. Open Questions

1. Which specific crop and geography for MVP pilot?
2. Which regional language to prioritize first?
3. Which FPO or NGO will be the first pilot partner?
4. What is the minimum viable disease model accuracy for farmer trust?
5. How to handle multi-turn conversations about complex topics?
6. What is the escalation path for high-stakes advice (e.g., pesticide application)?
7. How to measure "time saved" or "loss avoided" for ROI proof?

---

## 11. Release Plan

| Phase | Timeline | Scope |
|-------|----------|-------|
| Alpha (internal) | Weeks 1-4 | Core chat + disease triage + weather |
| Beta (closed pilot) | Weeks 5-8 | Add mandi prices + scheme explainer + WhatsApp integration |
| Pilot (FPO/NGO) | Weeks 9-12 | Full MVP with analytics dashboard + feedback collection |
| Review | Week 13 | Pilot metrics review, second-cluster decision |
