module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": 0,
    "react/no-unescaped-entities": "off",
    "react/prop-types": 0,
    "react/jsx-key": 0,
    "react/display-name": 0,
    "no-case-declarations": 0,
  },
};
