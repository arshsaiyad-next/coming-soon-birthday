/**
 * Romantic Ambient Music Generator using Web Audio API.
 * Produces a soothing, warm, romantic acoustic/piano chord melody that works
 * 100% offline and reliably on all mobile & desktop browsers.
 */

class RomanticAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private step = 0;

  // Romantic chord progression frequencies (Fmaj7 - G - Em7 - Am) in warm 432Hz tuning
  private chords = [
    // Fmaj7: F3, A3, C4, E4
    [174.61, 220.00, 261.63, 329.63],
    // Cmaj7: C3, G3, B3, E4
    [130.81, 196.00, 246.94, 329.63],
    // G: G3, B3, D4, G4
    [196.00, 246.94, 293.66, 392.00],
    // Am7: A3, C4, E4, G4
    [220.00, 261.63, 329.63, 392.00],
  ];

  // Melody twinkle notes
  private melodyNotes = [
    523.25, 659.25, 587.33, 493.88, 659.25, 587.33, 523.25, 440.00,
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

      // Lowpass filter for warm, intimate, romantic lo-fi tone
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      this.masterGain.connect(filter);
      filter.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number, timeOffset: number, volume: number = 0.08) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Warm sine + subtle triangle overtone
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);

    const startTime = this.ctx.currentTime + timeOffset;
    gain.gain.setValueAtTime(0.0001, startTime);
    // Soft attack
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.12);
    // Gentle exponential decay
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  private triggerCycle() {
    if (!this.isPlaying) return;

    const chordIndex = this.step % this.chords.length;
    const chord = this.chords[chordIndex];

    // Arpeggiate chord notes smoothly
    chord.forEach((freq, idx) => {
      this.playTone(freq, 3.2, idx * 0.28, 0.09);
    });

    // Add a delicate melody note on top
    const melodyNote = this.melodyNotes[this.step % this.melodyNotes.length];
    this.playTone(melodyNote, 2.4, 0.6, 0.05);

    this.step++;
    // Loop every 2.4 seconds
    this.timerId = window.setTimeout(() => {
      this.triggerCycle();
    }, 2400);
  }

  public start() {
    if (this.isPlaying) return;
    this.initContext();
    this.isPlaying = true;
    this.step = 0;
    this.triggerCycle();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const romanticAudioSynth = new RomanticAudioSynthesizer();
