'use client';

import React, { useState } from 'react';
import {
    Network,
    Search,
    User,
    Info,
    ChevronRight,
    Filter,
    Database,
    Share2,
    Download,
    ArrowRight,
    ShieldCheck,
    AlertTriangle,
    Users,
    GitBranch
} from 'lucide-react';
import Header from '@/components/header';

export default function IsnadVisualization() {
    const [activeNarrator, setActiveNarrator] = useState('Imam Bukhari');
    const [searchQuery, setSearchQuery] = useState('Bukhari #1: Intention');

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif uppercase tracking-tight">
                                ISNAD VISUALIZATION
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-xl">
                                Trace the chains of transmission (Isnad) for Hadith narrations, analyzing the credibility and relationships of each narrator.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                <GitBranch className="w-4 h-4" /> Compare Chains
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 transition-colors group-focus-within:text-primary" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border shadow-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                placeholder="Search Hadith by reference or text..."
                            />
                        </div>
                        <button className="flex items-center gap-2 px-6 py-4 bg-muted border border-border rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-muted/80 transition-colors">
                            <Filter className="w-4 h-4" /> Authenticity Filter
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Visualization View */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-card rounded-3xl border border-border p-1 shadow-sm relative overflow-hidden h-[600px] flex items-center justify-center bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%)] bg-[length:200%_200%] opacity-100">
                            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

                            {/* Simulated Graph Workspace */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
                                <div className="absolute top-8 left-8 flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-2xl shadow-sm z-20">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center mb-1"><ShieldCheck className="w-4 h-4" /></div>
                                        <span className="text-[8px] font-bold uppercase">Sahih</span>
                                    </div>
                                    <div className="w-px h-8 bg-border" />
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-600 flex items-center justify-center mb-1"><AlertTriangle className="w-4 h-4" /></div>
                                        <span className="text-[8px] font-bold uppercase">Dha'if</span>
                                    </div>
                                </div>

                                {/* SVG Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                    <path d="M100,300 C200,300 300,300 400,300" stroke="var(--color-primary)" strokeWidth="2" fill="none" className="opacity-40 animate-pulse" />
                                    <path d="M400,300 C500,200 600,200 700,200" stroke="var(--color-primary)" strokeWidth="2" fill="none" className="opacity-20" />
                                    <path d="M400,300 C500,400 600,400 700,400" stroke="var(--color-primary)" strokeWidth="2" fill="none" className="opacity-20" />
                                </svg>

                                {/* Graph Nodes */}
                                <div className="flex items-center gap-32">
                                    <div className="flex flex-col items-center gap-4 group cursor-pointer" onClick={() => setActiveNarrator('Yahya b. Sa’id')}>
                                        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center border-4 border-primary/20 shadow-lg group-hover:scale-110 transition-transform">
                                            <span className="text-xl font-bold">Y S</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4">Yahya b. Sa’id</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-semibold">Taba’ at-Tabi’in</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-4 group cursor-pointer" onClick={() => setActiveNarrator('Sufyan ath-Thawri')}>
                                        <div className="w-16 h-16 bg-muted text-muted-foreground rounded-full flex items-center justify-center border-4 border-border shadow-sm group-hover:border-primary transition-colors">
                                            <span className="text-lg font-bold">S T</span>
                                        </div>
                                        <div className="text-center opacity-60">
                                            <p className="text-xs font-bold text-foreground">Sufyan ath-Thawri</p>
                                            <p className="text-[10px] text-muted-foreground uppercase font-semibold">At-Tabi’in</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-16">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center border-2 border-border opacity-40">
                                                <span className="text-sm font-bold">U</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center border-2 border-border opacity-40">
                                                <span className="text-sm font-bold">O</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legend Overlay */}
                            <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-card border border-border p-4 rounded-2xl shadow-xl">
                                <div className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-lg uppercase tracking-widest">Active Chain</div>
                                <div className="h-4 w-px bg-border" />
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                                    <span className="text-xs font-bold uppercase tracking-tight">Real-time trace</span>
                                </div>
                            </div>
                        </div>

                        {/* Hadith Text Box */}
                        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
                            <div className="p-6 border-b border-border bg-muted/20 flex items-center justify-between">
                                <h3 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                    <Database className="w-4 h-4 text-primary" /> Hadith Content
                                </h3>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-muted rounded-lg"><Download className="w-4 h-4" /></button>
                                    <button className="p-2 hover:bg-muted rounded-lg"><Share2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <p className="text-2xl font-arabic text-right leading-loose text-foreground" dir="rtl">
                                    إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-4 py-2">
                                    "Actions are but by intentions, and every man shall have only that which he intended..."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Narrator Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card rounded-3xl border border-border p-6 shadow-sm overflow-hidden group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center font-bold text-xl border border-primary/20 relative">
                                    YS
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm border border-border">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{activeNarrator}</h3>
                                    <p className="text-xs text-primary font-bold uppercase tracking-tight">Reliable (Thiqah)</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-2">Tabaqah (Class)</span>
                                    <p className="text-xs font-bold">Followers of the Followers</p>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-2">Narrations across corpus</span>
                                    <div className="flex items-end gap-2">
                                        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[85%] rounded-full" />
                                        </div>
                                        <span className="text-xs font-bold leading-none">1,240</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="text-[10px] font-bold uppercase text-muted-foreground mb-4">Connections</h4>
                                    <div className="space-y-4">
                                        {[
                                            { name: 'Sufyan ath-Thawri', type: 'Teacher' },
                                            { name: 'Imam Malik', type: 'Peer' },
                                            { name: 'Sufyan b. ‘Uyaynah', type: 'Peer' }
                                        ].map((conn, i) => (
                                            <div key={conn.name} className="flex items-center justify-between group/link cursor-pointer">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-[8px] font-bold group-hover/link:bg-primary group-hover/link:text-primary-foreground transition-colors">{conn.name[0]}</div>
                                                    <span className="text-xs font-semibold group-hover/link:text-primary transition-colors">{conn.name}</span>
                                                </div>
                                                <span className="text-[8px] font-bold uppercase px-1.5 py-0.5 bg-muted rounded border border-border">{conn.type}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-muted hover:bg-muted/80 text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 border border-border">
                                    Full Narrator Profile <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-primary/5 rounded-3xl border border-primary/20 p-6 flex flex-col items-center text-center">
                            <Users className="w-10 h-10 text-primary mb-4 opacity-50" />
                            <h4 className="text-xs font-bold uppercase mb-2">Collaborative Analysis</h4>
                            <p className="text-[10px] text-primary/70 font-medium mb-4">Join other scholars studying this specific chain across 12 institutional databases.</p>
                            <div className="flex items-center -space-x-3 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary/10 bg-muted flex items-center justify-center text-[10px] font-bold shadow-sm ring-2 ring-white overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="avatar" />
                                    </div>
                                ))}
                            </div>
                            <button className="text-[10px] font-bold uppercase text-primary underline underline-offset-4">Enter Discussion Room</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
