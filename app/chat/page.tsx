'use client';

import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mic, Send } from 'lucide-react';
import axios from 'axios';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import type { Message, ChatResponse, VoiceResponse } from '@/types/chat';
import { WELCOME_MESSAGE } from '@/lib/constants';
import { formatIslamicResponse } from '@/lib/formatters';

import { Suspense } from 'react';

function ChatContent() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // ... (rest of the state and handlers stay the same, but wrapped in this component)


  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeContent = `
<div class="welcome-message">
  <div class="arabic">${WELCOME_MESSAGE.greeting.arabic}</div>
  <div class="translation">${WELCOME_MESSAGE.greeting.translation}</div>
  <p class="mt-4">${WELCOME_MESSAGE.introduction}</p>
  <div class="mt-4">
    <div class="arabic">${WELCOME_MESSAGE.verse.arabic}</div>
    <div class="translation">${WELCOME_MESSAGE.verse.translation}</div>
    <div class="reference">${WELCOME_MESSAGE.verse.reference}</div>
  </div>
</div>`;
      setMessages([{ role: 'assistant', content: welcomeContent }]);
    }
  }, [messages.length]);

  useEffect(() => {
    const initialPrompt = searchParams.get('prompt');
    if (initialPrompt) {
      const initialMessage: Message = { role: 'user', content: initialPrompt };
      setMessages([initialMessage]);
      void handleSubmit(initialPrompt);
    }
  }, [searchParams]);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      // Add user message
      const userMessage: Message = { role: 'user', content: text };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setInput('');

      // Get AI response
      const response = await axios.post<ChatResponse>('/api/chat', { prompt: text });
      const aiResponse = response.data.answer;

      // Add AI response
      const formattedResponse = formatIslamicResponse(aiResponse);
      const assistantMessage: Message = { role: 'assistant', content: formattedResponse };
      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVoice = async (text: string) => {
    if (!text || speaking) return;

    try {
      setSpeaking(true);
      // Strip HTML tags and decode entities
      const div = document.createElement('div');
      div.innerHTML = text;
      const plainText = div.textContent || div.innerText || '';

      console.log('Requesting voice synthesis for:', plainText.substring(0, 50) + '...');
      const response = await axios.post<VoiceResponse>('/api/voice', { text: plainText });

      if (!response.data.audioUrl) {
        throw new Error('No audio URL received from voice API');
      }

      const audio = new Audio(response.data.audioUrl);

      return new Promise((resolve, reject) => {
        audio.addEventListener('ended', () => {
          setSpeaking(false);
          resolve(undefined);
        });

        audio.addEventListener('error', (e) => {
          console.error('Audio playback error:', e);
          setSpeaking(false);
          reject(new Error('Failed to play audio'));
        });

        audio.play().catch((err) => {
          console.error('Audio play error:', err);
          setSpeaking(false);
          reject(err);
        });
      });
    } catch (error: any) {
      console.error('Voice synthesis error:', error.response?.data || error.message || error);
      setSpeaking(false);
      alert('Sorry, voice synthesis failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container max-w-4xl mx-auto p-4 flex flex-col">
        {/* Messages */}
        <div className="flex-1 space-y-4 mb-4 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${message.role === 'user'
                ? 'bg-primary/10 ml-auto max-w-[80%] p-4 rounded-lg'
                : 'message-islamic mr-auto max-w-[80%]'
                }`}
            >
              <div
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: message.content }}
              />
              {message.role === 'assistant' && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleVoice(message.content)}
                  disabled={speaking}
                >
                  <Mic className="w-4 h-4 mr-2" />
                  {speaking ? 'Speaking...' : 'Listen'}
                </Button>
              )}
            </div>
          ))}
          {loading && (
            <div className="bg-muted p-4 rounded-lg mr-auto max-w-[80%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault() as void;
            handleSubmit(input);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Ask your question..."
            className="flex-1 p-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <Button type="submit" disabled={loading}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading Chat...</div>}>
      <ChatContent />
    </Suspense>
  );
}
