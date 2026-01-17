
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-3 text-xs bg-white/80 backdrop-blur-md fixed bottom-0 z-40 border-t border-blue-100 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-1">
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            • Chương trình Tiếng Anh Global Success •
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            • Chúc các em học tốt! •
          </span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            • Chương trình Tiếng Anh Global Success •
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            Bản quyền: Đinh Thành 0915.213717
          </span>
          <span className="mx-4 text-blue-800 font-bold uppercase tracking-wider">
            • Chúc các em học tốt! •
          </span>
        </div>
      </div>
      
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          display: inline-block;
          animation: marquee2 30s linear infinite;
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
