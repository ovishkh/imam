'use client';

import React, { useState } from 'react';
import {
    Book,
    Search,
    ChevronLeft,
    ChevronRight,
    Settings2,
    Volume2,
    BookOpen,
    Languages,
    Bookmark,
    Share2,
    Maximize2,
    Sparkles,
    Library,
    FileText,
    History,
    MoreVertical
} from 'lucide-react';
import Header from '@/components/header';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuranExplorer() {
    const [selectedVerse, setSelectedVerse] = useState('2:255');
    const [zenMode, setZenMode] = useState(true);

    return (
        <div className="min-h-screen bg-transparent">
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
