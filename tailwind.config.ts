import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#FAF6F1',
        'bg-card': '#F4ECE2',
        'bg-accent': '#EDE0D0',
        'text-primary': '#2B2520',
        'text-secondary': '#6B5D52',
        'text-muted': '#9B8B7E',
        accent: '#D5A14F',
        'accent-soft': '#E5C28A',
        'accent-dark': '#B8852E',
        line: '#E0D3C1',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
