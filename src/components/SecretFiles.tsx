import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { birthdayData } from '../config/birthdayData';
import { FileText, Lock, Unlock, Eye, Sparkles, Heart } from 'lucide-react';

export const SecretFiles: React.FC = () => {
  const [unlockedFiles, setUnlockedFiles] = useState<Record<string, boolean>>({});

  const toggleUnlock = (id: string) => {
    setUnlockedFiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-4 backdrop-blur-md max-w-[92vw]">
          <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-rose-petal flex-shrink-0" />
          <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-rose-blush uppercase font-semibold whitespace-nowrap truncate">
            UPCOMING BIRTHDAY DOSSIER • TEASERS
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3">
          Secret Information Cards
        </h3>
        <p className="text-xs sm:text-sm text-rose-blush/80 font-light max-w-md mx-auto">
          Tap each classified card to decrypt little clues. The final surprise remains locked until 20 September. 🎀
        </p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {birthdayData.secretFiles.map((file) => {
          const isUnlocked = !!unlockedFiles[file.id];

          return (
            <motion.div
              key={file.id}
              onClick={() => toggleUnlock(file.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`romantic-glass relative cursor-pointer rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-300 overflow-hidden select-none ${
                isUnlocked
                  ? 'bg-rose-velvet/40 border-rose-petal/50 shadow-[0_20px_40px_rgba(255,158,187,0.18)]'
                  : 'border-white/10 hover:border-rose-petal/40'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black/50 border border-rose-petal/30 flex items-center justify-center text-rose-petal shadow">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold tracking-wider text-rose-blush block">
                      {file.fileNumber}
                    </span>
                    <span className="font-mono text-[10px] text-rose-blush/70 tracking-wider uppercase">
                      {file.title}
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider border ${
                    isUnlocked
                      ? 'bg-rose-petal/20 text-rose-petal border-rose-petal/40 font-bold'
                      : 'bg-white/5 text-rose-blush/70 border-white/10'
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <Unlock className="w-3 h-3 text-rose-petal" />
                      <span>DECRYPTED</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 text-rose-blush/60" />
                      <span>SEALED</span>
                    </>
                  )}
                </div>
              </div>

              <div className="min-h-[70px] flex items-center">
                {isUnlocked ? (
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.35 }}
                    className="space-y-2 text-left"
                  >
                    <p className="font-serif text-base sm:text-lg text-white font-normal leading-relaxed">
                      "{file.clue}"
                    </p>
                    <span className="font-mono text-[10px] text-rose-petal tracking-widest uppercase font-semibold flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-current text-rose-petal" />
                      <span>STATUS: {file.tag}</span>
                    </span>
                  </motion.div>
                ) : (
                  <div className="w-full space-y-2.5 text-left">
                    <div className="h-4 bg-white/10 rounded filter blur-[3px] animate-pulse w-5/6" />
                    <div className="h-4 bg-white/10 rounded filter blur-[3px] animate-pulse w-3/4" />
                    <div className="flex items-center gap-1.5 text-xs font-mono text-rose-petal/90 pt-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Tap to reveal classified hint</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-2 right-3 font-mono text-[9px] text-white/5 select-none pointer-events-none tracking-widest uppercase">
                CLEARANCE-HER-EYES-ONLY
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
