'use client';

import React, { JSX } from 'react';
import {
  Globe,
  BookOpen,
  Scale,
  CalendarDays,
  CheckCircle,
  Link2,
  UserRound,
  Puzzle,
} from 'lucide-react';

import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'video' | 'document' | 'website' | 'slides';
  icon: JSX.Element;
  href: string;
  gradient: string;
  emoji: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'Quran Explorer',
    description: 'Semantic navigation and Tafsir (exegesis) of Quranic verses',
    category: 'Quranic Studies',
    type: 'website',
    icon: <BookOpen className='w-8 h-8' />,
    href: '/quran-explorer',
    gradient: 'from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30',
    emoji: '📖',
  },
  {
    id: '2',
    title: 'Hadith Authenticator',
    description: 'Verify hadith authenticity, Isnad analysis, and scholarly verdicts',
    category: 'Hadith Studies',
    type: 'website',
    icon: <CheckCircle className='w-8 h-8' />,
    href: '/hadith-authenticator',
    gradient: 'from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30',
    emoji: '✅',
  },
  {
    id: '3',
    title: 'Fiqh Navigator',
    description: 'Navigate Islamic jurisprudence across all major schools of thought',
    category: 'Islamic Jurisprudence',
    type: 'website',
    icon: <Scale className='w-8 h-8' />,
    href: '/fiqh-navigator',
    gradient: 'from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30',
    emoji: '⚖️',
  },
  {
    id: '4',
    title: 'Biographical Explorer',
    description: 'Discover life stories, connections, and contributions of Islamic scholars',
    category: 'Islamic Studies',
    type: 'website',
    icon: <UserRound className='w-8 h-8' />,
    href: '/biographical-explorer',
    gradient: 'from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30',
    emoji: '👤',
  },
  {
    id: '5',
    title: 'Content Analyzer',
    description: 'Deep semantic analysis of Islamic texts with thematic insights',
    category: 'Knowledge Tools',
    type: 'website',
    icon: <Puzzle className='w-8 h-8' />,
    href: '/content-analyzer',
    gradient: 'from-rose-500/20 to-red-500/20 hover:from-rose-500/30 hover:to-red-500/30',
    emoji: '🧩',
  },
];

export default function ContentGrid() {
  return (
    <section className='w-full py-20 px-4 bg-background'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif'>
            Explore Islamic Knowledge
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Powerful tools designed to deepen your understanding of Islamic sciences through AI-powered research and analysis
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {[
            'All',
            'Quranic Studies',
            'Hadith Studies',
            'Islamic Jurisprudence',
            'Islamic Studies',
            'Knowledge Tools',
          ].map((category) => (
            <button
              key={category}
              className='px-6 py-2.5 rounded-full text-sm border border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary transition-all font-medium'
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid - First 3 items in full row */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
          {contentItems.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${item.gradient} backdrop-blur-sm transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between min-h-80 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}
            >
              {/* Animated background elements */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
              </div>

              <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
                <div className='text-5xl mb-2'>{item.emoji}</div>
                <div className='text-primary bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className='relative z-10 mt-6'>
                <span className='inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Content Grid - Last 2 items centered */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto'>
          {contentItems.slice(3).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${item.gradient} backdrop-blur-sm transition-all duration-300 cursor-pointer p-8 flex flex-col justify-between min-h-80 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}
            >
              {/* Animated background elements */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>
              </div>

              <div className='relative z-10 flex flex-col items-center text-center space-y-4'>
                <div className='text-5xl mb-2'>{item.emoji}</div>
                <div className='text-primary bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className='relative z-10 mt-6'>
                <span className='inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full'>
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore More */}
        <div className='mt-20 text-center'>
          <button className='text-primary hover:text-primary/80 transition-colors font-semibold text-lg group'>
            Explore More Features <span className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
