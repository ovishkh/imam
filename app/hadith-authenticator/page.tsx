'use client';

import React, { useState } from 'react';
import {
    ShieldCheck,
    Search,
    Info,
    ChevronRight,
    Filter,
    Database,
    Share2,
    Download,
    CheckCircle2,
    AlertTriangle,
    FileText,
    SearchCode,
    Verified,
    Link as LinkIcon,
    History,
    Award
} from 'lucide-react';
import Header from '@/components/header';
import { motion } from 'framer-motion';

export default function HadithAuthenticator() {
    const [searchQuery, setSearchQuery] = useState('Innamal a\'malu binniyat');

    return (
        <div className="min-h-screen bg-transparent">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Hero / Verification Header */}
                <div className="mb-16 flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] font-extrabold uppercase tracking-widest">
                            <Verified className="w-3 h-3" /> Canonical Verification Engine
                        </div>
                        <h1 className="text-6xl font-black text-foreground font-serif tracking-tight leading-none">
                            HADITH <span className="text-primary">AUTHENTICATOR</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                            Verify the provenance, chain of transmission (Isnad), and text integrity (Matn) using centralized scholarly databases.
                        </p>
                    </div>

                    <div className="w-full lg:w-[500px]">
                        <div className="bg-card rounded-[2.5rem] border border-border p-2 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] pointer-events-none" />
                            <div className="p-8 space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Search Narration or ID</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-muted/50 border border-border focus:ring-2 focus:ring-primary/50 outline-none transition-all pr-12 text-sm font-semibold"
                                            placeholder="e.g. Bukhari 1 or text..."
                                        />
                                        <SearchCode className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Sahih Bukhari', 'Sahih Muslim', 'Al-Muwatta'].map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-background border border-border rounded-xl text-[9px] font-bold uppercase hover:border-primary/30 transition-colors cursor-pointer shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Authenticity Certificate */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card rounded-[3rem] border border-border overflow-hidden shadow-sm relative group"
                        >
                            {/* Certificate Border Decorations */}
                            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-primary/20 rounded-tl-[3rem] -translate-x-2 -translate-y-2" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-primary/20 rounded-br-[3rem] translate-x-2 translate-y-2" />

                            <div className="p-8 border-b border-border bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500 text-white rounded-xl shadow-lg shadow-green-500/20">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase tracking-widest text-xs text-foreground">Provenance Certificate</h3>
                                        <p className="text-[10px] text-muted-foreground font-bold">Ref: SB-001-CANONICAL</p>
                                    </div>
                                </div>
                                <div className="px-6 py-2 bg-green-500/10 border border-green-500/30 text-green-600 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
                                    Status: Sahih (Authentic)
                                </div>
                            </div>

                            <div className="p-10 space-y-12">
                                <div className="flex flex-col md:flex-row gap-12">
                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">Narration (Matn)</span>
                                            <p className="text-3xl font-arabic text-right leading-[2] text-foreground" dir="rtl">
                                                إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى
                                            </p>
                                            <div className="p-6 bg-muted/30 rounded-3xl border border-border relative">
                                                <p className="text-sm text-foreground leading-relaxed italic">
                                                    "Verily, actions are judged by intentions, and every man shall have only that which he intended..."
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-64 flex flex-col gap-4">
                                        <div className="p-6 bg-background rounded-3xl border border-border text-center group/card hover:border-primary/30 transition-colors">
                                            <div className="text-4xl font-black text-primary mb-1">100%</div>
                                            <div className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">Isnad Grade</div>
                                            <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                            </div>
                                        </div>
                                        <div className="p-6 bg-background rounded-3xl border border-border text-center group/card hover:border-primary/30 transition-colors">
                                            <div className="text-4xl font-black text-primary mb-1 text-green-600">A+</div>
                                            <div className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">Scholarly Consensus</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px flex-1 bg-border" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Verification Ledger</span>
                                        <div className="h-px flex-1 bg-border" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest px-1">Narrator Reliability</h4>
                                            <div className="space-y-2">
                                                {[
                                                    { name: 'Yahya b. Sa\'id al-Ansari', grade: 'Thiqah' },
                                                    { name: 'Muhammad b. Ibrahim al-Taymi', grade: 'Thiqah' },
                                                    { name: 'Al-qamah b. Waqqas al-Laythi', grade: 'Thiqah' }
                                                ].map((narrator, i) => (
                                                    <div key={i} className="group flex items-center justify-between p-4 bg-muted/20 border border-transparent hover:border-border hover:bg-muted/40 rounded-2xl transition-all">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-[10px] font-bold text-foreground">{i + 1}</div>
                                                            <span className="text-[11px] font-bold text-foreground">{narrator.name}</span>
                                                        </div>
                                                        <span className="text-[9px] font-extrabold px-2 py-1 bg-green-500/10 text-green-600 rounded-md uppercase border border-green-500/20">{narrator.grade}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-bold uppercase text-primary tracking-widest px-1">Global Database Grades</h4>
                                            <div className="space-y-2">
                                                {[
                                                    { scholar: 'Ibn Hajar al-Asqalani', grade: 'Sahih' },
                                                    { scholar: 'Imam an-Nawawi', grade: 'Sahih' },
                                                    { scholar: 'Nasiruddin al-Albani', grade: 'Sahih' }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                                                        <span className="text-[11px] font-bold text-muted-foreground">{item.scholar}</span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[11px] font-black text-primary uppercase">{item.grade}</span>
                                                            <Award className="w-3.5 h-3.5 text-primary" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Data */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#1c1c1c] text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group">
                            <Database className="absolute -top-6 -left-6 w-32 h-32 text-white/5 group-hover:text-white/10 transition-colors" />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Metadata Dossier</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase text-gray-400">Primary Collection</span>
                                        <span className="text-sm font-bold">Sahih al-Bukhari</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase text-gray-400">Chapter</span>
                                        <span className="text-sm font-bold">Revelation</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-[10px] font-bold uppercase text-gray-400">Hadith Index</span>
                                        <span className="text-sm font-bold text-primary font-mono">#0001</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <History className="w-3 h-3 text-primary" />
                                        <span className="text-[9px] font-bold uppercase text-gray-400">Last Verified</span>
                                    </div>
                                    <p className="text-[11px] font-medium text-gray-300">Synchronized with Global Hadith Network 2.4s ago.</p>
                                </div>

                                <button className="w-full py-4 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:opacity-90 transition-opacity">
                                    Comparative Matrix
                                </button>
                            </div>
                        </div>

                        <div className="bg-amber-500/5 rounded-[2.5rem] border border-amber-500/20 p-8 group hover:border-amber-500/40 transition-all">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg">
                                    <AlertTriangle className="w-4 h-4" />
                                </div>
                                <h4 className="text-[10px] font-black text-amber-900 uppercase tracking-widest">Scholarly Nuance</h4>
                            </div>
                            <p className="text-xs text-amber-800/80 leading-relaxed font-medium">
                                While the authenticity is absolute, some variants mention the specific place where the Prophet ﷺ delivered this sermon (Minbar). These minor differences do not affect the theological extraction.
                            </p>
                            <div className="mt-6 flex justify-end">
                                <button className="flex items-center gap-1 text-[9px] font-black uppercase text-amber-600 hover:gap-2 transition-all">
                                    View Variants <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
