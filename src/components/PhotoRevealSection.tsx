"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MemoryPhoto } from "@/data/birthdayData";

interface PhotoRevealSectionProps {
  photos: MemoryPhoto[];
  quotes: string[];
}

export default function PhotoRevealSection({
  photos,
  quotes,
}: PhotoRevealSectionProps) {
  // Pair photos with interstitial text quotes
  const photoGroup1 = photos.slice(0, 3);
  const photoGroup2 = photos.slice(3, 7);

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col gap-24 select-none">
      {/* Group 1 Title */}
      <div className="text-center max-w-md mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-widest text-warm-gold font-medium"
        >
          Moments Frozen in Time
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-2xl sm:text-4xl text-warm-cream font-normal mt-2"
        >
          Floating Memories
        </motion.h2>
      </div>

      {/* Floating Photo Group 1 */}
      <div className="flex flex-col gap-12 sm:gap-16">
        {photoGroup1.map((photo, index) => {
          // Alternate rotation angles for floating photo effect
          const rotations = [-2.5, 3, -1.8];
          const rotation = rotations[index % rotations.length];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                isEven ? "sm:items-start" : "sm:items-end"
              } items-center`}
            >
              <div className="group relative max-w-[320px] sm:max-w-[380px] p-3 rounded-2xl bg-[#14121c] border border-warm-gold/20 shadow-photo-card transition-all duration-500 hover:border-warm-gold/50 hover:shadow-glow-gold hover:-translate-y-2">
                {/* Physical Photo Frame */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-dark-lighter">
                  <Image
                    src={photo.url}
                    alt={photo.caption || "Birthday Memory"}
                    fill
                    sizes="(max-width: 640px) 320px, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Caption & Tag */}
                <div className="mt-3 px-1 flex flex-col gap-1">
                  {photo.dateTag && (
                    <span className="text-[11px] font-mono tracking-wider text-warm-gold uppercase">
                      {photo.dateTag}
                    </span>
                  )}
                  <p className="text-sm font-light text-warm-sand leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interstitial Quotes Section 1 */}
      <div className="my-8 py-12 flex flex-col items-center justify-center text-center gap-4 border-y border-warm-gold/10 bg-dark-card/40 rounded-3xl backdrop-blur-sm px-6">
        {quotes.slice(0, 4).map((quote, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`font-serif ${
              idx === 3
                ? "text-xl sm:text-2xl text-warm-gold font-normal"
                : "text-lg sm:text-xl text-warm-cream/90 font-light"
            }`}
          >
            {quote}
          </motion.p>
        ))}
      </div>

      {/* Floating Photo Group 2 */}
      <div className="flex flex-col gap-12 sm:gap-16">
        {photoGroup2.map((photo, index) => {
          const rotations = [2.2, -3.2, 1.5, -2];
          const rotation = rotations[index % rotations.length];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                isEven ? "sm:items-end" : "sm:items-start"
              } items-center`}
            >
              <div className="group relative max-w-[320px] sm:max-w-[380px] p-3 rounded-2xl bg-[#14121c] border border-warm-gold/20 shadow-photo-card transition-all duration-500 hover:border-warm-gold/50 hover:shadow-glow-gold hover:-translate-y-2">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-dark-lighter">
                  <Image
                    src={photo.url}
                    alt={photo.caption || "Birthday Memory"}
                    fill
                    sizes="(max-width: 640px) 320px, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="mt-3 px-1 flex flex-col gap-1">
                  {photo.dateTag && (
                    <span className="text-[11px] font-mono tracking-wider text-warm-gold uppercase">
                      {photo.dateTag}
                    </span>
                  )}
                  <p className="text-sm font-light text-warm-sand leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interstitial Quotes Section 2 */}
      {quotes.length > 4 && (
        <div className="my-4 py-8 flex flex-col items-center justify-center text-center gap-3">
          {quotes.slice(4).map((quote, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: idx * 0.25 }}
              className="font-serif text-xl sm:text-3xl text-warm-gold italic tracking-wide"
            >
              "{quote}"
            </motion.p>
          ))}
        </div>
      )}
    </section>
  );
}
