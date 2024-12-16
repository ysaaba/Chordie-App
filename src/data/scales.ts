import { Scale } from '../types/chord';
import { majorProgressions } from './progressions/major';
import { minorProgressions } from './progressions/minor';
import { resolveProgressionPattern } from '../utils/chord/progression';

const createMajorScale = (
  tonic: string,
  chords: string[]
): Scale => ({
  name: `${tonic} Major`,
  chords,
  progressions: majorProgressions
});

const createMinorScale = (
  tonic: string,
  chords: string[]
): Scale => ({
  name: `${tonic} Minor`,
  chords,
  progressions: minorProgressions
});

export const scales: Scale[] = [
  // Natural major scales (no sharps/flats in name)
  createMajorScale('C', ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']),
  createMajorScale('G', ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#/Gbdim']),
  createMajorScale('D', ['D', 'Em', 'F#m/Gbm', 'G', 'A', 'Bm', 'C#/Dbdim']),
  createMajorScale('A', ['A', 'Bm', 'C#m/Dbm', 'D', 'E', 'F#m/Gbm', 'G#/Abdim']),
  createMajorScale('E', ['E', 'F#m/Gbm', 'G#m/Abm', 'A', 'B', 'C#m/Dbm', 'D#/Ebdim']),
  createMajorScale('F', ['F', 'Gm', 'Am', 'A#/Bb', 'C', 'Dm', 'Edim']),
  
  // Major scales with sharps/flats
  createMajorScale('A#/Bb', ['A#/Bb', 'Cm', 'Dm', 'D#/Eb', 'F', 'Gm', 'Adim']),
  createMajorScale('D#/Eb', ['D#/Eb', 'Fm', 'Gm', 'G#/Ab', 'A#/Bb', 'Cm', 'Ddim']),
  createMajorScale('G#/Ab', ['G#/Ab', 'A#m/Bbm', 'Cm', 'C#/Db', 'D#/Eb', 'Fm', 'Gdim']),
  createMajorScale('C#/Db', ['C#/Db', 'D#m/Ebm', 'Fm', 'F#/Gb', 'G#/Ab', 'A#m/Bbm', 'Cdim']),
  createMajorScale('F#/Gb', ['F#/Gb', 'G#m/Abm', 'A#m/Bbm', 'B', 'C#/Db', 'D#m/Ebm', 'Fdim']),
  createMajorScale('B', ['B', 'C#m/Dbm', 'D#m/Ebm', 'E', 'F#/Gb', 'G#m/Abm', 'A#/Bbdim']),
  
  // Natural minor scales (no sharps/flats in name)
  createMinorScale('A', ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']),
  createMinorScale('E', ['Em', 'F#/Gbdim', 'G', 'Am', 'Bm', 'C', 'D']),
  createMinorScale('B', ['Bm', 'C#/Dbdim', 'D', 'Em', 'F#m/Gbm', 'G', 'A']),
  createMinorScale('F#/Gb', ['F#m/Gbm', 'G#/Abdim', 'A', 'Bm', 'C#m/Dbm', 'D', 'E']),
  createMinorScale('C#/Db', ['C#m/Dbm', 'D#/Ebdim', 'E', 'F#m/Gbm', 'G#m/Abm', 'A', 'B']),
  
  // Minor scales with sharps/flats
  createMinorScale('G', ['Gm', 'Adim', 'A#/Bb', 'Cm', 'Dm', 'D#/Eb', 'F']),
  createMinorScale('C', ['Cm', 'Ddim', 'D#/Eb', 'Fm', 'Gm', 'G#/Ab', 'A#/Bb']),
  createMinorScale('F', ['Fm', 'Gdim', 'G#/Ab', 'A#m/Bbm', 'Cm', 'C#/Db', 'D#/Eb']),
  createMinorScale('A#/Bb', ['A#m/Bbm', 'Cdim', 'C#/Db', 'D#m/Ebm', 'Fm', 'F#/Gb', 'G#/Ab']),
  createMinorScale('D#/Eb', ['D#m/Ebm', 'Fdim', 'F#/Gb', 'G#m/Abm', 'A#m/Bbm', 'B', 'C#/Db']),
  createMinorScale('D', ['Dm', 'Edim', 'F', 'Gm', 'Am', 'A#/Bb', 'C']),
  createMinorScale('G#/Ab', ['G#m/Abm', 'A#dim/Bbdim', 'B', 'C#m/Dbm', 'D#m/Ebm', 'E', 'F#/Gb'])
];