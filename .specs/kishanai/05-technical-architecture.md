# 05 - Technical Architecture: KisanAI

## Document Purpose
Define the complete technical architecture for KisanAI including stack selection, folder structure, routing, AI pipeline, deployment, and infrastructure. This architecture is designed for a small team (2-5 engineers) at bootstrap/seed stage.

---

## 1. Technology Stack

### 1.1 Overview

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend Framework | Next.js 14+ (App Router) | Already in use; SSR/SSG for landing pages; React ecosystem |
| UI Library | React 18 + Tailwind CSS | Component-based; utility-first for rapid iteration |
| Progressive Web App | next-pwa | Installable; offline support; push notifications |
| Edge Runtime | Cloudflare Workers | Low latency; global distribution; cost-effective |
| API Layer | Next.js API Routes + Cloudflare Workers | Serverless; scales to zero; low cost |
| Primary Database | PostgreSQL (Neon) | Serverless Postgres; branching for dev; generous free tier |
| Vector Database | pgvector (Neon extension) | No separate vector DB needed at MVP; reduces complexity |
| Object Storage | Cloudflare R2 | Free egress; S3-compatible; good for images |
| LLM Provider | OpenAI GPT-4o-mini / GPT-4o | Fast; multilingual; function calling; good cost/quality |
| CV Model | Custom crop-disease model (hosted) | Better accuracy than generic LLM vision for disease ID |
| Speech-to-Text | OpenAI Whisper API | Multilingual; good accuracy for Indian languages |
| Translation | Google Cloud Translation / IndicTrans2 | Indian language coverage |
| Weather API | OpenWeatherMap / IMD API | Hyper-local weather data |
| Mandi Prices | AGMARKNET scraper / DataGov API | Government price data |
| Authentication | NextAuth.js + WhatsApp OTP | Simple; works with phone numbers |
| Analytics | PostHog (self-hosted) or Mixpanel | Event tracking; funnels; retention |
| Monitoring | Sentry + Cloudflare Analytics | Error tracking; performance |
| CI/CD | GitHub Actions + Cloudflare Pages | Automated deployment |

---

## 2. Folder Structure

```
kishanai/
+-- .github/
|   +-- workflows/
|       +-- ci.yml
|       +-- deploy-preview.yml
|       +-- deploy-production.yml
|
+-- src/
|   +-- app/                          # Next.js App Router
|   |   +-- layout.tsx
|   |   +-- page.tsx
|   |   +-- globals.css
|   |   +-- chat/
|   |   |   +-- page.tsx
|   |   |   +-- [conversationId]/page.tsx
|   |   +-- scan/page.tsx
|   |   +-- weather/page.tsx
|   |   +-- prices/page.tsx
|   |   +-- schemes/page.tsx
|   |   +-- profile/
|   |   |   +-- page.tsx
|   |   |   +-- crops/page.tsx
|   |   |   +-- location/page.tsx
|   |   |   +-- language/page.tsx
|   |   +-- settings/
|   |   |   +-- page.tsx
|   |   |   +-- language/page.tsx
|   |   |   +-- notifications/page.tsx
|   |   |   +-- privacy/page.tsx
|   |   +-- about/page.tsx
|   |   +-- help/page.tsx
|   |   +-- legal/
|   |   |   +-- privacy/page.tsx
|   |   |   +-- terms/page.tsx
|   |   |   +-- disclaimer/page.tsx
|   |   +-- admin/
|   |   |   +-- layout.tsx
|   |   |   +-- page.tsx
|   |   |   +-- members/
|   |   |   +-- analytics/
|   |   |   +-- advisory/
|   |   |   +-- content/
|   |   |   +-- settings/
|   |   |   +-- team/
|   |   +-- api/
|   |       +-- chat/route.ts
|   |       +-- scan/route.ts
|   |       +-- weather/route.ts
|   |       +-- prices/route.ts
|   |       +-- schemes/route.ts
|   |       +-- feedback/route.ts
|   |       +-- auth/
|   |       +-- webhook/
|   |       +-- admin/
|   |
|   +-- components/
|   |   +-- ui/
|   |   +-- chat/
|   |   +-- cards/
|   |   +-- navigation/
|   |   +-- admin/
|   |
|   +-- lib/
|   |   +-- ai/
|   |   +-- cv/
|   |   +-- data/
|   |   +-- i18n/
|   |   +-- messaging/
|   |   +-- db/
|   |   +-- storage/
|   |   +-- auth/
|   |   +-- utils/
|   |
|   +-- hooks/
|   +-- types/
|   +-- styles/
|
+-- prisma/
+-- public/
+-- scripts/
+-- tests/
+-- .env.example
+-- next.config.js
+-- tailwind.config.ts
+-- tsconfig.json
+-- package.json
```

---

## 3. Routing Architecture

### 3.1 Request Flow

```
User Request
    |
    v
Cloudflare Edge (CDN + Workers)
    |
    +-- Static routes --> Cloudflare Pages (SSG)
    +-- Dynamic routes --> Next.js SSR
    +-- API routes --> Next.js API Routes (Edge)
```

---

## 4. AI Pipeline Architecture

### 4.1 Query Processing Pipeline

```
User Input (text/image/voice)
    |
    v
1. Input Processing (language detection, voice transcription, image preprocessing)
    |
    v
2. Intent Classification (disease, weather, price, scheme, general, out_of_scope)
    |
    v
3. Context Assembly (user profile, conversation history, location, crop, season)
    |
    v
4. Retrieval (vector search, lexical search, live data fetch, reranking)
    |
    v
5. Response Generation (system prompt + retrieved context + LLM)
    |
    v
6. Post-Processing (citation extraction, safety check, confidence scoring, disclaimer)
    |
    v
Response to User
```

---

## 5. Deployment Architecture

### 5.1 Infrastructure

```
+-- Cloudflare (CDN, Workers, R2)
+-- Neon (PostgreSQL + pgvector)
+-- External APIs (OpenAI, Weather, WhatsApp)
```

### 5.2 Environments

| Environment | Purpose | URL | Database |
|-------------|---------|-----|----------|
| Local | Development | localhost:3000 | Neon local branch |
| Preview | PR previews | *.pages.dev | Neon preview branch |
| Staging | Pre-production | staging.kishanai.strivio.world | Neon staging |
| Production | Live | kishanai.strivio.world | Neon main |

---

## 6. Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s (3G) |
| Chat response (P50) | < 3s |
| Chat response (P95) | < 6s |
| Disease diagnosis | < 5s |
| Bundle size (initial) | < 500KB |
