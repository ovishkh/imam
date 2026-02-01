'use client';

import React, { useState } from 'react';
import { Search, User, Map, Clock, Network, Book, Filter, ChevronRight, MapPin, Users, BookOpen } from 'lucide-react';
import Header from '@/components/header';

export default function BiographicalExplorer() {
    const [activeTab, setActiveTab] = useState('Profile');
    const [searchQuery, setSearchQuery] = useState('Imam Malik ibn Anas');

    const tabs = ['Profile', 'Timeline', 'Connections', 'Major Works', 'Geographic Journey'];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-serif uppercase text-center md:text-left">
                        BIOGRAPHICAL EXPLORER
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border shadow-sm outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="Search scholars..."
                            />
                        </div>
                        <button className="flex items-center gap-2 px-6 py-4 bg-muted border border-border rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-muted/80 transition-colors">
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar - Scholars List */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center justify-between px-2 mb-4">
                            <h3 className="text-xs font-bold uppercase text-muted-foreground">Scholars (1)</h3>
                        </div>
                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-between group cursor-pointer shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg">
                                    MA
                                </div>
                                <div>
                                    <h4 className="font-bold text-emerald-900 leading-tight">Imam Malik ibn An...</h4>
                                    <p className="text-[10px] text-emerald-700 uppercase font-bold tracking-tight">711 - 795 CE</p>
                                    <div className="flex gap-1 mt-1">
                                        <span className="px-1.5 py-0.5 bg-white text-[8px] font-bold text-emerald-600 rounded">Fiqh</span>
                                        <span className="px-1.5 py-0.5 bg-white text-[8px] font-bold text-emerald-600 rounded">Hadith</span>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-emerald-400" />
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Tabs Header */}
                        <div className="flex border-b border-border overflow-x-auto no-scrollbar">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-emerald-600' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {tab}
                                    {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8 transition-all duration-300">
                            {activeTab === 'Profile' && (
                                <div className="space-y-8">
                                    {/* Hero Profile */}
                                    <div className="bg-card rounded-3xl border border-border p-8 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-8 right-8">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-muted text-xs font-bold uppercase rounded-lg border border-border hover:bg-muted/80 transition-colors">
                                                <Book className="w-4 h-4" /> Full Biography
                                            </button>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="w-32 h-32 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center text-4xl font-bold shadow-inner">
                                                MA
                                            </div>
                                            <div className="space-y-4 max-w-xl">
                                                <div>
                                                    <h2 className="text-3xl font-bold font-serif mb-1">Imam Malik ibn Anas</h2>
                                                    <p className="text-2xl font-arabic text-muted-foreground" dir="rtl">مالك بن أنس</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-bold uppercase text-muted-foreground mb-2">Biography</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        Founder of the Maliki school of jurisprudence and author of Al-Muwatta, one of the earliest collections of hadith. Born in Medina, he was the imam of the city and spent his entire life there teaching and issuing fatwas.
                                                    </p>
                                                </div>
                                                <div className="flex gap-4 pt-2">
                                                    <div>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Born</span>
                                                        <span className="text-sm font-bold">711 CE</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Died</span>
                                                        <span className="text-sm font-bold">795 CE</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Location</span>
                                                        <span className="text-sm font-bold flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-500" /> Medina, Arabia</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Relationships */}
                                        <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                                            <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-emerald-600">
                                                <Users className="w-4 h-4" /> Key Relationships
                                            </h3>

                                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-3">Teachers</span>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-[8px] font-bold">HS</div>
                                                            <span className="text-xs font-semibold">Hammad ibn Sulayman</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-[8px] font-bold">AJ</div>
                                                            <span className="text-xs font-semibold">Ata ibn Abi Rabah</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-3">Notable Students</span>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-[8px] font-bold">AY</div>
                                                            <span className="text-xs font-semibold">Abu Yusuf</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-[8px] font-bold">MS</div>
                                                            <span className="text-xs font-semibold">Muhammad al-Shaybani</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Influence */}
                                        <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                                            <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-emerald-600">
                                                <Map className="w-4 h-4" /> Geographical Influence
                                            </h3>
                                            <div className="h-40 bg-muted/50 rounded-2xl border border-border border-dashed flex items-center justify-center text-center p-4">
                                                <div>
                                                    <p className="text-xs font-semibold text-muted-foreground mb-2">Interactive map showing geographical influence</p>
                                                    <div className="inline-block px-3 py-1 bg-white border border-border rounded-lg shadow-sm">
                                                        <p className="text-[10px] font-bold text-left mb-1">Major centers of influence:</p>
                                                        <ul className="text-[9px] text-left list-bullet pl-2">
                                                            <li>Kufa, Iraq (birthplace)</li>
                                                            <li>Baghdad, Iraq</li>
                                                            <li>Central Asia</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Connections' && (
                                <div className="bg-card rounded-3xl border border-border p-12 shadow-sm text-center min-h-[500px] flex flex-col items-center justify-center">
                                    <h3 className="text-xl font-bold mb-2">Interactive Connection Network</h3>
                                    <p className="text-sm text-muted-foreground max-w-md mx-auto mb-12">
                                        Visualize how Imam Malik ibn Anas connects to other Islamic scholars through teacher-student relationships, intellectual influences, and shared works.
                                    </p>

                                    <div className="relative w-64 h-64">
                                        {/* Fake circular graph visualize */}
                                        <div className="absolute inset-0 border-2 border-emerald-100 rounded-full scale-125 opacity-30" />
                                        <div className="absolute inset-0 border-2 border-emerald-100 rounded-full scale-75 opacity-50" />

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-8 ring-emerald-50 relative z-10">MA</div>
                                        </div>

                                        {/* Orbiting scholars */}
                                        {[
                                            { id: 'HS', color: 'bg-emerald-200', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-8' },
                                            { id: 'MS', color: 'bg-emerald-200', pos: 'bottom-0 left-0 -translate-x-8 translate-y-8' },
                                            { id: 'AY', color: 'bg-emerald-200', pos: 'bottom-0 right-0 translate-x-8 translate-y-8' },
                                            { id: 'MA', color: 'bg-emerald-200', pos: 'top-1/2 right-0 translate-x-16 -translate-y-1/2' }
                                        ].map((node, i) => (
                                            <div key={i} className={`absolute ${node.pos} w-10 h-10 ${node.color} text-emerald-800 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md`}>
                                                {node.id}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Timeline' && (
                                <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                                    <h3 className="text-sm font-bold flex items-center gap-2 mb-12 text-emerald-600">
                                        <Clock className="w-4 h-4" /> Life Timeline
                                    </h3>

                                    <div className="relative pl-8 border-l-2 border-border space-y-16 py-4 max-w-2xl">
                                        {[
                                            { year: '711 CE', event: 'Birth', desc: 'Born in Medina, Arabia', color: 'bg-emerald-500' },
                                            { year: '727 CE', event: 'Began Studies', desc: 'Started formal Islamic studies with leading scholars of Medina', color: 'bg-blue-500' },
                                            { year: '744 CE', event: 'Major Work', desc: 'Compiled Al-Muwatta, the first major work of Islamic law and hadith', color: 'bg-purple-500' },
                                            { year: '795 CE', event: 'Death', desc: 'Died in Medina, Arabia', color: 'bg-slate-500' }
                                        ].map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-card ${step.color}`} />
                                                <div className="absolute -left-[100px] top-0 w-24 text-right">
                                                    <span className="text-xs font-bold text-muted-foreground">{step.year}</span>
                                                </div>
                                                <div className="bg-muted/30 p-4 rounded-2xl border border-border shadow-sm inline-block min-w-[300px]">
                                                    <h4 className="font-bold text-sm mb-1">{step.event}</h4>
                                                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Major Works' && (
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { title: 'Al-Muwatta', category: 'Hadith & Fiqh', desc: 'A foundational text on Islamic law and one of the earliest collections of valid hadiths according to Imam Malik.' },
                                            { title: 'Al-Mudawwana', category: 'Fiqh', desc: 'A major collection of the legal opinions and rulings of Imam Malik, compiled by his students.' }
                                        ].map((work, i) => (
                                            <div key={i} className="bg-card rounded-3xl border border-border p-6 shadow-sm hover:border-emerald-200 transition-colors group">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-lg font-bold group-hover:text-emerald-700 transition-colors">{work.title}</h4>
                                                        <span className="text-[10px] font-bold uppercase text-emerald-600">Category: {work.category}</span>
                                                    </div>
                                                    <button className="text-[10px] font-bold uppercase text-muted-foreground flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                                        View Details <ChevronRight className="w-3 h-3" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-muted-foreground leading-relaxed">{work.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8">
                                        <h3 className="text-sm font-bold mb-6 text-muted-foreground uppercase tracking-widest">Works About Imam Malik ibn Anas</h3>
                                        <div className="space-y-4">
                                            {[
                                                { title: 'The Life and Times of Imam Malik', author: 'Dr. Tariq Ramadan' },
                                                { title: 'Imam Malik: His Life and Legacy', author: 'Mohammad Akram Nadwi' }
                                            ].map((book, i) => (
                                                <div key={i} className="flex items-center justify-between p-4 bg-muted/20 rounded-2xl border border-border">
                                                    <div>
                                                        <h4 className="text-sm font-bold">{book.title}</h4>
                                                        <p className="text-[10px] text-muted-foreground">By {book.author}</p>
                                                    </div>
                                                    <button className="px-4 py-1.5 bg-white border border-border rounded-lg text-[10px] font-bold uppercase hover:bg-emerald-50 transition-colors shadow-sm">
                                                        View
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Geographic Journey' && (
                                <div className="bg-card rounded-3xl border border-border p-12 shadow-sm text-center min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-12 right-12 z-10 text-right">
                                        <h4 className="text-sm font-bold font-serif mb-1">Scholar's Journey: Imam Malik ibn Anas</h4>
                                        <div className="w-16 h-px bg-emerald-200 ml-auto" />
                                    </div>

                                    {/* Fake Map visualization */}
                                    <div className="w-full max-w-2xl aspect-video bg-emerald-50/50 rounded-3xl border border-border relative">
                                        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                                            {/* Fake contour lines */}
                                            <path d="M0,20 Q30,15 50,40 T100,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                            <path d="M0,50 Q40,45 60,70 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                        </svg>

                                        {/* Map Points */}
                                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
                                            <div className="relative">
                                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
                                                <div className="w-3 h-3 bg-emerald-600 rounded-full relative shadow-lg shadow-emerald-200" />
                                                <div className="absolute top-4 left-0 bg-white border border-border px-2 py-1 rounded text-[8px] font-bold shadow-sm whitespace-nowrap">Medina (Life & Work)</div>
                                            </div>
                                        </div>

                                        {/* Scholar's Path */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <path d="M25,50 L45,40 L65,60" fill="none" stroke="emerald" strokeWidth="0.5" strokeDasharray="2" className="text-emerald-400" />
                                        </svg>

                                        {/* Location Details Card */}
                                        <div className="absolute bottom-8 left-8 bg-white border border-border rounded-2xl p-4 shadow-xl max-w-xs text-left">
                                            <h4 className="text-xs font-bold mb-3 flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-emerald-500" /> Key Locations
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1" />
                                                    <div>
                                                        <p className="text-[10px] font-bold leading-tight">Medina, Arabia (Birthplace, 711 CE)</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1" />
                                                    <div>
                                                        <p className="text-[10px] font-bold leading-tight">Mecca, Arabia (Hajj, Multiple)</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-4 pt-4 border-t border-border text-[9px] text-muted-foreground leading-relaxed italic">
                                                Imam Malik ibn Anas lived and traveled throughout the Islamic world during the early Islamic period, contributing to the spread of knowledge across different regions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
