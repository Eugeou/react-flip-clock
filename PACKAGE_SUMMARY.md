# React Flip Clock Library - Package Summary

## 📦 Package Overview

**Name**: `react-flip-clock-lib`  
**Version**: 1.0.0  
**Description**: A beautiful and customizable React flip clock component with TypeScript support

## 🚀 Quick Start

```bash
# Install
npm install react-flip-clock-lib

# Use in your React app
import { FlipClock } from 'react-flip-cloc-lib';

function App() {
  return <FlipClock />;
}
```

## 📁 Package Structure

```
react-flip-clock-lib/
├── 📁 src/                         # Source code
│   ├── 📁 components/              # React components
│   │   ├── animated-card.tsx
│   │   ├── flip-unit-container.tsx
│   │   ├── static-card.tsx
│   │   └── index.ts
│   ├── 📁 hooks/                   # Custom hooks
│   │   ├── use-check-mobile.ts
│   │   ├── use-flip-clock-time.ts
│   │   ├── use-shuffle-state.ts
│   │   └── index.ts
│   ├── 📁 constants/               # Constants and default props
│   │   └── index.ts
│   ├── 📁 types/                   # TypeScript definitions
│   │   └── index.ts
│   ├── FlipClock.tsx               # Main component
│   ├── FlipClockExample.tsx        # Example usage
│   ├── index.tsx                   # Entry point
│   └── flip-clock.css              # Styles
├── 📁 dist/                        # Built files (generated)
│   ├── index.js                    # CommonJS build
│   ├── index.esm.js                # ES modules build
│   ├── index.d.ts                  # TypeScript declarations
│   └── index.css                   # Compiled CSS
├── 📁 scripts/                     # Build and publish scripts
│   └── publish.sh                  # Publishing script
├── package.json                    # Package configuration
├── tsconfig.json                   # TypeScript configuration
├── rollup.config.js                # Rollup build configuration
├── README.md                       # Documentation
├── DEVELOPMENT.md                  # Development guide
├── LICENSE                         # MIT License
└── example.html                    # Static example
```

## 🛠️ Build Configuration

- **Bundler**: Rollup
- **TypeScript**: Full support with declarations
- **CSS**: PostCSS with extraction
- **Outputs**: CommonJS, ES modules, TypeScript declarations

## 📋 Available Exports

### Main Component
```tsx
import { FlipClock } from 'react-flip-clock-lib';
```

### Types
```tsx
import { FlipClockProps } from 'react-flip-clock-lib';
```

### Hooks
```tsx
import { 
  useFlipClockTime, 
  useShuffleState, 
  useCheckMobile 
} from 'react-flip-clock-lib';
```

### Components
```tsx
import { 
  FlipUnitContainer, 
  AnimatedCard, 
  StaticCard 
} from 'react-flip-clock-lib';
```

### Constants
```tsx
import { defaultProps } from 'react-flip-clock-lib';
```

## 🎨 Customization Options

The component supports extensive customization through props:

- **Size**: width, height, padding, borderRadius
- **Units**: unitWidth, unitHeight, unitMargin, unitBorderRadius
- **Typography**: digitFontSize, colonFontSize, fontFamily
- **Colors**: backgroundColor, cardBackgroundColor, digitColor, colonColor, borderColor, shadowColor
- **Effects**: opacity, colonDotSize

## 📱 Features

- **Responsive**: Auto-hides seconds on mobile
- **TypeScript**: Full type safety
- **Customizable**: Extensive styling options
- **Smooth Animations**: CSS-based flip effects
- **Zero Dependencies**: No external deps
- **Tree Shakeable**: Import only what you need

## 🚀 Publishing

To publish to npm:

```bash
# Build the package
npm run build

# Publish (requires npm login)
npm publish

# Or use the script
./scripts/publish.sh
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build in watch mode
npm run dev

# Build for production
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created by [Eugeou](https://github.com/Eugeou)

---
