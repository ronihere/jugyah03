import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base_orange": "#F4511E",
        "darkGrayishBlue": 'hsl(227, 12%, 61%)',
        "base-testimony": "#6D220A",
        "base-gray": "#6B7280",
        "select-gray":"#A6AAB3"
      },
      keyframes: {
        fadeRight: {
          "0%": {
            opacity: "1",
            transform: "translateX(500px)",
          },
          "10%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "90%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-500px)",
          },
        },
      },
      animation: {
        fr: "fadeRight 6s linear infinite",
      },
    },
  },
  plugins: [
  ],
};
export default config;
