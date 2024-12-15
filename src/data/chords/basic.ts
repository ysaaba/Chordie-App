import { ChordDefinition } from '../../types/chord';

export const basicChords: Record<string, ChordDefinition> = {
  // Basic Open Chords
  'A': {
    name: 'A Major',
    positions: [-1, 0, 2, 2, 2, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    difficulty: 'beginner'
  },
  'Am': {
    name: 'A Minor',
    positions: [-1, 0, 2, 2, 1, 0],
    fingers: [0, 0, 2, 3, 1, 0],
    difficulty: 'beginner'
  },
  'D': {
    name: 'D Major',
    positions: [-1, -1, 0, 2, 3, 2],
    fingers: [0, 0, 0, 1, 3, 2],
    difficulty: 'beginner'
  },
  'Dm': {
    name: 'D Minor',
    positions: [-1, -1, 0, 2, 3, 1],
    fingers: [0, 0, 0, 2, 3, 1],
    difficulty: 'beginner'
  },
  'G': {
    name: 'G Major',
    positions: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
    difficulty: 'beginner'
  },
  'C': {
    name: 'C Major',
    positions: [-1, 3, 2, 0, 1, 0],
    fingers: [0, 3, 2, 0, 1, 0],
    difficulty: 'beginner'
  },
  'Em': {
    name: 'E Minor',
    positions: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],
    difficulty: 'beginner'
  },
  'E': {
    name: 'E Major',
    positions: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    difficulty: 'beginner'
  }
};