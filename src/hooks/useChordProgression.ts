import { useState, useCallback, useEffect, useMemo } from 'react';
import { ChordDefinition, PracticeSettings } from '../types/chord';

interface UseChordProgressionProps {
  chords: ChordDefinition[];
  settings: PracticeSettings;
  shuffle: boolean;
  mode: 'all' | 'sets' | 'scales';
  hasProgression?: boolean;
}

export const useChordProgression = ({
  chords,
  settings,
  shuffle,
  mode,
  hasProgression = false
}: UseChordProgressionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBarCount, setCurrentBarCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle shuffling and chord limiting based on mode
  const practiceChords = useMemo(() => {
    // Don't shuffle if there's a progression selected
    if (mode === 'scales' && hasProgression) {
      return chords;
    }

    // For scales without progression, just shuffle if enabled
    if (mode === 'scales') {
      return shuffle ? 
        [...chords].sort(() => Math.random() - 0.5) : 
        chords;
    }

    // For 'all' mode and 'sets' mode:
    const availableChords = shuffle ? 
      [...chords].sort(() => Math.random() - 0.5) : 
      chords;

    // Limit number of chords for both 'all' and 'sets' modes
    return availableChords.slice(0, settings.numberOfChords);

  }, [chords, settings.numberOfChords, shuffle, mode, hasProgression]);

  const handleNextChord = useCallback(() => {
    if (currentBarCount + 1 >= settings.barsPerChord) {
      setCurrentBarCount(0);
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % practiceChords.length;
        setHistory(prev => [...prev, nextIndex]);
        setHistoryIndex(prev => prev + 1);
        return nextIndex;
      });
    } else {
      setCurrentBarCount(prev => prev + 1);
    }
  }, [currentBarCount, settings.barsPerChord, practiceChords.length]);

  // Reset when chords change
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentBarCount(0);
    setHistory([0]);
    setHistoryIndex(0);
  }, [practiceChords]);

  const handleManualNext = useCallback(() => {
    if (practiceChords.length === 0) return;
    setCurrentBarCount(0);
    handleNextChord();
  }, [practiceChords.length, handleNextChord]);

  const handleManualPrevious = useCallback(() => {
    if (historyIndex <= 0 || practiceChords.length === 0) return;
    setHistoryIndex(prev => prev - 1);
    setCurrentIndex(history[historyIndex - 1]);
    setCurrentBarCount(0);
  }, [historyIndex, history, practiceChords.length]);

  return {
    currentChord: practiceChords.length > 0 ? practiceChords[currentIndex] : null,
    handleNextChord,
    handleManualNext,
    handleManualPrevious,
    isPlaying,
    setIsPlaying,
    currentBarCount,
  };
};