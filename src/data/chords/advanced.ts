import { ChordDefinition } from '../../types/chord';

export const advancedChords: Record<string, ChordDefinition> = {
  'F#m': {
    name: 'F# Minor',
    positions: [2, 4, 4, 2, 2, 2],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'advanced'
  },
  'Caug': {
    name: 'C Augmented',
    positions: [-1, 3, 2, 1, 1, 0],
    fingers: [0, 4, 3, 1, 2, 0],
    difficulty: 'advanced'
  },
  'Cdim': {
    name: 'C Diminished',
    positions: [-1, 3, 1, 2, 1, -1],
    fingers: [0, 4, 1, 3, 2, 0],
    difficulty: 'advanced'
  },
  'Dmaj9': {
    name: 'D Major 9',
    positions: [-1, 5, 4, 5, 5, 5],
    fingers: [0, 2, 1, 3, 3, 3],
    difficulty: 'advanced'
  },
  'Em9': {
    name: 'E Minor 9',
    positions: [0, 2, 0, 0, 0, 2],
    fingers: [0, 2, 0, 0, 0, 3],
    difficulty: 'advanced'
  },
  'Amaj9': {
    name: 'A Major 9',
    positions: [-1, 0, 2, 4, 2, 4],
    fingers: [0, 0, 1, 3, 1, 4],
    difficulty: 'advanced'
  },
  'F#dim7': {
    name: 'F# Diminished 7',
    positions: [2, -1, 1, 2, 1, 2],
    fingers: [2, 0, 1, 3, 1, 4],
    difficulty: 'advanced'
  },
  'Gmaj13': {
    name: 'G Major 13',
    positions: [3, -1, 3, 2, 0, 2],
    fingers: [3, 0, 4, 2, 0, 1],
    difficulty: 'advanced'
  },
  'Daug': {
    name: 'D Augmented',
    positions: [-1, -1, 0, 3, 3, 2],
    fingers: [0, 0, 0, 3, 4, 2],
    difficulty: 'advanced'
  },
  'D13': {
    name: 'D13',
    positions: [-1, -1, 0, 2, 1, 2],
    fingers: [0, 0, 0, 3, 1, 2],
    difficulty: 'advanced'
  }
};