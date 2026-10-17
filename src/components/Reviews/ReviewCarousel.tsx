'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { ReviewItem } from '@/types';

interface ReviewCarouselProps {
  reviews: ReviewItem[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll timer
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  if (!reviews || reviews.length === 0) return null;

  const current = reviews[currentIndex];

  return (
    <div
      className="relative bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header of the Carousel */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              실제 100% 고객 검증 후기
            </span>
            <span className="text-xs text-slate-400">
              ({currentIndex + 1} / {reviews.length})
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white mt-1 break-keep">
            고객님들이 증명하는 프리미어 클린의 품격
          </h4>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Review Card Body with AnimatePresence */}
      <div className="relative z-10 py-8 min-h-[260px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id || currentIndex}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35 }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Review text & metadata (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Star rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-600'
                    }`}
                  />
                ))}
                <span className="text-sm font-bold text-amber-400 ml-2">
                  {current.rating}.0
                </span>
                <span className="text-xs text-slate-400 ml-2">
                  | {current.serviceType}
                </span>
              </div>

              {/* Quote icon & text */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-slate-800 pointer-events-none -z-0 opacity-60" />
                <p className="relative z-10 text-base sm:text-lg text-slate-200 font-medium leading-relaxed break-keep">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                  {current.author.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white">{current.author}</span>
                    <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      직영 검수 완료
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{current.location} · {current.date}</p>
                </div>
              </div>

            </div>

            {/* Thumbnail preview if available (4 cols) */}
            <div className="lg:col-span-4 flex gap-3">
              {current.beforeImage && (
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">시공 전</div>
                  <div
                    className="w-full h-28 rounded-xl bg-cover bg-center border border-slate-700 shadow-sm"
                    style={{ backgroundImage: `url('${current.beforeImage}')` }}
                  />
                </div>
              )}
              {current.afterImage && (
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] font-bold text-blue-400 uppercase">시공 후</div>
                  <div
                    className="w-full h-28 rounded-xl bg-cover bg-center border border-blue-500/40 shadow-sm ring-2 ring-blue-500/20"
                    style={{ backgroundImage: `url('${current.afterImage}')` }}
                  />
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom dots */}
      <div className="relative z-10 flex justify-center items-center gap-2 pt-2 border-t border-slate-800">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
            }`}
            aria-label={`리뷰 ${i + 1}번 보기`}
          />
        ))}
      </div>
    </div>
  );
}
