import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: { 500: "#10b981" }
      }
    }
  },
  plugins: [],
};
export default config;
