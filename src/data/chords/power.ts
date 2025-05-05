import { ChordDefinition } from '../../types/chord';

export const powerChords: Record<string, ChordDefinition> = {
  E5: {
    name: 'E5',
    positions: [0, 2, 2, -1, -1, -1],
    fingers: [0, 1, 2, 0, 0, 0],
    difficulty: 'beginner',
  },
  A5: {
    name: 'A5',
    positions: [-1, 0, 2, 2, -1, -1],
    fingers: [0, 0, 1, 2, 0, 0],
    difficulty: 'beginner',
  },
  D5: {
    name: 'D5',
    positions: [-1, 5, 7, 7, -1, -1], 
    fingers: [0, 1, 3, 3, 0, 0],
    difficulty: 'beginner',
  },
  G5: {
    name: 'G5',
    positions: [3, 5, 5, -1, -1, -1],
    fingers: [1, 3, 4, 0, 0, 0],
    difficulty: 'beginner',
  },
  C5: {
    name: 'C5',
    positions: [-1, 3, 5, 5, -1, -1],
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'beginner',
  },
  // Added power chords
  F5: {
    name: 'F5',
    positions: [1, 3, 3, -1, -1, -1],
    fingers: [1, 3, 4, 0, 0, 0],
    difficulty: 'beginner',
  },
  B5: {
    name: 'B5',
    positions: [-1, 2, 4, 4, -1, -1],
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'beginner',
  },
  // Movable power chord shapes with root on 6th string (like E5 but moved up)
  'F#5': {
    name: 'F#5',
    positions: [2, 4, 4, -1, -1, -1],
    fingers: [1, 3, 4, 0, 0, 0],
    difficulty: 'beginner',
  },
  'G#5': {
    name: 'G#5',
    positions: [4, 6, 6, -1, -1, -1],
    fingers: [1, 3, 4, 0, 0, 0],
    difficulty: 'beginner',
  },
  'A#5': {
    name: 'A#5',
    positions: [-1, 1, 3, 3, -1, -1],
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'beginner',
  },
  'C#5': {
    name: 'C#5',
    positions: [-1, 4, 6, 6, -1, -1],
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'beginner',
  },
  'D#5': {
    name: 'D#5',
    positions: [-1, -1, 1, 3, 4, -1],
    fingers: [0, 0, 1, 3, 4, 0],
    difficulty: 'beginner',
  },
  // Alternative positions
  'E5_alt': {
    name: 'E5 (Alt)',
    positions: [-1, -1, 2, 4, 5, -1],
    fingers: [0, 0, 1, 3, 4, 0],
    difficulty: 'intermediate',
  },
  'A5_alt': {
    name: 'A5 (Alt)',
    positions: [5, 7, 7, -1, -1, -1],
    fingers: [1, 3, 4, 0, 0, 0],
    difficulty: 'intermediate',
  },
};