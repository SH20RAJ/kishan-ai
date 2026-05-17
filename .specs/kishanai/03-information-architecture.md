# 03 - Information Architecture: KisanAI

## Document Purpose
Define the site map, route structure, navigation hierarchy, and content organization for KisanAI's web application (PWA) and messaging interfaces. This IA is designed for the MVP scope with messaging-first distribution.

---

## 1. Design Principles for IA

1. **Messaging-first**: The primary interface is a chat, not a dashboard. Navigation should never compete with the conversation.
2. **Progressive disclosure**: Show only what the user needs at each step. No overwhelming menus.
3. **Vernacular by default**: All labels, routes, and navigation in the user's language.
4. **Zero-registration entry**: Users can ask questions without creating an account.
5. **One-screen decisions**: Every screen should have one primary action.

---

## 2. Channel Architecture

### 2.1 Entry Points

```
Farmer Touchpoints
+-- WhatsApp Bot (primary)
|   +-- Direct message to KisanAI number
|   +-- Shared link from FPO/retailer
|   +-- QR code scan at retailer shop
+-- Telegram Bot
|   +-- Direct message
|   +-- Group integration
+-- PWA (progressive web app)
|   +-- kishanai.strivio.world (primary domain)
|   +-- Installable on home screen
|   +-- Works offline for cached content
+-- Admin Dashboard (web)
    +-- For FPO managers
    +-- For NGO program officers
    +-- For internal team
```

### 2.2 Channel-Specific Behaviors

| Channel | Input Methods | Output Format | Unique Features |
|---------|--------------|---------------|-----------------|
| WhatsApp | Text, voice note, photo, location | Text + image cards + quick replies | Group sharing, broadcast lists |
| Telegram | Text, voice, photo, location | Text + inline buttons + image cards | Bot commands, group integration |
| PWA | Text, voice, photo, location, typed input | Full chat UI + cards + dashboard | Richer UI, offline caching, push notifications |
| Admin Dashboard | Form inputs, bulk actions | Tables, charts, reports | Analytics, member management, bulk advisory |

---

## 3. PWA Route Structure

### 3.1 Primary Routes

```
kishanai.strivio.world/
+-- /                           # Landing page (redirect to /chat if returning user)
+-- /chat                       # Main chat interface (default view)
+-- /chat/[conversationId]      # Specific conversation thread
+-- /scan                       # Image upload / camera capture for disease triage
+-- /weather                    # Weather dashboard with crop advisory
+-- /prices                     # Mandi prices and trends
+-- /schemes                    # Government scheme explorer
+-- /profile                    # User profile (progressive, optional)
|   +-- /profile/crops          # Crop details (optional)
|   +-- /profile/location       # Location/district (optional)
|   +-- /profile/language       # Language preference
+-- /settings                   # App settings
|   +-- /settings/language      # Language selection
|   +-- /settings/notifications # Notification preferences
|   +-- /settings/privacy       # Data and privacy controls
+-- /about                      # About KisanAI
+-- /help                       # Help and FAQ
+-- /legal
    +-- /legal/privacy          # Privacy policy
    +-- /legal/terms            # Terms of service
    +-- /legal/disclaimer       # Agricultural advice disclaimer
```

### 3.2 Admin Routes (Authenticated)

```
kishanai.strivio.world/admin/
+-- /admin                      # Admin dashboard overview
+-- /admin/members              # Member management (FPO/NGO)
|   +-- /admin/members/[id]     # Individual member detail
|   +-- /admin/members/import   # Bulk import members
+-- /admin/analytics            # Usage analytics and reports
|   +-- /admin/analytics/queries    # Query volume and types
|   +-- /admin/analytics/retention  # Retention cohorts
|   +-- /admin/analytics/quality    # Answer quality metrics
|   +-- /admin/analytics/impact     # Impact reports for donors
+-- /admin/advisory             # Bulk advisory management
|   +-- /admin/advisory/create  # Create advisory message
|   +-- /admin/advisory/schedule # Schedule broadcasts
|   +-- /admin/advisory/history # Past advisories
+-- /admin/content              # Content management
|   +-- /admin/content/knowledge # Knowledge base articles
|   +-- /admin/content/schemes   # Scheme database
|   +-- /admin/content/templates # Response templates
+-- /admin/settings             # Organization settings
|   +-- /admin/settings/profile  # Org profile
|   +-- /admin/settings/branding # Co-branding options
|   +-- /admin/settings/billing  # Subscription and billing
+-- /admin/team                 # Team member management
    +-- /admin/team/invite       # Invite team members
    +-- /admin/team/roles        # Role management
```

---

## 4. Navigation Structure

### 4.1 PWA Bottom Navigation (Mobile)

```
+-----------------------------------------------+
|                                               |
|              [Chat Content Area]               |
|                                               |
+-----------------------------------------------+
|  Chat  |  Scan  |  Weather  |  Prices  |  More  |
|  (active)|       |            |          |        |
+-----------------------------------------------+
```

