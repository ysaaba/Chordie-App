import { ChordProgression } from '../../types/chord';

export const majorProgressions: ChordProgression[] = [
  {
    name: 'I-IV-V',
    description: 'Classic major progression',
    pattern: ['I', 'IV', 'V']
  },
  {
    name: 'I-V-vi-IV',
    description: 'Pop progression',
    pattern: ['I', 'V', 'vi', 'IV']
  },
  {
    name: 'ii-V-I',
    description: 'Jazz progression',
    pattern: ['ii', 'V', 'I']
  },
  {
    name: 'vi-IV-I-V',
    description: 'Emotional progression',
    pattern: ['vi', 'IV', 'I', 'V']
  },
  {
    name: 'I-vi-IV-V',
    description: '50s progression',
    pattern: ['I', 'vi', 'IV', 'V']
  },
  {
    name: 'I-V-vi-iii-IV-I-IV-V',
    description: 'Royal progression',
    pattern: ['I', 'V', 'vi', 'iii', 'IV', 'I', 'IV', 'V']
  },
  {
    name: 'I-iii-IV-V',
    description: 'Simple ascending progression',
    pattern: ['I', 'iii', 'IV', 'V']
  },
  {
    name: 'I-IV-ii-V',
    description: 'Jazz turnaround',
    pattern: ['I', 'IV', 'ii', 'V']
  },
  // New progressions added below
  {
    name: 'I-vi-ii-V-I',
    description: 'Extended jazz progression',
    pattern: ['I', 'vi', 'ii', 'V', 'I']
  },
  {
    name: 'I-IV-vi-V-IV-I',
    description: 'Modern pop progression',
    pattern: ['I', 'IV', 'vi', 'V', 'IV', 'I']
  },
  {
    name: 'I-iii-vi-IV-ii-V-I',
    description: 'Circle progression',
    pattern: ['I', 'iii', 'vi', 'IV', 'ii', 'V', 'I']
  },
  {
    name: 'I-V-vi-iii',
    description: 'Alternative rock progression',
    pattern: ['I', 'V', 'vi', 'iii']
  },
  {
    name: 'I-IV-I-V-vi-IV-V',
    description: 'Extended pop progression',
    pattern: ['I', 'IV', 'I', 'V', 'vi', 'IV', 'V']
  }
];