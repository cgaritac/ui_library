# CGC UI Library

A modern and professional UI component library built with React and TypeScript. Designed to be flexible, accessible, and easy to use, providing reusable components that follow frontend development best practices.

## Features

- **Built with React 19** - Uses the latest version of React for optimal performance
- **TypeScript First** - Static typing for a better development experience
- **Integrated Storybook** - Interactive documentation and playground for all components
- **Accessible** - Components designed following accessibility best practices
- **Highly Customizable** - Modular and easily customizable styles
- **Lightweight and Modern** - Built with Vite for fast development and builds

## Tech Stack

- **React** 19.1.1
- **TypeScript** ~5.9.3
- **Vite** 7.1.7 - Build tool and dev server
- **Storybook** 10.0.0 - Component documentation and development
- **Vitest** 4.0.4 - Testing framework
- **Playwright** - Browser testing
- **ESLint** - Linting and code quality

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Steps

1. Clone the repository:
```bash
git clone https://github.com/tu-usuario/ui_library.git
cd ui_library
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

## Usage

### Basic Example

```tsx
import { Button } from '@/components/button/Button';
import Stack from '@/components/stack/Stack';

function App() {
  return (
    <Stack orientation="vertical">
      <Button primary size="large" onClick={() => alert('Hello!')}>
        Primary Button
      </Button>
      <Button primary={false} size="medium">
        Secondary Button
      </Button>
    </Stack>
  );
}
```

## Available Components

### Button

A fully customizable button component with multiple variants and sizes.

**Props:**
- `primary?: boolean` - Primary or secondary style
- `size?: 'small' | 'medium' | 'large' | 'full'` - Button size
- `backgroundColor?: string` - Custom background color
- `disabled?: boolean` - Disabled state
- `type?: 'button' | 'submit' | 'reset'` - HTML button type
- `onClick?: () => void` - Click callback

**Example:**
```tsx
<Button 
  primary 
  size="large" 
  onClick={() => console.log('Clicked!')}
>
  Click me
</Button>
```

### Stack

A flexible layout component for organizing elements in a row or column.

**Props:**
- `orientation: 'horizontal' | 'vertical'` - Layout direction
- `children: React.ReactNode` - Child elements

**Example:**
```tsx
<Stack orientation="vertical">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## Storybook

This project uses Storybook for interactive documentation and component development. To view all components and their variants:

```bash
yarn storybook
# or
npm run storybook
```

This will open Storybook at `http://localhost:6006` where you can:
- View all available components
- Explore different variants and props
- Interact with components in real-time
- View documentation for each component

To build a static version of Storybook:

```bash
yarn build-storybook
# or
npm run build-storybook
```

## Available Scripts

- `yarn dev` - Starts the Vite development server
- `yarn build` - Builds the application for production
- `yarn preview` - Previews the production build
- `yarn lint` - Runs ESLint to check code quality
- `yarn storybook` - Starts Storybook in development mode
- `yarn build-storybook` - Builds a static version of Storybook

## Project Structure

```
ui_library/
├── src/
│   ├── components/          # Library components
│   │   ├── button/
│   │   └── stack/
│   ├── stories/             # Storybook stories
│   └── assets/              # Static resources
├── public/                  # Public files
├── .storybook/              # Storybook configuration
└── package.json
```

## Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## Author

**CGC**

---

If you find this project useful, don't forget to give it a ⭐!
