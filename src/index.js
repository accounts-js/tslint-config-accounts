module.exports = {
  extends: [
    "tslint:latest",
    "tslint-eslint-rules",
    "tslint-config-prettier"
  ],
  rules: {
    "interface-name": [false],
    "object-literal-sort-keys": false,
    "ordered-imports": [false],
    "no-submodule-imports": [true, "lodash"],
    "quotemark": [true, "single", "jsx-double"]
  },
};
