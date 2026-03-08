# CLAUDE.md

## Project Overview

Documentation and showcase website for the **all-animation** CSS animation library. Built with Gatsby (React-based static site generator).

**Repository**: https://github.com/all-animation/all-animation.github.io

## Tech Stack

- **Framework**: Gatsby v3 + React 17
- **Styling**: Styled Components v5 with theme system
- **Docs**: MDX (Markdown + JSX) in `src/docs/`
- **Animations**: all-animation (CSS library) + framer-motion
- **Package Manager**: Yarn

## Key Commands

```bash
yarn develop    # Start dev server
yarn build      # Production build
yarn clean      # Clear Gatsby cache
yarn deploy     # Clean + build + deploy to master via gh-pages
```

## Project Structure

```
src/
├── assets/          # Images and SVGs
├── components/      # Reusable UI components (Button, CodeBlock, Navigation, etc.)
├── containers/      # Page-level containers (Home, Animations)
├── docs/            # MDX documentation files
├── hooks/           # React hooks (useSiteMetadata)
├── infra/           # Layout, Providers, Head components
├── pages/           # Gatsby file-based routing
└── theme/           # Colors, fonts, breakpoints, global styles
```

## Conventions

- **Component structure**: Each component in its own folder with `index.js` and `styled.js`
- **Styling**: Styled Components with centralized theme (`src/theme/`)
- **Theme colors**: Primary (#00D76B), Secondary (#65DAFF / #00A9DE)
- **Responsive**: Mobile-first with breakpoints at 600px (phone) and 1030px (tablet)
- **Docs pages**: Created dynamically from MDX files via `gatsby-node.js` using `slug` frontmatter
- **No TypeScript**: Pure JavaScript project

## Git Workflow

- **develop**: Active development branch
- **master**: Production branch (GitHub Pages deployment target)
- Deploy with `yarn deploy` which builds and pushes to master
