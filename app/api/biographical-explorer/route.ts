import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const BIOGRAPHICAL_SYSTEM_PROMPT = `You are an expert Islamic historian specializing in Islamic biography (Seerah) and biographical studies.
Your role is to provide detailed biographical information about Islamic scholars, prophets, and historical figures.
Always:
1. Provide key biographical facts
2. Discuss major contributions and achievements
3. Mention students and teachers
4. Explain historical context
5. Discuss legacy and influence
Keep responses historically accurate, engaging, and well-organized.`;

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
          parts: [{ text: `${BIOGRAPHICAL_SYSTEM_PROMPT}\n\nBiographical Query: ${query}` }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      data: text,
      query: query,
      type: 'biography',
    });
  } catch (error) {
    console.error('Biographical Explorer API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process biographical query' },
      { status: 500 }
    );
  }
}
