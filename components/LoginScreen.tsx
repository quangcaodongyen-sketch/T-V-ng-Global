
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
      <div className="glass-panel p-8 rounded-3xl border-4 border-white shadow-2xl card-3d">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl shadow-lg border-4 border-white">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h1 className="text-3xl font-black text-blue-900 mb-2">Chào mừng bạn!</h1>
          <p className="text-blue-600 font-medium">Bắt đầu hành trình chinh phục từ vựng cùng Thầy Thành nhé!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-800 ml-1">Họ và tên học sinh</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A"
              className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-blue-900 bg-blue-50/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-800 ml-1">Khối lớp</label>
              <select 
                value={grade}
                onChange={(e) => setGrade(e.target.value as Grade)}
                className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none bg-blue-50/30 font-medium cursor-pointer"
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
                placeholder="6A1, 9/2..."
                className="w-full px-5 py-3 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none bg-blue-50/30 font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-800 ml-1">Ảnh đại diện</label>
            <div className="flex items-center gap-4">
              <label className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border-2 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50 cursor-pointer transition-all">
                <i className="fa-solid fa-camera"></i>
                <span className="text-sm font-bold uppercase tracking-wider">Chọn ảnh</span>
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
              {avatar && <img src={avatar} className="w-12 h-12 rounded-full object-cover border-2 border-blue-400" />}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-800 ml-1">Hình thức luyện tập</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => setMode('free')}
                className={`p-3 rounded-2xl border-2 font-bold transition-all text-sm ${mode === 'free' ? 'border-blue-600 bg-blue-600 text-white shadow-lg' : 'border-blue-100 bg-blue-50/30 text-blue-600 hover:border-blue-300'}`}
              >
                Luyện tự do
              </button>
              <button 
                type="button"
                onClick={() => setMode('certificate')}
                className={`p-3 rounded-2xl border-2 font-bold transition-all text-sm ${mode === 'certificate' ? 'border-orange-500 bg-orange-500 text-white shadow-lg' : 'border-orange-100 bg-orange-50/30 text-orange-600 hover:border-orange-300'}`}
              >
                Nhận chứng nhận
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest mt-4"
          >
            Bắt đầu học ngay!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
