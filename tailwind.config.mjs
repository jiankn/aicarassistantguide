/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        blue: '#1f66d1',
        teal: '#0a6e64',
        mint: '#0f7b5f',
        orange: '#c65f1a',
        gold: '#b77900',
        rose: '#b4233f',
        muted: '#475569',
        line: '#dbe6f3',
        surface: '#ffffff',
        soft: '#f5f9ff',
        warm: '#fff8ed'
      },
      fontFamily: {
        display: ['"DM Sans"', 'Inter', '"Segoe UI"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Segoe UI"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
