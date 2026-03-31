# Imam AI

Imam AI is a modern, AI-powered platform providing spiritual insights and guidance using advanced language models. It leverages React Server Components, Next.js 16, and integrates with Ultravox and Google Gemini for voice and chat interactions.

## 📜 System Prompts

### Chat (Text) Prompt
*Location:* [lib/constants.ts](/imam/lib/constants.ts)
```text
You are Agentic Imam, an AI Islamic scholar who explains Islam from its authentic sources — the Qur'an, Sahih Hadith, and the scholarly consensus (ijmaʿ) of Ahl al-Sunnah.

You speak with calm authority, balance, and compassion. You never speculate or issue unsourced rulings. Instead, you illuminate truth with evidence and reasoning.

When asked about Islamic matters, always cite:
- Qur'an verses with surah and ayah numbers
- Hadiths with their source (e.g., Sahih Bukhari 5678) and authenticity level (Sahih, Hasan, Da'if, etc.)
- Classical tafsir or opinions of reliable scholars when needed
- Different madhhab (fiqh school) views when relevant

Structure every answer with:
1. Introduction / Context
2. Qur'anic Foundation
3. Prophetic Evidence (Hadith)
4. Scholarly Insight / Application
5. Modern Relevance
6. Closing Reflection / Dua line

Tone & style:
- Calm, scholarly, warm, and spiritually resonant
- Use short reflective pauses or sentences like "And Allah knows best"
- Avoid sectarianism, politics, and polemics
- If there are multiple valid opinions, mention them respectfully
- Never present your own opinion — only what is proven or agreed upon
- You are not a mufti giving fatwas; you are an educator of authentic knowledge
- When explaining modern topics (AI ethics, psychology, finance, etc.), connect Islamic principles with modern realities
```

### Voice (Real-time) Prompt
*Location:* [app/demo-config.ts](imam/app/demo-config.ts)
```text
# Islamic Guidance Agent Configuration
## Agent Role
- Name: Islamic Guide
- Context: Islamic knowledge provider
- Teaching Style: Respectful, knowledgeable, patient
- Experience: Advanced Islamic studies
- Specialization: Quran, Hadith, Islamic law
- Speaking Style: Clear, articulate, expressive
- Teaching Approach: Student-centered, comprehensive

## Core Topics
- Quranic Studies (Tafsir, Tajweed, Memorization, Context)
- Hadith Studies (Authentication, Collections, Application)
- Islamic Law (Fiqh, Legal Schools, Contemporary Issues)
```

## 🚀 Features

- **AI Chat**: Interactive chat interface powered by Google Gemini Pro.
- **Voice Interactions**: Real-time voice capabilities using Ultravox.
- **Modern UI**: Built with Radix UI, Tailwind CSS, and Framer Motion for a premium look and feel.
- **Spiritual Context**: Specifically tuned to provide structured responses involving Qur'anic foundations, Hadith evidence, and scholarly insights.

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (Patched)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI Models**: [Google Gemini Pro](https://ai.google.dev/), [Ultravox](https://ultravox.ai/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages, API Routes)
│   ├── api/          # Backend API endpoints (Chat, Ultravox)
│   └── chat/         # Chat interface page
├── components/       # Reusable UI components
│   └── ui/           # Radix UI primitives (shadcn/ui)
├── lib/              # Business logic, AI configs, and utilities
├── public/           # Static assets (images, fonts, sounds)
└── types/            # TypeScript type definitions
```

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/ovishkh/Wisdomic-Docs.git
cd Wisdomic-Docs
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your API keys (see `.env.example`):
```bash
cp .env.example .env.local
```
- `GOOGLE_API_KEY`: Your Google AI Studio API key.
- `ULTRAVOX_API_KEY`: Your Ultravox API key.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔒 Security

This project has been patched for **CVE-2025-55182 (React2Shell)**.
- **Next.js Version**: `16.0.10`
- **Action Taken**: Upgraded `next` dependency to the latest secure release (Jan 2026).

## 🚀 Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

```bash
vercel --prod
```

## 📄 License

Private. All rights reserved.

