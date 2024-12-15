import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ChordNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isPlaying: boolean;
}

export const ChordNavigation: React.FC<ChordNavigationProps> = ({
  onPrevious,
  onNext,
  isPlaying,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={onPrevious}
        disabled={isPlaying}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Previous chord"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={onNext}
        disabled={isPlaying}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Next chord"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};