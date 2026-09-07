import React from 'react';
import { useCountdown } from './hooks/useCountdown';
import { birthdayData } from './config/birthdayData';
import { ParticleCanvas } from './components/ParticleCanvas';
import { ClassifiedHeader } from './components/ClassifiedHeader';
import { HeroSequence } from './components/HeroSequence';
import { CountdownSection } from './components/CountdownSection';
import { TimeProgress } from './components/TimeProgress';
import { RoyalEnvelope } from './components/RoyalEnvelope';
import { MysteryShayari } from './components/MysteryShayari';
import { UrduTreasury } from './components/UrduTreasury';
import { CipherPuzzle } from './components/CipherPuzzle';
import { SecretFiles } from './components/SecretFiles';
import { GuessingSection } from './components/GuessingSection';
import { LockedSurprise } from './components/LockedSurprise';
import { PhotoTeaser } from './components/PhotoTeaser';
import { AudioTeaserPlayer } from './components/AudioTeaserPlayer';
import { SecretClues, FooterClue } from './components/SecretClues';
import { BirthdayUnlocked } from './components/BirthdayUnlocked';
import { DevPreviewBar } from './components/DevPreviewBar';

export const App: React.FC = () => {
  const { timeRemaining, simulationMode, setSimulationMode } = useCountdown(
    birthdayData.birthdayDate
  );

  const handleScrollToCountdown = () => {
    const el = document.getElementById('countdown-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterSurprise = () => {
    window.location.href = birthdayData.futureSurpriseUrl;
  };

  return (
    <div className="min-h-screen bg-[#08040a] text-rose-blush relative selection:bg-rose-petal/30 selection:text-white overflow-x-hidden">
      {/* Floating Romantic Rose Petal & Fairy Dust Canvas */}
      <ParticleCanvas />

      {/* Subtle cinematic film grain overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Top Classified Status Header */}
      <ClassifiedHeader phase={timeRemaining.phase} />

      {/* Main Experience: Locked Teaser vs Birthday Unlocked */}
      <main className="relative z-10">
        {timeRemaining.isExpired || timeRemaining.phase === 'unlocked' ? (
          <BirthdayUnlocked onEnterSurprise={handleEnterSurprise} />
        ) : (
          <div className="space-y-6 sm:space-y-10">
            {/* 1. Hero Sequence */}
            <HeroSequence onScrollToCountdown={handleScrollToCountdown} />

            {/* 2. Live Countdown Section */}
            <CountdownSection timeRemaining={timeRemaining} />

            {/* 3. Waiting Experience & Progress */}
            <TimeProgress timeRemaining={timeRemaining} />

            {/* 4. Interactive Sealed Love Letter Envelope */}
            <RoyalEnvelope />

            {/* 5. Multilingual Romantic Poetics: Hinglish + Urdu & English Whispers */}
            <MysteryShayari
              shayaris={birthdayData.upcomingBirthdayShayaris}
              englishPoems={birthdayData.englishPoetry}
            />

            {/* 6. Guldasta-e-Alfaaz: Interactive Urdu Words Treasury for Her */}
            <UrduTreasury />

            {/* 7. Problem Solving: The Love Vault Cipher Puzzle */}
            <CipherPuzzle />

            {/* 8. Classified Dossier Information Cards (PARDA 01 - 04) */}
            <SecretFiles />

            {/* 9. "WHAT COULD IT BE?" Guessing Section */}
            <GuessingSection />

            {/* 10. Locked Future Birthday Surprise Safe */}
            <LockedSurprise
              isUnlocked={timeRemaining.isExpired}
              onEnterSurprise={handleEnterSurprise}
            />

            {/* 11. Optional Photo Teaser (auto-hides if empty) */}
            <PhotoTeaser photos={birthdayData.teaserPhotos} />

            {/* 12. Subtle Easter Egg Clues */}
            <SecretClues />

            {/* 13. Audio Teaser Player (auto-hides if file missing) */}
            <AudioTeaserPlayer audioSrc={birthdayData.teaserAudio} />

            {/* 14. Minimal Romantic Footer */}
            <footer className="py-14 px-4 text-center border-t border-rose-petal/20 relative z-10 space-y-3">
              <p className="font-mono text-xs text-rose-petal tracking-[0.25em] uppercase font-semibold">
                CONFIDENTIAL RECORD • FOR {birthdayData.birthdayName.toUpperCase()} ONLY
              </p>
              <div>
                <FooterClue onTrigger={() => {}} />
              </div>
              <p className="font-mono text-[10px] text-rose-blush/60 tracking-wider">
                TRANSMISSION ORIGIN: {birthdayData.timezone} // MIDNIGHT ROSE & URDU NAZAAKAT ❤️
              </p>
            </footer>
          </div>
        )}
      </main>

      {/* Discreet Developer Simulation Switcher */}
      <DevPreviewBar
        currentMode={simulationMode}
        onSelectMode={setSimulationMode}
      />
    </div>
  );
};

export default App;
