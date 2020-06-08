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
    'plugin:vuejs-accessibility/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue',
    'vuejs-accessibility'
  ],
  rules: {
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        allowChildren: true
      }
    ],
    'vuejs-accessibility/no-redundant-roles': 0
  }
}
