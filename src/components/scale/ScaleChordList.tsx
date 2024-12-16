import React from 'react';
import type { Scale } from '../../types/chord';

interface ScaleChordListProps {
  scale: Scale;
  selectedProgression?: string;
}

type RomanNumeral = 'i' | 'I' | 'ii' | 'II' | 'iii' | 'III' | 'iv' | 'IV' | 'v' | 'V' | 'vi' | 'VI' | 'vii' | 'VII';
const romanNumeralToIndex: Record<RomanNumeral, number> = {
  'i': 0, 'I': 0,
  'ii': 1, 'II': 1,
  'iii': 2, 'III': 2,
  'iv': 3, 'IV': 3,
  'v': 4, 'V': 4,
  'vi': 5, 'VI': 5,
  'vii': 6, 'VII': 6
};

export const ScaleChordList: React.FC<ScaleChordListProps> = ({ scale, selectedProgression }) => {
  const selectedPattern = scale.progressions.find(p => p.name === selectedProgression);
  
  // Get the progression chords using the pattern directly
  const progressionChords = selectedPattern ? 
    selectedPattern.pattern.map(numeral => {
      const index = romanNumeralToIndex[numeral as RomanNumeral];
      return typeof index === 'number' ? scale.chords[index] : null;
    }).filter((chord): chord is string => chord !== null) : 
    [];

  return (
    <div className="mt-4 space-y-4">
      {/* Available Chords */}
      <div className="p-3 bg-gray-50 rounded-md">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Available Chords:</h4>
        <div className="flex flex-wrap gap-2">
          {scale.chords.map((chord) => (
            <span
              key={chord}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm"
            >
              {chord}
            </span>
          ))}
        </div>
      </div>

      {/* Progression Preview */}
      {selectedProgression && selectedPattern && progressionChords.length > 0 && (
        <div className="p-3 bg-gray-50 rounded-md">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Progression Preview:</h4>
          <div className="flex flex-wrap gap-2">
            {progressionChords.map((chord, index) => (
              <span
                key={`${chord}-${index}`}
                className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-sm"
                title={selectedPattern.pattern[index]}
              >
                {chord}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};