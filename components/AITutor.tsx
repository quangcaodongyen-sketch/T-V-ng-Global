
import { GoogleGenAI } from "@google/genai";
import React, { useState } from 'react';

interface AITutorProps {
  word: string;
  meaning: string;
}

const AITutor: React.FC<AITutorProps> = ({ word, meaning }) => {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (loading) return;
    setLoading(true);
    setSuggestion(null);
    
    try {
      // Khởi tạo instance mới mỗi lần gọi để đảm bảo lấy đúng API_KEY từ context
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Bạn là trợ giảng Tiếng Anh vui tính của Thầy Đinh Thành. 
        Hãy giải thích cách dùng từ "${word}" (nghĩa là ${meaning}) 
        và đặt 2 ví dụ cực kỳ gần gũi với học sinh THCS Việt Nam (ví dụ về trường học, bạn bè, ăn uống). 
        Trả lời ngắn gọn, súc tích, dùng nhiều emoji sinh động.`,
      });

      if (response && response.text) {
        setSuggestion(response.text);
      } else {
        throw new Error("Không nhận được phản hồi từ AI");
      }
    } catch (error) {
      console.error("AI Tutor Error:", error);
      setSuggestion("Ối, AI đang bận giải lao một chút, các em nhấn lại để thầy gọi AI dậy nhé! 😅");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-100 relative overflow-hidden transition-all">
      {!suggestion ? (
        <button 
          onClick={askAI}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-2 text-indigo-600 font-black hover:text-indigo-800 transition-colors text-sm uppercase tracking-wide"
        >
          {loading ? (
            <i className="fa-solid fa-spinner animate-spin text-lg"></i>
          ) : (
            <i className="fa-solid fa-robot animate-bounce text-lg"></i>
          )}
          {loading ? "Đang kết nối AI..." : "AI Tutor giải thích thêm?"}
        </button>
      ) : (
        <div className="text-[13px] sm:text-sm text-indigo-900 leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-center mb-3 border-b border-indigo-100 pb-2">
            <span className="font-black text-indigo-500 uppercase text-[10px] tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-wand-magic-sparkles"></i> AI Tutor Suggestion
            </span>
            <button 
              onClick={() => setSuggestion(null)} 
              className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-200 text-indigo-600 hover:bg-indigo-300 transition-all"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>
          <div className="font-medium">
            {suggestion}
          </div>
        </div>
      )}
    </div>
  );
};

export default AITutor;
