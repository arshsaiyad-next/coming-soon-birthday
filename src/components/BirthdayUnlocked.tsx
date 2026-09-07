import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Heart, Crown } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

interface BirthdayUnlockedProps {
  onEnterSurprise?: () => void;
}

export const BirthdayUnlocked: React.FC<BirthdayUnlockedProps> = ({ onEnterSurprise }) => {
  useEffect(() => {
    // Grand Romantic Celebratory Confetti Shower
    const end = Date.now() + 3.5 * 1000;
    const colors = ['#ff9ebb', '#ffcad4', '#ffffff', '#e11d48', '#f5d590'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const handleEnter = () => {
    if (onEnterSurprise) {
      onEnterSurprise();
    } else {
      window.location.href = birthdayData.futureSurpriseUrl;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 relative overflow-hidden">
      {/* Radiant Rose Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[700px] h-96 sm:h-[700px] bg-rose-petal/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto space-y-8"
      >
        {/* Crown & Heart Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-petal/15 border border-rose-petal/40 text-rose-blush shadow-[0_0_25px_rgba(255,158,187,0.3)]">
          <Crown className="w-4 h-4 text-rose-petal" />
          <span className="font-mono text-xs tracking-widest uppercase font-bold">
            20 SEPTEMBER 2026 • 00:00 IST
          </span>
          <Heart className="w-4 h-4 fill-current text-rose-500" />
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight rose-gradient-text drop-shadow-[0_10px_40px_rgba(255,158,187,0.4)]">
            IT'S TIME. ❤️
          </h1>
          <p className="font-serif italic text-2xl sm:text-4xl text-rose-blush">
            The wait is officially over, my love.
          </p>
        </div>

        {/* Message */}
        <div className="romantic-glass p-7 sm:p-10 rounded-3xl border border-rose-petal/45 shadow-2xl max-w-lg mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-rose-petal">
            <Sparkles className="w-5 h-5" />
            <span className="font-serif text-xl text-white font-medium">
              Happy Birthday, {birthdayData.birthdayName}! 🌸
            </span>
          </div>
          <p className="font-serif italic text-rose-blush/90 text-base sm:text-lg leading-relaxed">
            The countdown has finished, every single secret is now yours, and the full celebration is ready to begin.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-9 sm:px-12 py-4 sm:py-5 rounded-full font-mono text-sm sm:text-base tracking-widest uppercase font-bold bg-gradient-to-r from-rose-deep via-rose-petal to-rose-blush text-black shadow-[0_0_40px_rgba(255,158,187,0.6)] hover:shadow-[0_0_60px_rgba(255,158,187,0.9)] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>ENTER YOUR SURPRISE</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <p className="font-mono text-xs text-rose-blush/60 tracking-wider">
          DESTINATION: {birthdayData.futureSurpriseUrl}
        </p>
      </motion.div>
    </div>
  );
};
