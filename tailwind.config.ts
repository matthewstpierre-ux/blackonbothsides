import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#C44A1A",
        "orange-light": "#E8612B",
        black: "#0A0A0A",
        surface: "#141414",
        offwhite: "#F0EDE8",
        muted: "#888888",
        border: "#2E2E2E",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "cursive"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
