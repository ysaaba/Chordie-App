import { ChordDefinition } from '../../types/chord';

export const add9Chords: Record<string, ChordDefinition> = {
  'Cadd9': {
    name: 'C Add 9',
    // C E G D - major triad + 9th (no 7th)
    positions: [-1, 3, 2, 0, 3, 0],
    fingers: [0, 3, 2, 0, 4, 0],
    difficulty: 'intermediate'
  },
  'Dadd9': {
    name: 'D Add 9',
    // D F# A E - major triad + 9th
    positions: [-1, 0, 2, 2, 3, 0],
    fingers: [0, 0, 1, 2, 3, 0],
    difficulty: 'intermediate'
  },
  'Eadd9': {
    name: 'E Add 9',
    // E G# B F# - major triad + 9th
    positions: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    difficulty: 'intermediate'
  },
  'Fadd9': {
    name: 'F Add 9',
    // F A C G - major triad + 9th
    positions: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate'
  },
  'Gadd9': {
    name: 'G Add 9',
    // G B D A - major triad + 9th
    positions: [3, 0, 0, 0, 0, 3],
    fingers: [2, 0, 0, 0, 0, 3],
    difficulty: 'intermediate'
  },
  'Aadd9': {
    name: 'A Add 9',
    // A C# E B - major triad + 9th
    positions: [-1, 0, 2, 2, 0, 0],
    fingers: [0, 0, 2, 3, 0, 0],
    difficulty: 'intermediate'
  },
  'Badd9': {
    name: 'B Add 9',
    // B D# F# C# - major triad + 9th
    positions: [-1, 2, 4, 4, 2, 2],
    fingers: [0, 1, 3, 4, 1, 1],
    difficulty: 'intermediate'
  }
};