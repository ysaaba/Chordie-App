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
  progressions: majorProgressions.map(prog => ({
    ...prog,
    pattern: resolveProgressionPattern({ name: `${tonic} Major`, chords, progressions: [] }, prog.pattern)
  }))
});

const createMinorScale = (
  tonic: string,
  chords: string[]
): Scale => ({
  name: `${tonic} Minor`,
  chords,
  progressions: minorProgressions.map(prog => ({
    ...prog,
    pattern: resolveProgressionPattern({ name: `${tonic} Minor`, chords, progressions: [] }, prog.pattern)
  }))
});

export const scales: Scale[] = [
  createMajorScale('C', ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']),
  createMajorScale('G', ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim']),
  createMajorScale('D', ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim']),
  createMajorScale('A', ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim']),
  createMajorScale('E', ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim']),
  createMinorScale('A', ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']),
  createMinorScale('E', ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D']),
  createMinorScale('D', ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C']),
  createMinorScale('B', ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A']),
  createMinorScale('F#', ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E']),
  createMajorScale('F', ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim']),
  createMajorScale('Bb', ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim']),
  createMinorScale('G', ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F']),
  createMinorScale('C', ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb']),
  createMinorScale('F', ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'])
];