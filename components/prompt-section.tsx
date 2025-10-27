'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { Mic } from 'lucide-react';

export default function PromptSection() {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      console.log('Submitted:', prompt);
      setPrompt('');
    }
  };
  const startVoiceInput = () => {
    if (
      !('webkitSpeechRecognition' in window) &&
      !('SpeechRecognition' in window)
    ) {
      alert('Speech Recognition not supported in this browser');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setPrompt(prompt + (prompt ? ' ' : '') + transcript);
        } else {
          interimTranscript += transcript;
        }
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      console.log('[v0] Speech recognition error:', event.error);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const islamicPrompts = [
    'What is the meaning of Surah Al-Fatiha?',
    'Explain the Five Pillars of Islam.',
    'Who was the first Caliph after Prophet Muhammad ﷺ?',
    'What are the major differences between Sunni and Shia beliefs?',
    'How is Zakat calculated?',
    'What is the significance of Laylat al-Qadr?',
    'Tell me about Imam Abu Hanifa and his teachings.',
    'How can I improve concentration in Salah?',
  ];

  return (
    <section className='w-full py-16 md:py-24 px-4 bg-linear-to-b from-background to-background/50'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            Ask any Islamic question
          </h1>
          <p className='text-muted-foreground'>
            Use voice or click a topic below to start exploring Islamic
            knowledge.
          </p>
        </div>

        {/* Prompt Input */}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='relative'>
            <input
              type='text'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Ask Imam anything...'
              className='w-full px-6 py-4 pr-24 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
            />
            <button
              type='button'
              onClick={isListening ? stopVoiceInput : startVoiceInput}
              className={`absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${
                isListening
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              title={isListening ? 'Stop listening' : 'Start voice input'}
            >
              <Mic className='w-5 h-5' />
            </button>
            <button
              type='submit'
              className='absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-lg transition-colors'
            >
              <span className='text-muted-foreground hover:text-foreground text-xl'>
                →
              </span>
            </button>
          </div>

          {isListening && (
            <div className='flex items-center gap-2 px-2 text-sm text-red-600'>
              <span className='inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse'></span>
              Listening...
            </div>
          )}
        </form>

        {/* ✨ Islamic Question Shortcuts */}
        <div className='mt-8 flex flex-wrap items-center justify-center gap-2'>
          {islamicPrompts.map((question, index) => (
            <button
              key={index}
              onClick={() => setPrompt(question)}
              className='px-4 py-2 rounded-full text-sm border border-border hover:bg-muted transition-colors text-foreground'
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
