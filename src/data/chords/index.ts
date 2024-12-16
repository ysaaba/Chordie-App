import { basicChords } from './basic';
import { extendedChords } from './extended';
import { add9Chords } from './add9';
import { advancedChords } from './advanced';
import { alteredChords } from './altered';
import { augmentedChords } from './augmented';
import { diminishedChords } from './diminished';
import { maj13Chords } from './maj13';
import { min11Chords } from './min11';

export const chordCategories = {
  basic: basicChords,
  extended: extendedChords,
  add9: add9Chords,
  advanced: advancedChords,
  altered: alteredChords,
  augmented: augmentedChords,
  diminished: diminishedChords,
  maj13: maj13Chords,
  min11: min11Chords,
};

export { chordSets } from './sets';
export const chords = {
  ...basicChords,
  ...extendedChords,
  ...add9Chords,
  ...advancedChords,
  ...alteredChords,
  ...augmentedChords,
  ...diminishedChords,
  ...maj13Chords,
  ...min11Chords,
};