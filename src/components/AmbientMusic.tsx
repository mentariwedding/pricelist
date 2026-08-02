"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";

type AmbientMusicState = {
  isPlaying: boolean;
  toggleMusic: () => Promise<void>;
};

const AmbientMusicContext = createContext<AmbientMusicState | null>(null);

export function AmbientMusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [startMusic]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;

    // Attempt autoplay first. If it is blocked, the first interaction unlocks it.
    startMusic();
    const unlockOnFirstInteraction = (event: PointerEvent) => {
      if ((event.target as HTMLElement | null)?.closest("[data-ambient-control]")) return;
      startMusic();
    };
    window.addEventListener("pointerdown", unlockOnFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", unlockOnFirstInteraction);
  }, [startMusic]);

  return (
    <AmbientMusicContext.Provider value={{ isPlaying, toggleMusic }}>
      <audio ref={audioRef} src="/music/yiruma.mp3" loop preload="auto" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      {children}
    </AmbientMusicContext.Provider>
  );
}

export function useAmbientMusic() {
  const context = useContext(AmbientMusicContext);
  if (!context) throw new Error("useAmbientMusic must be used within AmbientMusicProvider");
  return context;
}
