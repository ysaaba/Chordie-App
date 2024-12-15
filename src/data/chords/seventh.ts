import { ChordDefinition } from '../../types/chord';

export const seventhChords: Record<string, ChordDefinition> = {
  'A7': {
    name: 'A Seventh',
    positions: [-1, 0, 2, 0, 2, 0],
    fingers: [0, 0, 2, 0, 3, 0],
    difficulty: 'beginner'
  },
  'D7': {
    name: 'D Seventh',
    positions: [-1, -1, 0, 2, 1, 2],
    fingers: [0, 0, 0, 2, 1, 3],
    difficulty: 'beginner'
  },
  'G7': {
    name: 'G Seventh',
    positions: [3, 2, 0, 0, 0, 1],
    fingers: [3, 2, 0, 0, 0, 1],
    difficulty: 'beginner'
  },
  'C7': {
    name: 'C Seventh',
    positions: [-1, 3, 2, 3, 1, 0],
    fingers: [0, 3, 2, 4, 1, 0],
    difficulty: 'beginner'
  },
  'E7': {
    name: 'E Seventh',
    positions: [0, 2, 0, 1, 0, 0],
    fingers: [0, 2, 0, 1, 0, 0],
    difficulty: 'beginner'
  },
  'B7': {
    name: 'B Seventh',
    positions: [-1, 2, 1, 2, 0, 2],
    fingers: [0, 2, 1, 3, 0, 4],
    difficulty: 'intermediate'
  }
};