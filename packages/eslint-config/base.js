import {defineConfig, globalIgnores} from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierConfig from '@repo/prettier-config';

export const base = defineConfig([
  globalIgnores(['dist', 'node_modules', 'build', '.turbo', 'coverage', "eslint.config.js"]),

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  prettier,
  {
    ...eslintPluginPrettierRecommended,
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': ['error', prettierConfig], // ← Passa sua config
    },
  },
  {
    languageOptions: {
      globals: {...globals.node, ...globals.browser, ...globals.jest},
      parserOptions: {
        projectService: true,
        allowDefaultProject: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
]);
