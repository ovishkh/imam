'use client';

import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';

export default function FeaturePlaceholder({ title }: { title: string }) {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-24 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Construction className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-4xl font-bold mb-4 uppercase font-serif tracking-widest">{title}</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    We are currently building this advanced Islamic study tool. Stay tuned for updates!
                </p>
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>
            </main>
        </div>
    );
}
