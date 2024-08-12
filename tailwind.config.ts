import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        moveGradient: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100%" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-50px)" },
        },
      },
      animation: {
        moveGradient: "moveGradient 10s linear infinite",
        slideDown: "slideDown 0.2s ease-in-out forwards",
        slideUp: "slideUp 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void
    }) => {
      addUtilities({
        ".gradient-move": {
          background:
            "linear-gradient(to right, #06b6d4 0%, #3b82f6 25%, #3b82f6 50%, #06b6d4 75%, #3b82f6 100%)",
          backgroundSize: "400%",
        },
        ".transition-slow": {
          transition: "all 0.3s linear",
        },
        ".transition-normal": {
          transition: "all 0.15s linear",
        },
        ".transition-fast": {
          transition: "all 0.1s linear",
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
