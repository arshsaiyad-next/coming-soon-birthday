import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '../config/birthdayData';
import { Mail, Sparkles, Heart } from 'lucide-react';

export const RoyalEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { royalEnvelope } = birthdayData;

  return (
    <section className="py-16 sm:py-24 px-4 max-w-2xl mx-auto text-center relative z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-petal/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Header Badge */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-rose-petal/30 mb-6 backdrop-blur-md max-w-[92vw]">
        <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current text-rose-petal flex-shrink-0" />
        <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-rose-blush uppercase font-semibold whitespace-nowrap truncate">
          AN UPCOMING BIRTHDAY WHISPER • FOR HER
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-3">
        The Sealed Dispatch
      </h3>
      <p className="text-xs sm:text-sm text-rose-blush/80 font-light max-w-md mx-auto mb-10">
        A private parchment sealed with the rose emblem of 20 September. Break the wax to see what's written inside.
      </p>

      {/* Envelope Container */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Envelope with Rose Wax Seal */
            <motion.div
              key="closed"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              whileHover={{ y: -4 }}
              onClick={() => setIsOpen(true)}
              className="romantic-glass cursor-pointer rounded-3xl p-8 sm:p-12 border border-rose-petal/35 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-w-lg mx-auto relative group overflow-hidden select-none"
            >
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
              
              <div className="flex flex-col items-center justify-center space-y-5">
                {/* 3D Wax Seal with Heart & 20 */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-deep via-rose-petal to-rose-gold rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-rose-deep via-rose-velvet to-black border-2 border-rose-petal/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_25px_rgba(0,0,0,0.8)] flex items-center justify-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-rose-blush/40 border-dashed flex flex-col items-center justify-center">
                      <Heart className="w-4 h-4 fill-current text-rose-blush mb-0.5" />
                      <span className="font-serif text-xl sm:text-2xl font-bold text-rose-blush drop-shadow">
                        {royalEnvelope.sealNumber}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs text-rose-petal tracking-widest uppercase font-semibold flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    TAP WAX SEAL TO BREAK LOCK
                  </span>
                  <p className="font-mono text-[11px] text-rose-blush/70 tracking-wider">
                    {royalEnvelope.senderNote}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Open Parchment Letter */
            <motion.div
              key="open"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="romantic-glass rounded-3xl p-8 sm:p-12 border border-rose-petal/45 shadow-[0_30px_70px_rgba(0,0,0,0.95)] max-w-xl mx-auto text-left relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-rose-petal/20 mb-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-petal" />
                  <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
                    {royalEnvelope.parchmentHeading}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono text-rose-blush/70 hover:text-white transition-colors py-1 px-3 rounded-full bg-white/5 border border-white/10"
                >
                  CLOSE LETTER ✕
                </button>
              </div>

              <div className="space-y-4 font-serif text-base sm:text-lg text-rose-blush/90 leading-relaxed italic">
                {royalEnvelope.parchmentBody.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="font-serif text-rose-petal text-sm sm:text-base italic flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-current text-rose-petal" />
                  <span>— {royalEnvelope.parchmentSignoff}</span>
                </div>
                <span className="font-mono text-[10px] text-rose-blush/60 tracking-wider">
                  DATE-LOCKED: 20.09.2026
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
