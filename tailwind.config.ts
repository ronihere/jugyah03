import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      'ss': '370px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
          // "0%": {
          //   opacity: "1",
          //   transform: "translateX(700px)",
          // },
          // "10%": {
          //   opacity: "1",
          //   transform: "translateX(400px)",
          // },
          // "50%": {
          //   opacity: "1",
          //   transform: "translateX(0px)",
          // },
          // "90%": {
          //   opacity: "1",
          //   transform: "translateX(-300px)",
          // },
          // "100%": {
          //   opacity: "1",
          //   transform: "translateX(-700px)",
          // },

          "0%": {
            opacity: "1",
            transform: "translateX(700px)",
          },
          "10%": {
            opacity: "1",
            transform: "translateX(400px)",
          },
          "30%": {
            opacity: "1",
            transform: "translateX(100px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "70%": {
            opacity: "1",
            transform: "translateX(-100px)",
          },

          "90%": {
            opacity: "1",
            transform: "translateX(-400px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(-700px)",
          },
        },
      },
      animation: {
        fr: "fadeRight 10s linear infinite",
      },
    },
  },
  plugins: [
  ],
};
export default config;
