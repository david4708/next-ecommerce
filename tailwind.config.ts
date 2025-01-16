import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        lama:"#f35c7a",
        primary: {
          100: "#dadada",
          200: "#b4b4b4",
          300: "#8f8f8f",
          400: "#696969",
          500: "#444444",
          600: "#363636",
          700: "#292929",
          800: "#1b1b1b",
          900: "#0e0e0e"
},
 
      }
    },
  },
  plugins: [],
};
export default config;
