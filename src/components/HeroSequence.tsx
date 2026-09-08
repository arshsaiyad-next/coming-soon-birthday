import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';

interface HeroSequenceProps {
  onScrollToCountdown: () => void;
}

export const HeroSequence: React.FC<HeroSequenceProps> = ({ onScrollToCountdown }) => {
  const [step, setStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2200),
      setTimeout(() => setStep(2), 4800),
      setTimeout(() => {
        setStep(3);
        setIsCompleted(true);
      }, 7600),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const skipToEnd = () => {
    setStep(3);
    setIsCompleted(true);
  };

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-20 sm:pt-20 sm:pb-12 overflow-hidden select-none">
      {/* Dreamy Romantic Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[580px] h-80 sm:h-[580px] bg-gradient-to-br from-rose-petal/20 to-rose-velvet/30 rounded-full blur-[130px] pointer-events-none animate-starlight-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-rose-wine/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Skip button */}
      {!isCompleted && (
        <button
          onClick={skipToEnd}
          className="absolute top-16 sm:top-20 right-4 sm:right-8 text-[10px] sm:text-xs font-mono tracking-widest text-rose-blush/70 hover:text-rose-petal transition-colors py-1 px-3 sm:py-1.5 sm:px-3.5 rounded-full bg-black/60 border border-rose-petal/25 backdrop-blur-md z-20"
        >
          SKIP INTRO →
        </button>
      )}

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[380px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-rose-gold uppercase block">
                [ A SPECIAL WHISPER INCOMING ]
              </span>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-wide">
                Hey… ✨
              </h1>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="font-mono text-xs tracking-widest text-rose-blush/70 uppercase block">
                [ JUST BETWEEN US ]
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-rose-blush tracking-wide px-4">
                Don't ask questions yet. 🤫
              </h2>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-petal/15 border border-rose-petal/30 text-rose-blush text-xs tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 text-rose-petal" />
                <span>CONFIDENTIAL & SPECIAL</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide px-4">
                Something special is coming for your upcoming birthday. 🌹
              </h2>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 sm:space-y-8 flex flex-col items-center"
            >
              {/* Romantic Pill Badge - Single clean line on all devices */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-rose-petal/40 shadow-[0_0_25px_rgba(255,158,187,0.25)] max-w-[92vw]">
                <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current text-rose-petal flex-shrink-0" />
                <span className="text-[10px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-rose-blush font-semibold whitespace-nowrap">
                  UPCOMING BIRTHDAY SPECIAL
                </span>
              </div>

              {/* Main COMING SOON Heading with Rose-Gold Gradient */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="font-serif text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight rose-gradient-text drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                  COMING SOON
                </h1>
                <p className="font-mono text-lg xs:text-2xl sm:text-3xl md:text-4xl text-rose-petal tracking-[0.2em] xs:tracking-[0.35em] font-light drop-shadow">
                  20 • 09 • 2026
                </p>
                <div className="pt-1 sm:pt-2">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 rounded-full bg-rose-petal/15 border border-rose-petal/30 text-rose-blush text-[10px] xs:text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest uppercase whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-rose-petal flex-shrink-0" />
                    <span>A SWEET MIDNIGHT SURPRISE AWAITS</span>
                  </span>
                </div>
              </div>

              <p className="max-w-lg text-xs sm:text-sm text-rose-blush/80 font-light leading-relaxed px-4">
                The countdown to your upcoming birthday midnight is ticking. Behind the velvet curtain, a world of surprises is waiting just for you.
              </p>

              {/* Action Button to Countdown */}
              <motion.button
                onClick={onScrollToCountdown}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 flex flex-col items-center gap-2 text-rose-blush/70 hover:text-rose-petal transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-petal"
                aria-label="Scroll to countdown section"
              >
                <span className="text-[11px] font-mono tracking-widest uppercase group-hover:text-white transition-colors">
                  VIEW YOUR COUNTDOWN
                </span>
                <div className="w-9 h-9 rounded-full border border-rose-petal/40 flex items-center justify-center bg-black/40 group-hover:border-rose-petal shadow-[0_0_20px_rgba(255,158,187,0.2)] transition-all">
                  <ChevronDown className="w-4 h-4 animate-bounce text-rose-petal" />
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
