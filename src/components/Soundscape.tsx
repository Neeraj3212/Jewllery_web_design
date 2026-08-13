import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };

  const startSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.01, ctx.currentTime);
      mainGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 3); // Soft ambient volume
      mainGain.connect(ctx.destination);
      gainNodeRef.current = mainGain;

      // Warm atmospheric luxury chord frequencies (A major / F#m floating pads: 220Hz, 277.18Hz, 329.63Hz, 440Hz, 554.37Hz)
      const freqs = [220.0, 277.18, 329.63, 440.0, 554.37];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        // Soft sine and triangle blend
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low pass filter for warm analog feel
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

        // Subtle LFO modulation for organic breath
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.15 / freqs.length, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(mainGain);

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio API not supported or blocked by autoplay policy', e);
    }
  };

  const stopSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.5);

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            // Already stopped
          }
        });
        oscillatorsRef.current = [];
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1500);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 bg-black/40 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-[#EAE6DF] hover:text-[#FFF1C5] transition-all duration-300"
      title={isPlaying ? 'Mute Atmosphere' : 'Enable Luxury Soundscape'}
      aria-label="Toggle Soundscape"
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-[#D4AF37]' : 'bg-white/30'}`}></span>
      </span>

      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-white/50 group-hover:text-[#D4AF37]" />
      )}

      <span className="text-[10px] font-medium hidden sm:inline">
        {isPlaying ? 'Sound On' : 'Atmosphere'}
      </span>
    </button>
  );
}
