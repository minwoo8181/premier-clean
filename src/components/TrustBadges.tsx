'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, RotateCcw, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

const ICON_MAP = {
  ShieldCheck,
  CreditCard,
  RotateCcw,
  Coffee,
};

export default function TrustBadges() {
  const badges = siteConfig.trustBadges;

  return (
    <section className="py-12 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Mini Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black tracking-wider text-slate-500 uppercase">
              100% 본사 직영 책임 시공 보증제
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>고객 불안 요소 4대 사전 차단</span>
          </div>
        </div>

        {/* 4 Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100/60 group-hover:bg-blue-600 group-hover:text-white px-2.5 py-0.5 rounded-full transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-blue-700 transition-colors break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 mt-0.5 break-keep">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal break-keep">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>공식 보증 원칙 준수</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
