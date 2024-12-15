import React from 'react';
import type { Scale } from '../../types/chord';

interface ScaleChordListProps {
  scale: Scale;
}

export const ScaleChordList: React.FC<ScaleChordListProps> = ({ scale }) => {
  return (
    <div className="mt-4 p-3 bg-gray-50 rounded-md">
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
  );
};