import { useState, useEffect, useCallback, useRef } from 'react';
import { getAudioContext } from '../utils/audioContext';
import { scheduleMetronomeNote } from '../utils/metronome/audioScheduler';
import { METRONOME_CONFIG } from '../utils/metronome/constants';

interface MetronomeHookProps {
  tempo: number;
  volume: number;
  isPlaying: boolean;
  beatsPerMeasure: number;
  onMeasureComplete: () => void;
}

export const useMetronome = ({
  tempo,
  volume,
  isPlaying,
  beatsPerMeasure,
  onMeasureComplete,
}: MetronomeHookProps) => {
  const [currentBeat, setCurrentBeat] = useState(0);
  const nextNoteTimeRef = useRef(0);
  const timerIdRef = useRef<number | null>(null);
  const lastBeatTimeRef = useRef(0);

  const scheduleNextBeat = useCallback(() => {
    const context = getAudioContext();
    if (!context) return;

    const secondsPerBeat = 60.0 / tempo;
    const currentTime = context.currentTime;

    // Schedule next beat if enough time has passed
    if (currentTime >= lastBeatTimeRef.current + secondsPerBeat) {
      // The purple dot is the last beat in the measure
      const isPurpleDot = currentBeat === beatsPerMeasure - 1;
      scheduleMetronomeNote(currentBeat, currentTime, volume, isPurpleDot);
      lastBeatTimeRef.current = currentTime;

      setCurrentBeat(prev => {
        const nextBeat = (prev + 1) % beatsPerMeasure;
        if (nextBeat === 0) {
          onMeasureComplete();
        }
        return nextBeat;
      });
    }

    timerIdRef.current = requestAnimationFrame(scheduleNextBeat);
  }, [tempo, beatsPerMeasure, currentBeat, onMeasureComplete, volume]);

  useEffect(() => {
    if (isPlaying) {
      const context = getAudioContext();
      if (context?.state === 'suspended') {
        context.resume();
      }
      lastBeatTimeRef.current = context?.currentTime || 0;
      scheduleNextBeat();
    } else {
      if (timerIdRef.current) {
        cancelAnimationFrame(timerIdRef.current);
      }
      setCurrentBeat(0);
    }

    return () => {
      if (timerIdRef.current) {
        cancelAnimationFrame(timerIdRef.current);
      }
    };
  }, [isPlaying, scheduleNextBeat]);

  return { currentBeat };
};