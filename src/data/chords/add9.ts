import { ChordDefinition } from '../../types/chord';

export const add9Chords: Record<string, ChordDefinition> = {
  'Cadd9': {
    name: 'C Add 9',
    positions: [-1, 3, 2, 0, 3, 0],
    fingers: [0, 2, 1, 0, 3, 0],
    difficulty: 'intermediate'
  },
  'Dadd9': {
    name: 'D Add 9',
    positions: [-1, 5, 4, 0, 5, 0],
    fingers: [0, 2, 1, 0, 3, 0],
    difficulty: 'intermediate'
  },
  'Eadd9': {
    name: 'E Add 9',
    positions: [0, 2, 2, 1, 0, 2],
    fingers: [0, 2, 3, 1, 0, 4],
    difficulty: 'intermediate'
  },
  'Gadd9': {
    name: 'G Add 9',
    positions: [3, 0, 0, 0, 0, 3],
    fingers: [2, 0, 0, 0, 0, 3],
    difficulty: 'intermediate'
  }
};