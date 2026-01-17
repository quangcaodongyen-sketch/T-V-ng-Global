
class AudioService {
  private context: AudioContext | null = null;

  private initContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * Âm thanh khi trả lời ĐÚNG: Ngẫu nhiên các âm thanh tích cực
   */
  playSuccess() {
    this.initContext();
    if (!this.context) return;
    
    const variations = ['ding', 'chime', 'clap', 'sparkle'];
    const choice = variations[Math.floor(Math.random() * variations.length)];

    switch (choice) {
      case 'ding': this.playDing(); break;
      case 'chime': this.playChime(); break;
      case 'clap': this.playClap(); break;
      case 'sparkle': this.playSparkle(); break;
      default: this.playDing();
    }
  }

  private playDing() {
    const now = this.context!.currentTime;
    const osc = this.context!.createOscillator();
    const g = this.context!.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.1); // E6
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.2, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.connect(g);
    g.connect(this.context!.destination);
    osc.start();
    osc.stop(now + 0.4);
  }

  private playChime() {
    const now = this.context!.currentTime;
    [1046.50, 1318.51, 1567.98].forEach((freq, i) => {
      const osc = this.context!.createOscillator();
      const g = this.context!.createGain();
      osc.frequency.setValueAtTime(freq, now + i * 0.05);
      g.gain.setValueAtTime(0, now + i * 0.05);
      g.gain.linearRampToValueAtTime(0.1, now + i * 0.05 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.3);
      osc.connect(g);
      g.connect(this.context!.destination);
      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + 0.3);
    });
  }

  private playClap() {
    const now = this.context!.currentTime;
    for(let j=0; j<3; j++) {
      const time = now + j * 0.07;
      const osc = this.context!.createOscillator();
      const g = this.context!.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150 + Math.random() * 50, time);
      g.gain.setValueAtTime(0.1, time);
      g.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
      osc.connect(g);
      g.connect(this.context!.destination);
      osc.start(time);
      osc.stop(time + 0.05);
    }
  }

  private playSparkle() {
    const now = this.context!.currentTime;
    for(let i=0; i<8; i++) {
      const time = now + i * 0.04;
      const osc = this.context!.createOscillator();
      const g = this.context!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2000 + Math.random() * 1000, time);
      g.gain.setValueAtTime(0.05, time);
      g.gain.exponentialRampToValueAtTime(0.01, time + 0.03);
      osc.connect(g);
      g.connect(this.context!.destination);
      osc.start(time);
      osc.stop(time + 0.03);
    }
  }

  /**
   * Âm thanh khi trả lời SAI: "Hmm..." nhẹ nhàng.
   */
  playWrong() {
    this.initContext();
    if (!this.context) return;
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const g = this.context.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(165, now + 0.3);
    g.gain.setValueAtTime(0.1, now);
    g.gain.linearRampToValueAtTime(0, now + 0.4);
    osc.connect(g);
    g.connect(this.context.destination);
    osc.start();
    osc.stop(now + 0.4);
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
      osc.frequency.setValueAtTime(freq, now + (i * 0.1));
      g.gain.setValueAtTime(0, now + (i * 0.1));
      g.gain.linearRampToValueAtTime(0.1, now + (i * 0.1) + 0.05);
      g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.1) + 0.4);
      osc.connect(g);
      g.connect(this.context!.destination);
      osc.start(now + (i * 0.1));
      osc.stop(now + (i * 0.1) + 0.4);
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
