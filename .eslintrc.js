module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "prettier"],
  rules: {
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
  },
}
