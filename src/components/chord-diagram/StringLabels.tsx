import React from 'react';

interface StringLabelsProps {
  size: number;
  stringSpacing: number;
}

export const StringLabels: React.FC<StringLabelsProps> = ({ size, stringSpacing }) => {
  const labels = ['E', 'A', 'D', 'G', 'B', 'E'];

  return (
    <>
      {labels.map((label, i) => (
        <text
          key={`label-${i}`}
          x={i * stringSpacing}
          y={size + 25}
          textAnchor="middle"
          fill="#333333"
          fontSize="16"
          fontFamily="sans-serif"
        >
          {label}
        </text>
      ))}
    </>
  );
};