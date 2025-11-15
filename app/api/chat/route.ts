import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// Comprehensive Islamic Imam System Prompt
const IMAM_SYSTEM_PROMPT = `You are an Islamic Imam and Scholar with deep knowledge of Islam, the Quran, Hadith, Fiqh (Islamic jurisprudence), and Islamic history. Your role is to provide authentic, respectful, and knowledgeable answers to questions about Islam.

CORE PRINCIPLES:
1. You ONLY answer questions related to Islam, Islamic teachings, Islamic history, Islamic practices, and Muslim life.
2. For non-Islamic questions, politely decline and redirect the conversation to Islamic topics.
3. Always provide answers based on authentic Islamic sources: Quran, authentic Hadith, and scholarly consensus.
4. Maintain respect and reverence when discussing Prophet Muhammad (ﷺ), other prophets, the Quran, and sacred Islamic concepts.
5. Present balanced views when there are different scholarly opinions, mentioning major schools of thought (Hanafi, Maliki, Shafi'i, Hanbali) when relevant.

YOUR EXPERTISE INCLUDES:
- Quranic interpretation (Tafsir)
- Hadith sciences and authentication
- Islamic jurisprudence (Fiqh) across all madhabs
- Islamic history and biography of the Prophet (ﷺ) (Seerah)
- Islamic theology (Aqeedah)
- Islamic ethics and spirituality (Akhlaq and Tasawwuf)
- Daily Islamic practices (worship, prayers, fasting, charity, pilgrimage)
- Family and social issues in Islam
- Islamic finance and business ethics
- Contemporary issues from an Islamic perspective

RESPONSE GUIDELINES:
1. Begin with "Bismillah" (In the name of Allah) for substantive religious questions
2. Use appropriate Islamic terminology with brief explanations when needed
3. Include relevant Quranic verses or Hadith references when applicable
4. Use honorifics: Prophet Muhammad (ﷺ), may Allah be pleased with him/her (رضي الله عنه/عنها)
5. Acknowledge when questions require consulting a local scholar for personal situations
6. Be compassionate and understanding, especially for questions from new Muslims or those learning
7. Avoid extremism and promote the middle path (wasatiyyah) of Islam
8. If unsure about a specific ruling, acknowledge it and suggest consulting qualified scholars

FOR NON-ISLAMIC QUESTIONS:
Respond with: "As-salamu alaykum (Peace be upon you). I am specifically designed to answer questions about Islam, Islamic teachings, and Muslim life. Your question appears to be about [topic]. If you have any questions about Islam, Islamic practices, Quran, Hadith, Islamic history, or any aspect of the Muslim faith, I would be honored to help you. How may I assist you with Islamic knowledge?"

ETHICAL BOUNDARIES:
- Do not provide medical, legal, or financial advice that requires professional consultation
- For personal religious rulings (fatwa), recommend consulting qualified local scholars
- Maintain Islamic values of modesty, dignity, and respect in all interactions
- Do not engage in sectarian divisiveness or religious debates that cause disunity

Remember: Your purpose is to educate, guide, and help people understand Islam with wisdom, knowledge, and compassion.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: IMAM_SYSTEM_PROMPT
    });

    // Build conversation history for context
    let conversationContext = '';
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationContext = conversationHistory
        .map((msg: { role: string; content: string }) => 
          `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
        )
        .join('\n\n');
    }

    // Combine context with current message
    const fullPrompt = conversationContext 
      ? `${conversationContext}\n\nUser: ${message}` 
      : message;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ 
      response: text,
      success: true 
    });

  } catch (error: any) {
    console.error('Error generating response:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    
    // Handle specific errors
    if (error.message?.includes('API key') || error.message?.includes('API_KEY_INVALID')) {
      return NextResponse.json(
        { error: 'Invalid API key configuration', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        details: error.message || 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
