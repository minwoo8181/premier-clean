import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-sky-200" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                PREMIER <span className="text-blue-500">CLEAN</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              프리미어 클린은 100% 한국인 직영 마스터팀으로 운영되는 프리미엄 청소 전문 기업입니다. 타협 없는 시공과 명품 친환경 기술로 새로운 주거·업무 환경의 기준을 만듭니다.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>영업배상책임보험 5억 원 가입 인증 업체</span>
            </div>
          </div>

          {/* Nav Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold text-white text-sm">바로가기</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">회사소개 및 핵심가치</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">홈클리닝 & 사업장 서비스</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">비포 & 애프터 작업후기</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">실시간 무료견적 신청</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-white text-sm">고객센터 & 업무 제휴</h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-white font-bold text-sm">010-5886-4567</span>
                <span className="text-slate-500">(업무시간 08:00~21:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>contact@premierclean.co.kr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>경기도 다산중앙로 82번 안길 </span>
              </div>
            </div>
          </div>

        </div>

        {/* Business Registration Details & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p>
              (주)프리미어클린마스터 | 대표자: 김대표 | 사업자등록번호: 123-85-67890 | 통신판매업신고: 2026-서울강남-0123호
            </p>
            <p>
              개인정보보호책임자: 이민우 | 직영 교육원: 경기 다산동 
            </p>
          </div>

          <p className="text-center md:text-right">
            &copy; PREMIER CLEAN. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
