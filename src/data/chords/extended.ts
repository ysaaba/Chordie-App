import { ChordDefinition } from '../../types/chord';

export const extendedChords: Record<string, ChordDefinition> = {
  'CM7': {
    name: 'C Major 7',
    // C E G B - major 7th
    positions: [-1, 3, 2, 0, 0, 0],
    fingers: [0, 3, 2, 0, 0, 0],
    difficulty: 'advanced'
  },
  'EbM7': {
    name: 'Eb Major 7',
    // Eb G Bb D - major 7th
    positions: [-1, 6, 5, 3, 3, 3],
    fingers: [0, 4, 3, 1, 1, 1],
    difficulty: 'advanced'
  },
  'AbM7': {
    name: 'Ab Major 7',
    // Ab C Eb G - major 7th
    positions: [4, 6, 5, 5, 4, 4],
    fingers: [1, 4, 2, 3, 1, 1],
    difficulty: 'advanced'
  },
  'DbM7': {
    name: 'Db Major 7',
    // Db F Ab C - major 7th
    positions: [-1, 4, 3, 1, 1, 1],
    fingers: [0, 4, 3, 1, 1, 1],
    difficulty: 'advanced'
  },
  'BM7#11': {
    name: 'B Major 7 Sharp 11',
    // B D# F# A# E# - maj7#11 (root, maj3rd, #11, maj7th)
    positions: [-1, 2, 1, 3, 0, 2],
    fingers: [0, 2, 1, 4, 0, 3],
    difficulty: 'advanced'
  },
  'FM7#5': {
    name: 'F Major 7 Sharp 5',
    // F A C# E - maj7#5 (root, maj3rd, #5, maj7th)
    positions: [1, -1, 2, 2, 2, 0],
    fingers: [1, 0, 2, 3, 4, 0],
    difficulty: 'advanced'
  },
  'AM7b5': {
    name: 'A Major 7 Flat 5',
    // A C# Eb G# - maj7b5 (root, maj3rd, b5, maj7th)
    positions: [-1, 0, 1, 1, 2, 0],
    fingers: [0, 0, 1, 1, 2, 0],
    difficulty: 'advanced'
  }
};