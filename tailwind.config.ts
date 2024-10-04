import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100%" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-50px) scale(0.65)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideUp: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-50px)" },
        },
        slideRight: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        slideLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        growUpWidth: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        pulseSlowly: {
          "50%": {
            opacity: "0.5",
          },
        },
      },
      animation: {
        moveGradient: "move 10s linear infinite",
        slideDown: "slideDown 0.2s ease-in-out forwards",
        slideUp: "slideUp 0.4s ease-in-out forwards",
        slideRight: "slideRight 0.4s ease-in-out forwards",
        slideLeft: "slideLeft 0.4s ease-in-out forwards",
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
        fadeOut: "fadeIn 0.4s ease-in-out forwards",
        cardSlideDown: "slideDown 0.5s ease-in-out forwards",
        growUp: "growUpWidth 0.15s ease-in-out forwards",
        pulseSlowly: "pulseSlowly 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [
    ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void
    }) => {
      addUtilities({
        ".gradient-move": {
          background:
            "linear-gradient(to right, #06b6d4 0%, #3b82f6 25%, #06b6d4 50%, #06b6d4 75%, #3b82f6 100%)",
          backgroundSize: "400%",
        },
        ".gradient-move-dark": {
          background:
            "linear-gradient(to right, #283e51 0%, #0a1526 25%, #283e51 50%, #283e51 75%, #0a1526 100%)",
          backgroundSize: "400%",
        },
        ".transition-slow": {
          transition: "all 1s ease-in-out",
        },
        ".transition-normal": {
          transition: "all 0.5s linear",
        },
        ".transition-fast": {
          transition: "all 0.2s linear",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
      })
    },
  ],
}
export default config
