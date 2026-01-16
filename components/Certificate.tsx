
import React, { useRef } from 'react';
import { StudentInfo, Unit } from '../types';

interface CertificateProps {
  student: StudentInfo;
  unit: Unit;
  score: number;
  total: number;
  onBack: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ student, unit, score, total, onBack }) => {
  const percentage = Math.round((score / total) * 100);
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl px-4 py-10 flex flex-col items-center">
      <div className="text-center mb-8 no-print">
        <div className="inline-block p-5 bg-yellow-400 rounded-full text-white text-5xl mb-4 shadow-2xl animate-bounce border-4 border-white">
          <i className="fa-solid fa-award"></i>
        </div>
        <h2 className="text-4xl font-black text-blue-900 mb-2">CHINH PHỤC THÀNH CÔNG!</h2>
        <p className="text-lg text-blue-600 font-medium">Bạn đã vượt qua chuỗi 100 thử thách từ vựng của Unit {unit.id}</p>
      </div>

      {student.mode === 'certificate' ? (
        <div 
          id="certificate-print-area"
          ref={certRef}
          className="w-full bg-white p-12 rounded-lg border-[20px] border-double border-blue-900 relative shadow-2xl font-serif text-blue-900 text-center print:border-[10px] print:shadow-none print:m-0"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-[12px] border-l-[12px] border-orange-400 -m-5"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-[12px] border-r-[12px] border-orange-400 -m-5"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-[12px] border-l-[12px] border-orange-400 -m-5"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-[12px] border-r-[12px] border-orange-400 -m-5"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold tracking-[0.3em] text-orange-600 mb-6 uppercase">GIẤY CHỨNG NHẬN HOÀN THÀNH</h3>
            <p className="text-xl italic mb-10 text-gray-600">Thầy Đinh Văn Thành chứng nhận sự nỗ lực vượt bậc của:</p>
            
            <h4 className="text-6xl font-black mb-6 uppercase tracking-tight text-blue-950 underline underline-offset-[12px] decoration-orange-400">
              {student.name}
            </h4>
            
            <div className="flex justify-center gap-10 text-xl mb-12">
              <p>Lớp: <span className="font-bold border-b-2 border-blue-200 px-2">{student.className}</span></p>
              <p>Khối: <span className="font-bold border-b-2 border-blue-200 px-2">{student.grade}</span></p>
            </div>

            <p className="text-xl mb-4 leading-relaxed max-w-2xl mx-auto">
              Đã xuất sắc hoàn thành trọn bộ <b>04 chặng thử thách từ vựng</b> (Khởi động, Tăng tốc, Siêu cấp, Về đích) 
              với tổng cộng hơn 100 câu hỏi thuộc chương trình Global Success - <b>Unit {unit.id}: {unit.title}</b>.
            </p>
            
            <div className="inline-block bg-blue-50 px-14 py-8 rounded-3xl border-4 border-blue-200 mb-16 shadow-inner">
              <span className="text-7xl font-black text-blue-700">{percentage}%</span>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-500 mt-2">Độ chính xác toàn diện</p>
            </div>

            <div className="flex justify-between items-end mt-12 px-10">
              <div className="text-center w-48">
                <p className="text-sm italic text-gray-500 mb-10">Ngày cấp: {new Date().toLocaleDateString('vi-VN')}</p>
                <div className="border-t-2 border-blue-100 pt-2">
                  <p className="text-[10px] uppercase font-bold text-blue-300">Mã chứng thực: GS-{unit.id}-{Math.floor(Math.random()*10000)}</p>
                </div>
              </div>

              <div className="text-center flex flex-col items-center">
                <p className="text-sm italic mb-2 text-gray-500">Giáo viên hướng dẫn</p>
                <div className="font-black text-5xl text-blue-900 italic py-4 opacity-90" style={{ fontFamily: 'Brush Script MT, cursive' }}>Thành</div>
                <div className="border-t-4 border-blue-900 w-64 pt-3">
                  <p className="text-2xl font-black uppercase tracking-tighter">Đinh Văn Thành</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-panel p-12 rounded-3xl text-center shadow-2xl max-w-lg w-full card-3d border-4 border-white">
          <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-6 shadow-lg border-4 border-blue-100">
            {percentage}%
          </div>
          <h3 className="text-2xl font-black text-blue-900 mb-4">KẾT QUẢ LUYỆN TẬP</h3>
          <p className="text-lg font-bold text-blue-800 mb-4">Đúng {score} / {total} câu</p>
          <div className="h-2 w-full bg-blue-100 rounded-full mb-8 overflow-hidden">
             <div className="h-full bg-blue-600 transition-all" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-blue-600 font-medium mb-8 leading-relaxed italic">
            "Bạn đã hoàn thành xuất sắc 100 câu hỏi! Hãy thử chế độ 'Nhận chứng nhận' để lưu giữ kết quả này nhé!"
          </p>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-12 no-print">
        <button 
          onClick={onBack}
          className="bg-white text-blue-600 border-2 border-blue-600 font-black px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition-all flex items-center gap-3 active:scale-95"
        >
          <i className="fa-solid fa-chevron-left"></i>
          Luyện Unit khác
        </button>
        {student.mode === 'certificate' && (
          <button 
            onClick={handlePrint}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
          >
            <i className="fa-solid fa-print"></i>
            Tải & In Chứng Nhận
          </button>
        )}
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; background: white !important; }
          #certificate-print-area, #certificate-print-area * { visibility: visible; }
          #certificate-print-area { 
            position: fixed; 
            left: 0; 
            top: 0; 
            width: 100%; 
            height: auto;
            border-width: 10px !important;
            box-shadow: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
