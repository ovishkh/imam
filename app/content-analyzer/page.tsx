'use client';

import React, { useState } from 'react';
import {
    BarChart3,
    PieChart,
    Search,
    FileText,
    AlertCircle,
    Scale,
    Zap,
    Hash,
    MessageSquare,
    ChevronRight,
    Download,
    Share2,
    Filter,
    Layers,
    Activity
} from 'lucide-react';
import Header from '@/components/header';

export default function ContentAnalyzer() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [analysisInput, setAnalysisInput] = useState('Surah Al-Baqarah (2:282-284)');

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif uppercase">
                            CONTENT ANALYZER
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Advanced semantic analysis of Islamic texts, providing breakdowns of themes, legislative weighting, and tonality.
                        </p>
                    </div>

                    <div className="flex-1 max-w-xl">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-muted-foreground">Analyze Text for Context & Themes</label>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={analysisInput}
                                    onChange={(e) => setAnalysisInput(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                                    placeholder="Enter verse reference or paste text..."
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-lg cursor-pointer">
                                    <Zap className="w-5 h-5 fill-current" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center text-[10px] font-bold uppercase">
                                <span className="text-muted-foreground">Recents:</span>
                                {['Ayatul Kursi', 'Surah Luqman', 'Hadith Bukhari #1', 'Marriage Laws'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-muted rounded-full hover:bg-muted/80 cursor-pointer border border-border transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Analysis Sidebar Controllers */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-6 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Analysis Parameters
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-bold uppercase block mb-3">Model Depth</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="py-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-lg px-2">Linguistic</button>
                                        <button className="py-2 bg-muted text-muted-foreground text-[10px] font-bold rounded-lg px-2 border border-border">Scholarly</button>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold uppercase block mb-3">Include References</span>
                                    <div className="space-y-2">
                                        {['Tafsir Ibn Kathir', 'Tafsir Al-Jalalayn', 'Historical Context'].map(ref => (
                                            <label key={ref} className="flex items-center gap-2 cursor-pointer group">
                                                <div className="w-4 h-4 rounded border border-primary/30 flex items-center justify-center group-hover:bg-primary/5">
                                                    <div className="w-2 h-2 bg-primary rounded-sm" />
                                                </div>
                                                <span className="text-xs font-semibold">{ref}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary/20 transition-colors">
                                    Run Deep Analysis
                                </button>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <Activity className="w-20 h-20" />
                            </div>
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-4">Real-time Score</h3>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-4xl font-bold font-serif leading-none">92</span>
                                <span className="text-xs font-bold text-primary pb-1">/ 100</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-semibold">Semantic compatibility with selected thematic cluster.</p>
                        </div>
                    </div>

                    {/* Main Dashboard Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Dynamic Analysis Tabs */}
                        <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                            {['Overview', 'Linguistic Network', 'Thematic Clustering', 'Scholarly Weights'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {tab}
                                    {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
                                </button>
                            ))}
                        </div>

                        {/* Dashboard Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Legislative vs Spiritual Weighting */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                        <Scale className="w-4 h-4 text-primary" />
                                        Legislative weighting
                                    </h3>
                                    <BarChart3 className="w-4 h-4 text-muted-foreground opacity-50" />
                                </div>

                                <div className="space-y-8">
                                    <div className="relative h-4 bg-muted rounded-full overflow-hidden shadow-inner">
                                        <div className="absolute left-0 top-0 bottom-0 bg-primary w-[75%] rounded-full shadow-lg shadow-primary/20" />
                                    </div>
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                                        <div className="flex flex-col">
                                            <span className="text-primary mb-1">Legal / Fiqh 75%</span>
                                            <span className="text-muted-foreground text-[8px] max-w-[120px]">High density of contractual and social regulation.</span>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-muted-foreground mb-1">Spiritual / Akhlaq 25%</span>
                                            <span className="text-muted-foreground text-[8px] max-w-[120px]">Contextual warnings and ethical reminders.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tone and Sentiment */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                        Tonality Analysis
                                    </h3>
                                    <Activity className="w-4 h-4 text-muted-foreground opacity-50" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-muted/30 rounded-2xl border border-border border-dashed flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-bold text-foreground">Firm</span>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase mt-1 tracking-widest">Primary Tone</span>
                                    </div>
                                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center justify-center text-center">
                                        <span className="text-2xl font-bold text-primary">Caution</span>
                                        <span className="text-[10px] font-bold text-primary uppercase mt-1 tracking-widest">Secondary Tone</span>
                                    </div>
                                </div>
                            </div>

                            {/* Theme Extraction */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm md:col-span-2">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest">
                                        <Hash className="w-4 h-4 text-primary" />
                                        Extracted Semantic Themes
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-muted rounded-lg border border-border"><Download className="w-4 h-4" /></button>
                                        <button className="p-2 hover:bg-muted rounded-lg border border-border"><Share2 className="w-4 h-4" /></button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Contractual Integrity', score: 94, icon: <FileText className="w-4 h-4" />, items: ['Documentation', 'Witnessing', 'Equity'] },
                                        { title: 'Social Responsibility', score: 81, icon: <Layers className="w-4 h-4" />, items: ['Communal trust', 'Public welfare'] },
                                        { title: 'Divine Accountability', score: 88, icon: <Zap className="w-4 h-4" />, items: ['Taqwa', 'Judgment', 'Omniscience'] }
                                    ].map((theme, i) => (
                                        <div key={i} className="group cursor-pointer">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-primary/10 text-primary rounded-lg border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{theme.icon}</div>
                                                    <h4 className="font-bold text-sm">{theme.title}</h4>
                                                </div>
                                                <span className="text-xs font-bold text-muted-foreground">{theme.score}%</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {theme.items.map(t => (
                                                    <span key={t} className="px-2 py-1 bg-muted text-[10px] font-semibold rounded border border-border group-hover:border-primary/30 transition-colors">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Analysis Breakdown */}
                            <div className="md:col-span-2">
                                <div className="bg-primary/5 rounded-3xl border border-primary/20 p-8 shadow-inner relative overflow-hidden">
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-[-30%] -translate-y-[-30%] blur-3xl opacity-50" />
                                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                        <div className="w-32 h-32 shrink-0 border-8 border-primary/20 rounded-full flex items-center justify-center relative">
                                            <div className="absolute inset-0 border-8 border-primary rounded-full border-t-transparent animate-slow-spin" />
                                            <span className="text-3xl font-bold text-primary">87</span>
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold font-serif underline decoration-primary decoration-2 underline-offset-4">Comprehensive Synthesis</h3>
                                            <p className="text-sm text-primary/80 leading-relaxed font-medium">
                                                "The analyzed content heavily emphasizes procedural justice (75%) intertwined with divine awareness. The tone remains instructive yet serious, highlighting the critical nature of trust and documentation in social contracts."
                                            </p>
                                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all">
                                                Detailed Report <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
