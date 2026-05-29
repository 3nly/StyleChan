import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["builds/**", "tmp/**", "node_modules/**", "src/meta/**", "src/style.js"],
  },
  {
    files: ["src/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.greasemonkey,
        $: "readonly",
        $lib: "writable",
        $SS: "writable",
        $docBody: "writable",
        $docHead: "writable",
        getDocBody: "readonly",
        getDocHead: "readonly",
        TCaptcha: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", {
        args: "none",
        varsIgnorePattern: "^[svx]$",
        caughtErrors: "none",
      }],
      "no-undef": "error",
      "no-cond-assign": "off",
      "no-constant-binary-expression": "warn",
      "no-redeclare": "on",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-useless-escape": "off",
    },
  },
]);
