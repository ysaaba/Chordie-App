import { ChordDefinition } from '../../types/chord';

export const augmentedChords: Record<string, ChordDefinition> = {
  'Caug7': {
    name: 'C Augmented 7',
    positions: [-1, 3, 2, 3, 3, -1],
    fingers: [0, 2, 1, 3, 4, 0],
    difficulty: 'advanced'
  },
  'Daug7': {
    name: 'D Augmented 7',
    positions: [-1, 5, 4, 5, 5, -1],
    fingers: [0, 2, 1, 3, 4, 0],
    difficulty: 'advanced'
  },
  'Eaug7': {
    name: 'E Augmented 7',
    positions: [0, 3, 2, 1, 1, 0],
    fingers: [0, 4, 3, 1, 2, 0],
    difficulty: 'advanced'
  },
  'Gaug7': {
    name: 'G Augmented 7',
    positions: [3, -1, 3, 4, 4, -1],
    fingers: [1, 0, 2, 3, 4, 0],
    difficulty: 'advanced'
  }
};