import React from 'react';
import { Music } from 'lucide-react';

export const EmptyChord: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Music className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-xl font-normal text-gray-500">
        Select a chord to begin
      </h3>
    </div>
  );
};