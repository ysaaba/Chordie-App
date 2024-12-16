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
  },
  'Gsus2': {
    name: 'G Sus 2',
    positions: [3, 0, 0, 0, 3, 3],
    fingers: [2, 0, 0, 0, 3, 4],
    difficulty: 'intermediate'
  },
  'Gsus4': {
    name: 'G Sus 4',
    positions: [3, 3, 0, 0, 1, 3],
    fingers: [2, 3, 0, 0, 1, 4],
    difficulty: 'intermediate'
  },
  'Fsus2': {
    name: 'F Sus 2',
    positions: [1, 3, 3, -1, 1, 1],
    fingers: [1, 3, 4, 0, 1, 1],
    difficulty: 'intermediate'
  },
  'Fsus4': {
    name: 'F Sus 4',
    positions: [1, 3, 3, 3, 1, 1],
    fingers: [1, 2, 3, 4, 1, 1],
    difficulty: 'intermediate'
  },
  'Csus2': {
    name: 'C Sus 2',
    positions: [-1, 3, 0, 0, 1, 0],
    fingers: [0, 3, 0, 0, 1, 0],
    difficulty: 'intermediate'
  },
  'Csus4': {
    name: 'C Sus 4',
    positions: [-1, 3, 3, 0, 1, 1],
    fingers: [0, 3, 4, 0, 1, 2],
    difficulty: 'intermediate'
  }
};