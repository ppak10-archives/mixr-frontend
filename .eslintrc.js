/**
 * .eslintrc.js
 * Config for eslint
 */

module.exports = {
  extends: ['eslint:recommended', 'google', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks'],
  globals: {
    document: true,
    google: true,
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-console': ['error', {allow: ['warn', 'error']}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'require-jsdoc': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
