# 10 - Security, Privacy, and Compliance: KisanAI

## Document Purpose
Define the security architecture, privacy framework, and regulatory compliance requirements for KisanAI. This document covers DPDP Act compliance, data minimization, consent management, and agricultural advice disclaimers.

---

## 1. Regulatory Landscape

### 1.1 Applicable Regulations

| Regulation | Applicability | Key Requirements |
|-----------|--------------|-----------------|
| DPDP Act 2023 (India) | Primary -- all user data | Consent, data minimization, breach notification, children's protections |
| DPDP Rules 2025 | Implementation rules | Specific operational requirements |
| IT Act 2000 | Digital platform operations | Intermediary liability, content moderation |
| GDPR | If serving EU users | Lawful basis, rights handling, international transfers |
| Consumer Protection Act | User-facing advisory | No misleading claims, fair practices |

### 1.2 DPDP Act 2023 Key Requirements

| Requirement | KisanAI Implementation |
|------------|----------------------|
| Lawful processing | Consent-based processing for all personal data |
| Purpose limitation | Data collected only for agricultural advisory services |
| Data minimization | Collect only what's needed; no mandatory land records or ID |
| Storage limitation | Defined retention periods; automatic deletion |
| Data accuracy | User can update profile; data refresh mechanisms |
| Consent | Plain-language consent in user's local language |
| Children's data | No processing of children's data without parental consent |
| Breach notification | 72-hour internal playbook; notify affected users |
| Grievance redressal | Designated officer; response within 30 days |
| Cross-border transfer | Only to approved jurisdictions with adequate protection |

---

## 2. Data Classification

### 2.1 Data Categories

| Category | Examples | Sensitivity | Retention | Encryption |
|----------|---------|-------------|-----------|------------|
| **Identity Data** | Phone number, name | High | Until deletion request | AES-256 at rest, TLS 1.3 in transit |
| **Location Data** | District, state, coordinates | Medium | 90 days (location history) | AES-256 at rest |
| **Crop Data** | Crops grown, acreage | Low | Until deletion request | AES-256 at rest |
| **Chat Messages** | Query text, responses | Medium | 90 days | AES-256 at rest |
| **Images** | Crop photos for diagnosis | Medium | 30 days | AES-256 at rest |
| **Voice Data** | Voice messages | Medium | 7 days (after transcription) | AES-256 at rest |
| **Analytics Data** | Query volume, retention | Low (anonymized) | 2 years | Standard |
| **Consent Records** | Consent timestamps, versions | High | 7 years (legal requirement) | AES-256 at rest |
| **Audit Logs** | System actions, access logs | Medium | 2 years | AES-256 at rest |

### 2.2 Data Flow Diagram

```
User Device
    |
    +-- WhatsApp --> WhatsApp Business API --> KisanAI Server
    +-- Telegram --> Telegram Bot API --> KisanAI Server
    +-- PWA --> Cloudflare Edge --> KisanAI Server
                                                |
                                                v
                                    +---------------------+
                                    |   Processing Layer   |
                                    |   +-- Auth check     |
                                    |   +-- Input validation|
                                    |   +-- PII masking    |
                                    |   +-- Rate limiting  |
                                    +---------------------+
                                                |
                                                v
                                    +---------------------+
                                    |    Storage Layer     |
                                    |   +-- PostgreSQL     |
                                    |   +-- R2 (images)    |
                                    |   +-- Edge cache     |
                                    +---------------------+
                                                |
                                                v
                                    +---------------------+
                                    |   External Services  |
                                    |   +-- OpenAI (LLM)   |
                                    |   +-- Weather API    |
                                    |   +-- Price API      |
                                    +---------------------+
```

---

## 3. Consent Management

### 3.1 Consent Types

| Consent Type | When Required | Granularity |
|-------------|--------------|-------------|
| Data Processing | First interaction | Mandatory |
| Location Access | When using weather/prices | Per-feature |
| Image Processing | When uploading photos | Per-action |
| Voice Processing | When sending voice messages | Per-action |
| Marketing Communications | Never (no marketing at MVP) | N/A |
| Data Sharing with Partners | If applicable | Explicit opt-in |

### 3.2 Consent Flow

