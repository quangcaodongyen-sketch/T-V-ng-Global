
class AudioService {
  private context: AudioContext | null = null;

  private initContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * Âm thanh khi trả lời ĐÚNG: Ngẫu nhiên giữa các hiệu ứng tích cực
   */
  playSuccess() {
    this.initContext();
    if (!this.context) return;
    
    const types = ['ding', 'claps', 'levelup'];
    const selected = types[Math.floor(Math.random() * types.length)];

    switch (selected) {
      case 'ding':
        this.playDing();
        break;
      case 'claps':
        this.playClaps();
        break;
      case 'levelup':
        this.playSimpleLevelUp();
        break;
      default:
        this.playDing();
    }
  }

  private playDing() {
    const now = this.context!.currentTime;
    const osc = this.context!.createOscillator();
    const gain = this.context!.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1046.50, now); 
    osc.frequency.exponentialRampToValueAtTime(1567.98, now + 0.1);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.connect(gain);
    gain.connect(this.context!.destination);
    osc.start();
    osc.stop(now + 0.5);
  }

  private playClaps() {
    // Giả lập tiếng vỗ tay bằng White Noise lọc thông dải
    const now = this.context!.currentTime;
    const bufferSize = this.context!.sampleRate * 0.3;
    const buffer = this.context!.createBuffer(1, bufferSize, this.context!.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const playClap = (time: number) => {
      const source = this.context!.createBufferSource();
      source.buffer = buffer;
      const filter = this.context!.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      const gain = this.context!.createGain();
      gain.gain.setValueAtTime(0.1, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
      source.connect(filter);
      filter.connect(gain);
      gain.connect(this.context!.destination);
      source.start(time);
    };

    // Tạo 3 tiếng vỗ tay nhanh
    playClap(now);
    playClap(now + 0.08);
    playClap(now + 0.16);
  }

  private playSimpleLevelUp() {
    const now = this.context!.currentTime;
    const notes = [523.25, 659.25, 783.99]; // C, E, G
    notes.forEach((f, i) => {
      const osc = this.context!.createOscillator();
      const gain = this.context!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.08);
      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.1, now + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.2);
      osc.connect(gain);
      gain.connect(this.context!.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.2);
    });
  }

  /**
   * Âm thanh khi trả lời SAI: "Hmm..." nhẹ nhàng, mang tính khích lệ.
   */
  playWrong() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now); 
    osc.frequency.linearRampToValueAtTime(165, now + 0.4); 

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
    gain.gain.linearRampToValueAtTime(0, now + 0.5);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(now + 0.5);
  }

  playLevelUp() {
    this.initContext();
    if (!this.context) return;
    const now = this.context.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.context!.createOscillator();
      const g = this.context!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + (i * 0.15));
      g.gain.setValueAtTime(0, now + (i * 0.15));
      g.gain.linearRampToValueAtTime(0.1, now + (i * 0.15) + 0.05);
      g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.15) + 0.4);
      osc.connect(g);
      g.connect(this.context!.destination);
      osc.start(now + (i * 0.15));
      osc.stop(now + (i * 0.15) + 0.4);
    });
  }

  playClick() {
    this.initContext();
    if (!this.context) return;
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const g = this.context.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    g.gain.setValueAtTime(0.05, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(g);
    g.connect(this.context.destination);
    osc.start();
    osc.stop(now + 0.1);
  }
}

export const audioService = new AudioService();
