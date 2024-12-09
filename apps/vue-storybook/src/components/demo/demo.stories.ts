import { type Meta, type StoryObj } from '@storybook/vue3';
import Demo from './demo.vue';

const meta: Meta<typeof Demo> = {
  title: 'Demo',
  component: Demo,
};

export default meta;

export const BaseStory: StoryObj<typeof Demo> = {};
