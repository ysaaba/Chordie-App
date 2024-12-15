import { ChordSet } from '../../types/chord';

export const chordSets: ChordSet[] = [
  {
    name: 'Basic Open Chords',
    description: 'Essential open chord shapes',
    chords: ['A', 'D', 'G', 'C', 'Em', 'Am'],
    difficulty: 'beginner'
  },
  {
    name: 'Seventh Chords',
    description: 'Basic seventh chord shapes',
    chords: ['A7', 'D7', 'G7', 'C7', 'Em7', 'Am7'],
    difficulty: 'beginner'
  },
  {
    name: 'Barre Chords',
    description: 'Major and minor barre chord shapes',
    chords: ['F', 'Bm', 'F#/Gb', 'G#/Ab', 'C#/Db', 'Fm', 'G#m/Abm', 'C#m/Dbm', 'D#m/Ebm'],
    difficulty: 'intermediate'
  },
  {
    name: 'Seventh Variations',
    description: 'Major and minor seventh variations',
    chords: ['Cmaj7', 'F#maj7/Gbmaj7', 'G#maj7/Abmaj7', 'Bmaj7', 'Am7', 'Dm7', 'Em7', 'G#m7/Abm7'],
    difficulty: 'intermediate'
  },
  {
    name: 'Suspended Chords',
    description: 'Sus2 and Sus4 variations',
    chords: ['Asus2', 'Dsus4', 'Esus2', 'Gsus4'],
    difficulty: 'intermediate'
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