import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AITutorProps {
  word: string;
  meaning: string;
}

const AITutor: React.FC<AITutorProps> = ({ word, meaning }) => {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Bạn là trợ giảng Tiếng Anh vui tính của Thầy Thành. 
        Hãy giải thích cách dùng từ "${word}" (nghĩa là ${meaning}) 
        và đặt 2 ví dụ cực kỳ gần gũi với học sinh THCS Việt Nam. 
        Trả lời ngắn gọn, dùng emoji sinh động.`,
      });
      setSuggestion(response.text);
    } catch (error) {
      setSuggestion("Ối, AI đang bận một chút, bạn thử lại sau nhé! 😅");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-100 relative overflow-hidden">
      {!suggestion ? (
        <button 
          onClick={askAI}
          disabled={loading}
          className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
        >
          {loading ? (
            <i className="fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="fa-solid fa-robot animate-bounce"></i>
          )}
          Nhờ AI Tutor giải thích thêm về từ này?
        </button>
      ) : (
        <div className="text-sm text-indigo-900 leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-start mb-2">
            <span className="font-black text-indigo-500 uppercase text-[10px] tracking-widest">AI Tutor Suggestion</span>
            <button onClick={() => setSuggestion(null)} className="text-indigo-300 hover:text-indigo-500">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          {suggestion}
        </div>
      )}
    </div>
  );
};

export default AITutor;