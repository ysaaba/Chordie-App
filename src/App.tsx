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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Guitar Practice Assistant</h1>
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
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;