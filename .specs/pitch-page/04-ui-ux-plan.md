# KisanAI /pitch UI/UX Plan

## Ownership

Agent 3 owns this file only: `.specs/pitch-page/04-ui-ux-plan.md`.

This spec is for a premium investor-grade `/pitch` page. It should use the research files as source material, inspect existing page conventions, and deliberately move the pitch experience away from the current bright, playful Duolingo-like visual language used across the broader product.

## Product And Audience Goal

The `/pitch` page should feel like an investor memo that happens to be interactive, not like a generic SaaS landing page. It must convince a seed investor, incubator reviewer, strategic partner, or grant committee that KisanAI understands the Indian agriculture market, knows what is proven versus assumed, and has a disciplined plan for validation.

Primary audience:
- Early-stage investors evaluating whether KisanAI is investable after or before pilots.
- Incubator, hackathon, and grant reviewers who need a crisp evidence-backed narrative.
- Strategic partners such as FPOs, NGOs, KVK-linked programs, agri-input networks, or government-adjacent pilots.

Primary user questions:
- Why this problem, and why now?
- Who is the first user and wedge?
- What proof exists today?
- What is assumed, unproven, or risky?
- How will KisanAI distribute and monetise?
- What metrics would make this fundable?
- How does the product avoid generic AI hype and dangerous agricultural advice?

## Source Material To Reflect

Use these research findings as the backbone of the page:
- KisanAI is best framed as a vernacular, mobile-first AI agriculture assistant for daily farm decisions.
- The initial wedge should not be "all Indian farmers"; it should be one crop cluster, one geography, one language, and one partner-led distribution motion.
- Strong pain evidence exists around fragmented information, confusing government/procurement apps, weather and disease shocks, and high financial downside.
- Category validation exists via government AI advisory activity, FarmRise scale, DeHaat, Plantix, Cropin, eNAM, KissanAI, and other agri products.
- Public evidence does not yet prove KisanAI traction, retention, paid willingness to pay, proprietary data, founder-market moat, legal posture, or partner conversion.
- The honest plan is B2B2C pilots first, freemium later, enterprise/API or partner tooling after proof.
- Investor questions should be answered with proof/assumption/risk labeling instead of confident but unsupported claims.

Local files reviewed:
- `public/KisanAI Deep Research Report and Investor Q&A Dossier.md`
- `public/kishanai-reseach-2.md`
- `public/kishanai-reseach.md`
- `DESIGN.md`
- `src/app/globals.css`
- `src/app/investors/page.tsx`
- `src/app/research/page.tsx`

## Existing Design Context

The current site uses a Duolingo-inspired system:
- Bright primary green `#58CC02`
- Rounded 16px cards and 3D button shadows
- Emoji-led section identity
- Playful, high-energy typography and UI
- White and light gray backgrounds

For `/pitch`, intentionally reduce this energy. The page should still feel related to KisanAI, but as the investor-grade version of the brand:
- No emoji section headers.
- No oversized mascot marks.
- No 3D button shadows.
- No saturated green hero block.
- No decorative gradients or orb backgrounds.
- No childish green overload.
- No generic "AI revolution" framing.

Keep:
- The product name and agricultural domain cues.
- Strong mobile-first responsiveness.
- Source-aware, trustworthy interaction patterns.
- Clean cards and readable tables.

Change:
- From playful product marketing to warm institutional editorial.
- From bright green to deep green, soil, muted gold, ink, and warm-white.
- From broad claims to evidence tables and tagged assertions.

## Visual Direction

### Mood

Serious, clean, data-rich, and calm. The visual reference should be closer to an investor memo, policy brief, or institutional agriculture report than a SaaS homepage.

Design keywords:
- Evidence-led
- Warm editorial
- Grounded
- Controlled
- Institutional
- Investor-ready
- Indian agriculture, without folk-art pastiche

Avoid:
- Generic AI landing page tropes
- Neon gradients
- Full-screen glossy chatbot mockups
- Random abstract brain/network visuals
- Overuse of crop photos as decoration
- Excessively dark backgrounds
- Hype language or vanity-number treatment

### Palette

Recommended pitch palette:

| Token | Hex | Usage |
|---|---:|---|
| `pitch-bg` | `#FAF7F0` | Main warm paper background |
| `pitch-surface` | `#FFFDF8` | Cards, tables, content panels |
| `pitch-surface-muted` | `#F1EBDD` | Section bands, table headers |
| `pitch-ink` | `#1F2A24` | Main text |
| `pitch-muted` | `#667066` | Secondary text |
| `pitch-border` | `#DDD2BD` | Rules, card borders, table lines |
| `pitch-green` | `#174C35` | Primary headings, nav active, serious brand accent |
| `pitch-green-soft` | `#DDE9DD` | Proof badge background, subtle success |
| `pitch-soil` | `#6F4E37` | Risk/operations accents |
| `pitch-soil-soft` | `#E9DDD1` | Risk badge background |
| `pitch-gold` | `#B8892E` | Citation chips, assumption highlights, selected filters |
| `pitch-gold-soft` | `#F3E6C8` | Assumption badge background |
| `pitch-red` | `#9F3A2F` | High-risk state only |

Use bright app green `#58CC02` only as a tiny continuity signal if needed, such as a 2px mark in the logo lockup. It should never dominate a section.

### Typography

Use the existing font stack unless the implementation adds a page-scoped type choice:
- Headings: existing display font is acceptable, but reduce the playful effect with smaller scale, tighter hierarchy, and no emoji.
- Body: existing sans stack is acceptable.
- Data, citations, and compact labels: use the existing mono token sparingly for IDs, source numbers, and metric labels.

Recommended scale:
- Hero eyebrow: 12px, uppercase, 0.08em letter spacing.
- Hero H1: 48-64px desktop, 36-42px mobile, line-height 1.02-1.08.
- Section H2: 30-38px desktop, 26-30px mobile.
- Card H3: 18-22px.
- Body: 16-18px.
- Table body: 14-15px.
- Caption/source labels: 12-13px.

Letter spacing should be 0 for normal text. Do not use viewport-based font sizing.

### Layout System

Use a document-like layout:
- Max content width: 1200px.
- Main content column: 760-840px.
- Sticky desktop TOC column: 240-280px.
- Evidence rail or aside column: optional, only for desktop.
- Section vertical rhythm: 72-96px desktop, 48-64px mobile.
- Cards: 6-8px radius, 1px border, minimal shadow or no shadow.
- Tables: dense but readable, with sticky first column only if it does not harm mobile.

Desktop layout:
- Header at top.
- Hero full width but not overly tall.
- Below hero, use a two-column shell: sticky TOC left, main content right.
- Optional right mini-rail only for short proof summaries, but avoid three-column clutter unless content clearly benefits.

Mobile layout:
- Header condensed.
- Sticky mobile section nav below header, horizontally scrollable.
- Tables become cards or horizontally scrollable tables with visible overflow affordance.
- Q&A filters stay sticky only inside the Q&A section if they remain compact.

## Information Architecture

Recommended `/pitch` sections in order:

1. Executive Thesis
2. Problem Evidence
3. Market And Timing
4. Product Wedge
5. Business Model
6. Go-To-Market
7. Competition
8. Economics And Scenarios
9. Trust, Safety, And Compliance
10. Roadmap
11. Investor Q&A
12. Ask And Next Milestones
13. Sources

The page should feel skimmable from top to bottom. Every section should include:
- A concise claim.
- Supporting evidence or clear assumption.
- A risk or unknown when relevant.
- Citation chips pointing to source material.

## Header And Navigation

### Desktop Header

The global header should be restrained:
- Left: `KisanAI` wordmark, optional small "Investor memo" label.
- Center or right: links to `Thesis`, `Evidence`, `Model`, `Q&A`, `Sources`.
- Right: primary action `Download deck` and secondary `Contact`.

Button style:
- 8px radius.
- No 3D shadow.
- Primary: deep green background, warm-white text.
- Secondary: transparent or warm surface with border.

### Sticky Desktop TOC

Use a sticky TOC after the hero:
- Position: sticky under header, left column.
- Label: `Pitch memo`.
- Links: all major sections.
- Active state: deep green text, left border or small square marker.
- Include a small "Updated May 2026" line and "Evidence-led draft" state.