- **Chat**: Main conversation interface (default)
- **Scan**: Quick access to camera/gallery for disease triage
- **Weather**: Weather dashboard with crop-specific advisories
- **Prices**: Mandi price checker with trends
- **More**: Schemes, profile, settings, help

### 4.2 PWA Top Navigation Bar

```
+-----------------------------------------------+
|  KisanAI     [Language] [Profile]             |
+-----------------------------------------------+
```

- Logo / brand name (tappable -- goes to chat)
- Language switcher (quick toggle between primary language and Hindi)
- Profile icon (progressive profiling, settings)

### 4.3 Chat Interface Structure

```
+-----------------------------------------------+
|  KisanAI     [Language] [Profile]             |
+-----------------------------------------------+
|                                               |
|  [Suggested Questions Carousel]               |
|  +----------+ +----------+ +----------+      |
|  | Upload   | | Today's  | | Onion    |      |
|  |   photo  | |  weather  | |  prices  |      |
|  +----------+ +----------+ +----------+      |
|                                               |
|  -------------------------------------------- |
|                                               |
|  [Chat Messages]                              |
|                                               |
|  User: My tomato leaves have white spots      |
|                                               |
|  Bot: Based on the photo you shared, this     |
|     looks like Early Blight (confidence:      |
|     78%). Here's what to do:                  |
|     1. Remove affected leaves                 |
|     2. Apply Mancozeb fungicide               |
|     3. Ensure proper spacing for airflow      |
|                                               |
|     Source: ICAR Tomato Disease Guide         |
|     Warning: For confirmed diagnosis,         |
|        consult your local KVK                 |
|                                               |
|     [Helpful] [Not helpful] [Share]           |
|                                               |
+-----------------------------------------------+
|  [Attach] [Camera] [Mic]  [Type message] [>] |
+-----------------------------------------------+
```

### 4.4 Admin Sidebar Navigation

```
+------------------------+
|  KisanAI Admin         |
+------------------------+
|                        |
|  Dashboard             |
|                        |
|  Members               |
|     +-- All Members     |
|     +-- Import          |
|                        |
|  Analytics             |
|     +-- Queries         |
|     +-- Retention       |
|     +-- Quality         |
|     +-- Impact          |
|                        |
|  Advisory              |
|     +-- Create          |
|     +-- Schedule         |
|     +-- History          |
|                        |
|  Content               |
|     +-- Knowledge Base   |
|     +-- Schemes          |
|     +-- Templates        |
|                        |
|  Settings              |
|     +-- Organization     |
|     +-- Branding         |
|     +-- Billing          |
|     +-- Team             |
|                        |
|  Logout                |
+------------------------+
```

---

## 5. Content Hierarchy

### 5.1 Chat Content Types

```
Message Types
+-- User Messages
|   +-- Text query (vernacular)
|   +-- Voice note (transcribed)
|   +-- Photo upload (disease triage)
|   +-- Location share (weather/prices)
|
+-- Bot Responses
|   +-- Text answer (with citation)
|   +-- Disease diagnosis card
|   |   +-- Diagnosis name + confidence
|   |   +-- Photo reference
|   |   +-- Next-step checklist
|   |   +-- Source + disclaimer
|   +-- Weather advisory card
|   |   +-- Current conditions
|   |   +-- 3-day outlook
|   |   +-- Crop-specific action items
|   |   +-- Source
|   +-- Price summary card
|   |   +-- Today's price (nearby mandis)
|   |   +-- 7-day average
|   |   +-- Trend indicator (up/down/stable)
|   |   +-- MSP comparison (if relevant)
|   |   +-- Source (AGMARKNET)
|   +-- Scheme explainer card
|   |   +-- Scheme name
|   |   +-- Eligibility checklist
|   |   +-- Application link
|   |   +-- Disclaimer
|   +-- Quick reply buttons
|       +-- "Tell me more"
|       +-- "What should I do?"
|       +-- "Check another mandi"
|       +-- "Share this"
|
+-- System Messages
    +-- Welcome message (language-specific)
    +-- Consent request (first interaction)
    +-- Error/timeout message
    +-- Disclaimer (periodic)
```

### 5.2 Shareable Answer Cards

When a user shares an answer, KisanAI generates a self-contained card:

```
+-----------------------------------+
|  KisanAI                          |
|                                   |
|  Tomato Early Blight              |
|  Confidence: 78%                  |
|                                   |
|  What to do:                      |
|  1. Remove affected leaves        |
|  2. Apply Mancozeb fungicide      |
|  3. Improve airflow spacing       |
|                                   |
|  ICAR Tomato Disease Guide        |
|                                   |
|  Get instant crop advice:         |
|  [Try KisanAI Free]               |
+-----------------------------------+
```

---

## 6. Information Architecture for Key Features

### 6.1 Disease Triage Flow

