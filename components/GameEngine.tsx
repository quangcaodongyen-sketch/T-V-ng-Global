
import React, { useState, useEffect, useCallback } from 'react';
import { Unit, ExerciseType, Question } from '../types';
import { CHEERING_PHRASES, ENCOURAGING_PHRASES } from '../constants';
import { audioService } from '../services/audioService';
import AITutor from './AITutor';

// Khai báo confetti là biến toàn cục
declare var confetti: any;

interface GameEngineProps {
  unit: Unit;
  mode: 'free' | 'certificate';
  onFinish: (score: number, total: number) => void;
}

const ANSWER_COLORS = [
  { bg: 'bg-gradient-to-br from-blue-500 to-indigo-600', shadow: 'border-blue-700', text: 'text-white' },
  { bg: 'bg-gradient-to-br from-green-500 to-emerald-600', shadow: 'border-green-700', text: 'text-white' },
  { bg: 'bg-gradient-to-br from-orange-500 to-amber-600', shadow: 'border-orange-700', text: 'text-white' },
  { bg: 'bg-gradient-to-br from-pink-500 to-rose-600', shadow: 'border-pink-700', text: 'text-white' },
];

const GameEngine: React.FC<GameEngineProps> = ({ unit, mode, onFinish }) => {
  const [stage, setStage] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string; explanation?: string; word?: string; meaning?: string } | null>(null);
  const [fillValue, setFillValue] = useState('');
  const [showScoreEffect, setShowScoreEffect] = useState(false);

  const QUESTIONS_PER_STAGE = mode === 'certificate' ? 25 : Math.min(10, unit.vocab.length);
  const TOTAL_STAGES = 4;
  const POINTS_PER_ANSWER = 10;

  const firework = () => {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899']
      });
    }
  };

  const generateStageQuestions = useCallback((currentStage: number) => {
    if (!unit.vocab || unit.vocab.length === 0) return;

    let baseVocab = [...unit.vocab];
    while (baseVocab.length < QUESTIONS_PER_STAGE) {
      baseVocab = [...baseVocab, ...unit.vocab];
    }
    const vocabList = baseVocab.sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_STAGE);
    
    const newQuestions: Question[] = [];

    vocabList.forEach((v, idx) => {
      if (currentStage === 1) {
        const distractors = unit.vocab.filter(item => item.word !== v.word).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = Array.from(new Set([v.meaning, ...distractors.map(d => d.meaning)])).sort(() => Math.random() - 0.5);
        newQuestions.push({
          id: `stage1-${idx}`,
          type: ExerciseType.MULTIPLE_CHOICE,
          question: `"${v.word}" (${v.pronunciation}) có nghĩa là gì?`,
          options,
          answer: v.meaning,
          explanation: `"${v.word}" = "${v.meaning}"`,
          word: v.word
        });
      } else if (currentStage === 2) {
        const wordClean = v.word.replace(/\s/g, ''); 
        const charIndex = Math.floor(Math.random() * (wordClean.length - 1));
        const missingChar = wordClean[charIndex];
        const displayWord = v.word.split('').map((c) => {
           if (c.toLowerCase() === missingChar.toLowerCase()) return '_';
           return c;
        }).join('');

        newQuestions.push({
          id: `stage2-${idx}`,
          type: ExerciseType.FILL_BLANK,
          question: `Điền ký tự thiếu: ${displayWord} (${v.meaning})`,
          answer: missingChar,
          explanation: `Từ đúng là "${v.word}"`,
          word: v.word
        });
      } else if (currentStage === 3) {
        const wrongSpelling = v.word.length > 4 
          ? v.word.replace(/[aeiou]/, (m) => m === 'a' ? 'e' : m === 'e' ? 'i' : 'a') 
          : v.word + "s";
        const options = [v.word, wrongSpelling].sort(() => Math.random() - 0.5);
        newQuestions.push({
          id: `stage3-${idx}`,
          type: ExerciseType.MULTIPLE_CHOICE,
          question: `Chọn cách viết ĐÚNG CHÍNH TẢ cho: "${v.meaning}"`,
          options,
          answer: v.word,
          explanation: `Cách viết đúng: ${v.word}`,
          word: v.word
        });
      } else {
        newQuestions.push({
          id: `stage4-${idx}`,
          type: ExerciseType.FILL_BLANK,
          question: `Gõ từ tiếng Anh cho nghĩa: "${v.meaning}" (${v.pronunciation})`,
          answer: v.word,
          explanation: `Đáp án: ${v.word}`,
          word: v.word
        });
      }
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
  }, [unit, mode, QUESTIONS_PER_STAGE]);

  useEffect(() => { 
    generateStageQuestions(stage); 
    if (stage > 1) audioService.playLevelUp();
  }, [stage, generateStageQuestions]);

  const handleAnswer = (answer: string) => {
    if (feedback || !questions[currentIndex]) return;
    const currentQ = questions[currentIndex];
    const isCorrect = answer.toLowerCase().trim() === (currentQ.answer as string).toLowerCase().trim();
    const vocabItem = unit.vocab.find(v => v.word === currentQ.word);

    if (isCorrect) {
      audioService.playSuccess();
      firework();
      setShowScoreEffect(true);
      setTimeout(() => setShowScoreEffect(false), 1000);
      setTotalScore(s => s + POINTS_PER_ANSWER);
      setFeedback({ 
        isCorrect: true, 
        text: CHEERING_PHRASES[Math.floor(Math.random() * CHEERING_PHRASES.length)],
        word: currentQ.word,
        meaning: vocabItem?.meaning
      });
    } else {
      audioService.playWrong();
      setFeedback({ 
        isCorrect: false, 
        text: ENCOURAGING_PHRASES[Math.floor(Math.random() * ENCOURAGING_PHRASES.length)], 
        explanation: currentQ.explanation,
        word: currentQ.word,
        meaning: vocabItem?.meaning
      });
    }
  };

  const nextQuestion = () => {
    setFeedback(null);
    setFillValue('');
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      if (stage < TOTAL_STAGES) {
        setStage(s => s + 1);
      } else {
        onFinish(totalScore, (mode === 'certificate' ? 100 : TOTAL_STAGES * QUESTIONS_PER_STAGE) * POINTS_PER_ANSWER);
      }
    }
  };

  // Safe access check to prevent "Cannot read properties of undefined"
  if (questions.length === 0 || !questions[currentIndex]) {
    return (
      <div className="flex flex-col items-center justify-center p-10 glass-panel rounded-3xl animate-pulse">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-bold text-blue-900">Chuẩn bị thử thách...</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="w-full max-w-lg px-4 py-4 relative flex flex-col min-h-[80vh] mobile-card">
      {showScoreEffect && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]">
          <span className="text-6xl font-black text-pink-500 animate-score flex items-center gap-2 drop-shadow-2xl bg-white px-8 py-3 rounded-full border-4 border-pink-100">
            <i className="fa-solid fa-crown text-yellow-400"></i> +10
          </span>
        </div>
      )}

      <div className="flex justify-between mb-4 gap-2">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className="flex-1 flex flex-col items-center">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black shadow-md transition-all ${stage === s ? 'bg-blue-600 text-white scale-110 border-2 border-white' : stage > s ? 'bg-green-500 text-white' : 'bg-blue-50 text-blue-200'}`}>
              {stage > s ? <i className="fa-solid fa-check text-xs"></i> : s}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-black text-blue-600 uppercase bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-50">
          Câu {currentIndex + 1} / {QUESTIONS_PER_STAGE}
        </span>
        <div className="flex items-center gap-2 bg-pink-50 px-4 py-1.5 rounded-full border-2 border-pink-100">
           <i className="fa-solid fa-star text-pink-400 text-xs"></i>
           <span className="text-pink-600 font-black text-sm">{totalScore}</span>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-[2.5rem] shadow-xl border-4 border-white flex flex-col flex-grow relative overflow-hidden">
        <div className="text-center mb-6">
          <span className="text-[8px] font-black text-blue-300 uppercase tracking-widest mb-1 block">Unit {unit.id} • {unit.title}</span>
          <h2 className="text-lg font-black text-blue-900 leading-tight">{currentQ.question}</h2>
        </div>

        <div className="flex-grow flex flex-col justify-center gap-3">
          {currentQ.type === ExerciseType.MULTIPLE_CHOICE && (
            <div className="grid grid-cols-1 gap-2.5">
              {currentQ.options?.map((opt, i) => {
                const color = ANSWER_COLORS[i % ANSWER_COLORS.length];
                return (
                  <button 
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!feedback}
                    className={`group p-4 rounded-2xl text-left font-bold border-b-4 transition-all flex items-center gap-3
                      ${feedback 
                        ? (opt === currentQ.answer ? 'bg-green-500 border-green-700 text-white scale-[1.02]' : 'bg-gray-50 border-gray-200 text-gray-300') 
                        : `${color.bg} ${color.shadow} ${color.text} active:translate-y-1 active:border-b-0`}`}
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-black bg-white/20">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.type === ExerciseType.FILL_BLANK && (
            <div className="flex flex-col items-center gap-6">
              <input 
                type="text" 
                autoFocus
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnswer(fillValue)}
                placeholder="..."
                disabled={!!feedback}
                className="w-full text-center px-6 py-4 rounded-2xl border-4 outline-none font-black text-2xl uppercase tracking-widest transition-all border-blue-100 bg-white focus:border-blue-500 text-blue-900"
              />
              {!feedback && (
                <button 
                  onClick={() => handleAnswer(fillValue)}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black shadow-lg active:translate-y-1"
                >
                  Xác nhận <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              )}
            </div>
          )}
        </div>

        {feedback && (
          <div className={`mt-6 p-5 rounded-3xl border-2 transition-all shadow-lg ${feedback.isCorrect ? 'bg-green-50 border-green-100' : 'bg-pink-50 border-pink-100'}`}>
            <div className="flex items-center gap-3">
              <div className={`text-3xl ${feedback.isCorrect ? 'text-green-500' : 'text-pink-400'}`}>
                <i className={feedback.isCorrect ? "fa-solid fa-circle-check" : "fa-solid fa-circle-info"}></i>
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-blue-900">{feedback.text}</p>
                {feedback.explanation && <p className="text-[10px] font-bold text-blue-400 mt-0.5">{feedback.explanation}</p>}
              </div>
            </div>
            
            {feedback.word && feedback.meaning && <AITutor word={feedback.word} meaning={feedback.meaning} />}

            <button 
              onClick={nextQuestion}
              className={`mt-4 w-full py-3.5 rounded-xl font-black text-white shadow-md ${feedback.isCorrect ? 'bg-green-500' : 'bg-blue-600'}`}
            >
              Tiếp tục <i className="fa-solid fa-chevron-right ml-1"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameEngine;
