import React from 'react';

interface ChordGridProps {
  size: number;
  strokeWidth?: number;
  startFret: number;
}

export const ChordGrid: React.FC<ChordGridProps> = ({ size, strokeWidth = 1, startFret }) => {
  const numFrets = 5;
  const numStrings = 6;
  const fretSpacing = size / numFrets;
  const stringSpacing = size / (numStrings - 1);

  return (
    <>
      {/* Horizontal fret lines */}
      {Array.from({ length: numFrets + 1 }).map((_, i) => (
        <line
          key={`fret-${i}`}
          x1="0"
          y1={i * fretSpacing}
          x2={size}
          y2={i * fretSpacing}
          stroke="#333333"
          strokeWidth={i === 0 ? strokeWidth * 2 : strokeWidth}
        />
      ))}

      {/* Vertical string lines */}
      {Array.from({ length: numStrings }).map((_, i) => (
        <line
          key={`string-${i}`}
          x1={i * stringSpacing}
          y1="0"
          x2={i * stringSpacing}
          y2={size}
          stroke="#333333"
          strokeWidth={strokeWidth}
        />
      ))}

      {/* Starting fret number - only show for frets >= 4 */}
      {startFret >= 4 && (
        <text
          x={-25}
          y={fretSpacing / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333333"
          fontSize="14"
          fontFamily="sans-serif"
        >
          {startFret}
        </text>
      )}
    </>
  );
};