TOC behavior:
- Visible from tablet/desktop, hidden or transformed on mobile.
- Active section highlighting via intersection observer if implemented.
- Do not add heavy animations.

### Mobile Nav

Mobile should use a compact sticky nav:
- Top header with logo and `Deck` action.
- Second row: horizontal section pills or a `Sections` dropdown.
- The nav must not cover section headings when anchor links are used; add scroll margin.
- Use short labels: `Thesis`, `Proof`, `Market`, `Model`, `GTM`, `Q&A`, `Sources`.

## Hero

Hero should signal the page is an investor document, not a farmer-facing app.

Content:
- Eyebrow: `Investor pitch memo`
- H1: `KisanAI: trusted daily decision support for Indian farmers`
- Subhead: "A vernacular, mobile-first AI agriculture assistant focused on disease triage, weather-to-action, mandi context, and scheme guidance."
- One-line honesty note: "This page separates proof, assumptions, and risks so the opportunity can be evaluated without hype."
- CTAs: `Download pitch deck`, `Read Q&A`, `Contact founder`.

Hero proof strip:
- `9.7 Cr PM-KISAN-linked farmers` tagged as proof/planning anchor.
- `₹58.2B conservative TAM` tagged as assumption-led model.
- `B2B2C first` tagged as strategic plan.
- `Traction not yet public` tagged as open risk.

Visual:
- Warm paper background.
- Thin topographic or field-row line pattern may be used if subtle and CSS-only.
- No full-bleed green block.
- No large illustration card.
- No random AI imagery.

## Evidence And Claim System

The page needs a consistent assertion taxonomy.

### Badge Types

Use three core badge types everywhere:

| Badge | Meaning | Visual |
|---|---|---|
| `Proof` | Supported by public source or product evidence | Deep green text on soft green |
| `Assumption` | Planning model or strategic inference | Gold text on soft gold |
| `Risk` | Unknown, weakly evidenced, or needs validation | Soil/red text on soft soil |

Optional fourth badge:

| Badge | Meaning | Visual |
|---|---|---|
| `Plan` | Future execution choice, not current proof | Ink text on warm muted surface |

Rules:
- Every metric card must carry one badge.
- Avoid unsupported "proof" labels.
- If the source is a local research synthesis rather than primary external data, label it as `Assumption` or `Plan` unless primary evidence is surfaced.
- Risk badges should not look alarming unless the issue is legally or safety critical.

### Citation Chips

Citation chips should be compact, consistent, and printable.

Chip content:
- Short source label, e.g. `PM-KISAN`, `FarmRise`, `Bharat-VISTAAR`, `Reuters`, `KisanAI research`, `Founder post`.
- Optional numeric source ID: `S1`, `S2`, etc.

Chip style:
- Inline-flex.
- 12px text.
- 1px border.
- Warm surface.
- Muted gold accent.
- External-link icon only if available from the current icon set.

Interaction:
- Desktop hover shows a tooltip/popover with title, source type, and date if known.
- Click jumps to the Sources section or opens external source in a new tab, depending on implementation scope.
- Mobile tap opens a small disclosure or jumps to Sources.
- Print mode should render citation IDs as plain text and expose URLs in the Sources section.

## Section Specifications

### 1. Executive Thesis

Purpose: make the thesis legible in 30 seconds.

Components:
- Thesis paragraph in editorial style.
- "What we believe" list with 3-4 bullets.
- "What must be proven" list with 3-4 bullets.
- Proof/assumption/risk legend.

Key message:
- KisanAI can become a trusted assistant layer for recurring agricultural decisions, but investability depends on proving retention, trust, and partner-led distribution in a narrow initial wedge.

### 2. Problem Evidence

Purpose: show the problem is urgent, costly, and workflow-specific.

Components:
- Evidence cards for registration complexity, broken interfaces, data-entry friction, procurement failures, crop-loss financial distress, language barriers.
- Use short quotes only when essential and keep them brief.
- Each card includes: pain theme, farmer/workflow implication, KisanAI design response, citation chips.

