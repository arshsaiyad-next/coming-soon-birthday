import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ClassifiedHeaderProps {
  phase: string;
}

export const ClassifiedHeader: React.FC<ClassifiedHeaderProps> = ({ phase }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 sm:py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Romantic Classified Tag */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-rose-petal/30 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-petal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-petal"></span>
          </span>
          <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs tracking-wider xs:tracking-[0.2em] text-rose-blush uppercase font-semibold truncate">
            PROJECT 20.09 • FOR HER EYES ONLY
          </span>
        </div>

        {/* Right: Secrecy Status */}
        <div className="hidden xs:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 font-mono text-[10px] sm:text-xs text-rose-blush/80">
          {phase === 'unlocked' ? (
            <>
              <Heart className="w-3.5 h-3.5 fill-current text-rose-petal" />
              <span className="text-rose-petal font-semibold">ACCESS UNLOCKED ❤️</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
              <span>STATUS: CONFIDENTIAL ARCHIVE</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
