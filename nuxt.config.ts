export default defineNuxtConfig({
  runtimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@nuxt/devtools'],
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
  typescript: {
    strict: true,
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: 'first',
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
