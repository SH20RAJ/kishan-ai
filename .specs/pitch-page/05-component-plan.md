# 05 - Component Architecture Plan: `/pitch`

## Purpose

Plan the reusable component and data architecture for a dedicated KisanAI `/pitch` page without implementing the components yet. The page should replace hard-coded pitch copy with typed data modules, keep the route mostly server-rendered, and use small client islands only for interactions such as Q&A filtering, accordion expansion, and printing.

## Repo Context

- Framework: Next.js App Router under `src/app`, currently Next `16.2.6` with React `19.1.7`.
- Styling: Tailwind CSS v4 through `src/app/globals.css`, with CSS variables for KisanAI's Duolingo-inspired palette and utility classes such as `btn-3d-primary`, `btn-3d-saffron`, `duo-card`, and `duo-input`.
- Imports: `@/*` path alias maps to `src/*`.
- Components: existing reusable UI lives in `src/components/kishanai`; public-facing pages currently duplicate nav/footer/card patterns inside route files.
- Pitch material: `PITCH.md`, `.specs/kishanai/09-government-investor-pitch.md`, `.specs/kishanai/00-research-summary.md`, and the public research dossiers are the main content sources.
- API: `/api/pitch-contact` exists and accepts JSON fields `name`, `email`, `type`, and `message`, while `/investors` currently posts to `/api/partner-lead`.

## Recommended Structure

Use `src/components/pitch` rather than `components/pitch` because this repo consistently places app code under `src/`.

```txt
src/
  app/
    pitch/
      page.tsx
      loading.tsx                 # optional skeleton if page grows
  components/
    pitch/
      PitchPage.tsx               # server composition component
      PitchNav.tsx                # server, anchor nav + primary CTAs
      PitchHero.tsx               # server
      PitchSection.tsx            # server layout primitive
      MetricStrip.tsx             # server
      EvidenceCard.tsx            # server
      FeatureGrid.tsx             # server
      ComparisonTable.tsx         # server
      BusinessModelTimeline.tsx   # server
      RoadmapTimeline.tsx         # server
      TractionProof.tsx           # server
      RiskMatrix.tsx              # server
      AskSection.tsx              # server
      ContactCta.tsx              # server form or link block
      Citation.tsx                # server
      CitationList.tsx            # server
      ClaimWithCitations.tsx      # server helper for sourced claims
      PrintButton.tsx             # client
      InvestorQa.tsx              # client wrapper for filtering + accordions
      QaFilterTabs.tsx            # client
      QaAccordion.tsx             # client
      PitchDownloadLinks.tsx      # server
      index.ts                    # component exports
  lib/
    pitch/
      types.ts
      citations.ts
      pitch-data.ts
      investor-qa.ts
      nav.ts
      selectors.ts
      format.ts
      index.ts
```

Keep shared KisanAI-wide pieces in `src/components/kishanai` only when they are reused outside `/pitch`. Pitch-only presentation belongs in `src/components/pitch`.

## Route Plan

Create `src/app/pitch/page.tsx` as a server component:

```tsx
import type { Metadata } from "next";
import { PitchPage } from "@/components/pitch";
import { pitchPageData } from "@/lib/pitch";

export const metadata: Metadata = {
  title: "Pitch",
  description:
    "KisanAI investor pitch: vernacular, source-aware AI farming assistant for Indian farmers.",
  alternates: { canonical: "/pitch" },
  openGraph: {
    title: "KisanAI Pitch",
    description:
      "A source-aware AI farming assistant for disease triage, weather advisory, mandi prices, and scheme guidance.",
    url: "/pitch",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KisanAI pitch" }],
  },
};

export default function PitchRoute() {
  return <PitchPage data={pitchPageData} />;
}
```

Recommended rendering: static server-rendered page. Avoid `use client` at route level so content, metadata, and citations remain indexable and fast.

## Data Modules

