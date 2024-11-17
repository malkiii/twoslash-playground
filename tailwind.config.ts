import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#1E1E1E',
        ts: '#3178c6',
      },
    },
  },
  plugins: [],
} satisfies Config;
