# KisanAI Pitch Page Implementation Checklist

## Preconditions

- [x] Read `public/KisanAI Deep Research Report and Investor Q&A Dossier.md` completely.
- [x] Read `public/kishanai-reseach-2.md` completely.
- [x] Read `public/kishanai-reseach.md` completely.
- [x] Inspect existing Next.js app structure.
- [x] Inspect package scripts.
- [x] Confirm App Router route location: `src/app/pitch/page.tsx`.
- [x] Confirm styling: Tailwind v4 with global tokens in `src/app/globals.css`.
- [x] Check current docs for Next.js App Router metadata and client component split with Context7.

## Spec Files

- [x] `.specs/pitch-page/00-source-analysis.md`
- [x] `.specs/pitch-page/01-content-architecture.md`
- [x] `.specs/pitch-page/02-investor-narrative.md`
- [x] `.specs/pitch-page/03-data-proof-map.md`
- [x] `.specs/pitch-page/04-ui-ux-plan.md`
- [x] `.specs/pitch-page/05-component-plan.md`
- [x] `.specs/pitch-page/06-implementation-checklist.md`
- [x] `.specs/pitch-page/07-quality-review.md`

Do not start coding until `00`, `02`, `03`, `04`, and `05` exist.

## Planned File Structure

Create:

```txt
src/app/pitch/page.tsx
src/app/pitch/loading.tsx
src/components/pitch/CitationBadge.tsx
src/components/pitch/ClaimCard.tsx
src/components/pitch/EvidenceTable.tsx
src/components/pitch/InvestorQASection.tsx
src/components/pitch/MetricCard.tsx
src/components/pitch/PitchCTA.tsx
src/components/pitch/PitchNavigation.tsx
src/components/pitch/PrintPitchButton.tsx
src/components/pitch/QAAccordion.tsx
src/components/pitch/SourceReliabilityBadge.tsx
src/lib/pitch/calculations.ts
src/lib/pitch/claims.ts
src/lib/pitch/content.ts
src/lib/pitch/questions.ts
src/lib/pitch/sources.ts
src/lib/pitch/types.ts
```

Keep sections in `page.tsx` or split only if the file becomes hard to maintain. Prefer data-driven reusable primitives over dozens of tiny one-off components.

## Implementation Order

1. Create shared pitch types.
2. Create sources and claims data.
3. Create core content data for metrics, tables, roadmap, risk matrix, business models, GTM, pilot proposal, and proof room.
4. Create investor Q&A dataset with at least 80 strong Q&As.
5. Build reusable components:
   - Source reliability badge.
   - Citation badge.
   - Metric card.
   - Claim card.
   - Evidence table.
   - Navigation.
   - Print button.
   - Q&A accordion/search/filter.
   - CTA.
6. Create `/pitch` route page with metadata.
7. Create `/pitch/loading.tsx`.
8. Add print CSS scoped to pitch page if needed.
9. Verify responsive layout manually through code and build checks.
10. Run lint/type/build commands.
11. Create/update quality review spec.
12. Fix issues from quality review.
13. Run checks again.

## Content Requirements

- [ ] Hero uses required headline and subheadline.
- [ ] Hero includes one-line pitch.
- [ ] Hero includes 30-second pitch.
- [ ] Hero includes "Pilot-ready, not claiming fake traction" badge or equivalent trust note.
- [ ] Hero has CTAs: View Investor Q&A, View Data Proof, Download / Print Pitch, Contact for Pilot.
- [ ] Executive snapshot table matches required categories.
- [ ] Problem section includes required real-problem statement.
- [ ] Why Now has citation chips.
- [ ] Market section includes TAM/SAM/SOM with assumptions and warning.
- [ ] Product section includes modules table.
- [ ] How It Works has process flow.
- [ ] Business Model includes five stages and model table.
- [ ] GTM includes partner-led funnel.
- [ ] Competition includes substitutes and positioning statement.
- [ ] Technical Moat includes base-LLM-not-moat statement.
- [ ] AI Safety & Trust includes high-risk advice boundaries.
- [ ] Government/FPO pilot section includes 90-day proposal and KPIs.
- [ ] Financial section includes conservative/base/aggressive scenarios.
- [ ] Roadmap includes 0-90, 3-6, 6-12, 12-24 month stages.
- [ ] Investor Q&A includes search and filters.
- [ ] Data Proof Room includes claim/source/confidence tables.
- [ ] Risks & Mitigations is blunt and specific.
- [ ] Ask uses placeholder amount and 12-18 month runway target.
- [ ] Final CTA is serious and diligence-oriented.

