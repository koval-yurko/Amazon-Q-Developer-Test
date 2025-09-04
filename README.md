# Amazon Q Developer UI Components

A comprehensive UI components library built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and TailwindCSS
- **Storybook Integration**: Interactive component playground and documentation
- **Customizable**: Highly customizable components with consistent design tokens
- **Responsive**: Mobile-first design that works across all devices
- **Type Safe**: Full TypeScript support with comprehensive type definitions
- **Accessible**: Built with accessibility best practices in mind

## 📦 Installation

```bash
npm install @amazon-q-developer/ui-components
```

## 🎨 Usage

```tsx
import { Button, Input, Card } from '@amazon-q-developer/ui-components'
import '@amazon-q-developer/ui-components/dist/styles.css'

function App() {
  return (
    <Card>
      <Input label="Name" placeholder="Enter your name" />
      <Button>Submit</Button>
    </Card>
  )
}
```

## 📖 Storybook

This project uses Storybook for component development and documentation. You can:

- **View Live Storybook**: [GitHub Pages](https://your-username.github.io/your-repo-name/)
- **Run Locally**: `npm run storybook`

### Available Scripts

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build` - Build the component library
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## 🧩 Components

### Button
A versatile button component with multiple variants, sizes, and states.

```tsx
<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

### Input
A flexible input component with support for labels, helper text, and icons.

```tsx
<Input 
  label="Email" 
  placeholder="Enter your email"
  leftIcon={<MailIcon />}
  helperText="We'll never share your email"
/>
```

### Card
A flexible card component with optional header, title, content, and footer sections.

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 🔧 Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start Storybook: `npm run storybook`
4. Start developing!

## 🚀 Deployment

### Storybook Deployment

This project automatically deploys Storybook to GitHub Pages:

- **Main Branch**: Deploys to the main GitHub Pages site
- **Pull Requests**: Creates preview deployments for each PR

The deployment is handled by GitHub Actions:
- `.github/workflows/deploy-storybook.yml` - Main branch deployment
- `.github/workflows/preview-storybook.yml` - PR preview deployment

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Your PR will automatically get a Storybook preview deployment for easy review!
