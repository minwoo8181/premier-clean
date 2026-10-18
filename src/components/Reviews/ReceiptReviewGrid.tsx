'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2, FileCheck2, Camera } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ReceiptReviewGrid() {
  const reviews = siteConfig.receiptReviews;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-200">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>100% 현장 검수 체크리스트 & 영수증 인증 후기</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 break-keep">
            실제 고객 검수표와 내돈내산 리얼 시공 사례
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 break-keep">
            현장에서 고객님과 함께 체크리스트를 확인하고 동행 검수를 마친 실제 후기입니다.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex-shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>조작 없는 100% 실명 검수</span>
        </div>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-5"
          >
            {/* Top metadata & Verification Badge */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white font-black flex items-center justify-center text-base shadow-md shadow-blue-600/20">
                    {item.customerName.slice(0, 1)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {item.customerName}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      {item.location} · {item.spaceType}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-emerald-700 text-[11px] font-black flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>검수 완료</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
                <span className="text-xs font-black text-amber-600 ml-1.5">
                  5.0 만점
                </span>
              </div>

              {/* Verified Checklist Tags */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-3.5 space-y-2">
                <span className="text-[11px] font-black uppercase text-blue-700 flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>현장 1:1 동행 검수 체크리스트 확인 항목</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {item.checklistSummary.map((chk) => (
                    <div key={chk} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="break-keep">{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Comment Quote */}
              <p className="text-sm text-slate-700 font-medium leading-relaxed break-keep">
                &ldquo;{item.reviewComment}&rdquo;
              </p>
            </div>

            {/* Bottom Real Photo Preview */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.actualPhotoUrl}')` }}
                  />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-blue-600" />
                    <span>현장 시공 실사 사진</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">직영 팀장 촬영 검수본</span>
                </div>
              </div>

              <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                100% 직영 시공
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
