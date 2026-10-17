import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '프리미어 클린 (Premier Clean) | 100% 직영 프리미엄 청소 전문',
  description:
    '눈에 보이지 않는 곳까지 완벽하게, 프리미어 클린이 기준을 만듭니다. 100% 한국인 직영팀, 고객만족도 99%, 친환경 최고급 케어, 100% A/S 보장 입주/이사/사무실 전문 클리닝.',
  keywords: [
    '프리미어클린',
    '입주청소',
    '이사청소',
    '사무실청소',
    '상가청소',
    '친환경청소',
    '피톤치드',
    '청소전문업체',
  ],
  openGraph: {
    title: '프리미어 클린 - 기준을 만드는 프리미엄 청소',
    description: '청소는 아무나 하는게 아니다. 청소도 기술이다. 100% 한국인 직영팀의 명품 청소 서비스',
    type: 'website',
    locale: 'ko_KR',
    siteName: '프리미어 클린 (Premier Clean)',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
