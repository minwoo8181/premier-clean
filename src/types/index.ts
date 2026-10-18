export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number;
  content: string;
  date: string;
  beforeImage: string;
  afterImage: string;
  verified?: boolean;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  serviceType: 'home' | 'commercial';
  spaceSize: string;
  serviceDate: string;
  message: string;
}

export interface ServiceDetail {
  id: string;
  category: 'home' | 'commercial';
  title: string;
  description: string;
  highlights: string[];
  features: string[];
  badge: string;
  image: string;
}

export interface TrustBadgeItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'ShieldCheck' | 'CreditCard' | 'RotateCcw' | 'Coffee';
}

export interface CleaningManualZone {
  id: string;
  zone: string;
  title: string;
  summary: string;
  disassemblyTargets: string[]; // 100% 완전 탈거 부위 목록
  specialMethods: string[];     // 특수 공정 및 장비
  image: string;
  tag: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: '견적/요금' | '시공/소요시간' | '안심/보상' | '검수/결제';
}

export interface ReceiptReviewItem {
  id: string;
  customerName: string;
  location: string;
  spaceType: string;
  date: string;
  checklistSummary: string[];
  reviewComment: string;
  rating: number;
  receiptVerified: boolean;
  actualPhotoUrl: string;
}

