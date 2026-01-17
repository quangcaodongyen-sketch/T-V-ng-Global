import React, { useState, useEffect, useCallback } from 'react';
import { Unit, ExerciseType, Question } from '../types';
import { CHEERING_PHRASES, ENCOURAGING_PHRASES } from '../constants';
import { audioService } from '../services/audioService';
import AITutor from './AITutor';

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

  const firework = () => {
    // @ts-ignore
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899']
    });
  };

  const generateStageQuestions = useCallback((currentStage: number) => {
    let baseVocab = [...unit.vocab];
    while (baseVocab.length < QUESTIONS_PER_STAGE) {
      baseVocab = [...baseVocab, ...unit.vocab];
    }
    const vocabList = baseVocab.sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_STAGE);
    
    const newQuestions: Question[] = [];

    vocabList.forEach((v, idx) => {
      if (currentStage === 1) {
        const distractors = unit.vocab.filter(item => item.word !== v.word).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [v.meaning, ...distractors.map(d => d.meaning)].sort(() => Math.random() - 0.5);
        newQuestions.push({
          id: `stage1-${idx}`,
          type: ExerciseType.MULTIPLE_CHOICE,
          question: `Từ "${v.word}" (${v.pronunciation}) có nghĩa là gì?`,
          options,
          answer: v.meaning,
          explanation: `"${v.word}" = "${v.meaning}"`,
          word: v.word
        });
      } else if (currentStage === 2) {
        const wordClean = v.word.replace(/\s/g, ''); 
        const charIndex = Math.floor(Math.random() * (wordClean.length - 1));
        const missingChar = wordClean[charIndex];
        const displayWord = v.word.split('').map((c, i) => {
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
          question: `Hãy gõ từ tiếng Anh cho nghĩa: "${v.meaning}" (${v.pronunciation})`,
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
    if (stage > 1) {
      audioService.playLevelUp();
    }
  }, [stage, generateStageQuestions]);

  const handleAnswer = (answer: string) => {
    if (feedback) return;
    const currentQ = questions[currentIndex];
    const isCorrect = answer.toLowerCase().trim() === (currentQ.answer as string).toLowerCase().trim();
    
    const vocabItem = unit.vocab.find(v => v.word === currentQ.word);

    if (isCorrect) {
      audioService.playSuccess();
      firework();
      setShowScoreEffect(true);
      setTimeout(() => setShowScoreEffect(false), 1000);
      setTotalScore(s => s + 1);
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
        onFinish(totalScore, mode === 'certificate' ? 100 : TOTAL_STAGES * QUESTIONS_PER_STAGE);
      }
    }
  };

  if (questions.length === 0) return (
    <div className="text-center p-20">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-blue-900 font-bold animate-pulse text-2xl">🚀 Đang nạp thử thách...</p>
    </div>
  );

  const currentQ = questions[currentIndex];
  const totalLimit = mode === 'certificate' ? 100 : TOTAL_STAGES * QUESTIONS_PER_STAGE;

  return (
    <div className="w-full max-w-2xl px-4 py-8 relative">
      {showScoreEffect && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]">
          <span className="text-5xl font-black text-orange-500 animate-score flex items-center gap-2 drop-shadow-lg bg-white/80 px-6 py-2 rounded-full border-4 border-orange-200">
            <i className="fa-solid fa-star"></i> +1!
          </span>
        </div>
      )}

      <div className="flex justify-between mb-8 gap-1">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className="flex-1 flex flex-col items-center">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black shadow-lg transition-all transform ${stage === s ? 'bg-orange-500 text-white scale-110 border-2 border-white' : stage > s ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-400 opacity-50'}`}>
              {stage > s ? <i className="fa-solid fa-check"></i> : s}
            </div>
            <span className={`text-[9px] mt-1 font-black uppercase ${stage >= s ? 'text-blue-700' : 'text-blue-300'}`}>
              {s === 1 ? 'Khởi động' : s === 2 ? 'Tăng tốc' : s === 3 ? 'Siêu cấp' : 'Về đích'}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-black text-blue-600 uppercase bg-white/60 px-4 py-2 rounded-full shadow-sm border border-blue-100">
          Chặng {stage}/4 • Câu {currentIndex + 1} / {QUESTIONS_PER_STAGE}
        </span>
        <div className="flex items-center gap-2 bg-orange-100 px-5 py-2 rounded-full border-2 border-orange-200">
           <i className="fa-solid fa-fire text-orange-500"></i>
           <span className="text-orange-700 font-black">{totalScore} / {totalLimit}</span>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-[2.5rem] shadow-2xl card-3d border-4 border-white min-h-[500px] flex flex-col relative overflow-hidden">
        <div className="text-center mb-8 relative z-10">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 block">Unit {unit.id}: {unit.title}</span>
          <h2 className="text-xl font-black text-blue-900 leading-tight">{currentQ.question}</h2>
        </div>

        <div className="flex-grow flex flex-col justify-center gap-4">
          {currentQ.type === ExerciseType.MULTIPLE_CHOICE && (
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options?.map((opt, i) => {
                const color = ANSWER_COLORS[i % ANSWER_COLORS.length];
                return (
                  <button 
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!feedback}
                    className={`group p-4 rounded-2xl text-left font-bold border-b-4 transition-all transform flex items-center gap-4
                      ${feedback 
                        ? (opt === currentQ.answer ? 'bg-green-500 border-green-700 text-white scale-105' : 'bg-gray-100 border-gray-300 text-gray-400 opacity-50') 
                        : `${color.bg} ${color.shadow} ${color.text} hover:scale-[1.02] active:scale-95`}`}
                  >
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-black bg-white/20">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-lg">{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.type === ExerciseType.FILL_BLANK && (
            <div className="flex flex-col items-center gap-8">
              <input 
                type="text" 
                autoFocus
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAnswer(fillValue)}
                placeholder="..."
                disabled={!!feedback}
                className={`w-full max-w-sm text-center px-6 py-5 rounded-[1.5rem] border-4 outline-none font-black text-3xl uppercase tracking-[0.1em] shadow-inner transition-all
                   ${feedback ? (feedback.isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700') : 'border-blue-200 bg-white focus:border-blue-500 text-blue-900'}`}
              />
              {!feedback && (
                <button 
                  onClick={() => handleAnswer(fillValue)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                  Xác nhận <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              )}
            </div>
          )}
        </div>

        {feedback && (
          <div className={`mt-6 p-6 rounded-[2rem] border-2 transition-all shadow-xl ${feedback.isCorrect ? 'bg-green-50 border-green-200 text-green-700' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>
            <div className="flex items-center gap-4">
              <div className={`text-4xl ${feedback.isCorrect ? 'text-green-500' : 'text-orange-500'}`}>
                <i className={feedback.isCorrect ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark"}></i>
              </div>
              <div className="text-left flex-grow">
                <p className="text-xl font-black">{feedback.text}</p>
                {feedback.explanation && <p className="text-xs font-bold mt-1 opacity-80 italic">{feedback.explanation}</p>}
              </div>
            </div>
            
            {/* Tích hợp AI Tutor */}
            {feedback.word && feedback.meaning && (
              <AITutor word={feedback.word} meaning={feedback.meaning} />
            )}

            <button 
              onClick={nextQuestion}
              className={`mt-4 w-full py-4 rounded-xl font-black text-white shadow-lg transition-all ${feedback.isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}
            >
              Câu tiếp theo <i className="fa-solid fa-chevron-right ml-2"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameEngine;