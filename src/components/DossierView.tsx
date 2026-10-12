import React, { useState } from 'react';
import { TheoristId } from '../types/presentation';
import { THEORIST_IMAGES } from '../data/assets';
import { TrialAndErrorSimulator } from './interactive/TrialAndErrorSimulator';
import { SkinnerQuadrantMatrix } from './interactive/SkinnerQuadrantMatrix';
import { PavlovSimulator } from './interactive/PavlovSimulator';
import { ReciprocalDeterminismModel } from './interactive/ReciprocalDeterminismModel';
import {
  Presentation,
  Lightbulb,
  Puzzle,
  Brain,
  Quote,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  BookOpen,
  ArrowUp,
  Award,
  Clock,
  Sparkles,
  GraduationCap,
  PenTool,
} from 'lucide-react';

interface DossierViewProps {
  onSwitchToDeck: (slideNumber?: number) => void;
}

export const DossierView: React.FC<DossierViewProps> = ({ onSwitchToDeck }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-stone-900 pb-24">
      {/* Dossier Header Banner with Warm Academic Look */}
      <section className="border-b border-stone-200 bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-900 uppercase tracking-widest mb-3 px-3 py-1 bg-red-100/80 rounded-full border border-red-300">
            <span>Group 3 Digital Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 uppercase font-serif-title tracking-tight leading-tight">
            Behavioral Learning Theory or Association
          </h1>

          {/* Reporters Display */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-900 bg-red-100/80 px-2.5 py-1 rounded-lg border border-red-200">
              Reporters
            </span>
            <span className="px-3 py-1 bg-white border border-stone-300 rounded-lg text-xs font-bold text-stone-900 shadow-xs font-heading-display">
              Jade Christal Bate
            </span>
            <span className="px-3 py-1 bg-white border border-stone-300 rounded-lg text-xs font-bold text-stone-900 shadow-xs font-heading-display">
              Mellin Joyce Z. Ibo
            </span>
            <span className="px-3 py-1 bg-white border border-stone-300 rounded-lg text-xs font-bold text-stone-900 shadow-xs font-heading-display">
              Keen Enderes
            </span>
            <span className="px-3 py-1 bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-mono font-bold rounded-lg shadow-xs">
              MAED-English
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed font-medium">
            An in-depth, scrollable academic exploration of the four cornerstone behavioral paradigms:
            <span className="text-red-800 font-bold"> Connectionism</span>,
            <span className="text-amber-800 font-bold"> Operant Conditioning</span>,
            <span className="text-emerald-800 font-bold"> Classical Conditioning</span>, and
            <span className="text-orange-800 font-bold"> Social Learning Theory</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onSwitchToDeck(1)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-heading-display"
            >
              <Presentation className="w-4 h-4" />
              <span>Launch Presentation Cards Mode</span>
            </button>
          </div>
        </div>
      </section>

    
      <div className="sticky top-[57px] z-30 bg-[#fdfcf9]/95 border-b border-stone-200 backdrop-blur-md px-6 py-2.5 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-3 sm:gap-6 shrink-0 text-xs font-bold text-stone-600 font-heading-display">
            <button
              onClick={() => scrollToSection('chapter-thorndike')}
              className="hover:text-red-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              01. Thorndike
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={() => scrollToSection('chapter-skinner')}
              className="hover:text-amber-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              02. Skinner
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={() => scrollToSection('chapter-pavlov')}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              03. Pavlov
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={() => scrollToSection('chapter-bandura')}
              className="hover:text-orange-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              04. Bandura
            </button>
            <span className="text-stone-300">/</span>
            <button
              onClick={() => scrollToSection('chapter-synthesis')}
              className="hover:text-red-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              05. Synthesis
            </button>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-stone-500 hover:text-stone-900 p-1.5 rounded-lg hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 pt-10 space-y-20">
        {/* ========================================================================= */}
        {/* CHAPTER 1: EDWARD LEE THORNDIKE */}
        {/* ========================================================================= */}
        <section id="chapter-thorndike" className="scroll-mt-24 pt-6 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-red-800 uppercase tracking-wider">
                Part 01 · 1874–1949
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title">
                Edward Lee Thorndike & Connectionism
              </h2>
            </div>
            <button
              onClick={() => onSwitchToDeck(2)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-red-800 font-bold hover:underline cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present as Card</span>
            </button>
          </div>

          {/* Theorist Quote & Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-md">
                <img
                  src={THEORIST_IMAGES.thorndike}
                  alt="Edward Lee Thorndike"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-3/4 object-cover object-top"
                />
                <div className="p-3 bg-red-900 text-white text-center">
                  <div className="text-xs font-bold">Edward Lee Thorndike</div>
                  <div className="text-[11px] text-red-200 font-mono">Born August 31, 1874</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <blockquote className="p-5 rounded-xl bg-red-50 border-2 border-red-200 font-serif-title italic font-bold text-base sm:text-lg text-red-950">
                “Learning is the strengthening of connections between situations and responses through experience.”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-xs font-mono font-bold text-red-800">1895</span>
                  <div className="text-xs font-bold text-stone-900 mt-1">Bachelor's Degree</div>
                  <div className="text-[11px] text-stone-600">Wesleyan University</div>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-xs font-mono font-bold text-red-800">1897</span>
                  <div className="text-xs font-bold text-stone-900 mt-1">Master's Degree</div>
                  <div className="text-[11px] text-stone-600">Harvard University</div>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-xs font-mono font-bold text-red-800">1898</span>
                  <div className="text-xs font-bold text-stone-900 mt-1">Ph.D. in Psychology</div>
                  <div className="text-[11px] text-stone-600">Columbia University</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                Thorndike established that learning is the process of forming a mental link or "bond"
                between a stimulus and a response. Learning develops incrementally through repeated practice
                rather than sudden intuitive leaps.
              </p>

            </div>
          </div>

          {/* Trial & Error Experiment Deep-Dive */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading-display">
              Trial and Error Learning & Puzzle-Box Experiments
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed font-medium">
              Thorndike tested hungry cats in puzzle boxes with food placed outside. Through random exploratory actions,
              cats accidentally triggered the latch to escape. With successive trials, erratic behaviors were weeded out,
              and escape became significantly faster and more efficient.
            </p>

            <TrialAndErrorSimulator />
          </div>

          {/* Thorndike's 3 Primary Laws */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-4 font-heading-display">
              Thorndike's 3 Primary Laws of Learning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-emerald-700 text-white mb-3 shadow-xs">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-emerald-950 text-sm mb-1 font-heading-display">
                  Law of Readiness
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Learning is most effective when a person is prepared to learn. Readiness facilitates the
                  strengthening of neural connections. Being forced to learn when unready causes frustration.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-amber-700 text-white mb-3 shadow-xs">
                  <Puzzle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-amber-950 text-sm mb-1 font-heading-display">
                  Law of Exercise
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Practice strengthens learning; connections are weakened without practice. Composed of the Law
                  of Use (strengthened with practice) and Law of Disuse (fading without practice).
                </p>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                <div className="p-2 w-fit rounded-lg bg-red-700 text-white mb-3 shadow-xs">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-red-950 text-sm mb-1 font-heading-display">
                  Law of Effect
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  Responses followed by satisfaction are strengthened; responses followed by discomfort are weakened.
                  This principle directly anticipated modern reinforcement theory.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs text-red-950 font-medium">
              <span className="font-bold">Conclusion on Thorndike:</span> Edward Lee Thorndike's work
              showed that learning develops through experience, practice, and consequences. His ideas became an important
              foundation for learning theories and educational psychology, influencing how teachers understand and facilitate learning.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 2: B.F. SKINNER */}
        {/* ========================================================================= */}
        <section id="chapter-skinner" className="scroll-mt-24 pt-6 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                Part 02 · 1904–1990
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title">
                B.F. Skinner & Operant Conditioning
              </h2>
            </div>
            <button
              onClick={() => onSwitchToDeck(7)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-amber-800 font-bold hover:underline cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present as Card</span>
            </button>
          </div>

          {/* Skinner Hero Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-md">
                <img
                  src={THEORIST_IMAGES.skinner}
                  alt="B.F. Skinner"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-3/4 object-cover object-top"
                />
                <div className="p-3 bg-stone-900 text-white text-center">
                  <div className="text-xs font-bold">Burrhus Frederic Skinner</div>
                  <div className="text-[11px] text-amber-300 font-mono">1904 – 1990 · American Psychologist</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <blockquote className="p-5 rounded-xl bg-amber-50 border-2 border-amber-300 font-serif-title italic font-bold text-base sm:text-lg text-stone-900">
                “The consequences of behavior are the real teachers.”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                Burrhus Frederic Skinner was an American psychologist, behaviorist, and researcher who studied
                how behavior is influenced by its consequences. His work greatly contributed to the field of
                learning, education, and behavior modification.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-[11px] font-mono font-bold text-amber-800">1904</span>
                  <div className="text-xs font-bold text-stone-900">Born</div>
                  <div className="text-[10px] text-stone-600">Susquehanna, PA</div>
                </div>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-[11px] font-mono font-bold text-amber-800">1931</span>
                  <div className="text-xs font-bold text-stone-900">PhD Psychology</div>
                  <div className="text-[10px] text-stone-600">Harvard University</div>
                </div>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-[11px] font-mono font-bold text-amber-800">1936–45</span>
                  <div className="text-xs font-bold text-stone-900">Skinner Box</div>
                  <div className="text-[10px] text-stone-600">Operant Research</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skinner Box Apparatus Diagram */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-md">
                <img
                  src={THEORIST_IMAGES.skinnerBox}
                  alt="Skinner Box Apparatus Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="p-2.5 bg-stone-900 text-white text-center text-[11px] font-mono">
                  The Operant Conditioning Chamber with Lever & Food Dispenser
                </div>
              </div>
            </div>

            <div className="md:col-span-6 space-y-3">
              <h3 className="text-base font-bold text-stone-900 font-heading-display">
                How Did Skinner Study Behavior?
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                A Skinner box is a controlled environment used to study how consequences (rewards or punishments)
                influence the likelihood of behavior occurring again.
              </p>

              <div className="space-y-2">
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium">
                  <span className="font-bold text-amber-800">1. Action:</span> The rat presses the lever.
                </div>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium">
                  <span className="font-bold text-amber-800">2. Consequence:</span> The rat receives a food pellet.
                </div>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium">
                  <span className="font-bold text-amber-800">3. Rate Increases:</span> The rat is more likely to press again.
                </div>
                <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium">
                  <span className="font-bold text-amber-800">4. Learning:</span> Food reinforces the operant response.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Operant Matrix Tool */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading-display">
              Reinforcement vs. Punishment Decision Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 font-medium">
              Explore the 4 quadrants of operant conditioning with direct classroom scenarios from the presentation:
            </p>
            <SkinnerQuadrantMatrix />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 3: IVAN PAVLOV */}
        {/* ========================================================================= */}
        <section id="chapter-pavlov" className="scroll-mt-24 pt-6 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                Part 03 · 1849–1936
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title">
                Ivan Pavlov & Classical Conditioning
              </h2>
            </div>
            <button
              onClick={() => onSwitchToDeck(15)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-800 font-bold hover:underline cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present as Card</span>
            </button>
          </div>

          {/* Pavlov Hero Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-md">
                <img
                  src={THEORIST_IMAGES.pavlov}
                  alt="Ivan Pavlov"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-3/4 object-cover object-top"
                />
                <div className="p-3 bg-emerald-950 text-white text-center">
                  <div className="text-xs font-bold">Ivan Pavlov</div>
                  <div className="text-[11px] text-emerald-200 font-mono">1849 – 1936 · 1904 Nobel Laureate</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <blockquote className="p-5 rounded-xl bg-emerald-50 border-2 border-emerald-200 font-serif-title italic font-bold text-base sm:text-lg text-emerald-950">
                “Learning Through Association”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                Classical Conditioning is a form of learning in which an organism develops an association between
                two stimuli, causing a previously neutral stimulus to produce a learned response eventually.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-xs font-bold text-emerald-900 block mb-1">1. Physiology of Digestion</span>
                  <p className="text-xs text-stone-600">
                    Extensive research on digestive system functions earned him the 1904 Nobel Prize in Physiology or Medicine.
                  </p>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                  <span className="text-xs font-bold text-emerald-900 block mb-1">2. Conditioned Reflexes</span>
                  <p className="text-xs text-stone-600">
                    Discovered stimulus substitution through salivation reflexes, demonstrating association-based learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Pavlov Laboratory Simulator */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading-display">
              The 4 Stages of Classical Conditioning
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 font-medium">
              Experience the 4 stages from the presentation slides (US, UR, NS, CS, CR) with interactive chime sound synthesis:
            </p>
            <PavlovSimulator />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 4: ALBERT BANDURA */}
        {/* ========================================================================= */}
        <section id="chapter-bandura" className="scroll-mt-24 pt-6 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-orange-800 uppercase tracking-wider">
                Part 04 · 1925–2021
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title">
                Albert Bandura & Social Learning Theory
              </h2>
            </div>
            <button
              onClick={() => onSwitchToDeck(20)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-orange-800 font-bold hover:underline cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present as Card</span>
            </button>
          </div>

          {/* Bandura Hero Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-50 shadow-md">
                <img
                  src={THEORIST_IMAGES.bandura}
                  alt="Albert Bandura"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-3/4 object-cover object-top"
                />
                <div className="p-3 bg-stone-900 text-white text-center">
                  <div className="text-xs font-bold">Albert Bandura</div>
                  <div className="text-[11px] text-orange-300 font-mono">1925 – 2021 · Canadian-American Psychologist</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <blockquote className="p-5 rounded-xl bg-orange-50 border-2 border-orange-200 font-serif-title italic font-bold text-base sm:text-lg text-orange-950">
                “We Learn by Observing Others”
              </blockquote>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                Social Learning Theory explains that people learn behaviors, attitudes, and skills by observing
                and interacting with others, not only through direct trial-and-error experience. Bandura later
                developed this into Social Cognitive Theory.
              </p>
            </div>
          </div>

          {/* Triadic Reciprocal Determinism Model */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading-display">
              Bandura Model of Reciprocal Determinism
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 font-medium">
              Internal personal cognitive factors, environmental contexts, and behavioral actions continuously
              influence each other through reciprocal causation:
            </p>
            <ReciprocalDeterminismModel />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 5: SYNTHESIS & MATRIX */}
        {/* ========================================================================= */}
        <section id="chapter-synthesis" className="scroll-mt-24 pt-6 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-stone-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-red-800 uppercase tracking-wider">
                Part 05 · Comprehensive Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title">
                Comparative Matrix & Final Synthesis
              </h2>
            </div>
            <button
              onClick={() => onSwitchToDeck(25)}
              className="hidden sm:flex items-center gap-1.5 text-xs text-red-800 font-bold hover:underline cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present as Card</span>
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-red-900 text-white uppercase font-mono text-[11px]">
                <tr>
                  <th className="p-3.5">Theorist</th>
                  <th className="p-3.5">Theory Name</th>
                  <th className="p-3.5">Core Mechanism</th>
                  <th className="p-3.5">Key Experiment</th>
                  <th className="p-3.5">Educational Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                <tr className="hover:bg-amber-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-stone-900">Edward Thorndike</td>
                  <td className="p-3.5 text-red-800 font-bold">Connectionism</td>
                  <td className="p-3.5 text-stone-700 font-medium">S-R bonds; Law of Effect & Exercise</td>
                  <td className="p-3.5 text-stone-600">Puzzle Box (Hungry Cats)</td>
                  <td className="p-3.5 text-stone-700 font-medium">Practice strengthens bonds; satisfaction anchors learning</td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-stone-900">B.F. Skinner</td>
                  <td className="p-3.5 text-amber-800 font-bold">Operant Conditioning</td>
                  <td className="p-3.5 text-stone-700 font-medium">Consequences (Reinforcement & Punishment)</td>
                  <td className="p-3.5 text-stone-600">Skinner Box (Rats & Pigeons)</td>
                  <td className="p-3.5 text-stone-700 font-medium">Shape desired classroom behaviors through positive reinforcement</td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-stone-900">Ivan Pavlov</td>
                  <td className="p-3.5 text-emerald-800 font-bold">Classical Conditioning</td>
                  <td className="p-3.5 text-stone-700 font-medium">Stimulus Substitution (US, UR, NS, CS, CR)</td>
                  <td className="p-3.5 text-stone-600">Salivary Reflex & Bell (Dogs)</td>
                  <td className="p-3.5 text-stone-700 font-medium">Create calm, predictable cues and positive affective classroom associations</td>
                </tr>
                <tr className="hover:bg-amber-50/50 transition-colors">
                  <td className="p-3.5 font-bold text-stone-900">Albert Bandura</td>
                  <td className="p-3.5 text-orange-800 font-bold">Social Learning Theory</td>
                  <td className="p-3.5 text-stone-700 font-medium">Observational Modeling & Reciprocal Determinism</td>
                  <td className="p-3.5 text-stone-600">Bobo Doll & Modeling Studies</td>
                  <td className="p-3.5 text-stone-700 font-medium">Be an inspiring behavioral model and nurture student self-efficacy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-red-50/80 border-2 border-red-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h4 className="text-base font-bold text-red-950 font-heading-display">Ready to present to your class?</h4>
              <p className="text-xs text-stone-700 mt-1 max-w-xl font-medium">
                Switch to the responsive Card Presentation Deck to navigate slide-by-slide with keyboard shortcuts and animations.
              </p>
            </div>
            <button
              onClick={() => onSwitchToDeck(1)}
              className="px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer font-heading-display"
            >
              Launch Card Deck
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
