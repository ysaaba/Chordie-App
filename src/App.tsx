import React from 'react';
import { useMetronome } from './hooks/useMetronome';
import { useChordProgression } from './hooks/useChordProgression';
import { useChordSelection } from './hooks/useChordSelection';
import { usePracticeMode } from './hooks/usePracticeMode';
import { ChordDiagram } from './components/ChordDiagram';
import { Metronome } from './components/Metronome';
import { ChordNavigation } from './components/ChordNavigation';
import { PracticeControls } from './components/PracticeControls';
import { ChordSelector } from './components/ChordSelector';
import { ScaleSelector } from './components/ScaleSelector';
import { PracticeModeSelector } from './components/practice/PracticeModeSelector';
import type { PracticeSettings } from './types/chord';
import { chordCategories, chordSets } from './data/chords';
import { scales } from './data/scales';

function App() {
  const [settings, setSettings] = React.useState<PracticeSettings>({
    tempo: 60,
    numberOfChords: 2,
    scale: 'C Major',
    progression: '',
    barsPerChord: 1
  });

  const [metronomeVolume, setMetronomeVolume] = React.useState(0.7);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const {
    mode: practiceMode,
    shuffleEnabled,
    setMode: setPracticeMode,
    toggleShuffle,
  } = usePracticeMode();

  const {
    selection,
    availableChords,
    selectChordSet,
    selectScale,
    selectProgression,
  } = useChordSelection();

  const {
    currentChord,
    nextChord,
    handleNextChord,
    handleManualNext,
    handleManualPrevious,
    currentBarCount,
  } = useChordProgression({
    chords: availableChords,
    settings,
    shuffle: shuffleEnabled,
    mode: practiceMode,
    hasProgression: !!selection.selectedProgression,
  });

  const { currentBeat } = useMetronome({
    tempo: settings.tempo,
    volume: metronomeVolume,
    isPlaying,
    beatsPerMeasure: 4,
    onMeasureComplete: handleNextChord,
  });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const totalChords = Object.values(chordCategories).flatMap(category => Object.values(category)).length;

  // Calculate current mode's total chords
  const getCurrentModeChords = () => {
    if (practiceMode === 'scales' && selection.selectedScale) {
      const scale = scales.find(s => s.name === selection.selectedScale);
      return scale?.chords.length || 0;
    }
    if (practiceMode === 'sets' && selection.selectedSetId) {
      const set = chordSets.find(s => s.name === selection.selectedSetId);
      return set?.chords.length || 0;
    }
    return totalChords;
  };

  const currentModeChords = getCurrentModeChords();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Chordie</h1>
          <p className="text-sm text-gray-500">Guitar Practice Assistant</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* 1st on Mobile: Chord Diagram Block */}
          {/* Desktop: Col 1-8, Row 1 */}
          <div className="lg:col-span-8 lg:row-start-1 bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              {/* Container for current and next chord diagrams */}
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">

                {/* Current Chord Diagram */}
                <div className="flex flex-col items-center">
                  <ChordDiagram chord={currentChord} />
                </div>

                {/* Next Chord Preview (conditional) */}
                {nextChord && (
                  <div className="border border-gray-300 p-2 rounded-lg flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-600 mb-1 self-start">Next:</p>
                    <ChordDiagram chord={nextChord} size="small" />
                  </div>
                )}
              </div>
              {isPlaying ? (
                <>
                  <Metronome
                    currentBeat={currentBeat}
                    beatsPerMeasure={4}
                    volume={metronomeVolume}
                    onVolumeChange={setMetronomeVolume}
                  />
                  <div className="mt-4 text-center">
                    <p className="text-gray-600">
                      Bar {currentBarCount + 1} of {settings.barsPerChord}
                    </p>
                  </div>
                </>
              ) : (
                <ChordNavigation
                  onPrevious={handleManualPrevious}
                  onNext={handleManualNext}
                  isPlaying={isPlaying}
                />
              )}
          </div>

          {/* 2nd on Mobile: Practice Controls */}
          {/* Desktop: Col 9-12, Row 2 */}
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-2">
            <PracticeControls
              settings={settings}
              onSettingsChange={setSettings}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onShuffleAll={() => setPracticeMode('all')}
              isShuffleMode={practiceMode === 'all'}
              totalChords={totalChords}
              currentModeChords={currentModeChords}
              mode={practiceMode}
            />
          </div>

          {/* 3rd on Mobile: Practice Mode Selector */}
          {/* Desktop: Col 9-12, Row 1 */}
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-1">
            <PracticeModeSelector
              currentMode={practiceMode}
              onModeChange={setPracticeMode}
              shuffleEnabled={shuffleEnabled}
              onShuffleToggle={toggleShuffle}
            />
          </div>

          {/* 4th on Mobile: Chord/Scale Selectors */}
          {/* Desktop: Col 1-8, Row 2 */}
          <div className="lg:col-span-8 lg:row-start-2 space-y-8">
            {practiceMode === 'sets' && (
              <ChordSelector
                selectedSetId={selection.selectedSetId}
                onSelectSet={selectChordSet}
              />
            )}
            {practiceMode === 'scales' && (
              <ScaleSelector
                selectedScale={selection.selectedScale}
                selectedProgression={selection.selectedProgression}
                onScaleChange={selectScale}
                onProgressionChange={selectProgression}
              />
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;