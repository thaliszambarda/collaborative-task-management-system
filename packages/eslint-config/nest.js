import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import { base as baseConfig } from './base.js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export const nest = defineConfig([
  ...baseConfig,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        allowDefaultProject: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'commonjs',
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]);
