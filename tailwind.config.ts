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
      },
      animation: {
        moveGradient: "moveGradient 10s linear infinite",
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
