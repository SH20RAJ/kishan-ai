# 14 - Launch Checklist: KisanAI

## Document Purpose
Provide a comprehensive pre-launch checklist for KisanAI pilot launch. Every item must be verified before the first FPO partner goes live. Organized by category with owners, status tracking, and sign-off requirements.

---

## 1. Product Readiness

### 1.1 Core Features

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 1.1.1 | Chat interface functional (text input, send, receive) | Engineer 1 | [ ] | |
| 1.1.2 | Disease triage working (image upload, diagnosis, treatment) | Engineer 2 | [ ] | |
| 1.1.3 | Weather advisory working (location-based, crop-specific) | Engineer 2 | [ ] | |
| 1.1.4 | Mandi prices working (commodity search, trends, MSP) | Engineer 2 | [ ] | |
| 1.1.5 | Scheme explainer working (search, eligibility, apply link) | Engineer 2 | [ ] | |
| 1.1.6 | Voice input working (transcription, response) | Engineer 2 | [ ] | |
| 1.1.7 | Shareable answer cards working | Engineer 1 | [ ] | |
| 1.1.8 | Feedback buttons working (thumbs up/down) | Engineer 1 | [ ] | |
| 1.1.9 | Language switching working | Engineer 1 | [ ] | |
| 1.1.10 | Progressive profiling (optional fields) | Engineer 1 | [ ] | |

### 1.2 User Journeys

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 1.2.1 | First-time user: consent -> first question -> answer | QA | [ ] | |
| 1.2.2 | Disease triage: photo -> diagnosis -> treatments -> share | QA | [ ] | |
| 1.2.3 | Weather: location -> forecast -> crop advisory | QA | [ ] | |
| 1.2.4 | Prices: commodity -> prices -> trends -> context | QA | [ ] | |
| 1.2.5 | Schemes: query -> eligibility -> apply link | QA | [ ] | |
| 1.2.6 | Voice: record -> transcribe -> respond | QA | [ ] | |
| 1.2.7 | Share: answer -> share card -> WhatsApp | QA | [ ] | |
| 1.2.8 | Feedback: answer -> thumbs down -> reason -> submit | QA | [ ] | |

### 1.3 Error Handling

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 1.3.1 | Network error: graceful fallback message | Engineer 1 | [ ] | |
| 1.3.2 | API timeout: timeout message with retry | Engineer 2 | [ ] | |
| 1.3.3 | Invalid image: clear error message | Engineer 1 | [ ] | |
| 1.3.4 | Unsupported language: fallback to Hindi | Engineer 2 | [ ] | |
| 1.3.5 | Rate limit exceeded: clear message | Engineer 2 | [ ] | |
| 1.3.6 | Service unavailable: maintenance message | Engineer 1 | [ ] | |

---

## 2. AI Quality

### 2.1 Knowledge Base

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 2.1.1 | Minimum 100 documents ingested | Content | [ ] | |
| 2.1.2 | Documents verified by agricultural expert | Content | [ ] | |
| 2.1.3 | Disease database covers target crops (10+ diseases each) | Content | [ ] | |
| 2.1.4 | Scheme database covers 50+ central schemes | Content | [ ] | |
| 2.1.5 | State-specific schemes for pilot state (20+) | Content | [ ] | |
| 2.1.6 | All documents have source URLs | Content | [ ] | |
| 2.1.7 | Documents tagged with crop and geography | Content | [ ] | |
| 2.1.8 | Knowledge base indexed and searchable | Engineer 2 | [ ] | |

### 2.2 AI Evaluation

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 2.2.1 | Golden evaluation dataset created (100+ queries) | ML | [ ] | |
| 2.2.2 | Grounded answer rate > 80% | ML | [ ] | |
| 2.2.3 | Factual accuracy > 85% (expert-reviewed sample) | ML | [ ] | |
| 2.2.4 | Language match rate > 90% | ML | [ ] | |
| 2.2.5 | Hallucination rate < 5% | ML | [ ] | |
| 2.2.6 | Out-of-scope detection working | ML | [ ] | |
| 2.2.7 | Confidence calibration verified | ML | [ ] | |
| 2.2.8 | Disease diagnosis accuracy > 70% (top-1) | ML | [ ] | |
| 2.2.9 | Disease diagnosis accuracy > 85% (top-3) | ML | [ ] | |

