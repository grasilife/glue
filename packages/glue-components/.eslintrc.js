module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:@stencil/recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'camelcase': ['error'],
    '@stencil/required-jsdoc': 0,
    '@stencil/dependency-suggestions': 0,
    '@stencil/decorators-style': 0,
    '@stencil/own-props-must-be-private': 0,
    '@stencil/strict-boolean-conditions': 0,
    'react/jsx-no-bind': 0,
    '@stencil/reserved-member-name': 0,
    '@stencil/own-methods-must-be-private': 0,
    '@stencil/async-methods': 0,
    '@stencil/strict-mutable': 0,
  },
};
