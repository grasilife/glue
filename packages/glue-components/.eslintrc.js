module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:@stencil/recommended', 'prettier'],
  rules: {
    '@stencil/required-jsdoc': 0,
    '@stencil/dependency-suggestions': 0,
    '@stencil/decorators-style': 0,
    '@stencil/own-props-must-be-private': 0,
    '@stencil/strict-boolean-conditions': 0,
    'react/jsx-no-bind': 0,
    '@stencil/reserved-member-name': 0,
    '@stencil/own-methods-must-be-private': 0,
  },
};
