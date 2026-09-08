import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Disc } from 'lucide-react';
import { romanticAudioSynth } from '../utils/romanticAudio';

interface AudioTeaserPlayerProps {
  audioSrc?: string;
}

export const AudioTeaserPlayer: React.FC<AudioTeaserPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [useFileAudio, setUseFileAudio] = useState(false);

  // Check if a valid audio file exists
  useEffect(() => {
    if (!audioSrc) return;

    fetch(audioSrc, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const audio = new Audio(audioSrc);
          audio.loop = true;
          audioRef.current = audio;
          setUseFileAudio(true);
        } else {
          setUseFileAudio(false);
        }
      })
      .catch(() => {
        setUseFileAudio(false);
      });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      romanticAudioSynth.stop();
    };
  }, [audioSrc]);

  // Hide the initial "Tap to play music" prompt after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    setHasUserInteracted(true);
    setShowPrompt(false);

    if (isPlaying) {
      if (useFileAudio && audioRef.current) {
        audioRef.current.pause();
      } else {
        romanticAudioSynth.stop();
      }
      setIsPlaying(false);
    } else {
      if (useFileAudio && audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Fallback to synth if audio file play is blocked
            romanticAudioSynth.start();
            setIsPlaying(true);
          });
      } else {
        romanticAudioSynth.start();
        setIsPlaying(true);
      }
    }
  };

  // Optional: Auto-start on first click anywhere on the page
  useEffect(() => {
    const handleFirstTouch = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        setShowPrompt(false);
        if (useFileAudio && audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
            romanticAudioSynth.start();
            setIsPlaying(true);
          });
        } else {
          romanticAudioSynth.start();
          setIsPlaying(true);
        }
      }
      window.removeEventListener('click', handleFirstTouch);
      window.removeEventListener('touchstart', handleFirstTouch);
    };

    window.addEventListener('click', handleFirstTouch, { once: true });
    window.addEventListener('touchstart', handleFirstTouch, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstTouch);
      window.removeEventListener('touchstart', handleFirstTouch);
    };
  }, [hasUserInteracted, useFileAudio]);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 select-none">
      {/* Gentle Floating Prompt */}
      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="px-3.5 py-1.5 rounded-full bg-black/85 border border-rose-petal/40 text-rose-blush text-xs font-mono tracking-wider shadow-2xl backdrop-blur-md flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-rose-petal animate-pulse" />
            <span>Tap for Romantic Music 🎵</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Romantic Music Player Button */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-petal ${
          isPlaying
            ? 'bg-rose-velvet/90 border-rose-petal/60 text-white shadow-[0_0_25px_rgba(255,158,187,0.4)]'
            : 'bg-black/75 border-rose-petal/30 text-rose-blush hover:border-rose-petal/60 hover:text-white'
        }`}
        aria-label={isPlaying ? 'Pause background music' : 'Play romantic background music'}
      >
        {/* Animated Disc / Icon */}
        <div className="relative flex items-center justify-center">
          <Disc
            className={`w-4 h-4 text-rose-petal transition-transform duration-700 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
        </div>

        <span className="font-mono text-xs tracking-wider uppercase font-semibold">
          {isPlaying ? 'MUSIC ON' : 'PLAY MUSIC'}
        </span>

        {/* Dancing Equalizer Bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-3.5 ml-0.5">
            <span className="w-0.5 h-3 bg-rose-petal animate-pulse" style={{ animationDuration: '0.6s' }} />
            <span className="w-0.5 h-3.5 bg-rose-blush animate-pulse delay-75" style={{ animationDuration: '0.8s' }} />
            <span className="w-0.5 h-2 bg-rose-petal animate-pulse delay-150" style={{ animationDuration: '0.5s' }} />
            <Volume2 className="w-3 h-3 text-rose-petal ml-1" />
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-rose-blush/60 ml-0.5" />
        )}
      </motion.button>
    </div>
  );
};
