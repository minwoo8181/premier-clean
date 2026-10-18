'use client';

import React, { useState } from 'react';
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

  const currentZone = zones.find((z) => z.id === activeZoneId) || zones[0];

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
    <section id="process" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 space-y-12">
        
        {/* Header with Clear Korean Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>FULL DISASSEMBLY & STERILIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
            겉만 닦지 않습니다. <br className="hidden sm:inline" />
            <span className="text-blue-700 inline-block">구역별 100% 완전 탈거</span> 정밀 매뉴얼
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto break-keep leading-relaxed font-normal">
            손 닿는 곳만 대충 문지르는 일반 청소와 비교하지 말아주세요.
            서랍 안쪽, 배수구 트랩, 등기구 속 숨은 분진까지 하나하나 분해하여 멸균합니다.
          </p>
        </div>

        {/* Interactive Zone Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {zones.map((item) => {
            const Icon = ZONE_ICONS[item.id as keyof typeof ZONE_ICONS] || UtensilsCrossed;
            const isActive = item.id === activeZoneId;

            return (
              <button
                key={item.id}
                onClick={() => setActiveZoneId(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/25 scale-[1.02]'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sky-200' : 'text-blue-600'}`} />
                <span>{item.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Zone Deep Dive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Photo Showcase (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${currentZone.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-blue-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                    {currentZone.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-bold text-sky-300 tracking-wider uppercase">
                    {currentZone.zone}
                  </span>
                  <h3 className="text-2xl font-black">{currentZone.title}</h3>
                </div>
              </div>

              {/* Right Checklist & Disassembly Details (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-7 flex flex-col justify-between">
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 break-keep">
                      {currentZone.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 break-keep leading-relaxed font-medium">
                      {currentZone.summary}
                    </p>
                  </div>

                  {/* 100% 완전 탈거 부위 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 font-black text-xs border border-amber-500/20">
                        100% 완전 탈거 대상
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">
                        (부품 손상 없는 전문 분해 공정)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentZone.disassemblyTargets.map((target) => (
                        <div
                          key={target}
                          className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-bold text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="break-keep">{target}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 전문 공정 및 친환경 장비 */}
                  <div className="space-y-3 pt-2">
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
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>한국인 정규 마스터팀 전원 시공 투입</span>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>이 구역 포함 전체 견적 문의</span>
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
