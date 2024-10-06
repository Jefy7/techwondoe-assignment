module.exports = {
  languageOptions: {
    globals: {
      process: "readonly",
      __dirname: "readonly"
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module"
    }
  },
  rules: {
    "no-console": "warn",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  },
};