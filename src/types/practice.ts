export type PracticeMode = 'all' | 'sets' | 'scales';

export interface PracticeModeState {
  mode: PracticeMode;
  shuffleEnabled: boolean;
}

export interface PracticeSessionConfig {
  tempo: number;
  numberOfChords: number;
  repeatEnabled: boolean;
}

export interface ChordSelectionState {
  selectedSetIds: string[];
  selectedScale: string;
  selectedProgression: string;
}

export interface BarsPerChordOption {
  value: number;
  label: string;
}