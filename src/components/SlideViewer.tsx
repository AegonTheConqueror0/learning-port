import React, { useState, useEffect, useRef } from 'react';
import { SlideCard } from '../types/presentation';
import { SlideRenderer } from './slides/SlideRenderer';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  Play,
  Pause,
  BookOpen,
  Type,
} from 'lucide-react';

interface SlideViewerProps {
  slides: SlideCard[];
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
  onSwitchToDossier: () => void;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentSlideIndex,
  onSlideChange,
  onSwitchToDossier,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNativeRequestedRef = useRef<boolean>(false);
  const [showSlideGrid, setShowSlideGrid] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [textScale, setTextScale] = useState<'normal' | 'large' | 'xl'>('large');

  const currentSlide = slides[currentSlideIndex] || slides[0];
  const totalSlides = slides.length;

  // Listen to browser fullscreen changes (F11, Escape, etc.)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isNativeRequestedRef.current) {
        setIsFullscreen(false);
        isNativeRequestedRef.current = false;
      } else if (document.fullscreenElement) {
        setIsFullscreen(true);
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation & presentation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        if (currentSlideIndex < totalSlides - 1) {
          onSlideChange(currentSlideIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          onSlideChange(currentSlideIndex - 1);
        }
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          toggleFullscreen();
        }
        setShowSlideGrid(false);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, totalSlides, onSlideChange, isFullscreen]);

  // Autoplay slideshow timer
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        onSlideChange(
          currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0
        );
      }, 7000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentSlideIndex, totalSlides, onSlideChange]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      if (!document.fullscreenElement) {
        if (containerRef.current) {
          isNativeRequestedRef.current = true;
          containerRef.current.requestFullscreen().catch(() => {
            // If iframe sandbox restricts native fullscreen, software presentation overlay takes over smoothly
            isNativeRequestedRef.current = false;
          });
        }
      }
    } else {
      setIsFullscreen(false);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      isNativeRequestedRef.current = false;
    }
  };

  const cycleTextScale = () => {
    setTextScale((prev) => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xl';
      return 'normal';
    });
  };

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-300 select-none ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-[#f9f7f2] w-screen h-screen max-w-none p-2 sm:p-4 md:p-6 flex flex-col justify-between'
          : 'flex flex-col h-[calc(100dvh-4.25rem)] w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-4 justify-between'
      }`}
    >
      {/* Presentation Top Utility Bar */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 pb-2.5 sm:pb-3 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="text-xs sm:text-sm font-mono font-bold text-red-950 bg-red-100/90 px-2.5 sm:px-3 py-1 rounded-lg border border-red-300 shadow-xs shrink-0">
            Card {String(currentSlideIndex + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>
          <div className="hidden md:flex items-center gap-2 font-semibold text-stone-700 min-w-0">
            <span className="font-heading-display text-stone-900 font-bold truncate text-xs sm:text-sm">
              {currentSlide.cardTitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Text Size Scale Toggle */}
          <button
            onClick={cycleTextScale}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-red-900 bg-white border border-stone-200 hover:border-red-400 rounded-lg transition-colors shadow-xs cursor-pointer"
            title="Adjust text size scale (Standard / Large / Maximum)"
          >
            <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-800" />
            <span className="hidden sm:inline font-heading-display">
              Text: {textScale === 'normal' ? 'Norm' : textScale === 'large' ? 'Lg' : 'XL'}
            </span>
          </button>

          {/* Slide Grid Navigator Button */}
          <button
            onClick={() => setShowSlideGrid(true)}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-red-900 bg-white border border-stone-200 hover:border-red-400 rounded-lg transition-colors shadow-xs cursor-pointer"
            title="All Cards Grid (Overview)"
          >
            <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline font-heading-display">Index</span>
          </button>

          {/* Autoplay Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-stone-700 hover:text-red-900 bg-white border border-stone-200 rounded-lg hover:border-red-400 transition-colors shadow-xs cursor-pointer"
            title={isPlaying ? 'Pause Slideshow' : 'Start Auto Slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700" />
            ) : (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-800" />
            )}
            <span className="hidden sm:inline font-heading-display">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg border transition-all shadow-xs cursor-pointer font-heading-display ${
              isFullscreen
                ? 'bg-red-800 text-white border-red-900 hover:bg-red-900 shadow-md ring-2 ring-red-400'
                : 'text-stone-800 hover:text-red-900 bg-white border-stone-300 hover:border-red-500'
            }`}
            title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enlarge Card to Fullscreen (F)'}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Exit</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-800" />
                <span className="font-bold hidden sm:inline">Fullscreen</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Presentation Card (Enlarges to fill available viewport in fullscreen) */}
      <div
        className={`relative flex-1 bg-white border-2 border-stone-200 shadow-2xl overflow-hidden flex flex-col justify-between w-full ${
          isFullscreen ? 'rounded-3xl border-stone-300' : 'rounded-2xl'
        }`}
      >
        {/* Top Card Micro-Progress Bar with Warm Literary Gradient */}
        <div className="h-2 w-full bg-stone-100 shrink-0">
          <div
            className="h-full bg-gradient-to-r from-red-700 via-amber-600 to-emerald-600 transition-all duration-300"
            style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Card Content Stage */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          <SlideRenderer
            slide={currentSlide}
            onNext={() => {
              if (currentSlideIndex < totalSlides - 1) onSlideChange(currentSlideIndex + 1);
            }}
            onJumpToSlide={onSlideChange}
            textScale={textScale}
            isFullscreen={isFullscreen}
          />
        </div>
      </div>

      {/* Bottom Presentation Navigation Footer */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 pt-2 sm:pt-3 shrink-0">
        {/* Previous Button */}
        <button
          onClick={() => {
            if (currentSlideIndex > 0) onSlideChange(currentSlideIndex - 1);
          }}
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-1 px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-stone-50 text-stone-700 hover:text-red-900 disabled:opacity-40 disabled:cursor-not-allowed border border-stone-300 transition-all active:scale-95 shadow-xs cursor-pointer font-heading-display shrink-0"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Previous</span>
        </button>

        {/* Center Progress Dots */}
        <div className="flex items-center gap-2 min-w-0 overflow-hidden">
          <div className="hidden sm:flex items-center gap-1 max-w-xs md:max-w-md overflow-x-auto py-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSlideChange(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer shrink-0 ${
                  idx === currentSlideIndex
                    ? 'w-6 sm:w-8 bg-red-700 shadow-xs'
                    : 'w-1.5 sm:w-2 bg-stone-300 hover:bg-red-400'
                }`}
                title={`Jump to Card ${idx + 1}`}
              />
            ))}
          </div>

          {currentSlide.scrollHighlight && (
            <button
              onClick={onSwitchToDossier}
              className="hidden lg:flex items-center gap-1.5 text-xs sm:text-sm text-red-800 font-bold hover:underline cursor-pointer font-heading-display ml-2 whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Dossier</span>
            </button>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => {
            if (currentSlideIndex < totalSlides - 1) onSlideChange(currentSlideIndex + 1);
          }}
          disabled={currentSlideIndex === totalSlides - 1}
          className="flex items-center gap-1 px-4 sm:px-8 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-red-800 hover:bg-red-900 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md cursor-pointer font-heading-display shrink-0"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide Index Modal */}
      {showSlideGrid && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border-2 border-stone-200 rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#fdfcf9]">
              <div className="flex items-center gap-2">
                <Grid className="w-4 h-4 text-red-800" />
                <h3 className="font-bold text-stone-900 text-sm sm:text-base font-heading-display">
                  Presentation Cards Index ({totalSlides} Cards)
                </h3>
              </div>
              <button
                onClick={() => setShowSlideGrid(false)}
                className="text-xs sm:text-sm font-bold text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-lg bg-stone-200 cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-stone-50/50">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSlideChange(idx);
                    setShowSlideGrid(false);
                  }}
                  className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'bg-red-50 border-red-700 shadow-md'
                      : 'bg-white border-stone-200 hover:border-red-400 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                    <span className="font-bold text-red-800">Card {String(idx + 1).padStart(2, '0')}</span>
                    <span className="uppercase font-semibold">{s.theoristId}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-stone-900 mb-0.5 line-clamp-1 font-heading-display">
                    {s.cardTitle}
                  </div>
                  <div className="text-xs text-stone-600 line-clamp-1">{s.sectionTitle}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
