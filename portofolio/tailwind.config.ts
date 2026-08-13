import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C2B27",
        canvas: "#FFFFF0",
        primary: "#2B6E5B",
        link: "#2F7A56",
        accent: "#7FC49E",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["1.75rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        label: ["0.8125rem", { lineHeight: "1.5", fontWeight: "400", letterSpacing: "0.05em" }],
      },
      spacing: {
        section: "4rem",
        "section-mobile": "2rem",
      },
    },
  },
} satisfies Config;

export default config;
