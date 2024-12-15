export interface MetronomeSettings {
  volume: number;
  tempo: number;
}

export interface MetronomeSound {
  frequency: number;
  gain: number;
  duration: number;
}

export interface MetronomeConfig {
  FREQUENCY: number;
  BASE_GAIN: number;
  NOTE_DURATION: number;
  SCHEDULE_AHEAD: number;
}