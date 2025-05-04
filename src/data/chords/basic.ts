import { ChordDefinition } from '../../types/chord';

export const basicChords: Record<string, ChordDefinition> = {
  'A': {
    name: 'A Major',
    // A C# E - root position
    positions: [-1, 0, 2, 2, 2, 0],
    fingers: [0, 0, 1, 2, 3, 0],  // Corrected finger positions
    difficulty: 'beginner'
  },
  'Am': {
    name: 'A Minor',
    // A C E - root position
    positions: [-1, 0, 2, 2, 1, 0],
    fingers: [0, 0, 2, 3, 1, 0],
    difficulty: 'beginner'
  },
  'D': {
    name: 'D Major',
    // D F# A - root position
    positions: [-1, -1, 0, 2, 3, 2],
    fingers: [0, 0, 0, 1, 3, 2],  // Corrected finger positions
    difficulty: 'beginner'
  },
  'Dm': {
    name: 'D Minor',
    // D F A - root position
    positions: [-1, -1, 0, 2, 3, 1],
    fingers: [0, 0, 0, 1, 3, 2],  // Corrected finger positions
    difficulty: 'beginner'
  },
  'G': {
    name: 'G Major',
    // G B D - root position with doubled G
    positions: [3, 2, 0, 0, 3, 3],  // Corrected standard open G
    fingers: [2, 1, 0, 0, 3, 4],    // Corrected finger positions
    difficulty: 'beginner'
  },
  'C': {
    name: 'C Major',
    // C E G - root position
    positions: [-1, 3, 2, 0, 1, 0],
    fingers: [0, 3, 2, 0, 1, 0],
    difficulty: 'beginner'
  },
  'Em': {
    name: 'E Minor',
    // E G B - root position
    positions: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],  // Corrected finger positions
    difficulty: 'beginner'
  },
  'E': {
    name: 'E Major',
    // E G# B - root position
    positions: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    difficulty: 'beginner'
  }
};
