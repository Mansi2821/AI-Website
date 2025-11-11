// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: "#6764F8",          // Primary purple-blue
        "brand-light": "#A287FF",  // Lighter purple (used for highlights)
        "brand-dark": "#4B3BD2",   // Slightly darker accent
        "brand-deep": "#3A2E74",   // Used in gradients and cards

        // Gradient / background tones
        "gradient-start": "#3A2E74",
        "gradient-mid": "#2C2560",
        "gradient-end": "#181632",
        "gradient-alt-start": "#5A4AE8",
        "gradient-alt-end": "#241F60",

        // Dark shades and base backgrounds
        dark: "#27266C",
        "dark-secondary": "#151527",
        "dark-deep": "#0A0A0F",
        "dark-violet": "#0E0D23",
        "dark-blue": "#17153A",

        // Supporting greys
        grey: {
          900: "#272727",
          800: "#2F2B46",
          700: "#414141",
          500: "#6B6B6B",
          300: "#D3D3D3",
          100: "#EDEDED",
        },

        // Essentials
        black: "#000000",
        white: "#FFFFFF",

        // Utility tints
        "purple-glow": "rgba(162,135,255,0.6)",
        "purple-faint": "rgba(162,135,255,0.15)",
        "blue-faint": "rgba(58,46,116,0.9)",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(15,15,25,1) 0%, rgba(25,25,40,1) 35%, rgba(39,38,108,1) 100%)",

        // Shared gradient styles used in pricing, cards, etc.
        "purple-gradient":
          "linear-gradient(180deg, #3A2E74 0%, #2C2560 50%, #181632 100%)",
        "bright-purple-gradient":
          "linear-gradient(180deg, #5A4AE8 0%, #4B3BD2 50%, #241F60 100%)",
      },
    },
  },
  plugins: [],
};
