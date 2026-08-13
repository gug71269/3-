import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMp3Active, setIsMp3Active] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Traditional Korean Pentatonic Scale (궁상각치우) fallback
  const scale = [261.63, 293.66, 349.23, 392.00, 440.00, 523.25, 587.33];

  useEffect(() => {
    // Load /bgm.mp3 server file
    const audio = new Audio('/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  const startSynthMusic = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    setIsPlaying(true);
    setIsMp3Active(false);

    let step = 0;
    const playNote = () => {
      if (!audioCtxRef.current) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freq = scale[step % scale.length];
      step = (step + Math.floor(Math.random() * 3) + 1) % scale.length;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);

      const nextDelay = 900 + Math.random() * 900;
      timerRef.current = window.setTimeout(playNote, nextDelay);
    };

    playNote();
  };

  const startMusic = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMp3Active(true);
        return;
      } catch {
        startSynthMusic();
      }
    } else {
      startSynthMusic();
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
    setIsMp3Active(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-batang transition-all duration-300 border ${
        isPlaying
          ? 'bg-[#9D3027] text-[#F5F0E6] border-[#9D3027] shadow-sm animate-pulse'
          : 'bg-[#24211D]/10 text-[#24211D] border-[#B4975A]/40 hover:bg-[#24211D]/20'
      }`}
      title={isPlaying ? (isMp3Active ? 'BGM 재생 중' : 'BGM 재생 중 (전통 선율)') : 'BGM 켜기'}
      aria-label="배경음악 켜기/끄기"
    >
      <Music className="w-3.5 h-3.5" />
      <span>{isPlaying ? '음악 켜짐' : 'BGM 켜기'}</span>
      {isPlaying ? <Volume2 className="w-3.5 h-3.5 ml-0.5" /> : <VolumeX className="w-3.5 h-3.5 ml-0.5 opacity-60" />}
    </button>
  );
};