```
First Interaction
    |
    v
+---------------------------------------------+
|  Welcome to KisanAI!                        |
|                                             |
|  I can help you with:                       |
|  * Crop disease identification              |
|  * Weather advisory                         |
|  * Mandi prices                             |
|  * Government schemes                       |
|                                             |
|  To provide these services, I need to       |
|  process your phone number and messages.    |
|                                             |
|  Your data is:                              |
|  [x] Encrypted and secure                   |
|  [x] Never shared without your permission   |
|  [x] Deletable anytime you ask              |
|                                             |
|  [I Agree - Continue]  [Learn More]         |
+---------------------------------------------+
```

### 3.3 Consent Record Structure

```json
{
  "consent_id": "uuid",
  "user_id": "uuid",
  "consent_type": "data_processing",
  "version": "1.0",
  "language": "mr",
  "given": true,
  "timestamp": "2026-05-17T10:30:00Z",
  "ip_address": "masked",
  "user_agent": "WhatsApp/2.0",
  "method": "click_through",
  "text_shown": "Welcome to KisanAI! To provide agricultural advisory..."
}
```

### 3.4 Consent Withdrawal

Users can withdraw consent at any time:
- Via chat: "Delete my data"
- Via settings: Privacy > Delete My Data
- Via admin: Organization admin can request member data deletion

**Withdrawal process**:
1. User requests deletion
2. Confirmation message sent
3. 30-day grace period (user can cancel)
4. All personal data deleted
5. Anonymized analytics retained
6. Confirmation message sent

---

## 4. Data Minimization

### 4.1 Principles

1. **No mandatory profile**: Users can ask questions without creating a profile
2. **Progressive profiling**: Collect details only as needed for better answers
3. **No land records**: Never require land records or Aadhaar for basic advisory
4. **No financial data**: No bank details, income, or financial information
5. **Location at district level**: Default to district, not GPS coordinates
6. **Ephemeral processing**: Voice and images processed and deleted after use

### 4.2 What We Collect vs. What We Don't

| Collect (Minimum) | Don't Collect (Unless Explicitly Needed) |
|-------------------|----------------------------------------|
| Phone number | Aadhaar number |
| Language preference | Bank details |
| District/state | Income information |
| Crops grown (optional) | Land records |
| Chat messages | Family details |
| Crop photos (for diagnosis) | Biometric data |

### 4.3 Data Retention Schedule

| Data Type | Retention Period | Deletion Method |
|-----------|-----------------|-----------------|
| Chat messages | 90 days | Automated cron job |
| Images | 30 days | Automated cron job |
| Voice recordings | 7 days (after transcription) | Automated cron job |
| Location history | 90 days | Automated cron job |
| User profile | Until deletion request | Manual + automated |
| Consent records | 7 years | Legal requirement |
| Analytics (anonymized) | 2 years | Automated cron job |
| Audit logs | 2 years | Automated cron job |

---

## 5. Security Controls

### 5.1 Authentication and Authorization

| Control | Implementation |
|---------|---------------|
| Authentication | WhatsApp OTP + JWT (HttpOnly cookies) |
| Session management | 30-day expiry, refresh token rotation |
| Password policy | N/A (OTP-based) |
| MFA | Optional for admin accounts |
| Role-based access | farmer, admin, super_admin |
| API authentication | JWT + API keys for webhooks |

### 5.2 Data Protection

| Control | Implementation |
|---------|---------------|
| Encryption at rest | AES-256 (PostgreSQL, R2) |
| Encryption in transit | TLS 1.3 (all connections) |
| Key management | Cloudflare KV / AWS KMS |
| Database encryption | Neon built-in encryption |
| Image encryption | R2 server-side encryption |
| Backup encryption | Neon automatic encrypted backups |

### 5.3 Network Security

| Control | Implementation |
|---------|---------------|
| DDoS protection | Cloudflare DDoS protection |
| WAF | Cloudflare WAF rules |
| Rate limiting | Cloudflare rate limiting |
| IP allowlisting | For admin endpoints |
| CORS | Strict origin policy |
| CSP | Content Security Policy headers |

### 5.4 Application Security

| Control | Implementation |
|---------|---------------|
| Input validation | Zod schemas on all inputs |
| SQL injection prevention | Parameterized queries (Prisma/Drizzle) |
| XSS prevention | React auto-escaping + CSP |
| CSRF protection | SameSite cookies + CSRF tokens |
| File upload validation | Type checking, size limits, EXIF stripping |
| Dependency scanning | npm audit + Snyk |

### 5.5 Infrastructure Security

