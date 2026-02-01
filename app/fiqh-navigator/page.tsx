'use client';

import React, { useState } from 'react';
import {
    Scale,
    Search,
    Book,
    ShieldCheck,
    MessageSquare,
    History,
    FileText,
    AlertCircle,
    ChevronRight,
    Download,
    Share2,
    Filter,
    Activity,
    Gavel
} from 'lucide-react';
import Header from '@/components/header';

export default function FiqhNavigator() {
    const [activeTab, setActiveTab] = useState('Jurisprudence');
    const [searchQuery, setSearchQuery] = useState('Inheritance laws');

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif uppercase">
                            FIQH NAVIGATOR
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Explore Islamic jurisprudence across major schools of thought with comparative analysis and modern applications.
                        </p>
                    </div>

                    <div className="flex-1 max-w-xl">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-muted-foreground">Search Rulings & Principles</label>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                                    placeholder="Enter topic or case... "
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-lg cursor-pointer">
                                    <Search className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center text-[10px] font-bold uppercase">
                                <span className="text-muted-foreground">Topics:</span>
                                {['Zakat Calculation', 'Business Ethics', 'Family Law', 'Prayer Timings'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-muted rounded-full hover:bg-muted/80 cursor-pointer border border-border transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Schools of Thought Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-6 flex items-center gap-2">
                                <Gavel className="w-4 h-4" /> Madhahib (Schools)
                            </h3>

                            <div className="space-y-3">
                                {[
                                    { name: 'Hanafi', active: true, desc: 'Reasoning and local custom' },
                                    { name: 'Maliki', active: false, desc: 'Practice of Medina' },
                                    { name: 'Shafi\'i', active: false, desc: 'Prophetic Traditons' },
                                    { name: 'Hanbali', active: false, desc: 'Literalist interpretation' }
                                ].map(school => (
                                    <button
                                        key={school.name}
                                        className={`w-full text-left p-4 rounded-xl border transition-all ${school.active ? 'bg-primary/5 border-primary/20 ring-1 ring-primary/10' : 'bg-muted/30 border-border hover:bg-muted/50'}`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-sm font-bold ${school.active ? 'text-primary' : 'text-foreground'}`}>{school.name}</span>
                                            {school.active && <ShieldCheck className="w-3.5 h-3.5 text-primary" />}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground font-medium">{school.desc}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-4">Complexity Score</h3>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-4xl font-bold font-serif leading-none">High</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-semibold">Multiple scholarly views identified for the current search term.</p>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Tabs */}
                        <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                            {['Jurisprudence', 'Modern Context', 'Scholarly Opinions', 'Sources'].map(tab => (
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

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Ruling Breakdown */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                        <Scale className="w-4 h-4 text-primary" />
                                        Primary Ruling
                                    </h3>
                                    <Activity className="w-4 h-4 text-muted-foreground opacity-50" />
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                        <span className="text-[10px] font-bold text-primary uppercase block mb-1">Status</span>
                                        <h4 className="text-lg font-bold">Wajib (Obligatory)</h4>
                                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                            Based on consensual agreement (Ijma') between the major schools for the primary case of inheritance distribution.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 bg-muted/30 rounded-xl border border-border">
                                            <span className="text-[8px] font-bold text-muted-foreground uppercase">Condition</span>
                                            <p className="text-[10px] font-bold mt-1">Niyyah (Intention)</p>
                                        </div>
                                        <div className="p-3 bg-muted/30 rounded-xl border border-border">
                                            <span className="text-[8px] font-bold text-muted-foreground uppercase">Requirement</span>
                                            <p className="text-[10px] font-bold mt-1">Documentation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Evidence Base */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                        <Book className="w-4 h-4 text-primary" />
                                        Evidence Base
                                    </h3>
                                    <History className="w-4 h-4 text-muted-foreground opacity-50" />
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { type: 'Quran', ref: '4:11-12', context: 'Primary legislation' },
                                        { type: 'Sunnah', ref: 'Bukhari #1234', context: 'Detail clarification' },
                                        { type: 'Ijma', ref: 'Universal', context: 'Consensus established' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 hover:bg-muted/20 transition-colors border-b border-border last:border-0">
                                            <div>
                                                <span className="text-[10px] font-bold text-primary mr-2">{item.type}</span>
                                                <span className="text-xs font-bold">{item.ref}</span>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground">{item.context}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Scholarly Discussion */}
                            <div className="bg-card rounded-3xl border border-border p-8 shadow-sm md:col-span-2">
                                <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest mb-8">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    Scholarly Nuances
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 text-[10px] font-bold">IH</div>
                                            <div>
                                                <h4 className="text-xs font-bold mb-1">Imam Abu Hanifa's View</h4>
                                                <p className="text-[10px] text-muted-foreground leading-relaxed">Emphasizes the use of Istihsan (juridical preference) in complex asset distribution where literal application might lead to hardship.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px] font-bold">IM</div>
                                            <div>
                                                <h4 className="text-xs font-bold mb-1">Imam Malik's Perspective</h4>
                                                <p className="text-[10px] text-muted-foreground leading-relaxed">Prioritizes the 'Amal (continuous practice) of the people of Medina as a definitive source of evidence.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-muted/10 rounded-2xl p-6 border border-border border-dashed flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-primary mb-2">
                                            <AlertCircle className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase">Modern Reconcilliation</span>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                                            "Contemporary councils often balance these classical views with modern legal frameworks to ensure Shariah compliance within state laws."
                                        </p>
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
