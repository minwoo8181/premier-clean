'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';
import { BEFORE_AFTER_SHOWCASES } from '@/lib/mockData';

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_SHOWCASES[currentIndex];

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

  return (
    <div className="space-y-6">
      {/* Category selector chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {BEFORE_AFTER_SHOWCASES.map((item, idx) => (
          <button
            key={item.category}
            onClick={() => {
              setCurrentIndex(idx);
              setSliderPosition(50);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              currentIndex === idx
                ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Main Interactive Split-slider Container */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-3 sm:p-5">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 gap-2 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
              {currentItem.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 break-keep">
              {currentItem.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 break-keep">{currentItem.desc}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1.5 rounded-full flex-shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
            <span>슬라이더를 좌우로 드래그해 보세요</span>
          </div>
        </div>

        {/* Visual Slider Frame */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full h-[360px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize mt-4 shadow-inner"
        >
          {/* AFTER Image (Full width underneath) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${currentItem.after}')` }}
          >
            <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>AFTER (시공 후)</span>
            </div>
          </div>

          {/* BEFORE Image (Clipped on top based on sliderPosition) */}
          <div
            className="absolute inset-0 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url('${currentItem.before}')`,
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md">
              <span>BEFORE (시공 전)</span>
            </div>
          </div>

          {/* Dividing Vertical Line & Drag Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-blue-600 flex items-center justify-center text-blue-700">
              <ArrowLeftRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>

        </div>

        {/* Quick percentage indicators */}
        <div className="pt-3 flex justify-between items-center text-[11px] font-semibold text-slate-400">
          <span>◀ 이전 상태 (BEFORE)</span>
          <span className="text-blue-600 font-bold">중앙 분할 {Math.round(sliderPosition)}%</span>
          <span>복원 완료 (AFTER) ▶</span>
        </div>

      </div>
    </div>
  );
}
