# 06 - Database Schema: KisanAI

## Document Purpose
Define the complete PostgreSQL database schema for KisanAI, including all entities, relationships, indexes, and constraints. Uses PostgreSQL with pgvector extension on Neon.

---

## 1. Schema Overview

### 1.1 Core Entities

```
Users --+-- Conversations --+-- Messages
        |                   +-- MessageFeedback
        +-- UserProfiles
        +-- UserCrops
        +-- UserLocations

Organizations --+-- OrganizationMembers
                +-- AdvisoryBroadcasts

KnowledgeBase --+-- Documents
                +-- DocumentChunks (with vectors)
                +-- Schemes

DiseaseDatabase --+-- Diseases
                  +-- DiseaseImages
                  +-- Treatments

MandiPrices
WeatherCache
AuditLogs
```

---

## 2. Table Definitions

### 2.1 users

```sql
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone           VARCHAR(15) UNIQUE NOT NULL,
    phone_country   VARCHAR(5) DEFAULT 'IN',
    name            VARCHAR(255),
    language        VARCHAR(10) DEFAULT 'hi',
    role            VARCHAR(20) DEFAULT 'farmer' CHECK (role IN ('farmer', 'admin', 'super_admin')),
    organization_id UUID REFERENCES organizations(id),
    whatsapp_id     VARCHAR(255) UNIQUE,
    telegram_id     VARCHAR(255) UNIQUE,
    consent_given   BOOLEAN DEFAULT FALSE,
    consent_date    TIMESTAMPTZ,
    consent_version VARCHAR(20),
    first_seen_at   TIMESTAMPTZ DEFAULT NOW(),
    last_active_at  TIMESTAMPTZ,
    total_queries   INTEGER DEFAULT 0,
    deleted_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_whatsapp ON users(whatsapp_id);
CREATE INDEX idx_users_telegram ON users(telegram_id);
CREATE INDEX idx_users_organization ON users(organization_id);
CREATE INDEX idx_users_last_active ON users(last_active_at);
```

### 2.2 user_profiles

```sql
CREATE TABLE user_profiles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    age_range       VARCHAR(20),
    gender          VARCHAR(10),
    education       VARCHAR(50),
    land_size_acres DECIMAL(6,2),
    land_type       VARCHAR(50),
    irrigation_type VARCHAR(50),
    preferred_time  VARCHAR(20),
    notification_enabled BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.3 user_locations

```sql
CREATE TABLE user_locations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    state           VARCHAR(100) NOT NULL,
    district        VARCHAR(100) NOT NULL,
    block           VARCHAR(100),
    village         VARCHAR(100),
    latitude        DECIMAL(10,8),
    longitude       DECIMAL(11,8),
    source          VARCHAR(20),
    is_primary      BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_user_locations_user ON user_locations(user_id);
