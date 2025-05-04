import { ChordDefinition } from '../../types/chord';

export const maj13Chords: Record<string, ChordDefinition> = {
  'Cmaj13': {
    name: 'C Major 13',
    // C E G B D A - maj13 (root, maj3rd, 5th, maj7th, 9th, 13th)
    positions: [-1, 3, 2, 2, 0, 0],  // Correct
    fingers: [0, 3, 1, 2, 0, 0],
    difficulty: 'advanced'
  },
  'Dmaj13': {
    name: 'D Major 13',
    // D F# A C# E B - maj13 (root, maj3rd, 5th, maj7th, 9th, 13th)
    positions: [-1, -1, 0, 4, 2, 2],  // Corrected position (more playable)
    fingers: [0, 0, 0, 4, 1, 2],     // Corrected finger positions
    difficulty: 'advanced'
  },
  'Emaj13': {
    name: 'E Major 13',
    // E G# B D# F# C# - maj13 (root, maj3rd, 5th, maj7th, 9th, 13th)
    positions: [0, 2, 1, 1, 2, 2],  // Corrected position
    fingers: [0, 2, 1, 1, 3, 4],    // Corrected finger positions
    difficulty: 'advanced'
  },
  'Gmaj13': {
    name: 'G Major 13',
    // G B D F# A E - maj13 (root, maj3rd, 5th, maj7th, 9th, 13th)
    positions: [3, 2, 0, 0, 0, 2],  // Corrected position
    fingers: [3, 2, 0, 0, 0, 1],    // Corrected finger positions
    difficulty: 'advanced'
  }
};