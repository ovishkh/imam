'use client';

import React, { useState } from 'react';
import {
    Search,
    Loader2,
    AlertCircle,
    Share2,
    CheckCircle2,
} from 'lucide-react';
import Header from '@/components/header';

const SAMPLE_HADITHS = [
    { text: 'Innamal a\'malu binniyat', meaning: 'Actions are judged by intentions' },
    { text: 'The best of you are those who are best to their families', meaning: 'Family kindness' },
    { text: 'Seeking knowledge is obligatory upon every Muslim', meaning: 'Importance of knowledge' },
];

export default function HadithAuthenticator() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [authenticityLevel, setAuthenticityLevel] = useState('');

    const handleSearch = async (searchQuery: string) => {
        const queryText = searchQuery || query;
        if (!queryText.trim()) return;

        setLoading(true);
        setError('');
        setResponse('');

        try {
            const res = await fetch('/api/hadith-authenticator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: queryText }),
            });

            const data = await res.json();
            if (data.success) {
                setResponse(data.data);
                setAuthenticityLevel(data.authenticityLevel || '');
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
                        <div className='p-3 bg-blue-500/10 text-blue-500 rounded-xl'>
                            <CheckCircle2 className='w-6 h-6' />
                        </div>
                        <div>
                            <h1 className='text-5xl font-bold font-serif tracking-tight'>
                                HADITH <span className='text-blue-500'>AUTHENTICATOR</span>
                            </h1>
                            <p className='text-sm text-muted-foreground mt-2'>
                                Verify authenticity and Isnad grading of Hadith with scholarly consensus
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex-1 relative'>
                            <input
                                type='text'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Search hadith text or collection reference (e.g., "Actions are by intentions")'
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch('')}
                                className='w-full px-4 py-4 rounded-xl bg-card border border-border focus:ring-2 focus:ring-blue-500/50 outline-none transition-all'
                            />
                            <Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5' />
                        </div>
                        <button
                            onClick={() => handleSearch('')}
                            disabled={loading}
                            className='px-6 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 disabled:opacity-50 transition-all flex items-center gap-2'
                        >
                            {loading ? <Loader2 className='w-5 h-5 animate-spin' /> : 'Verify'}
                        </button>
                    </div>
                </div>

                <div className='mb-12'>
                    <p className='text-sm text-muted-foreground mb-4'>Example Hadith:</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {SAMPLE_HADITHS.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => handleSearch(item.text)}
                                disabled={loading}
                                className='p-4 bg-card border border-border rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-left disabled:opacity-50'
                            >
                                <div className='font-semibold text-sm'>{item.text}</div>
                                <div className='text-xs text-muted-foreground mt-2'>{item.meaning}</div>
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
                        <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-2xl border border-blue-500/20 p-8'>
                            <div className='flex items-start justify-between mb-6'>
                                <div>
                                    <div className='text-sm font-semibold text-blue-600 mb-2'>AUTHENTICITY VERIFICATION</div>
                                    <h2 className='text-2xl font-bold text-foreground'>{query}</h2>
                                    {authenticityLevel && (
                                        <div className='mt-3 px-3 py-1 bg-blue-500/10 text-blue-600 text-xs rounded border border-blue-500/20 inline-block'>
                                            Grade: {authenticityLevel}
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
                                <h3 className='font-semibold mb-2'>Authenticity Grades</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Sahih (Authentic), Hasan (Good), Da\'if (Weak), Maudu\' (Fabricated)
                                </p>
                            </div>
                            <div className='p-6 bg-card border border-border rounded-lg'>
                                <h3 className='font-semibold mb-2'>Scholarly Consensus</h3>
                                <p className='text-sm text-muted-foreground'>
                                    Grading based on Isnad verification and classical scholarly assessments
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {!response && !loading && (
                    <div className='text-center py-16'>
                        <div className='text-6xl mb-4'>🔐</div>
                        <h2 className='text-2xl font-bold mb-2'>Verify Hadith</h2>
                        <p className='text-muted-foreground mb-8'>
                            Authenticate hadith and verify their grading using scholarly databases
                        </p>
                    </div>
                )}

                {loading && (
                    <div className='text-center py-16'>
                        <Loader2 className='w-8 h-8 animate-spin mx-auto mb-4 text-blue-500' />
                        <p className='text-muted-foreground'>Verifying hadith authenticity...</p>
                    </div>
                )}
            </main>
        </div>
    );
}
