import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import configPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxa11yConfig from 'eslint-plugin-jsx-a11y';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactConfig from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const compat = new FlatCompat();

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierRecommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  ...compat.extends('eslint-config-standard'),
  {
    name: 'baseOptions',
    ignores: [
      'eslint.config.js',
      'node_modules/',
      'build/',
      'dist/',
      '*.test.tsx',
      'vite.config.ts',
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        JSX: true,
        React: true,
        __APP_VERSION__: 'readonly',
      },
    },
    plugins: {
      'jsx-a11y': jsxa11yConfig,
      react: pluginReactConfig,
    },
    rules: {
      'jsx-a11y/accessible-emoji': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-console': 2,
      'no-param-reassign': [
        'error',
        { props: true, ignorePropertyModificationsFor: ['state'] },
      ],
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      'no-new': 'off',
    },
  },
  {
    name: 'react-hooks',
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    name: 'unicorn rules',
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            props: false,
            params: false,
            e: false,
          },
        },
      ],
    },
  },
  {
    name: 'react-refresh',
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },
  {
    name: 'simple-import-sort',
    plugins: { 'simple-import-sort': simpleImportSort, import: importPlugin },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', String.raw`^@?\w`],
            // Side effect imports.
            [String.raw`^\u0000`, String.raw`^@?\w`],
            // Parent imports. Put `..` last.
            ['^@/.*$'],
            // Other relative imports. Put same-folder imports and `.` last.
            [
              String.raw`^\./(?=.*/)(?!/?$)`,
              String.raw`^\.(?!/?$)`,
              String.raw`^\./?$`,
            ],
            // Style imports.
            [String.raw`^.+\.s?css$`],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      // 'import/newline-after-import': ['error', { count: 1 }],
    },
  },
  {
    name: 'prettier',
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  },
  configPrettier,
];
