import React from 'react';
import { Library } from 'lucide-react';
import { chordSets } from '../data/chords';
import type { ChordSet } from '../types/chord';

interface ChordSelectorProps {
  selectedSetId: string | null;
  onSelectSet: (setId: string | null) => void;
}

export const ChordSelector: React.FC<ChordSelectorProps> = ({
  selectedSetId,
  onSelectSet,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Library size={24} />
        Chord Sets
      </h3>
      <div className="grid gap-4">
        {chordSets.map((set: ChordSet) => (
          <button
            key={set.name}
            onClick={() => onSelectSet(selectedSetId === set.name ? null : set.name)}
            className={`p-4 rounded-lg border-2 text-left transition-colors ${
              selectedSetId === set.name
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <h4 className="font-semibold">{set.name}</h4>
            <p className="text-sm text-gray-600">{set.description}</p>
            <div className="mt-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                set.difficulty === 'beginner'
                  ? 'bg-green-100 text-green-800'
                  : set.difficulty === 'intermediate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {set.difficulty}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};