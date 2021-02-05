// http://eslint.org/docs/user-guide/configuring
// http://eslint.cn/docs/user-guide/configuring 中文
module.exports = {
  root: true,

  env: {
    node: true,
    jest: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-useless-escape": 0,
    "space-before-function-paren": [0, "always"]
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
