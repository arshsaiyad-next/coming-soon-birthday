import React, { useState } from 'react';
import type { SimulationMode } from '../hooks/useCountdown';
import { Sliders, X, Check } from 'lucide-react';

interface DevPreviewBarProps {
  currentMode: SimulationMode;
  onSelectMode: (mode: SimulationMode) => void;
}

export const DevPreviewBar: React.FC<DevPreviewBarProps> = ({
  currentMode,
  onSelectMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const modes: { id: SimulationMode; label: string }[] = [
    { id: 'live', label: 'Live Countdown (2026)' },
    { id: 'last24h', label: '< 24 Hours Remaining' },
    { id: 'lastHour', label: '< 1 Hour Remaining' },
    { id: 'last10m', label: '< 10 Mins Remaining' },
    { id: 'unlocked', label: "Zero State (IT'S TIME ❤️)" },
  ];

  return (
    <aside aria-label="Simulation Controls" className="fixed bottom-4 left-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/80 hover:bg-black border border-rose-petal/35 text-rose-blush hover:text-white text-xs font-mono tracking-wider backdrop-blur-md shadow-2xl transition-all cursor-pointer"
          title="Preview different countdown states"
        >
          <Sliders className="w-3.5 h-3.5 text-rose-petal" />
          <span>SIMULATE TIMELINE</span>
        </button>
      ) : (
        <div className="romantic-glass p-4 rounded-3xl border border-rose-petal/40 shadow-2xl backdrop-blur-2xl flex flex-col gap-2 max-w-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-mono text-[11px] text-rose-petal uppercase tracking-wider font-bold">
              PREVIEW PHASES
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-rose-blush/70 hover:text-white p-1 rounded transition-colors"
              aria-label="Close simulation bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {modes.map((m) => {
              const active = currentMode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => onSelectMode(m.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-left transition-colors cursor-pointer ${
                    active
                      ? 'bg-rose-petal/25 text-rose-petal font-bold border border-rose-petal/40'
                      : 'text-rose-blush/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{m.label}</span>
                  {active && <Check className="w-3.5 h-3.5 text-rose-petal" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};
