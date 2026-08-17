"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface OpeningScreenProps {
  greeting: string;
  subtext: string;
  buttonText: string;
  onStart: () => void;
}

export default function OpeningScreen({
  greeting,
  subtext,
  buttonText,
  onStart,
}: OpeningScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timed sequence for text appearance
    const timer1 = setTimeout(() => setStep(1), 800);
    const timer2 = setTimeout(() => setStep(2), 2400);
    const timer3 = setTimeout(() => setStep(3), 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07060a] px-6 text-center overflow-hidden selection:bg-burgundy select-none"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-radial from-burgundy/20 via-warm-gold/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-6">
        {/* Step 1: "Hey..." */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.h1
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-cream font-light tracking-wide"
            >
              {greeting}
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Step 2: "I made something specifically for you." */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="text-warm-muted text-lg sm:text-xl font-light leading-relaxed max-w-xs sm:max-w-sm"
            >
              {subtext}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Step 3: "Tap to begin ✨" Button */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mt-6"
            >
              <button
                onClick={onStart}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full glass-pill text-warm-gold hover:text-warm-cream border border-warm-gold/30 hover:border-warm-gold/70 transition-all duration-300 shadow-glow-gold active:scale-95 focus:outline-none"
              >
                <Sparkles className="w-5 h-5 text-warm-gold group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-base font-medium tracking-wide">
                  {buttonText}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Bottom Ambient Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 3 ? 0.5 : 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-8 text-xs text-warm-muted tracking-widest uppercase font-light"
      >
        Sound Recommended • Best Experienced on Mobile
      </motion.p>
    </motion.div>
  );
}
