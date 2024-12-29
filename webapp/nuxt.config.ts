// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  pages: true,
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  app: {
    head: {
      title: {
        textContent: "Bách hoá xanh",
      },
      link: [
        {
          rel: "icon",
          type: "image/png", // hoặc "image/x-icon" cho .ico
          href: "/favicon.png", // Đường dẫn đến file favicon
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
    prefetch: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxtjs/google-fonts"],
});
