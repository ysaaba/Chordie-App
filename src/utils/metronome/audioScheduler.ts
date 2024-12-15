import { getAudioContext } from '../audioContext';
import { getMetronomeSound } from './sounds';

export const scheduleMetronomeNote = (
  beatNumber: number,
  time: number,
  volume: number,
  isPurpleDot: boolean
) => {
  const context = getAudioContext();
  if (!context) return;

  const sound = getMetronomeSound(volume, isPurpleDot);
  
  const osc = context.createOscillator();
  const envelope = context.createGain();

  osc.frequency.value = sound.frequency;
  
  // Configure envelope
  envelope.gain.setValueAtTime(0, time);
  envelope.gain.linearRampToValueAtTime(sound.gain, time + 0.002);
  envelope.gain.exponentialRampToValueAtTime(0.001, time + sound.duration);

  // Connect nodes
  osc.connect(envelope);
  envelope.connect(context.destination);

  // Schedule playback
  osc.start(time);
  osc.stop(time + sound.duration);
};