import type { StorybookConfig } from '@storybook/vue3-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // 这个插件用于帮助新用户快速上手 Storybook。它提供了一些引导和教程，帮助用户了解如何使用 Storybook。
    '@storybook/addon-onboarding',
    // 这是一个集合插件，包含了一些常用的功能，如文档、控件、视图、背景、工具栏等。它简化了 Storybook 的配置，使得常用功能开箱即用。
    '@storybook/addon-essentials',
    //  这个插件与 Chromatic 集成，Chromatic 是一个用于视觉测试和 UI 组件管理的工具。它帮助开发者在 Storybook 中进行视觉回归测试。
    '@chromatic-com/storybook',
    // 这个插件用于测试组件的交互行为。它允许开发者在 Storybook 中编写和运行交互测试，确保组件在不同交互场景下的表现符合预期。
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  refs: {
    'react-storybook': {
      title: 'react-storybook',
      url: 'http://localhost:20001',
    },
  },
};
export default config;
