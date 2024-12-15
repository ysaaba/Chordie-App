import { METRONOME_CONFIG } from './constants';
import type { MetronomeSound } from '../../types/metronome';

export const getMetronomeSound = (volume: number, isAccent: boolean = false): MetronomeSound => ({
  frequency: isAccent ? METRONOME_CONFIG.ACCENT_FREQUENCY : METRONOME_CONFIG.MAIN_FREQUENCY,
  gain: METRONOME_CONFIG.BASE_GAIN * volume,
  duration: METRONOME_CONFIG.NOTE_DURATION,
});