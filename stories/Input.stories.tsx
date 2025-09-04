import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/Input';
import { Search, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with support for labels, helper text, icons, and various states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the input',
    },
    error: {
      control: 'boolean',
      description: 'Shows error state styling when true',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input when true',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    error: true,
    helperText: 'Password must be at least 8 characters',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <Search size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    rightIcon: <Mail size={16} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Input size="xs" placeholder="Extra Small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra Large" />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This field is currently disabled',
  },
};