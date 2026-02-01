# Imam AI

Imam AI is a modern, AI-powered platform providing spiritual insights and guidance using advanced language models. It leverages React Server Components, Next.js 16, and Custom AI Models.

## 🚀 Features

- **AI Chat**: Interactive chat interface powered by Google Gemini Pro.
- **Voice Interactions**: Real-time voice capabilities using Ultravox.
- **Biographical Explorer**: In-depth exploration of Islamic scholars with interactive timelines and connection networks.
- **Quran Explorer**: Advanced study tool with search, thematic context, and multiple tafsir integrations.
- **Modern UI**: Built with Radix UI, Tailwind CSS 4, and Framer Motion for a premium look and feel.
- **Spiritual Context**: Specifically tuned to provide structured responses involving Qur'anic foundations, Hadith evidence, and scholarly insights.

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (Patched)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI Models**: [IslamQA/multilingual-e5-small-finetuned](https://huggingface.co/IslamQA/multilingual-e5-small-finetuned)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages, API Routes)
│   ├── api/          # Backend API endpoints
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
git clone git@github.com:ovishkh/imam.git
cd imam
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
