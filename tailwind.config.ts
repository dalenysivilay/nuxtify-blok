export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'sans'],
        serif: ['Roboto', 'sans-serif'],
      },
      colors: {},
    },
  },
  plugins: [],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
};
