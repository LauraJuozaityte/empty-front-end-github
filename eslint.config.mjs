import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.jest } } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  prettierConfig,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "warn",
      "no-multiple-empty-lines": ["warn", { max: 2 }],
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
