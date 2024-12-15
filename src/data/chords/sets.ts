import { ChordSet } from '../../types/chord';

export const chordSets: ChordSet[] = [
  {
    name: 'Essential Open Chords',
    description: 'The most common open chords for beginners',
    chords: ['A', 'D', 'G', 'C', 'Em', 'E'],
    difficulty: 'beginner'
  },
  {
    name: 'Basic Seventh Chords',
    description: 'Common seventh chord variations',
    chords: ['A7', 'D7', 'G7', 'C7', 'E7'],
    difficulty: 'beginner'
  },
  {
    name: 'Minor Chords',
    description: 'Basic minor chord progression practice',
    chords: ['Am', 'Em', 'Dm', 'Bm'],
    difficulty: 'beginner'
  },
  {
    name: 'Barre Chords',
    description: 'Essential barre chords for intermediate players',
    chords: ['F', 'Bm', 'Fm', 'Gm', 'F#', 'C#', 'G#', 'Bb', 'C#m', 'G#m', 'Bbm', 'Ebm'],
    difficulty: 'intermediate'
  },
  {
    name: 'Extended Chords',
    description: 'Major and minor seventh variations',
    chords: ['Cmaj7', 'Dmaj7', 'Gmaj7', 'Am7', 'Em7', 'Dm7'],
    difficulty: 'intermediate'
  },
  {
    name: 'Suspended Chords',
    description: 'Sus2 and Sus4 variations',
    chords: ['Asus2', 'Asus4', 'Dsus2', 'Dsus4', 'Esus2', 'Esus4'],
    difficulty: 'intermediate'
  },
  {
    name: 'Jazz Chords',
    description: 'Common jazz chord voicings',
    chords: ['Am9', 'Dm9', 'Cmaj9', 'Gmaj9', 'Bm9'],
    difficulty: 'advanced'
  },
  {
    name: 'Altered Dominants',
    description: 'Altered dominant chord variations',
    chords: ['C7b9', 'G7#5', 'D7b5', 'A7#9', 'E7b13'],
    difficulty: 'advanced'
  },
  {
    name: 'Diminished Chords',
    description: 'Diminished seventh chord practice',
    chords: ['Cdim7', 'Ddim7', 'Edim7', 'Bdim7'],
    difficulty: 'advanced'
  },
  {
    name: 'Augmented Chords',
    description: 'Augmented chord variations',
    chords: ['Caug7', 'Daug7', 'Eaug7', 'Gaug7'],
    difficulty: 'advanced'
  },
  {
    name: 'Add9 Chords',
    description: 'Major chords with added 9th',
    chords: ['Cadd9', 'Dadd9', 'Eadd9', 'Gadd9'],
    difficulty: 'intermediate'
  },
  {
    name: 'Complex Extensions',
    description: 'Advanced chord extensions',
    chords: ['Cmaj13', 'Dmaj13', 'Emaj13', 'Gmaj13', 'Dm11', 'Em11', 'Bm11'],
    difficulty: 'advanced'
  }
];