import { NextResponse } from 'next/server';
import { getGeminiModel } from '@/lib/ai-config';
import { SYSTEM_PROMPT } from '@/lib/constants';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Debug log
    console.log('Chat API Request:', { prompt: prompt.substring(0, 50) + '...' });

    // Ensure API key is set
    if (!process.env.GOOGLE_API_KEY) {
      console.error('Missing GOOGLE_API_KEY in environment');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Combine system prompt with user query
    const enhancedPrompt = `${SYSTEM_PROMPT}

User Question: ${prompt}

Remember to follow the 6-part structure in your response:
1. Introduction / Context
2. Qur'anic Foundation
3. Prophetic Evidence (Hadith)
4. Scholarly Insight / Application
5. Modern Relevance
6. Closing Reflection / Dua line

Your response:`;

    // Initialize Gemini client with better error handling
    let gen;
    try {
      gen = await getGeminiModel();
    } catch (error) {
      console.error('Failed to initialize Gemini:', error);
      return NextResponse.json(
        { error: 'Failed to initialize AI model' },
        { status: 500 }
      );
    }

    try {
      const result = await gen.generateContent(enhancedPrompt);

      const response = await result.response;
      const text = response.text();

      if (!text) {
        console.error('Empty response from Gemini');
        return NextResponse.json(
          { error: 'AI model returned empty response' },
          { status: 500 }
        );
      }

      return NextResponse.json({ answer: text });
    } catch (error: any) {
      console.error('Gemini API error:', {
        message: error.message,
        details: error.response?.data || error
      });
      
      return NextResponse.json(
        { 
          error: 'AI model error',
          details: error.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: error.message
      },
      { status: 500 }
    );
  }
}