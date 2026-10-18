'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users2, ThumbsUp, Leaf, RotateCcw, ShieldCheck, CheckCircle } from 'lucide-react';

const USPS = [
  {
    icon: Users2,
    badge: '신뢰도 UP',
    title: '100% 한국인 직영팀',
    subtitle: '하도급·외주 프리랜서 제로',
    description:
      '외주나 일용직 인력에 위탁하지 않습니다. 본사 직영 교육을 이수한 한국인 베테랑 팀장과 정규 크루가 직접 시공합니다.',
    gradient: 'from-blue-600 to-indigo-600',
    border: 'border-blue-100 hover:border-blue-300',
  },
  {
    icon: ThumbsUp,
    badge: '재이용률 1위',
    title: '고객 만족도 99%',
    subtitle: '압도적인 실사용자 평가',
    description:
      '12,000건 이상의 누적 시공 데이터와 꼼꼼한 체크리스트 기반의 검수 프로세스로 입주·이사 고객님들께 최상의 청결 만족을 선사합니다.',
    gradient: 'from-indigo-600 to-sky-600',
    border: 'border-indigo-100 hover:border-indigo-300',
  },
  {
    icon: Leaf,
    badge: '프리미엄 원칙',
    title: '친환경 생분해 세제 & 전문 장비',
    subtitle: '영유아·반려동물 안심 케어',
    description:
      '저가 락스나 독성 화학약품을 일체 배제합니다. 산업용 고온 스팀 장비와 천연 생분해 친환경 세제만을 고집하여 냄새와 잔여물 없는 청정을 약속합니다.',
    gradient: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-100 hover:border-emerald-300',
  },
  {
    icon: RotateCcw,
    badge: '책임 보장제',
    title: '100% 무료 A/S 보장 시스템',
    subtitle: '불만족 시 무상 재방문 케어',
    description:
      '시공 후 미흡한 점이 발견되면 청소일 기준 3일 이내 신속하게 무상 재방문하여 완벽히 재케어해 드립니다. 끝까지 책임지는 프리미어 솔루션입니다.',
    gradient: 'from-blue-700 to-blue-500',
    border: 'border-sky-100 hover:border-sky-300',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Section Header with Natural Korean Break-Keep */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>PREMIER CLEAN CORE VALUES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
            프리미어 클린이 타협하지 않는{' '}
            <span className="text-blue-700 inline-block">4가지 약속</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed break-keep max-w-2xl mx-auto">
            비용만 깎고 겉만 훑는 일반 청소와 비교하지 말아주세요. 기술력과 정직함으로 증명하는 프리미어 클린만의 4대 핵심 가치입니다.
          </p>
        </div>

        {/* 4 USP Grid (Mobile: 1 col, PC: 2~4 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {USPS.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group bg-white rounded-3xl p-7 border ${usp.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Top Badge */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${usp.gradient} flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {usp.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors break-keep">
                      {usp.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 mt-1 break-keep">
                      {usp.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal break-keep">
                    {usp.description}
                  </p>
                </div>

                {/* Bottom mini indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>100% 직영 시스템</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean Process Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
              안심 무상 A/S 보증
            </span>
            <h4 className="text-xl sm:text-2xl font-bold break-keep">
              외주 없는 본사 직영팀의 꼼꼼한 마스터 클리닝을 경험해 보세요
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 break-keep">
              상담부터 현장 견적, 시공 후 100% 무료 A/S 보장까지 전담 매니저가 끝까지 책임집니다.
            </p>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 bg-white hover:bg-slate-100 text-blue-900 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            지금 무료 견적 상담받기
          </a>
        </motion.div>

      </div>
    </section>
  );
}
