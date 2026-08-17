"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import ParticleCanvas from "@/components/ParticleCanvas";
import AudioPlayer, { AudioPlayerRef } from "@/components/AudioPlayer";
import OpeningScreen from "@/components/OpeningScreen";
import BirthdayHero from "@/components/BirthdayHero";
import PhotoRevealSection from "@/components/PhotoRevealSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import BestFriendFiles from "@/components/BestFriendFiles";
import AppreciationCards from "@/components/AppreciationCards";
import MemoryReel from "@/components/MemoryReel";
import BirthdayLetter from "@/components/BirthdayLetter";
import GiftReveal from "@/components/GiftReveal";
import FinalReveal from "@/components/FinalReveal";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [isExperienceStarted, setIsExperienceStarted] = useState(false);
  const audioRef = useRef<AudioPlayerRef | null>(null);

  const handleStartExperience = () => {
    setIsExperienceStarted(true);
    if (audioRef.current) {
      audioRef.current.startAudio();
    }
  };

  return (
    <main className="relative min-h-screen bg-dark text-warm-cream overflow-x-hidden selection:bg-burgundy selection:text-warm-cream">
      {/* Background Interactive Particles */}
      <ParticleCanvas />

      {/* Floating Audio Manager */}
      <AudioPlayer
        ref={audioRef}
        musicPath={birthdayData.musicPath}
        isStarted={isExperienceStarted}
      />

      {/* Phase 1-2: Cinematic Opening Overlay */}
      <AnimatePresence>
        {!isExperienceStarted && (
          <OpeningScreen
            greeting={birthdayData.openingSequence.greeting}
            subtext={birthdayData.openingSequence.subtext}
            buttonText={birthdayData.openingSequence.buttonText}
            onStart={handleStartExperience}
          />
        )}
      </AnimatePresence>

      {/* Main Interactive Story Journey */}
      {isExperienceStarted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex flex-col gap-8"
        >
          {/* Phase 4: Birthday Hero */}
          <BirthdayHero
            name={birthdayData.name}
            subtitle={birthdayData.subtitle}
          />

          {/* Phase 5: Floating Photo Reveal */}
          <PhotoRevealSection
            photos={birthdayData.photos}
            quotes={birthdayData.interstitialQuotes}
          />

          {/* Phase 6: Memory Timeline */}
          <MemoryTimeline memories={birthdayData.timelineMemories} />

          {/* Phase 7: Best Friend Files */}
          <BestFriendFiles files={birthdayData.bestFriendFiles} />

          {/* Phase 8: Appreciation Cards */}
          <AppreciationCards cards={birthdayData.appreciationCards} />

          {/* Phase 9: Optional Video Reel */}
          <MemoryReel videos={birthdayData.videos} />

          {/* Phase 10: Interactive Personal Letter */}
          <BirthdayLetter letter={birthdayData.personalLetter} />

          {/* Phase 11: Interactive Gift Box Reveal */}
          <GiftReveal giftData={birthdayData.giftSection} />

          {/* Phase 12: Final Cinematic Reveal */}
          <FinalReveal finalData={birthdayData.finalSection} />

          {/* Scroll Progress & Back to Top */}
          <BackToTop />
        </motion.div>
      )}
    </main>
  );
}
