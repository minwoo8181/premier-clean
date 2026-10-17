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
