import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../lib/store';
import { questions } from '../data/questions';

export default function ClientView() {
  const [teamId, setTeamId] = useState('');
  const [teamName, setTeamName] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  
  const { phase, currentQuestionIndex, submitAnswer, teams } = useGameStore();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim()) return;
    const id = `team-${Date.now()}`;
    setTeamId(id);
    useGameStore.getState().joinTeam(id, teamName);
    setIsJoined(true);
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950">
        <form onSubmit={handleJoin} className="bg-white/5 p-8 rounded-2xl w-full max-w-sm border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gold-400">Tham Gia Trò Chơi</h2>
          <input 
            type="text" 
            placeholder="Tên đội của bạn..." 
            className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 mb-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-500"
            value={teamName}
            onChange={e => setTeamName(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors">
            VÀO PHÒNG
          </button>
        </form>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];
  const myAnswers = teams[teamId]?.answers || {};
  const hasAnsweredCurrent = !!myAnswers[currentQ?.id];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 p-4 md:p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 shrink-0 border-b border-white/10 pb-4">
        <div className="font-bold text-slate-400">Đội: <span className="text-white">{teamName}</span></div>
        <div className="text-sm px-3 py-1 bg-white/10 rounded-full text-gold-400 font-bold">
          {phase === 'lobby' ? 'SẢNH CHỜ' : phase === 'debriefing' ? 'KẾT THÚC' : 'ĐANG THI ĐẤU'}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {phase === 'lobby' && (
          <motion.div key="lobby" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-6" />
            <h3 className="text-2xl font-bold mb-2">Đang chờ Host bắt đầu...</h3>
            <p className="text-slate-500">Hãy chú ý lên màn hình lớn</p>
          </motion.div>
        )}

        {phase === 'question_active' && currentQ && (
          <motion.div key={`q-${currentQ.id}`} initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="flex-1 flex flex-col">
            <h4 className="text-gold-400 font-bold mb-2">{currentQ.title}</h4>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 max-h-48 overflow-y-auto">
              <p className="text-slate-300 text-sm leading-relaxed">{currentQ.context}</p>
            </div>

            {hasAnsweredCurrent ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-emerald-950/30 border border-emerald-900/50 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">Đã gửi đáp án {myAnswers[currentQ.id]}</h3>
                <p className="text-slate-400 text-sm">Chờ các đội khác hoàn thành...</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col gap-3">
                {currentQ.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => submitAnswer(teamId, currentQ.id, opt.id)}
                    className="p-4 text-left bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl active:scale-95 transition-all flex gap-4 items-center"
                  >
                    <span className="w-10 h-10 shrink-0 bg-black/50 rounded-full flex items-center justify-center font-bold text-xl text-slate-400">
                      {opt.id}
                    </span>
                    <span className="text-sm font-medium">{opt.text}</span>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {phase === 'lock_ack' && (
          <motion.div key="lock" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-red-400">Đã khóa bình chọn!</h3>
            <p className="text-slate-500">Mời xem kết quả thống kê trên màn hình lớn</p>
          </motion.div>
        )}

        {phase === 'debriefing' && (
          <motion.div key="debrief" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-black mb-2 text-gold-400">TỔNG KẾT</h3>
            <p className="text-slate-400">Trò chơi kết thúc. Vui lòng xem bảng ma trận trên màn hình chính.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
