import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type TimeRemaining, formatTwoDigits } from '../utils/timeUtils';
import { Clock, Heart } from 'lucide-react';

interface CountdownSectionProps {
  timeRemaining: TimeRemaining;
}

interface TileProps {
  value: number;
  label: string;
  isUrgent: boolean;
}

const CountdownTile: React.FC<TileProps> = ({ value, label, isUrgent }) => {
  const formatted = formatTwoDigits(value);

  return (
    <div className="flex flex-col items-center">
      {/* Romantic Crystal Bezel Tile */}
      <div
        className={`relative w-16 xs:w-20 sm:w-28 md:w-36 h-20 xs:h-24 sm:h-32 md:h-40 rounded-xl xs:rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden border backdrop-blur-2xl transition-all duration-500 shadow-2xl ${
          isUrgent
            ? 'bg-rose-velvet/80 border-rose-petal/60 shadow-[0_0_40px_rgba(255,158,187,0.4)]'
            : 'romantic-glass border-rose-blush/25 shadow-[0_20px_45px_rgba(0,0,0,0.85)]'
        }`}
      >
        {/* Interior crystal glare */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/50 border-b border-rose-petal/20 pointer-events-none" />

        {/* Animated Number */}
        <div className="relative h-9 xs:h-12 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={formatted}
              initial={{ y: -22, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 22, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="font-mono text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white block drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            >
              {formatted}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Label */}
      <span className="mt-2 sm:mt-3.5 font-mono text-[9px] xs:text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-rose-blush font-semibold">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC<CountdownSectionProps> = ({ timeRemaining }) => {
  const isUrgent =
    timeRemaining.phase === 'last24h' ||
    timeRemaining.phase === 'lastHour' ||
    timeRemaining.phase === 'last10m';

  return (
    <section id="countdown-section" className="relative py-16 sm:py-24 px-4 scroll-mt-20">
      {/* Background ambient lighting */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
          isUrgent ? 'bg-rose-velvet/50' : 'bg-rose-petal/10'
        }`}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-6 backdrop-blur-md max-w-[92vw]">
          <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-rose-petal animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-rose-blush uppercase font-semibold whitespace-nowrap truncate">
            {timeRemaining.phase === 'last10m'
              ? 'FINAL MOMENTS IN PROGRESS'
              : timeRemaining.phase === 'lastHour'
              ? 'FINAL 60 MINUTES'
              : timeRemaining.phase === 'last24h'
              ? 'T-MINUS 24 HOURS • UPCOMING BIRTHDAY'
              : (
                <>
                  <span className="sm:hidden">UPCOMING BIRTHDAY • 20 SEPT 2026</span>
                  <span className="hidden sm:inline">COUNTDOWN TO AN UPCOMING BIRTHDAY • 20 SEPTEMBER 2026</span>
                </>
              )}
          </span>
          <Heart className="w-3 h-3 fill-current text-rose-petal flex-shrink-0" />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8 sm:mb-12 drop-shadow">
          {timeRemaining.phaseHeadline}
        </h2>

        {/* 4 Countdown Tiles */}
        <div className="grid grid-cols-4 gap-2 xs:gap-3 sm:gap-6 md:gap-8 justify-center max-w-2xl mx-auto">
          <CountdownTile value={timeRemaining.days} label="DAYS" isUrgent={isUrgent} />
          <CountdownTile value={timeRemaining.hours} label="HOURS" isUrgent={isUrgent} />
          <CountdownTile value={timeRemaining.minutes} label="MINUTES" isUrgent={isUrgent} />
          <CountdownTile value={timeRemaining.seconds} label="SECONDS" isUrgent={isUrgent} />
        </div>

        {/* Subtext */}
        <div className="mt-10 sm:mt-14 space-y-2 max-w-lg mx-auto">
          <p className="font-serif italic text-base sm:text-xl text-rose-blush/90 px-2">
            "{timeRemaining.phaseSubtext}"
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-rose-gold/80 tracking-wider sm:tracking-widest uppercase px-3 leading-relaxed">
            RESERVED EXCLUSIVELY FOR UPCOMING BIRTHDAY • 20 SEPTEMBER 2026 • 00:00 IST ❤️
          </p>
        </div>
      </div>
    </section>
  );
};
