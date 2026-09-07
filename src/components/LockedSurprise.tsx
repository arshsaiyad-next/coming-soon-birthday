import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, X } from 'lucide-react';

interface LockedSurpriseProps {
  isUnlocked: boolean;
  onEnterSurprise: () => void;
}

export const LockedSurprise: React.FC<LockedSurpriseProps> = ({
  isUnlocked,
  onEnterSurprise,
}) => {
  const [showRejection, setShowRejection] = useState(false);
  const [shake, setShake] = useState(false);

  const handleAttemptUnlock = () => {
    if (isUnlocked) {
      onEnterSurprise();
      return;
    }

    setShake(true);
    setShowRejection(true);
    setTimeout(() => setShake(false), 600);
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-xl mx-auto text-center relative z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-rose-petal/10 rounded-3xl blur-3xl pointer-events-none" />

        <motion.div
          animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
          className="romantic-glass relative rounded-3xl p-8 sm:p-12 border border-rose-petal/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-rose-petal/30 mb-6 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 fill-current text-rose-petal" />
            <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
              FUTURE BIRTHDAY SURPRISE
            </span>
          </div>

          {/* Locked Icon */}
          <div className="my-4 flex flex-col items-center">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-3xl bg-black/60 border border-rose-petal/50 flex items-center justify-center shadow-[0_0_35px_rgba(255,158,187,0.3)]">
              <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-rose-petal animate-pulse" />
            </div>

            <div className="mt-4 flex items-center gap-1.5 font-mono text-sm tracking-widest text-rose-blush font-semibold">
              <span>🔒 LOCKED WITH LOVE</span>
            </div>
          </div>

          <p className="font-serif italic text-base sm:text-lg text-rose-blush/90 mt-2 mb-8">
            Available on 20 September 2026.
          </p>

          {/* Action Button */}
          <motion.button
            onClick={handleAttemptUnlock}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-mono text-xs sm:text-sm tracking-widest uppercase bg-gradient-to-r from-rose-deep via-rose-petal to-rose-blush text-black font-bold shadow-[0_0_30px_rgba(255,158,187,0.45)] hover:shadow-[0_0_45px_rgba(255,158,187,0.7)] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            TRY TO UNLOCK ✨
          </motion.button>

          <div className="mt-6 font-mono text-[10px] text-rose-blush/60 tracking-wider uppercase">
            SPECIAL TIMELOCK ACTIVE UNTIL MIDNIGHT
          </div>
        </motion.div>
      </div>

      {/* Rejection Modal */}
      <AnimatePresence>
        {showRejection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setShowRejection(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="romantic-glass max-w-sm w-full p-7 rounded-3xl border border-rose-petal/50 shadow-2xl text-center relative"
            >
              <button
                onClick={() => setShowRejection(false)}
                className="absolute top-4 right-4 text-rose-blush/70 hover:text-white p-1 rounded-full transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 rounded-full bg-rose-velvet/90 border border-rose-petal/40 flex items-center justify-center mx-auto mb-4 text-rose-petal">
                <Heart className="w-7 h-7 fill-current text-rose-petal animate-bounce" />
              </div>

              <h4 className="font-serif text-2xl font-medium text-white mb-2">
                Too early, my love. 😌🌸
              </h4>

              <p className="font-serif italic text-sm text-rose-blush/90 mb-6 leading-relaxed">
                Come back when the countdown reaches zero! Sabar ka phal sabse meetha hota hai—this surprise is waiting for your exact midnight.
              </p>

              <button
                onClick={() => setShowRejection(false)}
                className="w-full py-2.5 rounded-full bg-rose-petal/25 hover:bg-rose-petal/35 border border-rose-petal/45 text-xs font-mono tracking-widest text-rose-blush font-semibold transition-colors"
              >
                I WILL WAIT FOR 20 SEPT ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
