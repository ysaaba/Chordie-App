import React from 'react';
import { Music } from 'lucide-react';
import { BARS_PER_CHORD_OPTIONS } from '../../utils/practice/options';

interface BarsPerChordSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const BarsPerChordSelect: React.FC<BarsPerChordSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Music className="inline-block mr-2" size={16} />
        Bars per Chord
      </label>
      <select
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full p-2 border rounded-md bg-white text-gray-700 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
      >
        {BARS_PER_CHORD_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="mt-1 text-sm text-gray-500">
        How long to practice each chord before switching
      </p>
    </div>
  );
};