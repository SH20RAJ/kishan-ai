# KisanAI Architecture

## Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Cloudflare Workers via @opennextjs/cloudflare
- **AI:** OpenAI/Gemini/Anthropic (with mock fallback)

## Folder Structure
```
src/
  app/
    page.tsx                    # Landing page
    layout.tsx                  # Root layout with SEO
    globals.css                 # Design system
    application/                # Farmer app
      layout.tsx                # App shell (nav, header)
      page.tsx                  # Dashboard
      chat/                     # AI chat interface
      disease-detection/        # Crop disease scanner
      weather/                  # Weather advisory
      mandi-prices/             # Market prices
      schemes/                  # Government schemes
      marketplace/              # Partner marketplace
      profile/                  # User settings
    api/                        # Backend API routes
      chat/                     # POST - AI chat
      disease-detect/           # POST - Disease detection
      weather/                  # GET - Weather data
      mandi-prices/             # GET - Mandi prices
      schemes/                  # GET - Government schemes
      feedback/                 # POST - User feedback
      waitlist/                 # POST - Waitlist signup
      partner-lead/             # POST - Partner inquiry
      pitch-contact/            # POST - Contact form
      health/                   # GET - Health check
    government/                 # Government partnership page
    investors/                  # Investor brief page
    partners/                   # Partner page
    research/                   # Research insights page
    impact/                     # Impact metrics page
    privacy/                    # Privacy policy
    terms/                      # Terms of service
    admin/                      # Admin dashboard
  components/kishanai/          # Reusable UI components
  lib/ai/                       # AI service layer
    index.ts                    # Main orchestration
    providers.ts                # AI provider abstraction
    prompts.ts                  # Prompt templates
    safety.ts                   # Safety guardrails
    rag.ts                      # RAG pipeline (mock)
    mock-responses.ts           # Demo data
    types.ts                    # AI-specific types
    evaluate.ts                 # Evaluation framework
  lib/api-utils.ts              # Shared API utilities
  types/index.ts                # Shared TypeScript types
```

## AI Pipeline
1. Classify intent (disease/weather/market/scheme/general)
2. Retrieve relevant documents from knowledge base
3. Build prompt with context and retrieved docs
4. Generate response via AI provider
5. Run safety checks
6. Format and return response

## API Design
All API routes follow consistent pattern:
- JSON request/response
- `{ success: boolean, data?: T, error?: string }` format
- CORS headers
- Input validation
- Mock mode fallback

## Deployment
Cloudflare Workers via OpenNext. No server-side Node.js required in production.
