# 04 - UI/UX Design System: KisanAI

## Document Purpose
Define the design principles, visual language, component library, and interaction patterns for KisanAI. This design system is optimized for vernacular-first, low-literacy, mobile-first users in rural India.

---

## 1. Design Principles

### 1.1 Vernacular First
- All UI text rendered in the user's selected language
- No English labels in the farmer-facing interface
- Font support for Devanagari, Telugu, Kannada, Tamil, Bengali, Gujarati, Malayalam, Odia, Gurmukhi
- Language switching is a one-tap action

### 1.2 One Screen, One Action
- Every screen has exactly one primary action
- No cognitive overload from multiple CTAs
- Clear visual hierarchy guides the eye to the primary action
- Secondary actions are visually de-emphasized

### 1.3 Trust Through Transparency
- Every AI response includes source citation
- Confidence scores shown on disease diagnoses
- Explicit "I'm not sure" when uncertainty is high
- Disclaimers on all advisory content
- No hidden agendas (no product-pushing)

### 1.4 Works on Low-End Devices and Networks
- Target: Android devices Rs 8,000-15,000
- Target: 2G/3G connections (50-200 kbps)
- First meaningful paint: < 2 seconds on 3G
- Total bundle size: < 500KB (initial load)
- Offline-first for cached content

### 1.5 Accessible by Design
- Minimum touch target: 48x48dp (Material Design standard)
- Color contrast: WCAG AA minimum (4.5:1 for text)
- Voice input available everywhere
- Large, readable text (minimum 16sp body text)
- Icons always paired with text labels

### 1.6 Shareable by Default
- Every answer is a potential shareable card
- WhatsApp-optimized card format
- One-tap share to WhatsApp/Telegram
- Cards are self-contained (make sense without context)

---

## 2. Color System

### 2.1 Primary Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `primary-500` | Kisan Green | `#2E7D32` | Primary actions, active states, brand |
| `primary-600` | Dark Green | `#1B5E20` | Hover states, emphasis |
| `primary-100` | Light Green | `#C8E6C9` | Backgrounds, selected states |
| `primary-50` | Pale Green | `#E8F5E9` | Card backgrounds, subtle highlights |

### 2.2 Secondary Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `secondary-500` | Earth Brown | `#795548` | Secondary actions, accents |
| `secondary-600` | Dark Brown | `#4E342E` | Hover states |
| `secondary-100` | Light Brown | `#D7CCC8` | Backgrounds |

### 2.3 Accent Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `accent-gold` | Harvest Gold | `#F9A825` | Highlights, badges, important info |
| `accent-sky` | Sky Blue | `#0288D1` | Weather-related elements |
| `accent-red` | Alert Red | `#D32F2F` | Errors, dangerous advice warnings |
| `accent-orange` | Caution Orange | `#F57C00` | Warnings, medium-risk indicators |

### 2.4 Neutral Palette

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `neutral-900` | Near Black | `#212121` | Primary text |
| `neutral-700` | Dark Gray | `#616161` | Secondary text |
| `neutral-500` | Medium Gray | `#9E9E9E` | Placeholder text, disabled |
| `neutral-300` | Light Gray | `#E0E0E0` | Borders, dividers |
| `neutral-100` | Off White | `#F5F5F5` | Page background |
| `neutral-50` | White | `#FFFFFF` | Card background, surface |

### 2.5 Semantic Colors

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `success` | Green | `#4CAF50` | Positive outcomes, confirmations |
| `warning` | Amber | `#FFC107` | Caution, medium-risk |
| `error` | Red | `#F44336` | Errors, high-risk warnings |
| `info` | Blue | `#2196F3` | Information, links |

### 2.6 Confidence Score Colors

| Confidence Range | Color | Visual |
|-----------------|-------|--------|
| 80-100% | `#4CAF50` (Green) | Solid bar |
| 60-79% | `#FFC107` (Amber) | Solid bar |
| 40-59% | `#FF9800` (Orange) | Dashed bar |
| 0-39% | `#F44336` (Red) | Dotted bar |

---

## 3. Typography

### 3.1 Font Stack

**Primary (Vernacular)**:
```css
font-family: 'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans Telugu',
             'Noto Sans Kannada', 'Noto Sans Tamil', 'Noto Sans Bengali',
             'Noto Sans Gujarati', 'Noto Sans Malayalam', 'Noto Sans Oriya',
             'Noto Sans Gurmukhi', sans-serif;
```

**Fallback (Latin/English)**:
```css
font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 3.2 Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display-large` | 32px | 700 | 40px | Landing page hero |
| `display-medium` | 28px | 700 | 36px | Section headers |
| `headline-large` | 24px | 600 | 32px | Page titles |
| `headline-medium` | 20px | 600 | 28px | Card titles |
| `title-large` | 18px | 600 | 24px | List item titles |
| `title-medium` | 16px | 600 | 22px | Button text, nav labels |
| `body-large` | 18px | 400 | 28px | Chat messages (user) |
| `body-medium` | 16px | 400 | 24px | Chat messages (bot), body text |
| `body-small` | 14px | 400 | 20px | Captions, timestamps |
| `label-large` | 14px | 600 | 20px | Labels, tags |
| `label-medium` | 12px | 600 | 16px | Badges, small labels |

### 3.3 Language-Specific Adjustments

| Language | Adjustments |
|----------|-------------|
| Hindi (Devanagari) | Standard Noto Sans Devanagari; slight line-height increase (+2px) |
| Telugu | Noto Sans Telugu; increased letter-spacing for readability |
| Kannada | Noto Sans Kannada; standard sizing |
| Tamil | Noto Sans Tamil; slightly larger body text for readability |
| Bengali | Noto Sans Bengali; standard sizing |
| Marathi | Same as Hindi (Devanagari script) |

