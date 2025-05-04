import { ChordDefinition } from '../../types/chord';

export const suspendedChords: Record<string, ChordDefinition> = {
  'Asus2': {
    name: 'A Suspended 2',
    // A B E - root, 2nd, 5th
    positions: [0, 0, 2, 2, 0, 0],  // Corrected: first string should be played
    fingers: [0, 0, 1, 2, 0, 0],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Asus4': {
    name: 'A Suspended 4',
    // A D E - root, 4th, 5th
    positions: [0, 0, 2, 2, 3, 0],  // Corrected: first string should be played
    fingers: [0, 0, 1, 1, 2, 0],
    difficulty: 'intermediate'
  },
  'Csus2': {
    name: 'C Suspended 2',
    // C D G - root, 2nd, 5th
    positions: [-1, 3, 0, 0, 1, 3],  // Correct
    fingers: [0, 3, 0, 0, 1, 4],
    difficulty: 'intermediate'
  },
  'Csus4': {
    name: 'C Suspended 4',
    // C F G - root, 4th, 5th
    positions: [-1, 3, 3, 0, 1, 1],  // Correct
    fingers: [0, 3, 4, 0, 1, 2],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Dsus2': {
    name: 'D Suspended 2',
    // D E A - root, 2nd, 5th
    positions: [-1, -1, 0, 2, 3, 0],  // Correct
    fingers: [0, 0, 0, 1, 3, 0],     // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Dsus4': {
    name: 'D Suspended 4',
    // D G A - root, 4th, 5th
    positions: [-1, -1, 0, 2, 3, 3],  // Correct
    fingers: [0, 0, 0, 1, 2, 3],
    difficulty: 'intermediate'
  },
  'Esus2': {
    name: 'E Suspended 2',
    // E F# B - root, 2nd, 5th
    positions: [0, 2, 4, 4, 0, 0],  // Correct
    fingers: [0, 1, 3, 4, 0, 0],
    difficulty: 'intermediate'
  },
  'Esus4': {
    name: 'E Suspended 4',
    // E A B - root, 4th, 5th
    positions: [0, 0, 2, 2, 0, 0],  // Corrected: Common Esus4 voicing
    fingers: [0, 0, 1, 2, 0, 0],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Fsus2': {
    name: 'F Suspended 2',
    // F G C - root, 2nd, 5th
    positions: [1, 3, 3, 0, 1, 1],  // Corrected position
    fingers: [1, 3, 4, 0, 1, 2],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Fsus4': {
    name: 'F Suspended 4',
    // F Bb C - root, 4th, 5th
    positions: [1, 3, 3, 3, 1, 1],  // Correct
    fingers: [1, 3, 3, 4, 1, 1],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Gsus2': {
    name: 'G Suspended 2',
    // G A D - root, 2nd, 5th
    positions: [3, 0, 0, 0, 0, 3],  // Corrected position
    fingers: [2, 0, 0, 0, 0, 3],    // Corrected finger positions
    difficulty: 'intermediate'
  },
  'Gsus4': {
    name: 'G Suspended 4',
    // G C D - root, 4th, 5th
    positions: [3, 3, 0, 0, 1, 3],  // Correct
    fingers: [2, 3, 0, 0, 1, 4],    // Corrected finger positions
    difficulty: 'intermediate'
  }
};