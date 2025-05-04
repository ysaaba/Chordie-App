import { ChordDefinition } from '../../types/chord';

export const augmentedChords: Record<string, ChordDefinition> = {
  'Caug': {
    name: 'C Augmented',
    // C E G# - major triad with raised 5th
    positions: [-1, 3, 2, 1, 1, -1],
    fingers: [0, 4, 3, 1, 2, 0],
    difficulty: 'advanced'
  },
  'Daug': {
    name: 'D Augmented',
    // D F# A# - augmented triad
    positions: [-1, 5, 4, 3, 3, -1],
    fingers: [0, 4, 3, 1, 2, 0],
    difficulty: 'advanced'
  },
  'Eaug': {
    name: 'E Augmented',
    // E G# B# (C) - augmented triad
    positions: [0, 3, 2, 1, 1, 0],
    fingers: [0, 4, 3, 1, 2, 0],
    difficulty: 'advanced'
  },
  'Faug': {
    name: 'F Augmented',
    // F A C# - augmented triad
    positions: [1, 4, 3, 2, 2, 1],
    fingers: [1, 4, 3, 2, 2, 1],
    difficulty: 'advanced'
  },
  'Gaug': {
    name: 'G Augmented',
    // G B D# - augmented triad
    positions: [3, 2, 1, 0, 0, 3],
    fingers: [3, 2, 1, 0, 0, 4],
    difficulty: 'advanced'
  },
  'Aaug': {
    name: 'A Augmented',
    // A C# E# (F) - augmented triad
    positions: [-1, 0, 3, 2, 2, 1],
    fingers: [0, 0, 4, 2, 3, 1],
    difficulty: 'advanced'
  },
  'Baug': {
    name: 'B Augmented',
    // B D# F## (G) - augmented triad
    positions: [-1, 2, 1, 0, 0, 3],
    fingers: [0, 2, 1, 0, 0, 3],
    difficulty: 'advanced'
  }
};