### 2.3 Safety

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 2.3.1 | Unsafe recommendation blocking tested | Engineer 2 | [ ] | |
| 2.3.2 | Brand recommendation blocking tested | Engineer 2 | [ ] | |
| 2.3.3 | PII detection and masking tested | Engineer 2 | [ ] | |
| 2.3.4 | Prompt injection prevention tested | Engineer 2 | [ ] | |
| 2.3.5 | Chemical dosage safety checked | Engineer 2 | [ ] | |
| 2.3.6 | Financial advice blocking tested | Engineer 2 | [ ] | |
| 2.3.7 | Escalation to KVK/helpline working | Engineer 2 | [ ] | |
| 2.3.8 | Red team testing completed | ML | [ ] | |

---

## 3. Technical Infrastructure

### 3.1 Performance

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 3.1.1 | P50 response latency < 3 seconds | Engineer 2 | [ ] | |
| 3.1.2 | P95 response latency < 6 seconds | Engineer 2 | [ ] | |
| 3.1.3 | Disease diagnosis < 5 seconds | Engineer 2 | [ ] | |
| 3.1.4 | First Contentful Paint < 1.5s (3G) | Engineer 1 | [ ] | |
| 3.1.5 | Largest Contentful Paint < 2.5s (3G) | Engineer 1 | [ ] | |
| 3.1.6 | Bundle size < 500KB (initial) | Engineer 1 | [ ] | |
| 3.1.7 | Load test passed (100 concurrent users) | Engineer 2 | [ ] | |
| 3.1.8 | Stress test passed (500 concurrent users) | Engineer 2 | [ ] | |

### 3.2 Reliability

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 3.2.1 | Uptime monitoring configured | Engineer 2 | [ ] | |
| 3.2.2 | Error tracking (Sentry) configured | Engineer 2 | [ ] | |
| 3.2.3 | Alerting configured (Slack/email) | Engineer 2 | [ ] | |
| 3.2.4 | Database backups verified | Engineer 2 | [ ] | |
| 3.2.5 | Disaster recovery plan documented | Engineer 2 | [ ] | |
| 3.2.6 | Rollback procedure tested | Engineer 2 | [ ] | |
| 3.2.7 | Health check endpoint working | Engineer 2 | [ ] | |

### 3.3 Security

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 3.3.1 | HTTPS enforced everywhere | Engineer 2 | [ ] | |
| 3.3.2 | TLS 1.3 configured | Engineer 2 | [ ] | |
| 3.3.3 | Database encryption at rest | Engineer 2 | [ ] | |
| 3.3.4 | R2 encryption at rest | Engineer 2 | [ ] | |
| 3.3.5 | Rate limiting configured | Engineer 2 | [ ] | |
| 3.3.6 | CORS policy configured | Engineer 2 | [ ] | |
| 3.3.7 | CSP headers configured | Engineer 2 | [ ] | |
| 3.3.8 | Input validation on all endpoints | Engineer 2 | [ ] | |
| 3.3.9 | SQL injection prevention verified | Engineer 2 | [ ] | |
| 3.3.10 | XSS prevention verified | Engineer 1 | [ ] | |
| 3.3.11 | Dependency vulnerabilities resolved | Engineer 2 | [ ] | |
| 3.3.12 | API keys rotated from development | Engineer 2 | [ ] | |

---

## 4. Integrations

### 4.1 WhatsApp Business API

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 4.1.1 | WhatsApp Business account verified | Founder | [ ] | |
| 4.1.2 | Phone number registered | Founder | [ ] | |
| 4.1.3 | Webhook configured and tested | Engineer 2 | [ ] | |
| 4.1.4 | Message parsing (text, image, voice) working | Engineer 2 | [ ] | |
| 4.1.5 | Response sending working | Engineer 2 | [ ] | |
| 4.1.6 | Template messages approved | Founder | [ ] | |
| 4.1.7 | Rate limits understood | Engineer 2 | [ ] | |

### 4.2 Telegram Bot

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 4.2.1 | Bot created and configured | Engineer 2 | [ ] | |
| 4.2.2 | Webhook configured and tested | Engineer 2 | [ ] | |
| 4.2.3 | Message handling working | Engineer 2 | [ ] | |
| 4.2.4 | Group integration tested | Engineer 2 | [ ] | |

### 4.3 External APIs

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 4.3.1 | OpenAI API key configured | Engineer 2 | [ ] | |
| 4.3.2 | Weather API configured and tested | Engineer 2 | [ ] | |
| 4.3.3 | Mandi price data source configured | Engineer 2 | [ ] | |
| 4.3.4 | Whisper API configured (if using) | Engineer 2 | [ ] | |
| 4.3.5 | All API keys stored securely | Engineer 2 | [ ] | |

