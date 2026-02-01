'use client';

import React from 'react';

interface VoiceIndicatorProps {
    onClick?: () => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function VoiceIndicator({ onClick, className = '', size = 'md' }: VoiceIndicatorProps) {
    const sizes = {
        sm: 'h-4 space-x-0.5',
        md: 'h-6 space-x-1',
        lg: 'h-10 space-x-1.5'
    };

    const barWidths = {
        sm: 'w-0.5',
        md: 'w-1',
        lg: 'w-1.5'
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center hover:opacity-80 transition-opacity ${sizes[size]} ${className}`}
            title="Talk to Imam"
        >
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className={`${barWidths[size]} bg-current rounded-full animate-wave`}
                    style={{
                        height: i === 2 ? '100%' : i % 2 === 0 ? '60%' : '80%',
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                    }}
                />
            ))}
        </button>
    );
}
