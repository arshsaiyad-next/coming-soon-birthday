import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '../config/birthdayData';
import { HelpCircle, Sparkles, Heart } from 'lucide-react';

export const GuessingSection: React.FC = () => {
  const [selectedGuessId, setSelectedGuessId] = useState<string | null>(null);

  const selectedOption = birthdayData.guessingOptions.find(
    (o) => o.id === selectedGuessId
  );

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-4 backdrop-blur-md">
        <HelpCircle className="w-3.5 h-3.5 text-rose-petal" />
        <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
          UPCOMING BIRTHDAY GUESSES • WHAT COULD IT BE?
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-3">
        ANY GUESSES?
      </h3>
      <p className="text-xs sm:text-sm text-rose-blush/80 font-light max-w-md mx-auto mb-8 sm:mb-10">
        Care to guess what magic will unlock for your upcoming birthday on 20 September? Pick your theory. 💖
      </p>

      {/* 3 Guess Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
        {birthdayData.guessingOptions.map((option) => {
          const isSelected = selectedGuessId === option.id;

          return (
            <motion.button
              key={option.id}
              onClick={() => setSelectedGuessId(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-5 rounded-2xl border font-serif text-base sm:text-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[96px] ${
                isSelected
                  ? 'bg-rose-velvet/60 border-rose-petal text-white shadow-[0_0_30px_rgba(255,158,187,0.35)]'
                  : 'romantic-glass border-white/10 text-rose-blush/90 hover:border-rose-petal/50 hover:text-white'
              }`}
            >
              <span>{option.label}</span>
              {isSelected && (
                <span className="font-mono text-[10px] text-rose-petal tracking-widest uppercase mt-1.5 font-semibold flex items-center gap-1">
                  <Heart className="w-2.5 h-2.5 fill-current text-rose-petal" />
                  <span>SELECTED</span>
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Teasing Response */}
      <div className="min-h-[110px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {selectedOption ? (
            <motion.div
              key={selectedOption.id}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="romantic-glass p-6 sm:p-8 rounded-3xl border border-rose-petal/35 max-w-lg mx-auto space-y-2 shadow-2xl"
            >
              <div className="flex items-center justify-center gap-2 text-rose-petal font-medium text-base sm:text-lg">
                <Sparkles className="w-4 h-4" />
                <span>{selectedOption.reaction}</span>
              </div>
              <p className="font-serif italic text-sm sm:text-base text-rose-blush leading-relaxed">
                “{selectedOption.teaserReply}”
              </p>
              <p className="font-mono text-[11px] text-rose-blush/70 tracking-wider pt-1">
                Cute guess! But the surprise stays safe until midnight. 😌
              </p>
            </motion.div>
          ) : (
            <p className="font-mono text-xs text-rose-blush/70 tracking-wider">
              [ Tap one of the cute options above to test your intuition ]
            </p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
