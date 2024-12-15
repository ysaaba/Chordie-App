import { useState, useCallback, useMemo } from 'react';
import { ChordDefinition } from '../types/chord';
import { ChordSelectionState } from '../types/practice';
import { chords, chordSets } from '../data/chords';
import { scales } from '../data/scales';

export const useChordSelection = () => {
  const [state, setState] = useState<ChordSelectionState>({
    selectedSetId: null,
    selectedScale: '',
    selectedProgression: '',
  });

  const availableChords = useMemo((): ChordDefinition[] => {
    if (state.selectedScale) {
      const scale = scales.find(s => s.name === state.selectedScale);
      if (scale) {
        if (state.selectedProgression) {
          const progression = scale.progressions.find(p => p.name === state.selectedProgression);
          return progression ? progression.pattern.map(id => chords[id]).filter(Boolean) : [];
        }
        return scale.chords.map(id => chords[id]).filter(Boolean);
      }
    }
    
    if (state.selectedSetId) {
      const set = chordSets.find(s => s.name === state.selectedSetId);
      return set ? set.chords.map(id => chords[id]).filter(Boolean) : [];
    }

    return Object.values(chords);
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