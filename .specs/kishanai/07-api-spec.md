# 07 - API Specification: KisanAI

## Document Purpose
Define all API endpoints for KisanAI including request/response schemas, authentication, rate limiting, and error handling.

---

## 1. API Conventions

### 1.1 Base URL
- **Production**: `https://kishanai.strivio.world/api`
- **Staging**: `https://staging.kishanai.strivio.world/api`

### 1.2 Authentication
- JWT tokens stored in HttpOnly cookies
- WhatsApp/Telegram webhooks use signature verification
- Admin endpoints require `role: admin` or `role: super_admin`

### 1.3 Rate Limiting
| Endpoint Type | Limit | Window |
|--------------|-------|--------|
| Chat | 30 requests | 1 minute |
| Scan | 10 requests | 1 minute |
| Weather/Prices | 60 requests | 1 minute |
| Admin | 120 requests | 1 minute |
| Auth | 5 requests | 15 minutes |

### 1.4 Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": [{"field": "phone", "message": "Must be a valid Indian phone number"}]
  }
}
```

---

## 2. Authentication Endpoints

### 2.1 POST /auth/whatsapp-otp/send
Send OTP via WhatsApp.

**Request**:
```json
{"phone": "+919876543210"}
```

**Response (200)**:
```json
{"success": true, "message": "OTP sent to your WhatsApp", "expires_in": 300}
```

### 2.2 POST /auth/whatsapp-otp/verify
Verify OTP and create session.

**Request**:
```json
{"phone": "+919876543210", "otp": "123456"}
```

**Response (200)**:
```json
{
  "success": true,
  "user": {"id": "uuid", "phone": "+919876543210", "language": "hi", "role": "farmer", "is_new_user": true}
}
```

---

## 3. Chat Endpoints

### 3.1 POST /chat
Send a message and receive AI response.

**Request**:
```json
{
  "conversation_id": "uuid",
  "message": "My tomato leaves have white spots",
  "content_type": "text",
  "language": "mr",
  "location": {"district": "Nashik", "state": "Maharashtra"}
}
```

**Response (200)**:
```json
{
  "success": true,
  "conversation_id": "uuid",
  "message": {
    "id": "uuid",
    "role": "assistant",
    "content": "Based on your description, this could be Early Blight...",
    "content_type": "text",
    "intent": "disease",
    "confidence": 0.78,
    "sources": [{"title": "ICAR Tomato Disease Guide", "url": "https://icar.org.in/tomato-diseases"}],
    "language": "mr",
    "created_at": "2026-05-17T10:30:00Z"
  },
  "suggested_questions": ["What chemical should I use?", "Is this dangerous for my other crops?"]
}
```

### 3.2 POST /chat/image
Upload an image for disease diagnosis.

**Request** (multipart/form-data):
```
image: <file> (JPEG, PNG, WebP, max 10MB)
crop: "tomato" (optional hint)
language: "mr"
```

**Response (200)**:
```json
{
  "success": true,
  "message": {
    "id": "uuid",
    "role": "assistant",
    "content_type": "card",
    "card": {
      "type": "disease_diagnosis",
      "diagnoses": [
        {"disease": "Early Blight", "confidence": 0.78, "severity": "medium"},
        {"disease": "Septoria Leaf Spot", "confidence": 0.15, "severity": "low"}
      ],
      "treatments": [
        {"type": "chemical", "name": "Mancozeb application", "description": "Apply at 2g/liter"}
      ],
      "disclaimer": "This is a preliminary assessment. For confirmed diagnosis, consult your local KVK."
    }
  }
}
```

### 3.3 POST /chat/voice
Upload a voice message for transcription and response.

**Request** (multipart/form-data):
```
audio: <file> (OGG, MP3, WAV, max 60 seconds)
language: "mr"
```

**Response (200)**:
```json
{
  "success": true,
  "transcription": {"text": "...", "language": "mr", "confidence": 0.92},
  "message": {"id": "uuid", "role": "assistant", "content": "...", "intent": "disease"}
}
```

### 3.4 GET /chat/conversations
List user's conversations.

**Query**: `page`, `limit`, `channel`

**Response (200)**:
```json
{
  "conversations": [{"id": "uuid", "title": "...", "message_count": 12, "last_message_at": "..."}],
  "pagination": {"page": 1, "limit": 20, "total": 45}
}
```

---

## 4. Weather Endpoints

### 4.1 GET /weather
Get weather data and crop advisory.

**Query**: `district`, `state`, `crop`, `language`

**Response (200)**:
```json
{
  "location": {"district": "Nashik", "state": "Maharashtra"},
  "current": {"temp_celsius": 32, "humidity": 65, "conditions": "Partly Cloudy"},
  "forecast": [
    {"date": "2026-05-18", "temp_high": 35, "temp_low": 22, "conditions": "Rain Likely", "rain_probability": 75}
  ],
  "crop_advisory": {
    "crop": "tomato",
    "advisory": "Rain expected tomorrow. Ensure drainage channels are clear.",
    "actions": ["Clear drainage channels today", "Delay fertilizer application"]
  },
  "source": "IMD Nashik"
}
```

---

## 5. Price Endpoints

### 5.1 GET /prices
Get mandi prices for a commodity.

**Query**: `commodity`, `state`, `district`, `mandi`, `language`

**Response (200)**:
```json
{
  "commodity": "Onion",
  "mandis": [
    {
      "mandi_name": "Nashik APMC",
      "today": {"modal_price": 1850, "min_price": 1600, "max_price": 2100, "unit": "quintal"},
      "trend": {"seven_day_avg": 1720, "seven_day_change_percent": 7.6, "direction": "up"},
      "msp": {"value": 1510, "above_msp": true}
    }
  ],
  "context": "Prices are trending upward due to reduced supply.",
  "source": "AGMARKNET"
}
```

### 5.2 GET /prices/history
Get price history for a commodity at a specific mandi.

**Query**: `commodity`, `mandi`, `days`

---

## 6. Scheme Endpoints

### 6.1 GET /schemes
Search government schemes.

**Query**: `query`, `level`, `state`, `category`, `crop`, `page`, `limit`

**Response (200)**:
```json
{
  "schemes": [
    {
      "id": "uuid",
      "name": "PM-KISAN Samman Nidhi",
      "level": "central",
      "category": "subsidy",
      "description": "Income support of Rs 6,000 per year",
      "eligibility": "Farmer family with cultivable land",
      "benefits": "Rs 6,000/year in 3 installments",
      "apply_url": "https://pmkisan.gov.in"
    }
  ],
  "pagination": {"page": 1, "limit": 20, "total": 45}
}
```

---

## 7. Feedback Endpoints

### 7.1 POST /feedback

**Request**:
```json
{"message_id": "uuid", "rating": "negative", "reason": "inaccurate", "comment": "..."}
```

**Response (200)**:
```json
{"success": true, "message": "Thank you for your feedback."}
```

---

## 8. Webhook Endpoints

### 8.1 POST /webhook/whatsapp
WhatsApp Business API webhook for incoming messages.

**Processing**:
1. Verify webhook signature
2. Parse message (text, image, voice, location)
3. Find or create user by WhatsApp ID
4. Process through AI pipeline
5. Send response via WhatsApp Business API

### 8.2 POST /webhook/telegram
Telegram bot webhook for incoming messages.

---

## 9. Admin Endpoints

### 9.1 GET /admin/analytics/dashboard
Get dashboard overview metrics.

**Query**: `period` (7d, 30d, 90d), `organization_id`

**Response (200)**:
```json
{
  "overview": {"total_users": 1250, "active_users": 890, "total_queries": 15600},
  "retention": {"day_1": 0.72, "day_7": 0.35, "day_30": 0.18},
  "quality": {"grounded_answer_rate": 0.82, "positive_feedback_rate": 0.71},
  "intents": {"disease": 4500, "weather": 3200, "price": 2800, "scheme": 1500}
}
```

### 9.2 POST /admin/members/import
Bulk import members from CSV.

### 9.3 POST /admin/advisory
Send bulk advisory message.

**Request**:
```json
{
  "title": "Weather Alert",
  "content": "Heavy rain expected tomorrow...",
  "target_crop": "tomato",
  "target_district": "Nashik",
  "channel": "whatsapp"
}
```

---

## 10. User Profile Endpoints

### 10.1 GET /profile
Get current user's profile.

### 10.2 PUT /profile
Update user profile.

---

## 11. Consent Endpoints

### 11.1 POST /consent
Record user consent.

### 11.2 DELETE /consent/data
Request data deletion (DPDP compliance).
