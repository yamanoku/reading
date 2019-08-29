module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/essential',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue',
  ]
}
