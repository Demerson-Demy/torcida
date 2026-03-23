'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Waves, Utensils, Phone, Trophy, CircleDot, User } from 'lucide-react';
import Image from 'next/image';

export default function InvitationPage() {
  const [guestName, setGuestName] = useState('');
  const whatsappNumber = "5511986472609";
  
  const getWhatsappUrl = () => {
    const baseMessage = `Olá Emily! ${guestName ? `Sou o(a) ${guestName} e c` : 'C'}onfirmo minha presença no seu aniversário de 14 anos! ⚽🔥`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
  };

  // Fixed values for floating footballs to satisfy strict linter
  const footballs = useMemo(() => {
    return [
      { id: 0, x: '10%', duration: 18, delay: 2, size: 25 },
      { id: 1, x: '25%', duration: 22, delay: 5, size: 35 },
      { id: 2, x: '40%', duration: 15, delay: 0, size: 20 },
      { id: 3, x: '55%', duration: 25, delay: 8, size: 45 },
      { id: 4, x: '70%', duration: 20, delay: 3, size: 30 },
      { id: 5, x: '85%', duration: 17, delay: 6, size: 28 },
      { id: 6, x: '95%', duration: 23, delay: 1, size: 40 },
      { id: 7, x: '5%', duration: 19, delay: 4, size: 22 },
    ];
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-zinc-900 selection:bg-red-600 selection:text-white overflow-x-hidden font-sans">
      {/* Light Stadium Background */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop"
          alt="Stadium Background"
          fill
          className="object-cover opacity-10 grayscale-[0.5]"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#F5F5F5]" />
      </div>

      {/* Decorative Elements (Floating Footballs) */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {footballs.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute text-zinc-300"
            initial={{ y: -100, x: ball.x }}
            animate={{ 
              y: '110vh',
              rotate: 360
            }}
            transition={{ 
              duration: ball.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: ball.delay
            }}
          >
            <CircleDot size={ball.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 py-8 md:py-16">
        {/* Header Banner - SPFC Style */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative mb-12 text-center"
        >
          <div className="inline-block relative">
            {/* SPFC Style Badge Background Glow */}
            <div className="absolute -inset-12 bg-red-600/10 blur-[100px] rounded-full" />
            
            <div className="relative bg-white text-black px-8 py-6 rounded-2xl transform shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-t-8 border-red-600">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-10 bg-black rotate-45 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-[10px] -rotate-45">SPFC</span>
                </div>
                <span className="text-sm font-black tracking-[0.3em] text-zinc-400 uppercase">Convite Especial</span>
                <div className="w-10 h-10 bg-red-600 rotate-45 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-[10px] -rotate-45">SPFC</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-zinc-900">
                EMILY&apos;S <span className="text-red-600">14<sup className="text-2xl lowercase">th</sup></span>
              </h1>
              <div className="mt-2 text-xl md:text-3xl font-black italic uppercase text-zinc-500">
                MATCHDAY PARTY
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guest Name Input Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-zinc-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
            <label htmlFor="guestName" className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <User size={14} className="text-red-600" /> Nome do Convidado(a)
            </label>
            <input
              type="text"
              id="guestName"
              placeholder="Digite seu nome aqui..."
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-50 border-2 border-zinc-100 rounded-xl focus:border-red-600 focus:outline-none transition-all font-bold text-zinc-800 placeholder:text-zinc-300"
            />
            {guestName && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mt-3 text-sm font-bold text-red-600 italic"
              >
                Bem-vindo ao time, {guestName}! ⚽
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual/Thematic (3/12) */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 hidden lg:flex flex-col gap-6"
          >
            <div className="flex-1 bg-white border border-zinc-100 rounded-[2rem] overflow-hidden relative group shadow-lg">
              <Image 
                src="https://picsum.photos/seed/football-pitch-light/600/1200" 
                alt="Pitch" 
                fill
                className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <Trophy className="text-red-600 mb-4" size={48} />
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Escalação</p>
                <p className="text-2xl font-black italic uppercase leading-none text-zinc-900">Time da<br />Emily</p>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Info (6/12) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Scoreboard Style Info Card */}
            <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* Pitch Lines Decoration */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-zinc-900 rounded-full" />
                <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-zinc-900" />
              </div>

              <div className="relative z-10">
                {/* Scoreboard Header */}
                <div className="flex justify-between items-center mb-16 bg-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-inner">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Kickoff</p>
                    <div className="text-5xl font-black italic font-mono tracking-tighter text-zinc-900">12:00</div>
                  </div>
                  <div className="text-2xl font-black text-zinc-200 italic">VS</div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">Matchday</p>
                    <div className="text-5xl font-black italic font-mono tracking-tighter text-zinc-900">05.04</div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_10px_30px_rgba(220,38,38,0.2)] group-hover:scale-110 transition-transform">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">Estádio (Local da Festa)</h3>
                      <p className="text-2xl font-black italic uppercase leading-tight text-zinc-900">
                        Jorge Alves Brawn, 85<br />
                        Bela Vista, Indaiatuba
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
                      <Utensils className="text-red-600 mb-4" size={28} />
                      <h4 className="font-black italic uppercase text-lg mb-1 text-zinc-900">Kit Churrasco</h4>
                      <p className="text-sm text-zinc-500">O combustível oficial dos campeões!</p>
                    </div>
                    <div className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
                      <Waves className="text-blue-500 mb-4" size={28} />
                      <h4 className="font-black italic uppercase text-lg mb-1 text-zinc-900">Piscina</h4>
                      <p className="text-sm text-zinc-500">Intervalo liberado para mergulho.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP Section */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-zinc-900 text-white p-8 md:p-10 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-b-[8px] border-red-600"
            >
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black italic uppercase leading-none mb-2">Confirme sua escalação</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">Não fique no banco de reservas!</p>
              </div>
              <a 
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 px-10 py-5 bg-red-600 text-white font-black uppercase italic tracking-tighter rounded-2xl hover:bg-white hover:text-red-600 transition-all shadow-[0_15px_40px_rgba(220,38,38,0.3)] active:scale-95"
              >
                <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                <span className="text-xl">Confirmar no Zap</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual/Thematic (3/12) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            <div className="bg-white border border-zinc-100 p-10 rounded-[2rem] text-center relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-zinc-50 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-600 shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black italic text-zinc-900">14</span>
                </div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Camisa 10</p>
                <p className="text-3xl font-black italic uppercase text-red-600">Emily</p>
              </div>
            </div>

            <div className="flex-1 bg-white border border-zinc-100 rounded-[2rem] overflow-hidden relative group shadow-lg">
              <Image 
                src="https://picsum.photos/seed/stadium-crowd-light/600/800" 
                alt="Crowd" 
                fill
                className="object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="text-2xl font-black italic uppercase leading-tight tracking-tighter text-zinc-900">Prepare sua torcida!</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-1.5 bg-red-600 rounded-full" />
            <div className="w-16 h-1.5 bg-zinc-200 rounded-full" />
            <div className="w-16 h-1.5 bg-black rounded-full" />
          </div>
          <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[1.2em] leading-loose">
            É GOL • EMILY 14 ANOS • INDAIATUBA • 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
