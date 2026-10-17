'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Edit3 } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import ReviewCarousel from './ReviewCarousel';
import InstagramFeed from './InstagramFeed';
import AdminReviewModal from './AdminReviewModal';
import { fetchReviews } from '@/lib/supabase';
import { ReviewItem } from '@/types';
import { INITIAL_REVIEWS } from '@/lib/mockData';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadReviews() {
      const data = await fetchReviews();
      if (data && data.length > 0) {
        setReviews(data);
      }
    }
    loadReviews();
  }, []);

  const handleReviewCreated = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REAL TRANSFORMATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
              결과로 증명하는{' '}
              <span className="text-blue-700 inline-block">생생한 작업 후기</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl break-keep">
              100% 한국인 직영 마스터팀이 직접 시공한 비포 & 애프터 현장 사진과 실제 의뢰 고객님들의 평가를 확인해 보세요.
            </p>
          </div>

          {/* Light-weight Admin [글쓰기] Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-700 border border-slate-300 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Edit3 className="w-4 h-4 text-blue-600" />
              <span>후기 등록 (관리자)</span>
            </button>
          </div>
        </div>

        {/* 1. Interactive Before & After Split Slider */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              정밀 비교 비포 & 애프터
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              실제 시공 전/후의 극명한 차이를 확인하세요.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>

        {/* 2. Framer Motion Auto-rolling Review Carousel */}
        <div className="space-y-6 pt-4">
          <ReviewCarousel reviews={reviews} />
        </div>

        {/* 3. Instagram Feed UI Mockup */}
        <div className="space-y-6 pt-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              인스타그램 공식 현장 피드
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              매일 업데이트되는 수도권 전역의 마스터케어 현장 스토리
            </p>
          </div>
          <InstagramFeed />
        </div>

      </div>

      {/* Admin Review Upload Modal */}
      <AdminReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewCreated={handleReviewCreated}
      />
    </section>
  );
}
