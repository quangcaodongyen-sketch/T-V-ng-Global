
import React from 'react';
import { StudentInfo } from '../types';

interface HeaderProps {
  student: StudentInfo;
  onLogout: () => void;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ student, onLogout, onBack }) => {
  return (
    <header className="w-full glass-panel py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <i className="fa-solid fa-house"></i>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg bg-white">
            {student.avatar ? (
              <img src={student.avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <img src="https://picsum.photos/100/100?random=1" alt="Default Avatar" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="hidden sm:block">
            <h2 className="font-bold text-blue-900 leading-tight">{student.name}</h2>
            <p className="text-xs text-blue-600 font-medium">Grade {student.grade} • {student.className}</p>
          </div>
        </div>
      </div>

      <h1 className="hidden md:block text-xl font-black text-blue-600 uppercase tracking-tighter">
        Vocabulary <span className="text-orange-500">Master</span>
      </h1>

      <button 
        onClick={onLogout}
        className="text-red-500 hover:text-red-700 font-bold flex items-center gap-2 text-sm uppercase transition-all"
      >
        <i className="fa-solid fa-right-from-bracket"></i>
        <span className="hidden sm:inline">Thoát</span>
      </button>
    </header>
  );
};

export default Header;
