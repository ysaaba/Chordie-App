import React from 'react';
import type { Scale } from '../../types/chord';

interface ScaleProgressionSelectProps {
  scale: Scale;
  selectedProgression: string;
  onProgressionChange: (progression: string | null) => void;
}

export const ScaleProgressionSelect: React.FC<ScaleProgressionSelectProps> = ({
  scale,
  selectedProgression,
  onProgressionChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Progression
      </label>
      <select
        value={selectedProgression}
        onChange={(e) => onProgressionChange(e.target.value || null)}
        className="w-full p-2 border rounded-md bg-white text-gray-700 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
      >
        <option value="">All chords (no progression)</option>
        {scale.progressions.map((prog) => (
          <option key={prog.name} value={prog.name}>
            {prog.name} - {prog.description}
          </option>
        ))}
      </select>
    </div>
  );
};