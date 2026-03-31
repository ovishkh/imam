'use client';

import React, { useState } from 'react';
import {
    Search,
    Loader2,
    Share2,
    Bookmark,
    Volume2,
    MessageCircle,
    AlertCircle,
} from 'lucide-react';
import Header from '@/components/header';

const SAMPLE_QUERIES = [
    { surah: 'Al-Fatiha', verse: '1:1-7', title: 'The Opening' },
    { surah: 'Al-Baqarah', verse: '2:255', title: 'Ayatul Kursi (Throne Verse)' },
    { surah: 'Al-Mulk', verse: '67:1-30', title: 'The Dominion' },
    { surah: 'Yaseen', verse: '36:1-83', title: 'Heart of the Quran' },
];

export default function QuranExplorer() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (searchQuery: string) => {
        const queryText = searchQuery || query;
        if (!queryText.trim()) return;

        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('/api/quran-explorer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: queryText }),
            });

            const data = await res.json();
            if (data.success) {
                setResponse(data.data);
                setQuery(queryText);
            } else {
                setError(data.error || 'Failed to fetch data');
            }
        } catch (err) {
            setError('Error connecting to API');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen bg-background'>
            <Header />

            <main className='max-w-6xl mx-auto px-4 sm:px-6 py-12'>
                {/* Header Section */}
                <div className='mb-12'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-emerald-500/10 text-emerald-500 rounded-xl'>
                            <MessageCircle className='w-6 h-6' />
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold font-serif tracking-tight'>
                                QURAN <span className='text-emerald-500'>EXPLORER</span>
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2'>
                                Semantic navigation and Tafsir with AI-powered insights
                            </p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className='flex gap-3'>
                        <div className='flex-1 relative'>
                            <input
                                type='text'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Search verse, surah name, or topic (e.g., "2:255" or "Al-Fatiha")'
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
                                className='w-full px-4 py-4 rounded-xl bg-card border border-border focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all'
                            />
                            <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5' />
                        </div>
                        <button
                            onClick={() => handleSearch('')}
                            disabled={loading}
                            className='px-6 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 disabled:opacity-50 transition-all flex items-center gap-2'
                        >
                            {loading ? <Loader2 className='w-5 h-5 animate-spin' /> : 'Search'}
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className='mb-12'>
                    <p className='text-sm text-muted-foreground mb-4'>Popular Verses:</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {SAMPLE_QUERIES.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => handleSearch(`${item.surah} ${item.verse}: ${item.title}`)}
                                disabled={loading}
                                className='p-4 bg-card border border-border rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left disabled:opacity-50'
                            >
                                <div className='font-semibold text-sm'>{item.title}</div>
                                <div className='text-xs text-muted-foreground mt-1'>{item.verse}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className='mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-gap-3'>
                        <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
                        <span className='text-sm text-red-600'>{error}</span>
                    </div>
                )}

                {/* Results Section */}
                {response && (
                    <div className='space-y-8'>
                        <div className='bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-2xl border border-emerald-500/20 p-8'>
                            <div className='flex items-start justify-between mb-6'>
                                <div>
                                    <div className='text-sm font-semibold text-emerald-600 mb-2'>SEARCH RESULT</div>
                                    <h2 className='text-2xl font-bold text-foreground'>{query}</h2>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='p-3 hover:bg-white/10 rounded-lg transition-colors'>
                                        <Share2 className='w-5 h-5 text-muted-foreground' />
                                    </button>
                                    <button className='p-3 hover:bg-white/10 rounded-lg transition-colors'>
                                        <Bookmark className='w-5 h-5 text-muted-foreground' />
                                    </button>
                                    <button className='p-3 hover:bg-white/10 rounded-lg transition-colors'>
                                        <Volume2 className='w-5 h-5 text-muted-foreground' />
                                    </button>
                                </div>
                            </div>

                            <div className='prose prose-invert max-w-none text-foreground'>
                                <div className='whitespace-pre-wrap text-sm leading-relaxed bg-black/20 rounded-lg p-6 max-h-96 overflow-y-auto'>
                                    {response}
                                </div>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Key Insights</h3>
                                <p className='text-sm text-muted-foreground'>
                                    This response was generated using AI-powered semantic analysis. Always cross-reference with authentic sources.
                                </p>
                            </div>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Further Study</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Consult classical Tafsir works like Ibn Kathir, Al-Jalalayn, and Al-Tabari for deeper understanding.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!response && !loading && (
                    <div className='text-center py-16'>
                        <div className='text-6xl mb-4'>📖</div>
                        <h2 className='text-2xl font-bold mb-2'>Explore the Quran</h2>
                        <p className='text-muted-foreground mb-8'>
                            Search for verses, surahs, or topics to receive detailed Tafsir and scholarly insights
                        </p>
                    </div>
                )}

                {loading && (
                    <div className='text-center py-16'>
                        <Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-emerald-500' />
                        <p className='text-muted-foreground'>Analyzing Quranic content...</p>
                    </div>
                )}
            </main>
        </div>
    );
}
