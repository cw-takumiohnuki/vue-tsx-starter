module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      '<template>': 'espree',
      js: 'espree',
      ts: '@typescript-eslint/parser',
    },
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  rules: {
    complexity: ['error', 4],
    'default-case': 'error',
    'import/order': 'off',
    'max-depth': ['error', 1],
    'max-nested-callbacks': ['error', 3],
    'max-lines': ['error', 200],
    'no-console': 'error',
    'no-param-reassign': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-template': 'error',
    'vue/one-component-per-file': 'off',
  },
  plugins: ['prettier'],
};
