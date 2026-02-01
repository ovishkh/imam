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
    Activity,
    Brain,
    Lock,
    Eye
} from 'lucide-react';
import Header from '@/components/header';
import { motion } from 'framer-motion';

export default function ContentAnalyzer() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [analysisInput, setAnalysisInput] = useState('Surah Al-Baqarah (2:282-284)');

    return (
        <div className="min-h-screen bg-transparent">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 text-primary rounded-xl">
                                <Brain className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Neural Text Analysis</span>
                        </div>
                        <h1 className="text-5xl font-bold text-foreground font-serif tracking-tight">
                            CONTENT <span className="text-primary underline decoration-primary/20 underline-offset-8">ANALYZER</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Leverage advanced semantic models to deconstruct legislative density, spiritual tonality, and thematic clusters in classical texts.
                        </p>
                    </div>

                    <div className="w-full lg:w-[450px]">
                        <div className="bg-card/50 backdrop-blur-xl p-8 rounded-[2rem] border border-primary/20 shadow-2xl overflow-hidden relative group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                            <div className="relative z-10 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Input Source</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={analysisInput}
                                            onChange={(e) => setAnalysisInput(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-background border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all pr-12 text-sm font-medium"
                                            placeholder="Verse reference or unique ID..."
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-foreground text-background rounded-xl cursor-pointer hover:scale-105 transition-transform">
                                            <Zap className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Ayatul Kursi', 'Surah Luqman'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-muted/50 rounded-lg text-[9px] font-bold uppercase border border-border hover:bg-muted transition-colors cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Dashboard Sidebar */}
                    <aside className="lg:col-span-3 space-y-6">
                        <div className="bg-card rounded-[2rem] border border-border p-8 space-y-8 shadow-sm">
                            <div>
                                <h3 className="text-[10px] font-bold uppercase text-muted-foreground mb-6 tracking-widest flex items-center gap-2">
                                    <Filter className="w-3 h-3" /> Core Parameters
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-muted/30 rounded-2xl border border-border space-y-3">
                                        <span className="text-[9px] font-bold uppercase text-muted-foreground block">Model Sensitivity</span>
                                        <div className="flex bg-background p-1 rounded-xl border border-border">
                                            <button className="flex-1 py-1.5 bg-primary text-primary-foreground text-[9px] font-bold rounded-lg px-2 shadow-sm">Deep</button>
                                            <button className="flex-1 py-1.5 text-muted-foreground text-[9px] font-bold rounded-lg px-2">Surface</button>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {['Lexical Markers', 'Syntax Flux'].map(ref => (
                                            <div key={ref} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 cursor-pointer border border-transparent hover:border-border transition-all">
                                                <span className="text-[11px] font-bold text-foreground">{ref}</span>
                                                <div className="w-8 h-4 bg-primary/20 rounded-full relative">
                                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-primary rounded-full shadow-sm" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-foreground text-background rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:opacity-90 transition-all">
                                Execute Re-Scan
                            </button>
                        </div>

                        <div className="bg-primary/5 rounded-[2rem] border border-primary/20 p-8 relative overflow-hidden group hover:border-primary/40 transition-all">
                            <Activity className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
                            <h3 className="text-[10px] font-bold uppercase text-primary mb-2 tracking-widest">Reliability Index</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-foreground font-serif">94</span>
                                <span className="text-xs font-bold text-primary">/100</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-medium mt-4 line-clamp-2">High fidelity match with classical tafsir thematic consensus.</p>
                        </div>
                    </aside>

                    {/* Dashboard Metrics */}
                    <div className="lg:col-span-9 space-y-8">
                        {/* Summary Ribbon */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: <Scale className="w-4 h-4" />, label: 'Legislative', val: '75%', color: 'text-blue-500' },
                                { icon: <MessageSquare className="w-4 h-4" />, label: 'Tonality', val: 'Firm', color: 'text-amber-500' },
                                { icon: <Eye className="w-4 h-4" />, label: 'Theme Match', val: 'Consensus', color: 'text-green-500' }
                            ].map((item, i) => (
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    key={i}
                                    className="bg-card rounded-3xl border border-border p-6 shadow-sm flex items-center gap-4 transition-all hover:bg-muted/10 group"
                                >
                                    <div className="p-3 bg-muted rounded-2xl group-hover:bg-background transition-colors shadow-inner">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest mb-1">{item.label}</p>
                                        <p className={`text-xl font-bold ${item.color}`}>{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Analysis Visuals */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-card rounded-[2.5rem] border border-border p-10 shadow-sm space-y-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4 text-primary" /> Cognitive Map
                                    </h3>
                                    <button className="p-2 border border-border rounded-xl hover:bg-muted transition-colors"><Layers className="w-3.5 h-3.5" /></button>
                                </div>

                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[11px] font-bold text-foreground">Legislative Weight (Fiqh)</span>
                                            <span className="text-[11px] font-bold text-primary">75%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full relative overflow-hidden ring-1 ring-border">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '75%' }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                                className="absolute inset-y-0 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 opacity-60">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[11px] font-bold text-foreground">Spiritual Weight (Akhlaq)</span>
                                            <span className="text-[11px] font-bold text-muted-foreground">25%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full relative overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '25%' }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="absolute inset-y-0 bg-muted-foreground/30 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border mt-8 flex justify-between items-center group cursor-pointer">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground group-hover:text-primary transition-colors">Expand Semantic Depth</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                                </div>
                            </div>

                            <div className="bg-card rounded-[2.5rem] border border-border p-10 shadow-sm flex flex-col justify-between group overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-[-40%] -translate-y-[-40%] group-hover:scale-125 transition-transform duration-700" />
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 text-primary rounded-xl">
                                            <PieChart className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">Tonality Matrix</h3>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: 'Firm/Command', val: 82, color: 'bg-primary' },
                                            { label: 'Warning/Caution', val: 14, color: 'bg-destructive/60' },
                                            { label: 'Informational', val: 4, color: 'bg-muted' }
                                        ].map((t, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className={`w-3 h-3 rounded-md ${t.color} flex-shrink-0 shadow-sm`} />
                                                <span className="text-[11px] font-bold text-foreground flex-1">{t.label}</span>
                                                <span className="text-[11px] font-bold text-muted-foreground">{t.val}%</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 bg-muted/40 rounded-3xl border border-border mt-4">
                                        <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                                            "Dominant imperative tone identified (Firm: 82%). High concentration of directive verbs matches the legislative nature of the text."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-[#1c1c1c] text-white rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                                    <Search className="w-96 h-96 -translate-y-24 translate-x-24" />
                                </div>
                                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-lg text-primary text-[9px] font-bold uppercase border border-primary/30">
                                            <Lock className="w-3 h-3" /> Encrypted Synthesis
                                        </div>
                                        <h3 className="text-3xl font-bold font-serif leading-tight">Comprehensive AI <span className="text-primary italic">Synthesis</span></h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                            "The synthesis indicates a structural prioritization of communal accountability (88% confidence). This correlates semantically with the Quranic theme of Divine Watchfulness."
                                        </p>
                                        <div className="flex gap-4 pt-4">
                                            <button className="px-6 py-3 bg-primary text-white text-[10px] font-bold uppercase rounded-xl hover:opacity-90 transition-opacity">Download Full Report</button>
                                            <button className="px-6 py-3 bg-white/5 text-white border border-white/10 text-[10px] font-bold uppercase rounded-xl hover:bg-white/10 transition-colors">Export Map</button>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-col gap-4">
                                        {[
                                            { label: 'Communal Trust', score: 92 },
                                            { label: 'Judicial Prudence', score: 84 },
                                            { label: 'Thematic Consistency', score: 96 }
                                        ].map((stat, i) => (
                                            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group hover:bg-white/10 transition-all">
                                                <span className="text-[11px] font-bold text-gray-300">{stat.label}</span>
                                                <span className="text-xl font-black text-primary group-hover:scale-110 transition-transform">{stat.score}%</span>
                                            </div>
                                        ))}
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
