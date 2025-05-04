import { ChordDefinition } from '../../types/chord';

export const diminishedChords: Record<string, ChordDefinition> = {
  'Cdim7': {
    name: 'C Diminished 7',
    // C Eb Gb Bbb - diminished seventh (root, b3, b5, bb7)
    positions: [-1, 3, 4, 2, 4, -1],
    fingers: [0, 2, 3, 1, 4, 0],
    difficulty: 'advanced'
  },
  'Ddim7': {
    name: 'D Diminished 7',
    // D F Ab Cb - diminished seventh
    positions: [-1, -1, 0, 2, 0, 2],
    fingers: [0, 0, 0, 1, 0, 2],
    difficulty: 'advanced'
  },
  'Edim7': {
    name: 'E Diminished 7',
    // E G Bb Db - diminished seventh
    positions: [0, 1, 2, 0, 2, 0],
    fingers: [0, 1, 2, 0, 3, 0],
    difficulty: 'advanced'
  },
  'F#dim7': {
    name: 'F# Diminished 7',
    // F# A C Eb - diminished seventh
    positions: [2, -1, 1, 2, 1, 2],
    fingers: [2, 0, 1, 3, 1, 4],
    difficulty: 'advanced'
  },
  'G#dim7': {
    name: 'G# Diminished 7',
    // G# B D F - diminished seventh
    positions: [4, -1, 3, 4, 3, 4],
    fingers: [2, 0, 1, 3, 1, 4],
    difficulty: 'advanced'
  },
  'Bdim7': {
    name: 'B Diminished 7',
    // B D F Ab - diminished seventh
    positions: [-1, 2, 3, 1, 3, 1],
    fingers: [0, 2, 4, 1, 4, 1],
    difficulty: 'advanced'
  }
};