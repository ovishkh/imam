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
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Search & Navigation Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                    <div className="flex items-center gap-6">
                        <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                            <Library className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold font-serif tracking-tight">QURAN <span className="text-primary italic">EXPLORER</span></h1>
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Semantic Navigation & Exegesis</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <input
                                type="text"
                                placeholder="Surah name, verse # or keyword..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all text-sm font-medium"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        </div>
                        <button className="p-4 bg-card border border-border rounded-2xl hover:bg-muted transition-colors">
                            <Settings2 className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Verse Display Area (Zen Mode Focus) */}
                    <div className={`${zenMode ? 'lg:col-span-8' : 'lg:col-span-12'} transition-all duration-500`}>
                        <motion.div
                            layout
                            className="bg-card rounded-[3rem] border border-border shadow-2xl relative overflow-hidden group"
                        >
                            {/* Zen Mode Header */}
                            <div className="p-8 border-b border-border flex items-center justify-between bg-muted/20">
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase tracking-widest text-primary">Ayatul Kursi</span>
                                        <span className="text-[10px] font-bold text-muted-foreground">Al-Baqarah • 2:255</span>
                                    </div>
                                    <div className="flex bg-background p-1 rounded-xl border border-border">
                                        <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Volume2 className="w-4 h-4 text-muted-foreground" /></button>
                                        <button className="p-2 hover:bg-muted rounded-lg transition-colors"><Languages className="w-4 h-4 text-muted-foreground" /></button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setZenMode(!zenMode)}
                                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${zenMode ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-muted text-muted-foreground'}`}
                                    >
                                        Zen Mode
                                    </button>
                                    <button className="p-2 hover:bg-muted rounded-lg"><MoreVertical className="w-4 h-4 text-muted-foreground" /></button>
                                </div>
                            </div>

                            <div className="p-16 space-y-16">
                                {/* Arabic Text */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative"
                                >
                                    <div className="absolute -top-10 -left-10 text-[120px] font-serif text-primary/5 select-none pointer-events-none">﷽</div>
                                    <p className="text-5xl md:text-6xl font-arabic text-center leading-[2.5] text-foreground transition-all group-hover:text-primary/90" dir="rtl">
                                        اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ
                                    </p>
                                </motion.div>

                                {/* Translation & Exegesis */}
                                <div className="max-w-3xl mx-auto space-y-12">
                                    <div className="space-y-4 text-center">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">Clear Quran Translation</span>
                                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground/80 italic">
                                            "Allah! There is no god worthy of worship except Him, the Ever-Living, All-Sustaining. Neither drowsiness nor sleep overtakes Him..."
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            { label: 'Divine Attributes', count: 5, icon: <Sparkles className="w-4 h-4" /> },
                                            { label: 'Linguistic Notes', count: 12, icon: <FileText className="w-4 h-4" /> },
                                            { label: 'Thematic Links', count: 3, icon: <BookOpen className="w-4 h-4" /> },
                                            { label: 'Cross Refs', count: 8, icon: <History className="w-4 h-4" /> }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-4 bg-muted/50 rounded-2xl border border-transparent hover:border-border transition-all group/stat cursor-pointer">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="p-1.5 bg-background text-muted-foreground group-hover/stat:text-primary transition-colors rounded-lg">{stat.icon}</div>
                                                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</span>
                                                </div>
                                                <div className="text-xl font-black text-foreground">{stat.count}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Footer */}
                            <div className="p-6 bg-muted/20 border-t border-border flex items-center justify-between">
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
                                    <ChevronLeft className="w-4 h-4" /> Previous Verse
                                </button>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary' : 'bg-border'}`} />
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all">
                                    Next Verse <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Exegesis Panel (Floating Sidebar) */}
                    <AnimatePresence>
                        {zenMode && (
                            <motion.aside
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="lg:col-span-4 space-y-6"
                            >
                                <div className="bg-card rounded-[2.5rem] border border-border p-8 shadow-sm space-y-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Book className="w-24 h-24" />
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-primary" /> Multi-Source Tafsir
                                    </h3>

                                    <div className="space-y-6 relative z-10">
                                        <div className="space-y-4">
                                            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/20">
                                                <span className="text-[9px] font-black text-primary uppercase mb-2 block">Ibn Kathir</span>
                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                    This verse is the greatest verse in the Book of Allah. It contains the Greatest Name (Ism al-A'zam)...
                                                </p>
                                            </div>
                                            <div className="p-5 bg-muted/30 rounded-2xl border border-transparent hover:border-border transition-all cursor-pointer">
                                                <span className="text-[9px] font-black text-muted-foreground uppercase mb-2 block">Al-Jalalayn</span>
                                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                                    Refers to the absolute sovereignty of Allah over the heavens and the earth...
                                                </p>
                                            </div>
                                        </div>

                                        <button className="w-full py-4 bg-foreground text-background rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all">
                                            Synthesize Themes
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-[#1c1c1c] text-white rounded-[2.5rem] p-8 shadow-lg group">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Scholarly Context</span>
                                        <Bookmark className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-[11px] text-gray-400 leading-relaxed mb-6 font-medium">
                                        Commonly recited for protection and seeking refuge. Hadith literature emphasizes its recitation after every obligatory prayer.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-white/20" />
                                            ))}
                                        </div>
                                        <span className="text-[9px] font-bold text-gray-500 uppercase">12 Scholars Referenced</span>
                                    </div>
                                </div>
                            </motion.aside>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