| Control | Implementation |
|---------|---------------|
| Container security | Minimal base images, no root |
| Secret management | Environment variables, Cloudflare Secrets |
| Access control | IAM roles, least privilege |
| Logging | Structured logging, no PII in logs |
| Monitoring | Sentry, Cloudflare Analytics |
| Incident response | 72-hour playbook |

---

## 6. Incident Response

### 6.1 Incident Severity Levels

| Severity | Description | Response Time | Examples |
|----------|-------------|---------------|----------|
| P0 - Critical | Data breach, system compromise | < 1 hour | User data exposed, unauthorized access |
| P1 - High | Service disruption, data loss | < 4 hours | Database outage, API failure |
| P2 - Medium | Performance degradation | < 24 hours | Slow responses, intermittent errors |
| P3 - Low | Minor issues | < 1 week | UI bugs, non-critical feature issues |

### 6.2 Incident Response Playbook

```
1. DETECT
   +-- Automated alerts (Sentry, Cloudflare)
   +-- User reports
   +-- Team observation

2. CONTAIN
   +-- Isolate affected systems
   +-- Revoke compromised credentials
   +-- Block malicious IPs
   +-- Preserve evidence

3. NOTIFY
   +-- Internal team (immediate)
   +-- Affected users (within 72 hours for data breach)
   +-- DPDP authorities (if required)
   +-- Law enforcement (if criminal activity)

4. REMEDIATE
   +-- Fix root cause
   +-- Deploy patches
   +-- Restore from backups if needed
   +-- Update security controls

5. REVIEW
   +-- Post-incident analysis
   +-- Update playbook
   +-- Team debrief
   +-- Document lessons learned
```

### 6.3 Breach Notification (DPDP Compliance)

| Step | Timeline | Action |
|------|----------|--------|
| Internal detection | Immediate | Alert security team |
| Initial assessment | < 4 hours | Determine scope and impact |
| Authority notification | < 72 hours | Notify DPDP authority (when applicable) |
| User notification | < 72 hours | Notify affected users in their language |
| Public disclosure | As required | If significant public interest |

---

## 7. Agricultural Advice Disclaimers

### 7.1 General Disclaimer

```
KisanAI provides agricultural information for educational purposes only.
The advice given is based on available data and AI analysis, and may not
be accurate in all situations. Always consult your local Krishi Vigyan
Kendra (KVK), agricultural extension officer, or qualified agronomist
before making important farming decisions.

KisanAI is not a substitute for professional agricultural advice.
```

**Shown**: On first interaction, in About page, and periodically in chat.

### 7.2 Disease Diagnosis Disclaimer

```
This is a preliminary assessment based on visual analysis.
For confirmed diagnosis, please consult your local Krishi Vigyan
Kendra (KVK) or agricultural extension officer.

Treatment recommendations are general guidelines. Always read
product labels and consult a local expert before applying any
chemical treatments.
```

**Shown**: On every disease diagnosis response.

### 7.3 Chemical Treatment Disclaimer

```
Safety Precautions:
* Always wear protective equipment (gloves, mask, goggles)
* Follow product label instructions exactly
* Do not exceed recommended dosage
* Observe pre-harvest interval (PHI)
* Keep chemicals away from children and animals
* Store in original containers

For specific product recommendations, consult your local
agri-input dealer or KVK.
```

**Shown**: Whenever chemical treatments are mentioned.

### 7.4 Financial Advice Disclaimer

```
KisanAI provides market price information for reference only.
This is not financial advice. Selling decisions should consider
your specific circumstances, including storage costs, crop
quality, and local market conditions.

For financial decisions, consult your FPO manager, local
agricultural officer, or financial advisor.
```

**Shown**: When price-related advice is given.

### 7.5 Scheme Information Disclaimer

```
Scheme details are based on publicly available information
and may change. Always verify current eligibility criteria
and application process at the official website or your
local agriculture office.

KisanAI is not affiliated with any government scheme.
```

**Shown**: On every scheme-related response.

---

## 8. Children's Data Protection

### 8.1 Policy

KisanAI does not knowingly collect personal data from children under 18. If we discover that a user is under 18:
1. We will not process their personal data
2. We will request parental consent if continued use is desired
3. We will delete any data collected without proper consent

### 8.2 Implementation

| Control | Implementation |
|---------|---------------|
| Age verification | Self-declaration (no mandatory age check) |
| Parental consent | Required for users under 18 |
| Data deletion | Immediate upon discovery of underage user |
| Behavioral targeting | Never for minors |
| Marketing | Never for minors |

---

## 9. Cross-Border Data Transfer

