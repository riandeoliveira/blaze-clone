import type { Config } from "tailwindcss";

const config = {
  content: ["src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      animation: {
        "crash-recent-in": "crash-recent-in 0.5s",
        "high-takeoff": "high-takeoff 5s linear forwards",
        "low-takeoff": "low-takeoff 5s linear forwards",
        load: "load 6s linear forwards",
      },
      backgroundImage: {
        "corner-shadow": "linear-gradient(270deg, transparent, hsl(208, 27%, 14%) 71%)",
      },
      colors: {
        "c-background-three": "hsl(214, 28%, 15%)",
        "c-background-two": "hsl(208, 27%, 14%)",
        "c-background": "hsl(210, 40%, 10%)",
        "c-cloudy-blue": "hsl(231, 25%, 74%)",
        "c-dark-background-four": "hsl(215, 22%, 19%)",
        "c-dark-green": "hsl(155, 100%, 21%)",
        "c-dark-red-2": "hsl(351, 78%, 44%)",
        "c-dark-red": "hsl(350, 70%, 39%)",
        "c-darker-green": "hsl(154, 99%, 35%)",
        "c-grey-2": "hsla(231, 18%, 22%, 0.8)",
        "c-grey": "hsla(227, 11%, 50%, 0.302)",
        "c-light-blue": "hsl(213, 92%, 85%)",
        "c-light-grey": "hsl(224, 9%, 76%)",
        "c-lime-green": "hsl(155, 96%, 42%)",
        "c-red": "hsl(350, 88%, 56%)",
        "c-separator": "hsl(212, 16%, 23%)",
      },
      fontFamily: {
        "roboto-mono": ["RobotoMono", "sans-serif"],
        "sofia-pro": ["SofiaPro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        "crash-recent-in": {
          from: {
            opacity: "0",
            transform: "translateX(50px) scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0) scale(1)",
          },
        },
        "low-takeoff": {
          from: {
            height: "0px",
          },
          to: {
            height: "160px",
          },
        },
        "high-takeoff": {
          from: {
            height: "0px",
          },
          to: {
            height: "340px",
          },
        },
        load: {
          from: {
            width: "100%",
          },
          to: {
            width: "0%",
          },
        },
      },
      screens: {
        "s-1440px": { max: "1440px" },
        "s-1320px": { max: "1320px" },
        "s-1200px": { max: "1200px" },
        "s-1080px": { max: "1080px" },
        "s-960px": { max: "960px" },
        "s-840px": { max: "840px" },
        "s-720px": { max: "720px" },
        "s-600px": { max: "600px" },
        "s-480px": { max: "480px" },
        "s-360px": { max: "360px" },
      },
    },
  },
} satisfies Config;

export default config;
