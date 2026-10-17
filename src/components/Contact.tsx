'use client';

import React, { useState } from 'react';
import { Send, Phone, Clock, ShieldAlert, CheckCircle2, Home, Building2, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendInquiryEmail } from '@/lib/emailjs';
import { InquiryFormData } from '@/types';
import { siteConfig } from '@/config/site';

const SPACE_SIZES = [
  '원룸/투룸 (15평 이하)',
  '20평형대 (20~29평)',
  '30평형대 (30~39평)',
  '40평형대 이상 (40평~)',
  '사무실 / 상업 매장',
];

export default function Contact() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    serviceType: 'home',
    spaceSize: '30평형대 (30~39평)',
    serviceDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    simulated?: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.name.trim()) {
      setValidationError('고객명(또는 업체명)을 입력해 주세요.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 11) {
      setValidationError('올바른 연락처 번호(9~11자리 숫자)를 입력해 주세요. 예: 010-1234-5678');
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await sendInquiryEmail(formData);
      setSubmitResult(res);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1d4ed8', '#38bdf8', '#60a5fa', '#93c5fd'],
        });
      } catch {
        // Confetti fallback
      }

      // Reset form after a brief period
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          serviceType: 'home',
          spaceSize: '30평형대 (30~39평)',
          serviceDate: '',
          message: '',
        });
      }, 2000);
    } catch (error: unknown) {
      const errMessage = error instanceof Error ? error.message : '전송 중 문제가 발생했습니다.';
      setSubmitResult({
        success: false,
        message: errMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 2xl:py-36 bg-white relative">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FAST QUOTE & CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight break-keep">
            1:1 무료 맞춤 견적 및{' '}
            <span className="text-blue-700 inline-block">작업 요청</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto break-keep text-center leading-relaxed">
            {siteConfig.contact.formSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Info & Brand Trust (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-7 text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-sky-300">
                  고객 상담 센터
                </span>
                <h3 className="text-2xl font-black">전화 직통 상담</h3>
                <a
                  href={siteConfig.contact.phoneTel}
                  className="inline-block text-3xl sm:text-4xl font-extrabold text-white tracking-tight hover:text-sky-300 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>상담 시간: {siteConfig.contact.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>문자 상담 및 야간 접수 가능 (순차 회신)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>100% 무료 A/S 보장 (3일 이내 무상 재방문)</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Process Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900">
                견적 및 시공 진행 순서
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-800">온라인 견적 접수</strong>
                    <p className="text-[11px] text-slate-500">폼 작성 후 30분 내 유선/카톡 전문 상담</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-800">예약 확정 및 배정</strong>
                    <p className="text-[11px] text-slate-500">지역별 100% 한국인 직영 마스터팀 배정</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-800">시공 및 현장 동행 검수</strong>
                    <p className="text-[11px] text-slate-500">독일 친환경 장비 시공 후 고객 직접 확인</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Interactive Form (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Type Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  서비스 유형 선택 <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: 'home' })}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      formData.serviceType === 'home'
                        ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span>홈클리닝 (입주/이사/거주)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: 'commercial' })}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      formData.serviceType === 'commercial'
                        ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Building2 className="w-4 h-4" />
                    <span>사업장 (사무실/상가)</span>
                  </button>
                </div>
              </div>

              {/* Space Size Chips */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  공간 면적 / 평수
                </label>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  {SPACE_SIZES.map((size, idx) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setFormData({ ...formData, spaceSize: size })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                        idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                      } ${
                        formData.spaceSize === size
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    고객명 / 업체명 <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    required
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    연락처 <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-1234-5678"
                    required
                    className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white shadow-inner"
                  />
                </div>
              </div>

              {/* Service Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  희망 시공 일자 (선택)
                </label>
                <input
                  type="date"
                  value={formData.serviceDate}
                  onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white shadow-inner text-slate-700"
                />
              </div>

              {/* Detailed Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  문의 내용 및 요청사항
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  placeholder="상세 위치(아파트명 또는 상가 위치), 특이사항(곰팡이, 스티커 제거, 인테리어 분진 등)을 적어주시면 더욱 정밀한 견적이 가능합니다."
                  className="w-full text-sm px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white shadow-inner"
                />
              </div>

              {/* Validation Warning */}
              {validationError && (
                <div className="p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Submit Notification Toast */}
              {submitResult && (
                <div
                  className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                    submitResult.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{submitResult.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 disabled:opacity-50 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-blue-600/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? '견적 요청 전송 중...' : '작업요청 하기'}</span>
              </button>

              {/* Required Guarantee Footer Note (기획서 명시) */}
              <p className="text-center text-xs sm:text-sm text-gray-400 font-medium">
                ※ 100% A/S 보장을 위해 청소일 기준 3일 이내 계약 범위 촬영 사진이 필요합니다.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
