import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

const CONTENT_ANALYSIS_SYSTEM_PROMPT = `You are an expert Islamic text analyst specializing in semantic and linguistic analysis of Islamic texts.
Your role is to provide deep analysis of Islamic content including Quranic text, Hadith, and scholarly works.
Always:
1. Provide thematic analysis
2. Discuss linguistic elements
3. Identify key concepts and connections
4. Analyze structure and organization
5. Provide interpretive insights
Keep responses analytical, comprehensive, and structured for easy understanding.`;

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
          parts: [{ text: `${CONTENT_ANALYSIS_SYSTEM_PROMPT}\n\nContent for Analysis: ${query}` }],
        },
      ],
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      data: text,
      query: query,
      analysisType: 'semantic',
    });
  } catch (error) {
    console.error('Content Analyzer API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process content analysis' },
      { status: 500 }
    );
  }
}
