/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{ts,tsx,mdx}"];

export const theme = {
  extend: {
    animation: {},
    backgroundImage: {},
    backgroundSize: {},
    colors: {
      "primary-500": "#006aeb",
    },
    keyframes: {},
    screens: {
      desktop: "2560px",
      "laptop-l": "1440px",
      "laptop-m": "1280px",
      "laptop-s": "1024px",
      "tablet-l": "900px",
      "tablet-m": "768px",
      "tablet-s": "600px",
      "mobile-l": "425px",
      "mobile-m": "375px",
      "mobile-s": "320px",
    },
  },
};

export const plugins = [];
