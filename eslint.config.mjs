// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // @ts-ignore
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
