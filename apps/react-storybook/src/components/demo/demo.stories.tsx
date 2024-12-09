import { Meta, StoryObj } from '@storybook/react';
import Demo from './demo';

const meta: Meta<typeof Demo> = {
  title: 'Demo',
  component: Demo,
};
export default meta;

type DemoStory = StoryObj<typeof Demo>;

export const BaseDemo: DemoStory = {};
