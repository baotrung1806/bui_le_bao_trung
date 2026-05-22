import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import heroImg from '@/assets/hero.png';

function App() {
  const [count, setCount] = useState(0);

  const configs = [
    { name: 'Vite 8', desc: 'Bundler siêu tốc, cấu hình HMR tối ưu', icon: '⚡' },
    { name: 'React 19', desc: 'Thư viện UI phổ biến nhất với TypeScript', icon: '⚛️' },
    { name: 'Tailwind v4', desc: 'Utility-first CSS framework thế hệ mới', icon: '🎨' },
    { name: 'Sass/SCSS', desc: 'Tiền xử lý CSS mạnh mẽ để viết style nâng cao', icon: '💅' },
    { name: 'ESLint v10', desc: 'Bộ linter kiểm tra code chất lượng', icon: '🔍' },
    { name: 'Prettier', desc: 'Tự động format code chuẩn chỉnh', icon: '📝' },
  ];

  return (
    <div className="min-height-screen flex flex-col items-center justify-between p-6 md:p-12 selection:bg-indigo-500 selection:text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950/20 to-slate-950 pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-6xl flex items-center justify-between py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <img src={reactLogo} className="w-8 h-8 animate-spin-slow" alt="React logo" />
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            React Core Setups
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Config Ready
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl my-auto py-12 flex flex-col items-center text-center">
        {/* Logos container */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noreferrer" className="group">
            <img
              src={viteLogo}
              className="w-16 h-16 md:w-24 md:h-24 transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_15px_rgba(100,108,255,0.4)]"
              alt="Vite logo"
            />
          </a>
          <div className="text-3xl text-slate-500 font-light">+</div>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="group">
            <img
              src={reactLogo}
              className="w-16 h-16 md:w-24 md:h-24 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 filter drop-shadow-[0_0_15px_rgba(97,218,251,0.4)]"
              alt="React logo"
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          Cấu hình Dự án <br className="md:hidden" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            React thành công!
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          Môi trường phát triển của bạn đã được thiết lập đầy đủ với các công nghệ và quy chuẩn code
          hiện đại nhất.
        </p>

        {/* Demonstration of Sass + Tailwind card */}
        <div className="premium-card w-full max-w-md text-left mb-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="card-title mb-1">Kiểm tra hoạt động</h3>
              <p className="text-xs text-slate-400">
                Thử nghiệm Counter sử dụng React State + Sass Nesting
              </p>
            </div>
            <img src={heroImg} className="w-10 h-10 object-contain opacity-80" alt="Hero" />
          </div>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Card này được thiết kế bằng class `.premium-card` viết trong file SCSS, lồng cấu trúc
            bên trong và áp dụng các directives `@apply` của Tailwind CSS v4.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="card-gradient-btn"
              onClick={() => setCount((c) => c + 1)}
            >
              Đếm số: {count}
            </button>
            <span className="text-xs text-slate-500 italic">Nhấp vào nút để chạy HMR</span>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          {configs.map((cfg) => (
            <div
              key={cfg.name}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{cfg.icon}</div>
              <h4 className="font-semibold text-white mb-1">{cfg.name}</h4>
              <p className="text-xs text-slate-400 leading-normal">{cfg.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center py-6 border-t border-slate-800/80 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} bui_le_bao_trung. Dự án React Template đã được cấu hình.</p>
      </footer>
    </div>
  );
}

export default App;
