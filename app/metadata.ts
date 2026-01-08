import { Metadata } from 'next';

export const siteConfig = {
  name: 'Imam - Islamic Knowledge Assistant',
  description: 'Learn about Islam through authentic sources with AI-powered guidance from Quran, Hadith, and scholarly wisdom.',
  url: 'https://imam.ai', // Update this with your actual domain
  keywords: [
    'Islam',
    'Islamic knowledge',
    'Quran',
    'Hadith',
    'Islamic scholar',
    'Islamic AI',
    'Muslim',
    'Islamic learning',
    'Islamic studies',
    'Fiqh',
    'Tafsir'
  ],
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Imam AI',
      url: siteConfig.url,
    },
  ],
  creator: 'Imam AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@ImamAI',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};