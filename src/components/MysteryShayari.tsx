import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BirthdayShayari, EnglishPoem } from '../config/birthdayData';
import { Quote, ChevronRight, ChevronLeft, Sparkles, BookOpen, Heart } from 'lucide-react';

interface MysteryShayariProps {
  shayaris: BirthdayShayari[];
  englishPoems: EnglishPoem[];
}

export const MysteryShayari: React.FC<MysteryShayariProps> = ({
  shayaris,
  englishPoems,
}) => {
  const [activeTab, setActiveTab] = useState<'hinglish' | 'english'>('hinglish');
  const [showUrduScript, setShowUrduScript] = useState<boolean>(true);
  const [hinglishIndex, setHinglishIndex] = useState(0);
  const [englishIndex, setEnglishIndex] = useState(0);

  const currentHinglish = shayaris[hinglishIndex];
  const currentEnglish = englishPoems[englishIndex];

  const handleNext = () => {
    if (activeTab === 'hinglish') {
      setHinglishIndex((prev) => (prev + 1) % shayaris.length);
    } else {
      setEnglishIndex((prev) => (prev + 1) % englishPoems.length);
    }
  };

  const handlePrev = () => {
    if (activeTab === 'hinglish') {
      setHinglishIndex((prev) => (prev - 1 + shayaris.length) % shayaris.length);
    } else {
      setEnglishIndex((prev) => (prev - 1 + englishPoems.length) % englishPoems.length);
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto text-center relative z-10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-velvet/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Section Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-rose-petal/35 mb-6 backdrop-blur-md">
        <Heart className="w-3.5 h-3.5 fill-current text-rose-petal" />
        <span className="font-mono text-xs tracking-widest text-rose-blush uppercase font-semibold">
          UPCOMING BIRTHDAY POETICS • URDU NAZAAKAT
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-white mb-3">
        Whispers Before Midnight
      </h3>
      <p className="text-xs sm:text-sm text-rose-blush/80 font-light mb-8 max-w-md mx-auto">
        Khaas tere upcoming birthday ke liye likhe hue lafz, aur 20 September ka be-sabri se intezaar… 🌸
      </p>

      {/* Language Switcher Tabs */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/70 border border-rose-petal/25 mb-8 backdrop-blur-md">
        <button
          onClick={() => setActiveTab('hinglish')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeTab === 'hinglish'
              ? 'bg-gradient-to-r from-rose-petal to-rose-gold text-black font-bold shadow-[0_0_15px_rgba(255,158,187,0.4)]'
              : 'text-rose-blush/70 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>اردو + HINGLISH SHAYARI</span>
        </button>

        <button
          onClick={() => setActiveTab('english')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeTab === 'english'
              ? 'bg-gradient-to-r from-rose-petal to-rose-gold text-black font-bold shadow-[0_0_15px_rgba(255,158,187,0.4)]'
              : 'text-rose-blush/70 hover:text-white'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>ENGLISH LOVE POETICS</span>
        </button>
      </div>

      {/* The Poetry Glass Card */}
      <div className="romantic-glass rounded-3xl p-7 sm:p-12 border border-rose-petal/35 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
        {/* Decorative watermark quote mark */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-rose-petal/10 pointer-events-none">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 -scale-x-100" />
        </div>

        {/* Optional Urdu Script Toggle Button */}
        {activeTab === 'hinglish' && (
          <div className="flex justify-end mb-4 relative z-20">
            <button
              onClick={() => setShowUrduScript(!showUrduScript)}
              className="text-[11px] font-mono text-rose-petal hover:text-rose-blush flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-rose-petal/25 transition-colors"
            >
              <span>{showUrduScript ? '✓ اردو رسم الخط ON' : '+ اردو رسم الخط OFF'}</span>
            </button>
          </div>
        )}

        <div className="relative z-10 min-h-[190px] flex flex-col items-center justify-center py-3">
          <AnimatePresence mode="wait">
            {activeTab === 'hinglish' ? (
              <motion.div
                key={`hinglish-${currentHinglish.id}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
                transition={{ duration: 0.45 }}
                className="space-y-5"
              >
                {/* Authentic Urdu Language Calligraphy Script (Nastaliq) */}
                {showUrduScript && currentHinglish.urduLines && (
                  <div
                    dir="rtl"
                    className="font-urdu text-2xl sm:text-3xl md:text-4xl text-rose-blush font-normal leading-loose tracking-wide drop-shadow-md pb-2 border-b border-rose-petal/15"
                  >
                    {currentHinglish.urduLines.map((line, idx) => (
                      <p key={idx} className="my-1.5">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {/* Hinglish Transliteration Lines */}
                <div className="space-y-2 pt-1">
                  {currentHinglish.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="font-serif text-lg sm:text-2xl text-white font-normal leading-relaxed drop-shadow"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Vibe Tag */}
                <div className="pt-2">
                  <span className="font-mono text-xs text-rose-petal uppercase tracking-[0.25em] font-semibold">
                    — {currentHinglish.vibe}
                  </span>
                </div>

                {/* Urdu Word Glossary Pills */}
                {currentHinglish.urduWords && currentHinglish.urduWords.length > 0 && (
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
                    <span className="text-[10px] font-mono text-rose-blush/60 uppercase tracking-wider block w-full">
                      [ DIL-CHASP URDU ALFAAZ • MEANINGS ]
                    </span>
                    {currentHinglish.urduWords.map((item, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-rose-petal/30 text-xs font-mono"
                      >
                        <span className="text-rose-petal font-bold">{item.word}</span>
                        <span className="text-rose-blush/80">({item.meaning})</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`english-${currentEnglish.id}`}
                initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
                transition={{ duration: 0.45 }}
                className="space-y-4"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-rose-petal font-semibold block">
                  {currentEnglish.title}
                </span>

                <div className="space-y-2">
                  {currentEnglish.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="font-serif italic text-lg sm:text-2xl text-rose-blush leading-relaxed drop-shadow"
                    >
                      "{line}"
                    </p>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="font-mono text-xs text-rose-petal uppercase tracking-[0.25em]">
                    — {currentEnglish.vibe}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Footer with Prev / Next */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono text-rose-blush/70 hover:text-white bg-white/5 border border-white/10 hover:border-rose-petal/40 transition-colors"
            aria-label="Previous poetry line"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PREV</span>
          </button>

          <span className="font-mono text-xs text-rose-petal font-semibold tracking-wider">
            {activeTab === 'hinglish'
              ? `COUPLET 0${hinglishIndex + 1} / 0${shayaris.length}`
              : `STANZA 0${englishIndex + 1} / 0${englishPoems.length}`}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-mono text-black font-semibold bg-rose-petal hover:bg-rose-blush transition-all cursor-pointer shadow-[0_0_15px_rgba(255,158,187,0.4)]"
            aria-label="Next poetry line"
          >
            <span>NEXT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
