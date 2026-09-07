import { useState, useEffect } from 'react';
import { calculateTimeRemaining, type TimeRemaining } from '../utils/timeUtils';

export type SimulationMode = 'live' | 'last24h' | 'lastHour' | 'last10m' | 'unlocked';

export function useCountdown(targetDateIso: string) {
  const [simulationMode, setSimulationMode] = useState<SimulationMode>('live');
  
  // Calculate simulated offset based on mode
  const getSimulatedOffset = (mode: SimulationMode): number => {
    if (mode === 'live') return 0;
    
    const targetMs = new Date(targetDateIso).getTime();
    const now = Date.now();
    const currentDiff = targetMs - now;

    switch (mode) {
      case 'last24h':
        // Set remaining to exactly 23 hours, 59 mins
        return currentDiff - (23 * 3600 + 59 * 60) * 1000;
      case 'lastHour':
        // Set remaining to 45 minutes
        return currentDiff - (45 * 60) * 1000;
      case 'last10m':
        // Set remaining to 9 minutes, 40 seconds
        return currentDiff - (9 * 60 + 40) * 1000;
      case 'unlocked':
        // Target passed
        return currentDiff + 10000;
      default:
        return 0;
    }
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(targetDateIso, 0)
  );

  useEffect(() => {
    const update = () => {
      const offset = getSimulatedOffset(simulationMode);
      setTimeRemaining(calculateTimeRemaining(targetDateIso, offset));
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [targetDateIso, simulationMode]);

  return {
    timeRemaining,
    simulationMode,
    setSimulationMode,
  };
}
