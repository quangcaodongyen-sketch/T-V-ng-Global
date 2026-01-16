
class AudioService {
  private context: AudioContext | null = null;

  private initContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Âm thanh khi trả lời đúng (Tiếng chuông vui nhộn)
  playSuccess() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, now); // C5
    oscillator.frequency.exponentialRampToValueAtTime(1046.50, now + 0.1); // C6
    
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    oscillator.connect(gain);
    gain.connect(this.context.destination);

    oscillator.start();
    oscillator.stop(now + 0.3);

    setTimeout(() => {
        if (!this.context) return;
        const osc2 = this.context.createOscillator();
        const gain2 = this.context.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(659.25, now + 0.05); // E5
        gain2.gain.setValueAtTime(0.2, now + 0.05);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc2.connect(gain2);
        gain2.connect(this.context.destination);
        osc2.start(now + 0.05);
        osc2.stop(now + 0.35);
    }, 50);
  }

  // Âm thanh nhắc khéo khi sai (Tiếng trượt nốt xuống hài hước)
  playWrong() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.4);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.4);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(now + 0.4);
  }

  // Âm thanh hài hước (Tiếng lò xo/Boing)
  playFunny() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.2);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.4);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.5);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(now + 0.5);
  }

  // Âm thanh hoàn thành chặng (Fanfare ngắn)
  playLevelUp() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        if (!this.context) return;
        const osc = this.context.createOscillator();
        const g = this.context.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + (i * 0.1));
        g.gain.setValueAtTime(0.1, now + (i * 0.1));
        g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.1) + 0.4);
        osc.connect(g);
        g.connect(this.context.destination);
        osc.start(now + (i * 0.1));
        osc.stop(now + (i * 0.1) + 0.4);
    });
  }
}

export const audioService = new AudioService();