---

## 5. Analytics and Monitoring

### 5.1 Analytics Setup

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 5.1.1 | PostHog (or equivalent) configured | Engineer 1 | [ ] | |
| 5.1.2 | Key events tracked (activation, retention, quality) | Engineer 1 | [ ] | |
| 5.1.3 | User identification working | Engineer 1 | [ ] | |
| 5.1.4 | Funnel tracking configured | Engineer 1 | [ ] | |
| 5.1.5 | Retention cohort tracking configured | Engineer 1 | [ ] | |
| 5.1.6 | Dashboard created for key metrics | Engineer 1 | [ ] | |

### 5.2 Monitoring

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 5.2.1 | Error rate alerts configured | Engineer 2 | [ ] | |
| 5.2.2 | Latency alerts configured | Engineer 2 | [ ] | |
| 5.2.3 | Uptime alerts configured | Engineer 2 | [ ] | |
| 5.2.4 | AI quality alerts configured | Engineer 2 | [ ] | |
| 5.2.5 | Cost monitoring configured | Engineer 2 | [ ] | |

---

## 6. Legal and Compliance

### 6.1 Legal Documents

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 6.1.1 | Privacy policy published (vernacular + English) | Legal | [ ] | |
| 6.1.2 | Terms of service published | Legal | [ ] | |
| 6.1.3 | Agricultural advice disclaimer published | Legal | [ ] | |
| 6.1.4 | Cookie policy published (if applicable) | Legal | [ ] | |
| 6.1.5 | All legal docs accessible from app | Engineer 1 | [ ] | |

### 6.2 DPDP Compliance

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 6.2.1 | Consent mechanism implemented | Engineer 1 | [ ] | |
| 6.2.2 | Consent recorded with timestamp | Engineer 2 | [ ] | |
| 6.2.3 | Consent withdrawal mechanism working | Engineer 2 | [ ] | |
| 6.2.4 | Data deletion mechanism working | Engineer 2 | [ ] | |
| 6.2.5 | Data retention policy implemented | Engineer 2 | [ ] | |
| 6.2.6 | Grievance officer designated | Founder | [ ] | |
| 6.2.7 | Privacy policy in user's language | Legal | [ ] | |

### 6.3 Disclaimers

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 6.3.1 | Disease diagnosis disclaimer shown | Engineer 1 | [ ] | |
| 6.3.2 | Chemical treatment safety disclaimer shown | Engineer 1 | [ ] | |
| 6.3.3 | Financial advice disclaimer shown | Engineer 1 | [ ] | |
| 6.3.4 | Scheme information disclaimer shown | Engineer 1 | [ ] | |
| 6.3.5 | General advisory disclaimer shown (first interaction) | Engineer 1 | [ ] | |

---

## 7. Content Readiness

### 7.1 Knowledge Base Content

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 7.1.1 | Disease guides for target crops (10+ each) | Content | [ ] | |
| 7.1.2 | Treatment protocols verified | Content | [ ] | |
| 7.1.3 | Weather advisory templates | Content | [ ] | |
| 7.1.4 | Price context templates | Content | [ ] | |
| 7.1.5 | Scheme descriptions (50+ central) | Content | [ ] | |
| 7.1.6 | State-specific schemes (20+) | Content | [ ] | |
| 7.1.7 | All content reviewed by expert | Content | [ ] | |
| 7.1.8 | Content tagged with metadata | Content | [ ] | |

### 7.2 UI Content

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 7.2.1 | Welcome message (vernacular) | Content | [ ] | |
| 7.2.2 | Suggested questions (vernacular) | Content | [ ] | |
| 7.2.3 | Error messages (vernacular) | Content | [ ] | |
| 7.2.4 | Help/FAQ content (vernacular) | Content | [ ] | |
| 7.2.5 | About page content | Content | [ ] | |
| 7.2.6 | Consent text (vernacular) | Content | [ ] | |

---

## 8. FPO Partner Readiness

### 8.1 Partnership

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 8.1.1 | FPO partner identified and contacted | Founder | [ ] | |
| 8.1.2 | MOU/agreement signed | Founder | [ ] | |
| 8.1.3 | Pilot scope agreed (farmers, duration, metrics) | Founder | [ ] | |
| 8.1.4 | FPO contact person identified | Founder | [ ] | |
| 8.1.5 | FPO staff training scheduled | Founder | [ ] | |

