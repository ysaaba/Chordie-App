import { ChordDefinition } from '../../types/chord';
import { basicChords } from './basic';
import { seventhChords } from './seventh';
import { barreChords } from './barre';
import { extendedChords } from './extended';
import { suspendedChords } from './suspended';
import { advancedChords } from './advanced';
import { jazzChords } from './jazz';
import { alteredChords } from './altered';
import { diminishedChords } from './diminished';
import { augmentedChords } from './augmented';
import { add9Chords } from './add9';
import { maj13Chords } from './maj13';
import { min11Chords } from './min11';

// Organize chords by category for easier maintenance
export const chordCategories = {
  basic: basicChords,
  seventh: seventhChords,
  barre: barreChords,
  extended: extendedChords,
  suspended: suspendedChords,
  advanced: advancedChords,
  jazz: jazzChords,
  altered: alteredChords,
  diminished: diminishedChords,
  augmented: augmentedChords,
  add9: add9Chords,
  maj13: maj13Chords,
  min11: min11Chords,
} as const;

// Combined chord dictionary for easy lookup
export const chords: Record<string, ChordDefinition> = Object.values(chordCategories).reduce(
  (acc, category) => ({ ...acc, ...category }),
  {}
);