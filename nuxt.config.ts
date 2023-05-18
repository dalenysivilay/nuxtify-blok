export default defineNuxtConfig({
  runtimeConfig: {
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
  typescript: {
    strict: true,
  },
  apollo: {
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: process.env.SHOPIFY_STOREFRONT_ENDPOINT ?? '',
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token':
              process.env.SHOPIFY_STOREFRONT_TOKEN ?? '',
          },
        },
      },
    },
  },
  eslint: {
    lintOnStart: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
