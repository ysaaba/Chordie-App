import { isBrowser } from './environment';

// Singleton AudioContext instance
let audioContext: AudioContext | null = null;

export const getAudioContext = () => {
  if (!isBrowser) return null;
  
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};

export const createMetronomeOscillator = (
  context: AudioContext,
  frequency: number,
  startTime: number,
  duration: number = 0.1
) => {
  const osc = context.createOscillator();
  const envelope = context.createGain();

  osc.frequency.value = frequency;
  envelope.gain.value = 0.5;

  // Shape the sound envelope
  envelope.gain.setValueAtTime(0, startTime);
  envelope.gain.linearRampToValueAtTime(0.5, startTime + 0.005);
  envelope.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  osc.connect(envelope);
  envelope.connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + duration);
};