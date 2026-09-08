import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from '../config/birthdayData';
import { Sparkles, Heart, Feather } from 'lucide-react';

export const UrduTreasury: React.FC = () => {
  const { urduTreasury } = birthdayData;
  const [selectedWord, setSelectedWord] = useState<string | null>(urduTreasury[0].word);

  const active = urduTreasury.find((w) => w.word === selectedWord) || urduTreasury[0];

  return (
    <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center relative z-10">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-rose-petal/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Tag */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-6 backdrop-blur-md max-w-[92vw]">
        <Feather className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-rose-petal flex-shrink-0" />
        <span className="font-mono text-[10px] xs:text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-rose-blush uppercase font-semibold whitespace-nowrap truncate">
          گلدستۂ الفاظ • GULDASTA-E-ALFAAZ
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-3">
        Lafzon Ka Ek Poshida Tohfa
      </h3>
      <p className="text-xs sm:text-sm text-rose-blush/80 font-light max-w-md mx-auto mb-10">
        Khaas tere liye chune gaye Urdu ke kuch behad khoobsurat alfaaz… Tap on each word to reveal its secret meaning. 🌸
      </p>

      {/* Words Pill Selector Grid */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
        {urduTreasury.map((item) => {
          const isSelected = selectedWord === item.word;

          return (
            <motion.button
              key={item.word}
              onClick={() => setSelectedWord(item.word)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-rose-velvet/80 border-rose-petal text-white shadow-[0_0_20px_rgba(255,158,187,0.45)] scale-105'
                  : 'romantic-glass border-rose-blush/20 text-rose-blush/85 hover:border-rose-petal/50 hover:text-white'
              }`}
            >
              <span className="font-urdu text-lg">{item.urduScript}</span>
              <span className="font-serif text-xs sm:text-sm text-rose-blush/80">({item.word})</span>
            </motion.button>
          );
        })}
      </div>

      {/* Expanded Word Card */}
      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.word}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="romantic-glass rounded-3xl p-7 sm:p-10 border border-rose-petal/35 shadow-2xl relative overflow-hidden text-left"
          >
            {/* Top Row: Urdu Script & Romanized Word */}
            <div className="flex items-start justify-between pb-5 border-b border-rose-petal/20">
              <div>
                <div dir="rtl" className="font-urdu text-3xl xs:text-4xl sm:text-5xl text-rose-blush font-normal leading-normal drop-shadow">
                  {active.urduScript}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    {active.word}
                  </h4>
                  <span className="font-mono text-xs text-rose-petal tracking-wider uppercase">
                    [{active.pronunciation}]
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-rose-petal/20 border border-rose-petal/40 flex items-center justify-center text-rose-petal shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Meaning */}
            <div className="mt-5 space-y-1">
              <span className="font-mono text-[10px] text-rose-blush/60 uppercase tracking-widest">
                MAAYNE / MEANING
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-rose-blush font-normal">
                "{active.meaning}"
              </p>
            </div>

            {/* Romantic Personal Note */}
            <div className="mt-5 pt-4 border-t border-white/10 space-y-1 bg-black/30 -mx-3 p-4 rounded-2xl border border-rose-petal/15">
              <span className="font-mono text-[10px] text-rose-petal uppercase tracking-widest flex items-center gap-1">
                <Heart className="w-3 h-3 fill-current text-rose-petal" />
                <span>KYUN YEH LAFZ TERE NAAM HAI</span>
              </span>
              <p className="font-serif text-sm sm:text-base text-rose-blush/90 leading-relaxed italic">
                {active.romanticNote}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
