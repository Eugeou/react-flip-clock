# Development Guide

This guide explains how to set up the development environment for the React Flip Clock Library.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-flip-clock-lib
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the package**
   ```bash
   npm run build
   ```

## Development Scripts

- `npm run build` - Build the package for production
- `npm run dev` - Build the package in watch mode for development
- `npm run test` - Run tests (when implemented)

## Project Structure

```
react-flip-clock-lib/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── hooks/             # Custom hooks
│   ├── constants/         # Constants and default props
│   ├── types/             # TypeScript type definitions
│   ├── FlipClock.tsx      # Main component
│   ├── index.tsx          # Entry point
│   └── flip-clock.css     # Styles
├── dist/                  # Built files (generated)
├── scripts/               # Build and publish scripts
├── package.json           # Package configuration
├── tsconfig.json          # TypeScript configuration
├── rollup.config.js       # Rollup build configuration
└── README.md              # Documentation
```

## Building

The package uses Rollup for bundling with the following outputs:

- `dist/index.js` - CommonJS build
- `dist/index.esm.js` - ES modules build
- `dist/index.d.ts` - TypeScript declarations

## Publishing

To publish the package to npm:

1. **Update version** in `package.json`
2. **Run the publish script**:
   ```bash
   ./scripts/publish.sh
   ```

Or manually:
```bash
npm run build
npm publish
```

## Testing Locally

To test the package locally in another project:

1. **Build the package**:
   ```bash
   npm run build
   ```

2. **Link the package**:
   ```bash
   npm link
   ```

3. **In your test project**:
   ```bash
   npm link react-flip-clock-lib
   ```

4. **Import and use**:
   ```tsx
   import { FlipClock } from 'react-flip-clock-lib';
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Code Style

- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Add JSDoc comments for public APIs

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md` (if exists)
3. Run tests and build
4. Publish to npm
5. Create a GitHub release
