import { ReviewItem, ServiceDetail } from '@/types';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '김*현 고객님',
    location: '서울 서초구 반포자이 (34평)',
    serviceType: '신축 입주청소',
    rating: 5,
    content: '타 업체 후기 보고 반신반의했는데 프리미어 클린은 진짜 차원이 다릅니다. 특히 싱크대 하부장 걸레받이 안쪽이랑 등기구 탈거해서 공사 분진 싹 닦아주신 거 보고 감동했습니다. 향도 너무 산뜻해요!',
    date: '2026.10.12',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    verified: true,
  },
  {
    id: 'rev-2',
    author: '이*진 대표님',
    location: '성남 분당구 IT벤처사무실 (65평)',
    serviceType: '사업장 정기/오픈청소',
    rating: 5,
    content: '사무실 이전하고 바닥 타일 왁스코팅과 회의실 유리창 클리닝 의뢰드렸습니다. 직원들이 출근하자마자 새 건물 온 것 같다고 너무 좋아하네요. 친환경 세제 써서 냄새도 전혀 없습니다.',
    date: '2026.10.08',
    beforeImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    verified: true,
  },
  {
    id: 'rev-3',
    author: '박*서 고객님',
    location: '경기 하남시 미사강변 (28평)',
    serviceType: '이사 청소 & 곰팡이 케어',
    rating: 5,
    content: '구축 아파트라 화장실 줄눈 물때와 베란다 결로 곰팡이가 심했는데 새집처럼 말끔하게 복원되었습니다. 한국인 팀장님이 시공 전후 사진 하나하나 보내주시며 설명해주셔서 완전 안심이었어요.',
    date: '2026.09.29',
    beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    verified: true,
  },
  {
    id: 'rev-4',
    author: '정*우 고객님',
    location: '인천 연수구 송도더샵 (45평)',
    serviceType: '프리미엄 입주 마스터케어',
    rating: 5,
    content: '아이들이 아토피가 있어서 친환경 용품 여부가 제일 중요했습니다. 스팀 장비로 고온 멸균해주시고 수납장 하나하나 탈거 청소해주시는 모습에 프리미엄 가치를 제대로 느꼈습니다.',
    date: '2026.09.18',
    beforeImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
    verified: true,
  },
];

// =========================================================================
// [비포 & 애프터 사진 변경하는 곳]
// 원하는 전/후 사진 주소(URL)나 public 폴더에 넣은 이미지 경로로 교체하시면 됩니다.
// 예시: before: '/images/kitchen-before.jpg', after: '/images/kitchen-after.jpg'
// =========================================================================
export const BEFORE_AFTER_SHOWCASES = [
  {
    title: '주방 싱크대 & 인덕션 탄자국·기름때 완벽 박멸',
    category: '주방 특수 케어',
    desc: '수년간 찌든 기름때와 후드 필터 탄화물을 친환경 특허 기술로 말끔하게 복원',
    before: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '욕실 물때·줄눈 곰팡이 멸균',
    category: '욕실 딥클리닝',
    desc: '환풍기 세척, 수전 물때 스케일링, 거울 유막 제거 및 프리미엄 항균 시공',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '오피스 타일 바닥 오염 세척 & 프리미어 클린',
    category: '사업장 상업공간',
    desc: '스크래치와 묵은 때 박리 작업 후 미끄럼 방지 친환경 클린으로 품격 있는 업무 환경 완성',
    before: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'home-cleaning',
    category: 'home',
    title: '홈클리닝 (Home Cleaning)',
    description: '가장 소중한 안식처를 호텔 스위트룸처럼. 미세먼지, 분진가루, 숨은 세균까지 박멸하는 주거 전문 올인원 솔루션',
    highlights: ['입주 / 이사 청소', '거주 대청소 & 부분 특수케어', '친환경 피톤치드 살균 서비스', '창틀·등기구·배수구 완전 세척'],
    features: [
      '신축 아파트 벽면 도배풀, 시멘트 가루, 새집증후군 유발 물질 제거',
      '주방 상·하부장 선반, 걸레받이, 후드 필터 기름때 고온 스팀 박멸',
      '화장실 배수구, 환풍기 트랩 세척 및 타일 줄눈 물때 스케일링',
      '방충망, 창틀 4면 틈새 먼지, 유리창 얼룩 클리닝 (외창 제외)',
      '천장 조명 커버 먼지 제거 및 스위치, 콘센트 미세 세척'
    ],
    badge: '인기 서비스',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'commercial-cleaning',
    category: 'commercial',
    title: '사업장 클리닝 (Commercial Cleaning)',
    description: '기업의 브랜드 가치와 임직원의 생산성을 극대화하는 프리미엄 오피스 & 상업 시설 전문 클리닝',
    highlights: ['사무실 정기 청소 & 주 1~5회 케어', '상가·카페 및 오픈 전 대청소', '바닥 클린 및 고광택 왁스 시공', '유리창·세척'],
    features: [
      '업무에 지장 없는 심야/새벽/주말 맞춤 스케줄링 진행',
      '데스크탑 주변 먼지, 회의실 유리 파티션 지문 및 유막 제거',
      '대형 탕비실 싱크대 소독, 공용 공간 쓰레기 분리배출 관리',
      '프리미어 폴리셔 바닥 때 세척 및 명품 친환경 세제 시공',
      '세금계산서 100% 발행 및 비포 에프터 전달'
    ],
    badge: '기업 고객 만족도 1위',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    likes: 342,
    comments: 28,
    caption: '오늘도 반포자이 45평 입주청소 완료✨ 채광 들어오는 거실이 거울처럼 반짝입니다. #프리미어클린 #입주청소 #이사준비',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    likes: 289,
    comments: 15,
    caption: '기름때 가득했던 주방 후드가 새것처럼 복원된 순간! 명품 스팀 장비의 위력🔥 #주방청소 #스팀세척',
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
    caption: '강남 공유오피스 정기관리 현장. 바닥 광택이 살아나니 공간 분위기가 확 달라지네요🏢 #오피스청소 #바닥왁스',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
    likes: 256,
    comments: 19,
    caption: '창틀 흙먼지 한 톨 남기지 않는 꼼꼼함! 100% 한국인 직영팀의 자부심입니다💪 #청소전문가',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
    likes: 387,
    comments: 24,
    caption: '고객님의 새 출발을 응원하는 마음으로. 오늘도 정성을 다해 닦아냅니다🙏 #프리미어클린 #고객만족',
  },
];
