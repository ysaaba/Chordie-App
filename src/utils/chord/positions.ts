// Utility functions for chord position calculations

/**
 * Determines if a chord should show the starting fret marker
 * Only applies to chords starting from the 4th fret and higher
 */
export const shouldShowStartingFret = (positions: number[]): boolean => {
  const lowestFret = Math.min(...positions.filter(pos => pos > 0));
  return lowestFret >= 4;
};

/**
 * Gets the starting fret number for a chord
 * Returns 1 for chords below 4th fret
 */
export const getStartingFret = (positions: number[]): number => {
  if (!shouldShowStartingFret(positions)) {
    return 1;
  }
  return Math.min(...positions.filter(pos => pos > 0));
};

/**
 * Adjusts positions relative to the starting fret
 * Only applies adjustment for chords starting from 4th fret and higher
 */
export const getAdjustedPositions = (positions: number[]): number[] => {
  if (!shouldShowStartingFret(positions)) {
    return positions;
  }
  
  const startFret = getStartingFret(positions);
  return positions.map(pos => pos > 0 ? pos - startFret + 1 : pos);
};