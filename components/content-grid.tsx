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
  category: string;
  type: 'video' | 'document' | 'website' | 'slides';
  icon: JSX.Element;
  href: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'Biographical Explorer',
    category: 'Islamic Studies',
    type: 'website',
    icon: <UserRound className='w-8 h-8' />,
    href: '/biographical-explorer',
  },
  {
    id: '2',
    title: 'Content Analyzer',
    category: 'Knowledge Tools',
    type: 'website',
    icon: <Puzzle className='w-8 h-8' />,
    href: '/content-analyzer',
  },
  {
    id: '3',
    title: 'Hadith Authenticator',
    category: 'Hadith Studies',
    type: 'website',
    icon: <CheckCircle className='w-8 h-8' />,
    href: '/hadith-authenticator',
  },
  {
    id: '4',
    title: 'Quran Explorer',
    category: 'Quranic Studies',
    type: 'website',
    icon: <BookOpen className='w-8 h-8' />,
    href: '/quran-explorer',
  },
  {
    id: '5',
    title: 'Fiqh Navigator',
    category: 'Islamic Jurisprudence',
    type: 'website',
    icon: <Scale className='w-8 h-8' />,
    href: '/fiqh-navigator',
  },
];

export default function ContentGrid() {
  return (
    <section className='w-full py-16 px-4 bg-background'>
      <div className='max-w-7xl mx-auto'>
        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {[
            'All',
            'Islamic Studies',
            'Quranic Studies',
            'Hadith Studies',
            'Research',
            'Lifestyle',
          ].map((category) => (
            <button
              key={category}
              className='px-6 py-2.5 rounded-full text-sm border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-all font-medium'
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {contentItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className='group p-12 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between'
            >
              <div className='flex flex-col items-center text-center space-y-4'>
                <div className='text-primary bg-primary/10 p-5 rounded-full'>
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold text-foreground group-hover:text-primary transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground'>{item.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Explore More */}
        <div className='mt-16 text-center'>
          <button className='text-primary hover:text-primary/80 transition-colors font-semibold text-lg'>
            Explore More Features →
          </button>
        </div>
      </div>
    </section>
  );
}
