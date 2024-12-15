import { ChordDefinition } from '../../types/chord';

export const jazzChords: Record<string, ChordDefinition> = {
  'Am9': {
    name: 'A Minor 9',
    positions: [-1, 0, 2, 0, 1, 0],
    fingers: [0, 0, 2, 0, 1, 0],
    difficulty: 'advanced'
  },
  'Bm9': {
    name: 'B Minor 9',
    positions: [-1, 2, 0, 2, 2, 2],
    fingers: [0, 2, 0, 3, 3, 3],
    difficulty: 'advanced'
  },
  'Cm9': {
    name: 'C Minor 9',
    positions: [-1, 3, 1, 3, 3, 3],
    fingers: [0, 2, 1, 3, 4, 4],
    difficulty: 'advanced'
  },
  'Dm9': {
    name: 'D Minor 9',
    positions: [-1, 5, 3, 5, 5, 5],
    fingers: [0, 2, 1, 3, 4, 4],
    difficulty: 'advanced'
  },
  'Em11': {
    name: 'E Minor 11',
    positions: [0, 0, 0, 0, 0, 2],
    fingers: [0, 0, 0, 0, 0, 2],
    difficulty: 'advanced'
  },
  'Fmaj9': {
    name: 'F Major 9',
    positions: [-1, -1, 3, 2, 3, 0],
    fingers: [0, 0, 3, 1, 4, 0],
    difficulty: 'advanced'
  },
  'Gmaj9': {
    name: 'G Major 9',
    positions: [3, -1, 0, 2, 0, 0],
    fingers: [3, 0, 0, 2, 0, 0],
    difficulty: 'advanced'
  }
};