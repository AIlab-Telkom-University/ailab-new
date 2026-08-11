export const siteConfig = {
  name: 'Artificial Intelligence Laboratory',
  shortName: 'AILab',
  description: 'Artificial Intelligence Laboratory at Telkom University - Advancing AI research, education, and innovation through cutting-edge technology and collaborative learning.',
  university: 'Telkom University',
  
  // Contact Information
  contact: {
    address: 'TULT 0607, Telkom University Landmark Tower',
    fullAddress: 'Jl. Telekomunikasi No. 1, Terusan Buah Batu, Bandung 40257, West Java, Indonesia',
    email: 'ailab@telkomuniversity.ac.id',
    phone: '+62 22 7566456',
    website: 'https://ailab.telkomuniversity.ac.id',
  },

  // Social Media Links
  social: {
    instagram: 'https://www.instagram.com/ailab_telkomuniversity/',
    linkedin: 'https://www.linkedin.com/company/ailab-telkom-university/',
    github: 'https://github.com/ailabtelkom',
    youtube: 'https://www.youtube.com/@ailabtelkomuniversity',
    twitter: 'https://twitter.com/ailab_telkom',
  },

  // Laboratory Information
  laboratory: {
    established: 2018,
    mission: 'To advance artificial intelligence research and education, fostering innovation and developing skilled professionals in AI technologies.',
    vision: 'To become a leading AI research laboratory in Southeast Asia, contributing to technological advancement and societal development through cutting-edge AI research and education.',
    
    // Core Values
    values: [
      'Innovation in AI research and development',
      'Excellence in education and knowledge transfer',
      'Collaboration with industry and academic partners',
      'Ethical AI development and deployment',
      'Community engagement and social impact'
    ],

    // Key Focus Areas
    focusAreas: [
      'Computer Vision and Image Processing',
      'Natural Language Processing',
      'Machine Learning and Deep Learning',
      'Data Science and Analytics',
      'AI Applications and Systems'
    ],

    // Statistics
    stats: {
      publications: 20,
      researchProjects: 15,
      teamMembers: 35,
      yearsActive: new Date().getFullYear() - 2018,
      collaborations: 10
    }
  },

  // Navigation Menu
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Team', href: '/team' },
    { name: 'Activities', href: '/activities' },
    { name: 'Contact', href: '/contact' }
  ],

  // SEO and Meta Information
  seo: {
    title: 'AILab Telkom University - Artificial Intelligence Research Laboratory',
    description: 'Leading AI research laboratory at Telkom University, advancing artificial intelligence through innovative research, education, and industry collaboration.',
    keywords: [
      'artificial intelligence',
      'machine learning',
      'deep learning',
      'computer vision',
      'natural language processing',
      'data science',
      'AI research',
      'Telkom University',
      'Indonesia',
      'technology',
      'innovation'
    ],
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image'
  },

  // Theme Configuration
  theme: {
    colors: {
      primary: '#FFD700', // Gold/Yellow
      secondary: '#FFC107', // Amber
      accent: '#000000', // Black
      background: '#FFFFFF', // White
      surface: '#F8F9FA', // Light Gray
      text: {
        primary: '#000000',
        secondary: '#495057',
        muted: '#6C757D'
      }
    },
    fonts: {
      primary: 'Inter',
      mono: 'JetBrains Mono'
    }
  }
};

export default siteConfig;