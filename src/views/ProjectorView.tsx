import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../lib/store';
import { questions } from '../data/questions';

export default function ProjectorView() {
  const { phase, currentQuestionIndex, timer, teams } = useGameStore();
  const currentQ = questions[currentQuestionIndex];
  
  const teamsList = Object.values(teams);
  const totalTeams = teamsList.length;

  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  // Calculate stats for current question
  const getStats = () => {
    if (!currentQ || totalTeams === 0) return { A: 0, B: 0, C: 0 };
    const counts = { A: 0, B: 0, C: 0 };
    teamsList.forEach(t => {
      const ans = t.answers?.[currentQ.id];
      if (ans) counts[ans]++;
    });
    return {
      A: counts.A / totalTeams,
      B: counts.B / totalTeams,
      C: counts.C / totalTeams,
    };
  };
  const stats = getStats();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.15),_transparent_60%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        
        {/* LOBBY */}
        {phase === 'lobby' && (
          <motion.div key="lobby" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex-1 flex flex-col items-center justify-center relative z-10 p-12">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-600 mb-6 drop-shadow-2xl text-center">
              VẬN MỆNH QUỐC GIA
            </h1>
            <p className="text-3xl text-slate-400 mb-16 font-medium">Truy cập <span className="text-white font-mono bg-white/10 px-4 py-2 rounded-xl mx-2">/play</span> để tham gia trò chơi</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-6xl">
              {teamsList.map(t => (
                <motion.div key={t.id} initial={{scale:0.8, opacity:0}} animate={{scale:1, opacity:1}} className="bg-red-950/40 border border-red-900/50 p-6 rounded-2xl text-center shadow-lg">
                  <div className="text-4xl mb-2">🚩</div>
                  <div className="font-bold text-xl text-white truncate">{t.name}</div>
                </motion.div>
              ))}
              {totalTeams === 0 && (
                <div className="col-span-full text-center text-slate-600 text-xl italic py-12">Chưa có đội nào. Đang chờ...</div>
              )}
            </div>
          </motion.div>
        )}

        {/* QUESTION & LOCK */}
        {(phase === 'question_active' || phase === 'lock_ack') && currentQ && (
          <motion.div key={`q-${currentQ.id}`} initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-50}} className="flex-1 flex flex-col relative z-10 p-8 md:p-12">
            
            <header className="flex justify-between items-center mb-8 shrink-0">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-red-900/50 border-2 border-red-500/30 flex items-center justify-center text-2xl font-black text-red-400">
                  {currentQuestionIndex + 1}
                </div>
                <div>
                  <h3 className="text-gold-400 tracking-[0.2em] font-bold text-lg uppercase mb-1">Tình huống chiến lược</h3>
                  <h2 className="text-4xl font-black text-white">{currentQ.title}</h2>
                </div>
              </div>

              {/* Timer Circular */}
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="44" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle 
                    cx="48" cy="48" r="44" fill="none" stroke="#ef4444" strokeWidth="8"
                    strokeDasharray="276" strokeDashoffset={276 - (276 * timer) / 45}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <span className="text-3xl font-black text-white font-mono">{timer}</span>
              </div>
            </header>

            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl mb-8 backdrop-blur-sm shrink-0">
              <p className="text-2xl text-slate-200 leading-relaxed font-medium">{currentQ.context}</p>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-6">
              {currentQ.options.map(opt => {
                const percent = stats[opt.id] * 100;
                return (
                  <div key={opt.id} className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl">
                    <div className="text-4xl font-black text-slate-700 mb-6 font-mono">{opt.id}</div>
                    <p className="text-2xl text-white font-medium flex-1 z-10 leading-snug">{opt.text}</p>

                    {/* Reveal Bar Chart when locked */}
                    {phase === 'lock_ack' && (
                      <motion.div 
                        initial={{height: 0}} 
                        animate={{height: `${percent}%`}} 
                        transition={{duration: 1, type: "spring"}}
                        className="absolute bottom-0 left-0 right-0 bg-red-600/30 border-t border-red-500/50 z-0"
                      />
                    )}
                    {phase === 'lock_ack' && (
                      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="absolute top-8 right-8 text-4xl font-black text-red-400 z-10">
                        {Math.round(percent)}%
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>

            <footer className="mt-8 text-center shrink-0">
               <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                 <span className="text-slate-400 text-lg">Đã nộp:</span>
                 <span className="text-2xl font-black text-white">{teamsList.filter(t => t.answers?.[currentQ.id]).length} / {totalTeams} đội</span>
               </div>
            </footer>
          </motion.div>
        )}

        {/* MASTER MATRIX DEBRIEFING */}
        {phase === 'debriefing' && (
          <motion.div key="debrief" initial={{opacity:0}} animate={{opacity:1}} className="flex-1 flex flex-col relative z-10 p-8">
            <h2 className="text-4xl font-black text-gold-400 mb-8 text-center uppercase tracking-widest">Ma Trận Quyết Định Lịch Sử</h2>
            
            <div className="flex-1 overflow-auto border border-white/10 rounded-2xl bg-black/50 backdrop-blur-md">
              <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 sticky top-0 z-20">
                  <tr>
                    <th className="p-4 border-b border-white/10 font-bold text-slate-400 w-64">Tình huống</th>
                    <th className="p-4 border-b border-white/10 border-r-2 border-r-gold-500/50 font-black text-gold-400 text-center w-40 bg-gold-900/20">Lịch sử VN</th>
                    {teamsList.map(t => (
                      <th key={t.id} className="p-4 border-b border-white/10 font-bold text-white text-center">
                        <div className="truncate w-24 mx-auto">{t.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q, i) => (
                    <tr 
                      key={q.id} 
                      onClick={() => setSelectedRow(i)}
                      className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors group"
                    >
                      <td className="p-4 text-slate-300 font-medium group-hover:text-white truncate max-w-xs">{q.title}</td>
                      <td className="p-4 border-r-2 border-r-gold-500/50 text-center bg-gold-900/10">
                        <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-gold-500/20 text-gold-400 font-black border border-gold-500/50">
                          {q.historicalAnswer || '?'}
                        </span>
                      </td>
                      {teamsList.map(t => {
                        const ans = t.answers?.[q.id];
                        const isMatch = ans === q.historicalAnswer;
                        return (
                          <td key={t.id} className="p-4 text-center">
                            {ans ? (
                              <span className={`inline-flex w-8 h-8 items-center justify-center rounded-full font-bold ${isMatch ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-white/5 text-slate-400'}`}>
                                {ans}
                              </span>
                            ) : '-'}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Explainer Modal */}
            <AnimatePresence>
              {selectedRow !== null && (
                <motion.div 
                  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                  className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-12"
                  onClick={() => setSelectedRow(null)}
                >
                  <motion.div 
                    initial={{scale:0.9, y:20}} animate={{scale:1, y:0}} exit={{scale:0.9, y:20}}
                    className="bg-slate-900 border border-slate-700 rounded-3xl p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-6">
                      <div>
                        <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">Phân tích chuyên sâu</h4>
                        <h2 className="text-3xl font-black text-white">{questions[selectedRow].title}</h2>
                      </div>
                      <button onClick={() => setSelectedRow(null)} className="text-slate-500 hover:text-white text-4xl">&times;</button>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-blue-950/30 p-6 rounded-2xl border border-blue-900/50">
                        <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2"><span>📘</span> Lịch sử thực tế</h3>
                        <p className="text-white text-lg leading-relaxed">{questions[selectedRow].explanation.history}</p>
                      </div>

                      <div className="bg-emerald-950/30 p-6 rounded-2xl border border-emerald-900/50">
                        <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2"><span>💡</span> Vì sao?</h3>
                        <p className="text-white/90 text-lg leading-relaxed">{questions[selectedRow].explanation.reason}</p>
                      </div>

                      <div className="border-t border-slate-800 pt-6">
                        <h3 className="text-slate-400 font-bold mb-2 text-sm uppercase">Nguồn trích dẫn</h3>
                        <p className="text-slate-500 text-sm italic">{questions[selectedRow].explanation.source}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
