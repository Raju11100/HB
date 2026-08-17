"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock } from "lucide-react";

interface TimelineMemory {
  id: string;
  title: string;
  dateOrTag: string;
  description: string;
  imageUrl: string;
}

interface MemoryTimelineProps {
  memories: TimelineMemory[];
}

export default function MemoryTimeline({ memories }: MemoryTimelineProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-3xl mx-auto select-none">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-warm-gold/20 text-xs text-warm-gold tracking-widest uppercase font-medium mb-3"
        >
          <Clock className="w-3.5 h-3.5 text-warm-gold" />
          <span>Timeline</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-warm-cream font-normal"
        >
          A Few Memories...
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-warm-muted text-sm mt-2 max-w-xs mx-auto font-light"
        >
          Moments we collected along the way.
        </motion.p>
      </div>

      {/* Timeline Tree Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-warm-gold/30 flex flex-col gap-12 sm:gap-16">
        {memories.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark border-2 border-warm-gold group-hover:scale-125 group-hover:bg-warm-gold transition-all duration-300 shadow-glow-gold" />

            {/* Timeline Card */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-warm-gold/15 hover:border-warm-gold/40 transition-all duration-300 hover:shadow-glow-gold flex flex-col sm:flex-row gap-4 items-start">
              {/* Photo Preview */}
              <div className="relative w-full sm:w-36 aspect-[4/3] rounded-xl overflow-hidden bg-dark-lighter shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Information */}
              <div className="flex flex-col gap-1.5 flex-1">
                <span className="text-[11px] font-mono tracking-wider text-warm-gold uppercase font-medium">
                  {item.dateOrTag}
                </span>
                <h3 className="font-serif text-lg text-warm-cream font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
