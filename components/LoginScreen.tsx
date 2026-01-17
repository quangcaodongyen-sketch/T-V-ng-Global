
import React, { useState } from 'react';
import { Grade, StudentInfo } from '../types';

interface LoginScreenProps {
  onLogin: (info: StudentInfo) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState<Grade>(Grade.GRADE_6);
  const [className, setClassName] = useState('');
  const [mode, setMode] = useState<'free' | 'certificate'>('free');
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !className) {
      alert('Vui lòng nhập đầy đủ thông tin bạn nhé! 😊');
      return;
    }
    onLogin({ name, grade, className, mode, avatar });
  };

  return (
    <div className="w-full max-w-lg animate-float">
      <div className="glass-panel p-8 rounded-[2.5rem] border-4 border-white shadow-2xl card-3d">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl shadow-lg border-4 border-white">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h1 className="text-3xl font-black text-blue-900 mb-2">Chào mừng bạn!</h1>
          <p className="text-blue-500 font-medium">Cùng Thầy Thành chinh phục Tiếng Anh nhé!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-800 ml-1">Họ và tên học sinh</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A"
              className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-blue-900 bg-blue-50/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-800 ml-1">Khối lớp</label>
              <select 
                value={grade}
                onChange={(e) => setGrade(e.target.value as Grade)}
                className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none bg-blue-50/50 font-medium cursor-pointer"
              >
                <option value={Grade.GRADE_6}>Lớp 6</option>
                <option value={Grade.GRADE_7}>Lớp 7</option>
                <option value={Grade.GRADE_8}>Lớp 8</option>
                <option value={Grade.GRADE_9}>Lớp 9</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-800 ml-1">Tên lớp</label>
              <input 
                type="text" 
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="6A1/7B1/8C2/9D2..."
                className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none bg-blue-50/50 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-800 ml-1">Hình thức luyện tập</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => setMode('free')}
                className={`p-3 rounded-2xl border-2 font-black transition-all text-sm ${mode === 'free' ? 'border-blue-500 bg-blue-500 text-white shadow-md' : 'border-blue-100 bg-blue-50/50 text-blue-600 hover:border-blue-300'}`}
              >
                Tự luyện Free
              </button>
              <button 
                type="button"
                onClick={() => setMode('certificate')}
                className={`p-3 rounded-2xl border-2 font-black transition-all text-sm ${mode === 'certificate' ? 'border-pink-300 bg-pink-100 text-pink-700 shadow-md scale-105' : 'border-pink-50 bg-pink-50/30 text-pink-400 hover:border-pink-200'}`}
              >
                Test lấy Chứng nhận
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black py-4 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest mt-4"
          >
            Bắt đầu học ngay!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
