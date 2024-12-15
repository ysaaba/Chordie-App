import React from 'react';
import { ChordDefinition } from '../types/chord';
import { ChordGrid } from './chord-diagram/ChordGrid';
import { StringMarkers } from './chord-diagram/StringMarkers';
import { FingerDots } from './chord-diagram/FingerDots';
import { StringLabels } from './chord-diagram/StringLabels';
import { getStartingFret, getAdjustedPositions } from '../utils/chord/positions';
import { EmptyChord } from './chord-diagram/EmptyChord';

interface ChordDiagramProps {
  chord: ChordDefinition | null;
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({ chord }) => {
  if (!chord) {
    return <EmptyChord />;
  }

  const size = 200;
  const padding = 40;
  const stringSpacing = size / 5;
  const fretSpacing = size / 5;

  const startFret = getStartingFret(chord.positions);
  const adjustedPositions = getAdjustedPositions(chord.positions);

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size + padding * 2}
        height={size + padding * 2 + 30}
        viewBox={`${-padding} ${-padding} ${size + padding * 2} ${size + padding * 2 + 30}`}
        className="mb-4"
      >
        <ChordGrid size={size} strokeWidth={1} startFret={startFret} />
        <StringMarkers
          positions={chord.positions}
          size={size}
          stringSpacing={stringSpacing}
        />
        <FingerDots
          positions={adjustedPositions}
          fingers={chord.fingers}
          size={size}
          stringSpacing={stringSpacing}
          fretSpacing={fretSpacing}
        />
        <StringLabels size={size} stringSpacing={stringSpacing} />
      </svg>
      <h3 className="text-2xl font-normal tracking-wide text-gray-800">{chord.name}</h3>
    </div>
  );
};