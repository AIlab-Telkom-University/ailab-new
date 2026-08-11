// Brand and design system constants for AILab website

// Brand Colors
export const COLORS = {
  // Primary Brand Colors
  primary: {
    yellow: '#FFD700',      // Gold
    black: '#000000',       // Pure Black
    white: '#FFFFFF',       // Pure White
  },
  
  // Secondary Colors
  secondary: {
    yellow: '#FFC107',      // Amber
    darkGray: '#1A1A1A',    // Secondary Black
    lightGray: '#F8F9FA',   // Light Background
  },
  
  // Gray Scale
  gray: {
    50: '#F8F9FA',
    100: '#E9ECEF',
    200: '#DEE2E6',
    300: '#CED4DA',
    400: '#ADB5BD',
    500: '#6C757D',
    600: '#495057',
    700: '#343A40',
    800: '#212529',
    900: '#0A0A0A',
  },
  
  // Semantic Colors
  semantic: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },
  
  // Background Colors
  background: {
    light: '#FAFAFA',
    dark: '#0A0A0A',
    card: '#FFFFFF',
    cardDark: '#1A1A1A',
  },
} as const;

// Spacing System (based on 4px grid)
export const SPACING = {
  // Base unit: 4px (0.25rem)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  '4xl': '2.5rem',  // 40px
  '5xl': '3rem',    // 48px
  '6xl': '4rem',    // 64px
  '7xl': '5rem',    // 80px
  '8xl': '6rem',    // 96px
  
  // Section Spacing
  section: {
    vertical: '5rem',        // 80px
    verticalMobile: '2.5rem', // 40px
    horizontal: '1.25rem',    // 20px
  },
  
  // Container
  container: {
    maxWidth: '75rem',       // 1200px
    padding: '1.25rem',      // 20px
  },
} as const;

// Animation Durations and Easing
export const ANIMATIONS = {
  // Duration
  duration: {
    micro: '200ms',      // Quick interactions
    fast: '300ms',       // Standard transitions
    normal: '500ms',     // Complex animations
    slow: '800ms',       // Page transitions
  },
  
  // Easing Functions
  easing: {
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Specific Animation Configs
  hover: {
    duration: '200ms',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  
  pageTransition: {
    duration: '300ms',
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  
  scrollReveal: {
    duration: '500ms',
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    stagger: '100ms',
  },
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  // Font Families
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  
  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  // Line Heights
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

// Breakpoints for Responsive Design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// Border Radius
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// Shadow Scale
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Navigation Configuration
export const NAVIGATION = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/research' },
    { label: 'Publications', href: '/publications' },
    { label: 'Team', href: '/team' },
    { label: 'Activities', href: '/activities' },
    { label: 'Contact', href: '/contact' },
  ],
  
  social: {
    instagram: 'https://instagram.com/ailab_telkomuniversity',
    linkedin: 'https://linkedin.com/company/ailab-telkom-university',
    email: 'ailab@telkomuniversity.ac.id',
  },
} as const;

// Laboratory Information
export const LAB_INFO = {
  name: 'Artificial Intelligence Laboratory',
  shortName: 'AILab',
  university: 'Telkom University',
  location: {
    building: 'Telkom University Landmark Tower',
    room: 'TULT 0607',
    address: 'Jl. Telekomunikasi No. 1, Terusan Buah Batu, Bandung 40257',
  },
  contact: {
    email: 'ailab@telkomuniversity.ac.id',
    phone: '+62 22 7566456',
  },
  established: 2015,
} as const;