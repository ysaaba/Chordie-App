import { ChordDefinition } from '../../types/chord';

export const min11Chords: Record<string, ChordDefinition> = {
  'Am11': {
    name: 'A Minor 11',
    // A C E G B D - min11 (root, min3rd, 5th, min7th, 9th, 11th)
    positions: [-1, 0, 0, 0, 1, 0],  // Correct
    fingers: [0, 0, 0, 0, 1, 0],
    difficulty: 'advanced'
  },
  'Bm11': {
    name: 'B Minor 11',
    // B D F# A C# E - min11
    positions: [-1, 2, 0, 2, 0, 2],  // Correct
    fingers: [0, 1, 0, 2, 0, 3],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Cm11': {
    name: 'C Minor 11',
    // C Eb G Bb D F - min11
    positions: [-1, 3, 3, 3, 4, 3],  // Corrected position (not a barre chord)
    fingers: [0, 1, 1, 1, 2, 1],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Dm11': {
    name: 'D Minor 11',
    // D F A C E G - min11
    positions: [-1, -1, 0, 2, 1, 1],  // Correct
    fingers: [0, 0, 0, 2, 1, 1],
    difficulty: 'advanced'
  },
  'Em11': {
    name: 'E Minor 11',
    // E G B D F# A - min11
    positions: [0, 2, 2, 0, 0, 0],  // Corrected position (common voicing)
    fingers: [0, 1, 2, 0, 0, 0],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Fm11': {
    name: 'F Minor 11',
    // F Ab C Eb G Bb - min11
    positions: [1, 3, 1, 1, 1, 1],  // Corrected position (not a 6-string barre)
    fingers: [1, 3, 1, 1, 1, 1],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Gm11': {
    name: 'G Minor 11',
    // G Bb D F A C - min11
    positions: [3, -1, 3, 3, 3, 3],  // Corrected position
    fingers: [1, 0, 2, 3, 4, 4],    // Corrected finger positions
    difficulty: 'advanced'
  }
};