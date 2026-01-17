
import React from 'react';
import { StudentInfo } from '../types';

interface HeaderProps {
  student: StudentInfo;
  onLogout: () => void;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ student, onLogout, onBack }) => {
  return (
    <header className="w-full glass-panel py-3 px-4 flex items-center justify-between sticky top-0 z-50 rounded-b-[2rem] border-x-0 border-t-0">
      <div className="flex items-center gap-3">
        <button 
          onClick={onBack}
          className="bg-white text-blue-600 w-9 h-9 rounded-xl flex items-center justify-center transition-all shadow-sm border border-blue-100 active:scale-90"
        >
          <i className="fa-solid fa-house text-sm"></i>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-blue-400 overflow-hidden bg-white shadow-sm">
            {student.avatar ? (
              <img src={student.avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-300">
                <i className="fa-solid fa-user"></i>
              </div>
            )}
          </div>
          <div className="max-w-[100px] overflow-hidden">
            <h2 className="font-bold text-blue-900 leading-tight truncate text-xs">{student.name}</h2>
            <p className="text-[10px] text-blue-500 font-black uppercase">Lớp {student.className}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
         {student.mode === 'certificate' && (
           <div className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-pink-200 hidden sm:block">
             Chế độ TEST
           </div>
         )}
         <button 
          onClick={onLogout}
          className="w-9 h-9 bg-red-50 text-red-500 rounded-xl flex items-center justify-center transition-all active:scale-90"
          title="Đăng xuất"
        >
          <i className="fa-solid fa-power-off text-sm"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
