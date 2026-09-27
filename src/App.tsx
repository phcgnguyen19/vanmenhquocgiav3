import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HostView from './views/HostView';
import ProjectorView from './views/ProjectorView';
import ClientView from './views/ClientView';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 mb-2">
        VẬN MỆNH QUỐC GIA
      </h1>
      <p className="text-slate-400 mb-12">Mô Phỏng Quyết Định Chiến Lược</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Link to="/projector" target="_blank" className="p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all">
          <h2 className="text-2xl font-bold mb-2">Màn Hình Chiếu</h2>
          <p className="text-slate-400 text-sm">Main Projector Display</p>
        </Link>

        <Link to="/host" target="_blank" className="p-8 bg-red-950/30 hover:bg-red-900/40 border border-red-900/50 rounded-2xl transition-all">
          <h2 className="text-2xl font-bold mb-2 text-red-400">Điều Phối Viên</h2>
          <p className="text-slate-400 text-sm">Host / Admin Dashboard</p>
        </Link>

        <Link to="/play" target="_blank" className="p-8 bg-blue-950/30 hover:bg-blue-900/40 border border-blue-900/50 rounded-2xl transition-all">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Đội Chơi</h2>
          <p className="text-slate-400 text-sm">Client Mobile View</p>
        </Link>
      </div>
      
      <p className="mt-12 text-sm text-slate-500 max-w-lg">
        Lưu ý: Game sử dụng BroadcastChannel để đồng bộ. Hãy mở 3 vai trò ở 3 tab khác nhau trên cùng một trình duyệt để test Multiplayer.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host" element={<HostView />} />
        <Route path="/projector" element={<ProjectorView />} />
        <Route path="/play" element={<ClientView />} />
      </Routes>
    </BrowserRouter>
  );
}
