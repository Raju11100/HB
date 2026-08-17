"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Play, X } from "lucide-react";
import Image from "next/image";
import { VideoMemoryItem } from "@/data/birthdayData";

interface MemoryReelProps {
  videos: VideoMemoryItem[];
}

export default function MemoryReel({ videos }: MemoryReelProps) {
  const [activeVideo, setActiveVideo] = useState<VideoMemoryItem | null>(null);

  // Gracefully hide section if array is empty
  if (!videos || videos.length === 0) return null;

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto select-none">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-warm-gold/20 text-xs text-warm-gold tracking-widest uppercase font-medium mb-3"
        >
          <Film className="w-3.5 h-3.5 text-warm-gold" />
          <span>Motion Memories</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-warm-cream font-normal"
        >
          Memory Reel
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((vid, index) => (
          <motion.div
            key={vid.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            onClick={() => setActiveVideo(vid)}
            className="group relative cursor-pointer glass-card p-3 rounded-2xl border border-warm-gold/20 hover:border-warm-gold/50 transition-all duration-300 shadow-photo-card"
          >
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-dark-lighter">
              {vid.posterUrl ? (
                <Image
                  src={vid.posterUrl}
                  alt={vid.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-dark-card flex items-center justify-center text-warm-muted">
                  <Film className="w-8 h-8 opacity-40" />
                </div>
              )}
              {/* Play Overlay Button */}
              <div className="absolute inset-0 bg-dark/40 flex items-center justify-center group-hover:bg-dark/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-warm-gold/90 text-dark flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>
            <div className="mt-3 px-1">
              <h3 className="font-serif text-base text-warm-cream font-medium">
                {vid.title}
              </h3>
              {vid.caption && (
                <p className="text-xs text-warm-muted font-light mt-0.5">
                  {vid.caption}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl glass-card rounded-3xl p-4 border border-warm-gold/30 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-dark/80 text-warm-cream flex items-center justify-center hover:bg-warm-gold hover:text-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mt-2">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-serif text-lg text-warm-cream font-medium">
                  {activeVideo.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
