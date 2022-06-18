module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vuejs-accessibility/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue',
    'vuejs-accessibility',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        allowChildren: true
      }
    ],
    'vuejs-accessibility/no-redundant-roles': 0
  }
}
