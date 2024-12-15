import React from 'react';
import { Library, Music, Shuffle } from 'lucide-react';
import { PracticeMode } from '../../types/practice';

interface PracticeModeSelectorProps {
  currentMode: PracticeMode;
  onModeChange: (mode: PracticeMode) => void;
  shuffleEnabled: boolean;
  onShuffleToggle: () => void;
}

export const PracticeModeSelector: React.FC<PracticeModeSelectorProps> = ({
  currentMode,
  onModeChange,
  shuffleEnabled,
  onShuffleToggle,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Practice Mode</h3>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onModeChange('all')}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-colors ${
            currentMode === 'all'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <Shuffle className="w-5 h-5" />
          <span>All Chords</span>
        </button>
        
        <button
          onClick={() => onModeChange('sets')}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-colors ${
            currentMode === 'sets'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <Library className="w-5 h-5" />
          <span>Chord Sets</span>
        </button>
        
        <button
          onClick={() => onModeChange('scales')}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-colors ${
            currentMode === 'scales'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <Music className="w-5 h-5" />
          <span>Scales & Progressions</span>
        </button>
      </div>
      
      {currentMode !== 'all' && (
        <button
          onClick={onShuffleToggle}
          className={`mt-4 w-full px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors ${
            shuffleEnabled
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Shuffle className="w-4 h-4" />
          {shuffleEnabled ? 'Shuffle Enabled' : 'Enable Shuffle'}
        </button>
      )}
    </div>
  );
};