module.exports = {
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:@stencil/recommended', 'prettier']
};
