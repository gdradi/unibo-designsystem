const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  // Percorso rispetto ai deliverables (in app/<x>)
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        default: "rgb(var(--color-bg-default) / <alpha-value>)",
        header: "rgb(var(--color-bg-header) / <alpha-value>)",
        sidebar: "rgb(var(--color-bg-sidebar) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        default: "rgb(var(--color-text-default) / <alpha-value>)",
        reverse: "rgb(var(--color-text-reverse) / <alpha-value>)",
        header: "rgb(var(--color-text-header) / <alpha-value>)",
        sidebar: "rgb(var(--color-text-sidebar) / <alpha-value>)",
        verticalmenu: "rgb(var(--color-text-verticalmenu) / <alpha-value>)",
      },
      borderColor: {
        default: "rgb(var(--color-border-default) / <alpha-value>)",
      },
      ringColor: {
        default: "rgb(var(--color-ring-default) / <alpha-value>)",
      },
      gradientColorStops: {
        pageFrom: "rgb(var(--color-gradient-page-from) / <alpha-value>)",
        pageTo: "rgb(var(--color-gradient-page-to) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
