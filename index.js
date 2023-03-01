module.exports = {
  extends: [
    './lint-rules/best-practices.js',
    './lint-rules/errors.js',
    './lint-rules/node.js',
    './lint-rules/style.js',
    './lint-rules/variables.js',
    './lint-rules/es6.js',
    './lint-rules/imports.js',
    './lint-rules/security.js'
  ],
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {}
};
