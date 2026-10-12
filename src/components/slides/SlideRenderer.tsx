import React, { useState } from 'react';
import { SlideCard } from '../../types/presentation';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Clock,
  Lightbulb,
  Puzzle,
  Brain,
  Quote,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Volume2,
  Activity,
  Layers,
  GraduationCap,
  Heart,
  Globe,
  Zap,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';
import { TrialAndErrorSimulator } from '../interactive/TrialAndErrorSimulator';
import { SkinnerQuadrantMatrix } from '../interactive/SkinnerQuadrantMatrix';
import { PavlovSimulator } from '../interactive/PavlovSimulator';
import { ReciprocalDeterminismModel } from '../interactive/ReciprocalDeterminismModel';

interface SlideRendererProps {
  slide: SlideCard;
  onNext: () => void;
  onJumpToSlide: (slideNum: number) => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  onNext,
  onJumpToSlide,
}) => {
  const [showInteractiveLab, setShowInteractiveLab] = useState(false);
  const { type, data } = slide.content;

  // 1. INTRO TITLE SLIDE (PDF Page 1)
  if (type === 'intro') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 md:p-10 bg-grid-notebook rounded-2xl relative overflow-hidden">
        {/* Decorative corner tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-red-800 text-white rounded-lg shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </span>
            <div className="text-xs font-bold text-red-950 uppercase tracking-wider font-heading-display">
              College of Education · Major in English
            </div>
          </div>
          <div className="text-xs font-mono text-red-900 font-bold bg-amber-100/90 border border-amber-300 px-3 py-1 rounded-full shadow-xs">
            Digital Portfolio Presentation · Group 3
          </div>
        </div>

        {/* Center Title Block */}
        <div className="my-auto py-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-red-800 uppercase mb-2 inline-block">
              Foundational Psychology for Future Educators
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight font-serif-title uppercase leading-tight">
              BEHAVIORAL LEARNING THEORY OR ASSOCIATION
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-stone-700 max-w-2xl mx-auto font-medium leading-relaxed">
              An educational portfolio examining the four historical cornerstones of associative psychology:
              <span className="font-semibold text-red-800"> Thorndike</span>,
              <span className="font-semibold text-amber-800"> Skinner</span>,
              <span className="font-semibold text-emerald-800"> Pavlov</span>, and
              <span className="font-semibold text-orange-800"> Bandura</span>.
            </p>
          </div>

          {/* 4 Theorist Showcase Cards with Pictures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {data.theorists.map((th: any, idx: number) => {
              const borderColors = [
                'border-red-300 hover:border-red-600 bg-red-50/70',
                'border-amber-300 hover:border-amber-600 bg-amber-50/70',
                'border-emerald-300 hover:border-emerald-600 bg-emerald-50/70',
                'border-orange-300 hover:border-orange-600 bg-orange-50/70',
              ];
              const textColors = ['text-red-950', 'text-amber-950', 'text-emerald-950', 'text-orange-950'];

              return (
                <div
                  key={idx}
                  className={`border-2 rounded-xl p-3.5 transition-all shadow-xs hover:shadow-md flex flex-col justify-between ${borderColors[idx % 4]}`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <img
                        src={th.image}
                        alt={th.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover object-top border-2 border-white shadow-sm shrink-0"
                      />
                      <div>
                        <h3 className={`font-black text-xs sm:text-sm font-heading-display ${textColors[idx % 4]}`}>
                          {th.name}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-stone-600">
                          {th.dates}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-stone-900">{th.theory}</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-stone-200/80 text-[11px] text-stone-600 leading-snug">
                    {th.keyConcept}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-stone-200">
          <div className="text-xs text-stone-600 font-medium flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-pulse" />
            <span>Interactive Educational Presentation · Press Next to advance</span>
          </div>
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-heading-display"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // 2. QUOTE & HERO SLIDES (Thorndike Slide 2, Skinner Slide 10, Pavlov Slide 20, Bandura Slide 30)
  if (type === 'quote_hero') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl relative">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-red-800 mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{slide.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-stone-900 font-serif-title tracking-tight leading-tight">
            {data.title}
          </h2>
          {data.author && (
            <div className="text-sm sm:text-base font-bold text-red-900 mt-1 font-heading-display">
              {data.author}
            </div>
          )}
          {data.role && (
            <div className="text-xs font-semibold text-stone-600 font-mono">
              {data.role}
            </div>
          )}

          {/* Quote Block */}
          <div className="mt-5 p-6 rounded-2xl border-2 border-red-200 bg-red-50/70 text-red-950 relative shadow-xs">
            <Quote className="w-8 h-8 opacity-20 absolute top-4 right-4 text-red-800" />
            <blockquote className="text-lg sm:text-2xl font-serif-title italic font-bold leading-relaxed">
              “{data.quote}”
            </blockquote>
          </div>

          {data.subQuote && (
            <p className="mt-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              {data.subQuote}
            </p>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt={data.author || data.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-red-900 text-white text-center">
              <span className="text-xs font-bold font-heading-display">{data.author}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. THEORIST BIOGRAPHY PROFILE (Thorndike Slide 3)
  if (type === 'theorist_profile') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-xs rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt={data.name}
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-red-900 text-white text-center">
              <span className="text-xs font-bold font-heading-display">{data.name}</span>
              <div className="text-[11px] text-red-200 font-mono">{data.birth}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mb-4">
            {data.name}
          </h2>

          <div className="space-y-3">
            {data.milestones.map((m: string, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 flex items-start gap-3.5 hover:border-red-400 transition-colors shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-red-800 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed mt-0.5">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 4. MAJOR CONTRIBUTION TITLE (Slide 4)
  if (type === 'major_contribution_title') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2 font-mono">
            Section Overview
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 font-serif-title tracking-tight leading-tight uppercase">
            {data.title}
          </h2>
          <div className="text-base font-bold text-red-900 mt-2 font-heading-display">
            {data.author}
          </div>
          <p className="mt-4 text-sm text-stone-700 leading-relaxed font-medium">
            {data.summary}
          </p>

          <div className="mt-6 p-4 bg-amber-50 border-2 border-amber-300 rounded-xl">
            <span className="text-xs font-bold text-amber-950 block uppercase font-mono mb-1">
              Key Focus Areas:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-800 font-medium">
              <div>• 1. Connectionism Theory (S-R Bond)</div>
              <div>• 2. Trial & Error Learning Experiments</div>
              <div>• 3. Three Laws of Learning</div>
              <div>• 4. Educational Psychology Foundation</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt="Stimulus-Response Diagram"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-3 bg-stone-800 text-white text-center">
              <span className="text-xs font-bold font-mono">Stimulus-Response (S-R) Bond System</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. CONNECTIONISM THEORY (Slide 5)
  if (type === 'connectionism_theory') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 font-serif-title mb-2">
            {data.title}
          </h2>
          <div className="text-xs font-bold text-red-900 uppercase font-mono mb-4">
            {data.subtitle}
          </div>

          <div className="space-y-3">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 flex items-start gap-3 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-stone-800 font-semibold leading-relaxed">
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3.5 bg-red-50 border border-red-300 rounded-xl text-xs text-red-950 font-medium">
            <strong>Theoretical Formula:</strong> Stimulus (S) ⇄ Neural Bond ⇄ Response (R). Connections strengthen with satisfying outcomes.
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt="Connectionism S-R Neural Diagram"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Thorndike's Neural S-R Synaptic Bond Model
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. PUZZLE BOX FINDINGS (Slide 6)
  if (type === 'puzzle_box_findings') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <button
            onClick={() => setShowInteractiveLab(!showInteractiveLab)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white text-xs font-bold transition-all shadow-xs cursor-pointer font-heading-display"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{showInteractiveLab ? 'View Summary' : 'Run Interactive Lab'}</span>
          </button>
        </div>

        {showInteractiveLab ? (
          <div className="my-3">
            <TrialAndErrorSimulator />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
            <div className="lg:col-span-6 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-900 block mb-1">
                Core Experimental Discoveries:
              </span>
              {data.bullets.map((b: string, idx: number) => (
                <div key={idx} className="p-3 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-2.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1.5" />
                  <p className="text-xs sm:text-sm text-stone-800 font-medium">{b}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
                <img
                  src={data.image}
                  alt="Thorndike Cat in Puzzle Box"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
                  Edward Thorndike's Original Puzzle Box Apparatus with Cat
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-xs text-stone-600 pt-2 border-t border-stone-200 flex items-center justify-between font-medium">
          <span>“Learning occurred gradually through repeated attempts rather than sudden insight.”</span>
          <span className="text-red-800 font-bold font-mono">Thorndike, 1898</span>
        </div>
      </div>
    );
  }

  // 7. TRIAL AND ERROR 4-STEP DIAGRAM (Slide 7)
  if (type === 'trial_error_diagram') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div>
          <span className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl font-medium">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
          {/* Left: 4 Step Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.steps.map((st: any, idx: number) => {
              const colors = [
                'bg-red-50/80 border-red-200 text-red-950',
                'bg-amber-50/80 border-amber-200 text-amber-950',
                'bg-emerald-50/80 border-emerald-200 text-emerald-950',
                'bg-orange-50/80 border-orange-200 text-orange-950',
              ];
              const badgeColors = ['bg-red-800', 'bg-amber-700', 'bg-emerald-700', 'bg-orange-700'];

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border-2 flex flex-col justify-between shadow-xs ${colors[idx]}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-0.5 rounded text-white text-[11px] font-mono font-bold ${badgeColors[idx]}`}>
                      Step 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase">{st.name}</span>
                  </div>
                  <p className="text-xs text-stone-800 font-medium leading-relaxed">{st.text}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Puzzle Box Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.image}
                alt="Cat in Puzzle Box"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-2 bg-stone-800 text-white text-center text-xs font-mono">
                Trial & Error Operant Mechanism
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium flex items-center justify-between">
          <span>Continuous practice solidifies the neural pathway, reducing latency from minutes to seconds.</span>
          <span className="font-mono text-red-800 font-bold hidden sm:inline">Law of Practice</span>
        </div>
      </div>
    );
  }

  // 8. THREE LAWS OF LEARNING (Slide 8)
  if (type === 'three_laws') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.image}
              alt="Thorndike"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-red-300 shadow-xs"
            />
            <span className="text-xs font-bold text-stone-800 font-heading-display">Edward Thorndike</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
          {data.laws.map((law: any, idx: number) => {
            const cardStyles = [
              'bg-emerald-50/80 border-emerald-300',
              'bg-amber-50/80 border-amber-300',
              'bg-red-50/80 border-red-300',
            ];
            const iconColors = ['text-emerald-700', 'text-amber-700', 'text-red-700'];

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex flex-col justify-between shadow-xs ${cardStyles[idx]}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl bg-white shadow-xs ${iconColors[idx]}`}>
                      {law.icon === 'bulb' && <Lightbulb className="w-5 h-5" />}
                      {law.icon === 'puzzle' && <Puzzle className="w-5 h-5" />}
                      {law.icon === 'brain' && <Brain className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-black text-stone-600">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-black text-stone-900 font-heading-display mb-3">
                    {law.title}
                  </h3>
                  <div className="space-y-2">
                    {law.bullets.map((b: string, bIdx: number) => (
                      <div key={bIdx} className="text-xs text-stone-800 font-medium flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-500 shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
          These three fundamental laws formed the bedrock of early 20th-century educational pedagogy, curriculum sequencing, and student motivation.
        </div>
      </div>
    );
  }

  // 9. CONCLUSION (Thorndike Slide 9)
  if (type === 'thorndike_conclusion') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-title mb-4">
            {data.title}
          </h2>

          <div className="space-y-3.5">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-red-800 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950 font-bold">
            Thorndike's Legacy: Established psychology as an empirical, data-driven science of learning.
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt="Edward Thorndike"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-red-900 text-white text-center">
              <span className="text-xs font-bold font-heading-display">Edward Lee Thorndike (1874–1949)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. SKINNER HERO (Slide 10)
  if (type === 'skinner_hero') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 font-serif-title uppercase tracking-tight">
            {data.title}
          </h2>
          <div className="text-base sm:text-lg font-black text-amber-800 mt-1 font-heading-display uppercase">
            {data.subtitle}
          </div>
          <div className="text-xs font-bold text-stone-600 font-mono mt-0.5">
            {data.tagline}
          </div>

          {/* Quote */}
          <div className="mt-4 p-5 rounded-xl border-2 border-amber-300 bg-amber-50/80 text-stone-900 relative shadow-xs">
            <Quote className="w-8 h-8 opacity-20 absolute top-3 right-3 text-amber-800" />
            <blockquote className="text-base sm:text-xl font-serif-title italic font-bold">
              “{data.quote}”
            </blockquote>
            <p className="mt-2 text-xs font-semibold text-stone-700">{data.subQuote}</p>
          </div>

          <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono text-stone-600">
            {data.biographyLine}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
          <div className="w-full max-w-xs rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageSkinner}
              alt="B.F. Skinner"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-2.5 bg-amber-700 text-white text-center text-xs font-bold font-heading-display">
              B.F. Skinner (1904–1990)
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 11. WHO WAS B.F. SKINNER (Slide 11)
  if (type === 'skinner_bio') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-bold text-amber-900 font-mono">{data.subHeader}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.image}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-3">
          {data.timeline.map((item: any, idx: number) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-amber-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-mono font-black text-amber-800 mb-1 block">
                  {item.year}
                </span>
                <div className="text-xs font-bold text-stone-900 mb-1 font-heading-display">
                  {item.title}
                </div>
              </div>
              <p className="text-[11px] text-stone-600 leading-snug mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-stone-800 font-medium">
          “{data.quote}”
        </div>
      </div>
    );
  }

  // 12. SKINNER'S ABC MODEL (Slide 12)
  if (type === 'skinner_abc_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-bold text-amber-900 font-mono">{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageClassroom}
              alt="Classroom"
              referrerPolicy="no-referrer"
              className="w-12 h-10 rounded-lg object-cover border border-amber-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
          {data.steps.map((st: any) => (
            <div
              key={st.num}
              className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-mono font-bold flex items-center justify-center text-xs">
                    0{st.num}
                  </span>
                  <span className="text-xs font-black text-stone-900 uppercase font-mono tracking-wider">
                    {st.label}
                  </span>
                </div>
                <p className="text-xs text-stone-700 mb-3 font-medium">{st.desc}</p>

                <div className="space-y-2 pt-2 border-t border-stone-200">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300">
                    <span className="text-[10px] font-mono text-emerald-800 block font-bold">
                      {st.good.title}
                    </span>
                    <span className="text-xs text-emerald-950 font-medium">{st.good.text}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-300">
                    <span className="text-[10px] font-mono text-rose-800 block font-bold">
                      {st.bad.title}
                    </span>
                    <span className="text-xs text-rose-950 font-medium">{st.bad.text}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950 font-medium flex items-center justify-between">
          <span>{data.footer}</span>
          <span className="font-mono text-amber-900 font-bold hidden sm:inline ml-4 shrink-0">
            {data.subFooter}
          </span>
        </div>
      </div>
    );
  }

  // 13. THE SKINNER BOX (Slide 13)
  if (type === 'skinner_box_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-stone-600">{data.question}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.imageBox}
                alt="Skinner Box Apparatus"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
                Operant Conditioning Chamber (Skinner Box)
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2.5">
            <p className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
              {data.explanation}
            </p>

            <div className="space-y-2">
              {data.steps.map((st: any) => (
                <div key={st.num} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {st.num}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">{st.title}</span>
                    <span className="text-[11px] text-stone-600 font-medium">{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-lg text-xs text-amber-950 font-bold">
              Key Takeaway: {data.keyTakeaway}
            </div>
          </div>
        </div>

        <div className="text-xs font-serif-title italic text-stone-600 pt-2 border-t border-stone-200">
          “{data.quote1}”
        </div>
      </div>
    );
  }

  // 14. REINFORCEMENT (Slide 14)
  if (type === 'reinforcement_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-emerald-800 font-bold">{data.subtitle}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <img
                src={data.imageTeacher}
                alt="Teacher reinforcement"
                referrerPolicy="no-referrer"
                className="w-12 h-10 rounded-lg object-cover border border-emerald-300 shadow-xs"
              />
            </div>
            <button
              onClick={() => setShowInteractiveLab(!showInteractiveLab)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer font-heading-display"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{showInteractiveLab ? 'View Standard Cards' : 'Open 2x2 Matrix Tool'}</span>
            </button>
          </div>
        </div>

        {showInteractiveLab ? (
          <div className="my-3">
            <SkinnerQuadrantMatrix />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            {/* Positive Reinforcement */}
            <div className="p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/70 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-xs font-mono font-bold">
                    + Add Stimulus
                  </span>
                  <span className="text-xs font-black text-emerald-950 uppercase font-mono">
                    ▲ Behavior Increases
                  </span>
                </div>
                <h3 className="font-bold text-stone-900 text-base">{data.positive.title}</h3>
                <p className="text-xs font-semibold text-emerald-900 mb-3">{data.positive.rule}</p>

                <div className="space-y-2 pt-2 border-t border-emerald-200">
                  <div className="p-2 rounded-lg bg-white border border-emerald-200 text-xs shadow-xs">
                    <span className="font-bold text-stone-600 block text-[10px] font-mono">Step 1</span>
                    <span className="text-stone-900 font-medium">{data.positive.step1}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-emerald-200 text-xs shadow-xs">
                    <span className="font-bold text-stone-600 block text-[10px] font-mono">Step 2</span>
                    <span className="text-stone-900 font-medium">{data.positive.step2}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-100/80 border border-emerald-300 text-xs font-bold text-emerald-950">
                    <span className="block text-[10px] font-mono">Outcome</span>
                    <span>{data.positive.step3}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Negative Reinforcement */}
            <div className="p-4 rounded-xl border-2 border-amber-300 bg-amber-50/70 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-amber-700 text-white text-xs font-mono font-bold">
                    - Remove Stimulus
                  </span>
                  <span className="text-xs font-black text-amber-950 uppercase font-mono">
                    ▲ Behavior Increases
                  </span>
                </div>
                <h3 className="font-bold text-stone-900 text-base">{data.negative.title}</h3>
                <p className="text-xs font-semibold text-amber-900 mb-3">{data.negative.rule}</p>

                <div className="space-y-2 pt-2 border-t border-amber-200">
                  <div className="p-2 rounded-lg bg-white border border-amber-200 text-xs shadow-xs">
                    <span className="font-bold text-stone-600 block text-[10px] font-mono">Step 1</span>
                    <span className="text-stone-900 font-medium">{data.negative.step1}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-amber-200 text-xs shadow-xs">
                    <span className="font-bold text-stone-600 block text-[10px] font-mono">Step 2</span>
                    <span className="text-stone-900 font-medium">{data.negative.step2}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-100/80 border border-amber-300 text-xs font-bold text-amber-950">
                    <span className="block text-[10px] font-mono">Outcome</span>
                    <span>{data.negative.step3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium flex items-center justify-between">
          <span>{data.banner}</span>
          <span className="font-mono text-amber-800 font-bold hidden sm:inline">{data.note}</span>
        </div>
      </div>
    );
  }

  // 15. PUNISHMENT (Slide 15)
  if (type === 'punishment_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-rose-800 font-bold">{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageClassroom}
              alt="Classroom"
              referrerPolicy="no-referrer"
              className="w-12 h-10 rounded-lg object-cover border border-stone-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          {/* Positive Punishment */}
          <div className="p-4 rounded-xl border-2 border-rose-300 bg-rose-50/70 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-rose-700 text-white text-xs font-mono font-bold">
                  + Add Unpleasant
                </span>
                <span className="text-xs font-black text-rose-950 uppercase font-mono">
                  ▼ Behavior Decreases
                </span>
              </div>
              <h3 className="font-bold text-stone-900 text-base">{data.positive.title}</h3>
              <p className="text-xs font-semibold text-rose-900 mb-3">{data.positive.rule}</p>

              <div className="space-y-2 pt-2 border-t border-rose-200">
                <div className="p-2.5 rounded-lg bg-white border border-rose-200 text-xs shadow-xs">
                  <span className="font-bold text-stone-600 block text-[10px] font-mono">Scenario</span>
                  <span className="text-stone-900 font-medium">{data.positive.step1}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-rose-100 border border-rose-300 text-xs font-bold text-rose-950">
                  <span className="block text-[10px] font-mono">Consequence</span>
                  <span>{data.positive.step2}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Negative Punishment */}
          <div className="p-4 rounded-xl border-2 border-orange-300 bg-orange-50/70 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded bg-orange-700 text-white text-xs font-mono font-bold">
                  - Remove Desirable
                </span>
                <span className="text-xs font-black text-orange-950 uppercase font-mono">
                  ▼ Behavior Decreases
                </span>
              </div>
              <h3 className="font-bold text-stone-900 text-base">{data.negative.title}</h3>
              <p className="text-xs font-semibold text-orange-900 mb-3">{data.negative.rule}</p>

              <div className="space-y-2 pt-2 border-t border-orange-200">
                <div className="p-2.5 rounded-lg bg-white border border-orange-200 text-xs shadow-xs">
                  <span className="font-bold text-stone-600 block text-[10px] font-mono">Scenario</span>
                  <span className="text-stone-900 font-medium">{data.negative.step1}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-orange-100 border border-orange-300 text-xs font-bold text-orange-950">
                  <span className="block text-[10px] font-mono">Consequence</span>
                  <span>{data.negative.step2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium flex items-center justify-between">
          <span>{data.banner}</span>
          <span className="font-mono text-rose-800 font-bold hidden sm:inline">{data.note}</span>
        </div>
      </div>
    );
  }

  // 16. OTHER KEY CONCEPTS (Slide 16)
  if (type === 'other_key_concepts') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-stone-600">{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageSkinner}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-3">
          {data.concepts.map((c: any, idx: number) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-amber-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-stone-900 text-sm mb-1 font-heading-display">{c.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950 font-medium">
          {data.footer}
        </div>
      </div>
    );
  }

  // 17. APPLICATION TO EDUCATION (Slide 17)
  if (type === 'application_education_skinner') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-stone-600">{data.question}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
          <div className="lg:col-span-6 space-y-3">
            <div className="p-3.5 bg-emerald-50 border-2 border-emerald-300 rounded-xl shadow-xs">
              <span className="text-xs font-bold text-emerald-950 uppercase font-mono block mb-1">
                Positive Reinforcement in the Classroom:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-800 font-medium">
                {data.positive.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-amber-50 border-2 border-amber-300 rounded-xl shadow-xs">
              <span className="text-xs font-bold text-amber-950 uppercase font-mono block mb-1">
                Negative Reinforcement in the Classroom:
              </span>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-stone-800 font-medium">
                {data.negative.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.imageClassroom}
                alt="Teacher reinforcing students"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-2 bg-stone-800 text-white text-center text-xs font-mono">
                Classroom Reinforcement & Operant Environment
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium">
          {data.footer}
        </div>
      </div>
    );
  }

  // 18. SIGNIFICANCE OF SKINNER'S WORK (Slide 18)
  if (type === 'significance_skinner') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-semibold text-stone-600">{data.question}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageSkinner}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-3">
          {data.pillars.map((pil: any, idx: number) => (
            <div key={idx} className="p-4 bg-stone-50 border-2 border-stone-200 rounded-xl flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 font-heading-display">{pil.title}</h3>
                <p className="text-[11px] text-stone-600 leading-relaxed font-medium">{pil.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-stone-800 font-medium">
          {data.footer}
        </div>
      </div>
    );
  }

  // 19. CONCLUSION SKINNER (Slide 19)
  if (type === 'conclusion_skinner') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-serif-title mb-2">
            {data.title}
          </h2>
          <div className="text-xs font-bold text-amber-900 font-mono mb-3">{data.subtitle}</div>

          <div className="space-y-2.5">
            {data.points.map((pt: string, idx: number) => (
              <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-2.5 shadow-xs">
                <span className="w-5 h-5 rounded-md bg-amber-700 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  ✓
                </span>
                <p className="text-xs text-stone-800 font-medium leading-snug">{pt}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-950 font-bold">
            {data.footer}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageSkinner}
              alt="B.F. Skinner"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-2.5 bg-amber-800 text-white text-center text-xs font-bold font-heading-display">
              B.F. Skinner · Operant Conditioning Legacy
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 20. PAVLOV HERO (Slide 20)
  if (type === 'pavlov_hero_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 font-serif-title uppercase tracking-tight">
            {data.title}
          </h2>
          <div className="text-base sm:text-lg font-black text-emerald-800 mt-1 font-heading-display uppercase">
            {data.author}
          </div>
          <div className="text-xs font-bold text-stone-600 font-mono mt-0.5">
            {data.tagline} {data.subtitle}
          </div>

          <div className="mt-5 p-5 rounded-xl border-2 border-emerald-300 bg-emerald-50/70 text-stone-900 relative shadow-xs">
            <Quote className="w-8 h-8 opacity-20 absolute top-3 right-3 text-emerald-800" />
            <blockquote className="text-base sm:text-xl font-serif-title italic font-bold">
              “Don't become a mere recorder of facts, but try to penetrate the mystery of their origin.”
            </blockquote>
            <p className="mt-2 text-xs font-mono font-bold text-emerald-900">— Ivan Pavlov, Nobel Laureate 1904</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imagePavlov}
              alt="Ivan Pavlov"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-emerald-800 text-white text-center text-xs font-bold font-heading-display">
              Ivan Petrovich Pavlov (1849–1936)
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 21. BIOGRAPHICAL TIMELINE PAVLOV (Slide 21)
  if (type === 'pavlov_timeline_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imagePavlov}
              alt="Pavlov"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-3">
          {data.timeline.map((item: any) => (
            <div
              key={item.num}
              className="p-3 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-mono font-black text-emerald-800 mb-1 block">
                  0{item.num}
                </span>
                <div className="text-xs font-bold text-stone-900 mb-1 font-heading-display">
                  {item.title}
                </div>
              </div>
              <p className="text-[11px] text-stone-600 leading-snug mt-2 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-medium">
          Pavlov's rigorous physiological methods transformed psychology from philosophical speculation into an experimental laboratory discipline.
        </div>
      </div>
    );
  }

  // 22. MAJOR CONTRIBUTIONS AND ACCOMPLISHMENT (Slide 22)
  if (type === 'pavlov_two_areas') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-3">
          {/* Area 1: Digestion */}
          <div className="p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/60 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 block mb-1 uppercase">Area 01</span>
              <h3 className="font-black text-stone-900 text-base mb-3 font-heading-display">{data.area1Title}</h3>
              <div className="rounded-xl overflow-hidden border-2 border-stone-200 bg-white shadow-xs">
                <img
                  src={data.imageDigestion}
                  alt="Digestion Physiology"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-stone-700 mt-3 font-medium">Awarded the 1904 Nobel Prize for digestive physiology research.</p>
          </div>

          {/* Area 2: Conditioned Reflexes */}
          <div className="p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/60 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800 block mb-1 uppercase">Area 02</span>
              <h3 className="font-black text-stone-900 text-base mb-3 font-heading-display">{data.area2Title}</h3>
              <div className="rounded-xl overflow-hidden border-2 border-stone-200 bg-white shadow-xs">
                <img
                  src={data.imageDog}
                  alt="Pavlov Dog Conditioned Reflex"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-stone-700 mt-3 font-medium">Formulated the classic Stimulus-Association paradigm of learning.</p>
          </div>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
          Both research programs converged on how neurological connections guide biological and behavioral reactions.
        </div>
      </div>
    );
  }

  // 23. PHYSIOLOGY OF DIGESTION (Slide 23)
  if (type === 'pavlov_digestion_focus') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
            {data.header}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 font-serif-title mb-4">
            {data.title}
          </h2>

          <div className="space-y-3.5">
            <div className="p-4 bg-stone-50 border-2 border-stone-200 rounded-xl shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-800 block mb-1">Research Discovery:</span>
              <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">{data.leftText}</p>
            </div>

            <div className="p-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl shadow-xs">
              <span className="text-xs font-mono font-bold text-emerald-950 block mb-1">Nobel Recognition:</span>
              <p className="text-xs sm:text-sm text-stone-900 font-bold leading-relaxed">{data.rightText}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageDigestion}
              alt="Physiology of Digestion"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Pavlov's Digestive Cannula and Neural Secretion Study
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 24. CONDITIONED REFLEXES AND LEARNING (Slide 24)
  if (type === 'pavlov_dog_diagram') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              {data.header}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <button
            onClick={() => setShowInteractiveLab(!showInteractiveLab)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer font-heading-display"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{showInteractiveLab ? 'View Stage Cards' : 'Test Audio Bell Lab'}</span>
          </button>
        </div>

        {showInteractiveLab ? (
          <div className="my-3">
            <PavlovSimulator />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
            {/* 4 Stages Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.stages.map((st: any) => (
                <div
                  key={st.num}
                  className="p-3.5 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between shadow-xs transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-emerald-800 font-heading-display">
                        {st.title}
                      </span>
                      <span className="text-[10px] font-mono text-stone-500 font-semibold">{st.condition}</span>
                    </div>

                    <div className="p-2 bg-white rounded-lg border border-stone-200 text-xs mb-1.5 shadow-xs">
                      <span className="text-[10px] font-mono text-stone-500 block uppercase font-bold">Stimulus</span>
                      <span className="text-stone-900 font-medium">{st.stimulus}</span>
                    </div>

                    <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-xs shadow-xs">
                      <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">Response</span>
                      <span className="text-emerald-950 font-bold">{st.response}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pavlov Dog Experiment Diagram Picture */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
                <img
                  src={data.imageDog}
                  alt="Pavlov Dog Conditioning Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
                  Classical Conditioning 4-Stage Paradigm
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-medium flex items-center justify-between">
          <span>Through repeated temporal contiguity, the neutral bell transforms into a conditioned stimulus.</span>
          <span className="font-mono text-emerald-800 font-bold hidden sm:inline">Conditioned Reflex</span>
        </div>
      </div>
    );
  }

  // 25. PAVLOV'S CLASSICAL CONDITIONING DEFINITION (Slide 25)
  if (type === 'pavlov_definition_slide') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 font-serif-title mb-4">
            {data.title}
          </h2>

          <div className="p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 shadow-xs mb-4">
            <span className="text-xs font-mono font-bold text-emerald-900 uppercase block mb-1">
              Core Definition:
            </span>
            <p className="text-sm sm:text-base text-stone-900 font-semibold leading-relaxed">
              {data.definition}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm font-bold text-stone-900 shadow-xs">
            <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-xs">{data.flow[0]}</span>
            <span className="text-emerald-700 font-black">➔</span>
            <span className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg shadow-xs">{data.flow[1]}</span>
            <span className="text-emerald-700 font-black">➔</span>
            <span className="px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-xs">{data.flow[2]}</span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageDog}
              alt="Classical Conditioning"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Stimulus Substitution Model
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 26. PRINCIPLES OF CLASSICAL CONDITIONING (Slide 26)
  if (type === 'pavlov_principles_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-bold text-emerald-900 font-mono">{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.image}
              alt="Pavlov"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-3">
          {data.principles.map((pr: any) => (
            <div
              key={pr.num}
              className="p-3.5 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase block mb-1">
                  0{pr.num}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-2 font-heading-display">{pr.title}</h3>
                <p className="text-[11px] text-stone-600 leading-relaxed font-medium">{pr.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-medium">
          These five core principles govern how organisms acquire, sustain, weaken, and re-trigger conditioned associations in natural environments.
        </div>
      </div>
    );
  }

  // 27. APPLICATION IN EDUCATION (Slide 27)
  if (type === 'pavlov_education_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mb-2">
            {data.title}
          </h2>
          <div className="text-xs font-bold text-emerald-900 font-mono uppercase mb-4">
            {data.header}
          </div>

          <div className="p-4 bg-stone-50 border-2 border-stone-200 rounded-xl shadow-xs mb-3">
            <span className="text-xs font-bold text-stone-700 block mb-1">Scenario:</span>
            <p className="text-xs sm:text-sm text-stone-900 font-medium leading-relaxed">{data.description}</p>
          </div>

          <div className="p-3.5 bg-emerald-50 border-2 border-emerald-300 rounded-xl text-center font-mono text-xs font-bold text-emerald-950 shadow-xs mb-3">
            {data.flow}
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
            <strong>Outcome:</strong> {data.result}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageClassroom}
              alt="Classroom Reading Routine"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Classroom Association: Acoustic Cue & Focused Reading Ambiance
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 28. APPLICATION IN EVERYDAY LIFE (Slide 28)
  if (type === 'pavlov_everyday_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mb-1">
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mb-4 font-medium">{data.subtitle}</p>

          <div className="space-y-3">
            {data.points.map((pt: any, idx: number) => (
              <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 shadow-xs">
                <span className="text-xs font-bold text-emerald-900 font-heading-display block mb-0.5">
                  • {pt.title}
                </span>
                <p className="text-xs text-stone-700 font-medium leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt="Pavlov Conditioning"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Everyday Conditioned Emotional & Sensory Responses
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 29. PAVLOV MAXIM (Slide 29)
  if (type === 'pavlov_maxim_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 font-mono">
            {slide.sectionTitle}
          </span>

          <div className="p-8 rounded-2xl border-4 border-emerald-300 bg-emerald-50/70 text-emerald-950 shadow-md">
            <Quote className="w-10 h-10 opacity-25 text-emerald-800 mb-2" />
            <blockquote className="text-2xl sm:text-4xl font-serif-title italic font-black leading-tight">
              {data.quote}
            </blockquote>
            <div className="mt-4 pt-4 border-t border-emerald-200">
              <span className="text-sm font-bold font-heading-display text-emerald-950 block">{data.author}</span>
              <span className="text-xs font-mono text-emerald-800">{data.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imagePavlov}
              alt="Ivan Pavlov"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-emerald-800 text-white text-center text-xs font-bold font-heading-display">
              Ivan Pavlov · 1849 – 1936
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 30. BANDURA HERO (Slide 30)
  if (type === 'bandura_hero_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 font-serif-title uppercase tracking-tight">
            {data.title}
          </h2>
          <div className="text-base sm:text-lg font-black text-orange-800 mt-1 font-heading-display">
            {data.author}
          </div>
          <div className="text-xs font-bold text-stone-600 font-mono mt-0.5">
            {data.subtitle}
          </div>

          <div className="mt-5 p-5 rounded-xl border-2 border-orange-300 bg-orange-50/70 text-stone-900 relative shadow-xs">
            <Quote className="w-8 h-8 opacity-20 absolute top-3 right-3 text-orange-800" />
            <blockquote className="text-base sm:text-xl font-serif-title italic font-bold">
              “Most human behavior is learned observationally through modeling: from observing others, one forms an idea of how new behaviors are performed.”
            </blockquote>
            <p className="mt-2 text-xs font-mono font-bold text-orange-900">— Albert Bandura, 1977</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-orange-800 text-white text-center text-xs font-bold font-heading-display">
              Albert Bandura (1925–2021)
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 31. ABOUT ALBERT BANDURA (Slide 31)
  if (type === 'about_bandura_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-xs rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-orange-800 text-white text-center text-xs font-bold font-heading-display">
              Albert Bandura · Canadian-American Psychologist
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mb-4">
            {data.title}
          </h2>

          <div className="space-y-3">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed mt-0.5">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 32. ABOUT: SOCIAL LEARNING THEORY (Slide 32)
  if (type === 'about_slt_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1 font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mb-2">
            {data.title}
          </h2>
          <div className="text-xs font-bold text-orange-900 font-mono mb-4">{data.subtitle}</div>

          <div className="p-5 rounded-2xl border-2 border-orange-300 bg-orange-50/70 shadow-xs mb-3">
            <span className="text-xs font-mono font-bold text-orange-950 uppercase block mb-1">
              Core Theoretical Tenet:
            </span>
            <p className="text-sm sm:text-base text-stone-900 font-semibold leading-relaxed">
              {data.definition}
            </p>
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
            Bridged behaviorism and cognitive psychology by proving that learning does not always require direct physical reinforcement.
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.image}
              alt="Bobo Doll Observational Study"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover"
            />
            <div className="p-2.5 bg-stone-800 text-white text-center text-xs font-mono">
              Bandura's Classic Bobo Doll Observational Learning Study
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 33. SOCIAL LEARNING THEORY 4 STEPS (Slide 33)
  if (type === 'bandura_four_steps_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
            <div className="text-xs font-bold text-orange-900 font-mono">{data.subtitle}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-3 items-center">
          {/* Left: 4 Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.steps.map((st: any) => {
              const bgs = [
                'bg-orange-50/80 border-orange-300 text-orange-950',
                'bg-emerald-50/80 border-emerald-300 text-emerald-950',
                'bg-amber-50/80 border-amber-300 text-amber-950',
                'bg-rose-50/80 border-rose-300 text-rose-950',
              ];
              const badges = ['bg-orange-700', 'bg-emerald-700', 'bg-amber-700', 'bg-rose-700'];

              return (
                <div
                  key={st.num}
                  className={`p-3.5 rounded-xl border-2 flex flex-col justify-between shadow-xs ${bgs[st.num - 1]}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`w-6 h-6 rounded-md font-mono font-bold flex items-center justify-center text-xs text-white ${badges[st.num - 1]}`}>
                        0{st.num}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase">{st.sub}</span>
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 mb-1">{st.name}</h3>
                    <p className="text-xs text-stone-700 leading-snug font-medium">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Bobo Doll / Observational Study Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.image}
                alt="Observational Modeling"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-2 bg-stone-800 text-white text-center text-xs font-mono">
                Observation, Retention & Motor Imitation Flow
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
          Observational learning relies on these four mediational cognitive stages. Without attention and retention, behavior cannot be reproduced; without motivation, it will not be enacted.
        </div>
      </div>
    );
  }

  // 34. BANDURA RECIPROCAL DETERMINISM (Slide 34)
  if (type === 'bandura_reciprocal_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <img
                src={data.imageBandura}
                alt="Albert Bandura"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border-2 border-orange-300 shadow-xs"
              />
              <span className="text-xs font-bold text-stone-800 font-heading-display">Albert Bandura</span>
            </div>
            <button
              onClick={() => setShowInteractiveLab(!showInteractiveLab)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer font-heading-display"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{showInteractiveLab ? 'View Node Summary' : 'Open Interactive Triad'}</span>
            </button>
          </div>
        </div>

        {showInteractiveLab ? (
          <div className="my-3">
            <ReciprocalDeterminismModel />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
            {data.nodes.map((n: any) => (
              <div
                key={n.code}
                className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-orange-400 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-orange-800">{n.code}</span>
                    <span className="text-[11px] font-mono text-stone-500 font-bold uppercase">Triadic Node</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-3 font-heading-display">{n.title}</h3>
                  <ul className="space-y-1.5">
                    {n.items.map((item: string, iIdx: number) => (
                      <li key={iIdx} className="text-xs text-stone-700 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-xs text-orange-950 font-medium">
          Reciprocal Determinism asserts that human functioning is an ongoing, continuous interaction between personal cognitive factors, environmental influences, and observable behaviors.
        </div>
      </div>
    );
  }

  // 35. SIGNIFICANCE & APPLICATIONS BANDURA (Slide 35)
  if (type === 'bandura_applications_exact') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="flex items-center justify-between pb-2 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-orange-800 uppercase tracking-wider font-mono">
              {slide.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageTeacher}
              alt="Teacher as Model"
              referrerPolicy="no-referrer"
              className="w-12 h-10 rounded-lg object-cover border border-stone-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 my-3">
          {data.points.map((pt: any, idx: number) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-stone-50 border-2 border-stone-200 hover:border-orange-400 flex flex-col justify-between shadow-xs transition-colors"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-800 block mb-1">
                  {pt.domain}
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 font-medium">
          Teachers and parents serve as living models whose habits, speech, and problem-solving techniques are actively internalized by developing learners.
        </div>
      </div>
    );
  }

  // 36. BANDURA MAXIM (Slide 36)
  if (type === 'bandura_maxim_exact') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full p-5 sm:p-8 bg-white rounded-2xl">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-2 font-mono">
            {slide.sectionTitle}
          </span>

          <div className="p-8 rounded-2xl border-4 border-orange-300 bg-orange-50/70 text-orange-950 shadow-md">
            <Quote className="w-10 h-10 opacity-25 text-orange-800 mb-2" />
            <blockquote className="text-2xl sm:text-4xl font-serif-title italic font-black leading-tight">
              {data.quote}
            </blockquote>
            <div className="mt-4 pt-4 border-t border-orange-200">
              <span className="text-sm font-bold font-heading-display text-orange-950 block">{data.author}</span>
              <span className="text-xs font-mono text-orange-800">{data.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 object-cover object-top"
            />
            <div className="p-3 bg-orange-800 text-white text-center text-xs font-bold font-heading-display">
              Albert Bandura · 1925 – 2021
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 37. GRAND SYNTHESIS (Slide 37)
  if (type === 'grand_synthesis') {
    return (
      <div className="flex flex-col justify-between h-full p-5 sm:p-8 bg-white rounded-2xl overflow-y-auto custom-scrollbar">
        <div>
          <span className="text-xs font-bold text-red-800 uppercase tracking-wider font-mono">
            {slide.sectionTitle}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif-title mt-1">
            {data.title}
          </h2>
          <div className="text-xs font-semibold text-stone-500 mb-3">{data.subtitle}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-2">
          {data.theorists.map((th: any, idx: number) => {
            const cardThemes = [
              'border-red-300 bg-red-50/50',
              'border-amber-300 bg-amber-50/50',
              'border-emerald-300 bg-emerald-50/50',
              'border-orange-300 bg-orange-50/50',
            ];
            const badgeThemes = ['bg-red-800', 'bg-amber-700', 'bg-emerald-700', 'bg-orange-700'];

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex flex-col justify-between shadow-xs ${cardThemes[idx]}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={th.image}
                      alt={th.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover object-top border border-stone-200 shadow-xs shrink-0"
                    />
                    <div>
                      <h3 className="font-bold text-stone-900 text-xs sm:text-sm font-heading-display">{th.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] text-white font-mono font-bold ${badgeThemes[idx]}`}>
                        {th.theory}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-xs">
                      <span className="text-[10px] font-mono text-stone-500 block uppercase font-bold">Process</span>
                      <span className="text-stone-900 font-medium">{th.process}</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-xs">
                      <span className="text-[10px] font-mono text-stone-500 block uppercase font-bold">Apparatus</span>
                      <span className="text-stone-700">{th.apparatus}</span>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-xs">
                      <span className="text-[10px] font-mono text-stone-500 block uppercase font-bold">Key Mechanism</span>
                      <span className="text-stone-800 font-medium">{th.mechanism}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 font-medium">
          Together, these four behavioral pioneers trace the evolution of learning theory from basic physiological associations to deliberate operant consequences and cognitive observational modeling.
        </div>
      </div>
    );
  }

  // Default fallback if any type was missing
  return (
    <div className="p-8 text-center text-stone-600">
      <h2 className="text-xl font-bold">{slide.cardTitle}</h2>
      <p className="mt-2 text-sm">{slide.sectionTitle}</p>
    </div>
  );
};
