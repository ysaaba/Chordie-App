import { ChordDefinition } from '../../types/chord';

export const min11Chords: Record<string, ChordDefinition> = {
  'Am11': {
    name: 'A Minor 11',
    positions: [-1, 0, 0, 0, 0, 0],
    fingers: [0, 0, 0, 0, 0, 0],
    difficulty: 'advanced'
  },
  'Dm11': {
    name: 'D Minor 11',
    positions: [-1, -1, 0, 0, 1, 1],
    fingers: [0, 0, 0, 0, 1, 1],
    difficulty: 'advanced'
  },
  'Em11': {
    name: 'E Minor 11',
    positions: [0, 0, 0, 0, 0, 0],
    fingers: [0, 0, 0, 0, 0, 0],
    difficulty: 'advanced'
  },
  'Bm11': {
    name: 'B Minor 11',
    positions: [-1, 2, 0, 2, 0, 0],
    fingers: [0, 2, 0, 3, 0, 0],
    difficulty: 'advanced'
  },
  'F#m11': {
    name: 'F# Minor 11',
    positions: [2, 0, 2, 1, 0, 0],
    fingers: [3, 0, 4, 2, 0, 0],
    difficulty: 'advanced'
  },
  'Gm11': {
    name: 'G Minor 11',
    positions: [3, -1, 3, 3, 3, 3],
    fingers: [1, 0, 1, 1, 1, 1],
    difficulty: 'advanced'
  },
  'Cm11': {
    name: 'C Minor 11',
    positions: [-1, 3, 1, 3, 1, 1],
    fingers: [0, 3, 1, 4, 1, 1],
    difficulty: 'advanced'
  }
};