# KisanAI Environment Variables

## Required
- `DATABASE_URL` — PostgreSQL connection string (for production)
- `OPENAI_API_KEY` or `GEMINI_API_KEY` or `ANTHROPIC_API_KEY` — At least one AI provider for live responses

## Optional
- `NEXT_PUBLIC_APP_URL` — Application base URL
- `WEATHER_API_KEY` — Weather service API key (IMD/OpenWeatherMap)
- `MANDI_API_KEY` — Mandi price service API key (AgMarkNet)
- `RESEND_API_KEY` — Email service for notifications
- `ADMIN_EMAIL` — Admin notification email address
- `CLOUDINARY_URL` — Image upload/processing service
- `R2_ACCESS_KEY_ID` — Cloudflare R2 storage access key
- `R2_SECRET_ACCESS_KEY` — Cloudflare R2 storage secret key
- `R2_BUCKET` — R2 bucket name for file storage
- `TELEGRAM_BOT_TOKEN` — Telegram bot integration token

## Mock Mode
When no AI provider API keys are configured, KisanAI runs in **mock mode** with realistic demo data. All features are functional with sample responses. This is the default for development and demo purposes.

## Deployment
This app deploys to **Cloudflare Workers** via `@opennextjs/cloudflare`.

```bash
# Development
npm run dev

# Build for Cloudflare
npm run build

# Deploy to Cloudflare
npm run deploy
```

## Notes
- Never commit `.env` files to version control
- Use Cloudflare Secrets for production API keys
- The app is fully functional in mock mode for demos
