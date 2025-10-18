import {defineConfig} from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';
import {base as baseConfig} from './base.js';

export const react = defineConfig([
  ...baseConfig,

  {
    plugins: {
      'react-hooks': reactHooks,
      react: reactPlugin,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      tailwindcss: tailwind,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {jsx: true},
        projectService: true,
        allowDefaultProject: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {version: 'detect'},
      tailwindcss: {callees: ['cn', 'cva'], config: 'tailwind.config.js'},
    },
  },
]);
