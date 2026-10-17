'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Check, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/mockData';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'home' | 'commercial'>('home');

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentService = SERVICES_DATA.find((s) => s.category === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Proper Korean Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>PREMIER CLEAN SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
            공간의 목적에 맞춘 <br className="hidden sm:inline" />
            <span className="text-blue-700 inline-block">전문 프리미엄 클리닝</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 break-keep max-w-2xl mx-auto leading-relaxed">
            가장 편안한 주거 공간부터 신뢰를 주는 비즈니스 공간까지, 공간 특화 공정과 전용 친환경 장비로 최상의 청결도를 완성합니다.
          </p>
        </div>

        {/* Category Switch Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer break-keep ${
                activeTab === 'home'
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>홈클리닝 (주거 공간)</span>
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer break-keep ${
                activeTab === 'commercial'
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-5 h-5" />
              <span>사업장 클리닝 (기업/상업 공간)</span>
            </button>
          </div>
        </div>

        {/* Service Detail Card (Tab Content) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Image & Overlay (5 Cols) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${currentService.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {currentService.badge}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <p className="text-xs uppercase tracking-wider text-sky-300 font-semibold">
                  {activeTab === 'home' ? 'Home Master Care' : 'Business Space Care'}
                </p>
                <h3 className="text-2xl font-black break-keep">{currentService.title}</h3>
                <p className="text-xs text-slate-200/90 leading-relaxed break-keep">
                  {currentService.description}
                </p>
              </div>
            </div>

            {/* Right Details & Checklist (7 Cols) */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-8 bg-white">
              
              {/* Highlights Chips */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                  주요 케어 영역
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3.5 py-1.5 bg-blue-50 text-blue-800 text-xs sm:text-sm font-semibold rounded-xl border border-blue-100 break-keep"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* In-depth Features */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold text-slate-900">
                  프리미어 클린만의 정밀 시공 범위
                </h4>
                <div className="space-y-2.5">
                  {currentService.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium leading-relaxed break-keep">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA Notice Area */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-2xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    <span className="break-keep">공간 면적, 오염도, 층고, 요청 옵션에 따라 맞춤 산출됩니다.</span>
                  </div>
                  <p className="text-base sm:text-lg font-extrabold text-slate-900 break-keep">
                    자세한 견적은 문의해주세요
                  </p>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-blue-700/20 active:scale-95 transition-all cursor-pointer break-keep"
                >
                  <span>맞춤 견적 상담 받기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm break-keep">입주·이사 전 꼼꼼한 사전 체크</h5>
              <p className="text-xs text-slate-500 mt-0.5 break-keep">벽지 오염, 창호 실리콘 곰팡이 유무 등 주요 점검 포인트를 꼼꼼히 확인해 드립니다.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm break-keep">정기 관리 및 100% 무료 A/S 보장</h5>
              <p className="text-xs text-slate-500 mt-0.5 break-keep">기업 고객 맞춤형 정기 결제 및 매월 담당 관리자의 작업 리포트를 전달합니다.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
