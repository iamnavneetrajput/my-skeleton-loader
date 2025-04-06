# my-skeleton-loader

A reusable React skeleton loader component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install my-skeleton-loader
```

### Peer Dependencies

This package has the following peer dependencies:
- react: >=16.8.0
- react-dom: >=16.8.0

## Tailwind CSS Setup

This library uses Tailwind CSS. To use it in your project, you need to make sure Tailwind is properly configured.

1. Add the following to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your project content paths
    './node_modules/my-skeleton-loader/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
}
```

2. Make sure you have PostCSS and Tailwind configured in your project.

## Usage

### Basic Skeleton

```jsx
import { Skeleton } from 'my-skeleton-loader';

function MyComponent() {
  return (
    <div>
      <h2>Loading Content</h2>
      <Skeleton width="100%" height="20px" />
      <Skeleton width="70%" height="20px" className="mt-2" />
    </div>
  );
}
```

### Skeleton Text Paragraph

```jsx
import { SkeletonText } from 'my-skeleton-loader';

function MyComponent() {
  return (
    <div>
      <h2>Loading Article</h2>
      <SkeletonText lines={5} lineHeight="1.2rem" lastLineWidth={60} />
    </div>
  );
}
```

## Props

### Skeleton Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| width | string \| number | '100%' | Width of the skeleton |
| height | string \| number | '1rem' | Height of the skeleton |
| borderRadius | string | '0.25rem' | Border radius of the skeleton |
| className | string | '' | Additional CSS classes |
| animationDuration | number | 2 | Animation duration in seconds |

### SkeletonText Component

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lines | number | 3 | Number of lines to display |
| lineHeight | string \| number | '1rem' | Height of each line |
| spacing | string \| number | '0.5rem' | Space between lines |
| className | string | '' | Additional CSS classes |
| lastLineWidth | number | 80 | Make the last line shorter (percentage) |

## Development

Clone the repository and install dependencies:

```bash
git clone [repository-url]
cd my-skeleton-loader
npm install
```

Run the development build with watch mode:

```bash
npm run dev
```

Build the package:

```bash
npm run build
```

## Publishing

To publish the package to npm:

```bash
npm publish --access public
```

## License

MIT