
class AudioService {
  private context: AudioContext | null = null;

  private initContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * Âm thanh khi trả lời ĐÚNG: "Ding-Ding!" vui vẻ
   * Tích cực, ngắn (0.6s), tạo cảm giác phần thưởng.
   */
  playSuccess() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    
    // Nốt thứ nhất (Thanh thoát)
    const osc1 = this.context.createOscillator();
    const gain1 = this.context.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now); // E5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc1.connect(gain1);
    gain1.connect(this.context.destination);
    osc1.start(now);
    osc1.stop(now + 0.4);

    // Nốt thứ hai (Tạo cảm giác leng keng)
    const osc2 = this.context.createOscillator();
    const gain2 = this.context.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1046.50, now + 0.1); // C6
    gain2.gain.setValueAtTime(0, now + 0.1);
    gain2.gain.linearRampToValueAtTime(0.15, now + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
    osc2.connect(gain2);
    gain2.connect(this.context.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.6);
  }

  /**
   * Âm thanh khi trả lời SAI: "Boop" trầm nhẹ nhàng
   * Không gắt, mang tính nhắc nhở "Hãy thử lại".
   */
  playWrong() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    // Dùng sóng Triangle để âm thanh mềm mại hơn Sawtooth
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    // Trượt nốt xuống nhẹ nhàng
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.3);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.4);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(now + 0.4);
  }

  /**
   * Âm thanh hoàn thành chặng: "Fanfare" tưng bừng
   */
  playLevelUp() {
    this.initContext();
    if (!this.context) return;
    
    const now = this.context.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // Đô - Mi - Sol - Đô (C5-C6)
    
    notes.forEach((freq, i) => {
        if (!this.context) return;
        const osc = this.context.createOscillator();
        const g = this.context.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + (i * 0.1));
        
        g.gain.setValueAtTime(0, now + (i * 0.1));
        g.gain.linearRampToValueAtTime(0.1, now + (i * 0.1) + 0.05);
        g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.1) + 0.3);
        
        osc.connect(g);
        g.connect(this.context.destination);
        osc.start(now + (i * 0.1));
        osc.stop(now + (i * 0.1) + 0.3);
    });
