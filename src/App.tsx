/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SLIDES_DATA } from './data/presentationData';
import { SlideViewer } from './components/SlideViewer';
import { DossierView } from './components/DossierView';
import { TopBar } from './components/TopBar';
import { TheoristId } from './types/presentation';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'deck' | 'dossier'>('deck');

  const currentSlide = SLIDES_DATA[currentSlideIndex] || SLIDES_DATA[0];

  // Map theorists to starting slide indexes
  const theoristFirstSlideMap: Record<TheoristId, number> = {
    intro: 0,
    thorndike: 1, // Slide 2
    skinner: 9, // Slide 10
    pavlov: 19, // Slide 20
    bandura: 29, // Slide 30
    synthesis: 36, // Slide 37
  };

  const handleSelectTheorist = (theorist: TheoristId) => {
    if (viewMode === 'deck') {
      const targetIdx = theoristFirstSlideMap[theorist] ?? 0;
      setCurrentSlideIndex(targetIdx);
    } else {
      // In dossier mode, scroll to the respective section
      const chapterId =
        theorist === 'intro'
          ? 'top'
          : theorist === 'synthesis'
          ? 'chapter-synthesis'
          : `chapter-${theorist}`;

      if (chapterId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(chapterId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleSwitchToDeck = (slideNumber?: number) => {
    if (slideNumber) {
      setCurrentSlideIndex(Math.max(0, Math.min(slideNumber - 1, SLIDES_DATA.length - 1)));
    }
    setViewMode('deck');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchToDossier = () => {
    setViewMode('dossier');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-stone-900 flex flex-col font-sans">
      {/* Top Bar in warm literary theme */}
      <TopBar
        currentTheorist={currentSlide.theoristId}
        viewMode={viewMode}
        onSelectTheorist={handleSelectTheorist}
        onToggleViewMode={() => {
          if (viewMode === 'deck') {
            handleSwitchToDossier();
          } else {
            handleSwitchToDeck();
          }
        }}
      />

      {/* Main Mode Viewport */}
      <main className="flex-1 flex flex-col">
        {viewMode === 'deck' ? (
          <SlideViewer
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            onSlideChange={setCurrentSlideIndex}
            onSwitchToDossier={handleSwitchToDossier}
          />
        ) : (
          <DossierView onSwitchToDeck={handleSwitchToDeck} />
        )}
      </main>
    </div>
  );
}
