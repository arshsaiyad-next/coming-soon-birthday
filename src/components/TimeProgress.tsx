import React from 'react';
import { motion } from 'framer-motion';
import type { TimeRemaining } from '../utils/timeUtils';
import { Hourglass, Heart } from 'lucide-react';

interface TimeProgressProps {
  timeRemaining: TimeRemaining;
}

export const TimeProgress: React.FC<TimeProgressProps> = ({ timeRemaining }) => {
  const getTeaserLine = () => {
    if (timeRemaining.phase === 'last10m') {
      return '“Palkein mat jhapko... your special midnight is almost here.”';
    }
    if (timeRemaining.phase === 'lastHour') {
      return '“Just 1 hour to go! The excitement is real.”';
    }
    if (timeRemaining.phase === 'last24h') {
      return '“Tomorrow is your day! Keep your heart ready for something wonderful.”';
    }
    if (timeRemaining.phase === 'approaching') {
      return '“Counting every single day until 20 September with a smile.”';
    }
    return '“Intezaar ka apna ek nasha hai, especially when it’s for you.”';
  };

  return (
    <section className="py-10 px-4 max-w-xl mx-auto text-center relative z-10">
      <div className="romantic-glass rounded-3xl p-6 sm:p-8 border border-rose-petal/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-rose-petal/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Hourglass className="w-4 h-4 text-rose-petal animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
              THE WAIT • PROGRESS
            </span>
          </div>
          <span className="font-mono text-xs text-rose-petal tracking-wider font-bold">
            {timeRemaining.progressPercentage}% COMPLETE
          </span>
        </div>

        {/* Rose-Gold Progress Track */}
        <div className="relative w-full h-3 bg-black/60 rounded-full overflow-hidden border border-rose-petal/30 p-[2px]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${timeRemaining.progressPercentage}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-rose-deep via-rose-petal to-rose-blush rounded-full relative shadow-[0_0_15px_rgba(255,158,187,0.6)]"
          />
        </div>

        <div className="mt-5 space-y-2">
          <p className="font-serif italic text-base sm:text-lg text-white">
            {getTeaserLine()}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-rose-blush/70 font-mono text-[11px] tracking-wider">
            <Heart className="w-3 h-3 fill-current text-rose-petal" />
            <span>The closer we get, the more magic unfolds.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
