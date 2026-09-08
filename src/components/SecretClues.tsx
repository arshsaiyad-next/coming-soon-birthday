import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SecretClues: React.FC = () => {
  const [activeClue, setActiveClue] = useState<string | null>(null);

  const triggerClue = (text: string) => {
    setActiveClue(text);
    setTimeout(() => {
      setActiveClue(null);
    }, 3200);
  };

  return (
    <>
      {/* Clue 1: Tiny glowing dot floating discreetly on the left flank (desktop only) */}
      <div className="hidden sm:block fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => triggerClue("You're getting warmer… 🔍")}
          className="relative group p-2 focus:outline-none cursor-pointer"
          aria-label="Classified node"
        >
          <span className="w-2 h-2 rounded-full bg-rose-petal/50 group-hover:bg-rose-petal block transition-colors animate-pulse" />
          <span className="sr-only">Secret marker</span>
        </button>
      </div>

      {/* Clue 2: Subtle tiny watermark in the right margin (desktop only) */}
      <div className="hidden sm:block fixed right-3 sm:right-6 top-2/3 z-30">
        <button
          onClick={() => triggerClue("Nope. Not yet. 🤫")}
          className="font-mono text-[9px] text-rose-blush/30 hover:text-rose-petal tracking-widest uppercase rotate-90 origin-right transition-colors focus:outline-none cursor-pointer"
          aria-label="Encrypted frequency"
        >
          FREQ_2009
        </button>
      </div>

      {/* Clue Toast / Whispered Tooltip */}
      <AnimatePresence>
        {activeClue && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-black/90 border border-rosegold/40 text-slate-200 text-xs font-mono tracking-wider shadow-2xl backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rosegold animate-ping" />
            <span>{activeClue}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const FooterClue: React.FC<{ onTrigger: (text: string) => void }> = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="inline-block">
      <button
        onClick={() => setRevealed(true)}
        className="font-mono text-[10px] text-slate-600 hover:text-slate-400 transition-colors focus:outline-none"
      >
        {revealed ? "Why are you looking here? 👀" : "LAT: 20.09.26 // LONG: 00.00.00"}
      </button>
    </div>
  );
};
