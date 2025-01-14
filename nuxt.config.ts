// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
    'nuxt-schema-org',
    '@nuxtjs/mdc',
    '@zadigetvoltaire/nuxt-gtm',
  ],

  gtm: {
    id: 'GTM-56T26PH5',
    debug: true,
  },

  devtools: {
    enabled: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  colorMode: {
    disableTransition: true,
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: ['/', '/docs'],
      crawlLinks: true,
    },
  },

  typescript: {
    strict: false,
  },

  mdc: {
    highlight: {
      langs: ['javascript', 'html', 'css', 'md'],
    },
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md`
    'components:extend': (components) => {
      const globals = components.filter((c) =>
        ['UButton'].includes(c.pascalName)
      );
      globals.forEach((c) => (c.global = true));
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
});
