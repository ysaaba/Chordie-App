import React from 'react';
import { VolumeControl } from './metronome/VolumeControl';

interface MetronomeProps {
  currentBeat: number;
  beatsPerMeasure: number;
  volume: number;
  onVolumeChange: (volume: number) => void;
}

export const Metronome: React.FC<MetronomeProps> = ({
  currentBeat,
  beatsPerMeasure,
  volume,
  onVolumeChange,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="flex gap-3 justify-center items-center">
        {Array.from({ length: beatsPerMeasure }).map((_, index) => (
          <div
            key={index}
            className={`relative ${
              index === 0 ? 'w-5 h-5' : 'w-4 h-4'
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-150 ${
                index === currentBeat
                  ? index === 0
                    ? 'bg-purple-600'
                    : 'bg-blue-500'
                  : 'bg-gray-200'
              } ${
                index === 0 
                  ? 'border-2 border-purple-300' 
                  : ''
              } transform ${
                index === currentBeat ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>
      <VolumeControl volume={volume} onChange={onVolumeChange} />
    </div>
  );
};