import { useState, useCallback, useEffect } from 'react';
import { ChordDefinition } from '../types/chord';

interface UseChordProgressionProps {
  chords: ChordDefinition[];
  settings: {
    tempo: number;
    numberOfChords: number;
    barsPerChord: number;
  };
  shuffle: boolean;
}

export const useChordProgression = ({
  chords,
  settings,
  shuffle,
}: UseChordProgressionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentIndices] = useState<Set<number>>(new Set());
  const [history, setHistory] = useState<number[]>([0]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [currentBarCount, setCurrentBarCount] = useState(0);

  // Reset state when chords array changes
  useEffect(() => {
    setCurrentIndex(0);
    setHistory([0]);
    setHistoryIndex(0);
    setCurrentBarCount(0);
    recentIndices.clear();
  }, [chords]);

  const getNextIndex = useCallback(() => {
    if (!shuffle || chords.length <= 1) {
      return (currentIndex + 1) % Math.max(chords.length, 1);
    }

    const availableIndices = Array.from(
      { length: chords.length },
      (_, i) => i
    ).filter(i => !recentIndices.has(i) && i !== currentIndex);

    if (availableIndices.length === 0) {
      recentIndices.clear();
      return Math.floor(Math.random() * chords.length);
    }

    return availableIndices[Math.floor(Math.random() * availableIndices.length)];
  }, [currentIndex, chords.length, shuffle, recentIndices]);

  const handleNextChord = useCallback(() => {
    if (chords.length === 0) return;

    // Increment bar count
    const newBarCount = currentBarCount + 1;
    setCurrentBarCount(newBarCount);

    // Only change chord if we've reached the desired number of bars
    if (newBarCount >= settings.barsPerChord) {
      const nextIndex = getNextIndex();
      setCurrentIndex(nextIndex);
      setCurrentBarCount(0);

      if (shuffle) {
        recentIndices.add(nextIndex);
        if (recentIndices.size > Math.min(3, chords.length - 1)) {
          recentIndices.delete(Array.from(recentIndices)[0]);
        }
      }

      setHistory(prev => [...prev.slice(0, historyIndex + 1), nextIndex]);
      setHistoryIndex(prev => prev + 1);
    }
  }, [
    chords.length,
    getNextIndex,
    shuffle,
    historyIndex,
    recentIndices,
    currentBarCount,
    settings.barsPerChord
  ]);

  const handleManualNext = useCallback(() => {
    if (chords.length === 0) return;
    setCurrentBarCount(0);
    handleNextChord();
  }, [chords.length, handleNextChord]);

  const handleManualPrevious = useCallback(() => {
    if (historyIndex <= 0 || chords.length === 0) return;
    setHistoryIndex(prev => prev - 1);
    setCurrentIndex(history[historyIndex - 1]);
    setCurrentBarCount(0);
  }, [historyIndex, history, chords.length]);

  return {
    currentChord: chords.length > 0 ? chords[currentIndex] : null,
    handleNextChord,
    handleManualNext,
    handleManualPrevious,
    isPlaying,
    setIsPlaying,
    currentBarCount,
  };
};