// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         black: "#000000",
//         dark: "#27266C",
//         brand: {
//           DEFAULT: "#6764F8",
//           100: "#6764F8",
//           80: "#7A78F9",
//           60: "#9695FA",
//           50: "#A7A6FB",
//           40: "#B8B7FC",
//           16: "#D7D6FE",
//           10: "#E6E5FE",
//         },
//         gray: {
//           100: "#D3D3D3",
//           200: "#414141",
//           300: "#272727",
//         },
//         white: {
//           100: "#FFFFFF",
//           90: "rgba(255,255,255,0.9)",
//           80: "rgba(255,255,255,0.8)",
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "ui-sans-serif", "system-ui"],
//       },
//     },
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#6764F8",
        dark: "#27266C",
        black: "#000000",
        grey: {
          900: "#272727",
          700: "#414141",
          300: "#D3D3D3",
        },
        white: "#FFFFFF",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(15,15,25,1) 0%, rgba(25,25,40,1) 35%, rgba(39,38,108,1) 100%)",
      },
    },
  },
  plugins: [],
};
