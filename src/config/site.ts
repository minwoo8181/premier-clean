import {
  TrustBadgeItem,
  CleaningManualZone,
  FaqItem,
  ReceiptReviewItem,
} from '@/types';

/**
 * =========================================================================
 * 🌟 [프리미어 클린] 중앙 통합 설정 파일 (Site Configuration)
 * =========================================================================
 * 토스(Toss) / 리니어(Linear) 감성의 정갈하고 투명한 통합 설정 파일입니다.
 * 비개발자나 운영자도 이 파일 하나만 수정하면 웹사이트의 모든
 * 전화번호, 사진, 카카오톡/인스타 링크, 사업자 정보, 안심 보증, 구역별 공정,
 * FAQ, 검수 후기, DB/이메일 키가 즉시 바뀝니다!
 */

export const siteConfig = {
  // -----------------------------------------------------------------------
  // 1. 기본 브랜드 정보 (홈/상업 50:50 균형)
  // -----------------------------------------------------------------------
  brand: {
    name: '프리미어 클린',
    englishName: 'PREMIER CLEAN',
    slogan: '주거부터 비즈니스 공간까지, 프리미어 클린이 기준을 만듭니다.',
    subSlogan: '청소는 아무나 하는 게 아닙니다. 청소도 정밀한 기술입니다.',
    description: '100% 한국인 직영 마스터팀 · 전문가용 안심 스팀 장비 · 고객만족도 99% · 100% 무료 A/S 보장',
  },

  // -----------------------------------------------------------------------
  // 2. 고객센터 및 연락처 정보 (전화번호/카카오톡 링크 변경 시 여기서만 수정!)
  // -----------------------------------------------------------------------
  contact: {
    phone: '1800-0000',                                                               // 대표 전화번호 (화면 표시용)
    phoneTel: 'tel:1800-0000',                                                        // 전화 걸기 링크
    operatingHours: '매일 08:00 ~ 21:00 (연중무휴)',
    email: 'contact@premierclean.co.kr',
    kakaoChatUrl: process.env.NEXT_PUBLIC_KAKAO_CHAT_URL || 'https://open.kakao.com', // 카카오톡 1:1 상담 링크
    instagramUrl: 'https://instagram.com',                                            // 공식 인스타그램 링크
    instagramHandle: 'premierclean_official',
    formSubtitle: '원하시는 공간과 일정에 맞춰 최적의 맞춤 견적을 신속히 1:1 상담 안내해 드립니다.', // 견적 폼 서브타이틀
  },

  // -----------------------------------------------------------------------
  // 3. 회사 및 사업자 등록 정보 (Footer에 표시)
  // -----------------------------------------------------------------------
  company: {
    corporateName: '(주)프리미어클린마스터',
    ceo: '김대표',
    businessNumber: '123-85-67890',
    telecomSalesNumber: '2026-서울강남-0123호',
    address: '서울특별시 강남구 테헤란로 152 강남파이낸스센터 18층',
    trainingCenter: '경기 용인시 기흥구 기술연수원',
    privacyOfficer: '최관리',
    insuranceNotice: 'KB손해보험 영업배상책임보험 5억 원 가입 공식 인증 업체',
  },

  // -----------------------------------------------------------------------
  // 4. 메인 히어로 섹션 이미지 & 실적 수치
  // -----------------------------------------------------------------------
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    completedCleanCount: '12,840',     // 지금까지 진행한 청소 건수
    ratingScore: '4.98',              // 고객 만족도 평점 (5.0 만점)
    satisfactionRate: '99%',           // 만족도 퍼센트
    activeTeamsToday: '24',            // 오늘 출동 중인 직영팀 수
  },

  // -----------------------------------------------------------------------
  // 5. 🛡️ 4대 안심 보증 배지 (Trust Badges)
  // -----------------------------------------------------------------------
  trustBadges: [
    {
      id: 'insurance',
      badge: '공식 안심 가입',
      title: '영업배상책임 5억 원 가입',
      subtitle: '시공 중 파손 우려 100% 해소',
      description: '작업 중 발생할 수 있는 기물 파손, 스크래치 사고에 대비해 KB손해보험 5억 원 영업배상책임보험에 정식 가입되어 있습니다.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'postpay',
      badge: '불안감 ZERO',
      title: '100% 검수 후 안심 후불제',
      subtitle: '만족하지 않으시면 결제받지 않습니다',
      description: '선금을 과도하게 요구하지 않습니다. 고객님이 현장에 직접 방문하여 1:1 동행 검수를 마친 후 만족하셨을 때 최종 결제합니다.',
      iconName: 'CreditCard',
    },
    {
      id: 'warranty',
      badge: '끝까지 책임',
      title: '3일 이내 100% 무상 A/S',
      subtitle: '미흡한 곳 발견 시 무상 재방문',
      description: '입주 후 미처 발견하지 못했던 미흡한 부분이 있다면 청소 완료일 기준 3일 이내 신청 시 담당 팀장이 즉시 무상 재방문 케어합니다.',
      iconName: 'RotateCcw',
    },
    {
      id: 'zero-extra',
      badge: '정직한 원칙',
      title: '식사비·수고비 일체 요구 0원',
      subtitle: '투명한 사전 고지 & 추가금 강요 금지',
      description: '현장에서 기사 식대나 음료수, 부당한 추가 작업비를 절대 요구하지 않습니다. 계약된 내용 그대로 정직하게 시공합니다.',
      iconName: 'Coffee',
    },
  ] as TrustBadgeItem[],

  // -----------------------------------------------------------------------
  // 6. 🧼 공간 구역별 완전 탈거·멸균 프로세스 (구역별 정밀 청소 매뉴얼)
  // -----------------------------------------------------------------------
  cleaningManualZones: [
    {
      id: 'kitchen',
      zone: 'KITCHEN ZONE',
      title: '주방 딥클리닝 & 150℃ 고온 스팀',
      summary: '가장 위생적이어야 할 식사 공간, 기름때와 탄화물을 완전 분해 세척합니다.',
      disassemblyTargets: ['렌지후드 금속 필터망', '가스레인지 화구 및 삼발이', '싱크대 하부 걸레받이(가림판)', '칼꽂이 및 배수구 트랩'],
      specialMethods: ['150℃ 산업용 고온 스팀 분사 멸균', '친환경 생분해 오븐/기름때 연마제', '싱크볼 물때 스케일링 및 수전 살균'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      tag: '기름때·탄자국 박멸',
    },
    {
      id: 'bathroom',
      zone: 'BATHROOM ZONE',
      title: '욕실 멸균 케어 & 나노 유막 코팅',
      summary: '물때, 요석, 곰팡이 포자까지 뿌리 뽑는 위생 멸균 프로세스',
      disassemblyTargets: ['환풍기 겉커버 및 내부 모터팬', '바닥·세면대 배수구 유가 트랩', '샤워부스 물막이 패킹', '욕조 및 좌변기 틈새 커버'],
      specialMethods: ['고압 멸균 스팀 및 곰팡이 전용 박멸제', '수전/거울 미세 스크래치 없는 유막 제거', '타일 줄눈 스케일링 및 항균 피톤치드 코팅'],
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
      tag: '물때·곰팡이 0%',
    },
    {
      id: 'window',
      zone: 'WINDOW ZONE',
      title: '창호·샤시 4면 틈새 흙먼지 복원',
      summary: '외부 매연과 결로 찌든 때로 까맣게 변한 새시를 새집처럼 복원합니다.',
      disassemblyTargets: ['창틀 레일 4면 틈새 완전 세척', '방충망 표면 고압 분진 제거', '실리콘 곰팡이 및 결로 자국'],
      specialMethods: ['샤시 레일 전용 틈새 고압 스팀 브러시', '친환경 유리 세정 유막 제거제', '풍지판 및 방충망 먼지 집진'],
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
      tag: '창틀 흙먼지 완벽 제거',
    },
    {
      id: 'storage',
      zone: 'STORAGE & LIGHT ZONE',
      title: '수납장 100% 완전 탈거 & 조명 커버',
      summary: '겉만 닦고 지나치는 일반 청소와 달리, 레일 속 공사 분진까지 박멸합니다.',
      disassemblyTargets: ['붙박이장·신발장 모든 서랍 레일 탈거', '천장 조명 등기구 커버 탈거', '에어컨 필터망 분리', '콘센트 및 스위치 플레이트'],
      specialMethods: ['서랍 안쪽 보이지 않는 시멘트/톱밥 분진 흡입', '등기구 내부 날파리/미세먼지 제거', '친환경 천연 원목 케어제 도포'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      tag: '서랍장 100% 완전 분리',
    },
    {
      id: 'floor-air',
      zone: 'FLOOR & AIR ZONE',
      title: '친환경 바닥 습식 세척 & 피톤치드 훈증',
      summary: '공사 잔여물과 새집증후군 유해물질을 제거하고 맑은 숲속 공기를 채웁니다.',
      disassemblyTargets: ['걸레받이 상단 몰딩 도배풀 제거', '문틀 상하부 미세 분진', '바닥 모서리 실리콘 찌든때'],
      specialMethods: ['마루 손상 없는 중성 친환경 바닥 습식 클리닝', '헤파필터 집진기를 통한 미세먼지 배출', '천연 편백 피톤치드 공간 훈증 서비스'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      tag: '피톤치드 공간 멸균',
    },
  ] as CleaningManualZone[],

  // -----------------------------------------------------------------------
  // 7. 📸 비포 & 애프터(Before & After) 비교 사진 목록 (한국형 주거 & 오피스 50:50)
  // -----------------------------------------------------------------------
  beforeAfterShowcases: [
    {
      id: 'kitchen',
      category: '주방 딥클리닝',
      title: '주방 싱크대 & 인덕션 탄자국·기름때 완벽 복원',
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

  // -----------------------------------------------------------------------
  // 8. 🧾 고객 영수증 / 검수 체크리스트 인증 후기 카드 (신뢰도 극대화)
  // -----------------------------------------------------------------------
  receiptReviews: [
    {
      id: 'rr-1',
      customerName: '김*현 고객님',
      location: '서울 서초구 반포자이 34평',
      spaceType: '신축 아파트 입주청소',
      date: '2026.10.15 시공 완료',
      checklistSummary: ['걸레받이 안쪽 공사분진 박멸', '서랍장 12개 완전 탈거 검수', '욕실 배수구 유가 멸균 소독', '천연 피톤치드 훈증 완료'],
      reviewComment: '다른 데서 했을 땐 걸레받이 안쪽이나 등기구는 손도 안 댔는데, 팀장님이 직접 탈거해서 먼지 보여주시고 닦아주시는 모습에 진심으로 감동했습니다.',
      rating: 5,
      receiptVerified: true,
      actualPhotoUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'rr-2',
      customerName: '이*진 대표님',
      location: '성남 분당구 판교IT벤처 65평',
      spaceType: '오피스 이전 오픈청소',
      date: '2026.10.10 시공 완료',
      checklistSummary: ['데코타일 찌든때 완전 박리', '고광택 친환경 왁스 2회 코팅', '유리 파티션 손자국/유막 제거', '야간 작업 정시 완료'],
      reviewComment: '주말 야간 일정 맞춰서 깔끔하게 마쳐주셨고, 월요일 출근한 임직원들이 새 건물 입주한 것 같다고 감탄했습니다. 세금계산서도 바로 처리해주셨어요.',
      rating: 5,
      receiptVerified: true,
      actualPhotoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'rr-3',
      customerName: '박*서 고객님',
      location: '경기 하남시 미사강변 28평',
      spaceType: '구축 아파트 이사청소',
      date: '2026.10.03 시공 완료',
      checklistSummary: ['베란다 결로 곰팡이 박멸', '화장실 타일 줄눈 물때 복원', '창틀 4면 고압 스팀 세척', '3일 무상 A/S 보증서 발급'],
      reviewComment: '전 세입자가 관리를 너무 안 해서 곰팡이가 심했는데 새집처럼 하얗게 복원되었습니다. 한국인 직영팀장님이 설명도 꼼꼼히 해주셔서 안심이었어요.',
      rating: 5,
      receiptVerified: true,
      actualPhotoUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'rr-4',
      customerName: '정*우 고객님',
      location: '인천 연수구 송도더샵 45평',
      spaceType: '프리미엄 입주 마스터케어',
      date: '2026.09.28 시공 완료',
      checklistSummary: ['전등 커버 날파리 분진 흡입', '수납 선반 친환경 원목케어', '주방 상하부장 기름때 스팀', '동행 검수 후 후불 결제'],
      reviewComment: '사전 해피콜부터 검수까지 대기업 서비스 받는 기분이었습니다. 100% 직영 정규팀이라 그런지 손발이 척척 맞으시네요. 추천합니다.',
      rating: 5,
      receiptVerified: true,
      actualPhotoUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    },
  ] as ReceiptReviewItem[],

  // -----------------------------------------------------------------------
  // 9. 고객 검증 실시간 캐러셀 후기 (기본 목록)
  // -----------------------------------------------------------------------
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
      content: '전문가용 고온 스팀 장비로 멸균해주시고 수납장 하나하나 탈거 청소해주시는 모습에 프리미엄 가치를 제대로 느꼈습니다.',
      date: '2026.09.18',
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      verified: true,
    },
  ],

  // -----------------------------------------------------------------------
  // 10. ❓ 자주 묻는 질문 (FAQ 아코디언 데이터)
  // -----------------------------------------------------------------------
  faqList: [
    {
      id: 'faq-1',
      category: '견적/요금',
      question: '청소 당일 현장에서 임의로 추가 요금이 발생할 수 있나요?',
      answer: '프리미어 클린은 정직한 정찰제 상담을 원칙으로 합니다. 고객님과의 사전 상담 시 안내해 드린 범위를 벗어나 일방적으로 추가 요금을 요구하지 않습니다. 단, 사전 고지되지 않은 복층 다락방, 비확장 베란다 다수, 심각한 결로 곰팡이나 시트지 제거 등 특수 케어가 필요한 경우 반드시 고객님께 상태를 보여드리고 사전 동의를 구한 후에만 합리적으로 협의하여 진행합니다.',
    },
    {
      id: 'faq-2',
      category: '안심/보상',
      question: '작업 중에 혹시 기물 파손이나 스크래치가 생기면 어떻게 보상되나요?',
      answer: '프리미어 클린은 KB손해보험 영업배상책임보험 5억 원에 정식 가입되어 있습니다. 만에 하나 시공 과정에서 시설물이나 자재에 문제가 발생할 경우 본사 전담 매니저가 즉시 보험 접수 및 원상복구 처리를 신속하고 책임 있게 진행해 드립니다.',
    },
    {
      id: 'faq-3',
      category: '검수/결제',
      question: '결제는 선불인가요? 만족하지 못했을 때는 어떻게 하나요?',
      answer: '과도한 선금을 요구하지 않습니다. 청소가 완료되기 약 30분~1시간 전에 고객님께 연락을 드리며, 현장에서 팀장과 함께 체크리스트를 보며 1:1 동행 검수를 진행합니다. 모든 공간의 청결 상태를 직접 확인하시고 100% 만족하셨을 때 후불로 결제하시면 됩니다.',
    },
    {
      id: 'faq-4',
      category: '시공/소요시간',
      question: '청소하는 동안 제가 계속 현장에 지켜보고 있어야 하나요?',
      answer: '청소 내내 현장에 머무르실 필요가 전혀 없습니다. 작업 시작 시 전달하실 특이사항만 공유해 주시면 되며, 청소가 끝날 무렵 팀장이 사전 연락을 드리니 종료 시 최종 동행 검수에만 참석해 주시면 됩니다. 원하시는 경우 작업 중간 주요 탈거 부위 사진을 메신저로 전송해 드립니다.',
    },
    {
      id: 'faq-5',
      category: '시공/소요시간',
      question: '기사님들 식사비나 음료수를 따로 챙겨드려야 하나요?',
      answer: '절대 챙겨주실 필요가 없습니다! 프리미어 클린은 본사 정규 직영팀으로 운영되며 식사비나 간식, 수고비 명목의 일체 금품을 요구하거나 받지 않는 엄격한 본사 윤리 규정을 준수합니다. 마음만 감사히 받겠습니다.',
    },
    {
      id: 'faq-6',
      category: '안심/보상',
      question: '검수 후 뒤늦게 미흡한 부분을 발견하면 A/S가 가능한가요?',
      answer: '네, 100% 가능합니다. 이사 짐이 들어오거나 거주하시면서 미처 발견하지 못했던 미흡한 곳이 있다면 청소 완료일 기준 3일 이내에 연락해 주시면 전담 팀장이 신속히 무상 재방문하여 깔끔하게 재케어해 드립니다.',
    },
  ] as FaqItem[],

  // -----------------------------------------------------------------------
  // 11. 인스타그램 공식 계정 피드 목업 사진
  // -----------------------------------------------------------------------
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
      caption: '기름때 가득했던 주방 후드가 새것처럼 복원된 순간! 전문가용 고온 스팀의 위력🔥 #주방청소 #스팀세척',
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

  // -----------------------------------------------------------------------
  // 12. 🔑 외부 연동 키 설정 (Supabase DB 저장소 및 EmailJS 자동 이메일 푸시)
  // -----------------------------------------------------------------------
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
