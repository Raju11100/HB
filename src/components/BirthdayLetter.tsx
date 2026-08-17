"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, X, Heart } from "lucide-react";
import { LetterData } from "@/data/birthdayData";

interface BirthdayLetterProps {
  letter: LetterData;
}

export default function BirthdayLetter({ letter }: BirthdayLetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-2xl mx-auto text-center select-none">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-warm-gold/20 text-xs text-warm-gold tracking-widest uppercase font-medium mb-4"
      >
        <Mail className="w-3.5 h-3.5 text-warm-gold" />
        <span>Personal Letter</span>
      </motion.div>

      {/* Teaser Headers */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-xl sm:text-2xl text-warm-gold italic mb-2"
      >
        {letter.teaser}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-serif text-2xl sm:text-4xl text-warm-cream font-normal mb-8 max-w-md mx-auto leading-tight"
      >
        {letter.subTeaser}
      </motion.h2>

      {/* Envelope & Open Action */}
      <div className="relative flex justify-center">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer relative w-full max-w-sm aspect-[1.5/1] rounded-3xl glass-card border-2 border-warm-gold/30 hover:border-warm-gold shadow-glow-burgundy flex flex-col items-center justify-center p-6 gap-4 overflow-hidden transition-all duration-300"
          >
            {/* Wax Seal Ornaments */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-burgundy-light via-burgundy to-dark border-2 border-warm-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-warm-gold" />
              <div className="absolute inset-0 rounded-full bg-warm-gold/10 animate-ping" />
            </div>

            <span className="font-serif text-lg text-warm-cream group-hover:text-warm-gold transition-colors font-medium">
              {letter.buttonText}
            </span>

            <span className="text-xs text-warm-muted font-light">
              Tap envelope to break the seal ✨
            </span>
          </motion.div>
        ) : (
          /* Premium Stationery Paper Card */
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full rounded-3xl bg-[#fdf9f4] p-6 sm:p-10 text-left text-[#211e2b] shadow-2xl border-2 border-warm-gold/50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark/10 text-dark flex items-center justify-center hover:bg-dark hover:text-warm-cream transition-colors z-10"
              aria-label="Close letter"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Letter Head Banner */}
            <div className="border-b border-[#e5dcd0] pb-4 mb-6 flex items-center justify-between">
              <span className="font-mono text-[11px] text-dark/50 uppercase tracking-widest font-semibold">
                Personal Note • For Anamta Only
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-burgundy" />
            </div>

            {/* Handwritten Greeting Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-handwritten text-4xl sm:text-5xl font-bold text-[#6b2737] mb-6"
            >
              {letter.heading}
            </motion.h3>

            {/* Paragraphs with Paragraph-based Reveal */}
            <div className="flex flex-col gap-5 text-base sm:text-lg text-dark/90 leading-relaxed font-sans font-light">
              {letter.bodyParagraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.7, delay: (idx % 3) * 0.1 }}
                  className="whitespace-pre-line"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Final Letter Moment */}
            <div className="mt-10 pt-8 border-t border-[#e5dcd0] flex flex-col gap-4 text-center sm:text-left">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-xl sm:text-2xl text-[#6b2737] font-semibold italic"
              >
                "{letter.finalLines.line1}"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg text-dark/70 font-light"
              >
                {letter.finalLines.line2}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="font-serif text-2xl sm:text-3xl text-dark font-bold tracking-wide"
              >
                {letter.finalLines.line3}
              </motion.p>

              {/* Handwritten Signature */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                className="mt-4 pt-2 font-handwritten text-3xl sm:text-4xl text-[#6b2737] font-bold"
              >
                {letter.signOff}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
