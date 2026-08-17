"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Sparkles, AlertCircle } from "lucide-react";
import { BestFriendFile } from "@/data/birthdayData";

interface BestFriendFilesProps {
  files: BestFriendFile;
}

export default function BestFriendFiles({ files }: BestFriendFilesProps) {
  const statItems = [
    { label: "NAME", value: files.name, color: "text-warm-cream" },
    { label: "STATUS", value: files.status, color: "text-warm-gold font-bold" },
    { label: "LOCATION", value: files.location, color: "text-warm-sand" },
    { label: "CHAOS LEVEL", value: files.chaosLevel, color: "text-burgundy-light font-bold" },
    { label: "DRAMA LEVEL", value: files.dramaLevel, color: "text-warm-amber italic" },
    { label: "LAUGHING FREQUENCY", value: files.laughFrequency, color: "text-warm-gold font-medium" },
    { label: "REPLACEMENT AVAILABLE", value: files.replacementAvailable, color: "text-red-400 font-bold" },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-2xl mx-auto select-none">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-burgundy/40 text-xs text-warm-gold tracking-widest uppercase font-mono mb-3"
        >
          <Terminal className="w-3.5 h-3.5 text-warm-gold" />
          <span>CLASSIFIED DATA</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-warm-cream tracking-wide"
        >
          THE BEST FRIEND FILES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-warm-muted text-xs font-mono uppercase tracking-widest mt-1"
        >
          [Top Secret • Strictly Non-Transferable]
        </motion.p>
      </div>

      {/* Dossier Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass-card p-6 sm:p-8 rounded-3xl border border-warm-gold/30 shadow-glow-burgundy overflow-hidden"
      >
        {/* Subtle Tech Corner Markers */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-warm-gold/40">
          SEC_ID // 00892
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-warm-gold/40 flex items-center gap-1">
          <ShieldAlert className="w-3 h-3 text-warm-gold/60" /> CONFIDENTIAL
        </div>

        {/* Header Ribbon */}
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-warm-gold/15">
          <div className="w-10 h-10 rounded-full bg-burgundy/30 border border-warm-gold/30 flex items-center justify-center text-warm-gold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg text-warm-cream font-medium">
              Subject Profile: {files.name}
            </h3>
            <p className="text-xs text-warm-muted font-mono">
              STATUS_CHECK: ONLINE • CELEBRATING
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col gap-4">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-dark-lighter/50 border border-warm-gold/10 gap-1 hover:border-warm-gold/30 transition-colors"
            >
              <span className="text-xs font-mono text-warm-muted uppercase tracking-wider">
                {stat.label}
              </span>
              <span className={`text-sm sm:text-base font-sans ${stat.color}`}>
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer Warning */}
        <div className="mt-6 pt-4 border-t border-warm-gold/15 flex items-center justify-between text-[11px] font-mono text-warm-muted/80">
          <span className="flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-warm-gold" /> System Note: No refunds or exchanges allowed.
          </span>
          <span>100% Unique</span>
        </div>
      </motion.div>
    </section>
  );
}
