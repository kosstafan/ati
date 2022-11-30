export default {
  loadingIndicator: {
    name: "three-bounce",
    color: "#FFFFFF",
    background: "#193c81",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Самые популярные ТВ-пакеты "Amedia" и "Настрой Кино" в подарок',
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
          " Подключи Интернет + Интерактивное ТВ и получи ТВ-пакеты с самыми популярными киноканалами бесплатно.",
      },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      {
        innerHTML:
          '!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://vk.com/js/api/openapi.js?169",t.onload=function(){VK.Retargeting.Init("VK-RTRG-987224-fLC6"),VK.Retargeting.Hit()},document.head.appendChild(t)}();',
      },
    ],
    // свойство, чтобы не экранировались символы в разделе script
    __dangerouslyDisableSanitizers: ["script"],

    noscript: [
      {
        innerHTML:
          '<img src="https://vk.com/rtrg?p=VK-RTRG-987224-fLC6" style="position:fixed; left:-999px;" alt=""/>',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/core.scss"],

  plugins: ["~/plugins/requestApi.js", "~/plugins/directives.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/recaptcha",
      {
        hideBadge: true,
        siteKey: "6LdMMZ4UAAAAAKM6MjMpVL85P2ruvKyZbNj1wFYG",
        version: 3,
      },
    ],
    [
      "@nuxtjs/google-gtag",
      {
        id: "AW-380164878",
        debug: true,
      },
    ],
    "@nuxtjs/yandex-metrika",
    "@nuxtjs/axios",
  ],

  yandexMetrika: {
    id: "91377253",
    webvisor: true,
    clickmap: true,
    // useCDN: false,
    trackLinks: true,
    accurateTrackBounce: true,
  },

  axios: {
    proxy: true,
    credentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    prefix: "promo",
  },

  proxy: {
    "/promo/": {
      target: "https://www.profintel.ru",
      pathRewrite: { "^/promo": "/api" },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    API_URL: "https://www.profintel.ru/",
  },

  server: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
};
