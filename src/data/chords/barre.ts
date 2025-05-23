import { ChordDefinition } from '../../types/chord';

export const barreChords: Record<string, ChordDefinition> = {
  // Basic barre chords
  F: {
    name: 'F Major',
    positions: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate',
  },
  Bm: {
    name: 'B Minor',
    positions: [-1, 2, 4, 4, 3, 2],
    fingers: [0, 1, 3, 4, 2, 1],
    difficulty: 'intermediate',
  },
  Fm: {
    name: 'F Minor',
    positions: [1, 3, 3, 1, 1, 1],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  Gm: {
    name: 'G Minor',
    positions: [3, 5, 5, 3, 3, 3],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'F#/Gb': {
    name: 'F# / Gb Major',
    positions: [2, 4, 4, 3, 2, 2],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'C#/Db': {
    name: 'C# / Db Major',
    positions: [9, 11, 11, 10, 9, 9],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'G#/Ab': {
    name: 'G# / Ab Major',
    positions: [4, 6, 6, 5, 4, 4],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'A#/Bb': {
    name: 'A# / Bb Major',
    positions: [6, 8, 8, 7, 6, 6],
    fingers: [1, 3, 4, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'C#m/Dbm': {
    name: 'C# / Db Minor',
    positions: [9, 11, 11, 9, 9, 9],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'D#m/Ebm': {
    name: 'D# / Eb Minor',
    positions: [11, 13, 13, 11, 11, 11],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'G#m/Abm': {
    name: 'G# / Ab Minor',
    positions: [4, 6, 6, 4, 4, 4],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'A#m/Bbm': {
    name: 'A# / Bb Minor',
    positions: [6, 8, 8, 6, 6, 6],
    fingers: [1, 3, 4, 1, 1, 1],
    difficulty: 'intermediate',
  },
  // Seventh chords
  Dm7: {
    name: 'D Minor 7',
    positions: [5, 7, 5, 5, 5, 5],
    fingers: [1, 3, 1, 1, 1, 1],
    difficulty: 'intermediate',
  },
  Em7: {
    name: 'E Minor 7',
    positions: [7, 9, 7, 7, 7, 7],
    fingers: [1, 3, 1, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'F#7/Gb7': {
    name: 'F# / Gb Seventh',
    positions: [2, 4, 2, 3, 2, 2],
    fingers: [1, 3, 1, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'G#m7/Abm7': {
    name: 'G# / Ab Minor 7',
    positions: [4, 6, 4, 4, 4, 4],
    fingers: [1, 3, 1, 1, 1, 1],
    difficulty: 'intermediate',
  },
  'C#7/Db7': {
    name: 'C# / Db Seventh',
    positions: [9, 11, 9, 10, 9, 9],
    fingers: [1, 3, 1, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'F#m7/Gbm7': {
    name: 'F# / Gb Minor 7',
    positions: [2, 4, 2, 2, 2, 2],
    fingers: [1, 3, 1, 1, 1, 1],
    difficulty: 'intermediate',
  },
  B7: {
    name: 'B Seventh',
    positions: [-1, 2, 1, 2, 0, 2],
    fingers: [0, 2, 1, 3, 0, 4],
    difficulty: 'intermediate',
  },
  // Major 7 chords
  'A#maj7/Bbmaj7': {
    name: 'A# / Bb Major 7',
    positions: [6, 8, 7, 7, 6, 6],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'D#maj7/Ebmaj7': {
    name: 'D# / Eb Major 7',
    positions: [11, 13, 12, 12, 11, 11],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'G#maj7/Abmaj7': {
    name: 'G# / Ab Major 7',
    positions: [4, 6, 5, 5, 4, 4],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'C#maj7/Dbmaj7': {
    name: 'C# / Db Major 7',
    positions: [9, 11, 10, 10, 9, 9],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
  'F#maj7/Gbmaj7': {
    name: 'F# / Gb Major 7',
    positions: [2, 4, 3, 3, 2, 2],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
  Bmaj7: {
    name: 'B Major 7',
    positions: [7, 9, 8, 8, 7, 7],
    fingers: [1, 3, 2, 2, 1, 1],
    difficulty: 'intermediate',
  },
};