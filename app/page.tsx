'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Waves, Utensils, Phone, Trophy, CircleDot, User, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Fixed values for floating elements moved outside to ensure absolute stability during hydration
const FLOATING_ELEMENTS = [
  { id: 0, x: '10%', duration: 18, delay: 2, size: 25, type: 'ball' },
  { id: 1, x: '25%', duration: 22, delay: 5, size: 20, type: 'star' },
  { id: 2, x: '40%', duration: 15, delay: 0, size: 20, type: 'ball' },
  { id: 3, x: '55%', duration: 25, delay: 8, size: 30, type: 'sparkle' },
  { id: 4, x: '70%', duration: 20, delay: 3, size: 30, type: 'ball' },
  { id: 5, x: '85%', duration: 17, delay: 6, size: 18, type: 'star' },
  { id: 6, x: '95%', duration: 23, delay: 1, size: 40, type: 'ball' },
  { id: 7, x: '5%', duration: 19, delay: 4, size: 22, type: 'sparkle' },
];

export default function InvitationPage() {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isMounted, setIsMounted] = React.useState(false);
  const whatsappNumber = "5511986472609";

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const getWhatsappUrl = () => {
    const baseMessage = `Olá Emily! ${guestName ? `Sou o(a) ${guestName}${guestPhone ? ` (Tel: ${guestPhone})` : ''} e c` : 'C'}onfirmo minha presença no seu aniversário de 14 anos! ⚽🔥`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <main className="min-h-screen text-zinc-900 selection:bg-red-600 selection:text-white overflow-x-hidden font-sans">
      {/* Morumbi Stadium Pitch Background */}
      <div className="fixed inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop"
          alt="Morumbi Stadium Pitch"
          fill
          className="object-cover opacity-100 brightness-75 saturate-125"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Darker overlay to make white cards pop while keeping the stadium visible */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Decorative Elements (Floating Footballs & Stars) */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {FLOATING_ELEMENTS.map((el) => (
          <motion.div
            key={el.id}
            className="absolute text-zinc-300/50"
            initial={{ y: -100, x: el.x }}
            animate={{ 
              y: '110vh',
              rotate: 360
            }}
            transition={{ 
              duration: el.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: el.delay
            }}
          >
            {el.type === 'ball' && <CircleDot size={el.size} />}
            {el.type === 'star' && <Star size={el.size} className="text-red-200" fill="currentColor" />}
            {el.type === 'sparkle' && <Sparkles size={el.size} className="text-zinc-200" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 py-6 md:py-12">
        {/* Header Banner - SPFC Style */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative mb-8 md:mb-12 text-center"
        >
          <div className="inline-block relative">
            {/* SPFC Style Badge Background Glow */}
            <div className="absolute -inset-8 bg-red-600/10 blur-[80px] rounded-full" />
            
            <div className="relative bg-white/90 backdrop-blur-md text-black px-6 py-4 md:px-8 md:py-6 rounded-2xl transform shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-t-4 md:border-t-8 border-red-600">
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                {/* SPFC Shield Representation */}
                <div className="relative w-10 h-12 md:w-12 md:h-14">
                  <div className="absolute inset-0 bg-white border-2 border-black rounded-b-full overflow-hidden">
                    <div className="h-1/3 bg-black flex items-center justify-center">
                      <span className="text-white font-black text-[8px] md:text-[10px]">SPFC</span>
                    </div>
                    <div className="h-2/3 flex">
                      <div className="w-1/3 bg-red-600" />
                      <div className="w-1/3 bg-white" />
                      <div className="w-1/3 bg-black" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-red-600 uppercase mb-1">O Grande Jogo</span>
                  <div className="h-px w-10 bg-zinc-200" />
                </div>
                <div className="relative w-10 h-12 md:w-12 md:h-14">
                  <div className="absolute inset-0 bg-white border-2 border-black rounded-b-full overflow-hidden">
                    <div className="h-1/3 bg-black flex items-center justify-center">
                      <span className="text-white font-black text-[8px] md:text-[10px]">SPFC</span>
                    </div>
                    <div className="h-2/3 flex">
                      <div className="w-1/3 bg-red-600" />
                      <div className="w-1/3 bg-white" />
                      <div className="w-1/3 bg-black" />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-zinc-900">
                ANIVERSÁRIO DA <span className="text-red-600 drop-shadow-[0_2px_2px_rgba(220,38,38,0.2)]">EMILY</span>
              </h1>
              <div className="mt-2 text-lg md:text-2xl font-black italic uppercase text-zinc-400 flex items-center justify-center gap-2">
                <Star size={16} className="text-red-600 fill-red-600" />
                14 ANOS
                <Star size={16} className="text-red-600 fill-red-600" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-stretch">
          
          {/* Center Column: Info (6/12 on LG, 12/12 on SM) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 lg:col-start-3 space-y-4 md:space-y-8"
          >
            {/* Scoreboard Style Info Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-md border-2 border-zinc-100 p-5 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden group/main"
            >
              {/* Pitch Lines Decoration - More prominent */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none transition-opacity group-hover/main:opacity-[0.08]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-900" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 border-2 border-zinc-900 rounded-full" />
                <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-zinc-900" />
                {/* Penalty areas */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 border-x-2 border-b-2 border-zinc-900" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 border-x-2 border-t-2 border-zinc-900" />
              </div>

              <div className="relative z-10">
                {/* Scoreboard Header */}
                <div className="flex justify-between items-center mb-6 md:mb-10 bg-zinc-900 p-4 md:p-6 rounded-xl md:rounded-2xl border-b-4 border-red-600 shadow-lg">
                  <div className="text-center">
                    <p className="text-[8px] md:text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Início</p>
                    <div className="text-2xl md:text-5xl font-black italic font-mono tracking-tighter text-white">12:00</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <div className="text-lg font-black text-zinc-700 italic">LIVE</div>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] md:text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Data</p>
                    <div className="text-2xl md:text-5xl font-black italic font-mono tracking-tighter text-white">05.04</div>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-10">
                  <div className="flex items-start gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <MapPin size={24} className="md:hidden" />
                      <MapPin size={32} className="hidden md:block" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Local do Evento</h3>
                      <p className="text-lg md:text-2xl font-black italic uppercase leading-tight text-zinc-900">
                        Jorge Alves Brawn, 85<br />
                        Bela Vista, Indaiatuba
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl md:rounded-3xl border border-zinc-100 hover:bg-white/60 transition-all group/card cursor-default"
                    >
                      <Utensils className="text-red-600 mb-2 md:mb-4 group-hover/card:rotate-12 transition-transform" size={24} />
                      <h4 className="font-black italic uppercase text-base md:text-lg mb-1 text-zinc-900">Kit Churrasco</h4>
                      <p className="text-xs md:text-sm text-zinc-500 font-bold">Traga sua carne e bebida favorita</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl md:rounded-3xl border border-zinc-100 hover:bg-white/60 transition-all group/card cursor-default"
                    >
                      <Waves className="text-blue-500 mb-2 md:mb-4 group-hover/card:rotate-12 transition-transform" size={24} />
                      <h4 className="font-black italic uppercase text-base md:text-lg mb-1 text-zinc-900">Piscina Liberada</h4>
                      <p className="text-xs md:text-sm text-zinc-500 font-bold">Trazer roupa de banho e toalha</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RSVP Section */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-zinc-900/80 backdrop-blur-md text-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-xl flex flex-col gap-6 md:gap-8 border-b-[6px] md:border-b-[8px] border-red-600"
            >
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black italic uppercase leading-none mb-1 md:mb-2">Confirme sua escalação</h3>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Preencha os dados abaixo para confirmar</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="space-y-2">
                  <label htmlFor="guestName" className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <User size={12} className="text-red-600" /> Nome do Convidado(a)
                  </label>
                  {isMounted && (
                    <input
                      type="text"
                      id="guestName"
                      placeholder="Digite seu nome..."
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl focus:border-red-600 focus:outline-none transition-all font-bold text-white placeholder:text-zinc-600"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="guestPhone" className="block text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={12} className="text-red-600" /> Seu Telefone
                  </label>
                  {isMounted && (
                    <input
                      type="tel"
                      id="guestPhone"
                      placeholder="(00) 00000-0000"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-800 border-2 border-zinc-700 rounded-xl focus:border-red-600 focus:outline-none transition-all font-bold text-white placeholder:text-zinc-600"
                    />
                  )}
                </div>
              </div>

              <a 
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-black uppercase italic tracking-tighter rounded-xl md:rounded-2xl hover:bg-white hover:text-red-600 transition-all shadow-lg active:scale-95"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="text-lg md:text-xl">Confirmar no Zap</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-24 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-red-600 rounded-full" />
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-zinc-200 rounded-full" />
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-black rounded-full" />
          </div>
          <p className="text-[9px] md:text-[11px] font-black text-zinc-400 uppercase tracking-[0.8em] md:tracking-[1.2em] leading-loose">
            É GOL • EMILY 14 ANOS • INDAIATUBA • 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
