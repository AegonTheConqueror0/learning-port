import React, { useState } from 'react';
import { User, Users, Activity, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const ReciprocalDeterminismModel: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<'person' | 'environment' | 'behavior'>('person');

  const nodes = {
    person: {
      code: '01',
      title: 'Person (Cognitive & Internal)',
      color: 'red',
      items: [
        'Temperament & Personality',
        'Personal Preferences & Values',
        'Intelligence (of all types)',
        'Cognitive Beliefs & Self-Efficacy',
      ],
      scenario: 'An English student who believes in their writing capability (Self-Efficacy / Person) approaches an essay assignment with high motivation and creative enthusiasm.',
    },
    environment: {
      code: '02',
      title: 'Environment (External Context)',
      color: 'rose',
      items: [
        'Context & Social Networks',
        'Culture & Communal Standards',
        'Other People & Role Models (Teachers/Peers)',
        'Physical Setting & Classroom Climate',
      ],
      scenario: 'The English teacher provides supportive rubrics and peers model constructive peer-review feedback (Environment), encouraging the student to take creative risks.',
    },
    behavior: {
      code: '03',
      title: 'Behavior (Observable Actions)',
      color: 'amber',
      items: [
        'Actions & Physical Performance',
        'Facial Expressions & Non-verbals',
        'Verbalizations & Essay Writing',
        'Effort & Revision Persistence',
      ],
      scenario: 'The student actively drafts outlines, asks clarifying vocabulary questions, and revises their paragraphs (Behavior), producing high-level academic work.',
    },
  };

  const activeData = nodes[selectedNode];

  return (
    <div className="bg-stone-50 border-2 border-stone-200 rounded-2xl p-5 md:p-6 text-stone-800 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-stone-200">
        <div>
          <span className="text-xs font-mono font-bold text-red-900 uppercase tracking-wider">
            Albert Bandura's Triadic Causation
          </span>
          <h4 className="text-lg font-black text-stone-900 font-heading-display">
            Model of Reciprocal Determinism
          </h4>
        </div>
        <div className="text-xs font-semibold text-stone-600">
          Click any of the 3 components to see interactive classroom interplay
        </div>
      </div>

      {/* Triangular Node Selector with warm colors, zero blue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4">
        <button
          onClick={() => setSelectedNode('person')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedNode === 'person'
              ? 'bg-red-50 border-red-700 shadow-md ring-2 ring-red-500/20'
              : 'bg-white border-stone-200 hover:border-red-400'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-black text-red-800">01</span>
            <User className="w-5 h-5 text-red-700" />
          </div>
          <div className="text-sm font-bold text-stone-900 font-heading-display">Person</div>
          <p className="text-xs text-stone-600 mt-1 font-medium">Cognition, temperament, self-efficacy</p>
        </button>

        <button
          onClick={() => setSelectedNode('environment')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedNode === 'environment'
              ? 'bg-rose-50 border-rose-600 shadow-md ring-2 ring-rose-500/20'
              : 'bg-white border-stone-200 hover:border-rose-400'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-black text-rose-700">02</span>
            <Users className="w-5 h-5 text-rose-600" />
          </div>
          <div className="text-sm font-bold text-stone-900 font-heading-display">Environment</div>
          <p className="text-xs text-stone-600 mt-1 font-medium">Classroom, peers, teacher modeling</p>
        </button>

        <button
          onClick={() => setSelectedNode('behavior')}
          className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
            selectedNode === 'behavior'
              ? 'bg-amber-50 border-amber-600 shadow-md ring-2 ring-amber-500/20'
              : 'bg-white border-stone-200 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-black text-amber-700">03</span>
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-sm font-bold text-stone-900 font-heading-display">Behavior</div>
          <p className="text-xs text-stone-600 mt-1 font-medium">Actions, verbalizations, writing effort</p>
        </button>
      </div>

      {/* Interactive Detail Box */}
      <div className="mt-5 p-5 bg-white border-2 border-stone-200 rounded-xl shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-black px-2 py-0.5 bg-red-100 text-red-900 rounded">
              {activeData.code}
            </span>
            <h5 className="font-bold text-stone-900 text-sm font-heading-display">{activeData.title}</h5>
          </div>
          <span className="text-[11px] font-mono font-bold text-stone-500 flex items-center gap-1">
            <ArrowLeftRight className="w-3.5 h-3.5" /> Bidirectional Interaction
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <div className="text-xs font-bold text-stone-600 mb-2 font-mono uppercase">
              Attributes from Slide 34:
            </div>
            <ul className="space-y-1.5">
              {activeData.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-stone-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl">
            <div className="text-xs font-bold text-amber-950 mb-1 font-heading-display">
              English Classroom Example:
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-medium">{activeData.scenario}</p>
            <div className="mt-3 text-[11px] text-stone-500 italic">
              "Behavior, internal personal factors, and environmental influences all operate as interacting determinants that influence one another bidirectionally." — Bandura
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