Move page copy and claims to `src/lib/pitch` so `/pitch` is reusable, reviewable, and easy to update after investor feedback.

### `types.ts`

Define discriminated, citation-aware data types:

```ts
export type PitchAudience = "investor" | "government" | "partner";

export type CitationKind =
  | "government"
  | "research"
  | "market"
  | "competitor"
  | "internal-assumption"
  | "company-disclosure";

export interface Citation {
  id: string;
  label: string;
  source: string;
  kind: CitationKind;
  url?: string;
  accessed?: string;
  note?: string;
}

export interface CitedText {
  text: string;
  citationIds?: string[];
}

export interface PitchMetric {
  label: string;
  value: string;
  detail: string;
  citationIds: string[];
  disclaimer?: string;
}

export interface PitchSection {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}

export interface PitchQaItem {
  id: string;
  category: "market" | "product" | "gtm" | "business-model" | "technology" | "risk" | "ask";
  question: string;
  shortAnswer: string;
  answer: string[];
  citationIds?: string[];
  priority?: "must-answer" | "supporting";
}
```

Use string IDs instead of array indexes for rendering keys and citation lookup.

### `citations.ts`

Centralize all sources:

- PM-KISAN beneficiary and digital identity references.
- IAMAI/Kantar rural internet references.
- DoT 5G district coverage reference.
- Bharat-VISTAAR / Digital Agriculture Mission references.
- Public competitor/category references for FarmRise, DeHaat, Plantix, Cropin, AgMarkNet, PMFBY.
- Internal planning assumptions clearly marked as `internal-assumption`.

Every market-size, coverage, cost, or competitor claim in `pitch-data.ts` should reference `citationIds`. The UI should never display a numerical claim without a source or an assumption label.

### `pitch-data.ts`

Export one top-level object:

```ts
export const pitchPageData: PitchPageData = {
  hero,
  navItems,
  metrics,
  problem,
  solution,
  whyNow,
  product,
  market,
  competition,
  businessModel,
  gtm,
  roadmap,
  risks,
  ask,
  citations,
};
```

Suggested content sections:

- Hero: one-line pitch, primary CTA to download PDF, secondary CTA to print/share, tertiary CTA to contact.
- Problem: fragmented, late, non-vernacular farm advice.
- Solution: source-aware AI assistant for disease, weather, prices, schemes.
- Why Now: rural internet, 5G coverage, government AI agriculture push, LLM/RAG cost curve, category validation.
- Market: TAM/SAM/SOM with explicit calculations and assumptions.
- Product: five current or planned modules.
- Differentiation: comparison against government portals, WhatsApp groups, generic LLMs, Plantix, DeHaat, FarmRise.
- Business model: B2B2C first, freemium second, enterprise/API later.
- GTM: FPO, KVK, NGO, agri-input retailer, WhatsApp group loop.
- Roadmap: Q2 2026 through Q1 2027 based on current investor page.
- Intellectual honesty: known vs unknown, test plan, risks and mitigations.
- Ask: fundraising or pilot ask with editable placeholders.

### `investor-qa.ts`

Keep all investor diligence Q&A in one array of `PitchQaItem`. Categories should map directly to filter tabs:

- `Market`
- `Product`
- `GTM`
- `Business model`
- `Technology`
- `Risk`
- `Ask`

Add `priority: "must-answer"` for questions that should appear in the default "Top Questions" view.

### `selectors.ts`

Pure helpers only:

- `getCitations(ids: string[], citations: Citation[]): Citation[]`
- `getQaCategories(items: PitchQaItem[]): QaCategory[]`
- `filterQaItems(items: PitchQaItem[], categoryOrAll: string, query: string): PitchQaItem[]`
- `getTopQaItems(items: PitchQaItem[]): PitchQaItem[]`

These should be easy to unit test later and should not import React.

## Component Responsibilities

### `PitchPage.tsx`

Server component that composes the full page:

