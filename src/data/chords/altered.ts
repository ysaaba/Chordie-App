import { ChordDefinition } from '../../types/chord';

export const alteredChords: Record<string, ChordDefinition> = {
  'C7b9': {
    name: 'C7 flat 9',
    positions: [-1, 3, 2, 3, 2, -1],
    fingers: [0, 4, 2, 3, 1, 0],
    difficulty: 'advanced'
  },
  'B7#9': {
    name: 'B7 sharp 9',
    positions: [-1, 2, 1, 2, 3, -1],
    fingers: [0, 2, 1, 3, 4, 0],
    difficulty: 'advanced'
  },
  'F7b13': {
    name: 'F7 flat 13',
    positions: [1, -1, 1, 2, 4, -1],
    fingers: [1, 0, 1, 2, 4, 0],
    difficulty: 'advanced'
  },
  'D7#5b9': {
    name: 'D7 sharp 5 flat 9',
    positions: [-1, -1, 0, 3, 3, 4],
    fingers: [0, 0, 0, 1, 1, 2],
    difficulty: 'advanced'
  },
  'G7#11': {
    name: 'G7 sharp 11',
    positions: [3, -1, 3, 4, 4, 3],
    fingers: [1, 0, 1, 3, 4, 2],
    difficulty: 'advanced'
  },
  'A7b5': {
    name: 'A7 flat 5',
    positions: [-1, 0, 1, 2, 2, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    difficulty: 'advanced'
  },
  'E7#5#9': {
    name: 'E7 sharp 5 sharp 9',
    positions: [0, 3, 2, 1, 3, 0],
    fingers: [0, 3, 2, 1, 4, 0],
    difficulty: 'advanced'
  }
};