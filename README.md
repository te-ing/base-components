# Base Components Monorepo

A production-ready monorepo for managing reusable React components and their documentation site, following industry best practices from Next.js, Turborepo, and Material-UI.

## Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **SCSS** - Styling with preprocessor
- **Vite 6** - Lightning-fast build tool & dev server
- **pnpm** - Efficient package manager with workspace support
- **ESLint** - Code linting with TypeScript & React support
- **Prettier** - Opinionated code formatter

## Project Structure

```
base-components/
├── packages/
│   └── base-components/          # Component library package
│       ├── src/
│       │   └── index.ts          # Library entry point
│       ├── package.json          # Runtime dependencies only
│       ├── tsconfig.json         # Extends root config
│       └── vite.config.ts        # Library build config
├── documentation-site/           # Documentation site
│   ├── src/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json              # Uses workspace:* for local packages
│   ├── tsconfig.json             # Extends root config
│   └── vite.config.ts
├── eslint.config.mjs             # Shared ESLint config
├── .prettierrc                   # Shared Prettier config
├── tsconfig.json                 # Base TypeScript config
├── pnpm-workspace.yaml           # Workspace definition
└── package.json                  # Shared dev dependencies
```

## Architecture Principles

Following best practices from major open-source projects:

1. **Centralized Dev Dependencies** - All build tools (TypeScript, Vite, ESLint, Prettier) live in root `package.json`
2. **Workspace Protocol** - Internal packages use `workspace:*` for dependency resolution
3. **Config Extension** - Each package extends root `tsconfig.json` for consistency
4. **Separation of Concerns** - Runtime dependencies in packages, dev tools at root

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
pnpm install
```

## Development

### Run documentation site

```bash
pnpm dev
```

Opens documentation site at http://localhost:3000

### Develop component library in watch mode

```bash
pnpm dev:components
```

### Work on both simultaneously

```bash
# Terminal 1
pnpm dev:components

# Terminal 2
pnpm dev
```

## Build

### Build all packages

```bash
pnpm build
```

### Build individual packages

```bash
# Component library only
pnpm build:components

# Documentation site only
pnpm build:docs
```

## Code Quality

### Type checking

```bash
pnpm type-check
```

### Linting

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

### Formatting

```bash
# Format all files
pnpm format

# Check formatting
pnpm format:check
```

### Clean build artifacts

```bash
pnpm clean
```

## Package Details

### base-components

Reusable React component library with:
- ESM and CJS dual-format output
- TypeScript declaration files
- SCSS styling with CSS output
- Tree-shakeable exports

**Exports:**
- `import { ... } from 'base-components'` - Components
- `import 'base-components/styles'` - Styles

### documentation-site

Interactive documentation and component showcase built with Vite and React.

## References

This project structure follows patterns from:

- [Next.js Monorepo](https://github.com/vercel/next.js)
- [Turborepo](https://github.com/vercel/turborepo)
- [Material-UI](https://github.com/mui/material-ui)
- [baseweb](https://github.com/uber/baseweb)
- [pnpm Workspaces Guide](https://pnpm.io/workspaces)
