import { useState, useCallback, useMemo } from 'react';
import { ChordDefinition } from '../types/chord';
import { ChordSelectionState } from '../types/practice';
import { chords, chordCategories, chordSets } from '../data/chords';
import { scales } from '../data/scales';

export const useChordSelection = () => {
  const [state, setState] = useState<ChordSelectionState>({
    selectedSetId: null,
    selectedScale: '',
    selectedProgression: '',
  });

  const availableChords = useMemo((): ChordDefinition[] => {
    // If we have a scale selected
    if (state.selectedScale) {
      const scale = scales.find(s => s.name === state.selectedScale);
      if (scale) {
        // If we have a progression selected, use those chords
        if (state.selectedProgression) {
          const progression = scale.progressions.find(p => p.name === state.selectedProgression);
          if (progression) {
            return progression.pattern.map(numeral => {
              const index = {
                'i': 0, 'I': 0,
                'ii': 1, 'II': 1,
                'iii': 2, 'III': 2,
                'iv': 3, 'IV': 3,
                'v': 4, 'V': 4,
                'vi': 5, 'VI': 5,
                'vii': 6, 'VII': 6
              }[numeral];
              const chordName = scale.chords[index];
              return chords[chordName];
            }).filter((chord): chord is ChordDefinition => chord !== undefined);
          }
        }
        // Otherwise use all chords from the scale
        return scale.chords.map(chordName => chords[chordName])
          .filter((chord): chord is ChordDefinition => chord !== undefined);
      }
    }

    // If we have a chord set selected
    if (state.selectedSetId) {
      const set = chordSets.find(s => s.name === state.selectedSetId);
      if (set) {
        // Map each chord name in the set to its definition
        return set.chords
          .map(chordName => chords[chordName])
          .filter((chord): chord is ChordDefinition => chord !== undefined);
      }
    }

    // For 'all' mode, combine all chords from all categories
    return Object.values(chordCategories).flatMap(category => Object.values(category));
  }, [state.selectedSetId, state.selectedScale, state.selectedProgression]);

  const selectChordSet = useCallback((setId: string | null) => {
    setState({
      selectedSetId: setId,
      selectedScale: '',
      selectedProgression: '',
    });
  }, []);

  const selectScale = useCallback((scale: string | null) => {
    setState(prev => ({
      selectedSetId: null,
      selectedScale: scale || '',
      selectedProgression: scale ? prev.selectedProgression : '',
    }));
  }, []);

  const selectProgression = useCallback((progression: string | null) => {
    setState(prev => ({
      ...prev,
      selectedProgression: progression || '',
    }));
  }, []);

  return {
    selection: state,
    availableChords,
    selectChordSet,
    selectScale,
    selectProgression,
  };
};