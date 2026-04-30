/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E9E6E",
        "primary-deep": "#087E56",
        "primary-soft": "#DDF3EA",
        secondary: "#FFD968",
        tertiary: "#E07A5F",
        blue: "#4C5FD6",
        bg: "#FFF4E6",
        surface: "#FFFFFF",
        "surface-warm": "#FFF9F0",
        line: "#EADFCC",
        text: "#2B2B2B",
        muted: "#6B6B6B",
        soft: "#8B8B8B",
      },
      fontFamily: {
        ja: ['"Noto Sans JP"', "system-ui", "sans-serif"],
        en: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(43, 43, 43, 0.06)",
        floating: "0 16px 40px rgba(43, 43, 43, 0.10)",
        button: "0 8px 18px rgba(30, 158, 110, 0.18)",
      },
    },
  },
  plugins: [],
};
