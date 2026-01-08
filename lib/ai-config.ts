// Server-side AI configuration helpers.
// Keep initialization lazy so imports are safe and we can provide
// helpful errors when keys are missing.

export const ULTRAVOX_API_URL = 'https://api.ultravox.ai/v1';
export const ULTRAVOX_HEADERS = {
  'Authorization': `Bearer ${process.env.ULTRAVOX_API_KEY || ''}`,
  'Content-Type': 'application/json',
};

// Lazy getter for Gemini model to avoid problems during client-side
// bundling and to provide clearer runtime errors.
export async function getGeminiModel() {
  const key = process.env.GOOGLE_API_KEY;
  if (!key) {
    throw new Error('Missing GOOGLE_API_KEY in environment');
  }

  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  
  try {
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Test the model with a simple query to verify it works
    await model.generateContent('Test connection');
    
    return model;
  } catch (error: any) {
    console.error('Failed to initialize Gemini:', error);
    throw new Error(`Gemini initialization failed: ${error.message}`);
  }
}
