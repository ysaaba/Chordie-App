import { ChordDefinition } from '../../types/chord';

export const suspendedChords: Record<string, ChordDefinition> = {
  'Asus2': {
    name: 'A Sus 2',
    positions: [-1, 0, 2, 2, 0, 0],
    fingers: [0, 0, 2, 3, 0, 0],
    difficulty: 'intermediate'
  },
  'Asus4': {
    name: 'A Sus 4',
    positions: [-1, 0, 2, 2, 3, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    difficulty: 'intermediate'
  },
  'Dsus2': {
    name: 'D Sus 2',
    positions: [-1, -1, 0, 2, 3, 0],
    fingers: [0, 0, 0, 2, 3, 0],
    difficulty: 'intermediate'
  },
  'Dsus4': {
    name: 'D Sus 4',
    positions: [-1, -1, 0, 2, 3, 3],
    fingers: [0, 0, 0, 1, 2, 3],
    difficulty: 'intermediate'
  },
  'Esus2': {
    name: 'E Sus 2',
    positions: [0, 2, 4, 4, 0, 0],
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'intermediate'
  },
  'Esus4': {
    name: 'E Sus 4',
    positions: [0, 2, 2, 2, 0, 0],
    fingers: [0, 2, 3, 4, 0, 0],
    difficulty: 'intermediate'
  }
};