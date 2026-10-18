import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import About from '@/components/About';
import CleaningProcess from '@/components/CleaningProcess';
import Services from '@/components/Services';
import ReviewsSection from '@/components/Reviews/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import Contact from '@/components/Contact';
import FloatingActions from '@/components/FloatingActions';
import MobileStickyBar from '@/components/MobileStickyBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 pb-16 md:pb-0">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Main Hero Showcase */}
        <Hero />

        {/* 2. 4대 안심 보증 배지 (보험 5억 / 전액 후불제 / 3일 A/S / 식사비 0원) */}
        <TrustBadges />

        {/* 3. 브랜드 핵심 가치 (100% 직영 마스터케어) */}
        <About />

        {/* 4. 공간 구역별 100% 완전 탈거·멸균 정밀 매뉴얼 */}
        <CleaningProcess />

        {/* 5. 주거 & 상업공간 50:50 듀얼 마스터 서비스 */}
        <Services />

        {/* 6. 결과로 증명하는 리얼 현장 검수 후기 & 비포애프터 */}
        <ReviewsSection />

        {/* 7. 자주 묻는 질문 (토스 스타일 아코디언 FAQ) */}
        <FaqSection />

        {/* 8. 1:1 무료 맞춤 견적 및 상담 신청 */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Floating Actions & Scroll-to-Top */}
      <FloatingActions />

      {/* Mobile-Only 3-Part Smart Sticky Bottom Bar */}
      <MobileStickyBar />
    </div>
  );
}
