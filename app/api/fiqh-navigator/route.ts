import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const FIQH_SYSTEM_PROMPT = `You are an expert Islamic scholar specializing in Islamic jurisprudence (Fiqh) across all major schools (Madhahib).
Your role is to provide comprehensive explanations of Islamic legal rulings.
Always:
1. Present views from different schools (Hanafi, Maliki, Shafi'i, Hanbali)
2. Provide relevant evidence (Quran and Hadith)
3. Explain the reasoning (Qiyas, Ijma', Istislah)
4. Discuss contemporary applications
5. Acknowledge differences of opinion respectfully
Keep responses balanced, scholarly, and practical.`;

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
          parts: [{ text: `${FIQH_SYSTEM_PROMPT}\n\nFiqh Query: ${query}` }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      data: text,
      query: query,
      madhabs: extractMadhabs(text),
    });
  } catch (error) {
    console.error('Fiqh Navigator API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process Fiqh query' },
      { status: 500 }
    );
  }
}

function extractMadhabs(text: string): string[] {
  const madhabs = ['Hanafi', 'Maliki', 'Shafi\'i', 'Hanbali'];
  return madhabs.filter(madhab => text.includes(madhab));
}
