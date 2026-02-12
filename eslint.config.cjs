// import js from "@eslint/js"
// import globals from "globals"
// import tseslint from "typescript-eslint"
// import react from "eslint-plugin-react"
// import reactHooks from "eslint-plugin-react-hooks"
// import importPlugin from "eslint-plugin-import"
// import cypress from "eslint-plugin-cypress"
// import prettier from "eslint-config-prettier
const js = require("@eslint/js")
const prettier = require("eslint-config-prettier")
const cypress = require("eslint-plugin-cypress")
const importPlugin = require("eslint-plugin-import")
const react = require("eslint-plugin-react")
const reactHooks = require("eslint-plugin-react-hooks")
const globals = require("globals")
const tseslint = require("typescript-eslint")

// export default [
module.exports = [
  // -------------------------
  // Ignore
  // -------------------------
  {
    ignores: [
      "dist",
      "build",
      "node_modules",
      "eslint.config.cjs",
      "build-utils/**/*",
    ],
  },

  // -------------------------
  // Base JavaScript
  // -------------------------
  js.configs.recommended,

  // -------------------------
  // Base TypeScript (non type-aware)
  // -------------------------
  ...tseslint.configs.recommended,

  // -------------------------
  // Type-Aware Rules (Scoped)
  // -------------------------
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.rules,
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/strict-boolean-expressions": "warn",
    },
  },

  // -------------------------
  // React
  // -------------------------
  {
    files: ["src/**/*.{jsx,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },

  // -------------------------
  // Import Hygiene
  // -------------------------
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg", ".svg"],
        },
      },
    },
    rules: {
      "import/no-unresolved": "error",
      "import/no-extraneous-dependencies": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  // -------------------------
  // Cypress
  // -------------------------
  {
    files: ["cypress/**/*.{ts,tsx}"],
    plugins: {
      cypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: "readonly",
        Cypress: "readonly",
      },
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
    rules: {
      ...cypress.configs.recommended.rules,
      "cypress/no-unnecessary-waiting": "error",
      "cypress/no-force": "warn",
    },
  },

  // -------------------------
  // Prettier (must be last)
  // -------------------------
  prettier,
]
