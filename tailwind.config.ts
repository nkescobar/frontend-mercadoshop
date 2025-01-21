import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#003153',
          400: '#1E557D',
          600: '#002742',
        },
        secondary: {
          DEFAULT: '#4148f5',
          400: '#7176FB',
          600: '#272DC2',
        },
        complementary: {
          DEFAULT: '#7fffc9',
          400: '#41F0B7',
          600: '#10C288',
        },
        gray: {
          50: '#fcfbfa',
          100: '#e8e7e6',
          200: '#cccbca',
          300: '#b0afaf',
          400: '#949393',
          500: '#787777',
          600: '#5c5b5b',
          700: '#403F3F',
          800: '#242423',
          900: '#080808',
        },
        errorText: '#F54144',
      },
    },
  },
  plugins: [],
} satisfies Config;
