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
    SearchCode
} from 'lucide-react';
import Header from '@/components/header';

export default function HadithAuthenticator() {
    const [searchQuery, setSearchQuery] = useState('Innamal a\'malu binniyat');

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif uppercase tracking-tight">
                            HADITH AUTHENTICATOR
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Verify the authenticity (Sihha) and canonical status of Hadith narrations across major collections with scholarly grading.
                        </p>
                    </div>

                    <div className="flex-1 max-w-xl">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <label className="block text-sm font-bold mb-2 uppercase tracking-tight text-muted-foreground">Search Narration for Grading</label>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                                    placeholder="Enter keywords or Hadith ID..."
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-lg cursor-pointer">
                                    <SearchCode className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center text-[10px] font-bold uppercase">
                                <span className="text-muted-foreground">Popular collections:</span>
                                {['Sahih Bukhari', 'Sahih Muslim', 'Sunan Abi Dawud', 'Al-Muwatta'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-muted rounded-full hover:bg-muted/80 cursor-pointer border border-border transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Detailed Authenticity Report */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
                            <div className="p-6 border-b border-border bg-primary/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    <h3 className="font-bold uppercase tracking-widest text-sm">Authenticity Profile</h3>
                                </div>
                                <div className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">Sahih (Authentic)</div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="flex-1 space-y-4">
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase">Narration Text</h4>
                                        <p className="text-2xl font-arabic text-right leading-loose" dir="rtl">إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ</p>
                                        <p className="text-sm text-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">"Verily, actions are judged by intentions..."</p>
                                    </div>
                                    <div className="w-full md:w-48 space-y-4">
                                        <div className="p-4 bg-muted rounded-2xl border border-border text-center">
                                            <div className="text-3xl font-bold text-primary">100%</div>
                                            <div className="text-[10px] font-bold uppercase text-muted-foreground mt-1">Isnad Confidence</div>
                                        </div>
                                        <div className="p-4 bg-muted rounded-2xl border border-border text-center">
                                            <div className="text-3xl font-bold text-primary">A+</div>
                                            <div className="text-[10px] font-bold uppercase text-muted-foreground mt-1">Matn Integrity</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-border">
                                    <div className="p-4 bg-card border border-border rounded-2xl">
                                        <h5 className="text-[10px] font-bold uppercase text-muted-foreground mb-3">Narrator Chain Quality</h5>
                                        <div className="space-y-3">
                                            {['Imam Bukhari', 'Al-Humaidi', 'Sufyan', 'Yahya b. Sa\'id'].map((name, i) => (
                                                <div key={name} className="flex items-center justify-between text-[11px]">
                                                    <span className="font-semibold">{name}</span>
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4 bg-card border border-border rounded-2xl">
                                        <h5 className="text-[10px] font-bold uppercase text-muted-foreground mb-3">Scholarly Grading</h5>
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-[11px]">
                                                <span className="font-semibold text-muted-foreground">Ibn Hajar</span>
                                                <span className="font-bold">Sahih</span>
                                            </div>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="font-semibold text-muted-foreground">Ad-Dhahabi</span>
                                                <span className="font-bold">Sahih</span>
                                            </div>
                                            <div className="flex justify-between text-[11px]">
                                                <span className="font-semibold text-muted-foreground">Al-Albani</span>
                                                <span className="font-bold text-primary">Sahih</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground mb-6 flex items-center gap-2">
                                <Database className="w-4 h-4" /> Source metadata
                            </h3>
                            <div className="space-y-6 text-sm">
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">Collection</span>
                                    <p className="font-bold">Sahih al-Bukhari</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">Book / Chapter</span>
                                    <p className="font-medium">Book of Revelation, Hadith 1</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">Global ID</span>
                                    <p className="font-mono text-primary font-bold">SB-001-A2</p>
                                </div>
                            </div>
                            <button className="w-full mt-8 py-4 bg-primary text-primary-foreground rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                Access Comparative Matrix
                            </button>
                        </div>

                        <div className="bg-yellow-500/5 rounded-2xl border border-yellow-500/20 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                                <h4 className="text-xs font-bold text-yellow-900 uppercase">Conflict Analysis</h4>
                            </div>
                            <p className="text-[11px] text-yellow-800 leading-relaxed font-medium">
                                Scholars noted that while the Isnad is mutawatir (mass-transmitted), some minor variant wordings exist in the Syrian chains. None affect the primary legislative meaning.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
