/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f4efe6",
        pearl: "#faf6ef",
        champagne: "#ebe3d4",
        charcoal: "#1a1612",
        ink: "#2e2820",
        gold: {
          DEFAULT: "#9a7f3e",
          soft: "#b89a52",
          bright: "#c9ae6a",
          muted: "rgba(154, 127, 62, 0.22)",
        },
        frame: "#0e0d0b",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "hero-in": "fadeUp 1.1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards",
        "scroll-hint": "scrollHint 2.2s ease-in-out infinite",
        "scroll-dot": "scrollDot 2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollHint: {
          "0%, 100%": { opacity: "0.45", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(8px)" },
        },
        scrollDot: {
          "0%, 100%": { opacity: "0.5", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(14px)" },
        },
      },
    },
  },
  plugins: [],
};
