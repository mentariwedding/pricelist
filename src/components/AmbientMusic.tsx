"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";

type AmbientMusicState = {
  isPlaying: boolean;
  volume: number;
  toggleMusic: () => Promise<void>;
  setVolume: (volume: number) => void;
};

const AmbientMusicContext = createContext<AmbientMusicState | null>(null);

export function AmbientMusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.75);

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

  const setVolume = useCallback((nextVolume: number) => {
    const normalized = Math.max(0, Math.min(1, nextVolume));
    const audio = audioRef.current;
    if (audio) audio.volume = normalized;
    setVolumeState(normalized);
    window.localStorage.setItem("mentari-ambient-volume", String(normalized));
  }, []);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      window.localStorage.setItem("mentari-ambient-music", "on");
      await startMusic();
    } else {
      audio.pause();
      window.localStorage.setItem("mentari-ambient-music", "off");
      setIsPlaying(false);
    }
  }, [startMusic]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const storedVolume = Number(window.localStorage.getItem("mentari-ambient-volume"));
    const initialVolume = Number.isFinite(storedVolume) && storedVolume > 0 && storedVolume <= 1 ? storedVolume : 0.75;
    audio.volume = initialVolume;
    setVolumeState(initialVolume);

    const savedPreference = window.localStorage.getItem("mentari-ambient-music");
    // Respect a previous decision to keep the experience silent.
    if (savedPreference === "off") return;

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
    <AmbientMusicContext.Provider value={{ isPlaying, volume, toggleMusic, setVolume }}>
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
