/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /*
         * Instrument-grade palette — warm graphite surfaces tinted toward
         * hue 30 (amber) for subconscious warmth. NOT cold blue-black.
         * All values in OKLCH for perceptual uniformity.
         */
        surface: {
          0: "oklch(0.10 0.004 35)", // deepest — page background
          1: "oklch(0.13 0.005 35)", // base layer
          2: "oklch(0.16 0.006 35)", // recessed panels
          3: "oklch(0.20 0.008 35)", // card / container
          4: "oklch(0.24 0.010 35)", // elevated / hover
          5: "oklch(0.28 0.012 35)", // highest surface
        },
        border: {
          DEFAULT: "oklch(0.26 0.008 35)",
          light: "oklch(0.34 0.012 35)",
        },
        accent: {
          DEFAULT: "oklch(0.72 0.13 55)", // warm amber — the one sharp color
          hover: "oklch(0.78 0.11 55)",
          muted: "oklch(0.72 0.04 55 / 0.15)", // for tint backgrounds
        },
        // Status colors — muted, not neon. Accessible on dark surfaces.
        status: {
          working: "oklch(0.72 0.10 175)", // teal
          waiting: "oklch(0.75 0.12 55)", // amber
          completed: "oklch(0.70 0.09 145)", // green
          error: "oklch(0.65 0.15 25)", // red
        },
        // Text — warm-tinted neutrals, never pure gray
        ink: {
          DEFAULT: "oklch(0.92 0.004 35)", // primary text
          muted: "oklch(0.68 0.006 35)", // secondary
          faint: "oklch(0.52 0.005 35)", // tertiary / labels
        },
        /* Override default Tailwind grays with warm-tinted neutrals.
         * This is a global fix — every text-gray-* in every component
         * automatically picks up the warm hue without editing each file.
         * Only text-relevant shades (100-600) are overridden; dark
         * background shades (700-950) remain default to avoid breaking
         * any bg-gray-* usage. */
        gray: {
          50: "oklch(0.95 0.003 35)",
          100: "oklch(0.92 0.004 35)",
          200: "oklch(0.88 0.005 35)",
          300: "oklch(0.75 0.006 35)",
          400: "oklch(0.68 0.006 35)",
          500: "oklch(0.52 0.005 35)",
          600: "oklch(0.45 0.005 35)",
          700: "oklch(0.38 0.004 35)",
          800: "oklch(0.28 0.003 35)",
          900: "oklch(0.20 0.003 35)",
          950: "oklch(0.14 0.002 35)",
        },
      },
      fontFamily: {
        // Satoshi (Fontshare) for display/headings — geometric, precise, engineered
        // Hanken Grotesk (Google) for body — clean, readable, character
        // Spline Sans Mono (Google) for data/code — technical, not JetBrains
        sans: ['"Hanken Grotesk"', '"Satoshi"', "-apple-system", "sans-serif"],
        display: ['"Satoshi"', '"Hanken Grotesk"', "sans-serif"],
        mono: ['"Spline Sans Mono"', '"Cascadia Code"', "Consolas", "monospace"],
      },
      spacing: {
        // 4pt scale with semantic names
        0.5: "2px",
        1.5: "6px",
        2.5: "10px",
        3.5: "14px",
      },
      borderRadius: {
        // Tighter, more instrument-like — not soft pillows
        xl: "10px",
        "2xl": "14px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.25s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
        "stagger-in": "staggerIn 0.3s ease-out backwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        staggerIn: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
