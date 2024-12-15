import { Scale } from '../../types/chord';

const romanNumeralToIndex: Record<string, number> = {
  'i': 0, 'I': 0,
  'ii': 1, 'II': 1,
  'iii': 2, 'III': 2,
  'iv': 3, 'IV': 3,
  'v': 4, 'V': 4,
  'vi': 5, 'VI': 5,
  'vii': 6, 'VII': 6
};

export const resolveProgressionPattern = (scale: Scale, pattern: string[]): string[] => {
  return pattern.map(numeral => {
    const index = romanNumeralToIndex[numeral];
    return scale.chords[index];
  });
};