import React from 'react';

interface FingerDotsProps {
  positions: number[];
  fingers: number[];
  size: number;
  stringSpacing: number;
  fretSpacing: number;
}

export const FingerDots: React.FC<FingerDotsProps> = ({
  positions,
  fingers,
  size,
  stringSpacing,
  fretSpacing,
}) => {
  return (
    <>
      {positions.map((pos, i) => {
        if (pos > 0) {
          return (
            <g key={`finger-${i}`}>
              <circle
                cx={i * stringSpacing}
                cy={(pos - 0.5) * fretSpacing}
                r="12"
                fill="#333333"
              />
              <text
                x={i * stringSpacing}
                y={(pos - 0.5) * fretSpacing + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="14"
                fontFamily="sans-serif"
              >
                {fingers[i]}
              </text>
            </g>
          );
        }
        return null;
      })}
    </>
  );
};