
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
      alert('Vui lòng điền đủ thông tin nhé! 😊');
      return;
    }
    onLogin({ name, grade, className, mode, avatar });
  };

  return (
    <div className="mobile-card px-4 py-6 animate-float">
      <div className="glass-panel p-8 rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
        
        <div className="text-center mb-6 relative z-10">
          <div className="w-24 h-24 bg-blue-500 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-lg rotate-3 border-4 border-white overflow-hidden">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <i className="fa-solid fa-user-astronaut"></i>
            )}
          </div>
          <h1 className="text-2xl font-black text-blue-900 mb-1 leading-none">AI TUTOR MASTER</h1>
          <p className="text-blue-500 font-bold text-[10px] tracking-widest uppercase">Global Success Program</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-blue-700 uppercase tracking-widest ml-1">Họ tên học sinh</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full px-5 py-3 rounded-2xl border-2 border-blue-50 focus:border-blue-400 outline-none transition-all font-bold text-blue-900 bg-blue-50/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-blue-700 uppercase tracking-widest ml-1">Khối lớp</label>
              <select 
                value={grade}
                onChange={(e) => setGrade(e.target.value as Grade)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-blue-50 focus:border-blue-400 outline-none bg-blue-50/50 font-bold text-blue-900 cursor-pointer"
              >
                <option value={Grade.GRADE_6}>Lớp 6</option>
                <option value={Grade.GRADE_7}>Lớp 7</option>
                <option value={Grade.GRADE_8}>Lớp 8</option>
                <option value={Grade.GRADE_9}>Lớp 9</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-blue-700 uppercase tracking-widest ml-1">Tên lớp</label>
              <input 
                type="text" 
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="6A1/7B1..."
                className="w-full px-4 py-3 rounded-2xl border-2 border-blue-50 focus:border-blue-400 outline-none bg-blue-50/50 font-bold text-blue-900"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-blue-700 uppercase tracking-widest ml-1">Ảnh chân dung</label>
            <label className="flex items-center gap-3 p-3 rounded-2xl border-2 border-dashed border-blue-200 bg-white hover:bg-blue-50 cursor-pointer transition-all">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                <i className="fa-solid fa-camera"></i>
              </div>
              <span className="text-xs font-bold text-blue-400">Tải ảnh chân dung của bạn...</span>
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </div>

          <div className="p-4 bg-blue-100/50 rounded-[2rem] border-2 border-blue-50 space-y-3 mt-2">
            <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest block text-center">Hình thức học tập</label>
            <div className="flex flex-col gap-2">
              <button 
                type="button"
                onClick={() => setMode('free')}
                className={`w-full p-3.5 rounded-xl font-black transition-all text-sm ${mode === 'free' ? 'bg-blue-600 text-white shadow-lg scale-[1.02]' : 'bg-white text-blue-500 border-2 border-blue-50'}`}
              >
                <i className="fa-solid fa-rocket mr-2"></i>
                Tự luyện Free
              </button>
              <button 
                type="button"
                onClick={() => setMode('certificate')}
                className={`w-full p-3.5 rounded-xl font-black transition-all text-sm ${mode === 'certificate' ? 'bg-[#ff85a2] text-white shadow-lg scale-[1.02]' : 'bg-[#fff0f3] text-[#ff85a2] border-2 border-[#ffecf0]'}`}
              >
                <i className="fa-solid fa-certificate mr-2"></i>
                Test lấy Chứng nhận
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-700 text-white font-black py-4 rounded-2xl shadow-[0_6px_0_#1e3a8a] active:shadow-none active:translate-y-[6px] transition-all uppercase tracking-widest mt-2 flex items-center justify-center gap-2"
          >
            Sẵn sàng học <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
