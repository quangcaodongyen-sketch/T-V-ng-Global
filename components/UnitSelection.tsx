
import React from 'react';
import { Grade, Unit } from '../types';
import { UNITS_DATA } from '../constants';

interface UnitSelectionProps {
  grade: Grade;
  onSelect: (unit: Unit) => void;
}

const UnitSelection: React.FC<UnitSelectionProps> = ({ grade, onSelect }) => {
  const units = UNITS_DATA[grade];

  if (units.length === 0) {
    return (
      <div className="text-center p-8 glass-panel rounded-[2rem] animate-float max-w-md">
        <i className="fa-solid fa-hourglass-start text-5xl text-blue-400 mb-4"></i>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Đang cập nhật...</h2>
        <p className="text-blue-600">Dữ liệu từ vựng lớp {grade} đang được chuẩn bị bạn nhé!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-blue-900 mb-2 tracking-tight">CHỌN UNIT CẦN ÔN TẬP</h1>
        <p className="text-lg text-blue-500 font-medium">Chương trình Tiếng Anh Global Success - Lớp {grade}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {units.map((unit) => (
          <button 
            key={unit.id}
            onClick={() => onSelect(unit)}
            className="group relative overflow-hidden glass-panel p-6 rounded-3xl border-2 border-white text-left card-3d hover:border-blue-400 transition-all"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors z-0"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-blue-500 text-white text-[10px] font-black rounded-full mb-3 uppercase tracking-wider">UNIT {unit.id}</span>
              <h3 className="text-lg font-bold text-blue-900 mb-1 group-hover:text-blue-700 leading-tight">{unit.title}</h3>
              <p className="text-blue-400 text-xs font-medium">{unit.vocab.length} từ vựng</p>
              <div className="mt-6 flex items-center text-blue-500 font-black text-[10px] uppercase tracking-widest">
                Vào học <i className="fa-solid fa-chevron-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitSelection;
