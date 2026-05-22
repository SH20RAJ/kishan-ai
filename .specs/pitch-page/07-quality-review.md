# KisanAI Pitch Page Quality Review

## Review Date

May 22, 2026

## Review Lenses

Reviewed as:

- Skeptical VC investor
- Government agriculture officer
- FPO leader
- Farmer UX tester
- Technical AI safety reviewer

## Problems Found

### Skeptical VC Investor

- The pitch could have looked overconfident if it presented PM-KISAN scale as directly monetizable users.
- The page needed stronger visible separation between sourced proof and assumptions.
- The first version had the print CTA mostly in navigation; a VC scanning the hero might miss the deck/print action.
- The desktop table of contents risked overlapping content on narrower desktop widths if fixed on the left.

### Government Agriculture Officer

- The page needed an explicit 90-day pilot structure with objective, target geography, crops, languages, roles, KPIs, privacy, safety, and expected outputs.
- Government references could be misread as claimed partnership unless carefully framed.
- Safety language needed to emphasize decision support, not replacement of extension officers.

### FPO Leader

- The page needed to make partner value tangible: onboarding, dashboard, repeated farmer questions, escalations, and member-support visibility.
- Pricing needed to be shown as a hypothesis rather than a demand.
- The GTM funnel needed to show how a pilot becomes an annual contract.

### Farmer UX Tester

- The product narrative needed to stay close to practical trigger moments: crop symptom, rain, mandi visit, scheme deadline.
- The page should not imply farmers must complete long profiles or understand technical AI terms.
- The design needed to stay readable on mobile, especially tables and Q&A cards.

### Technical AI Safety Reviewer

- Disease and pesticide advice needed strict caveats.
- The system needed explicit source-grounding, confidence, freshness, abstention, and escalation language.
- Privacy and DPDP posture needed to be framed as a requirement and not as a completed certification.
- The Q&A needed to answer "what if AI is wrong?" directly.

## Fixes Made

- Created seven spec files before implementation:
  - `00-source-analysis.md`
  - `01-content-architecture.md`
  - `02-investor-narrative.md`
  - `03-data-proof-map.md`
  - `04-ui-ux-plan.md`
  - `05-component-plan.md`
  - `06-implementation-checklist.md`
- Built `/pitch` with all 20 required sections in the requested order.
- Added typed source and claim registries with confidence and label fields.
- Added a Data Proof Room with claim cards, evidence table, and source list.
- Added 84 investor Q&A entries with category, difficulty, confidence, proof, what-not-to-say, and best founder answer.
- Added Q&A search, category filter, difficulty filter, confidence filter, and accordion expansion.
- Added a print/download button and print styles.
- Added desktop sticky table-of-contents as a horizontal memo bar to avoid content overlap.
- Added mobile horizontal section navigation in the sticky header.
- Added explicit assumption, risk, and validation-gap language throughout market sizing, revenue, unit economics, government pilots, and safety.
- Avoided fake traction, fake partnerships, fake yield improvements, and fake accuracy claims.
- Updated Next.js lint configuration to the current flat-config pattern and changed `npm run lint` to `eslint .`.
- Excluded generated deployment artifacts from lint.
- Fixed pre-existing lint errors that blocked verification without changing broad behavior:
  - typed API route catch blocks as `unknown`
  - removed `any` from selected AI response parsing
  - replaced a root navigation `<a>` with `Link`
  - removed state updates flagged by React hooks purity rules

## Remaining Risks

- Investor proof is still mostly market/category proof, not company traction. KisanAI still needs pilot usage, retention, revenue, and partner-conversion evidence.
- Some research-file citations are crawler-local references without stable URLs. These are labeled low confidence and should be replaced before a live investor push.
- Product accuracy, disease triage quality, source refresh cadence, and expert escalation are not proven.
- DPDP/privacy posture is described as required and intended; legal review is still needed before institutional scale.
- Financial models are scenarios, not observed unit economics.
- Government procurement and FPO renewal cycles are not validated.
- The page is intentionally long. It works as a pitch memo/data-room preview, but a shorter deck or executive PDF should still exist for first-touch outreach.

## Readiness Scores

| Audience | Score | Rationale |
|---|---:|---|
| Investor-readiness | 8/10 | Strong narrative, proof labeling, Q&A, risks, and market logic. Needs real pilot metrics, team proof, and pricing validation for a 9+. |
| Government-readiness | 8/10 | Clear 90-day pilot, safety posture, KPIs, and public-good framing. Needs named geography, official data sources, and legal/privacy review. |
| Partner-readiness | 7.5/10 | Good FPO/NGO value proposition and dashboard logic. Needs actual onboarding materials, partner pricing, and field deployment process. |

## Verification

- `npm run lint` passes with warnings only.
- `npx tsc --noEmit` passes.
- `npm run build` passes and confirms `/pitch` is generated as a static route.

