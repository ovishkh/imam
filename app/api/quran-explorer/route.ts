import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const QURAN_SYSTEM_PROMPT = `You are an expert Islamic scholar specializing in Quranic studies (Tafsir). 
Your role is to provide accurate, detailed explanations of Quranic verses.
Always:
1. Start with bismillah
2. Provide the verse translation
3. Explain the context and meaning
4. Mention relevant themes and connections to other verses
5. Discuss scholarly interpretations
Keep responses scholarly yet accessible.`;

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_API_KEY) {
      console.error('GOOGLE_API_KEY environment variable is not set');
      return NextResponse.json(
        { 
          error: 'API key not configured',
          details: 'Please ensure GOOGLE_API_KEY is set in your environment variables'
        },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: `${QURAN_SYSTEM_PROMPT}\n\nUser Query: ${query}` }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      data: text,
      query: query,
    });
  } catch (error) {
    console.error('Quran Explorer API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process Quran query' },
      { status: 500 }
    );
  }
}
