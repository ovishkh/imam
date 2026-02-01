'use client';

import React, { useState } from 'react';
import {
    Puzzle,
    Search,
    Share2,
    Download,
    ChevronRight,
    Layers,
    Zap,
    Info,
    Database,
    Globe,
    Network,
    GitBranch,
    BookOpen,
    ArrowUpRight
} from 'lucide-react';
import Header from '@/components/header';

export default function KnowledgeWeb() {
    const [activeCategory, setActiveCategory] = useState('Fiqh');
    const [searchQuery, setSearchQuery] = useState('Relationship between Hadith and Fiqh');

    const categories = [
        { name: 'Fiqh', count: 1240, color: 'primary' },
        { name: 'Hadith', count: 3200, color: 'primary' },
        { name: 'Tafsir', count: 850, color: 'primary' },
        { name: 'Aqidah', count: 420, color: 'primary' },
        { name: 'History', count: 2100, color: 'primary' },
        { name: 'Ethics', count: 680, color: 'primary' }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif uppercase tracking-tight">
                                KNOWLEDGE WEB
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl">
                                Explore the interconnected universe of Islamic sciences. Discover how different disciplines overlap and influence each other.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                <GitBranch className="w-4 h-4" /> Intersection View
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border shadow-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Search concepts or disciplinary links..."
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="p-4 bg-muted border border-border rounded-xl hover:bg-muted/80 transition-colors"><Globe className="w-5 h-5 text-muted-foreground" /></button>
                            <button className="p-4 bg-muted border border-border rounded-xl hover:bg-muted/80 transition-colors"><Layers className="w-5 h-5 text-muted-foreground" /></button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Categories / Navigation */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-6">Explore Sciences</h3>
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeCategory === cat.name ? 'bg-primary/10 border border-primary/20 text-primary' : 'hover:bg-muted/50 border border-transparent'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${activeCategory === cat.name ? 'bg-primary' : 'bg-muted-foreground opacity-30'}`} />
                                            <span className="text-sm font-bold uppercase tracking-tight">{cat.name}</span>
                                        </div>
                                        <span className="text-[10px] font-bold opacity-60">{cat.count} nodes</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                            <h4 className="flex items-center gap-2 text-xs font-bold text-primary mb-3">
                                <Zap className="w-4 h-4 fill-primary" /> Multi-Science Node
                            </h4>
                            <p className="text-[10px] text-primary/70 font-medium leading-relaxed mb-4">
                                Your search identified a node that exists in both <strong>Fiqh</strong> and <strong>Hadith</strong>.
                            </p>
                            <button className="w-full py-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase rounded-lg">View Shared Logic</button>
                        </div>
                    </div>

                    {/* Main Visual Search Area */}
                    <div className="lg:col-span-9 space-y-8">
                        <div className="bg-card rounded-3xl border border-border p-1 shadow-sm relative h-[500px] overflow-hidden group">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                                <svg width="100%" height="100%">
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>

                            {/* Animated Connections (Simulated) */}
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="relative w-full h-full">
                                    {/* Main Node */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="w-32 h-32 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl shadow-primary/40 ring-8 ring-primary/10 animate-pulse">
                                            <Puzzle className="w-8 h-8 mb-1" />
                                            <span className="text-xs font-bold leading-tight uppercase tracking-tight">{activeCategory}</span>
                                        </div>
                                    </div>

                                    {/* Satellite Nodes */}
                                    {[
                                        { label: 'Usul al-Fiqh', pos: 'top-0 left-1/4' },
                                        { label: 'Qawa’id', pos: 'bottom-0 right-1/4' },
                                        { label: 'Maqasid', pos: 'top-1/4 right-0' },
                                        { label: 'Fatwa', pos: 'bottom-1/4 left-0' }
                                    ].map((node, i) => (
                                        <div key={i} className={`absolute ${node.pos} group/node cursor-pointer z-10`}>
                                            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm border border-border rounded-2xl shadow-sm hover:scale-105 transition-all group-hover/node:border-primary/50 group-hover/node:bg-white">
                                                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground"><Info className="w-4 h-4" /></div>
                                                <span className="text-xs font-bold uppercase tracking-widest">{node.label}</span>
                                                <ChevronRight className="w-4 h-4 text-muted-foreground opacity-30 group-hover/node:text-primary transition-colors" />
                                            </div>
                                            {/* Simulated connection line to center */}
                                            <div className="absolute top-1/2 -z-10 w-32 h-px bg-primary/20 origin-left" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Toolbar Overlay */}
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <button className="px-4 py-2 bg-background border border-border rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-muted transition-colors flex items-center gap-2">
                                    <Network className="w-3 h-3" /> Force Map
                                </button>
                            </div>
                        </div>

                        {/* Semantic Links / Detailed Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'The Role of Hadith in Legislation', science: 'Fiqh / Hadith', desc: 'Analyzing the hierarchical relationship between Prophetic narrations and legal derivations.' },
                                { title: 'Historicity of Legal Schools', science: 'History / Fiqh', desc: 'How geographical and historical events shaped the development of Madhahib.' },
                                { title: 'Ethical Foundations of Law', science: 'Ethics / Fiqh', desc: 'Exploring the Maqasid (Objectives) of Shariah and their moral anchors.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-card rounded-3xl border border-border p-6 shadow-sm hover:border-primary/20 transition-all group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-primary/10 text-primary rounded-2xl border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{item.science}</span>
                                    <h4 className="font-bold text-sm mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-muted/30 rounded-3xl border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                                    <Database className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-tight mb-1">Semantic Repository</h4>
                                    <p className="text-xs text-muted-foreground font-medium">Access over 50,000 inter-disciplinary semantic links across 1,000 years of scholarship.</p>
                                </div>
                            </div>
                            <button className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
                                Open Library Access
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
