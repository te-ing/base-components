import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn(), disabled: false },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox Label',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Checkbox',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Checkbox',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Checkbox',
    size: 'lg',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    checked: true,
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};