Layout:
- Desktop: 2-column grid.
- Mobile: stacked cards.
- Include a compact "Design principle derived" row:
  - Local language by default.
  - Progressive profiling.
  - Source and freshness labels.
  - Actionable next steps.
  - Escalation or abstention under uncertainty.

### 3. Market And Timing

Purpose: explain why the opportunity is large without inflating claims.

Components:
- TAM/SAM/SOM table with explicit assumptions.
- Trend evidence table.
- "Why now" timeline of category tailwinds.

Metric cards:
- `9.7 Cr` PM-KISAN-linked farmers.
- `₹58.2B` conservative TAM at ₹600/farmer/year.
- `45%` reachability assumption for SAM.
- `0.5%` year-3 SOM planning capture.

Copy must state:
- "This is an assumption-led planning model, not an audited market size."

### 4. Product Wedge

Purpose: stop the product from sounding like a broad farm OS too early.

Components:
- One "wedge decision" panel:
  - Start: disease triage + weather-to-action + mandi/scheme context.
  - Narrow: one crop cluster, one state/belt, one dominant language, one partner channel.
  - Exclude for now: fintech, insurance, full marketplace, ERP, every-crop coverage.
- User journey strip:
  1. Farmer sees symptom or trigger.
  2. Asks in local language or uploads image.
  3. Gets sourced, confidence-aware answer.
  4. Receives next action and escalation path.
  5. Shares advisory card or returns at next trigger.

Visual:
- Use a process timeline, not app mockups unless real product screenshots are available.
- If screenshots are included, frame them as product evidence, not decorative hero art.

### 5. Business Model

Purpose: show monetisation realism.

Components:
- Staged model table:
  - Early: B2B2C pilot via FPO/NGO/partner.
  - Validation: freemium + premium advisory.
  - Growth: enterprise/API/white-label.
  - Adjacent: verified service referral or commerce, with neutrality guardrails.
- "Why not direct B2C first?" callout.

Tone:
- Practical and cautious.
- No claim that farmers will pay unless framed as unproven or scenario-based.

### 6. Go-To-Market

Purpose: show distribution discipline.

Components:
- Channel cards for FPOs/cooperatives, NGOs/livelihood programs, KVK/extension events, agri-input retailers, WhatsApp/Telegram, vernacular content.
- Growth loop diagram:
  - Useful answer -> shared advisory card -> assisted onboarding -> repeat trigger -> partner dashboard proof.
- Partner-led pilot blueprint:
  - Cohort size.
  - Onboarding method.
  - Weekly review.
  - Metrics captured.
  - Decision threshold.

Avoid:
- Generic "viral growth" claims.
- Product Hunt or broad app-store acquisition as the main path.

### 7. Competition

Purpose: treat competitors as category validation, not straw men.

Components:
- Competitor matrix with Plantix, DeHaat, FarmRise, Cropin, Bharat-VISTAAR, eNAM, aAQUA, KissanAI, WhatsApp/dealers.
- Columns:
  - Competitor/substitute.
  - What they prove.
  - Where they are strong.
  - KisanAI wedge.
  - Risk to KisanAI.
- Include a positioning quadrant only if it adds clarity:
  - Broad platform vs focused assistant.
  - Institution-led vs farmer-led.

Tone:
- Respectful. The page should not pretend incumbents are weak.

### 8. Economics And Scenarios

Purpose: make investor diligence easy.

Components:
- Cost-per-active-user table:
  - Text-only light.
  - Text + disease assist.
  - Voice-heavy advisory.
- Unit economics scenario table:
  - Consumer low-price annual.
  - Consumer stronger annual.
  - B2B2C partner contract.
  - Enterprise/institutional.
- Sensitivity controls if implemented:
  - Tabs or segmented control: `Conservative`, `Base`, `Upside`.
  - Values can be static in v1 if live controls are too much.

Rules:
- Mark all economics as `Scenario`.
- Include clear note: "Scenario model, not observed KisanAI metrics."
- Keep tables dense, not card-heavy.

### 9. Trust, Safety, And Compliance

Purpose: show maturity around high-stakes AI advice.

Components:
- Safety architecture list:
  - Retrieval-backed answers.
  - Source/freshness labels.
  - Confidence or uncertainty language.
  - Abstention for dangerous/uncertain cases.
  - Expert/KVK escalation path.
  - Prompt/model/version logging.
  - User feedback and correction loop.
