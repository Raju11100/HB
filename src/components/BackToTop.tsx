"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-dark/50 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-burgundy via-warm-gold to-warm-amber transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full glass-pill border border-warm-gold/20 text-warm-gold hover:text-warm-cream flex items-center justify-center shadow-lg active:scale-95 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
