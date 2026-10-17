'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, CheckCircle, Upload, Star, AlertCircle } from 'lucide-react';
import { verifyAdminPassword, createReview } from '@/lib/supabase';
import { ReviewItem } from '@/types';

interface AdminReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewCreated: (review: ReviewItem) => void;
}

export default function AdminReviewModal({
  isOpen,
  onClose,
  onReviewCreated,
}: AdminReviewModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Form State
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [serviceType, setServiceType] = useState('신축 입주청소');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [beforeImage, setBeforeImage] = useState(
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  );
  const [afterImage, setAfterImage] = useState(
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPassword(password)) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('비밀번호가 일치하지 않습니다. (기본값: 0000)');
    }
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !content) {
      alert('고객명과 후기 내용을 모두 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const saved = await createReview({
        author,
        location: location || '서울 경기권',
        serviceType,
        rating,
        content,
        beforeImage,
        afterImage,
      });

      setSuccessMessage('후기가 성공적으로 등록되었습니다!');
      onReviewCreated(saved);

      setTimeout(() => {
        setSuccessMessage('');
        setIsAuthenticated(false);
        setPassword('');
        setAuthor('');
        setLocation('');
        setContent('');
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
      alert('후기 등록 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm">관리자 후기 등록 (Light Admin)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {!isAuthenticated ? (
            /* Step 1: Password Verification */
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="text-center space-y-2 py-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 mx-auto flex items-center justify-center shadow-inner">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  관리자 비밀번호를 입력해 주세요
                </h3>
                <p className="text-xs text-slate-500">
                  테스트용 초기 기본 비밀번호는 <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded font-mono font-bold">0000</code> 입니다.
                </p>
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호 4자리 입력"
                  maxLength={10}
                  className="w-full text-center tracking-widest text-lg font-bold px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  autoFocus
                />
                {passwordError && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-500 mt-2 justify-center font-medium">
                    <AlertCircle className="w-4 h-4" />
                    <span>{passwordError}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                비밀번호 확인
              </button>
            </form>
          ) : (
            /* Step 2: Review Upload Form */
            <form onSubmit={handleCreateSubmit} className="space-y-4">
              {successMessage ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{successMessage}</h4>
                  <p className="text-xs text-slate-500">페이지에 즉시 반영됩니다.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-blue-600">인증 완료: 후기 등록 모드</span>
                    <span className="text-[11px] text-slate-400">Supabase DB 연동</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">고객명</label>
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="예: 송*호 고객님"
                        required
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">시공 장소 및 평수</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="예: 서울 송파구 34평"
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">서비스 유형</label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                      >
                        <option value="신축 입주청소">신축 입주청소</option>
                        <option value="구축 이사청소">구축 이사청소</option>
                        <option value="거주 딥클리닝">거주 딥클리닝</option>
                        <option value="사업장/사무실 정기">사업장/사무실 정기</option>
                        <option value="상가 오픈 청소">상가 오픈 청소</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">만족도 평점</label>
                      <div className="flex items-center gap-1 pt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setRating(s)}
                            className="p-1 focus:outline-none"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                s <= rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      시공 전 사진 URL (Before)
                    </label>
                    <input
                      type="url"
                      value={beforeImage}
                      onChange={(e) => setBeforeImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      시공 후 사진 URL (After)
                    </label>
                    <input
                      type="url"
                      value={afterImage}
                      onChange={(e) => setAfterImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">고객 후기 내용</label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={3}
                      placeholder="청소 완료 후 고객님의 만족도 및 주요 시공 내용..."
                      required
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{isSubmitting ? '업로드 등록 중...' : '작업 후기 등록하기'}</span>
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
