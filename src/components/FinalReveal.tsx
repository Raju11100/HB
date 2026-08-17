"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

interface FinalSectionData {
  mainTitle: string;
  subtitle: string;
  quote: string;
  finalSignOff: string;
  heroPhotoUrl: string;
}

interface FinalRevealProps {
  finalData: FinalSectionData;
}

export default function FinalReveal({ finalData }: FinalRevealProps) {
  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 flex flex-col items-center justify-center text-center select-none overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full bg-radial from-warm-gold/15 via-burgundy/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8">
        {/* Top Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-12 h-12 rounded-full bg-burgundy/30 border border-warm-gold/30 flex items-center justify-center text-warm-gold"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Hero Photo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full max-w-md aspect-[3/4] p-3 rounded-3xl glass-card border border-warm-gold/30 shadow-2xl overflow-hidden"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-lighter">
            <Image
              src={finalData.heroPhotoUrl}
              alt="Final Birthday Reveal"
              fill
              sizes="(max-width: 640px) 100vw, 440px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-70" />
          </div>
        </motion.div>

        {/* Closing Titles */}
        <div className="flex flex-col gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl font-bold tracking-wider text-warm-cream"
          >
            {finalData.mainTitle}
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-warm-cream via-warm-gold to-warm-sand bg-clip-text text-transparent"
          >
            {finalData.subtitle}
          </motion.span>
        </div>

        {/* Closing Emotional Quotes */}
        <div className="flex flex-col gap-3 max-w-md">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-lg sm:text-xl text-warm-sand font-light italic"
          >
            "{finalData.quote}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-warm-gold font-normal"
          >
            {finalData.finalSignOff}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xs text-warm-muted uppercase tracking-widest font-light mt-4"
        >
          Made specifically for you • With memories & laughter
        </motion.p>
      </div>
    </section>
  );
}