- Compliance checklist:
  - Consent.
  - Data minimisation.
  - Image/location handling.
  - Retention.
  - Deletion/export.
  - DPDP-aligned notices.
  - Breach response.
  - Liability and advice disclaimers.

Visual:
- Use a checklist table, not a shield illustration.
- Use risk badges for unresolved legal or validation items.

### 10. Roadmap

Purpose: make the next 90 days and 12 months concrete.

Components:
- 90-day roadmap timeline:
  - Weeks 1-2: wedge decision, privacy/support/disclaimer, instrumentation.
  - Weeks 3-6: evidence layer, disease/weather/scheme confidence UX, partner materials.
  - Weeks 7-10: first FPO/NGO/dealer pilot, weekly safety/retention reviews.
  - Weeks 11-12: pilot report, pricing test, investor update.
- 12-month roadmap:
  - Pilot proof.
  - Crop/language expansion.
  - Partner dashboard.
  - Enterprise/API experiments.
  - Case studies.

Layout:
- Desktop: horizontal timeline for 90-day, stacked roadmap for 12-month.
- Mobile: vertical timeline.

### 11. Investor Q&A

Purpose: let investors self-serve diligence questions.

Features:
- Search input.
- Filter chips:
  - `High-impact`
  - `Common`
  - `Premature`
  - `Market`
  - `Product`
  - `GTM`
  - `Safety`
  - `Economics`
  - `Moat`
- Each Q&A item should show:
  - Question.
  - Short answer.
  - Why it matters.
  - Badge: proof/assumption/risk.
  - Citation chips.
  - Optional related section link.

Default sort:
1. High-impact questions.
2. Common questions.
3. Lower-signal/premature questions.

High-impact questions to include:
- Why this problem?
- Why now?
- Who is the initial user?
- Why will farmers trust you?
- What is the wedge?
- Why can’t Bharat-VISTAAR or FarmRise do this?
- How do you distribute cheaply?
- What is the business model?
- What proof exists that farmers use digital agri products?
- How do you avoid dangerous hallucinations?
- What is the unfair advantage?
- What metrics matter in the first 90 days?

UX details:
- Keep filters single-line and horizontally scrollable on mobile.
- Search should filter visible cards instantly if implemented client-side.
- Expanded answers should not cause large layout jumps; use stable spacing.
- Print mode should expand all answers.

### 12. Ask And Next Milestones

Purpose: end with a disciplined ask, not a hype CTA.

Components:
- "What funding/partnership enables" table:
  - Pilot expansion.
  - Evaluation and safety.
  - Knowledge-base quality.
  - Partner onboarding.
  - Founder/team credibility gaps.
- Milestone gate table:
  - Metric.
  - Current status.
  - 90-day target.
  - Investor relevance.

CTA area:
- `Download deck`
- `Request pilot memo`
- `Contact founder`

Tone:
- Use "next proof" language rather than "join the revolution."

### 13. Sources

Purpose: make citations auditable and print-friendly.

Components:
- Source list grouped by:
  - KisanAI public/product sources.
  - Market and adoption sources.
  - Competitor/category sources.
  - Research papers and safety sources.
  - Planning assumptions from local research.
- Each source includes:
  - ID.
  - Title.
  - Publisher/source type.
  - Date if known.
  - URL if external.
  - Related page claims.

The Sources section should be reachable from every citation chip.

## Interaction Patterns

### Tables

Tables are central to the page. Build them to be useful, not decorative.

Requirements:
- Sticky header on long desktop tables if feasible.
- Horizontal scroll on mobile with a subtle fade or "scroll" affordance.
- Keep numeric columns right-aligned.
- Keep source/citation column compact.
- Use badges in cells sparingly.
- Do not convert every table into oversized mobile cards if it destroys comparison value.

### Filters

Q&A filters:
- Multi-select allowed.
- Selected state uses muted gold or deep green.
- Clear filters control appears only when filters are active.
- Search and filters should work together.

Scenario tabs:
- `Conservative`, `Base`, `Upside`.
- Use segmented controls, not dropdowns.
- Each tab must retain a visible "scenario, not observed" note.

