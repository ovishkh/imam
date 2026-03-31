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
                {/* Header / Search Area */}
                <div className="mb-16 flex flex-col lg:flex-row items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 text-primary rounded-xl">
                                <Scale className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Digital Jurisprudence</span>
                        </div>
                        <h1 className="text-5xl font-black text-foreground font-serif tracking-tight">
                            FIQH <span className="text-primary underline decoration-primary/20 underline-offset-8">NAVIGATOR</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Navigate the complex landscapes of Islamic law through comparative analysis across major schools of thought (Madhahib).
                        </p>
                    </div>

                    <div className="w-full lg:w-[450px]">
                        <div className="relative group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-5 rounded-[2rem] bg-card border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all pr-14 text-sm font-semibold shadow-xl"
                                placeholder="Pose a legal inquiry or topic..."
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-foreground text-background rounded-full cursor-pointer hover:scale-110 transition-transform">
                                <Search className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Comparative Schools Grid */}
                    <div className="lg:col-span-9 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { school: 'Hanafi', position: 'Established in Kufa', color: 'text-blue-600', bg: 'bg-blue-500/5', border: 'border-blue-500/20' },
                                { school: 'Maliki', position: 'Rooted in Madinan Tradition', color: 'text-emerald-600', bg: 'bg-emerald-500/5', border: 'border-emerald-500/20' },
                                { school: 'Shafi\'i', position: 'Synthesis of Reason & Tradition', color: 'text-amber-600', bg: 'bg-amber-500/5', border: 'border-amber-500/20' },
                                { school: 'Hanbali', position: 'Traditionalist Strictness', color: 'text-rose-600', bg: 'bg-rose-500/5', border: 'border-rose-500/20' }
                            ].map((item, i) => (
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    key={i}
                                    className={`p-8 rounded-[2.5rem] border ${item.border} ${item.bg} space-y-6 relative overflow-hidden group transition-all`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-3 h-3 rounded-full ${item.color.replace('text', 'bg')}`} />
                                            <h3 className={`text-xl font-black ${item.color} tracking-tight`}>{item.school}</h3>
                                        </div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-widest bg-white/50 px-3 py-1 rounded-full border border-border whitespace-nowrap">
                                            {item.position}
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                                        The {item.school} perspective emphasizes the communal obligation of ensuring asset fluidity while maintaining strict individual ownership rights.
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-border/10">
                                        <div className="flex -space-x-2">
                                            {[1, 2].map(j => <div key={j} className="w-6 h-6 rounded-full bg-border border border-white" />)}
                                        </div>
                                        <span className="text-[9px] font-black uppercase text-muted-foreground">8 Classical Links</span>
                                        <div className="flex-1" />
                                        <ArrowRight className={`w-4 h-4 ${item.color} group-hover:translate-x-1 transition-transform`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decision Logic Section */}
                        <div className="bg-[#1c1c1c] text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Globe className="w-64 h-64" />
                            </div>
                            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-lg text-primary text-[9px] font-black uppercase border border-primary/30">
                                        <Shield className="w-3 h-3" /> Fatwa Validation Matrix
                                    </div>
                                    <h3 className="text-4xl font-black font-serif leading-tight">Modern <span className="text-primary italic">Synthesis</span></h3>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        Our AI synthesizes these classical frameworks with modern legislative inquiries, providing a multi-layered legal path that respects traditional boundaries while addressing contemporary complexities.
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="px-8 py-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-2xl hover:opacity-90 transition-opacity">Request Specialized Fatwa</button>
                                        <button className="px-8 py-4 bg-white/5 text-white border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-colors">Export Map</button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { label: 'Maqasid Match', val: '98%', icon: <CheckCircle2 className="w-4 h-4 text-primary" /> },
                                        { label: 'Modern Precedent', val: '12+', icon: <Globe className="w-4 h-4 text-primary" /> },
                                        { label: 'Confidence', val: 'High', icon: <Shield className="w-4 h-4 text-primary" /> },
                                        { label: 'Nuance Level', val: 'Deep', icon: <MessageCircle className="w-4 h-4 text-primary" /> }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-3 group hover:bg-white/10 transition-all cursor-pointer">
                                            <div className="p-2 bg-white/5 rounded-xl inline-block group-hover:bg-primary/20 transition-colors">{stat.icon}</div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase text-gray-500 tracking-widest">{stat.label}</p>
                                                <p className="text-xl font-black">{stat.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta Sidebar */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="bg-card rounded-[2.5rem] border border-border p-8 shadow-sm space-y-8 relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                            <h3 className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                                <History className="w-4 h-4 text-primary" /> Case History
                            </h3>
                            <div className="space-y-4 relative z-10">
                                {[
                                    { title: 'Digital Cryptography', date: 'Shared consensus' },
                                    { title: 'Genetic Engineering', date: 'Active debate' },
                                    { title: 'Social Finance', date: 'Established' }
                                ].map((caseItem, i) => (
                                    <div key={i} className="p-5 bg-muted/40 rounded-2xl border border-transparent hover:border-border transition-all cursor-pointer group/item">
                                        <p className="text-[11px] font-bold text-foreground mb-1 group-hover/item:text-primary transition-colors">{caseItem.title}</p>
                                        <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                                            <span>Law Case #{i + 240}</span>
                                            <span>{caseItem.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary/5 rounded-[2.5rem] border border-primary/20 p-8 space-y-6 group hover:border-primary/40 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">Legal Library</h4>
                            </div>
                            <p className="text-xs text-muted-foreground/80 leading-relaxed font-medium">
                                Access the underlying texts (Kutub al-Fiqh) referenced in this synthesis, ranging from classical compendiums to modern legal councils.
                            </p>
                            <button className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-xl group/btn overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                                <span className="text-[10px] font-black uppercase tracking-widest relative z-10">Open Repository</span>
                                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground relative z-10" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
