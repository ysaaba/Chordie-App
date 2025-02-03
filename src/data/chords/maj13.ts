import { ChordDefinition } from '../../types/chord';

export const maj13Chords: Record<string, ChordDefinition> = {
  'Cmaj13': {
    name: 'C Major 13',
    positions: [-1, 3, 2, 2, 0, 0],
    fingers: [0, 3, 1, 2, 0, 0],
    difficulty: 'advanced'
  },
  'Dmaj13': {
    name: 'D Major 13',
    positions: [-1, 4, 4, 6, 6, 4],
    fingers: [0, 1, 1, 2, 3, 1],
    difficulty: 'advanced'
  },
  'Emaj13': {
    name: 'E Major 13',
    positions: [0, 2, 1, 1, 2, 0],
    fingers: [0, 3, 1, 1, 4, 0],
    difficulty: 'advanced'
  },
  'Gmaj13': {
    name: 'G Major 13',
    positions: [3, -1, 3, 2, 0, 2],
    fingers: [3, 0, 4, 2, 0, 1],
    difficulty: 'advanced'
  }
};
