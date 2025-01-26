import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { 
    languageOptions: 
    { 
      globals: { 
        ...globals.browser,
        ...globals.node 
      } 
    } 
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    ...pluginReact.configs.flat.recommended
  },
  {
    files: ['bro.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    ignores: ["coverage/"]
  },
];