- Renders `PitchNav`.
- Renders semantic `<main>` with ordered pitch sections.
- Passes only the Q&A array and citation map into the client `InvestorQa` island.
- Ends with contact CTA and footer links.

### Layout Primitives

`PitchSection` should handle consistent spacing, background banding, anchors, and max-width. Use full-width sections, not nested card shells.

Props:

```ts
interface PitchSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "white" | "raised" | "dark" | "green";
  width?: "narrow" | "default" | "wide";
  children: React.ReactNode;
}
```

### Content Components

- `MetricStrip`: market and traction metrics, with source chips under each metric.
- `EvidenceCard`: title, body, citations, optional assumption badge.
- `FeatureGrid`: product modules with compact icons. Existing repo does not include an icon package, so use lightweight inline SVG or text symbols unless a later implementation intentionally adds an icon dependency.
- `ComparisonTable`: responsive table on desktop, stacked rows on mobile.
- `BusinessModelTimeline`: three-stage model with pricing assumptions.
- `RoadmapTimeline`: quarter-by-quarter milestones.
- `RiskMatrix`: risk, why it matters, mitigation, validation signal.
- `AskSection`: use-of-funds and pilot/fundraising ask. Keep placeholders obvious if values are not finalized.

### Citation Components

`Citation`:

- Server component.
- Displays compact source label, kind badge, and external link if available.
- Handles internal assumptions distinctly, for example `Planning assumption`, not `Source`.

`CitationList`:

- Accepts citation IDs and citation registry.
- De-duplicates IDs.
- Renders accessible ordered list for section footnotes or inline cards.

`ClaimWithCitations`:

- Optional helper for sentences with trailing citation markers.
- Good for dense sections where a full card source line would be too heavy.

Accessibility:

- Use visible source text, not only footnote numbers.
- External links need `target="_blank"` and `rel="noopener noreferrer"`.
- Cite assumptions honestly with wording like "Internal planning assumption based on public data."

### Q&A Filtering and Accordion

`InvestorQa.tsx` should be the only substantial client component in the page.

Client state:

- `activeCategory`: `"top" | "all" | PitchQaItem["category"]`
- `query`: controlled search string
- `openIds`: `Set<string>` or single `openId`, depending on desired behavior

Recommended behavior:

- Default tab: `Top Questions`, populated from `priority === "must-answer"`.
- Category tabs use buttons with `aria-pressed`.
- Search filters within the selected tab by question, short answer, and answer text.
- Accordion headers are real `<button>` elements.
- Use `aria-expanded`, `aria-controls`, and stable panel IDs.
- Permit multiple open items for investor diligence scanning.
- Show citations inside expanded answers via `CitationList`.
- Keep all Q&A data server-imported and passed as serializable props.

Avoid URL query params for the MVP unless sharing filtered Q&A views becomes a requirement.

### Print Button

`PrintButton.tsx` should be a tiny client component:

```tsx
"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-3d-white">
      Print
    </button>
  );
}
```

Implementation notes:

- Render it in the hero/nav CTA area.
- Add print-specific CSS in `globals.css` only if the implementation owner is allowed to edit styles. Suggested rules: hide nav, buttons, forms, and accordion filters; expand all Q&A content for print if practical.
- If CSS edits are out of scope, keep print behavior simple and rely on browser defaults.

## Server/Client Split

Server components:

- Route `src/app/pitch/page.tsx`.
- All static pitch sections.
- Citation rendering.
- Download links.
- Contact CTA when it is a normal HTML form.

Client components:

- `InvestorQa`, `QaFilterTabs`, `QaAccordion`.
- `PrintButton`.
- Optional contact form only if the page needs JSON submission to `/api/pitch-contact` with inline success/error state.

Do not mark `PitchPage`, section components, metric cards, or citation components as client components. Keeping them server-rendered preserves SEO, reduces bundle size, and matches the repo pattern of small interactive islands.

