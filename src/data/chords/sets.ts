import { ChordSet } from '../../types/chord';

export const chordSets: ChordSet[] = [
  {
    name: 'Basic Open Chords',
    description: 'Essential open chord shapes',
    chords: ['A', 'Am', 'C', 'D', 'Dm', 'E', 'Em', 'G'],
    difficulty: 'beginner'
  },
  {
    name: 'Seventh Chords',
    description: 'Basic seventh chord shapes',
    chords: ['A7', 'Am7', 'B7', 'C7', 'D7', 'Dm7', 'E7', 'Em7', 'G7'],
    difficulty: 'beginner'
  },
  {
    name: 'Barre Chords',
    description: 'Major and minor barre chord shapes',
    chords: [
      'F', 'Bm', 
      'F#/Gb', 'G#/Ab', 'A#/Bb', 'C#/Db', 
      'Fm', 'Gm', 'G#m/Abm', 'A#m/Bbm', 'C#m/Dbm', 'D#m/Ebm'
    ],
    difficulty: 'intermediate'
  },
  {
    name: 'Seventh Variations',
    description: 'Major and minor seventh variations',
    chords: [
      'F#7/Gb7', 'G#m7/Abm7', 'C#7/Db7', 'F#m7/Gbm7', 'B7',
      'A#maj7/Bbmaj7', 'D#maj7/Ebmaj7', 'G#maj7/Abmaj7',
      'C#maj7/Dbmaj7', 'F#maj7/Gbmaj7', 'Bmaj7'
    ],
    difficulty: 'intermediate'
  },
  {
    name: 'Suspended Chords',
    description: 'Sus2 and Sus4 variations',
    chords: [
      'Asus2', 'Asus4',
      'Csus2', 'Csus4',
      'Dsus2', 'Dsus4',
      'Esus2', 'Esus4',
      'Fsus2', 'Fsus4',
      'Gsus2', 'Gsus4'
    ],
    difficulty: 'intermediate'
  },
  {
    name: 'Basic Power Chords',
    description: 'Essential power chord shapes',
    chords: ['E5', 'A5', 'D5', 'G5', 'C5', 'F5', 'B5'],
    difficulty: 'beginner'
  },
  {
    name: 'Advanced Power Chords',
    description: 'Sharp and flat power chord variations',
    chords: ['F#5', 'G#5', 'A#5', 'C#5', 'D#5', 'E5_alt', 'A5_alt'],
    difficulty: 'intermediate'
  },
  {
    name: 'Jazz Chords',
    description: 'Common jazz chord voicings',
    chords: [
      'Am9', 'Bm9', 'Cm9', 'Dm9',
      'Em11', 'Fmaj9', 'Gmaj9', 'Dmaj13'
    ],
    difficulty: 'advanced'
  },
  {
    name: 'Diminished Chords',
    description: 'Diminished seventh chord practice',
    chords: ['Cdim7', 'Ddim7', 'Edim7', 'F#dim7', 'G#dim7', 'Bdim7'],
    difficulty: 'advanced'
  },
  {
    name: 'Augmented Chords',
    description: 'Augmented chord variations',
    chords: ['Caug', 'Daug', 'Eaug', 'Faug', 'Gaug', 'Aaug', 'Baug'],
    difficulty: 'advanced'
  },
  {
    name: 'Add9 Chords',
    description: 'Major chords with added 9th',
    chords: ['Cadd9', 'Dadd9', 'Eadd9', 'Fadd9', 'Gadd9', 'Aadd9', 'Badd9'],
    difficulty: 'intermediate'
  },
  {
    name: 'Complex Extensions',
    description: 'Advanced chord extensions',
    chords: [
      'Cmaj13', 'Dmaj13', 'Emaj13', 'Fmaj13', 'Gmaj13',
      'Cm11', 'Dm11', 'Em11', 'Fm11', 'Gm11', 'Am11', 'Bm11'
    ],
    difficulty: 'advanced'
  }
];