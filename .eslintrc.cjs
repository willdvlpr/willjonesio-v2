/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: false,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'vue/no-multiple-template-root': 'off'
  },
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module'
  }
}
