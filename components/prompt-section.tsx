'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { Mic, Send, Loader2, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import VoiceChat from './voice-chat';
import VoiceIndicator from './voice-indicator';

export default function PromptSection() {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showVoiceChat, setShowVoiceChat] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage = prompt.trim();

    // Create new chat with initial message (no AI response yet)
    const newChat = {
      id: Date.now().toString(),
      title: userMessage.slice(0, 30) + (userMessage.length > 30 ? '...' : ''),
      messages: [{ role: 'user', content: userMessage }],
      createdAt: Date.now(),
      loading: true, // Mark as loading
    };

    // Save to localStorage
    const existingChats = localStorage.getItem('imamChats');
    const chats = existingChats ? JSON.parse(existingChats) : [];
    chats.unshift(newChat);
    localStorage.setItem('imamChats', JSON.stringify(chats));

    // Redirect immediately to chat page
    router.push(`/chat?id=${newChat.id}`);
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
              disabled={isLoading}
              className='w-full px-6 py-4 pr-24 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            />
            <button
              type='button'
              onClick={() => setShowVoiceChat(true)}
              disabled={isLoading}
              className="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Talk to Imam"
            >
              <VoiceIndicator size="md" />
            </button>
            <button
              type='submit'
              disabled={isLoading || !prompt.trim()}
              className='absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {isLoading ? (
                <Loader2 className='w-5 h-5 animate-spin text-muted-foreground' />
              ) : (
                <Send className='w-5 h-5 text-muted-foreground hover:text-foreground' />
              )}
            </button>
          </div>

        </form>

        {/* Islamic Question Shortcuts */}
        <div className='mt-8 flex flex-wrap items-center justify-center gap-2'>
          {islamicPrompts.map((question, index) => (
            <button
              key={index}
              onClick={() => setPrompt(question)}
              disabled={isLoading}
              className='px-4 py-2 rounded-full text-sm border border-border hover:bg-muted transition-colors text-foreground disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {question}
            </button>
          ))}
        </div>

        {/* Voice Call Button */}
        <div className='mt-6 text-center'>
          <button
            onClick={() => setShowVoiceChat(true)}
            className='inline-flex items-center gap-4 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-bold uppercase tracking-widest shadow-lg'
          >
            <VoiceIndicator size='md' className="text-primary-foreground" />
            Start Voice Conversation
          </button>
          <p className='mt-2 text-xs text-muted-foreground'>
            Talk directly with the Islamic Imam
          </p>
        </div>
      </div>

      {/* Voice Chat Modal */}
      {showVoiceChat && (
        <VoiceChat onClose={() => setShowVoiceChat(false)} />
      )}
    </section>
  );
}
