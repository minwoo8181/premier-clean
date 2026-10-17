/**
 * =========================================================================
 * 🌟 [프리미어 클린] 중앙 통합 설정 파일 (Site Configuration)
 * =========================================================================
 * 토스(Toss) / 애플(Apple) 감성의 절제된 카피와 편리한 통합 설정입니다.
 * 비개발자나 운영자도 이 파일 하나만 수정하면 웹사이트의 모든
 * 전화번호, 사진, 카카오톡/인스타 링크, 사업자 정보, DB/이메일 키가 즉시 바뀝니다!
 */

export const siteConfig = {
  // 1. 기본 브랜드 정보 (홈/상업 50:50 균형)
  brand: {
    name: '프리미어 클린',
    englishName: 'PREMIER CLEAN',
    slogan: '주거부터 비즈니스 공간까지, 프리미어 클린이 기준을 만듭니다.',
    subSlogan: '청소는 아무나 하는 게 아닙니다. 청소도 정밀한 기술입니다.',
    description: '100% 한국인 직영 마스터팀 · 독일 친환경 장비 · 고객만족도 99% · 100% 무료 A/S 보장',
  },

  // 2. 고객센터 및 연락처 정보 (전화번호 변경 시 여기서만 바꾸시면 됩니다!)
  contact: {
    phone: '1800-0000',                                                               // 대표 전화번호 (화면 표시용)
    phoneTel: 'tel:1800-0000',                                                        // 전화 걸기 링크
    operatingHours: '매일 08:00 ~ 21:00 (연중무휴)',
    email: 'contact@premierclean.co.kr',
    kakaoChatUrl: process.env.NEXT_PUBLIC_KAKAO_CHAT_URL || 'https://open.kakao.com', // 카카오톡 1:1 상담 링크
    instagramUrl: 'https://instagram.com',                                            // 공식 인스타그램 링크
    instagramHandle: 'premierclean_official',
    formSubtitle: '원하시는 공간과 일정에 맞춰 최적의 맞춤 견적을 신속히 안내해 드립니다.', // 견적 폼 서브타이틀
  },

  // 3. 회사 및 사업자 등록 정보 (Footer에 표시)
  company: {
    corporateName: '(주)프리미어클린마스터',
    ceo: '김대표',
    businessNumber: '123-85-67890',
    telecomSalesNumber: '2026-서울강남-0123호',
    address: '서울특별시 강남구 테헤란로 152 강남파이낸스센터 18층',
    trainingCenter: '경기 용인시 기흥구 기술연수원',
    privacyOfficer: '최관리',
    insuranceNotice: '영업배상책임보험 5억 원 가입 인증 업체',
  },

  // 4. 메인 히어로 섹션 이미지 & 실적 수치
  hero: {
    // 한국 최고급 아파트 거실 채광 (화이트 & 자연광)
    backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    completedCleanCount: '12,840',     // 지금까지 진행한 청소 건수
    ratingScore: '4.98',              // 고객 만족도 평점 (5.0 만점)
    satisfactionRate: '99%',           // 만족도 퍼센트
    activeTeamsToday: '24',            // 오늘 출동 중인 직영팀 수
  },

  // 5. 📸 비포 & 애프터(Before & After) 비교 사진 목록 (한국형 주거 & 오피스 50:50)
  beforeAfterShowcases: [
    {
      id: 'kitchen',
      category: '주방 딥클리닝',
      title: '주방 싱크대 & 인덕션 탄자국·기름때 완벽 박멸',
      desc: '인덕션 상판 탄화물과 후드 필터 기름때를 150℃ 고온 스팀과 친환경 연마 기술로 복원',
      before: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1400&q=80',
      after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'bathroom',
      category: '욕실 멸균케어',
      title: '욕실 타일 줄눈 물때·곰팡이 멸균 및 나노 코팅',
      desc: '환풍기 모터 및 배수구 탈거 세척, 수전 물때 스케일링, 거울 유막 제거 및 항균 코팅',
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
      after: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'window',
      category: '창틀·베란다 케어',
      title: '창틀 4면 찌든 흙먼지 & 방충망 미세먼지 완벽 제거',
      desc: '외부 유입 매연과 결로 찌든 때를 고압 스팀과 틈새 전용 브러시로 새시 원형 복원',
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
      after: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    },
    {
      id: 'office',
      category: '사업장 바닥 코팅',
      title: '사무실 데코타일 묵은 때 박리 & 2회 고광택 왁스',
      desc: '스크래치와 생활 오염 박리 후 미끄럼 방지 친환경 고광택 수지 왁스 2회 도포',
      before: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=80',
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    },
  ],

  // 6. 고객 검증 실시간 후기 (기본 목록)
  reviews: [
    {
      id: 'rev-1',
      author: '김*현 고객님',
      location: '서울 서초구 반포자이 (34평)',
      serviceType: '신축 입주청소',
      rating: 5,
      content: '싱크대 하부장 걸레받이 안쪽이랑 등기구까지 탈거해서 공사 분진 싹 닦아주신 거 보고 감동했습니다. 피톤치드 향도 너무 산뜻해요!',
      date: '2026.10.12',
      beforeImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      verified: true,
    },
    {
      id: 'rev-2',
      author: '이*진 대표님',
      location: '성남 분당구 IT벤처사무실 (65평)',
      serviceType: '사업장 정기/오픈청소',
      rating: 5,
      content: '사무실 이전하고 바닥 타일 왁스코팅 의뢰드렸는데 출근하자마자 새 건물 온 것 같다고 직원들이 너무 좋아하네요. 냄새도 전혀 없습니다.',
      date: '2026.10.08',
      beforeImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      verified: true,
    },
    {
      id: 'rev-3',
      author: '박*서 고객님',
      location: '경기 하남시 미사강변 (28평)',
      serviceType: '이사 청소 & 곰팡이 케어',
      rating: 5,
      content: '화장실 줄눈 물때와 베란다 결로 곰팡이가 심했는데 새집처럼 하얗게 복원되었습니다. 한국인 팀장님이 꼼꼼히 설명해주셔서 안심이었습니다.',
      date: '2026.09.29',
      beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
      verified: true,
    },
    {
      id: 'rev-4',
      author: '정*우 고객님',
      location: '인천 연수구 송도더샵 (45평)',
      serviceType: '프리미엄 입주 마스터케어',
      rating: 5,
      content: '독일 친환경 스팀 장비로 고온 멸균해주시고 수납장 하나하나 탈거 청소해주시는 모습에 프리미엄 가치를 제대로 느꼈습니다.',
      date: '2026.09.18',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      verified: true,
    },
  ],

  // 7. 인스타그램 공식 계정 피드 목업 사진
  instagramPosts: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      likes: 342,
      comments: 28,
      caption: '오늘도 반포자이 45평 입주청소 완료✨ 채광 들어오는 거실이 반짝입니다. #프리미어클린 #입주청소',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      likes: 289,
      comments: 15,
      caption: '기름때 가득했던 주방 후드가 새것처럼 복원된 순간! 독일제 스팀 장비의 위력🔥 #주방청소 #스팀세척',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
      likes: 412,
      comments: 31,
      caption: '호텔 욕실처럼 뽀송뽀송하게🫧 물때 0% 도전 성공! #욕실청소 #줄눈케어 #피톤치드',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      likes: 198,
      comments: 12,
      caption: '판교 테크노밸리 공유오피스 정기관리 현장. 바닥 광택이 살아나니 업무 환경이 확 달라지네요🏢 #오피스청소',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
      likes: 256,
      comments: 19,
      caption: '창틀 흙먼지 한 톨 남기지 않는 꼼꼼함! 100% 한국인 직영팀의 자부심입니다💪 #청소전문가',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      likes: 387,
      comments: 24,
      caption: '고객님의 새 출발을 응원하는 마음으로. 오늘도 정성을 다해 닦아냅니다🙏 #프리미어클린 #고객만족',
    },
  ],

  // 8. 🔑 외부 연동 키 설정 (Supabase DB 저장소 및 EmailJS 자동 이메일 푸시)
  // .env.local 파일을 만들지 않고도 이 파일에 바로 값을 적으면 즉시 연동됩니다!
  integrations: {
    // 관리자 비밀번호 (후기 등록 모달 팝업 비밀번호, 기본값: '0000')
    adminPassword: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || '0000',

    // Supabase 연동 (후기 사진 및 리뷰 DB 저장소)
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',           // 예: 'https://your-project.supabase.co'
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',  // Supabase Anon Public Key
    },

    // EmailJS 연동 (고객이 "작업요청 하기" 누르면 사장님 이메일로 자동 푸시 알림)
    emailjs: {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',   // 예: 'service_xxxx'
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // 예: 'template_xxxx'
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',   // 예: 'user_xxxx'
    },
  },
};