## Styling Approach

Use existing Tailwind utilities and brand variables:

- Primary green: `#58CC02` / `bg-primary`.
- Dark text: `#4B4B4B` / `text-foreground`.
- Muted text: `text-muted`.
- Raised background: `bg-surface-raised` or `#F7F7F7`.
- Borders: `border-border` or `#E5E5E5`.
- CTAs: existing `btn-3d-primary`, `btn-3d-saffron`, `btn-3d-white` if available.

Design recommendations:

- Keep the pitch page more investor-dense than the farmer homepage.
- Use restrained cards for repeated items only: metrics, evidence items, Q&A rows.
- Keep section backgrounds as full-width bands.
- Avoid making `/pitch` a marketing landing page with oversized decorative content; the first viewport should immediately communicate KisanAI, the investment thesis, and the deck/print/contact actions.
- Ensure mobile tables collapse to readable stacked rows.

## Contact and CTA Options

MVP option:

- Use regular links/buttons:
  - Download deck: `/KisanAI_Investor_Pitch.pdf`
  - Contact: anchor to a short form or `mailto:`
  - Print: `PrintButton`

If using `/api/pitch-contact`:

- Add a small client form component only for progressive JSON submission.
- Required fields must map to the existing API: `name`, `email`, `type`, `message`.
- Use `type: "investor"` as a hidden field.
- If avoiding client JS, update the API or add a route handler that accepts form posts. Do not assume the current JSON endpoint can handle a normal browser form post.

## Accessibility and SEO

- One `<h1>` in `PitchHero`.
- Section headings should follow logical order.
- Anchor nav links should map to section IDs.
- Buttons must have visible labels.
- Q&A accordions need keyboard-friendly buttons.
- Tables need headings or accessible labels.
- Metadata should include canonical `/pitch`.
- Consider JSON-LD later for `Organization` and `FAQPage`, but only once Q&A copy is stable and citation/legal review is complete.

## Testing and Build Checklist

Before merging implementation:

- `npm run build` passes.
- TypeScript passes under strict mode.
- Lint command currently maps to `next lint`; verify it works with Next 16 or update separately if another agent owns tooling.
- `/pitch` renders with JavaScript disabled for all core content except filtering/printing.
- Mobile viewport: hero CTAs wrap cleanly; comparison table is readable; Q&A controls do not overflow.
- Desktop viewport: section anchors scroll correctly under sticky nav.
- Print smoke test: browser print preview contains hero, market, product, GTM, Q&A, citations; nav/form/buttons do not dominate.
- Citation audit: every numerical market, cost, coverage, adoption, and competitor claim has either a source citation or an internal-assumption badge.
- Accessibility smoke test: tab through nav, print button, Q&A filters, accordion buttons, and contact CTA.
- Bundle sanity: only Q&A and print controls ship client JS; static sections remain server components.

## Implementation Order

1. Add `src/lib/pitch/types.ts`, `citations.ts`, `pitch-data.ts`, and `investor-qa.ts`.
2. Add server primitives: `PitchSection`, `Citation`, `CitationList`, and `PitchPage`.
3. Add static section components and wire them to `pitchPageData`.
4. Add `PrintButton`.
5. Add `InvestorQa`, filter tabs, and accordion.
6. Add `src/app/pitch/page.tsx` metadata and route composition.
7. Run build/type checks and a citation audit.

## Open Decisions

- Whether `/investors` should redirect to `/pitch`, link to it, or remain a separate short investor brief.
- Whether the pitch contact CTA should use `/api/pitch-contact`, `/api/partner-lead`, or a simple email link.
- Whether the public pitch deck PDF should remain the primary downloadable artifact or be regenerated from the new `/pitch` content.
- Whether print styling can be added globally or should be deferred to the implementation owner with CSS ownership.
- Whether final fundraising ask values are ready or should remain placeholders until founder review.
