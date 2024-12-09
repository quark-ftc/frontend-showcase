import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default tseslint.config(
  { ignores: ['storybook-static'] },
  {
    name: 'react',
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    name: 'vue',
    files: ['**/*.{js,ts,mts,tsx,vue}'],
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    extends: [
      ...pluginVue.configs['flat/essential'],
      ...vueTsEslintConfig(),
      skipFormatting,
    ],
    rules: {
      'vue/multi-word-component-names': 'off', // 关闭多单词组件名称规则
    },
  },
);
