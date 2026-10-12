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
  textScale?: 'normal' | 'large' | 'xl';
  isFullscreen?: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  onNext,
  onJumpToSlide,
  textScale = 'large',
  isFullscreen = false,
}) => {
  const [showInteractiveLab, setShowInteractiveLab] = useState(false);
  const { type, data } = slide.content;

  // Scalable font tokens for classroom/conference presentations
  const isEnlarged = isFullscreen || textScale === 'xl';
  const isLarge = isFullscreen || textScale === 'large' || textScale === 'xl';

  const fontTitle = isEnlarged
    ? 'text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight font-serif-title uppercase leading-tight'
    : isLarge
    ? 'text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight font-serif-title uppercase leading-tight'
    : 'text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight font-serif-title uppercase leading-tight';

  const fontSub = isEnlarged
    ? 'text-sm sm:text-base md:text-lg lg:text-xl font-bold font-heading-display'
    : isLarge
    ? 'text-xs sm:text-sm md:text-base lg:text-lg font-bold font-heading-display'
    : 'text-xs sm:text-sm md:text-base font-semibold font-heading-display';

  const fontBody = isEnlarged
    ? 'text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed'
    : isLarge
    ? 'text-xs sm:text-sm md:text-base font-medium leading-relaxed'
    : 'text-xs sm:text-sm md:text-base font-medium leading-relaxed';

  const fontQuote = isEnlarged
    ? 'text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-serif-title italic font-bold leading-relaxed'
    : isLarge
    ? 'text-sm sm:text-base md:text-xl lg:text-2xl font-serif-title italic font-bold leading-relaxed'
    : 'text-xs sm:text-sm md:text-lg lg:text-xl font-serif-title italic font-bold leading-relaxed';

  const fontCardHeader = isEnlarged
    ? 'text-xs sm:text-sm md:text-base lg:text-lg font-black font-heading-display'
    : isLarge
    ? 'text-xs sm:text-sm md:text-base font-bold font-heading-display'
    : 'text-xs sm:text-sm font-bold font-heading-display';

  const fontCardDesc = isEnlarged
    ? 'text-xs sm:text-sm md:text-base leading-relaxed'
    : isLarge
    ? 'text-[11px] sm:text-xs md:text-sm leading-normal'
    : 'text-[11px] sm:text-xs leading-normal';

  const fontBadge = isEnlarged
    ? 'text-[11px] sm:text-xs md:text-sm font-mono font-bold'
    : 'text-[10px] sm:text-[11px] md:text-xs font-mono font-bold';

  // 1. INTRO TITLE SLIDE (PDF Page 1)
  if (type === 'intro') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-grid-notebook rounded-2xl relative overflow-hidden ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        {/* Top subtle category tag */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="text-xs sm:text-sm md:text-base font-mono text-stone-600 font-semibold uppercase tracking-wider">
            Digital Portfolio Presentation
          </div>
          <div className="text-xs sm:text-sm md:text-base font-mono text-stone-800 font-bold bg-stone-100 border border-stone-300 px-3.5 py-1 rounded-full shadow-xs">
            Group 3
          </div>
        </div>

        {/* Center Title Block */}
        <div className="my-auto py-2 sm:py-4">
          <div className={`${isFullscreen ? 'max-w-6xl' : 'max-w-4xl'} mx-auto text-center`}>
            <h1 className={fontTitle}>
              BEHAVIORAL LEARNING THEORY OR ASSOCIATION
            </h1>

            {/* Reporters: in the beginning of the slide */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className={`px-3 py-1 rounded-lg border border-red-200 text-red-900 bg-red-100/90 ${fontBadge} uppercase tracking-wider`}>
                Reporters:
              </span>
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-stone-300 rounded-xl font-bold text-stone-900 shadow-xs ${fontCardHeader}`}>
                Jade Christal Bate
              </span>
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-stone-300 rounded-xl font-bold text-stone-900 shadow-xs ${fontCardHeader}`}>
                Mellin Joyce Z. Ibo
              </span>
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-stone-300 rounded-xl font-bold text-stone-900 shadow-xs ${fontCardHeader}`}>
                Keen Enderes
              </span>
              <span className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100/90 border border-amber-300 text-amber-950 font-bold rounded-xl shadow-xs ${fontBadge}`}>
                MAED-English
              </span>
            </div>

            <p className={`mt-3 sm:mt-4 text-stone-700 ${isFullscreen ? 'max-w-5xl' : 'max-w-3xl'} mx-auto ${fontBody}`}>
              An educational portfolio examining the four historical cornerstones of associative psychology:
              <span className="font-semibold text-red-800"> Thorndike</span>,
              <span className="font-semibold text-amber-800"> Skinner</span>,
              <span className="font-semibold text-emerald-800"> Pavlov</span>, and
              <span className="font-semibold text-orange-800"> Bandura</span>.
            </p>
          </div>

          {/* 4 Theorist Showcase Cards with Pictures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-4 sm:mt-6">
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
                  className={`border-2 rounded-2xl ${isFullscreen ? 'p-4 sm:p-5' : 'p-3.5 sm:p-4'} transition-all shadow-xs hover:shadow-md flex flex-col justify-between ${borderColors[idx % 4]}`}
                >
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
                      <img
                        src={th.image}
                        alt={th.name}
                        referrerPolicy="no-referrer"
                        className={`${isFullscreen ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-12 h-12 sm:w-14 sm:h-14'} rounded-xl object-cover object-top border-2 border-white shadow-sm shrink-0`}
                      />
                      <div>
                        <h3 className={`font-black ${fontCardHeader} ${textColors[idx % 4]}`}>
                          {th.name}
                        </h3>
                        <span className={`text-stone-600 ${fontBadge}`}>
                          {th.dates}
                        </span>
                      </div>
                    </div>
                    <div className={`font-bold text-stone-900 ${fontCardDesc}`}>{th.theory}</div>
                  </div>
                  <div className={`mt-2 pt-2 border-t border-stone-200/80 text-stone-700 leading-snug ${fontCardDesc}`}>
                    {th.keyConcept}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div className={`text-stone-600 font-medium flex items-center gap-2 ${fontCardDesc}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-pulse" />
            <span>Interactive Educational Presentation · Press Next to advance</span>
          </div>
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-7 py-3 rounded-xl bg-red-800 hover:bg-red-900 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-heading-display"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    );
  }

  // 2. QUOTE & HERO SLIDES (Thorndike Slide 2, Skinner Slide 10, Pavlov Slide 20, Bandura Slide 30)
  if (type === 'quote_hero') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl relative ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`inline-flex items-center gap-2 font-mono uppercase tracking-wider text-red-800 mb-2 ${fontBadge}`}>
            <GraduationCap className="w-4 h-4" />
            <span>{slide.sectionTitle}</span>
          </div>
          <h2 className={fontTitle}>
            {data.title}
          </h2>
          {data.author && (
            <div className={`text-red-900 mt-1.5 ${fontSub}`}>
              {data.author}
            </div>
          )}
          {data.role && (
            <div className={`text-stone-600 font-mono mt-0.5 ${fontBadge}`}>
              {data.role}
            </div>
          )}

          {/* Quote Block */}
          <div className="mt-5 sm:mt-6 p-6 sm:p-8 rounded-2xl border-2 border-red-200 bg-red-50/70 text-red-950 relative shadow-sm">
            <Quote className="w-10 h-10 opacity-20 absolute top-4 right-4 text-red-800" />
            <blockquote className={fontQuote}>
              “{data.quote}”
            </blockquote>
          </div>

          {data.subQuote && (
            <p className={`mt-4 text-stone-700 font-medium ${fontBody}`}>
              {data.subQuote}
            </p>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt={data.author || data.title}
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className="p-3.5 bg-red-900 text-white text-center">
              <span className={`font-bold font-heading-display ${fontCardHeader}`}>{data.author}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. THEORIST BIOGRAPHY PROFILE (Thorndike Slide 3)
  if (type === 'theorist_profile') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-xs sm:max-w-sm'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt={data.name}
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className="p-3.5 bg-red-900 text-white text-center">
              <span className={`font-bold font-heading-display ${fontCardHeader}`}>{data.name}</span>
              <div className={`text-red-200 font-mono mt-0.5 ${fontBadge}`}>{data.birth}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`text-red-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </div>
          <h2 className={`text-stone-900 mb-4 ${fontTitle}`}>
            {data.name}
          </h2>

          <div className="space-y-3.5">
            {data.milestones.map((m: string, idx: number) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 flex items-start gap-4 hover:border-red-400 transition-colors shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-red-800 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0 shadow-xs">
                  0{idx + 1}
                </div>
                <p className={`text-stone-800 font-medium leading-relaxed mt-0.5 ${fontBody}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`text-red-800 uppercase tracking-wider mb-2 ${fontBadge}`}>
            Section Overview
          </div>
          <h2 className={fontTitle}>
            {data.title}
          </h2>
          <div className={`text-red-900 mt-2 ${fontSub}`}>
            {data.author}
          </div>
          <p className={`mt-4 text-stone-700 leading-relaxed font-medium ${fontBody}`}>
            {data.summary}
          </p>

          <div className="mt-6 p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl">
            <span className={`text-amber-950 block uppercase mb-2 ${fontBadge}`}>
              Key Focus Areas:
            </span>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-stone-800 font-medium ${fontCardDesc}`}>
              <div>• 1. Connectionism Theory (S-R Bond)</div>
              <div>• 2. Trial & Error Learning Experiments</div>
              <div>• 3. Three Laws of Learning</div>
              <div>• 4. Educational Psychology Foundation</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt="Stimulus-Response Diagram"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className="p-3 bg-stone-800 text-white text-center">
              <span className={`font-bold font-mono ${fontBadge}`}>Stimulus-Response (S-R) Bond System</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. CONNECTIONISM THEORY (Slide 5)
  if (type === 'connectionism_theory') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className={`text-red-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </div>
          <h2 className={`text-stone-900 mb-2 ${fontTitle}`}>
            {data.title}
          </h2>
          <div className={`text-red-900 uppercase mb-4 ${fontSub}`}>
            {data.subtitle}
          </div>

          <div className="space-y-3.5">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 flex items-start gap-3.5 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <p className={`text-stone-800 font-semibold leading-relaxed ${fontBody}`}>
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-5 p-4 bg-red-50 border border-red-300 rounded-xl text-red-950 font-medium ${fontCardDesc}`}>
            <strong>Theoretical Formula:</strong> Stimulus (S) ⇄ Neural Bond ⇄ Response (R). Connections strengthen with satisfying outcomes.
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt="Connectionism S-R Neural Diagram"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-red-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <button
            onClick={() => setShowInteractiveLab(!showInteractiveLab)}
            className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer font-heading-display"
          >
            <Activity className="w-4 h-4" />
            <span>{showInteractiveLab ? 'View Summary' : 'Run Interactive Lab'}</span>
          </button>
        </div>

        {showInteractiveLab ? (
          <div className="my-4">
            <TrialAndErrorSimulator />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className={`text-red-900 block mb-1 uppercase tracking-wider ${fontBadge}`}>
                Core Experimental Discoveries:
              </span>
              {data.bullets.map((b: string, idx: number) => (
                <div key={idx} className="p-3.5 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-700 shrink-0 mt-2" />
                  <p className={`text-stone-800 font-medium ${fontBody}`}>{b}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 flex flex-col items-center">
              <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
                <img
                  src={data.image}
                  alt="Thorndike Cat in Puzzle Box"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
                />
                <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                  Edward Thorndike's Original Puzzle Box Apparatus with Cat
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`text-stone-600 pt-3 border-t border-stone-200 flex items-center justify-between font-medium ${fontCardDesc}`}>
          <span>“Learning occurred gradually through repeated attempts rather than sudden insight.”</span>
          <span className="text-red-800 font-bold font-mono">Thorndike, 1898</span>
        </div>
      </div>
    );
  }

  // 7. TRIAL AND ERROR 4-STEP DIAGRAM (Slide 7)
  if (type === 'trial_error_diagram') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div>
          <span className={`text-red-800 uppercase tracking-wider ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
            {data.title}
          </h2>
          <p className={`text-stone-600 mt-1 max-w-3xl font-medium ${fontBody}`}>
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
          {/* Left: 4 Step Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col justify-between shadow-xs ${colors[idx]}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2.5 py-1 rounded-lg text-white font-mono font-bold text-xs ${badgeColors[idx]}`}>
                      Step 0{idx + 1}
                    </span>
                    <span className={`uppercase ${fontBadge}`}>{st.name}</span>
                  </div>
                  <p className={`text-stone-800 font-medium leading-relaxed ${fontCardDesc}`}>{st.text}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Puzzle Box Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.image}
                alt="Cat in Puzzle Box"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
              />
              <div className={`p-2.5 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                Trial & Error Operant Mechanism
              </div>
            </div>
          </div>
        </div>

        <div className={`p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium flex items-center justify-between ${fontCardDesc}`}>
          <span>Continuous practice solidifies the neural pathway, reducing latency from minutes to seconds.</span>
          <span className="font-mono text-red-800 font-bold hidden sm:inline">Law of Practice</span>
        </div>
      </div>
    );
  }

  // 8. THREE LAWS OF LEARNING (Slide 8)
  if (type === 'three_laws') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between">
          <div>
            <span className={`text-red-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <img
              src={data.image}
              alt="Thorndike"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-red-300 shadow-xs"
            />
            <span className={`font-bold text-stone-800 font-heading-display ${fontCardHeader}`}>Edward Thorndike</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-4">
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
                className={`p-5 sm:p-6 rounded-2xl border-2 flex flex-col justify-between shadow-xs ${cardStyles[idx]}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white shadow-xs ${iconColors[idx]}`}>
                      {law.icon === 'bulb' && <Lightbulb className="w-6 h-6" />}
                      {law.icon === 'puzzle' && <Puzzle className="w-6 h-6" />}
                      {law.icon === 'brain' && <Brain className="w-6 h-6" />}
                    </div>
                    <span className="text-sm font-mono font-black text-stone-600">0{idx + 1}</span>
                  </div>
                  <h3 className={`font-black text-stone-900 mb-3 ${fontCardHeader}`}>
                    {law.title}
                  </h3>
                  <div className="space-y-2.5">
                    {law.bullets.map((b: string, bIdx: number) => (
                      <div key={bIdx} className={`text-stone-800 font-medium flex items-start gap-2.5 ${fontCardDesc}`}>
                        <span className="w-2 h-2 rounded-full bg-stone-500 shrink-0 mt-2" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
          These three fundamental laws formed the bedrock of early 20th-century educational pedagogy, curriculum sequencing, and student motivation.
        </div>
      </div>
    );
  }

  // 9. CONCLUSION (Thorndike Slide 9)
  if (type === 'thorndike_conclusion') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-red-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-4 ${fontTitle}`}>
            {data.title}
          </h2>

          <div className="space-y-4">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 flex items-start gap-4 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-red-800 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  ✓
                </div>
                <p className={`text-stone-800 font-medium leading-relaxed ${fontBody}`}>
                  {b}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-5 p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-bold ${fontCardDesc}`}>
            Thorndike's Legacy: Established psychology as an empirical, data-driven science of learning.
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt="Edward Thorndike"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className="p-3.5 bg-red-900 text-white text-center">
              <span className={`font-bold font-heading-display ${fontCardHeader}`}>Edward Lee Thorndike (1874–1949)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. SKINNER HERO (Slide 10)
  if (type === 'skinner_hero') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`text-amber-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </div>
          <h2 className={fontTitle}>
            {data.title}
          </h2>
          <div className={`text-amber-800 mt-1 uppercase ${fontSub}`}>
            {data.subtitle}
          </div>
          <div className={`text-stone-600 font-mono mt-0.5 ${fontBadge}`}>
            {data.tagline}
          </div>

          {/* Quote */}
          <div className="mt-5 p-6 sm:p-7 rounded-2xl border-2 border-amber-300 bg-amber-50/80 text-stone-900 relative shadow-xs">
            <Quote className="w-10 h-10 opacity-20 absolute top-4 right-4 text-amber-800" />
            <blockquote className={fontQuote}>
              “{data.quote}”
            </blockquote>
            <p className={`mt-3 font-semibold text-stone-700 ${fontBody}`}>{data.subQuote}</p>
          </div>

          <div className={`mt-4 p-3.5 bg-stone-50 border border-stone-200 rounded-xl font-mono text-stone-600 ${fontBadge}`}>
            {data.biographyLine}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-3">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageSkinner}
              alt="B.F. Skinner"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3 bg-amber-700 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-amber-900 font-mono ${fontBadge}`}>{data.subHeader}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.image}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3.5 my-3 sm:my-4">
          {data.timeline.map((item: any, idx: number) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-amber-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-mono font-black text-amber-800 mb-1 block">
                  {item.year}
                </span>
                <div className={`text-stone-900 mb-1 ${fontCardHeader}`}>
                  {item.title}
                </div>
              </div>
              <p className={`text-stone-600 leading-snug mt-1.5 ${fontCardDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-amber-50 border border-amber-300 rounded-xl text-stone-800 font-medium ${fontBody}`}>
          “{data.quote}”
        </div>
      </div>
    );
  }

  // 12. SKINNER'S ABC MODEL (Slide 12)
  if (type === 'skinner_abc_exact') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-amber-900 font-mono ${fontSub}`}>{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageClassroom}
              alt="Classroom"
              referrerPolicy="no-referrer"
              className="w-14 h-12 rounded-xl object-cover border border-amber-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-4">
          {data.steps.map((st: any) => (
            <div
              key={st.num}
              className="p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-700 text-white font-mono font-bold flex items-center justify-center text-sm">
                    0{st.num}
                  </span>
                  <span className={`text-stone-900 uppercase font-mono tracking-wider ${fontCardHeader}`}>
                    {st.label}
                  </span>
                </div>
                <p className={`text-stone-700 mb-3 font-medium ${fontBody}`}>{st.desc}</p>

                <div className="space-y-2.5 pt-3 border-t border-stone-200">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300">
                    <span className="text-xs font-mono text-emerald-800 block font-bold">
                      {st.good.title}
                    </span>
                    <span className={`text-emerald-950 font-medium ${fontCardDesc}`}>{st.good.text}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-300">
                    <span className="text-xs font-mono text-rose-800 block font-bold">
                      {st.bad.title}
                    </span>
                    <span className={`text-rose-950 font-medium ${fontCardDesc}`}>{st.bad.text}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-medium flex items-center justify-between ${fontCardDesc}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-stone-600 font-semibold ${fontSub}`}>{data.question}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 my-4 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.imageBox}
                alt="Skinner Box Apparatus"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
              />
              <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                Operant Conditioning Chamber (Skinner Box)
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <p className={`text-stone-700 font-medium leading-relaxed ${fontBody}`}>
              {data.explanation}
            </p>

            <div className="space-y-2.5">
              {data.steps.map((st: any) => (
                <div key={st.num} className="p-3 sm:p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {st.num}
                  </span>
                  <div>
                    <span className={`font-bold text-stone-900 block ${fontCardHeader}`}>{st.title}</span>
                    <span className={`text-stone-600 font-medium ${fontCardDesc}`}>{st.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-bold ${fontCardDesc}`}>
              Key Takeaway: {data.keyTakeaway}
            </div>
          </div>
        </div>

        <div className={`font-serif-title italic text-stone-600 pt-3 border-t border-stone-200 ${fontCardDesc}`}>
          “{data.quote1}”
        </div>
      </div>
    );
  }

  // 14. REINFORCEMENT (Slide 14)
  if (type === 'reinforcement_exact') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-emerald-800 font-bold ${fontSub}`}>{data.subtitle}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <img
                src={data.imageTeacher}
                alt="Teacher reinforcement"
                referrerPolicy="no-referrer"
                className="w-14 h-12 rounded-xl object-cover border border-emerald-300 shadow-xs"
              />
            </div>
            <button
              onClick={() => setShowInteractiveLab(!showInteractiveLab)}
              className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer font-heading-display"
            >
              <Activity className="w-4 h-4" />
              <span>{showInteractiveLab ? 'View Cards' : 'Open 2x2 Matrix Tool'}</span>
            </button>
          </div>
        </div>

        {showInteractiveLab ? (
          <div className="my-4">
            <SkinnerQuadrantMatrix />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-4">
            {/* Positive Reinforcement */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-lg bg-emerald-700 text-white ${fontBadge}`}>
                    + Add Stimulus
                  </span>
                  <span className={`text-emerald-950 uppercase ${fontBadge}`}>
                    ▲ Behavior Increases
                  </span>
                </div>
                <h3 className={`font-black text-stone-900 mb-1 ${fontCardHeader}`}>{data.positive.title}</h3>
                <p className={`font-semibold text-emerald-900 mb-3 ${fontCardDesc}`}>{data.positive.rule}</p>

                <div className="space-y-2.5 pt-2 border-t border-emerald-200">
                  <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-xs">
                    <span className="font-bold text-stone-600 block text-xs font-mono">Step 1</span>
                    <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.positive.step1}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-xs">
                    <span className="font-bold text-stone-600 block text-xs font-mono">Step 2</span>
                    <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.positive.step2}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 font-bold">
                    <span className="block text-xs font-mono">Outcome</span>
                    <span className={fontCardDesc}>{data.positive.step3}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Negative Reinforcement */}
            <div className="p-5 sm:p-6 rounded-2xl border-2 border-amber-300 bg-amber-50/70 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-lg bg-amber-700 text-white ${fontBadge}`}>
                    - Remove Stimulus
                  </span>
                  <span className={`text-amber-950 uppercase ${fontBadge}`}>
                    ▲ Behavior Increases
                  </span>
                </div>
                <h3 className={`font-black text-stone-900 mb-1 ${fontCardHeader}`}>{data.negative.title}</h3>
                <p className={`font-semibold text-amber-900 mb-3 ${fontCardDesc}`}>{data.negative.rule}</p>

                <div className="space-y-2.5 pt-2 border-t border-amber-200">
                  <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-xs">
                    <span className="font-bold text-stone-600 block text-xs font-mono">Step 1</span>
                    <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.negative.step1}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-xs">
                    <span className="font-bold text-stone-600 block text-xs font-mono">Step 2</span>
                    <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.negative.step2}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-950 font-bold">
                    <span className="block text-xs font-mono">Outcome</span>
                    <span className={fontCardDesc}>{data.negative.step3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-800 font-medium flex items-center justify-between ${fontCardDesc}`}>
          <span>{data.banner}</span>
          <span className="font-mono text-amber-800 font-bold hidden sm:inline">{data.note}</span>
        </div>
      </div>
    );
  }

  // 15. PUNISHMENT (Slide 15)
  if (type === 'punishment_exact') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-rose-800 font-bold ${fontSub}`}>{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageClassroom}
              alt="Classroom"
              referrerPolicy="no-referrer"
              className="w-14 h-12 rounded-xl object-cover border border-stone-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-4">
          {/* Positive Punishment */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-rose-300 bg-rose-50/70 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-lg bg-rose-700 text-white ${fontBadge}`}>
                  + Add Unpleasant
                </span>
                <span className={`text-rose-950 uppercase ${fontBadge}`}>
                  ▼ Behavior Decreases
                </span>
              </div>
              <h3 className={`font-black text-stone-900 mb-1 ${fontCardHeader}`}>{data.positive.title}</h3>
              <p className={`font-semibold text-rose-900 mb-3 ${fontCardDesc}`}>{data.positive.rule}</p>

              <div className="space-y-2.5 pt-2 border-t border-rose-200">
                <div className="p-3 rounded-xl bg-white border border-rose-200 shadow-xs">
                  <span className="font-bold text-stone-600 block text-xs font-mono">Scenario</span>
                  <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.positive.step1}</span>
                </div>
                <div className="p-3 rounded-xl bg-rose-100 border border-rose-300 text-rose-950 font-bold">
                  <span className="block text-xs font-mono">Consequence</span>
                  <span className={fontCardDesc}>{data.positive.step2}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Negative Punishment */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-orange-300 bg-orange-50/70 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-lg bg-orange-700 text-white ${fontBadge}`}>
                  - Remove Desirable
                </span>
                <span className={`text-orange-950 uppercase ${fontBadge}`}>
                  ▼ Behavior Decreases
                </span>
              </div>
              <h3 className={`font-black text-stone-900 mb-1 ${fontCardHeader}`}>{data.negative.title}</h3>
              <p className={`font-semibold text-orange-900 mb-3 ${fontCardDesc}`}>{data.negative.rule}</p>

              <div className="space-y-2.5 pt-2 border-t border-orange-200">
                <div className="p-3 rounded-xl bg-white border border-orange-200 shadow-xs">
                  <span className="font-bold text-stone-600 block text-xs font-mono">Scenario</span>
                  <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{data.negative.step1}</span>
                </div>
                <div className="p-3 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-bold">
                  <span className="block text-xs font-mono">Consequence</span>
                  <span className={fontCardDesc}>{data.negative.step2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-800 font-medium flex items-center justify-between ${fontCardDesc}`}>
          <span>{data.banner}</span>
          <span className="font-mono text-rose-800 font-bold hidden sm:inline">{data.note}</span>
        </div>
      </div>
    );
  }

  // 16. OTHER KEY CONCEPTS (Slide 16)
  if (type === 'other_key_concepts') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-stone-600 font-semibold ${fontSub}`}>{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageSkinner}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {data.concepts.map((c: any, idx: number) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-amber-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="w-8 h-8 rounded-xl bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <h3 className={`font-black text-stone-900 mb-2 ${fontCardHeader}`}>{c.title}</h3>
                <p className={`text-stone-600 leading-relaxed font-medium ${fontCardDesc}`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-medium ${fontBody}`}>
          {data.footer}
        </div>
      </div>
    );
  }

  // 17. APPLICATION TO EDUCATION (Slide 17)
  if (type === 'application_education_skinner') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-stone-600 font-semibold ${fontSub}`}>{data.question}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 my-4 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-emerald-50 border-2 border-emerald-300 rounded-2xl shadow-xs">
              <span className={`text-emerald-950 uppercase font-mono block mb-2 ${fontBadge}`}>
                Positive Reinforcement in the Classroom:
              </span>
              <div className={`grid grid-cols-2 gap-2 text-stone-800 font-medium ${fontCardDesc}`}>
                {data.positive.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl shadow-xs">
              <span className={`text-amber-950 uppercase font-mono block mb-2 ${fontBadge}`}>
                Negative Reinforcement in the Classroom:
              </span>
              <div className={`grid grid-cols-1 gap-2 text-stone-800 font-medium ${fontCardDesc}`}>
                {data.negative.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center">
            <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
              <img
                src={data.imageClassroom}
                alt="Teacher reinforcing students"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
              />
              <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                Classroom Reinforcement & Operant Environment
              </div>
            </div>
          </div>
        </div>

        <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 font-medium ${fontCardDesc}`}>
          {data.footer}
        </div>
      </div>
    );
  }

  // 18. SIGNIFICANCE OF SKINNER'S WORK (Slide 18)
  if (type === 'significance_skinner') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-amber-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-stone-600 font-semibold ${fontSub}`}>{data.question}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageSkinner}
              alt="Skinner"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {data.pillars.map((pil: any, idx: number) => (
            <div key={idx} className="p-5 bg-stone-50 border-2 border-stone-200 rounded-2xl flex flex-col justify-between shadow-xs">
              <div>
                <span className="w-8 h-8 rounded-xl bg-amber-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3">
                  0{idx + 1}
                </span>
                <h3 className={`text-stone-900 mb-2 ${fontCardHeader}`}>{pil.title}</h3>
                <p className={`text-stone-600 leading-relaxed font-medium ${fontCardDesc}`}>{pil.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-amber-50 border border-amber-300 rounded-xl text-stone-800 font-medium ${fontBody}`}>
          {data.footer}
        </div>
      </div>
    );
  }

  // 19. CONCLUSION SKINNER (Slide 19)
  if (type === 'conclusion_skinner') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-amber-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-2 ${fontTitle}`}>
            {data.title}
          </h2>
          <div className={`text-amber-900 font-mono mb-4 ${fontSub}`}>{data.subtitle}</div>

          <div className="space-y-3">
            {data.points.map((pt: string, idx: number) => (
              <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3 shadow-xs">
                <span className="w-6 h-6 rounded-md bg-amber-700 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  ✓
                </span>
                <p className={`text-stone-800 font-medium leading-relaxed ${fontBody}`}>{pt}</p>
              </div>
            ))}
          </div>

          <div className={`mt-5 p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 font-bold ${fontCardDesc}`}>
            {data.footer}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageSkinner}
              alt="B.F. Skinner"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-amber-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={fontTitle}>
            {data.title}
          </h2>
          <div className={`text-emerald-800 mt-1 uppercase ${fontSub}`}>
            {data.author}
          </div>
          <div className={`text-stone-600 font-mono mt-0.5 ${fontBadge}`}>
            {data.tagline} {data.subtitle}
          </div>

          <div className="mt-5 p-6 sm:p-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 text-stone-900 relative shadow-sm">
            <Quote className="w-10 h-10 opacity-20 absolute top-4 right-4 text-emerald-800" />
            <blockquote className={fontQuote}>
              “Don't become a mere recorder of facts, but try to penetrate the mystery of their origin.”
            </blockquote>
            <p className={`mt-3 font-mono font-bold text-emerald-900 ${fontCardDesc}`}>— Ivan Pavlov, Nobel Laureate 1904</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imagePavlov}
              alt="Ivan Pavlov"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-emerald-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-emerald-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imagePavlov}
              alt="Pavlov"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3.5 my-3 sm:my-4">
          {data.timeline.map((item: any) => (
            <div
              key={item.num}
              className="p-3 sm:p-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs font-mono font-black text-emerald-800 mb-1 block">
                  0{item.num}
                </span>
                <div className={`text-stone-900 mb-1 ${fontCardHeader}`}>
                  {item.title}
                </div>
              </div>
              <p className={`text-stone-600 leading-snug mt-1.5 font-medium ${fontCardDesc}`}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium ${fontBody}`}>
          Pavlov's rigorous physiological methods transformed psychology from philosophical speculation into an experimental laboratory discipline.
        </div>
      </div>
    );
  }

  // 22. MAJOR CONTRIBUTIONS AND ACCOMPLISHMENT (Slide 22)
  if (type === 'pavlov_two_areas') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div>
          <span className={`text-emerald-800 uppercase tracking-wider ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
            {data.title}
          </h2>
          <p className={`text-stone-600 mt-1 font-medium ${fontBody}`}>{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {/* Area 1: Digestion */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 flex flex-col justify-between shadow-xs">
            <div>
              <span className={`text-emerald-800 block mb-1 uppercase ${fontBadge}`}>Area 01</span>
              <h3 className={`font-black text-stone-900 mb-3 ${fontCardHeader}`}>{data.area1Title}</h3>
              <div className="rounded-xl overflow-hidden border-2 border-stone-200 bg-white shadow-xs">
                <img
                  src={data.imageDigestion}
                  alt="Digestion Physiology"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />
              </div>
            </div>
            <p className={`text-stone-700 mt-3 font-medium ${fontCardDesc}`}>Awarded the 1904 Nobel Prize for digestive physiology research.</p>
          </div>

          {/* Area 2: Conditioned Reflexes */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 flex flex-col justify-between shadow-xs">
            <div>
              <span className={`text-emerald-800 block mb-1 uppercase ${fontBadge}`}>Area 02</span>
              <h3 className={`font-black text-stone-900 mb-3 ${fontCardHeader}`}>{data.area2Title}</h3>
              <div className="rounded-xl overflow-hidden border-2 border-stone-200 bg-white shadow-xs">
                <img
                  src={data.imageDog}
                  alt="Pavlov Dog Conditioned Reflex"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-16/10 object-cover"
                />
              </div>
            </div>
            <p className={`text-stone-700 mt-3 font-medium ${fontCardDesc}`}>Formulated the classic Stimulus-Association paradigm of learning.</p>
          </div>
        </div>

        <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
          Both research programs converged on how neurological connections guide biological and behavioral reactions.
        </div>
      </div>
    );
  }

  // 23. PHYSIOLOGY OF DIGESTION (Slide 23)
  if (type === 'pavlov_digestion_focus') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {data.header}
          </span>
          <h2 className={`text-stone-900 mb-4 ${fontTitle}`}>
            {data.title}
          </h2>

          <div className="space-y-4">
            <div className="p-5 bg-stone-50 border-2 border-stone-200 rounded-2xl shadow-xs">
              <span className={`text-emerald-800 block mb-1.5 ${fontBadge}`}>Research Discovery:</span>
              <p className={`text-stone-800 font-medium leading-relaxed ${fontBody}`}>{data.leftText}</p>
            </div>

            <div className="p-5 bg-emerald-50 border-2 border-emerald-300 rounded-2xl shadow-xs">
              <span className={`text-emerald-950 block mb-1.5 ${fontBadge}`}>Nobel Recognition:</span>
              <p className={`text-stone-900 font-bold leading-relaxed ${fontBody}`}>{data.rightText}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageDigestion}
              alt="Physiology of Digestion"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-emerald-800 uppercase tracking-wider ${fontBadge}`}>
              {data.header}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <button
            onClick={() => setShowInteractiveLab(!showInteractiveLab)}
            className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer font-heading-display"
          >
            <Activity className="w-4 h-4" />
            <span>{showInteractiveLab ? 'View Cards' : 'Test Audio Bell Lab'}</span>
          </button>
        </div>

        {showInteractiveLab ? (
          <div className="my-4">
            <PavlovSimulator />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
            {/* 4 Stages Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.stages.map((st: any) => (
                <div
                  key={st.num}
                  className="p-4 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between shadow-xs transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-emerald-800 ${fontCardHeader}`}>
                        {st.title}
                      </span>
                      <span className={`text-stone-500 font-semibold ${fontBadge}`}>{st.condition}</span>
                    </div>

                    <div className="p-2.5 bg-white rounded-xl border border-stone-200 mb-2 shadow-xs">
                      <span className={`text-stone-500 block uppercase ${fontBadge}`}>Stimulus</span>
                      <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{st.stimulus}</span>
                    </div>

                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 shadow-xs">
                      <span className={`text-emerald-800 block uppercase ${fontBadge}`}>Response</span>
                      <span className={`text-emerald-950 font-bold ${fontCardDesc}`}>{st.response}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pavlov Dog Experiment Diagram Picture */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
                <img
                  src={data.imageDog}
                  alt="Pavlov Dog Conditioning Diagram"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
                />
                <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                  Classical Conditioning 4-Stage Paradigm
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium flex items-center justify-between ${fontCardDesc}`}>
          <span>Through repeated temporal contiguity, the neutral bell transforms into a conditioned stimulus.</span>
          <span className="font-mono text-emerald-800 font-bold hidden sm:inline">Conditioned Reflex</span>
        </div>
      </div>
    );
  }

  // 25. PAVLOV'S CLASSICAL CONDITIONING DEFINITION (Slide 25)
  if (type === 'pavlov_definition_slide') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-4 ${fontTitle}`}>
            {data.title}
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 shadow-xs mb-5">
            <span className={`text-emerald-900 uppercase block mb-2 ${fontBadge}`}>
              Core Definition:
            </span>
            <p className={`text-stone-900 font-semibold leading-relaxed ${fontBody}`}>
              {data.definition}
            </p>
          </div>

          <div className={`flex items-center justify-center gap-4 p-4 bg-stone-50 border border-stone-200 rounded-2xl font-bold text-stone-900 shadow-xs ${fontCardHeader}`}>
            <span className="px-4 py-2 bg-white border border-stone-200 rounded-xl shadow-xs">{data.flow[0]}</span>
            <span className="text-emerald-700 font-black">➔</span>
            <span className="px-4 py-2 bg-emerald-700 text-white rounded-xl shadow-xs">{data.flow[1]}</span>
            <span className="text-emerald-700 font-black">➔</span>
            <span className="px-4 py-2 bg-white border border-stone-200 rounded-xl shadow-xs">{data.flow[2]}</span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
            <img
              src={data.imageDog}
              alt="Classical Conditioning"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-emerald-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-emerald-900 font-mono ${fontSub}`}>{data.subtitle}</div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.image}
              alt="Pavlov"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
          {data.principles.map((pr: any) => (
            <div
              key={pr.num}
              className="p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-emerald-400 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold text-emerald-800 uppercase block mb-1">
                  0{pr.num}
                </span>
                <h3 className={`font-bold text-stone-900 mb-2 ${fontCardHeader}`}>{pr.title}</h3>
                <p className={`text-stone-600 leading-relaxed font-medium ${fontCardDesc}`}>{pr.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium ${fontBody}`}>
          These five core principles govern how organisms acquire, sustain, weaken, and re-trigger conditioned associations in natural environments.
        </div>
      </div>
    );
  }

  // 27. APPLICATION IN EDUCATION (Slide 27)
  if (type === 'pavlov_education_exact') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-2 ${fontTitle}`}>
            {data.title}
          </h2>
          <div className={`text-emerald-900 uppercase mb-4 ${fontSub}`}>
            {data.header}
          </div>

          <div className="p-5 bg-stone-50 border-2 border-stone-200 rounded-2xl shadow-xs mb-4">
            <span className={`text-stone-700 block mb-1 ${fontBadge}`}>Scenario:</span>
            <p className={`text-stone-900 font-medium leading-relaxed ${fontBody}`}>{data.description}</p>
          </div>

          <div className={`p-4 bg-emerald-50 border-2 border-emerald-300 rounded-xl text-center font-mono font-bold text-emerald-950 shadow-xs mb-4 ${fontCardHeader}`}>
            {data.flow}
          </div>

          <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
            <strong>Outcome:</strong> {data.result}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageClassroom}
              alt="Classroom Reading Routine"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-2 ${fontTitle}`}>
            {data.title}
          </h2>
          <p className={`text-stone-600 mb-4 font-medium ${fontBody}`}>{data.subtitle}</p>

          <div className="space-y-3.5">
            {data.points.map((pt: any, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs">
                <span className={`text-emerald-900 block mb-1 ${fontCardHeader}`}>
                  • {pt.title}
                </span>
                <p className={`text-stone-700 font-medium leading-relaxed ${fontCardDesc}`}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt="Pavlov Conditioning"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-emerald-800 uppercase tracking-wider mb-2 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>

          <div className="p-8 sm:p-12 rounded-3xl border-4 border-emerald-300 bg-emerald-50/70 text-emerald-950 shadow-md">
            <Quote className="w-12 h-12 opacity-25 text-emerald-800 mb-3" />
            <blockquote className={fontQuote}>
              {data.quote}
            </blockquote>
            <div className="mt-6 pt-5 border-t border-emerald-200">
              <span className={`text-emerald-950 block ${fontCardHeader}`}>{data.author}</span>
              <span className={`text-emerald-800 ${fontCardDesc}`}>{data.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imagePavlov}
              alt="Ivan Pavlov"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-emerald-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-orange-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={fontTitle}>
            {data.title}
          </h2>
          <div className={`text-orange-800 mt-1 ${fontSub}`}>
            {data.author}
          </div>
          <div className={`text-stone-600 font-mono mt-0.5 ${fontBadge}`}>
            {data.subtitle}
          </div>

          <div className="mt-5 p-6 sm:p-8 rounded-2xl border-2 border-orange-300 bg-orange-50/70 text-stone-900 relative shadow-sm">
            <Quote className="w-10 h-10 opacity-20 absolute top-4 right-4 text-orange-800" />
            <blockquote className={fontQuote}>
              “Most human behavior is learned observationally through modeling: from observing others, one forms an idea of how new behaviors are performed.”
            </blockquote>
            <p className={`mt-3 font-mono font-bold text-orange-900 ${fontCardDesc}`}>— Albert Bandura, 1977</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-orange-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-xs sm:max-w-sm'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-orange-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
              Albert Bandura · Canadian-American Psychologist
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-orange-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-4 ${fontTitle}`}>
            {data.title}
          </h2>

          <div className="space-y-4">
            {data.bullets.map((b: string, idx: number) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 flex items-start gap-4 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-700 text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <p className={`text-stone-800 font-medium leading-relaxed mt-0.5 ${fontBody}`}>
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
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className={`text-orange-800 uppercase tracking-wider mb-1 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mb-2 ${fontTitle}`}>
            {data.title}
          </h2>
          <div className={`text-orange-900 font-mono mb-4 ${fontSub}`}>{data.subtitle}</div>

          <div className="p-6 sm:p-8 rounded-2xl border-2 border-orange-300 bg-orange-50/70 shadow-xs mb-4">
            <span className={`text-orange-950 uppercase block mb-2 ${fontBadge}`}>
              Core Theoretical Tenet:
            </span>
            <p className={`text-stone-900 font-semibold leading-relaxed ${fontBody}`}>
              {data.definition}
            </p>
          </div>

          <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
            Bridged behaviorism and cognitive psychology by proving that learning does not always require direct physical reinforcement.
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center">
          <div className={`w-full ${isFullscreen ? 'max-w-xl md:max-w-2xl' : 'max-w-lg'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.image}
              alt="Bobo Doll Observational Study"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
            />
            <div className={`p-3 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-orange-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
            <div className={`text-orange-900 font-mono ${fontSub}`}>{data.subtitle}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4 items-center">
          {/* Left: 4 Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col justify-between shadow-xs ${bgs[st.num - 1]}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-7 h-7 rounded-lg font-mono font-bold flex items-center justify-center text-xs text-white ${badges[st.num - 1]}`}>
                        0{st.num}
                      </span>
                      <span className={`uppercase ${fontBadge}`}>{st.sub}</span>
                    </div>
                    <h3 className={`text-stone-900 mb-1 ${fontCardHeader}`}>{st.name}</h3>
                    <p className={`text-stone-700 leading-snug font-medium ${fontCardDesc}`}>{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Bobo Doll / Observational Study Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50">
              <img
                src={data.image}
                alt="Observational Modeling"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-none object-cover"
              />
              <div className={`p-2.5 bg-stone-800 text-white text-center font-mono ${fontBadge}`}>
                Observation, Retention & Motor Imitation Flow
              </div>
            </div>
          </div>
        </div>

        <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
          Observational learning relies on these four mediational cognitive stages. Without attention and retention, behavior cannot be reproduced; without motivation, it will not be enacted.
        </div>
      </div>
    );
  }

  // 34. BANDURA RECIPROCAL DETERMINISM (Slide 34)
  if (type === 'bandura_reciprocal_exact') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-orange-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <img
                src={data.imageBandura}
                alt="Albert Bandura"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-300 shadow-xs"
              />
              <span className={`font-bold text-stone-800 font-heading-display ${fontCardHeader}`}>Albert Bandura</span>
            </div>
            <button
              onClick={() => setShowInteractiveLab(!showInteractiveLab)}
              className="flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer font-heading-display"
            >
              <Activity className="w-4 h-4" />
              <span>{showInteractiveLab ? 'View Summary' : 'Open Interactive Triad'}</span>
            </button>
          </div>
        </div>

        {showInteractiveLab ? (
          <div className="my-4">
            <ReciprocalDeterminismModel />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-4">
            {data.nodes.map((n: any) => (
              <div
                key={n.code}
                className="p-5 sm:p-6 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-orange-400 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono font-bold text-orange-800">{n.code}</span>
                    <span className={`text-stone-500 font-bold uppercase ${fontBadge}`}>Triadic Node</span>
                  </div>
                  <h3 className={`font-bold text-stone-900 mb-3 ${fontCardHeader}`}>{n.title}</h3>
                  <ul className="space-y-2">
                    {n.items.map((item: string, iIdx: number) => (
                      <li key={iIdx} className={`text-stone-700 font-medium flex items-center gap-2.5 ${fontCardDesc}`}>
                        <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`p-4 bg-orange-50 border border-orange-200 rounded-xl text-orange-950 font-medium ${fontCardDesc}`}>
          Reciprocal Determinism asserts that human functioning is an ongoing, continuous interaction between personal cognitive factors, environmental influences, and observable behaviors.
        </div>
      </div>
    );
  }

  // 35. SIGNIFICANCE & APPLICATIONS BANDURA (Slide 35)
  if (type === 'bandura_applications_exact') {
    return (
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <span className={`text-orange-800 uppercase tracking-wider ${fontBadge}`}>
              {slide.sectionTitle}
            </span>
            <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
              {data.title}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={data.imageTeacher}
              alt="Teacher as Model"
              referrerPolicy="no-referrer"
              className="w-14 h-12 rounded-xl object-cover border border-stone-300 shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {data.points.map((pt: any, idx: number) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-50 border-2 border-stone-200 hover:border-orange-400 flex flex-col justify-between shadow-xs transition-colors"
            >
              <div>
                <span className={`text-orange-800 block mb-2 uppercase ${fontBadge}`}>
                  {pt.domain}
                </span>
                <p className={`text-stone-800 leading-relaxed font-medium ${fontCardDesc}`}>{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 font-medium ${fontCardDesc}`}>
          Teachers and parents serve as living models whose habits, speech, and problem-solving techniques are actively internalized by developing learners.
        </div>
      </div>
    );
  }

  // 36. BANDURA MAXIM (Slide 36)
  if (type === 'bandura_maxim_exact') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-center min-h-full flex-1 bg-white rounded-2xl ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className={`text-orange-800 uppercase tracking-wider mb-2 ${fontBadge}`}>
            {slide.sectionTitle}
          </span>

          <div className="p-8 sm:p-12 rounded-3xl border-4 border-orange-300 bg-orange-50/70 text-orange-950 shadow-md">
            <Quote className="w-12 h-12 opacity-25 text-orange-800 mb-3" />
            <blockquote className={fontQuote}>
              {data.quote}
            </blockquote>
            <div className="mt-6 pt-5 border-t border-orange-200">
              <span className={`text-orange-950 block ${fontCardHeader}`}>{data.author}</span>
              <span className={`text-orange-800 ${fontCardDesc}`}>{data.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className={`w-full ${isFullscreen ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-sm sm:max-w-md'} rounded-2xl overflow-hidden border-4 border-stone-200 shadow-xl bg-stone-50`}>
            <img
              src={data.imageBandura}
              alt="Albert Bandura"
              referrerPolicy="no-referrer"
              className="w-full aspect-3/4 max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-none object-cover object-top"
            />
            <div className={`p-3.5 bg-orange-800 text-white text-center font-bold font-heading-display ${fontCardHeader}`}>
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
      <div className={`flex flex-col justify-between min-h-full flex-1 bg-white rounded-2xl overflow-y-auto custom-scrollbar ${isFullscreen ? 'p-4 sm:p-6 md:p-8 lg:p-10' : 'p-3.5 sm:p-5 md:p-6 lg:p-8'}`}>
        <div>
          <span className={`text-red-800 uppercase tracking-wider ${fontBadge}`}>
            {slide.sectionTitle}
          </span>
          <h2 className={`text-stone-900 mt-1 ${fontTitle}`}>
            {data.title}
          </h2>
          <div className={`text-stone-500 mb-3 ${fontSub}`}>{data.subtitle}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-3">
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
                className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col justify-between shadow-xs ${cardThemes[idx]}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <img
                      src={th.image}
                      alt={th.name}
                      referrerPolicy="no-referrer"
                      className={`${isFullscreen ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-14 h-14 sm:w-16 sm:h-16'} rounded-xl object-cover object-top border border-stone-200 shadow-xs shrink-0`}
                    />
                    <div>
                      <h3 className={`text-stone-900 ${fontCardHeader}`}>{th.name}</h3>
                      <span className={`px-2.5 py-1 rounded-md text-white font-mono font-bold text-xs ${badgeThemes[idx]}`}>
                        {th.theory}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 bg-white rounded-xl border border-stone-200 shadow-xs">
                      <span className={`text-stone-500 block uppercase ${fontBadge}`}>Process</span>
                      <span className={`text-stone-900 font-medium ${fontCardDesc}`}>{th.process}</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-stone-200 shadow-xs">
                      <span className={`text-stone-500 block uppercase ${fontBadge}`}>Apparatus</span>
                      <span className={`text-stone-700 ${fontCardDesc}`}>{th.apparatus}</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-stone-200 shadow-xs">
                      <span className={`text-stone-500 block uppercase ${fontBadge}`}>Key Mechanism</span>
                      <span className={`text-stone-800 font-medium ${fontCardDesc}`}>{th.mechanism}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-800 font-medium ${fontCardDesc}`}>
          Together, these four behavioral pioneers trace the evolution of learning theory from basic physiological associations to deliberate operant consequences and cognitive observational modeling.
        </div>
      </div>
    );
  }

  // Default fallback if any type was missing
  return (
    <div className="p-8 text-center text-stone-600">
      <h2 className="text-2xl font-bold">{slide.cardTitle}</h2>
      <p className="mt-2 text-base">{slide.sectionTitle}</p>
    </div>
  );
};
