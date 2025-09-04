import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../src/components/Card';
import { Input } from '../src/components/Input';
import { Search, Github, Book } from 'lucide-react';

const meta = {
  title: 'Welcome',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the Amazon Q Developer UI Components library! This is a comprehensive collection of React components built with TypeScript and TailwindCSS.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Amazon Q Developer UI Components
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A comprehensive UI components library built with React, TypeScript, and TailwindCSS
          </p>
          <div className="flex justify-center space-x-4">
            <Button leftIcon={<Github size={20} />}>
              View on GitHub
            </Button>
            <Button variant="outline" leftIcon={<Book size={20} />}>
              Documentation
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>🚀 Modern Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Built with React 18, TypeScript, and TailwindCSS for modern development experience.
              </p>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>🎨 Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Highly customizable components with consistent design tokens and theming support.
              </p>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>📱 Responsive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Mobile-first design with responsive layouts that work across all devices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Component Preview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Component Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Buttons */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Inputs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                  <Input 
                    label="Email" 
                    placeholder="Enter your email" 
                    type="email"
                  />
                  <Input 
                    label="Search" 
                    placeholder="Search..." 
                    leftIcon={<Search size={16} />}
                  />
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card variant="default">
                    <CardContent>
                      <h4 className="font-semibold mb-2">Default Card</h4>
                      <p className="text-gray-600 text-sm">Standard styling</p>
                    </CardContent>
                  </Card>
                  <Card variant="outlined">
                    <CardContent>
                      <h4 className="font-semibold mb-2">Outlined Card</h4>
                      <p className="text-gray-600 text-sm">Emphasized border</p>
                    </CardContent>
                  </Card>
                  <Card variant="elevated">
                    <CardContent>
                      <h4 className="font-semibold mb-2">Elevated Card</h4>
                      <p className="text-gray-600 text-sm">With shadow</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Installation</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                  npm install @amazon-q-developer/ui-components
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Usage</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm">
                  {`import { Button, Input, Card } from '@amazon-q-developer/ui-components'
import '@amazon-q-developer/ui-components/dist/styles.css'

function App() {
  return (
    <Card>
      <Input label="Name" placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}`}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};