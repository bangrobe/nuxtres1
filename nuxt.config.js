require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Nuxt Food Basic App - %s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Poppins:wght@600&display=swap"
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/getfood.server.js"],
  // plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BASE_URL_API || "http://localhost:1337"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: "~/components/AppLoading.vue"
};
