'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, ThumbsUp, Sparkle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50">
      {/* Bright, Sunlit Modern Clean Interior Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-10000"
          style={{
            backgroundImage: `url('${siteConfig.hero.backgroundImage}')`,
          }}
        />
        {/* Bright, airy White & Sky-Blue Gradient Overlay for ultimate cleanliness and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/88 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/40" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/70 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content (Left 7-8 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="tracking-tight">대한민국 1% 프리미엄 청소 마스터 솔루션</span>
            </motion.div>

            {/* Main Headlines with Natural Korean Linebreaks (break-keep) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.18] break-keep">
                눈에 보이지 않는 곳까지 완벽하게, <br className="hidden sm:inline" />
                <span className="text-blue-700 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">
                  {siteConfig.brand.name}
                </span>
                이 기준을 만듭니다.
              </h1>

              <p className="text-lg sm:text-2xl font-extrabold text-slate-800 break-keep leading-snug">
                &ldquo;{siteConfig.brand.subSlogan}&rdquo;
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 max-w-xl break-keep leading-relaxed font-medium">
                외주나 하도급 없는 <strong className="text-blue-700 font-bold">100% 한국인 직영 마스터팀</strong>이
                독일 명품 친환경 장비와 150℃ 고온 스팀으로 티끌 하나 남김없이 완벽하게 복원해 드립니다.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 transition-all duration-200 cursor-pointer"
              >
                <span>무료 견적 받기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                onClick={() => scrollToSection('#reviews')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-base px-7 py-4 rounded-2xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <span>비포 & 애프터 후기</span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              </motion.button>
            </motion.div>

            {/* Key Trust Checkpoints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 font-bold"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-keep">100% 한국인 직영</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-keep">고객 만족도 {siteConfig.hero.satisfactionRate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-keep">친환경 생분해 세제</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="break-keep">100% 무료 A/S 보장</span>
              </div>
            </motion.div>

          </div>

          {/* Right Highlight Card (Right 4-5 Cols) - Clean, bright luxury card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-100 rounded-full blur-2xl pointer-events-none" />

              {/* Top rating header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <ThumbsUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm text-slate-900 tracking-tight">
                      고객 만족도 {siteConfig.hero.satisfactionRate} 달성
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">재이용 및 추천 의향 최우수</p>
                  </div>
                </div>
                <div className="flex items-center text-amber-500 text-xs font-black gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{siteConfig.hero.ratingScore} / 5.0</span>
                </div>
              </div>

              {/* Progress Count */}
              <div className="space-y-2">
                <div className="text-xs text-blue-600 font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkle className="w-3.5 h-3.5" />
                  <span>지금까지 진행한 청소</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {siteConfig.hero.completedCleanCount}<span className="text-lg font-bold text-slate-500"> 건 완료</span>
                </div>
                <p className="text-xs text-slate-600 break-keep leading-relaxed font-medium">
                  오늘 하루도 {siteConfig.hero.activeTeamsToday}팀의 직영 전문가들이 수도권 전역에서 꼼꼼하고 정직한 프리미엄 청소를 시공하고 있습니다.
                </p>
              </div>

              {/* 100% 무료 A/S 보장 */}
              <div className="pt-2">
                <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-xs space-y-0.5">
                    <p className="font-bold text-slate-900 text-sm">100% 무료보장 A/S 시스템</p>
                    <p className="text-slate-600 text-[11px] break-keep font-medium">
                      청소 완료 후 조금이라도 미흡한 곳이 있다면 3일 이내 무상으로 신속히 재방문 케어해 드립니다.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
