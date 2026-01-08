export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  answer: string;
  error?: string;
}

export interface VoiceResponse {
  audioUrl: string;
  error?: string;
}