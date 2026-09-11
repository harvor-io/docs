# Harvor Docs

Documentation site for Harvor, built with React, TypeScript, and Vite.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- MUI
- ESLint

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Vite is configured to use port 3000 by default. If port 3000 is busy, Vite will automatically try the next available port.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
.
├─ docs/                        # Brand, style, and SEO guidelines
├─ src/
│  ├─ App.tsx                   # Route definitions
│  ├─ main.tsx                  # App bootstrap + BrowserRouter + ColorModeProvider
│  ├─ theme.ts                  # MUI theme factory (light/dark palettes, typography, overrides)
│  ├─ ColorModeContext.ts       # Light/dark mode context + useColorMode hook
│  ├─ ColorModeProvider.tsx     # Owns mode state (persisted), supplies ThemeProvider + CssBaseline
│  ├─ navigation.ts             # Sidebar section/link data
│  ├─ layouts/
│  │  ├─ Main.tsx               # Composes TopNav + SideNav + Outlet + Footer
│  │  ├─ TopNav.tsx             # App bar: menu toggle, search, dark mode toggle, GitHub link
│  │  ├─ SideNav.tsx            # Docs section drawer (permanent on desktop, temporary on mobile)
│  │  ├─ Footer.tsx             # Site footer
│  │  └─ layoutConstants.ts     # Shared layout constants (drawer width)
│  ├─ pages/
│  │  ├─ Home.tsx               # Landing page
│  │  └─ PlaceholderPage.tsx    # Generic title/description page used by doc routes
│  └─ index.css                 # Global resets + light/dark link and focus-ring tokens
├─ vite.config.ts               # Vite config (default port 3000)
└─ package.json                 # Scripts and dependencies
```

## Routing

- / -> Home page
- /getting-started/installation, /guides/configuration, /guides/self-hosting,
  /reference/api -> placeholder doc pages, listed in the sidebar
- Any unknown route redirects back to /

## Light and dark mode

The color mode is controlled by [ColorModeProvider](src/ColorModeProvider.tsx):
it defaults to the OS preference (`prefers-color-scheme`), can be toggled from
the sun/moon icon in the top nav, and the choice is persisted to
`localStorage`. The palettes for both modes are defined in
[src/theme.ts](src/theme.ts).

## Deployment

This project outputs static assets to dist/ and can be deployed on any static hosting provider.

Standard flow:

1. Run npm run build.
2. Deploy the dist/ directory.

## Contributing

Harvor Docs is open source and contributions are welcome.

General Harvor contribution guidelines — issues and discussions, branch and
commit conventions, the pull request process, code quality expectations,
security reporting, and licensing — live in the [Harvor community
repository](https://github.com/harvor-io/community/blob/main/CONTRIBUTING.md).
The [Code of Conduct](https://github.com/harvor-io/community/blob/main/CODE_OF_CONDUCT.md)
also lives there and applies to this repository.

For working in this repository specifically — running the site locally,
project structure, and required checks — see [CONTRIBUTING.md](CONTRIBUTING.md).
