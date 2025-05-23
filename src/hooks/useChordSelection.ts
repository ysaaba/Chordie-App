import { useState, useCallback, useMemo } from 'react';
import { ChordDefinition } from '../types/chord';
import { ChordSelectionState } from '../types/practice';
import { chords, chordCategories, chordSets } from '../data/chords';
import { scales } from '../data/scales';

export const useChordSelection = () => {
  const [state, setState] = useState<ChordSelectionState>({
    selectedSetIds: [],
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
              if (index === undefined) {
                return undefined;
              }
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
    if (state.selectedSetIds.length > 0) {
      const allChordsFromSets: string[] = [];
      state.selectedSetIds.forEach(setId => {
        const set = chordSets.find(s => s.name === setId);
        if (set) {
          allChordsFromSets.push(...set.chords);
        }
      });
      const uniqueChordNames = Array.from(new Set(allChordsFromSets));
      return uniqueChordNames
        .map(chordName => chords[chordName])
        .filter((chord): chord is ChordDefinition => chord !== undefined);
    }

    // For 'all' mode, combine all chords from all categories
    return Object.values(chordCategories).flatMap(category => Object.values(category));
  }, [state.selectedSetIds, state.selectedScale, state.selectedProgression]);

  const selectChordSet = useCallback((setId: string) => { // setId can no longer be null with multi-select
    setState(prevState => {
      const newSelectedSetIds = prevState.selectedSetIds.includes(setId)
        ? prevState.selectedSetIds.filter(id => id !== setId)
        : [...prevState.selectedSetIds, setId];
      return {
        ...prevState,
        selectedSetIds: newSelectedSetIds,
        selectedScale: '',
        selectedProgression: '',
      };
    });
  }, []);

  const selectScale = useCallback((scale: string | null) => {
    setState(prev => ({
      selectedSetIds: [],
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