import { ChordProgression } from '../../types/chord';

export const minorProgressions: ChordProgression[] = [
  {
    name: 'i-iv-V',
    description: 'Minor progression',
    pattern: ['i', 'iv', 'V']
  },
  {
    name: 'i-VI-VII',
    description: 'Natural minor progression',
    pattern: ['i', 'VI', 'VII']
  },
  {
    name: 'i-iv-v',
    description: 'Minor blues progression',
    pattern: ['i', 'iv', 'v']
  },
  {
    name: 'i-VI-III-VII',
    description: 'Andalusian cadence',
    pattern: ['i', 'VI', 'III', 'VII']
  },
  {
    name: 'i-VII-VI-V',
    description: 'Minor descending progression',
    pattern: ['i', 'VII', 'VI', 'V']
  },
  {
    name: 'i-VI-iv-V',
    description: 'Minor pop progression',
    pattern: ['i', 'VI', 'iv', 'V']
  },
  {
    name: 'i-iv-VII-III',
    description: 'Minor circular progression',
    pattern: ['i', 'iv', 'VII', 'III']
  },
  {
    name: 'i-v-VI-V',
    description: 'Minor dramatic progression',
    pattern: ['i', 'v', 'VI', 'V']
  },
  // New progressions added below
  {
    name: 'i-VII-VI-v-iv-III',
    description: 'Minor descending sequence',
    pattern: ['i', 'VII', 'VI', 'v', 'iv', 'III']
  },
  {
    name: 'i-VI-III-iv-v-i',
    description: 'Minor journey progression',
    pattern: ['i', 'VI', 'III', 'iv', 'v', 'i']
  },
  {
    name: 'i-iv-i-V-VI-iv-V',
    description: 'Extended minor pop progression',
    pattern: ['i', 'iv', 'i', 'V', 'VI', 'iv', 'V']
  },
  {
    name: 'i-III-VI-iv-v-i',
    description: 'Minor storytelling progression',
    pattern: ['i', 'III', 'VI', 'iv', 'v', 'i']
  },
  {
    name: 'i-v-iv-VII-III-VI-v',
    description: 'Epic minor progression',
    pattern: ['i', 'v', 'iv', 'VII', 'III', 'VI', 'v']
  }
];