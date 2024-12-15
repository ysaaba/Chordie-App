import { useState, useCallback } from 'react';
import { PracticeMode, PracticeModeState } from '../types/practice';

export const usePracticeMode = (initialMode: PracticeMode = 'sets') => {
  const [state, setState] = useState<PracticeModeState>({
    mode: initialMode,
    shuffleEnabled: false,
  });

  const setMode = useCallback((mode: PracticeMode) => {
    setState(prev => ({
      mode,
      shuffleEnabled: mode === 'all' ? true : prev.shuffleEnabled,
    }));
  }, []);

  const toggleShuffle = useCallback(() => {
    setState(prev => ({
      ...prev,
      shuffleEnabled: !prev.shuffleEnabled,
    }));
  }, []);

  return {
    mode: state.mode,
    shuffleEnabled: state.shuffleEnabled,
    setMode,
    toggleShuffle,
  };
};