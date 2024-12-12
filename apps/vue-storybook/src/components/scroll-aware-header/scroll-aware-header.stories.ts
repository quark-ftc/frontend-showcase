import { type Meta, StoryObj } from '@storybook/vue3';
import ScrollAwareHeader from './scroll-aware-header.vue';

const meta: Meta<typeof ScrollAwareHeader> = {
  title: '滚动感知头部',
  component: ScrollAwareHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ScrollAwareHeaderStory: StoryObj<typeof ScrollAwareHeader> = {};