### 8.2 Onboarding Materials

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 8.2.1 | Farmer onboarding guide (vernacular PDF) | Content | [ ] | |
| 8.2.2 | FPO staff training guide | Content | [ ] | |
| 8.2.3 | QR code poster for shops | Designer | [ ] | |
| 8.2.4 | WhatsApp group welcome message | Content | [ ] | |
| 8.2.5 | Demo video (2 min, vernacular) | Content | [ ] | |

### 8.3 Admin Dashboard

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 8.3.1 | FPO admin account created | Engineer 1 | [ ] | |
| 8.3.2 | Member management working | Engineer 1 | [ ] | |
| 8.3.3 | Analytics dashboard working | Engineer 1 | [ ] | |
| 8.3.4 | Bulk import working | Engineer 2 | [ ] | |
| 8.3.5 | Advisory broadcast working | Engineer 2 | [ ] | |

---

## 9. Team Readiness

### 9.1 Roles and Responsibilities

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 9.1.1 | On-call engineer identified | Engineer 2 | [ ] | |
| 9.1.2 | Escalation path documented | Founder | [ ] | |
| 9.1.3 | Support WhatsApp number active | Founder | [ ] | |
| 9.1.4 | Response SLA defined (query, bug, critical) | Founder | [ ] | |
| 9.1.5 | Incident response playbook documented | Engineer 2 | [ ] | |

### 9.2 Support Process

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 9.2.1 | Support channel established (WhatsApp/email) | Founder | [ ] | |
| 9.2.2 | FAQ document created | Content | [ ] | |
| 9.2.3 | Common issues and solutions documented | Engineer 2 | [ ] | |
| 9.2.4 | Feedback triage process defined | Founder | [ ] | |
| 9.2.5 | Bug report template created | Engineer 1 | [ ] | |

---

## 10. Launch Day

### 10.1 Pre-Launch (Day Before)

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 10.1.1 | All checklist items verified | All | [ ] | |
| 10.1.2 | Final smoke test completed | QA | [ ] | |
| 10.1.3 | Rollback procedure tested | Engineer 2 | [ ] | |
| 10.1.4 | Team briefed on launch plan | Founder | [ ] | |
| 10.1.5 | FPO partner confirmed | Founder | [ ] | |
| 10.1.6 | Support team ready | Founder | [ ] | |

### 10.2 Launch Day

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 10.2.1 | Production deployment verified | Engineer 2 | [ ] | |
| 10.2.2 | Health check passing | Engineer 2 | [ ] | |
| 10.2.3 | First test query successful | Engineer 2 | [ ] | |
| 10.2.4 | FPO WhatsApp group activated | Founder | [ ] | |
| 10.2.5 | Welcome message sent to farmers | Founder | [ ] | |
| 10.2.6 | Monitoring active | Engineer 2 | [ ] | |
| 10.2.7 | First farmer queries processed | All | [ ] | |
| 10.2.8 | No critical errors in first hour | Engineer 2 | [ ] | |

### 10.3 Post-Launch (First 24 Hours)

| # | Item | Owner | Status | Notes |
|---|------|-------|--------|-------|
| 10.3.1 | Error rate < 5% | Engineer 2 | [ ] | |
| 10.3.2 | P95 latency < 8 seconds | Engineer 2 | [ ] | |
| 10.3.3 | User feedback reviewed | Founder | [ ] | |
| 10.3.4 | Critical issues addressed | Engineer 2 | [ ] | |
| 10.3.5 | First-day metrics report | Founder | [ ] | |

---

## 11. Sign-Off

### 11.1 Required Sign-Offs

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Founder | | | |
| Lead Engineer | | | |
| Content Lead | | | |
| FPO Partner | | | |

### 11.2 Launch Decision

| Criteria | Threshold | Actual | Pass |
|----------|-----------|--------|------|
| Core features functional | 100% | | [ ] |
| Safety guardrails tested | 100% | | [ ] |
| AI quality (grounded rate) | > 80% | | [ ] |
| Performance (P95 latency) | < 6s | | [ ] |
| Legal docs published | 100% | | [ ] |
| FPO partner confirmed | Yes | | [ ] |
| Support process ready | Yes | | [ ] |

**Launch Decision**: [ ] GO / [ ] NO-GO

**Decision Date**: _______________

**Decision Maker**: _______________

**Notes**: _______________
