export interface ChordDefinition {
  name: string;
  positions: number[];
  fingers: number[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ChordSet {
  name: string;
  description: string;
  chords: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface PracticeSettings {
  tempo: number;
  numberOfChords: number;
  scale: string;
  progression: string;
  barsPerChord: number;
}

export interface ChordCountOption {
  value: number;
  label: string;
}

export interface Scale {
  name: string;
  chords: string[];
  progressions: ChordProgression[];
}

export interface ChordProgression {
  name: string;
  description: string;
  pattern: string[];
}