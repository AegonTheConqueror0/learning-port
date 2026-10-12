import React from 'react';
import { TheoristId } from '../types/presentation';
import { Presentation, BookOpen, GraduationCap } from 'lucide-react';

interface TopBarProps {
  currentTheorist: TheoristId;
  viewMode: 'deck' | 'dossier';
  onSelectTheorist: (theorist: TheoristId) => void;
  onToggleViewMode: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentTheorist,
  viewMode,
  onSelectTheorist,
  onToggleViewMode,
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-stone-200/90 bg-[#fdfcf9]/95 sticky top-0 z-40 backdrop-blur-md shadow-xs">
      {/* Zone 1: Single text element wordmark in warm literary style */}
      <button
        onClick={() => onSelectTheorist('intro')}
        className="text-base sm:text-lg font-black tracking-tight text-red-900 hover:text-red-700 transition-colors whitespace-nowrap shrink-0 text-left font-serif-title"
      >
        Behavioral Learning Theory
      </button>

      {/* Zone 2: 5 clean single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-semibold text-stone-600">
        <button
          onClick={() => onSelectTheorist('thorndike')}
          className={`hover:text-red-800 transition-colors whitespace-nowrap shrink-0 py-1 ${
            currentTheorist === 'thorndike'
              ? 'text-red-800 font-bold border-b-2 border-red-700'
              : ''
          }`}
        >
          Thorndike
        </button>
        <button
          onClick={() => onSelectTheorist('skinner')}
          className={`hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 py-1 ${
            currentTheorist === 'skinner'
              ? 'text-amber-800 font-bold border-b-2 border-amber-700'
              : ''
          }`}
        >
          Skinner
        </button>
        <button
          onClick={() => onSelectTheorist('pavlov')}
          className={`hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1 ${
            currentTheorist === 'pavlov'
              ? 'text-emerald-800 font-bold border-b-2 border-emerald-700'
              : ''
          }`}
        >
          Pavlov
        </button>
        <button
          onClick={() => onSelectTheorist('bandura')}
          className={`hover:text-orange-800 transition-colors whitespace-nowrap shrink-0 py-1 ${
            currentTheorist === 'bandura'
              ? 'text-orange-800 font-bold border-b-2 border-orange-700'
              : ''
          }`}
        >
          Bandura
        </button>
        <button
          onClick={() => onSelectTheorist('synthesis')}
          className={`hover:text-red-800 transition-colors whitespace-nowrap shrink-0 py-1 ${
            currentTheorist === 'synthesis'
              ? 'text-red-800 font-bold border-b-2 border-red-700'
              : ''
          }`}
        >
          Synthesis
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onToggleViewMode}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-red-800 text-white hover:bg-red-900 transition-all whitespace-nowrap shrink-0 shadow-sm active:scale-95 cursor-pointer font-heading-display"
        >
          {viewMode === 'deck' ? (
            <>
              <BookOpen className="w-3.5 h-3.5" />
              <span>Portfolio Dossier</span>
            </>
          ) : (
            <>
              <Presentation className="w-3.5 h-3.5" />
              <span>Card Presentation</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
