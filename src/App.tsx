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
          {/* Main Content - Center */}
          <div className="lg:col-span-8 space-y-8">
            {/* Chord Diagram Block */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <ChordDiagram chord={currentChord} />
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

            {/* Chord Sets and Scale Selection */}
            <div className="space-y-8">
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

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Practice Mode Selector */}
            <PracticeModeSelector
              currentMode={practiceMode}
              onModeChange={setPracticeMode}
              shuffleEnabled={shuffleEnabled}
              onShuffleToggle={toggleShuffle}
            />
            
            {/* Practice Controls */}
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
        </div>
      </main>
    </div>
  );
}

export default App;