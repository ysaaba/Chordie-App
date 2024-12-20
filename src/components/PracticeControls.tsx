import React, { useEffect } from 'react';
import { Timer, Play, Pause, Shuffle } from 'lucide-react';
import { PracticeSettings } from '../types/chord';
import { BarsPerChordSelect } from './practice/BarsPerChordSelect';

interface PracticeControlsProps {
  settings: PracticeSettings;
  onSettingsChange: (settings: PracticeSettings) => void;
  isPlaying: boolean;
  onPlayPause: () => void;
  onShuffleAll: () => void;
  isShuffleMode: boolean;
  totalChords: number;
  currentModeChords: number;
  mode: 'all' | 'sets' | 'scales';
}

export const PracticeControls: React.FC<PracticeControlsProps> = ({
  settings,
  onSettingsChange,
  isPlaying,
  onPlayPause,
  onShuffleAll,
  isShuffleMode,
  totalChords,
  currentModeChords,
  mode,
}) => {
  useEffect(() => {
    if (mode !== 'all' && settings.numberOfChords > currentModeChords) {
      onSettingsChange({
        ...settings,
        numberOfChords: currentModeChords
      });
    }
  }, [mode, currentModeChords]);

  const maxChords = mode === 'all' ? totalChords : currentModeChords;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Practice Settings</h3>
        <div className="flex gap-2">
          <button
            onClick={onShuffleAll}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
              isShuffleMode
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={isShuffleMode ? 'Using all chords' : 'Use all available chords'}
          >
            <Shuffle size={20} />
            All Chords
          </button>
          <button
            onClick={onPlayPause}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            {isPlaying ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Timer className="inline-block mr-2" size={16} />
            Tempo (BPM)
          </label>
          <input
            type="range"
            min="30"
            max="300"
            value={settings.tempo}
            onChange={(e) =>
              onSettingsChange({ ...settings, tempo: parseInt(e.target.value) })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="text-right text-sm text-gray-600">{settings.tempo} BPM</div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Chords
          </label>
          <input
            type="range"
            min="1"
            max={maxChords}
            value={Math.min(settings.numberOfChords, maxChords)}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                numberOfChords: parseInt(e.target.value),
              })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>1 chord</span>
            <span>
              {settings.numberOfChords === maxChords 
                ? mode === 'all' ? 'All chords' : `All ${maxChords} chords`
                : `${settings.numberOfChords} chords`}
            </span>
          </div>
        </div>

        <BarsPerChordSelect
          value={settings.barsPerChord}
          onChange={(value) => onSettingsChange({ ...settings, barsPerChord: value })}
        />
      </div>
    </div>
  );
};