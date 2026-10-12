import React, { useState } from 'react';
import { Plus, Minus, TrendingUp, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

export const SkinnerQuadrantMatrix: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<'pos_reinf' | 'neg_reinf' | 'pos_pun' | 'neg_pun'>('pos_reinf');

  const quadrants = {
    pos_reinf: {
      type: 'Positive Reinforcement',
      nature: 'Stimulus Added (+)',
      behaviorEffect: 'Behavior Increases (▲)',
      color: 'emerald',
      rule: 'Add something desirable to increase a behavior.',
      exampleFromPDF: {
        behavior: 'Student participates in English class discussion.',
        consequence: 'Teacher gives verbal praise ("Great insight!").',
        future: 'Student is more likely to participate again.',
      },
      classroomTools: ['Teacher verbal praise & affirmation', 'Reading stickers & milestone bookmarks', 'Extra free library reading time', 'Positive comment on essay draft'],
    },
    neg_reinf: {
      type: 'Negative Reinforcement',
      nature: 'Stimulus Removed (−)',
      behaviorEffect: 'Behavior Increases (▲)',
      color: 'teal',
      rule: 'Remove something unpleasant to increase a behavior.',
      exampleFromPDF: {
        behavior: 'Student completes the homework assignment on time.',
        consequence: 'An unpleasant extra requirement is removed.',
        future: 'Student is more likely to complete assignments again.',
      },
      classroomTools: ['Exemption from weekend grammar worksheet', 'Removal of seated restrictions during group work', 'Dropping the lowest assessment score'],
    },
    pos_pun: {
      type: 'Positive Punishment',
      nature: 'Stimulus Added (+)',
      behaviorEffect: 'Behavior Decreases (▼)',
      color: 'rose',
      rule: 'Add something unpleasant to decrease a behavior.',
      exampleFromPDF: {
        behavior: 'Student is talking or disruptive during lecture.',
        consequence: 'Teacher delivers a formal verbal warning.',
        future: 'Student is less likely to talk during instructional time.',
      },
      classroomTools: ['Direct classroom verbal warning', 'Assigned reflection paragraph on behavior', 'Relocation to front teacher desk'],
    },
    neg_pun: {
      type: 'Negative Punishment',
      nature: 'Stimulus Removed (−)',
      behaviorEffect: 'Behavior Decreases (▼)',
      color: 'amber',
      rule: 'Remove something desirable to decrease a behavior.',
      exampleFromPDF: {
        behavior: 'Student does not complete assigned essay.',
        consequence: 'Teacher takes away classroom game time / privileges.',
        future: 'Student is less likely to neglect homework obligations.',
      },
      classroomTools: ['Loss of choice reading / tablet time', 'Loss of student line-leader role', 'Suspension of classroom social privileges'],
    },
  };

  const current = quadrants[selectedQuadrant];

  return (
    <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-5 md:p-6 text-stone-800 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-stone-200">
        <div>
          <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
            Operant Conditioning Matrix
          </span>
          <h4 className="text-lg font-black text-stone-900 font-heading-display">
            The 2×2 Operant Consequence Grid
          </h4>
        </div>
        <div className="text-xs font-semibold text-stone-600">
          Click any quadrant to view classroom examples
        </div>
      </div>

      {/* 2x2 Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
        {/* Positive Reinforcement */}
        <button
          onClick={() => setSelectedQuadrant('pos_reinf')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedQuadrant === 'pos_reinf'
              ? 'bg-emerald-50 border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
              : 'bg-white border-stone-200 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                +
              </span>
              <span className="font-bold text-emerald-950 text-sm font-heading-display">
                Positive Reinforcement
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Increases
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-2 font-medium">
            Add something desirable to increase behavior
          </p>
        </button>

        {/* Negative Reinforcement */}
        <button
          onClick={() => setSelectedQuadrant('neg_reinf')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedQuadrant === 'neg_reinf'
              ? 'bg-teal-50 border-teal-600 shadow-md ring-2 ring-teal-500/20'
              : 'bg-white border-stone-200 hover:border-teal-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-teal-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                −
              </span>
              <span className="font-bold text-teal-950 text-sm font-heading-display">
                Negative Reinforcement
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-teal-700 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Increases
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-2 font-medium">
            Remove something unpleasant to increase behavior
          </p>
        </button>

        {/* Positive Punishment */}
        <button
          onClick={() => setSelectedQuadrant('pos_pun')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedQuadrant === 'pos_pun'
              ? 'bg-rose-50 border-rose-600 shadow-md ring-2 ring-rose-500/20'
              : 'bg-white border-stone-200 hover:border-rose-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                +
              </span>
              <span className="font-bold text-rose-950 text-sm font-heading-display">
                Positive Punishment
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-rose-700 flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> Decreases
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-2 font-medium">
            Add something unpleasant to decrease behavior
          </p>
        </button>

        {/* Negative Punishment */}
        <button
          onClick={() => setSelectedQuadrant('neg_pun')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedQuadrant === 'neg_pun'
              ? 'bg-amber-50 border-amber-600 shadow-md ring-2 ring-amber-500/20'
              : 'bg-white border-stone-200 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                −
              </span>
              <span className="font-bold text-amber-950 text-sm font-heading-display">
                Negative Punishment
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> Decreases
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-2 font-medium">
            Remove something desirable to decrease behavior
          </p>
        </button>
      </div>

      {/* Classroom Demonstration Card from PDF */}
      <div className="mt-5 p-4 bg-white border-2 border-stone-200 rounded-xl shadow-xs">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-200">
          <div className="text-xs font-mono font-bold text-stone-500">
            Classroom Case Study from PDF Slide
          </div>
          <div className="text-xs font-bold text-amber-950">{current.rule}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wide block mb-1">
              Step 1: Student Behavior
            </span>
            <div className="text-xs text-stone-900 font-bold">{current.exampleFromPDF.behavior}</div>
          </div>

          <div className="p-3 bg-amber-50/70 border border-amber-300 rounded-lg">
            <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wide block mb-1">
              Step 2: Consequence Applied
            </span>
            <div className="text-xs text-amber-950 font-bold">{current.exampleFromPDF.consequence}</div>
          </div>

          <div className="p-3 bg-teal-50/70 border border-teal-300 rounded-lg">
            <span className="text-[10px] font-mono font-bold text-teal-800 uppercase tracking-wide block mb-1">
              Step 3: Future Probability
            </span>
            <div className="text-xs text-teal-950 font-bold">{current.exampleFromPDF.future}</div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-600 flex flex-wrap gap-x-4 gap-y-1">
          <span className="font-bold text-stone-700">Educator tools:</span>
          {current.classroomTools.map((t, idx) => (
            <span key={idx} className="font-medium text-stone-700">· {t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
