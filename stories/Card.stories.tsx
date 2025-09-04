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

export const PaddingVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Card padding="none">
        <div className="p-2 bg-blue-50 text-blue-800 text-sm">No Padding</div>
      </Card>
      <Card padding="sm">
        <div className="text-sm">Small Padding</div>
      </Card>
      <Card padding="md">
        <div className="text-sm">Medium Padding (Default)</div>
      </Card>
      <Card padding="lg">
        <div className="text-sm">Large Padding</div>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const BlogPost: Story = {
  render: () => (
    <Card className="w-full max-w-lg" variant="elevated">
      <CardContent>
        <div className="mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white font-semibold">Featured Image</span>
          </div>
          <h2 className="text-xl font-bold mb-2">
            Getting Started with React Components
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Learn how to build reusable and maintainable React components with TypeScript and modern best practices.
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Published on Dec 15, 2023</span>
            <span>5 min read</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-4 w-full">
          <Button variant="ghost" size="sm" leftIcon={<Heart size={16} />}>
            24
          </Button>
          <Button variant="ghost" size="sm" leftIcon={<MessageCircle size={16} />}>
            8
          </Button>
          <Button variant="ghost" size="sm" leftIcon={<Share size={16} />}>
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const UserProfile: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <CardTitle className="text-base">John Doe</CardTitle>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">
          Passionate about building great user experiences with modern web technologies.
        </p>
        <div className="flex space-x-4 text-sm">
          <div className="text-center">
            <div className="font-semibold">127</div>
            <div className="text-gray-500">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">2.4k</div>
            <div className="text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">891</div>
            <div className="text-gray-500">Following</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button fullWidth>Follow</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Standard border styling</p>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Thicker border for emphasis</p>
        </CardContent>
      </Card>
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Shadow for floating effect</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};