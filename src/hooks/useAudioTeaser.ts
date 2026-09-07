import { useState, useEffect, useRef } from 'react';

export function useAudioTeaser(audioSrc: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioSrc) {
      setIsAvailable(false);
      return;
    }

    const audio = new Audio();
    audio.src = audioSrc;
    audio.preload = 'metadata';

    const handleCanPlay = () => {
      setIsAvailable(true);
    };

    const handleError = () => {
      setIsAvailable(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    // Check with a quick fetch to verify existence
    fetch(audioSrc, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setIsAvailable(true);
        } else {
          setIsAvailable(false);
        }
      })
      .catch(() => {
        setIsAvailable(false);
      });

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioSrc]);

  const togglePlay = () => {
    if (!audioRef.current || !isAvailable) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play prevented or missing file:', err);
          setIsPlaying(false);
        });
    }
  };

  return {
    isPlaying,
    isAvailable,
    togglePlay,
  };
}
