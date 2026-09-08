import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '../config/birthdayData';
import { ShieldCheck, HelpCircle, Sparkles, CheckCircle2, RotateCcw, Heart } from 'lucide-react';

export const CipherPuzzle: React.FC = () => {
  const { cipherPuzzle } = birthdayData;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const riddle = cipherPuzzle.riddles[currentStep];

  const handleSelectOption = (option: string) => {
    setErrorMessage(null);
    setSelectedAnswers((prev) => ({ ...prev, [currentStep]: option }));

    if (option === riddle.correctAnswer) {
      if (currentStep < cipherPuzzle.riddles.length - 1) {
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, 500);
      } else {
        setTimeout(() => {
          setIsCompleted(true);
        }, 600);
      }
    } else {
      setErrorMessage('Oops, try again! Look closely at the date and clues... 💖');
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setErrorMessage(null);
    setIsCompleted(false);
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto relative z-10 text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-petal/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-6 backdrop-blur-md">
        <Heart className="w-3.5 h-3.5 fill-current text-rose-petal" />
        <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
          UPCOMING BIRTHDAY PUZZLE • SOLVE FOR HER
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-3">
        {cipherPuzzle.title}
      </h3>
      <p className="text-xs sm:text-sm text-rose-blush/80 font-light max-w-md mx-auto mb-10">
        {cipherPuzzle.subtitle}
      </p>

      {/* The Puzzle Box */}
      <div className="romantic-glass rounded-3xl p-6 sm:p-10 border border-rose-petal/30 shadow-2xl relative overflow-hidden">
        {!isCompleted ? (
          <div>
            {/* Step indicators */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {cipherPuzzle.riddles.map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      idx === currentStep
                        ? 'bg-rose-petal text-black shadow-[0_0_15px_rgba(255,158,187,0.6)] scale-110'
                        : idx < currentStep
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-white/5 text-rose-blush/40 border border-white/10'
                    }`}
                  >
                    {idx < currentStep ? '✓' : `0${idx + 1}`}
                  </div>
                  {idx < cipherPuzzle.riddles.length - 1 && (
                    <div
                      className={`w-8 sm:w-12 h-[1px] ${
                        idx < currentStep ? 'bg-rose-petal/60' : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Current Riddle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-rose-petal font-semibold">
                    QUESTION {currentStep + 1} OF {cipherPuzzle.riddles.length}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug max-w-xl mx-auto">
                    "{riddle.question}"
                  </h4>
                </div>

                {/* Hint */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-rose-blush/80 text-xs font-mono">
                  <HelpCircle className="w-3 h-3 text-rose-petal" />
                  <span>Hint: {riddle.hint}</span>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto pt-2">
                  {riddle.options.map((option) => {
                    const isSelected = selectedAnswers[currentStep] === option;
                    return (
                      <motion.button
                        key={option}
                        onClick={() => handleSelectOption(option)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className={`p-3 xs:p-4 rounded-xl border text-xs xs:text-sm sm:text-base font-serif transition-all cursor-pointer ${
                          isSelected && option === riddle.correctAnswer
                            ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200'
                            : isSelected && option !== riddle.correctAnswer
                            ? 'bg-rose-950/60 border-rose-500 text-rose-200'
                            : 'bg-black/40 border-white/10 text-rose-blush/90 hover:border-rose-petal/60 hover:bg-rose-petal/10'
                        }`}
                      >
                        {option}
                      </motion.button>
                    );
                  })}
                </div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-mono text-rose-300 tracking-wider pt-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-4"
          >
            <div className="w-16 h-16 rounded-full bg-rose-petal/20 border border-rose-petal/60 flex items-center justify-center mx-auto text-rose-petal shadow-[0_0_30px_rgba(255,158,187,0.4)]">
              <ShieldCheck className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                CLEARANCE VERIFIED
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Secret Love Whisper Unlocked! 💖
              </h4>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-rose-petal/35 text-left space-y-3 relative">
              <div className="flex items-center justify-between text-xs font-mono text-rose-petal pb-2 border-b border-white/10">
                <span>CLASSIFIED WHISPER #01</span>
                <span>FOR YOUR EYES ONLY</span>
              </div>
              <p className="font-serif italic text-base sm:text-lg text-rose-blush leading-relaxed">
                "{cipherPuzzle.successMessage}"
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-blush/70 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-rose-petal" />
                <span>Reserved for 20 September 2026. Keep smiling. 🌸</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs font-mono text-rose-blush/70 hover:text-rose-petal transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RE-LOCK PUZZLE</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
