import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const HADITH_SYSTEM_PROMPT = `You are an expert Islamic scholar specializing in Hadith sciences (Hadith authentication and Isnad analysis).
Your role is to provide accurate information about Hadith verification.
Always:
1. Explain the authenticity level (Sahih, Hasan, Da'if, etc.)
2. Discuss the Isnad (chain of transmission)
3. Mention the compilers and their reliability
4. Provide context about the Hadith
5. Discuss scholarly authentication verdicts
Keep responses scholarly, detailed, and accurate.`;

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: `${HADITH_SYSTEM_PROMPT}\n\nHadith Query: ${query}` }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      data: text,
      query: query,
      authenticityLevel: extractAuthenticityLevel(text),
    });
  } catch (error) {
    console.error('Hadith Authenticator API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process Hadith query' },
      { status: 500 }
    );
  }
}

function extractAuthenticityLevel(text: string): string {
  const levels = ['Sahih', 'Hasan', 'Da\'if', 'Maudu\'', 'Forged'];
  for (const level of levels) {
    if (text.toLowerCase().includes(level.toLowerCase())) {
      return level;
    }
  }
  return 'Unknown';
}
