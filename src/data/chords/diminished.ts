import { ChordDefinition } from '../../types/chord';

export const diminishedChords: Record<string, ChordDefinition> = {
  'Cdim7': {
    name: 'C Diminished 7',
    positions: [-1, 3, 4, 2, 4, 2],
    fingers: [0, 2, 4, 1, 4, 1],
    difficulty: 'advanced'
  },
  'Ddim7': {
    name: 'D Diminished 7',
    positions: [-1, -1, 0, 1, 0, 1],
    fingers: [0, 0, 0, 1, 0, 2],
    difficulty: 'advanced'
  },
  'Edim7': {
    name: 'E Diminished 7',
    positions: [0, 1, 2, 0, 2, 0],
    fingers: [0, 1, 2, 0, 3, 0],
    difficulty: 'advanced'
  },
  'Bdim7': {
    name: 'B Diminished 7',
    positions: [-1, 2, 3, 1, 3, 1],
    fingers: [0, 2, 3, 1, 4, 1],
    difficulty: 'advanced'
  }
};