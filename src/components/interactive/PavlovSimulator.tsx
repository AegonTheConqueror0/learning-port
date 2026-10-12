import React, { useState } from 'react';
import { Bell, Utensils, Droplets, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

export const PavlovSimulator: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [isRinging, setIsRinging] = useState(false);
  const [isSalivating, setIsSalivating] = useState(false);

  // Play synthesized bell chime using Web Audio API
  const playBellSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch {
      // Audio fallback in restrictive environments
    }
  };

  const handleTestStep = (stage: number) => {
    setActiveStage(stage);
    if (stage === 2 || stage === 3 || stage === 4) {
      setIsRinging(true);
      playBellSound();
      setTimeout(() => setIsRinging(false), 900);
    }
    if (stage === 1 || stage === 3 || stage === 4) {
      setTimeout(() => {
        setIsSalivating(true);
        setTimeout(() => setIsSalivating(false), 1400);
      }, stage === 3 ? 400 : 200);
    } else {
      setIsSalivating(false);
    }
  };

  return (
    <div className="bg-emerald-50/70 border-2 border-emerald-200 rounded-2xl p-5 md:p-6 text-stone-800 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-emerald-200">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
            Interactive Classroom Laboratory
          </span>
          <h4 className="text-lg font-black text-stone-900 font-heading-display">
            Pavlovian Conditioning Simulator
          </h4>
        </div>
        <button
          onClick={() => handleTestStep(1)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 bg-white border border-emerald-300 rounded-lg transition-colors shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Stage 1</span>
        </button>
      </div>

      {/* Stage Selector Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
        {[
          { num: 1, title: '1. Food (US)', sub: 'Natural Inborn Reflex' },
          { num: 2, title: '2. Bell (NS)', sub: 'Neutral Sound Cue' },
          { num: 3, title: '3. Bell + Food', sub: 'Repeated Pairing' },
          { num: 4, title: '4. Bell Alone (CS)', sub: 'Conditioned Reflex' },
        ].map((item) => (
          <button
            key={item.num}
            onClick={() => handleTestStep(item.num)}
            className={`p-3 text-left rounded-xl transition-all border-2 cursor-pointer shadow-xs ${
              activeStage === item.num
                ? 'bg-emerald-700 border-emerald-800 text-white shadow-md'
                : 'bg-white border-emerald-200 text-stone-700 hover:border-emerald-400'
            }`}
          >
            <div className={`text-xs font-black ${activeStage === item.num ? 'text-white' : 'text-emerald-900'}`}>
              {item.title}
            </div>
            <div className={`text-[11px] mt-0.5 ${activeStage === item.num ? 'text-emerald-100' : 'text-stone-500'}`}>
              {item.sub}
            </div>
          </button>
        ))}
      </div>

      {/* Experimental Chamber */}
      <div className="mt-5 p-5 bg-white border-2 border-emerald-200 rounded-xl shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Stimulus Source */}
          <div className="flex flex-col items-center justify-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 mb-2">
              Applied Stimulus
            </span>
            <div className="flex items-center gap-3">
              {(activeStage === 2 || activeStage === 3 || activeStage === 4) && (
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md ${
                    isRinging ? 'bg-amber-400 text-stone-900 scale-110' : 'bg-amber-100 text-amber-800 border-2 border-amber-300'
                  }`}
                >
                  <Bell className={`w-7 h-7 ${isRinging ? 'animate-bounce' : ''}`} />
                </div>
              )}
              {(activeStage === 1 || activeStage === 3) && (
                <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-800 shadow-md">
                  <Utensils className="w-7 h-7" />
                </div>
              )}
            </div>
            <div className="mt-3 text-xs font-bold text-stone-900">
              {activeStage === 1 && 'Food (Unconditioned Stimulus / US)'}
              {activeStage === 2 && 'Bell Sound (Neutral Stimulus / NS)'}
              {activeStage === 3 && 'Bell (NS) + Food (US) Pairing'}
              {activeStage === 4 && 'Bell Alone (Conditioned Stimulus / CS)'}
            </div>
          </div>

          {/* Neural Association Bridge */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-xs font-bold text-emerald-900 mb-1">
              {activeStage === 1 && 'Inborn Biological Pathway'}
              {activeStage === 2 && 'Zero Association Yet'}
              {activeStage === 3 && 'Acquisition in Progress'}
              {activeStage === 4 && 'Conditioned Reflex Established!'}
            </div>
            <div className="h-2 w-full max-w-[140px] bg-stone-200 relative my-2 overflow-hidden rounded-full">
              <div
                className={`h-full bg-emerald-700 transition-all duration-500 ${
                  activeStage === 1 ? 'w-full' : activeStage === 2 ? 'w-0' : activeStage === 3 ? 'w-3/4' : 'w-full'
                }`}
              />
            </div>
            <span className="text-[11px] text-stone-600 font-medium">
              {activeStage === 1 && 'Direct natural reflex arc'}
              {activeStage === 2 && 'Organism pays ear-pricking attention only'}
              {activeStage === 3 && 'Repeated temporal pairings'}
              {activeStage === 4 && 'Learned association triggers salivation'}
            </span>
          </div>

          {/* Organism Response */}
          <div className="flex flex-col items-center justify-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900 mb-2">
              Salivary Response
            </span>
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md ${
                isSalivating || (activeStage !== 2 && !isSalivating)
                  ? 'bg-teal-100 border-2 border-teal-400 text-teal-800'
                  : 'bg-stone-100 text-stone-400'
              }`}
            >
              <Droplets className={`w-7 h-7 ${isSalivating ? 'animate-pulse text-teal-700 scale-110' : ''}`} />
            </div>
            <div className="mt-3 text-xs font-bold">
              {activeStage === 1 && <span className="text-emerald-800">Salivation (Unconditioned Response)</span>}
              {activeStage === 2 && <span className="text-stone-500">No Salivation (Baseline)</span>}
              {activeStage === 3 && <span className="text-emerald-800">Salivation (To Food Component)</span>}
              {activeStage === 4 && <span className="text-teal-800">Salivation (Conditioned Response)</span>}
            </div>
          </div>
        </div>

        {/* Action Trigger Button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => handleTestStep(activeStage)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-heading-display"
          >
            <Volume2 className="w-4 h-4" />
            <span>Simulate Trial For Step {activeStage}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
