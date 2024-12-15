import React from 'react';
import { Music } from 'lucide-react';
import { Scale } from '../types/chord';
import { scales } from '../data/scales';
import { ScaleChordList } from './scale/ScaleChordList';
import { ScaleProgressionSelect } from './scale/ScaleProgressionSelect';

interface ScaleSelectorProps {
  selectedScale: string | undefined;
  selectedProgression: string | undefined;
  onScaleChange: (scale: string | null) => void;
  onProgressionChange: (progression: string | null) => void;
}

export const ScaleSelector: React.FC<ScaleSelectorProps> = ({
  selectedScale,
  selectedProgression,
  onScaleChange,
  onProgressionChange,
}) => {
  const currentScale = scales.find(s => s.name === selectedScale);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Music size={24} />
        Scale & Progression
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Scale
          </label>
          <select
            value={selectedScale || ''}
            onChange={(e) => onScaleChange(e.target.value || null)}
            className="w-full p-2 border rounded-md bg-white text-gray-700 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
          >
            <option value="">Select a scale</option>
            {scales.map((scale: Scale) => (
              <option key={scale.name} value={scale.name}>
                {scale.name}
              </option>
            ))}
          </select>
        </div>

        {currentScale && (
          <ScaleProgressionSelect
            scale={currentScale}
            selectedProgression={selectedProgression || ''}
            onProgressionChange={onProgressionChange}
          />
        )}

        {currentScale && (
          <ScaleChordList scale={currentScale} />
        )}
      </div>
    </div>
  );
};