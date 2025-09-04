import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../src/components/Card';
import { Button } from '../src/components/Button';
import { Heart, Share, MessageCircle } from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with optional header, title, content, and footer sections. Supports different variants and padding options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The padding inside the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">This is a simple card with default styling.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has a thicker border for emphasis.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has a shadow for a floating effect.</p>
      </div>
    ),
  },
};

export const WithSubComponents: Story = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Product Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          This is an example of a card using all the sub-components: header, title, content, and footer.
        </p>
        <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: 'padded',
  },
};