CREATE INDEX idx_user_locations_district ON user_locations(state, district);
```

### 2.4 user_crops

```sql
CREATE TABLE user_crops (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    crop_name       VARCHAR(100) NOT NULL,
    crop_name_local VARCHAR(100),
    crop_variety    VARCHAR(100),
    season          VARCHAR(20),
    acres           DECIMAL(6,2),
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_user_crops_user ON user_crops(user_id);
CREATE INDEX idx_user_crops_crop ON user_crops(crop_name);
```

### 2.5 organizations

```sql
CREATE TABLE organizations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    type            VARCHAR(50) NOT NULL,
    contact_name    VARCHAR(255),
    contact_phone   VARCHAR(15),
    contact_email   VARCHAR(255),
    state           VARCHAR(100),
    district        VARCHAR(100),
    address         TEXT,
    plan            VARCHAR(50) DEFAULT 'free',
    plan_expires_at TIMESTAMPTZ,
    farmer_limit    INTEGER DEFAULT 100,
    logo_url        VARCHAR(500),
    brand_color     VARCHAR(7),
    total_farmers   INTEGER DEFAULT 0,
    active_farmers  INTEGER DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.6 conversations

```sql
CREATE TABLE conversations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    channel         VARCHAR(20) NOT NULL,
    title           VARCHAR(255),
    primary_crop    VARCHAR(100),
    primary_topic   VARCHAR(50),
    message_count   INTEGER DEFAULT 0,
    last_message_at TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_conversations_user ON conversations(user_id);
CREATE INDEX idx_conversations_last_message ON conversations(last_message_at DESC);
```

### 2.7 messages

```sql
CREATE TABLE messages (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id),
    role            VARCHAR(10) NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
    content         TEXT NOT NULL,
    content_type    VARCHAR(20) DEFAULT 'text',
    image_url       VARCHAR(500),
    voice_url       VARCHAR(500),
    transcription   TEXT,
    latitude        DECIMAL(10,8),
    longitude       DECIMAL(11,8),
    intent          VARCHAR(50),
    confidence      DECIMAL(5,4),
    model_used      VARCHAR(50),
    tokens_used     INTEGER,
    latency_ms      INTEGER,
    sources         JSONB,
    safety_flag     BOOLEAN DEFAULT FALSE,
    abstained       BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at);
CREATE INDEX idx_messages_user ON messages(user_id, created_at);
CREATE INDEX idx_messages_intent ON messages(intent);
```

### 2.8 message_feedback

```sql
CREATE TABLE message_feedback (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_id      UUID NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id),
    rating          VARCHAR(10) NOT NULL CHECK (rating IN ('positive', 'negative')),
    reason          VARCHAR(50),
    comment         TEXT,
    was_actionable  BOOLEAN,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_feedback_message ON message_feedback(message_id);
```

### 2.9 documents

```sql
CREATE TABLE documents (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           VARCHAR(500) NOT NULL,
    content         TEXT NOT NULL,
    summary         TEXT,
    source_url      VARCHAR(1000),
    source_name     VARCHAR(255),
    doc_type        VARCHAR(50) NOT NULL,
    crop            VARCHAR(100)[],
    geography       VARCHAR(100)[],
    language        VARCHAR(10) DEFAULT 'en',
    is_verified     BOOLEAN DEFAULT FALSE,
    published_at    TIMESTAMPTZ,
    expires_at      TIMESTAMPTZ,
    word_count      INTEGER,
    chunk_count     INTEGER DEFAULT 0,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_documents_type ON documents(doc_type);
CREATE INDEX idx_documents_crop ON documents USING GIN(crop);
CREATE INDEX idx_documents_geography ON documents USING GIN(geography);
```

### 2.10 document_chunks

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE document_chunks (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id     UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
    content         TEXT NOT NULL,
    chunk_index     INTEGER NOT NULL,
    embedding       vector(1536),
    doc_type        VARCHAR(50),
    crop            VARCHAR(100)[],
    geography       VARCHAR(100)[],
    language        VARCHAR(10),
    token_count     INTEGER,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_chunks_document ON document_chunks(document_id);
CREATE INDEX idx_chunks_embedding ON document_chunks USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
```

### 2.11 diseases

```sql
CREATE TABLE diseases (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    name_local      JSONB,
    scientific_name VARCHAR(255),
    crop            VARCHAR(100) NOT NULL,
    disease_type    VARCHAR(50),
    severity        VARCHAR(20),
    symptoms        TEXT,
    description     TEXT,
    affected_parts  VARCHAR(100)[],
    common_seasons  VARCHAR(20)[],
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_diseases_crop ON diseases(crop);
```

### 2.12 treatments

```sql
CREATE TABLE treatments (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    disease_id      UUID NOT NULL REFERENCES diseases(id) ON DELETE CASCADE,
    treatment_type  VARCHAR(50),
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    application_method TEXT,
    dosage          VARCHAR(100),
    frequency       VARCHAR(100),
    product_names   VARCHAR(255)[],
    safety_notes    TEXT,
    preharvest_interval VARCHAR(50),
    source_url      VARCHAR(500),
    priority        INTEGER DEFAULT 1,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_treatments_disease ON treatments(disease_id);
```

### 2.13 mandi_prices

```sql
CREATE TABLE mandi_prices (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mandi_name      VARCHAR(255) NOT NULL,
    mandi_code      VARCHAR(50),
    state           VARCHAR(100) NOT NULL,
    district        VARCHAR(100) NOT NULL,
    commodity       VARCHAR(100) NOT NULL,
    variety         VARCHAR(100),
    modal_price     DECIMAL(10,2),
    min_price       DECIMAL(10,2),
    max_price       DECIMAL(10,2),
    msp             DECIMAL(10,2),
    above_msp       BOOLEAN,
    arrival_qty     DECIMAL(12,2),
    price_date      DATE NOT NULL,
    source          VARCHAR(50) DEFAULT 'agmarknet',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_prices_mandi ON mandi_prices(mandi_name, price_date);
CREATE INDEX idx_prices_commodity ON mandi_prices(commodity, price_date);
CREATE INDEX idx_prices_location ON mandi_prices(state, district);
CREATE UNIQUE INDEX idx_prices_unique ON mandi_prices(mandi_name, commodity, variety, price_date);
```

### 2.14 weather_cache

```sql
CREATE TABLE weather_cache (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    district        VARCHAR(100) NOT NULL,
    state           VARCHAR(100) NOT NULL,
    latitude        DECIMAL(10,8),
    longitude       DECIMAL(11,8),
    temp_celsius    DECIMAL(5,2),
    humidity        INTEGER,
    wind_speed      DECIMAL(5,2),
    conditions      VARCHAR(100),
    forecast        JSONB,
    alerts          JSONB,
    crop_advisory   TEXT,
    weather_date    DATE NOT NULL,
    fetched_at      TIMESTAMPTZ NOT NULL,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_weather_district ON weather_cache(district, state, weather_date);
```

### 2.15 schemes

```sql
CREATE TABLE schemes (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(500) NOT NULL,
    name_local      JSONB,
    scheme_code     VARCHAR(100),
    level           VARCHAR(20),
    state           VARCHAR(100),
    category        VARCHAR(50),
    description     TEXT,
    eligibility     TEXT,
    benefits        TEXT,
    documents_required TEXT,
    application_process TEXT,
    apply_url       VARCHAR(500),
    helpline        VARCHAR(50),
    source_url      VARCHAR(500),
    is_active       BOOLEAN DEFAULT TRUE,
    start_date      DATE,
    end_date        DATE,
    last_verified   TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_schemes_level ON schemes(level);
CREATE INDEX idx_schemes_state ON schemes(state);
CREATE INDEX idx_schemes_category ON schemes(category);
```

### 2.16 audit_logs

```sql
CREATE TABLE audit_logs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(id),
    actor_type      VARCHAR(20),
    action          VARCHAR(100) NOT NULL,
    entity_type     VARCHAR(50),
    entity_id       UUID,
    details         JSONB,
    ip_address      INET,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_user ON audit_logs(user_id, created_at);
CREATE INDEX idx_audit_action ON audit_logs(action, created_at);
```

---

## 3. Data Retention Policy

| Table | Retention | Deletion Method |
|-------|-----------|-----------------|
| messages | 90 days | Automated cron job |
| message_feedback | 1 year | Automated cron job |
| audit_logs | 2 years | Automated cron job |
| weather_cache | 7 days | Automated cron job |
| mandi_prices | 2 years | Partition by month |
| images | 30 days | Automated cron job |