### 9.1 Policy

By default, all data is processed and stored within India. Cross-border transfers occur only:
1. To process LLM queries (OpenAI API -- US-based)
2. For analytics (if using non-India analytics tools)

### 9.2 Safeguards

| Transfer | Destination | Safeguard |
|----------|------------|-----------|
| LLM API calls | US (OpenAI) | Data Processing Agreement; no training on user data |
| Analytics | US (if applicable) | Anonymized data only; DPA in place |
| Backups | India (Neon) | No cross-border transfer |

### 9.3 OpenAI Data Processing

| Aspect | KisanAI Position |
|--------|-----------------|
| Training | Opted out of OpenAI training |
| Data retention | API data not retained by OpenAI |
| DPA | Signed Data Processing Agreement |
| PII | Masked before sending to OpenAI |
| Images | Processed for diagnosis, not stored by OpenAI |

---

## 10. Audit and Compliance

### 10.1 Audit Schedule

| Audit Type | Frequency | Scope |
|-----------|-----------|-------|
| Security vulnerability scan | Weekly | Automated (Snyk, npm audit) |
| Penetration test | Quarterly | External security firm |
| Privacy compliance review | Quarterly | Internal legal review |
| Data retention compliance | Monthly | Automated checks |
| Access control review | Monthly | Manual review |
| DPDP compliance audit | Annually | External auditor |

### 10.2 Compliance Checklist

| Requirement | Status | Owner |
|------------|--------|-------|
| Privacy policy published | Required | Legal |
| Terms of service published | Required | Legal |
| Consent mechanism implemented | Required | Engineering |
| Data deletion capability | Required | Engineering |
| Breach notification playbook | Required | Security |
| Grievance officer designated | Required | Legal |
| Data retention schedule | Required | Engineering |
| Cross-border transfer assessment | Required | Legal |
| Children's data protection | Required | Engineering |
| Audit logging | Required | Engineering |

### 10.3 Grievance Redressal

| Channel | Response Time |
|---------|--------------|
| Email: privacy@kishanai.strivio.world | 30 days |
| In-app: Settings > Privacy > Contact | 30 days |
| WhatsApp: "I have a privacy concern" | 30 days |
| Postal: [Registered address] | 30 days |

**Grievance Officer**: [Name, Contact Details]
**Designated under DPDP Act**: [Name, Contact Details]

---

## 11. Third-Party Vendor Security

### 11.1 Vendor Assessment

| Vendor | Purpose | DPA Signed | Data Location | Risk Level |
|--------|---------|-----------|---------------|------------|
| OpenAI | LLM processing | Yes | US | Medium |
| Neon | Database hosting | Yes | India | Low |
| Cloudflare | CDN, Workers, R2 | Yes | Global | Low |
| WhatsApp (Meta) | Messaging channel | Yes | US/India | Medium |
| Telegram | Messaging channel | Yes | Global | Low |
| OpenWeatherMap | Weather data | No (no PII) | N/A | Low |
| Sentry | Error tracking | Yes | US | Low |

### 11.2 Vendor Review Schedule

| Vendor | Review Frequency | Criteria |
|--------|-----------------|----------|
| OpenAI | Quarterly | Data handling, pricing, model updates |
| Neon | Quarterly | Uptime, security, compliance |
| Cloudflare | Quarterly | Security, performance, compliance |
| WhatsApp | Annually | API changes, policy updates |
| All others | Annually | General review |

---

## 12. Privacy by Design Principles

### 12.1 Implementation

| Principle | KisanAI Implementation |
|----------|----------------------|
| Proactive not Reactive | Privacy built into architecture from day one |
| Privacy as Default | No profile required; minimal data collection |
| Privacy Embedded | Encryption, consent, and retention built into code |
| Full Functionality | Privacy doesn't break features |
| End-to-End Security | Encryption at rest and in transit |
| Visibility and Transparency | Privacy policy in local languages |
| Respect for User Privacy | Easy data deletion, consent withdrawal |

### 12.2 Privacy Impact Assessment

| Feature | Privacy Risk | Mitigation |
|---------|-------------|-----------|
| Chat messages | Medium | 90-day retention, encrypted storage |
| Image upload | Medium | 30-day retention, EXIF stripped |
| Voice messages | Medium | 7-day retention, transcription only |
| Location data | Medium | District-level default, 90-day retention |
| Analytics | Low | Anonymized, aggregated |
| Third-party APIs | Medium | PII masking, DPAs signed |
