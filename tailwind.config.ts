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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#fdf4ef",
          100: "#fae4d0",
          200: "#f5c9a1",
          300: "#efa36a",
          400: "#e87e3a",
          500: "#e05e1a",
          600: "#d14610",
          700: "#ad3310",
          800: "#8a2b14",
          900: "#702513",
        },
        warm: {
          50: "#fefdf9",
          100: "#fdf8ed",
          200: "#faf0d4",
          300: "#f5e4b0",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "confetti-fall": "confetti-fall 3s ease-in forwards",
        "ticker": "ticker 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "magnet": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.12)",
        "soft": "0 2px 16px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
