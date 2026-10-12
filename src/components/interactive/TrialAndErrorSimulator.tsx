import React, { useState } from 'react';
import { Play, RotateCcw, Clock, Award, CheckCircle2 } from 'lucide-react';

export const TrialAndErrorSimulator: React.FC = () => {
  const [trial, setTrial] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  // Thorndike's empirical escape latency curve (seconds to escape)
  const trialLatencies = [160, 115, 75, 45, 28, 16, 9, 6];

  const handleNextTrial = () => {
    if (trial >= trialLatencies.length) return;
    setIsRunning(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 500);
    setTimeout(() => setActiveStep(3), 1000);
    setTimeout(() => {
      setActiveStep(4);
      setTrial((prev) => Math.min(prev + 1, trialLatencies.length));
      setIsRunning(false);
    }, 1500);
  };

  const handleReset = () => {
    setTrial(1);
    setActiveStep(1);
    setIsRunning(false);
  };

  const currentSeconds = trialLatencies[trial - 1];

  return (
    <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-5 md:p-6 text-stone-800 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-amber-200">
        <div>
          <span className="text-xs font-mono font-bold text-red-900 uppercase tracking-wider">
            Empirical Puzzle-Box Data
          </span>
          <h4 className="text-lg font-black text-stone-900 font-heading-display">
            Thorndike Trial & Error Learning Curve
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleNextTrial}
            disabled={trial >= trialLatencies.length || isRunning}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-800 hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all shadow-xs cursor-pointer font-heading-display"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? 'Running Trial...' : trial < trialLatencies.length ? `Run Trial ${trial + 1}` : 'All Trials Complete'}</span>
          </button>
        </div>
      </div>

      {/* 4-Step Cycle Status from PDF Page 7 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
        {[
          { step: 1, label: '1. Trial & Error', desc: 'Random exploratory movements' },
          { step: 2, label: '2. Accidental Success', desc: 'Paw strikes release latch by chance' },
          { step: 3, label: '3. Reward', desc: 'Access to food outside box' },
          { step: 4, label: '4. Learning', desc: 'Connection strengthened over trials' },
        ].map((s) => (
          <div
            key={s.step}
            className={`p-3 rounded-xl border-2 text-left transition-all ${
              activeStep === s.step
                ? 'bg-amber-100 border-amber-500 text-amber-950 shadow-xs'
                : 'bg-white border-amber-200 text-stone-600'
            }`}
          >
            <div className="text-xs font-bold text-stone-900">{s.label}</div>
            <div className="text-[11px] text-stone-500 mt-0.5 font-medium">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Live Metrics & Visual Graph */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white border-2 border-amber-200 p-4 rounded-xl shadow-xs">
        <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-center">
          <div className="text-xs font-mono font-bold text-stone-500 uppercase">Current Trial</div>
          <div className="text-3xl font-black text-red-900 mt-1 tabular-nums font-heading-display">
            {trial} <span className="text-xs font-medium text-stone-500">/ 8</span>
          </div>
          <div className="text-[11px] text-stone-600 font-medium mt-1">Repeated practice count</div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-center">
          <div className="text-xs font-mono font-bold text-amber-800 uppercase flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Escape Latency</span>
          </div>
          <div className="text-3xl font-black text-amber-900 mt-1 tabular-nums font-heading-display">
            {currentSeconds} <span className="text-xs font-medium text-stone-600">sec</span>
          </div>
          <div className="text-[11px] text-amber-800 font-medium mt-1">
            {trial === 1 ? 'Initial erratic attempts' : `${Math.round(((160 - currentSeconds) / 160) * 100)}% latency drop!`}
          </div>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
          <div className="text-xs font-mono font-bold text-emerald-800 uppercase flex items-center justify-center gap-1">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>S-R Connection Bond</span>
          </div>
          <div className="text-3xl font-black text-emerald-900 mt-1 tabular-nums font-heading-display">
            {Math.round((trial / 8) * 100)}%
          </div>
          <div className="text-[11px] text-emerald-800 font-medium mt-1">Strengthened via Law of Effect</div>
        </div>
      </div>

      {/* Latency Reduction Bar Visualization */}
      <div className="mt-4 p-4 bg-white rounded-xl border border-amber-200 shadow-xs">
        <div className="flex justify-between text-xs text-stone-600 mb-2 font-mono font-bold">
          <span>Trial 1 (160s)</span>
          <span className="text-red-900">Trial-by-Trial Escape Duration Curve</span>
          <span>Trial 8 (6s)</span>
        </div>
        <div className="grid grid-cols-8 gap-2 h-20 items-end">
          {trialLatencies.map((sec, idx) => {
            const isCompleted = idx < trial;
            const isCurrent = idx === trial - 1;
            const heightPercent = Math.max(12, Math.round((sec / 160) * 100));

            return (
              <div key={idx} className="flex flex-col items-center gap-1 h-full justify-end">
                <span className="text-[10px] font-mono font-bold text-stone-600">{sec}s</span>
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full rounded-t-md transition-all duration-300 ${
                    isCurrent
                      ? 'bg-amber-500 shadow-sm'
                      : isCompleted
                      ? 'bg-red-800'
                      : 'bg-stone-200'
                  }`}
                />
                <span className="text-[10px] font-mono font-bold text-stone-500">T{idx + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