```
Entry Point (any channel)
    |
    +-- [Camera Icon] --> Camera Capture --> Image Preview
    |                                      |
    +-- [Attach Icon] --> Gallery Select --> Image Preview
    |                                      |
    +-- [Text: "My crop has..."] --> Text Description
                                          |
                                          v
                                    Processing...
                                          |
                                          v
                                    Diagnosis Card
                                    +-- Top diagnosis (confidence %)
                                    +-- Alternative diagnoses
                                    +-- Next-step checklist
                                    +-- Source citation
                                    +-- Disclaimer
                                          |
                                          v
                                    Quick Replies
                                    +-- "What chemical should I use?"
                                    +-- "Is this dangerous for [crop]?"
                                    +-- "Share this diagnosis"
                                    +-- "Take another photo"
```

### 6.2 Weather Advisory Flow

```
Entry Point
    |
    +-- [Weather Icon] --> Auto-detect location
    |                       |
    +-- [Text: "What's the weather?"] --> Ask for location
    |                                      |
    +-- [Location Share] --> Use shared location
                              |
                              v
                        Weather Card
                        +-- Current temp + conditions
                        +-- Today's advisory
                        +-- Tomorrow's outlook
                        +-- 3-day summary
                        +-- Crop-specific actions
                        +-- Source
                              |
                              v
                        Quick Replies
                        +-- "What about next week?"
                        +-- "Should I irrigate today?"
                        +-- "Alert me if rain comes"
                        +-- "Check another location"
```

### 6.3 Mandi Price Flow

```
Entry Point
    |
    +-- [Price Icon] --> Show nearby mandis (if location known)
    |                     |
    +-- [Text: "Onion price"] --> Ask crop + location
    |                              |
    +-- [Text: "Price in Nashik mandi"] --> Direct lookup
                                              |
                                              v
                                        Price Card
                                        +-- Today's modal price
                                        +-- Min-Max range
                                        +-- 7-day average
                                        +-- Trend (up/down/stable)
                                        +-- MSP comparison
                                        +-- Nearby mandi comparison
                                        +-- Source (AGMARKNET)
                                              |
                                              v
                                        Quick Replies
                                        +-- "Compare with [other mandi]"
                                        +-- "Should I sell today?"
                                        +-- "Price history for 30 days"
                                        +-- "Alert me when price hits X"
```

---

## 7. URL Strategy

### 7.1 Public URLs

| URL | Purpose | SEO Value |
|-----|---------|-----------|
| `/` | Landing page with value prop and CTA | Brand awareness |
| `/about` | About KisanAI, team, mission | Trust building |
| `/help` | FAQ and help articles | Support deflection |
| `/legal/privacy` | Privacy policy (vernacular + English) | Compliance |
| `/legal/terms` | Terms of service | Compliance |
| `/legal/disclaimer` | Agricultural advice disclaimer | Liability protection |

### 7.2 Authenticated URLs

| URL | Purpose | Access |
|-----|---------|--------|
| `/chat` | Main chat interface | All users |
| `/scan` | Disease triage | All users |
| `/weather` | Weather dashboard | All users |
| `/prices` | Price checker | All users |
| `/schemes` | Scheme explorer | All users |
| `/profile` | User profile | All users |
| `/admin/*` | Admin dashboard | FPO/NGO managers, internal team |

### 7.3 URL Localization

Routes remain in English for technical simplicity, but all UI labels are rendered in the user's selected language:

```
kishanai.strivio.world/chat  -->  UI renders in Marathi/Telugu/Hindi/etc.
kishanai.strivio.world/weather  -->  UI renders in selected language
```

---

## 8. Search and Discovery

### 8.1 In-Chat Discovery

The chat interface includes suggested questions that change based on:
- Time of day (morning: weather, evening: prices)
- Season (kharif/rabi crop cycle)
- User's location and crop history
- Trending queries in the user's district

### 8.2 Scheme Search

The scheme explorer allows filtering by:
- Eligibility criteria (land size, crop, state)
- Application status (open/closed)
- Type (subsidy, insurance, credit, training)
- Relevance to user's profile

### 8.3 Knowledge Base Search (Internal)

Admin users can search the knowledge base by:
- Crop type
- Disease/pest name
- Geography (state/district)
- Content type (advisory, scheme, price guide)
- Last updated date

---

## 9. Accessibility and Language

### 9.1 Language Switching

- Language detected on first message
- User can switch language at any time via top bar toggle
- All system messages, labels, and navigation translate dynamically
- Bot responses always match user's message language
- Fallback chain: User's language -> Hindi -> English

### 9.2 Accessibility Requirements

- Minimum touch target: 44x44px
- Color contrast ratio: 4.5:1 minimum
- All images have alt text (for screen readers where applicable)
- Voice input available for all text fields
- Text size adjustable via system settings
- Works on 2G/3G connections (progressive loading)

---

## 10. Offline Behavior

### 10.1 PWA Offline Capabilities

| Feature | Offline Behavior |
|---------|-----------------|
| Chat history | Cached locally, viewable offline |
| Disease diagnosis | Queued, processed when online |
| Weather | Shows last cached weather data |
| Prices | Shows last cached price data |
| Schemes | Cached scheme database available offline |

### 10.2 Sync Strategy

- Chat messages sync when connection is restored
- Images queued for upload when online
- Price and weather data refresh automatically on reconnect
- User preferences stored in localStorage
