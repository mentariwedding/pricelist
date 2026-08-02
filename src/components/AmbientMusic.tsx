"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";

export function AmbientMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriedAutoplay, setHasTriedAutoplay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;

    // Browsers may reject unmuted autoplay. The visible control remains available.
    const startAmbientMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      } finally {
        setHasTriedAutoplay(true);
      }
    };

    startAmbientMusic();
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/yiruma.mp3" loop preload="metadata" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      <button
        type="button"
        onClick={toggleMusic}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Matikan musik ambient" : "Nyalakan musik ambient"}
        className="fixed bottom-[calc(var(--pl-dock-space)+0.75rem)] left-3 z-30 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-charcoal/90 px-3 py-2 text-[8px] font-semibold tracking-[0.12em] text-gold shadow-lg backdrop-blur-md transition hover:border-gold hover:bg-charcoal md:bottom-5 md:left-5 md:z-50"
      >
        {isPlaying ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
        <span>{isPlaying ? "MUSIK ON" : hasTriedAutoplay ? "MUSIK OFF" : "MUSIK"}</span>
        {isPlaying && <Music2 className="h-3 w-3 animate-pulse" />}
      </button>
    </>
  );
}
