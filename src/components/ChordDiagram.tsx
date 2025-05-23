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
  size?: 'normal' | 'small';
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({ chord, size: sizeProp = 'normal' }) => {
  if (!chord) {
    return <EmptyChord />;
  }

  const baseSize = sizeProp === 'small' ? 160 : 200; // 80% of normal (200 * 0.80 = 160)
  const padding = sizeProp === 'small' ? 32 : 40;  // 80% of normal (40 * 0.80 = 32)
  const stringSpacing = baseSize / 5;
  const fretSpacing = baseSize / 5;
  const titleFontSize = sizeProp === 'small' ? 'text-lg' : 'text-2xl';
  const svgMarginBottom = sizeProp === 'small' ? 'mb-2' : 'mb-4';


  const startFret = getStartingFret(chord.positions);
  const adjustedPositions = getAdjustedPositions(chord.positions);

  return (
    <div className="flex flex-col items-center">
      <svg
        width={baseSize + padding * 2}
        height={baseSize + padding * 2 + (sizeProp === 'small' ? 20 : 30)} // Adjust height for smaller title
        viewBox={`${-padding} ${-padding} ${baseSize + padding * 2} ${baseSize + padding * 2 + (sizeProp === 'small' ? 20 : 30)}`}
        className={svgMarginBottom}
      >
        <ChordGrid size={baseSize} strokeWidth={1} startFret={startFret} />
        <StringMarkers
          positions={chord.positions}
          size={baseSize}
          stringSpacing={stringSpacing}
        />
        <FingerDots
          positions={adjustedPositions}
          fingers={chord.fingers}
          size={baseSize}
          stringSpacing={stringSpacing}
          fretSpacing={fretSpacing}
        />
        <StringLabels size={baseSize} stringSpacing={stringSpacing} />
      </svg>
      <h3 className={`${titleFontSize} font-normal tracking-wide text-gray-800`}>{chord.name}</h3>
    </div>
  );
};