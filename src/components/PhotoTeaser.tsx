import React from 'react';
import { Sparkles, EyeOff } from 'lucide-react';

interface PhotoTeaserProps {
  photos?: string[];
}

export const PhotoTeaser: React.FC<PhotoTeaserProps> = ({ photos }) => {
  // If no photos provided, automatically hide this section as required
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 mb-4 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-rosegold" />
        <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase">
          REDACTED ARCHIVES
        </span>
      </div>

      <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-slate-100 mb-3">
        A LITTLE PREVIEW…
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto mb-10">
        Fragments preserved in deep storage. Visual records remain heavily obfuscated.
      </p>

      {/* Grid of 1-3 blurred / cropped preview frames */}
      <div className={`grid gap-4 sm:gap-6 justify-center ${
        photos.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' : photos.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto' : 'grid-cols-1 sm:grid-cols-3'
      }`}>
        {photos.slice(0, 3).map((photoUrl, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 bg-black/60 shadow-2xl group"
          >
            {/* The Image with heavy blur and dark overlay */}
            <img
              src={photoUrl}
              alt={`Teaser snippet ${idx + 1}`}
              className="w-full h-full object-cover filter blur-lg brightness-50 contrast-125 scale-110 transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Confidential Stamp */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-rosegold mb-2 backdrop-blur-sm">
                <EyeOff className="w-5 h-5" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-300">
                FRAME {String(idx + 1).padStart(2, '0')} • REDACTED
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-serif italic text-sm text-slate-300">
          “More will be unlocked later.”
        </p>
      </div>
    </section>
  );
};
