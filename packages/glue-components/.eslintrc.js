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
    '@stencil/required-jsdoc': 0
  }
};
