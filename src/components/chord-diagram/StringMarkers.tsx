import React from 'react';

interface StringMarkersProps {
  positions: number[];
  size: number;
  stringSpacing: number;
}

export const StringMarkers: React.FC<StringMarkersProps> = ({ positions, size, stringSpacing }) => {
  return (
    <>
      {positions.map((pos, i) => {
        if (pos === -1) {
          return (
            <text
              key={`marker-${i}`}
              x={i * stringSpacing}
              y="-10"
              textAnchor="middle"
              fontSize="24"
              fill="#333333"
            >
              ×
            </text>
          );
        }
        if (pos === 0) {
          return (
            <circle
              key={`marker-${i}`}
              cx={i * stringSpacing}
              cy="-10"
              r="8"
              stroke="#333333"
              strokeWidth="1"
              fill="none"
            />
          );
        }
        return null;
      })}
    </>
  );
};