import daisyui from "daisyui";
import typography from "@tailwindcss/typography"; // 👈 добавь это

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
          'scrollY': 'scrollY 20s linear infinite',
        'fall': 'fall 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        backdropBlur: {
          xs: '2px',
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
                scrollY: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(110%)', opacity: '0' },
        },

      },
    },
    
  },
  plugins: [daisyui, typography], // 👈 добавь typography
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
