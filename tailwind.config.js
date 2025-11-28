/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#DAA112',
          secondary: '#1EAA9D',
          dark: '#1D2C33',
          white: '#FFFFFF',
        },
        accent: {
          60: '#F5F5F5',
          100: '#C4BBB8',
          default: '#FF5B5B',
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        backgroundDisabled: '#E3E3E3',
        surface: '#ffffff',
        text: {
          60: '#60656F',
          100: '#1D2C33',
          primary: '#181818',
          secondary: '#677374',
          light: '#FFFFFF',
          light80: '#fbfbfb',
          dark: {
            60: '#646D85',
            80: '#758886',
            100: '#10383A',
          },
        },
        icon: {
          light: '#FFFFFF',
          dark: '#3D3D3D',
        },
        border: 'hsl(var(--border))',
        error: {
          80: '#D92D20',
          light: '#FEEBEB',
          dark: '#E10E0E',
        },
        warning: {
          80: '#DC6803',
        },
        orange: '#EA4335',
        yellow: '#F5C451',
        green: '#61C454',
        Green: {
          default: '#61C454',
          dark: '#1A8245',
          light6: '#DAF8E6',
        },
        Yellow: {
          dark2: '#D97706',
          light4: '#FFFBEB',
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['"Euclid Flex"', 'sans-serif'],
        Euclid: ['"Euclid Flex"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

