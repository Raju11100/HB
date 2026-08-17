"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

interface BirthdayHeroProps {
  name: string;
  subtitle: string;
}

export default function BirthdayHero({ name, subtitle }: BirthdayHeroProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-between px-6 py-16 text-center select-none overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-radial from-warm-gold/15 via-burgundy/10 to-transparent blur-3xl pointer-events-none" />

      <div className="my-auto flex flex-col items-center gap-6 max-w-xl mx-auto z-10">
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-warm-gold/20 text-xs sm:text-sm text-warm-gold tracking-widest uppercase font-medium"
        >
          <SparkleIcon className="w-3.5 h-3.5" />
          <span>A Special Day</span>
        </motion.div>

        {/* Main Title "Happy Birthday" */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-warm-sand font-normal tracking-wide"
        >
          Happy Birthday
        </motion.h1>

        {/* Name Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative py-2"
        >
          <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-warm-cream via-warm-gold to-warm-sand bg-clip-text text-transparent drop-shadow-lg tracking-tight">
            {name}
          </span>
          <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-warm-gold/50 to-transparent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Subtitle "Today is all about you." */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-warm-muted text-base sm:text-lg font-light tracking-wide max-w-xs sm:max-w-md"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="z-10 flex flex-col items-center gap-2 text-warm-muted/70 hover:text-warm-gold transition-colors duration-300 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.85,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-xs tracking-widest uppercase font-light">
          Scroll to continue
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-warm-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}
