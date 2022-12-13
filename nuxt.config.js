export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Оранизация перевозок по России и странам СНГ',
    htmlAttrs: {
      lang: "ru",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Заказать перевозку грузов по России и странам ближнего зарубежья .",
      },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    // свойство, чтобы не экранировались символы в разделе script
    __dangerouslyDisableSanitizers: ["script"],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/core.scss"],

  plugins: ["~/plugins/requestApi.js", "~/plugins/directives.js", { src: '~/plugins/ymapPlugin.js',  mode: 'client'}, { src: '~/plugins/vue-plyr', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  serverMiddleware: [
    { path: '/email', handler: '~/api/email.js' }
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
  ],

  axios: {
    proxy: true,
    credentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  },

  /* proxy: {
    "/promo/": {
      target: "https://www.profintel.ru",
      pathRewrite: { "^/promo": "/api" },
    },
  }, */

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
};
