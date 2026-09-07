import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useAudioTeaser } from '../hooks/useAudioTeaser';

interface AudioTeaserPlayerProps {
  audioSrc: string;
}

export const AudioTeaserPlayer: React.FC<AudioTeaserPlayerProps> = ({ audioSrc }) => {
  const { isPlaying, isAvailable, togglePlay } = useAudioTeaser(audioSrc);

  // If audio file doesn't exist or is missing, automatically hide the player cleanly
  if (!isAvailable) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/80 hover:bg-black border border-rosegold/30 text-white shadow-2xl backdrop-blur-md cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold"
        aria-label={isPlaying ? 'Pause audio teaser' : 'Play audio teaser'}
      >
        <div className="w-6 h-6 rounded-full bg-rosegold/20 flex items-center justify-center text-rosegold">
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current translate-x-[1px]" />
          )}
        </div>

        <span className="font-mono text-xs tracking-wider uppercase text-slate-200">
          {isPlaying ? 'PAUSE TEASER' : 'PLAY THE TEASER'}
        </span>

        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-1">
            <span className="w-0.5 h-3 bg-rosegold animate-pulse" />
            <span className="w-0.5 h-4 bg-rosegold animate-pulse delay-75" />
            <span className="w-0.5 h-2 bg-rosegold animate-pulse delay-150" />
          </div>
        )}
      </motion.button>
    </div>
  );
};