## Investor Q&A Requirements

- [ ] At least 80 Q&A entries.
- [ ] Categories include: Basic, Market, Farmer Adoption, Product, AI Safety, Business Model, GTM, Competition, Financial, Technical Diligence, Government/Policy, Risk, Trick/Irritating, Advanced VC Diligence.
- [ ] Difficulty filter values: Basic, Good, Tough, Irritating, Trick, Advanced VC Diligence.
- [ ] Confidence filter values map to High proof, Medium proof, Assumption, Needs validation.
- [ ] Each Q&A includes:
  - Question.
  - Why investor asks this.
  - Short answer.
  - Detailed answer.
  - Proof/citation.
  - What not to say.
  - Best founder answer.
  - Suggested slide/section.

## UI Requirements

- [ ] Sticky table of contents on desktop.
- [ ] Mobile section navigation.
- [ ] Smooth scroll.
- [ ] Searchable/filterable Q&A.
- [ ] Expand/collapse accordions.
- [ ] Source confidence badges.
- [ ] Assumption badges.
- [ ] Print/download-friendly button.
- [ ] Metric cards.
- [ ] Scenario tables.
- [ ] Timeline/roadmap cards.
- [ ] Risk matrix.
- [ ] Data proof table.
- [ ] CTA section.
- [ ] Print-friendly styles.
- [ ] Mobile responsive.
- [ ] No text overlap in buttons/cards/tables.
- [ ] No fake startup hype.
- [ ] Palette reads premium agritech, not one-note green.

## Engineering Constraints

- Use server components by default.
- Use client components only for Q&A filtering/accordion and print button.
- Do not add heavy dependencies.
- No lucide-react dependency exists; use text labels, CSS shapes, or simple semantic UI instead of adding icons.
- Keep ASCII in source files unless existing content or user-facing copy requires symbols like rupee.
- Do not render raw research markdown directly.
- Page should work without runtime markdown parsing.
- Use curated extracted content in `src/lib/pitch`.

## Validation Commands

Run available commands from package scripts:

```bash
npm run lint
npm run build
```

There is no `typecheck` script in the current `package.json`. Run this explicit TypeScript check:

```bash
npx tsc --noEmit
```

If `npm run lint` fails because `next lint` is unavailable in Next.js 16, record the limitation and use `npx eslint .` as the actual lint fallback.

## Quality Review Requirements

Create/update `.specs/pitch-page/07-quality-review.md` after first implementation.

Review through five lenses:
- Skeptical VC investor.
- Government agriculture officer.
- FPO leader.
- Farmer UX tester.
- Technical AI safety reviewer.

Include:
- Problems found.
- Fixes made.
- Remaining risks.
- Investor-readiness score out of 10.
- Government-readiness score out of 10.
- Partner-readiness score out of 10.

## Done Definition

- [ ] `/pitch` route builds.
- [ ] Page is responsive.
- [ ] No broken imports.
- [ ] TypeScript passes.
- [ ] Build passes.
- [ ] Lint passes or documented fallback passes.
- [ ] Q&A search/filter works.
- [ ] Print button works.
- [ ] All unsupported claims labeled.
- [ ] No fake traction.
- [ ] No overclaiming yield improvement.
- [ ] Government partnership not claimed unless sourced.
- [ ] B2B, B2C, B2B2C, government revenue paths explained.
- [ ] Risks and assumptions visible.
- [ ] Final CTA clear.
