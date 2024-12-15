import { ChordDefinition } from '../../types/chord';

export const extendedChords: Record<string, ChordDefinition> = {
  'Cmaj7': {
    name: 'C Major 7',
    positions: [-1, 3, 2, 0, 0, 0],
    fingers: [0, 3, 2, 0, 0, 0],
    difficulty: 'intermediate'
  },
  'Ebmaj7': {
    name: 'Eb Major 7',
    positions: [-1, 6, 5, 3, 3, 3],
    fingers: [0, 4, 3, 1, 1, 1],
    difficulty: 'intermediate'
  },
  'Abmaj7': {
    name: 'Ab Major 7',
    positions: [4, 6, 5, 5, 4, 4],
    fingers: [1, 4, 2, 3, 1, 1],
    difficulty: 'intermediate'
  },
  'Dbmaj7': {
    name: 'Db Major 7',
    positions: [-1, 4, 3, 1, 1, 1],
    fingers: [0, 4, 3, 1, 1, 1],
    difficulty: 'intermediate'
  },
  'Bmaj7#11': {
    name: 'B Major 7 sharp 11',
    positions: [-1, 2, 1, 3, 0, 2],
    fingers: [0, 2, 1, 4, 0, 3],
    difficulty: 'advanced'
  },
  'Fmaj7#5': {
    name: 'F Major 7 sharp 5',
    positions: [1, -1, 2, 2, 2, 0],
    fingers: [1, 0, 2, 3, 4, 0],
    difficulty: 'advanced'
  },
  'Amaj7b5': {
    name: 'A Major 7 flat 5',
    positions: [-1, 0, 1, 1, 2, 0],
    fingers: [0, 0, 1, 1, 2, 0],
    difficulty: 'advanced'
  }
};