'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, Sparkles } from 'lucide-react';
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
    }, 5000);
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
      className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Luminous Background Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header of the Carousel */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black border border-blue-200/80 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>실시간 고객 검증 평가</span>
            </span>
            <span className="text-xs font-bold text-slate-400">
              ({currentIndex + 1} / {reviews.length})
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 break-keep">
            고객님들이 직접 증명하는 프리미어 클린의 품격
          </h4>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Review Card Body with AnimatePresence */}
      <div className="relative z-10 py-6 min-h-[260px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id || currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
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
                        : 'text-slate-200'
                    }`}
                  />
                ))}
                <span className="text-sm font-black text-amber-600 ml-2">
                  {current.rating}.0
                </span>
                <span className="text-xs font-bold text-slate-400 ml-2">
                  | {current.serviceType}
                </span>
              </div>

              {/* Quote icon & text */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-100 pointer-events-none -z-0 opacity-80" />
                <p className="relative z-10 text-base sm:text-lg text-slate-800 font-semibold leading-relaxed break-keep">
                  &ldquo;{current.content}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center font-black text-white text-base shadow-md shadow-blue-600/20 flex-shrink-0">
                  {current.author.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm sm:text-base text-slate-900">{current.author}</span>
                    <span className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      직영 검수 완료
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{current.location} · {current.date}</p>
                </div>
              </div>

            </div>

            {/* Right Mini Photo Preview (4 cols) */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[260px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${current.afterImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-black uppercase text-sky-300">ACTUAL WORK AFTER</span>
                  <p className="text-xs font-bold truncate">{current.serviceType}</p>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots Indicator */}
      <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-semibold">
          마우스를 올리면 자동 롤링이 일시 정지됩니다
        </span>
        <div className="flex items-center gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentIndex
                  ? 'w-7 bg-blue-700'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`${i + 1}번째 후기 보기`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
