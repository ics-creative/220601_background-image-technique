module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-recess-order",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "selector-class-pattern":
      "^([a-z][a-zA-Z0-9]*)(_+[a-zA-Z0-9]+)*$|(is)-[a-zA-Z0-9]",
    "scss/at-mixin-pattern": "^[a-z][a-zA-Z0-9]+$",
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]+$",
    "color-function-notation": "legacy",
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["include", "mixin", "use", "forward"] },
    ],
    "property-no-vendor-prefix": [
      true,
      { ignoreProperties: ["background-clip"] },
    ],
  },
};
