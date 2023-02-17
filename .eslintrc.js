module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    parser: 'typescript-eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: { jsx: true },
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
