
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2 text-xs bg-white/90 backdrop-blur-md fixed bottom-0 z-40 border-t border-blue-100 overflow-hidden shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-1">
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            • Chương trình Tiếng Anh Global Success •
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            • Chúc các em học tập thật tốt! •
          </span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            • Chương trình Tiếng Anh Global Success •
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-8 text-blue-800 font-bold uppercase tracking-wider">
            • Chúc các em học tập thật tốt! •
          </span>
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          display: inline-block;
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
