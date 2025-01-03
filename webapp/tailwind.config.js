/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "arial"],
      },
      width: {
        side: "var(--side-nav-width)",
      },
      height: {
        header: "var(--header-height)",
        side: "calc(100vh - var(--header-height) - 16px)",
      },
      maxHeight: {
        side: "calc(100vh - var(--header-height) - 12px)",
      },
      colors: {
        background: "#fff",
        // foreground: "hsl(var(--foreground))",
        border: "var(--border-color)",
        "dark-green": "var(--dark-green-color)",
        "main-green": "var(--green-color)",
        "light-green": "var(--light-green-color)",
        "main-yellow": "var(--yellow-color)",
        "main-black": "var(--black-color)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
};