### Anchor Links

Every major section should have an ID and `scroll-margin-top` to account for sticky nav.

### Print

Print-friendly mode is required.

Print CSS requirements:
- White or very light warm-white background.
- Hide sticky header, mobile nav, interactive controls, hover-only UI.
- Show all Q&A answers expanded.
- Show citation URLs or source IDs.
- Avoid page breaks inside tables, key cards, and Q&A answers where possible.
- Preserve table borders and headings.
- Remove decorative patterns and shadows.
- Add page title, date, and footer page URLs if feasible.

## Accessibility

Requirements:
- Semantic headings in order.
- All nav links keyboard accessible.
- TOC active state must not rely on color alone.
- Filters should be buttons with `aria-pressed`.
- Q&A accordion controls should expose expanded/collapsed state.
- Tables need captions or accessible labels.
- Citation chips need accessible names such as `Source: FarmRise 5 million users`.
- Minimum contrast against warm backgrounds.
- Respect reduced motion.
- No essential information hidden only in tooltips.

## Content Voice

Voice:
- Measured.
- Specific.
- Evidence-backed.
- Comfortable saying "unknown".
- Strategic rather than promotional.

Use:
- "Planning model"
- "Public evidence"
- "Pilot question"
- "Unproven"
- "Assumption-led"
- "Partner-led"
- "Narrow initial wedge"
- "Trust UX"

Avoid:
- "Revolutionary"
- "Disrupting agriculture"
- "India's first" unless quoted and sourced.
- "Massive untapped market" without specifics.
- "AI-powered" as the main differentiator.
- "Guaranteed yield improvement"
- "No competition"

## Component Inventory

Likely components needed for implementation:
- `PitchHeader`
- `PitchHero`
- `PitchLayout`
- `PitchToc`
- `MobileSectionNav`
- `EvidenceBadge`
- `CitationChip`
- `MetricStrip`
- `SectionIntro`
- `EvidenceCard`
- `AssumptionPanel`
- `ScenarioTable`
- `CompetitorMatrix`
- `RoadmapTimeline`
- `QAFilters`
- `QAAccordion`
- `SourceList`
- `PrintToolbar` or print action button

Keep components page-scoped unless another agent has defined shared design primitives for the pitch page. Do not mutate global design tokens unless a later implementation plan explicitly assigns that work.

## Responsive Behavior

Desktop, 1200px+:
- Header + left sticky TOC + main content.
- Tables use full width.
- Metric strip in 4 columns.
- Hero content max width around 900px.

Tablet, 768-1199px:
- TOC may remain if space allows, otherwise switch to top sticky section nav.
- Metric strip in 2 columns.
- Tables may scroll horizontally.

Mobile, below 768px:
- No desktop TOC.
- Sticky horizontal section nav.
- Hero H1 reduced.
- Metric strip stacked or 2-column if labels fit.
- Q&A filters horizontally scroll.
- Timeline vertical.
- Tables have explicit overflow affordance.

## Implementation Notes For Future Agents

Suggested route:
- `src/app/pitch/page.tsx`

Suggested approach:
- Create page-specific data arrays for metrics, sources, questions, scenarios, and roadmap.
- Prefer semantic HTML and static rendering.
- Add client-side interactivity only for Q&A filtering/search and active TOC if needed.
- Use `lucide-react` icons only if already available in the project; otherwise avoid adding new dependencies for this page.
- Keep all colors page-scoped via Tailwind arbitrary values or CSS module/page class to avoid changing global Duolingo-style tokens.
- Do not edit unrelated global product pages while implementing `/pitch`.

## Quality Bar

Before shipping the page, verify:
- The page does not look like the existing bright green investor page.
- The hero fits in the first viewport and hints at the next section.
- No text overlaps on mobile.
- Tables remain readable on mobile.
- Sticky TOC does not cover content.
- Mobile section nav does not cover anchors.
- Print preview is usable.
- All claims are tagged as proof, assumption, risk, or plan.
- Citation chips resolve to sources.
- Q&A filters work and do not break print mode.
- The page feels like a serious investor artifact, not a generic AI SaaS landing page.
