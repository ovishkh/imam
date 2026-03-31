'use client';

import React, { useState } from 'react';
import {
    Search,
    Loader2,
    AlertCircle,
    Share2,
    Brain,
} from 'lucide-react';
import Header from '@/components/header';

const SAMPLE_TEXTS = [
    { title: 'Ayatul Kursi', ref: 'Surah Al-Baqarah 2:255', meaning: 'Throne verse' },
    { title: 'Surah Luqman', ref: 'Chapter 31', meaning: 'Moral teachings' },
    { title: 'Surah Al-Fatiha', ref: 'Chapter 1', meaning: 'Opening chapter' },
];

export default function ContentAnalyzer() {
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
            const res = await fetch('/api/content-analyzer', {
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
                <div className='mb-12'>
                    <div className='flex items-center gap-4 mb-6'>
                        <div className='p-3 bg-rose-500/10 text-rose-500 rounded-xl'>
                            <Brain className='w-6 h-6' />
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold font-serif tracking-tight'>
                                CONTENT <span className='text-rose-500'>ANALYZER</span>
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2'>
                                Deep semantic analysis of Islamic texts with thematic insights
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex-1 relative'>
                            <input
                                type='text'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Enter text, verse reference, or passage to analyze...'
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
                                className='w-full px-4 py-4 rounded-xl bg-card border border-border focus:ring-2 focus:ring-rose-500/50 outline-none transition-all'
                            />
                            <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5' />
                        </div>
                        <button
                            onClick={() => handleSearch('')}
                            disabled={loading}
                            className='px-6 py-4 bg-rose-500 text-white rounded-xl font-semibold hover:bg-rose-600 disabled:opacity-50 transition-all flex items-center gap-2'
                        >
                            {loading ? <Loader2 className='w-5 h-5 animate-spin' /> : 'Analyze'}
                        </button>
                    </div>
                </div>

                <div className='mb-12'>
                    <p className='text-sm text-muted-foreground mb-4'>Sample Islamic Texts:</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {SAMPLE_TEXTS.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => handleSearch(`${item.title} (${item.ref})`)}
                                disabled={loading}
                                className='p-4 bg-card border border-border rounded-lg hover:border-rose-500/50 hover:bg-rose-500/5 transition-all text-left disabled:opacity-50'
                            >
                                <div className='font-semibold text-sm'>{item.title}</div>
                                <div className='text-xs text-muted-foreground mt-2'>{item.ref}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {error && (
                    <div className='mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-gap-3'>
                        <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
                        <span className='text-sm text-red-600'>{error}</span>
                    </div>
                )}

                {response && (
                    <div className='space-y-8'>
                        <div className='bg-gradient-to-br from-rose-500/10 to-rose-500/5 rounded-2xl border border-rose-500/20 p-8'>
                            <div className='flex items-start justify-between mb-6'>
                                <div>
                                    <div className='text-sm font-semibold text-rose-600 mb-2'>SEMANTIC ANALYSIS</div>
                                    <h2 className='text-2xl font-bold text-foreground'>{query}</h2>
                                </div>
                                <button className='p-3 hover:bg-white/10 rounded-lg transition-colors'>
                                    <Share2 className='w-5 h-5 text-muted-foreground' />
                                </button>
                            </div>

                            <div className='bg-black/20 rounded-lg p-6 max-h-96 overflow-y-auto'>
                                <div className='whitespace-pre-wrap text-sm leading-relaxed text-foreground'>
                                    {response}
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Analysis Includes</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Thematic clusters, linguistic patterns, theological concepts, and cultural context
                                </p>
                            </div>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Cross-References</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Related verses, scholarly interpretations, and classical Tafsir mentions
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!response && !loading && (
                    <div className='text-center py-16'>
                        <div className='text-6xl mb-4'>🧩</div>
                        <h2 className='text-2xl font-bold mb-2'>Analyze Islamic Content</h2>
                        <p className='text-muted-foreground mb-8'>
                            Perform deep semantic analysis on Quranic verses and Islamic texts
                        </p>
                    </div>
                )}

                {loading && (
                    <div className='text-center py-16'>
                        <Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-rose-500' />
                        <p className='text-muted-foreground'>Analyzing content structure...</p>
                    </div>
                )}
            </main>
        </div>
    );
}
