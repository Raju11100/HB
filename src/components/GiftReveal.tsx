"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, X, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

interface GiftSectionData {
  preText: string;
  heading: string;
  buttonText: string;
  modalTitle: string;
  modalMessage: string;
}

interface GiftRevealProps {
  giftData: GiftSectionData;
}

export default function GiftReveal({ giftData }: GiftRevealProps) {
  const [isOpened, setIsOpened] = useState(false);

  const triggerConfetti = () => {
    setIsOpened(true);

    // Dynamic elegant confetti burst
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#e2be72", "#6b2737", "#fdf8f3", "#f3d794"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-xl mx-auto text-center select-none">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-xl text-warm-gold italic mb-2"
      >
        {giftData.preText}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-2xl sm:text-4xl text-warm-cream font-normal mb-8"
      >
        {giftData.heading}
      </motion.h2>

      {/* Gift Box Interactive Trigger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerConfetti}
          className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl glass-card border-2 border-warm-gold/40 hover:border-warm-gold shadow-glow-gold transition-all duration-300 active:scale-95 focus:outline-none"
        >
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-warm-gold to-burgundy-light flex items-center justify-center text-dark shadow-xl group-hover:animate-bounce">
            <Gift className="w-10 h-10 stroke-[2.2]" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-warm-amber animate-spin" />
          </div>

          <span className="font-serif text-lg text-warm-cream font-medium tracking-wide">
            {giftData.buttonText}
          </span>
        </motion.button>
      </motion.div>

      {/* Opened Surprise Modal */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/85 backdrop-blur-lg"
            onClick={() => setIsOpened(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md glass-card rounded-3xl p-8 border border-warm-gold/40 shadow-glow-gold text-center flex flex-col items-center gap-4"
            >
              <button
                onClick={() => setIsOpened(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-lighter text-warm-muted hover:text-warm-cream flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-burgundy/40 border border-warm-gold/40 flex items-center justify-center text-warm-gold">
                <PartyPopper className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl text-warm-cream font-bold">
                {giftData.modalTitle}
              </h3>

              <p className="text-base text-warm-sand leading-relaxed font-light">
                {giftData.modalMessage}
              </p>

              <button
                onClick={() => setIsOpened(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-warm-gold text-dark font-medium text-sm hover:bg-warm-amber transition-colors shadow-lg"
              >
                Close Surprise ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
