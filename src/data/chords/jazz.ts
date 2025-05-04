import { ChordDefinition } from '../../types/chord';

export const jazzChords: Record<string, ChordDefinition> = {
  'Am9': {
    name: 'A Minor 9',
    // A C E G B - minor 9th (root, min3rd, 5th, min7th, 9th)
    positions: [5, 7, 5, 5, 5, 7],  // Corrected to a more standard position
    fingers: [1, 3, 1, 1, 1, 4],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Bm9': {
    name: 'B Minor 9',
    // B D F# A C# - minor 9th
    positions: [7, 9, 7, 7, 7, 9],  // Corrected position
    fingers: [1, 3, 1, 1, 1, 4],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Cm9': {
    name: 'C Minor 9',
    // C Eb G Bb D - minor 9th
    positions: [8, 10, 8, 8, 8, 10],  // Corrected position
    fingers: [1, 3, 1, 1, 1, 4],     // Corrected finger positions
    difficulty: 'advanced'
  },
  'Dm9': {
    name: 'D Minor 9',
    // D F A C E - minor 9th
    positions: [-1, 5, 3, 5, 5, 5],  // Correct
    fingers: [0, 2, 1, 3, 3, 3],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Em11': {
    name: 'E Minor 11',
    // E G B D F# A - minor 11th (root, min3rd, 5th, min7th, 9th, 11th)
    positions: [0, 0, 0, 0, 0, 0],  // Corrected position - open strings form Em11
    fingers: [0, 0, 0, 0, 0, 0],    // No fingers needed
    difficulty: 'advanced'
  },
  'Fmaj9': {
    name: 'F Major 9',
    // F A C E G - major 9th (root, maj3rd, 5th, maj7th, 9th)
    positions: [1, 0, 2, 0, 1, 0],  // Corrected position
    fingers: [1, 0, 3, 0, 2, 0],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Gmaj9': {
    name: 'G Major 9',
    // G B D F# A - major 9th
    positions: [3, 0, 0, 0, 0, 2],  // Corrected position
    fingers: [2, 0, 0, 0, 0, 1],    // Corrected finger positions
    difficulty: 'advanced'
  }
};