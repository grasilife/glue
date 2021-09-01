module.exports = {
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:@stencil/recommended', 'prettier'],
  rules: {
    camelcase: ['error', { properties: 'never' }],
    '@stencil/required-jsdoc': 0,
    '@stencil/dependency-suggestions': 0,
    '@stencil/decorators-style': 0,
    '@stencil/own-props-must-be-private': 0
  }
};
