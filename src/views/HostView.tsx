import { useEffect } from 'react';
import { useGameStore } from '../lib/store';
import { questions } from '../data/questions';

export default function HostView() {
  const { phase, currentQuestionIndex, teams, nextPhase, setQuestionIndex, timer, setTimer } = useGameStore();

  const numTeams = Object.keys(teams).length;
  const currentQ = questions[currentQuestionIndex];

  // Simple timer effect on host only
  useEffect(() => {
    let interval: any;
    if (phase === 'question_active' && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
        if (timer - 1 === 0) {
          nextPhase('lock_ack');
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [phase, timer]);

  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-red-900/50">
          <div>
            <h1 className="text-3xl font-black text-red-500">HOST DASHBOARD</h1>
            <p className="text-slate-500">Điều khiển luồng trò chơi</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Trạng thái hiện tại</div>
            <div className="inline-block px-4 py-1 bg-red-900/30 border border-red-500/50 rounded-full text-red-400 font-bold">
              {phase.toUpperCase()}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">🎮</span>
                Bảng Điều Khiển
              </h2>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => { setQuestionIndex(0); nextPhase('lobby'); }}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-colors"
                >
                  Reset Game
                </button>

                {phase === 'lobby' && (
                  <button 
                    onClick={() => { setQuestionIndex(0); nextPhase('question_active'); }}
                    className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-xl font-bold transition-colors"
                  >
                    Bắt đầu Câu 1
                  </button>
                )}

                {phase === 'question_active' && (
                  <button 
                    onClick={() => nextPhase('lock_ack')}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-xl font-bold transition-colors"
                  >
                    Khóa Bình Chọn Ngay
                  </button>
                )}

                {phase === 'lock_ack' && currentQuestionIndex < questions.length - 1 && (
                  <button 
                    onClick={() => { setQuestionIndex(currentQuestionIndex + 1); nextPhase('question_active'); }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors"
                  >
                    Chuyển Câu Tiếp ({currentQuestionIndex + 2})
                  </button>
                )}

                {phase === 'lock_ack' && currentQuestionIndex === questions.length - 1 && (
                  <button 
                    onClick={() => nextPhase('debriefing')}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-colors"
                  >
                    Vào Màn Tổng Kết (Matrix)
                  </button>
                )}
              </div>
            </div>

            {currentQ && phase !== 'lobby' && phase !== 'debriefing' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Câu hỏi hiện tại ({currentQuestionIndex + 1}/{questions.length})</h2>
                  <div className="text-2xl font-mono font-black text-amber-400">{timer}s</div>
                </div>
                <h3 className="font-bold text-red-400 mb-2">{currentQ.title}</h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4">{currentQ.context}</p>
                <div className="grid grid-cols-3 gap-2">
                  {currentQ.options.map(o => (
                    <div key={o.id} className="p-3 bg-black rounded-lg border border-slate-800 text-xs">
                      <strong className="text-slate-500">{o.id}.</strong> {o.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Teams Status */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                <span>Danh sách Đội</span>
                <span className="text-sm bg-slate-800 px-3 py-1 rounded-full">{numTeams} đội</span>
              </h2>
              
              {numTeams === 0 ? (
                <p className="text-slate-500 italic text-sm">Chưa có đội nào tham gia. Hãy yêu cầu các đội vào link /play.</p>
              ) : (
                <div className="space-y-2">
                  {Object.values(teams).map(t => {
                    const answered = currentQ && t.answers?.[currentQ.id];
                    return (
                      <div key={t.id} className="flex justify-between items-center p-3 bg-black rounded-xl border border-slate-800">
                        <span className="font-medium">{t.name}</span>
                        {phase === 'question_active' ? (
                          answered ? <span className="text-emerald-500 text-sm font-bold">✓ Đã nộp</span> : <span className="text-amber-500 text-sm animate-pulse">Đang nghĩ...</span>
                        ) : (
                          <span className="text-slate-500 text-sm">{Object.keys(t.answers || {}).length} câu</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
