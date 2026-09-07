/**
 * Time calculation utilities with timezone precision (Asia/Kolkata).
 */

export interface TimeRemaining {
  totalMs: number;
  totalSeconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  phase: 'far' | 'approaching' | 'last24h' | 'lastHour' | 'last10m' | 'unlocked';
  progressPercentage: number;
  phaseHeadline: string;
  phaseSubtext: string;
}

/**
 * Calculates remaining time until target date with support for phase detection and progress.
 * @param targetDateIso Target timestamp (e.g. "2026-09-20T00:00:00+05:30")
 * @param simulatedOffsetMs Optional developer simulation offset
 */
export function calculateTimeRemaining(
  targetDateIso: string,
  simulatedOffsetMs: number = 0
): TimeRemaining {
  const targetTime = new Date(targetDateIso).getTime();
  const now = Date.now() + simulatedOffsetMs;
  const diff = targetTime - now;

  if (diff <= 0) {
    return {
      totalMs: 0,
      totalSeconds: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      phase: 'unlocked',
      progressPercentage: 100,
      phaseHeadline: "IT'S TIME. ❤️",
      phaseSubtext: "The wait is officially over.",
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Phase categorization
  let phase: TimeRemaining['phase'] = 'far';
  let phaseHeadline = "THE WAIT IS ON…";
  let phaseSubtext = "Whatever happens on this date… you probably shouldn't miss it.";

  if (totalSeconds <= 600) {
    // <= 10 minutes
    phase = 'last10m';
    phaseHeadline = "10 MINUTES.";
    phaseSubtext = "Keep your eyes on the screen. The countdown is reaching zero.";
  } else if (totalSeconds <= 3600) {
    // <= 1 hour
    phase = 'lastHour';
    phaseHeadline = "ONE HOUR.";
    phaseSubtext = "Don't go anywhere. Something extraordinary is about to unlock.";
  } else if (totalSeconds <= 86400) {
    // <= 24 hours
    phase = 'last24h';
    phaseHeadline = "IT'S ALMOST TIME.";
    phaseSubtext = "Tomorrow changes everything.";
  } else if (days <= 7) {
    phase = 'approaching';
    phaseHeadline = "THE WAIT IS ON…";
    phaseSubtext = "Okay… now things are getting interesting.";
  } else {
    phase = 'far';
    phaseHeadline = "THE WAIT IS ON…";
    phaseSubtext = "There's still time… but the anticipation has already begun.";
  }

  // Progress metric: based on a benchmark 30-day window before target
  const benchmarkWindowMs = 30 * 24 * 3600 * 1000;
  const elapsedInWindow = Math.max(0, benchmarkWindowMs - diff);
  const progressPercentage = Math.min(
    99.4,
    Math.max(12, Math.round((elapsedInWindow / benchmarkWindowMs) * 100))
  );

  return {
    totalMs: diff,
    totalSeconds,
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
    phase,
    progressPercentage,
    phaseHeadline,
    phaseSubtext,
  };
}

/**
 * Pads a single number to two digits (e.g. 8 -> '08')
 */
export function formatTwoDigits(val: number): string {
  return String(val).padStart(2, '0');
}
