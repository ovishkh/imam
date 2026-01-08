import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  isListening: boolean;
}

const VoiceVisualizer: React.FC<Props> = ({ isListening }) => {
  const [audioData, setAudioData] = useState<number[]>(Array(5).fill(0));
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isListening) {
      startAudioAnalysis();
    } else {
      stopAudioAnalysis();
    }
    return () => stopAudioAnalysis();
  }, [isListening]);

  const startAudioAnalysis = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      
      const source = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current.fftSize = 32;
      source.connect(analyserRef.current);
      
      updateAudioData();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopAudioAnalysis = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
  };

  const updateAudioData = () => {
    if (!analyserRef.current) return;

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);

    // Get 5 sample points from the frequency data
    const samplePoints = Array(5).fill(0).map((_, i) => {
      const index = Math.floor(i * (dataArray.length / 5));
      return dataArray[index] / 255; // Normalize to 0-1
    });

    setAudioData(samplePoints);
    animationFrameRef.current = requestAnimationFrame(updateAudioData);
  };

  return (
    <div className="flex items-center justify-center gap-1 h-16">
      {audioData.map((value, i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: isListening ? Math.max(0.2, value) : 0.2,
            backgroundColor: isListening 
              ? `rgb(${96 + value * 80}, ${165 + value * 80}, ${250})`
              : "#E2E8F0"
          }}
          transition={{ duration: 0.1 }}
          className="w-1 h-full rounded-full"
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
};

export default VoiceVisualizer;