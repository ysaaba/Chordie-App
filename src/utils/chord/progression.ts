import { Scale } from '../../types/chord';

const romanNumeralToIndex: Record<string, number> = {
  'i': 0, 'I': 0,
  'ii': 1, 'II': 1,
  'iii': 2, 'III': 2,
  'iv': 3, 'IV': 3,
  'v': 4, 'V': 4,
  'vi': 5, 'VI': 5,
  'vii': 6, 'VII': 6
};

export const resolveProgressionPattern = (scale: Scale, pattern: string[]): string[] => {
  console.log('Resolving pattern:', pattern, 'for scale:', scale.name);
  
  // Handle empty or invalid patterns
  if (!pattern || pattern.length === 0) {
    console.warn('Empty or invalid pattern');
    return [];
  }

  const resolved = pattern.map(numeral => {
    // Clean up the numeral (remove any extra characters)
    const cleanNumeral = numeral.trim();
    const index = romanNumeralToIndex[cleanNumeral];
    
    console.log('Resolving:', cleanNumeral, 'to index:', index);
    
    // If index is undefined, log for debugging
    if (typeof index === 'undefined') {
      console.warn(`Could not resolve roman numeral: ${cleanNumeral}`);
      return null;
    }
    
    // Make sure we have a valid chord at this index
    if (!scale.chords[index]) {
      console.warn(`No chord found at index ${index} for numeral ${cleanNumeral}`);
      return null;
    }
    
    const chord = scale.chords[index];
    console.log('Resolved to chord:', chord);
    return chord;
  }).filter((chord): chord is string => chord !== null);

  console.log('Final resolved progression:', resolved);
  return resolved;
};