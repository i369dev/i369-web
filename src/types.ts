export type PageId = 'home' | 'about' | 'services' | 'work' | 'ventures' | 'contact';

export interface ServicePillar {
  id: string;
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  featuredProject?: string;
  featuredClient?: string;
  accentColor: 'teal' | 'pink' | 'orange';
  tags: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  client: string;
  category: 'Tourism' | 'AdventureTech' | 'Media' | 'Performance' | 'Ventures';
  summary: string;
  deliverables: string[];
  stats: { label: string; value: string }[];
  impact: string;
  accentColor: 'teal' | 'pink' | 'orange';
  image: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  status: string;
  accentColor: 'teal' | 'pink' | 'orange';
  image: string;
}

export interface ProjectInquiry {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
