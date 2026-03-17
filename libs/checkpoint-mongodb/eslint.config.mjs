import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import noInstanceof from "eslint-plugin-no-instanceof";
import prettierConfig from "eslint-config-prettier";

export default [
  ...tsPlugin.configs["flat/recommended"],
  prettierConfig,
  {
    ignores: [
      "scripts/**",
      "node_modules/**",
      "dist/**",
      "dist-cjs/**",
      "**/*.js",
      "**/*.cjs",
      "**/*.d.ts",
    ],
  },
  {
    files: ["src/**/*.ts"],
    plugins: {
      "no-instanceof": noInstanceof,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 12,
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    rules: {
      "no-instanceof/no-instanceof": 2,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-shadow": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
      "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "arrow-body-style": 0,
      camelcase: 0,
      "class-methods-use-this": 0,
      "keyword-spacing": "error",
      "max-classes-per-file": 0,
      "max-len": 0,
      "no-await-in-loop": 0,
      "no-bitwise": 0,
      "no-console": 0,
      "no-empty-function": 0,
      "no-restricted-syntax": 0,
      "no-shadow": 0,
      "no-continue": 0,
      "no-void": 0,
      "no-underscore-dangle": 0,
      "no-use-before-define": 0,
      "no-useless-constructor": 0,
      "no-return-await": 0,
      "consistent-return": 0,
      "no-else-return": 0,
      "func-names": 0,
      "no-lonely-if": 0,
      "prefer-rest-params": 0,
      "new-cap": ["error", { properties: false, capIsNew: false }],
    },
  },
];
