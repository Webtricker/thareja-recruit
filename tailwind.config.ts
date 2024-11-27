import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
    },
  },
  // plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
