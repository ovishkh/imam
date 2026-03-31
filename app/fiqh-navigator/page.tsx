'use client';

import React, { useState } from 'react';
import {
    Scale,
    Search,
    Loader2,
    AlertCircle,
    Share2,
} from 'lucide-react';
import Header from '@/components/header';

const MADHABS = ['Hanafi', 'Maliki', 'Shafi\'i', 'Hanbali'];
const SAMPLE_QUERIES = [
    { topic: 'Inheritance distribution', madhabs: ['Hanafi', 'Maliki'] },
    { topic: 'Halal slaughter methods', madhabs: ['Shafi\'i', 'Hanbali'] },
    { topic: 'Prayer timings disagreement', madhabs: ['Maliki'] },
];

export default function FiqhNavigator() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [madhabs, setMadhabs] = useState<string[]>([]);

    const handleSearch = async (searchQuery: string) => {
        const queryText = searchQuery || query;
        if (!queryText.trim()) return;

        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('/api/fiqh-navigator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: queryText }),
            });

            const data = await res.json();
            if (data.success) {
                setResponse(data.data);
                setMadhabs(data.madhabs || []);
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
                        <div className='p-3 bg-purple-500/10 text-purple-500 rounded-xl'>
                            <Scale className='w-6 h-6' />
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold font-serif tracking-tight'>
                                FIQH <span className='text-purple-500'>NAVIGATOR</span>
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2'>
                                Navigate Islamic jurisprudence across all Madhahib (schools of thought)
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex-1 relative'>
                            <input
                                type='text'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Ask about Islamic legal rulings (e.g., "Inheritance distribution", "Prayer times")'
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
                                className='w-full px-4 py-4 rounded-xl bg-card border border-border focus:ring-2 focus:ring-purple-500/50 outline-none transition-all'
                            />
                            <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5' />
                        </div>
                        <button
                            onClick={() => handleSearch('')}
                            disabled={loading}
                            className='px-6 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 disabled:opacity-50 transition-all flex items-center gap-2'
                        >
                            {loading ? <Loader2 className='w-5 h-5 animate-spin' /> : 'Explore'}
                        </button>
                    </div>
                </div>

                <div className='mb-12'>
                    <p className='text-sm text-muted-foreground mb-4'>Sample Legal Topics:</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {SAMPLE_QUERIES.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => handleSearch(item.topic)}
                                disabled={loading}
                                className='p-4 bg-card border border-border rounded-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left disabled:opacity-50'
                            >
                                <div className='font-semibold text-sm'>{item.topic}</div>
                                <div className='text-xs text-muted-foreground mt-2'>Madhabs: {item.madhabs.join(', ')}</div>
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
                        <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-2xl border border-purple-500/20 p-8'>
                            <div className='flex items-start justify-between mb-6'>
                                <div>
                                    <div className='text-sm font-semibold text-purple-600 mb-2'>COMPARATIVE LEGAL ANALYSIS</div>
                                    <h2 className='text-2xl font-bold text-foreground'>{query}</h2>
                                    {madhabs.length > 0 && (
                                        <div className='flex gap-2 mt-3'>
                                            {madhabs.map(m => (
                                                <span key={m} className='px-2 py-1 bg-purple-500/10 text-purple-600 text-xs rounded border border-purple-500/20'>
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    )}
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
                                <h3 className='font-semibold mb-2'>About the Madhahib</h3>
                                <p className='text-sm text-muted-foreground'>
                                    The four primary schools: Hanafi (flexibility), Maliki (tradition), Shafi\'i (balanced), Hanbali (strict)
                                </p>
                            </div>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Disclaimer</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Consult qualified Islamic scholars for personal legal rulings (Fatwa).
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!response && !loading && (
                    <div className='text-center py-16'>
                        <div className='text-6xl mb-4'>⚖️</div>
                        <h2 className='text-2xl font-bold mb-2'>Islamic Jurisprudence</h2>
                        <p className='text-muted-foreground mb-8'>
                            Explore comparative legal rulings across Islamic jurisprudential schools
                        </p>
                    </div>
                )}

                {loading && (
                    <div className='text-center py-16'>
                        <Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-purple-500' />
                        <p className='text-muted-foreground'>Analyzing legal perspectives...</p>
                    </div>
                )}
            </main>
        </div>
    );
}
