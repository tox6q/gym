// Design System Configuration
// Easy way to manage colors, fonts, and other design tokens

export const colors = {
  // Primary health-focused green
  primary: {
    main: '#5dd1a8',
    light: '#7fdbba',
    dark: '#4ade80',
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#5dd1a8',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },

  // Background colors
  background: {
    primary: '#fbfaf5',
    secondary: '#f8fffe',
    muted: '#f5f5f4',
  },

  // Text colors
  text: {
    primary: '#1a1a1a',
    secondary: '#6b7280',
    muted: '#9ca3af',
    inverse: '#FFFFFC',
  },

  // Status colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Neutral grays
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
}

export const fonts = {
  heading: 'var(--font-satoshi)',
  body: 'var(--font-general-sans)',
  mono: 'Menlo, Monaco, Consolas, monospace',
}

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
}

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
}

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
}

// Utility function to get design tokens
export const getDesignToken = {
  color: (path: string) => {
    const keys = path.split('.')
    let value: Record<string, unknown> = colors
    for (const key of keys) {
      value = value[key] as Record<string, unknown>
    }
    return value
  },

  font: (type: keyof typeof fonts) => fonts[type],

  space: (size: keyof typeof spacing) => spacing[size],

  radius: (size: keyof typeof borderRadius) => borderRadius[size],

  shadow: (size: keyof typeof shadows) => shadows[size],
}

// Health-focused gradients
export const gradients = {
  primary: 'linear-gradient(135deg, #5dd1a8 0%, #4ade80 100%)',
  secondary: 'linear-gradient(135deg, #f8fffe 0%, #ecfdf5 100%)',
  accent: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  hero: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #dcfce7 100%)',
}

// Component variants for consistency
export const variants = {
  button: {
    primary: {
      backgroundColor: colors.primary.main,
      color: colors.text.inverse,
      fontFamily: fonts.heading,
    },
    secondary: {
      backgroundColor: colors.background.secondary,
      color: colors.text.primary,
      fontFamily: fonts.heading,
    },
  },

  card: {
    default: {
      backgroundColor: colors.background.primary,
      borderColor: colors.gray[200],
      borderRadius: borderRadius.lg,
    },
  },
}

// Commonly used Tabler icons for the health/wellness theme
// Import these from '@tabler/icons-react' when needed
export const iconNames = {
  // Health & Wellness
  health: 'IconHeart',
  wellness: 'IconLeaf',
  fitness: 'IconBarbell',
  nutrition: 'IconApple',
  meditation: 'IconYoga',
  sleep: 'IconMoon',

  // UI Elements
  menu: 'IconMenu2',
  close: 'IconX',
  arrow: 'IconArrowRight',
  check: 'IconCheck',
  star: 'IconStar',
  calendar: 'IconCalendar',
  clock: 'IconClock',
  users: 'IconUsers',

  // Actions
  play: 'IconPlayerPlay',
  download: 'IconDownload',
  share: 'IconShare',
  email: 'IconMail',
  phone: 'IconPhone',

  // Navigation
  home: 'IconHome',
  courses: 'IconBooks',
  profile: 'IconUser',
  settings: 'IconSettings',

  // Health Features
  target: 'IconTarget',
  trophy: 'IconTrophy',
  badge: 'IconBadge',
  certificate: 'IconCertificate',
}