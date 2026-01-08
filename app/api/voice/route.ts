import { NextResponse } from 'next/server';
import axios from 'axios';
import { ULTRAVOX_API_URL, ULTRAVOX_HEADERS } from '@/lib/ai-config';
import { DEFAULT_VOICE } from '@/lib/constants';

export async function POST(req: Request) {
  try {
    const { text, voice = DEFAULT_VOICE } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Debug log
    console.log('Voice API Request:', { text: text.substring(0, 50) + '...', voice });

    // Validate Ultravox key
    if (!ULTRAVOX_HEADERS.Authorization || ULTRAVOX_HEADERS.Authorization === 'Bearer ') {
      console.error('Missing ULTRAVOX_API_KEY in environment');
      return NextResponse.json({ error: 'Ultravox API key not configured' }, { status: 500 });
    }

    // Request voice synthesis from Ultravox
    let response;
    try {
      response = await axios.post(
        `${ULTRAVOX_API_URL}/tts`,
        {
          text,
          voice,
          format: 'mp3'
        },
        { headers: ULTRAVOX_HEADERS }
      );
    } catch (err: any) {
      console.error('Ultravox request failed:', err?.response?.data ?? err?.message ?? err);
      const msg = err?.response?.data?.message || err?.message || 'Ultravox request failed';
      return NextResponse.json({ error: msg }, { status: 502 });
    }

    // Return the audio URL from Ultravox (some APIs return different fields)
    const audioUrl = response?.data?.audio_url || response?.data?.url || response?.data?.audioUrl;
    if (!audioUrl) {
      console.error('Ultravox returned unexpected response:', response?.data);
      return NextResponse.json({ error: 'Ultravox did not return audio URL' }, { status: 502 });
    }

    return NextResponse.json({ audioUrl });
  } catch (error) {
    console.error('Error in voice API:', error);
    return NextResponse.json(
      { error: 'Failed to process voice request' },
      { status: 500 }
    );
  }
}