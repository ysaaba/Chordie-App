import { ChordDefinition } from '../../types/chord';

export const seventhChords: Record<string, ChordDefinition> = {
  'A7': {
    name: 'A Seventh',
    // A C# E G - dominant 7th
    positions: [-1, 0, 2, 0, 2, 0],
    fingers: [0, 0, 2, 0, 3, 0],
    difficulty: 'beginner'
  },
  'D7': {
    name: 'D Seventh',
    // D F# A C - dominant 7th
    positions: [-1, -1, 0, 2, 1, 2],
    fingers: [0, 0, 0, 2, 1, 3],
    difficulty: 'beginner'
  },
  'G7': {
    name: 'G Seventh',
    // G B D F - dominant 7th
    positions: [3, 2, 0, 0, 0, 1],  // Correct
    fingers: [3, 2, 0, 0, 0, 1],
    difficulty: 'beginner'
  },
  'C7': {
    name: 'C Seventh',
    // C E G Bb - dominant 7th
    positions: [-1, 3, 2, 3, 1, 0],  // Correct
    fingers: [0, 3, 2, 4, 1, 0],
    difficulty: 'beginner'
  },
  'E7': {
    name: 'E Seventh',
    // E G# B D - dominant 7th
    positions: [0, 2, 0, 1, 0, 0],  // Correct
    fingers: [0, 2, 0, 1, 0, 0],
    difficulty: 'beginner'
  },
  'B7': {
    name: 'B Seventh',
    // B D# F# A - dominant 7th
    positions: [-1, 2, 1, 2, 0, 2],  // Correct
    fingers: [0, 2, 1, 3, 0, 4],    // This is correct
    difficulty: 'intermediate'
  },
  'Am7': {
    name: 'A Minor 7',
    // A C E G - minor 7th
    positions: [-1, 0, 2, 0, 1, 0],  // Correct
    fingers: [0, 0, 2, 0, 1, 0],
    difficulty: 'beginner'
  }
};