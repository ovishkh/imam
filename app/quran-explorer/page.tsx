'use client';

import React, { useState } from 'react';
import { Search, Book, Info, MessageSquare, History, Bookmark, Share2, Volume2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Header from '@/components/header';

export default function QuranExplorer() {
    const [searchQuery, setSearchQuery] = useState('94:7');

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
                            INTERACTIVE QURANIC STUDY TOOLS
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            Enable users to explore Quranic verses in-depth by providing Arabic script, English translation, and word-by-word interpretation.
                        </p>
                    </div>

                    <div className="flex-1 max-w-xl">
                        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                            <label className="block text-sm font-semibold mb-2">Search Quranic Verses</label>
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-muted border border-border focus:ring-2 focus:ring-primary/50 outline-none"
                                    placeholder="e.g. 94:7 or Surah Al-Inshirah"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-white rounded-lg cursor-pointer">
                                    <Search className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 items-center text-xs">
                                <span className="text-muted-foreground">Popular searches:</span>
                                {['Surah Al-Fatihah', 'Ayat Al-Kursi (2:255)', 'Theme: Patience', 'Stories of the Prophets'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-muted rounded-full hover:bg-muted/80 cursor-pointer border border-border transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Verse Display */}
                        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
                            <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <Book className="text-emerald-500 w-5 h-5" />
                                    <h2 className="font-bold flex items-center gap-2">
                                        Surah Al-Inshirah (94:7)
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase">Makki</span>
                                    </h2>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <button className="p-1 hover:bg-muted rounded"><ChevronLeft className="w-4 h-4" /></button>
                                    <span>Verse 7 of 8</span>
                                    <button className="p-1 hover:bg-muted rounded"><ChevronRight className="w-4 h-4" /></button>
                                </div>
                            </div>

                            <div className="p-8 text-center space-y-8">
                                <p className="text-3xl md:text-5xl font-arabic leading-loose text-foreground" dir="rtl">
                                    فَإِذَا فَرَغْتَ فَانصَبْ
                                </p>
                                <div className="max-w-2xl mx-auto">
                                    <p className="text-xl text-muted-foreground italic mb-2">
                                        So when you have finished [your duties], then stand up [for worship].
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors border border-border">
                                        <Bookmark className="w-4 h-4" /> Save
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors border border-border">
                                        <Volume2 className="w-4 h-4" /> Listen
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors border border-border">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                    <div className="h-4 w-px bg-border mx-2" />
                                    <button className="px-3 py-1 bg-muted rounded-lg text-xs font-medium border border-border">Single Verse</button>
                                    <button className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold border border-emerald-100">With Context</button>
                                    <button className="px-3 py-1 bg-muted rounded-lg text-xs font-medium border border-border">Full Surah</button>
                                </div>
                            </div>

                            <div className="bg-muted/10 border-t border-border">
                                <div className="flex border-b border-border">
                                    {['Contextual', 'Linguistic', 'Historical', 'Thematic'].map((tab, i) => (
                                        <button key={tab} className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider ${i === 0 ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-muted-foreground'}`}>
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                                <div className="p-6">
                                    <h3 className="flex items-center gap-2 text-sm font-bold mb-4">
                                        <History className="w-4 h-4 text-emerald-500" />
                                        Contextual Analysis
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        This verse appears in Surah Al-Inshirah, a chapter that begins by reminding the Prophet Muhammad (ﷺ) of Allah's favors upon him, including the expansion of his breast (spiritual capacity). After mentioning these favors and reassurances, Allah gives guidance in this verse about what to do after completing one's duties.
                                    </p>
                                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-blue-700 mb-2">
                                            <Info className="w-3.5 h-3.5" />
                                            Contextual Meaning
                                        </h4>
                                        <p className="text-xs text-blue-700/80 leading-relaxed">
                                            Within the context of the surah, this verse teaches that after completing one task or obligation, one should immediately engage in another act of worship or good deed rather than resting or becoming idle. It emphasizes continuous dedication to Allah's worship and service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tafsir (Exegesis) Section */}
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                                    Tafsir (Exegesis)
                                </h3>
                                <div className="flex gap-2 text-[10px] font-bold uppercase tracking-tighter">
                                    <button className="px-3 py-1 bg-emerald-500 text-white rounded-md">All</button>
                                    <button className="px-3 py-1 bg-muted text-muted-foreground rounded-md">Classical</button>
                                    <button className="px-3 py-1 bg-muted text-muted-foreground rounded-md">Linguistic</button>
                                    <button className="px-3 py-1 bg-muted text-muted-foreground rounded-md">Contemporary</button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 bg-muted/20 rounded-xl border border-border">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold">Tafsir Ibn Kathir</h4>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase bg-muted px-2 py-0.5 rounded">Classical</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Ibn Kathir explains that when you have finished your worldly obligations, then stand for the worship of your Lord and ask Him for your needs. This means that one should never be without work, either doing things that are obligatory or mustahabb (recommended). When one finishes from one action, they should take up another, and that's how they find rest.
                                    </p>
                                </div>

                                <div className="p-4 bg-muted/20 rounded-xl border border-border">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold">Tafsir Al-Tabari</h4>
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase bg-muted px-2 py-0.5 rounded">Classical</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Al-Tabari mentions several interpretations from the early scholars. One view is that it means "When you have finished the obligatory prayers, then stand in the night prayer." Another interpretation is "When you have finished preaching, then worship." A third view is "When you have finished your worldly tasks, then exert yourself in worship."
                                    </p>
                                </div>

                                <button className="w-full py-3 text-sm font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors mt-4">
                                    Load More Tafsir Works
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Secondary Content Area */}
                    <div className="space-y-8">
                        {/* Thematic Context */}
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-emerald-600">
                                <Bookmark className="w-4 h-4" />
                                Thematic Context
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-2">Primary Theme</span>
                                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-lg">Continuous Worship</span>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-2">Secondary Themes</span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Hardship and Relief', 'Spiritual Growth', 'Focus on Allah'].map(t => (
                                            <span key={t} className="px-3 py-1 bg-muted border border-border text-xs font-semibold rounded-lg">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="text-xs font-bold mb-2 uppercase">Theme Exploration</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        This verse explores the Islamic concept of continuous engagement in worship and good deeds, teaching that a believer should move from one virtuous action to another without becoming idle.
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="text-xs font-bold mb-3 uppercase opacity-50">Thematic Connections</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-bold">Prioritizing Worship</span>
                                            <span className="text-muted-foreground">13 verses</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-bold">Hardship & Relief</span>
                                            <span className="text-muted-foreground">27 verses</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="font-bold">Gratitude for Blessings</span>
                                            <span className="text-muted-foreground">42 verses</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 text-[10px] font-bold uppercase tracking-wider text-emerald-600 text-center">
                                        Explore All Thematic Connections →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Revelation Context */}
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-emerald-600">
                                <Info className="w-4 h-4" />
                                Revelation Context
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-3 bg-muted/30 rounded-lg border border-border">
                                    <span className="block text-[8px] font-bold uppercase text-muted-foreground mb-1">Number</span>
                                    <span className="text-xl font-bold">94</span>
                                </div>
                                <div className="p-3 bg-muted/30 rounded-lg border border-border">
                                    <span className="block text-[8px] font-bold uppercase text-muted-foreground mb-1">Verses</span>
                                    <span className="text-xl font-bold">8</span>
                                </div>
                                <div className="p-3 bg-muted/30 rounded-lg border border-border">
                                    <span className="block text-[8px] font-bold uppercase text-muted-foreground mb-1">Revelation</span>
                                    <span className="text-xl font-bold">Makki</span>
                                </div>
                                <div className="p-3 bg-muted/30 rounded-lg border border-border">
                                    <span className="block text-[8px] font-bold uppercase text-muted-foreground mb-1">Period</span>
                                    <span className="text-sm font-bold leading-tight">Early Makkan</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase mb-2">Main Themes of Surah</h4>
                                    <ul className="text-[10px] text-muted-foreground font-semibold space-y-1.5 list-disc pl-4">
                                        <li>Divine comfort and reassurance</li>
                                        <li>Easing of hardship</li>
                                        <li>Gratitude for Allah's favors</li>
                                        <li>Continuous dedication to worship</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-bold uppercase mb-2">Historical Context</h4>
                                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                                        This surah is paired with its predecessor, Surah Ad-Duha, both offering consolation to the Prophet. While Ad-Duha addressed the Prophet's personal concerns, Al-Inshirah addresses his public mission and the challenges he faced in its fulfillment.
                                    </p>
                                </div>

                                <button className="w-full py-2 bg-muted hover:bg-muted/80 text-[10px] font-bold rounded-lg border border-border transition-colors">
                                    View Complete Surah Analysis
                                </button>
                            </div>
                        </div>

                        {/* Related Resources */}
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                            <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-emerald-600">
                                <ExternalLink className="w-4 h-4" />
                                Related Resources
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-3 group cursor-pointer">
                                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0 border border-emerald-100">
                                        <Book className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold group-hover:text-emerald-600 transition-colors line-clamp-2">
                                            The Concept of Continuous Worship in Islam
                                        </h4>
                                        <span className="text-[9px] text-muted-foreground">Scholarly Article • 15 min read</span>
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
