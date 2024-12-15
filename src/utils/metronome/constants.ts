import type { MetronomeConfig } from '../../types/metronome';

export const METRONOME_CONFIG: MetronomeConfig = {
  MAIN_FREQUENCY: 800,    // Regular beat frequency
  ACCENT_FREQUENCY: 1000, // Purple dot (first beat) frequency
  BASE_GAIN: 0.6,        // Base gain for volume control
  NOTE_DURATION: 0.08,   // Note duration in seconds
  SCHEDULE_AHEAD: 0.1,   // How far ahead to schedule audio
} as const;