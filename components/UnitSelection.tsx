
import React from 'react';
import { Grade, Unit } from '../types';
import { UNITS_DATA } from '../constants';

interface UnitSelectionProps {
  grade: Grade;
  onSelect: (unit: Unit) => void;
}

const UnitSelection: React.FC<UnitSelectionProps> = ({ grade, onSelect }) => {
  const units = UNITS_DATA[grade];

  return (
    <div className="w-full max-w-lg px-4 py-6 mb-10">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-black text-blue-900 mb-1">CHỌN UNIT HỌC</h1>
        <div className="inline-block px-4 py-1 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest">
          Chương trình lớp {grade}
        </div>
      </div>

      <div className="space-y-4">
        {units.map((unit) => (
          <button 
            key={unit.id}
            onClick={() => onSelect(unit)}
            className="w-full glass-panel p-5 rounded-[2rem] border-2 border-white flex items-center justify-between group active:scale-95 transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-sm border-2 border-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
                {unit.id}
              </div>
              <div>
                <h3 className="font-bold text-blue-900 group-hover:text-blue-600 transition-colors leading-tight">{unit.title}</h3>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-tighter mt-0.5">{unit.vocab.length} từ vựng mới</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <i className="fa-solid fa-chevron-right text-xs"></i>
            </div>
          </button>
        ))}
      </div>
      
      {units.length === 0 && (
        <div className="text-center p-12 glass-panel rounded-[2rem]">
          <i className="fa-solid fa-cloud-moon text-4xl text-blue-200 mb-3"></i>
          <p className="text-blue-400 font-bold italic">Dữ liệu đang được cập nhật...</p>
        </div>
      )}
    </div>
  );
};

export default UnitSelection;