---

## 4. Spacing and Layout

### 4.1 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing (icon-text gap) |
| `space-2` | 8px | Default gap (inline elements) |
| `space-3` | 12px | Small padding (chips, tags) |
| `space-4` | 16px | Default padding (cards, list items) |
| `space-5` | 20px | Medium padding (sections) |
| `space-6` | 24px | Large padding (page margins) |
| `space-8` | 32px | Section spacing |
| `space-10` | 40px | Large section spacing |
| `space-12` | 48px | Page-level spacing |

### 4.2 Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `mobile-sm` | 320px | Small phones (budget Android) |
| `mobile-md` | 375px | Standard phones |
| `mobile-lg` | 428px | Large phones |
| `tablet` | 768px | Tablets (admin dashboard) |
| `desktop` | 1024px | Desktop (admin dashboard) |

### 4.3 Grid System

- Mobile: Single column, full-width cards
- Tablet (admin): 12-column grid, 16px gutters
- Desktop (admin): 12-column grid, 24px gutters, max-width 1200px

---

## 5. Component Library

### 5.1 Chat Components

#### ChatBubble (User)
- Background: `primary-50`
- Text: `neutral-900`
- Border radius: 16px (top-left square)
- Max width: 85% of screen
- Alignment: right

#### ChatBubble (Bot)
- Background: `neutral-50`
- Text: `neutral-900`
- Border radius: 16px (top-right square)
- Max width: 90% of screen
- Alignment: left
- Includes source citation when available

#### DiseaseDiagnosisCard
- Background: `neutral-50`
- Border: 1px `neutral-300`
- Border radius: 12px
- Image: rounded corners, max-height 200px
- Confidence bar: colored per confidence range

#### WeatherAdvisoryCard
- Shows current conditions, 3-day outlook
- Crop-specific action items
- Source attribution

#### PriceSummaryCard
- Today's price, 7-day average, trend indicator
- MSP comparison
- Source attribution (AGMARKNET)

#### SchemeExplainerCard
- Eligibility checklist
- Benefits summary
- Apply link
- Disclaimer

### 5.2 Input Components

#### ChatInput
- Fixed at bottom of screen
- Minimum height: 56px
- Attachment, camera, mic, send buttons

#### VoiceRecordingIndicator
- Red pulsing dot
- Audio waveform visualization
- Tap anywhere to stop
- Auto-stop after 60 seconds

### 5.3 Navigation Components

#### BottomNavBar
- Height: 64px
- Active state: primary-500 color, bold label
- Inactive state: neutral-500 color
- Labels: always visible (not icon-only)

#### TopAppBar
- Height: 56px
- Background: `primary-500`
- Text: white
- Language toggle: pill-shaped

### 5.4 Feedback Components

#### ThumbsUpDown
- Background: `neutral-100`
- Active state: `primary-100` background

#### LoadingSpinner
- Animated pulsing dots
- Shown while processing queries

---

## 6. Iconography

### 6.1 Icon Set
Use Material Icons (Outlined style) for consistency.

### 6.2 Icon Sizing
- Navigation icons: 24dp
- Inline icons: 20dp
- Large feature icons: 48dp
- Always paired with text label in farmer-facing UI

---

## 7. Motion and Animation

### 7.1 Principles
- Animations should be fast (150-300ms)
- Purpose: provide feedback, not decoration
- Reduce motion for users with `prefers-reduced-motion`

### 7.2 Standard Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Chat bubble appear | 200ms | ease-out | New message slides in from bottom |
| Card expand | 250ms | ease-in-out | Expanding diagnosis/weather cards |
| Loading pulse | 1.5s | ease-in-out | Thinking indicator |
| Tab switch | 150ms | ease-out | Bottom nav tab change |
| Page transition | 300ms | ease-in-out | Route changes |

---

## 8. Design Tokens (CSS Variables)

```css
:root {
  /* Primary */
  --color-primary-50: #E8F5E9;
  --color-primary-100: #C8E6C9;
  --color-primary-500: #2E7D32;
  --color-primary-600: #1B5E20;

  /* Secondary */
  --color-secondary-500: #795548;
  --color-secondary-600: #4E342E;
  --color-secondary-100: #D7CCC8;

  /* Accent */
  --color-accent-gold: #F9A825;
  --color-accent-sky: #0288D1;
  --color-accent-red: #D32F2F;
  --color-accent-orange: #F57C00;

  /* Neutral */
  --color-neutral-50: #FFFFFF;
  --color-neutral-100: #F5F5F5;
  --color-neutral-300: #E0E0E0;
  --color-neutral-500: #9E9E9E;
  --color-neutral-700: #616161;
  --color-neutral-900: #212121;

  /* Semantic */
  --color-success: #4CAF50;
  --color-warning: #FFC107;
  --color-error: #F44336;
  --color-info: #2196F3;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.15);

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 32px;
}
```

---

## 9. Responsive Behavior

### 9.1 Chat Interface
- Mobile (default): Full-width chat, bottom input bar
- Tablet: Centered chat column (max-width 600px), side panels for history
- Desktop: Three-column layout (history | chat | context panel)

### 9.2 Admin Dashboard
- Mobile: Stacked cards, collapsible sidebar
- Tablet: Two-column layout, persistent sidebar
- Desktop: Full three-panel layout with data tables

### 9.3 Cards
- Mobile: Full-width, stacked vertically
- Tablet: 2-column grid for price/weather cards
- Desktop: 3-column grid for price/weather cards
