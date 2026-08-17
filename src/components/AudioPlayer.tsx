"use client";

import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { Volume2, VolumeX, Music, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface AudioPlayerRef {
  startAudio: () => void;
}

interface AudioPlayerProps {
  musicPath: string;
  isStarted: boolean;
}

const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(
  ({ musicPath, isStarted }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [usingFallbackSynth, setUsingFallbackSynth] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const synthCtxRef = useRef<AudioContext | null>(null);
    const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Acoustic Web Audio API Fallback generator for a soothing ambient melody
    const startFallbackSynth = () => {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        
        const ctx = new AudioCtx();
        synthCtxRef.current = ctx;

        // Pentatonic warm chords: C4, E4, G4, A4, B4, C5, E5
        const notes = [261.63, 329.63, 392.00, 440.00, 493.88, 523.25, 659.25];
        let step = 0;

        const playNote = () => {
          if (ctx.state === "suspended") ctx.resume();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = "sine";
          osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);
          
          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
          
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 1.9);

          step = (step + 1) % notes.length;
        };

        playNote();
        synthIntervalRef.current = setInterval(playNote, 600);
        setUsingFallbackSynth(true);
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio Context fallback error:", err);
      }
    };

    const stopFallbackSynth = () => {
      if (synthIntervalRef.current) {
        clearInterval(synthIntervalRef.current);
        synthIntervalRef.current = null;
      }
      if (synthCtxRef.current) {
        synthCtxRef.current.close().catch(() => {});
        synthCtxRef.current = null;
      }
      setUsingFallbackSynth(false);
    };

    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setUsingFallbackSynth(false);
          })
          .catch((err) => {
            console.log("MP3 play fallback triggered:", err);
            startFallbackSynth();
          });
      } else {
        startFallbackSynth();
      }
    };

    useImperativeHandle(ref, () => ({
      startAudio,
    }));

    const togglePlay = () => {
      if (usingFallbackSynth) {
        if (isPlaying) {
          if (synthCtxRef.current) synthCtxRef.current.suspend();
          setIsPlaying(false);
        } else {
          if (synthCtxRef.current) synthCtxRef.current.resume();
          setIsPlaying(true);
        }
        return;
      }

      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(startFallbackSynth);
      }
    };

    const toggleMute = () => {
      if (audioRef.current) {
        audioRef.current.muted = !isMuted;
      }
      setIsMuted(!isMuted);
    };

    useEffect(() => {
      return () => {
        stopFallbackSynth();
      };
    }, []);

    return (
      <>
        {/* Hidden HTML5 Audio Element */}
        <audio
          ref={audioRef}
          src={musicPath}
          loop
          preload="auto"
          onEnded={() => setIsPlaying(false)}
          onError={() => {
            console.log("Audio file error, ready for fallback synth.");
          }}
        />

        {/* Floating Controller Widget */}
        <AnimatePresence>
          {isStarted && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="fixed top-4 right-4 z-50 flex items-center gap-2 glass-pill px-3 py-2 rounded-full shadow-lg border border-warm-gold/20"
            >
              {/* Spinning Vinyl Icon */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-dark/80 text-warm-gold hover:text-warm-cream transition-colors focus:outline-none"
              >
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="flex items-center justify-center"
                >
                  <Music className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Animated Equalizer Bars */}
              <div className="flex items-end gap-[3px] h-3 px-1" onClick={togglePlay} role="button">
                {[0.4, 0.9, 0.5, 0.7].map((h, idx) => (
                  <motion.span
                    key={idx}
                    animate={
                      isPlaying && !isMuted
                        ? { height: ["30%", "100%", "40%", "85%", "30%"] }
                        : { height: "30%" }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 0.7 + idx * 0.25,
                      ease: "easeInOut",
                    }}
                    className="w-[2px] bg-warm-gold rounded-full"
                    style={{ height: `${h * 100}%` }}
                  />
                ))}
              </div>

              {/* Mute / Unmute Button */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="p-1 text-warm-muted hover:text-warm-cream transition-colors focus:outline-none"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-burgundy-light" />
                ) : (
                  <Volume2 className="w-4 h-4 text-warm-gold" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
);

AudioPlayer.displayName = "AudioPlayer";

export default AudioPlayer;
