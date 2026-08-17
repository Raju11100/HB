"use client";

import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Smile, MessageSquare, Flame } from "lucide-react";
import { AppreciationCardItem } from "@/data/birthdayData";

interface AppreciationCardsProps {
  cards: AppreciationCardItem[];
}

export default function AppreciationCards({ cards }: AppreciationCardsProps) {
  const icons = [Smile, MessageSquare, Sparkles, Star, Flame];

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-md mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-widest text-warm-gold font-medium"
        >
          Reasons You're The Best
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-warm-cream font-normal mt-1"
        >
          Things I Appreciate About You
        </motion.h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const IconComponent = icons[index % icons.length];
          const isFullSpan = index === cards.length - 1 && cards.length % 2 !== 0;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className={`group relative glass-card p-6 rounded-2xl border border-warm-gold/20 hover:border-warm-gold/50 transition-all duration-500 hover:shadow-glow-gold hover:-translate-y-1 flex flex-col justify-between ${
                isFullSpan ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Card Number Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-warm-gold/60 group-hover:text-warm-gold transition-colors">
                  {card.number}
                </span>
                <div className="w-9 h-9 rounded-full bg-dark-lighter border border-warm-gold/20 flex items-center justify-center text-warm-gold group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-lg sm:text-xl text-warm-cream font-medium">
                  {card.title}
                </h3>
                <p className="text-sm text-warm-muted leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Bottom Decorative Gold Bar */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-warm-gold via-warm-amber to-transparent transition-all duration-500 rounded-full" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
