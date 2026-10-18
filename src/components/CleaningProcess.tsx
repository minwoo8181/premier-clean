'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UtensilsCrossed,
  Droplets,
  AppWindow,
  Archive,
  Wind,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ArrowLeftRight,
  SlidersHorizontal,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const ZONE_ICONS = {
  kitchen: UtensilsCrossed,
  bathroom: Droplets,
  window: AppWindow,
  storage: Archive,
  'floor-air': Wind,
};

export default function CleaningProcess() {
  const zones = siteConfig.cleaningManualZones;
  const [activeZoneId, setActiveZoneId] = useState<string>(zones[0]?.id || 'kitchen');

  // Before & After Slider State
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentZone = zones.find((z) => z.id === activeZoneId) || zones[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleTabChange = (id: string) => {
    setActiveZoneId(id);
    setSliderPosition(50); // Reset slider to center
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="process" className="py-16 lg:py-24 2xl:py-32 bg-slate-100/60 relative overflow-hidden">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1680px] 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 space-y-10 lg:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>FULL DISASSEMBLY & BEFORE / AFTER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
            구역별 100% 완전 탈거 & <br className="hidden sm:inline" />
            <span className="text-blue-700 inline-block">비포·애프터 정밀 매뉴얼</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto break-keep leading-relaxed font-normal">
            손 닿는 겉만 문지르는 청소와 비교하지 말아주세요.
            서랍, 배수구, 환풍기 트랩까지 완전 분해 세척하여 전/후의 극명한 차이를 만듭니다.
          </p>
        </div>

        {/* Zone Selector Button Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {zones.map((item) => {
            const Icon = ZONE_ICONS[item.id as keyof typeof ZONE_ICONS] || UtensilsCrossed;
            const isActive = item.id === activeZoneId;

            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/25 scale-[1.02]'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-200' : 'text-blue-600'}`} />
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Integrated Showcase Card: Left = Before/After Split Slider, Right = Checklist Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              
              {/* 📸 LEFT: Interactive Before & After Split Slider (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
                      {currentZone.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {currentZone.zone}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>슬라이더를 좌우로 드래그</span>
                  </div>
                </div>

                {/* Slider Frame */}
                <div
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                  className="relative w-full h-[320px] sm:h-[420px] 2xl:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner bg-slate-900"
                >
                  {/* AFTER Image (Underneath) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${currentZone.afterImage}')` }}
                  >
                    <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-lg shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                      <span>AFTER (시공 후)</span>
                    </div>
                  </div>

                  {/* BEFORE Image (Clipped on top) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center overflow-hidden"
                    style={{
                      backgroundImage: `url('${currentZone.beforeImage}')`,
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                    }}
                  >
                    <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-black px-3 py-1 rounded-lg shadow-md">
                      <span>BEFORE (시공 전)</span>
                    </div>
                  </div>

                  {/* Vertical Dividing Line & Knob */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl border-2 border-blue-600 flex items-center justify-center text-blue-700">
                      <ArrowLeftRight className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Percentage Indicator Bar */}
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 pt-1">
                  <span>◀ 이전 오염 상태</span>
                  <span className="text-blue-600 font-black">비교 분할 {Math.round(sliderPosition)}%</span>
                  <span>100% 복원 완료 ▶</span>
                </div>
              </div>

              {/* 📋 RIGHT: Disassembly Targets & Professional Sterilization (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pt-2 lg:pt-0">
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-black text-slate-900 break-keep">
                      {currentZone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 break-keep leading-relaxed font-medium">
                      {currentZone.summary}
                    </p>
                  </div>

                  {/* 100% 완전 탈거 부위 */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-800 font-black text-xs border border-amber-500/20">
                        100% 완전 탈거 대상
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold">
                        (손상 없는 분해 공정)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentZone.disassemblyTargets.map((target) => (
                        <div
                          key={target}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-bold text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="break-keep">{target}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 전문 멸균 기술 & 장비 */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-600/10 text-blue-700 font-black text-xs border border-blue-600/20">
                        전문 멸균 기술 & 장비
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {currentZone.specialMethods.map((method) => (
                        <li key={method} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span className="break-keep">{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom CTA within card */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>한국인 정규 직영팀 직접 시공</span>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>이 구역 포함 무료 견적 문의</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
