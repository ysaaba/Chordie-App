import React from 'react';
import { Volume2 } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  onChange: (volume: number) => void;
}

export const VolumeControl: React.FC<VolumeControlProps> = ({ volume, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Volume2 className="w-4 h-4 text-gray-600" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <span className="text-sm text-gray-600 w-8">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
};