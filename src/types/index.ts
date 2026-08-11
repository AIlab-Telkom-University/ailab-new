// Core type definitions for AILab website

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  generation: number;
  image: string;
  fallback: string;
  bio?: string;
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    email?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  publisher: string;
  url?: string;
  category: 'journal' | 'conference' | 'thesis';
  abstract?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'study-group' | 'focus-group' | 'workshop';
  features: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  projects?: string[];
}

// Site configuration interface
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Additional utility types
export type SocialPlatform = 'linkedin' | 'github' | 'instagram' | 'email';
export type PublicationCategory = Publication['category'];
export type ActivityCategory = Activity['category'];

// Navigation and UI types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone?: string;
  location: {
    building: string;
    room: string;
    university: string;
  };
}