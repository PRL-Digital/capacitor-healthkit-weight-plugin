// https://eslint.org/docs/user-guide/configuring/
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ["**/*.stories.js"],
  extends: [
    "eslint:recommended",
    "next",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return",
      },
    },
  },
  plugins: ["import"],
  rules: {
    "@next/next/no-img-element": "off",
    "func-style": [
      "warn",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": "off",
    "react/forbid-prop-types": [
      "error",
      {
        forbid: ["any", "array"],
      },
    ],
    "import/no-unused-modules": "off",
  },
};
