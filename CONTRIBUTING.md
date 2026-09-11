# Contributing to Harvor Docs

Thanks for your interest in contributing to Harvor Docs!

## Scope of this document

General Harvor contribution guidelines — how we use issues and discussions,
branch and commit conventions, the pull request process, code quality
expectations, security reporting, and licensing — live in the Harvor
community repository:

<https://github.com/harvor-io/community/blob/main/CONTRIBUTING.md>

Please read that first. **This document only covers the specifics of working
in the Docs repository**: how the site is structured, how to run it locally,
and how to run the checks CI enforces.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm 10+

## Design and theme

All UI contributions must follow the Harvor brand and design system:

- [docs/Harvor_Brand_Guidelines_v1.1.md](docs/Harvor_Brand_Guidelines_v1.1.md) — brand voice, color
  philosophy, and visual principles.
- [docs/Harvor_Styleguide_v1.1.md](docs/Harvor_Styleguide_v1.1.md) — layout, surfaces, typography,
  and component patterns.
- [docs/Harvor_SEO_Standards_v1.0.md](docs/Harvor_SEO_Standards_v1.0.md) — content and SEO
  expectations for documentation pages.

This app is built with [MUI](https://mui.com/material-ui/) (`@mui/material`).
Use MUI components (`Box`, `Stack`, `Typography`, `Button`, `AppBar`, etc.)
and the shared theme in [src/theme.ts](src/theme.ts) rather than raw HTML
elements or one-off CSS — the theme is the single source of truth for
color, spacing, radius, and typography, so changes to those should happen
there, not as inline overrides. Do not introduce another component library.
Match the existing colors, spacing, and radii defined in the theme instead
of hand-picking new values.

## Project layout

| Path | Purpose |
|---|---|
| [src/App.tsx](src/App.tsx) | Route definitions |
| [src/main.tsx](src/main.tsx) | App bootstrap + `BrowserRouter` + `ColorModeProvider` |
| [src/theme.ts](src/theme.ts) | MUI theme factory (light/dark palettes, typography, overrides) |
| [src/ColorModeContext.ts](src/ColorModeContext.ts) | Light/dark mode context + `useColorMode` hook |
| [src/ColorModeProvider.tsx](src/ColorModeProvider.tsx) | Owns mode state (persisted), supplies `ThemeProvider` + `CssBaseline` |
| [src/navigation.ts](src/navigation.ts) | Sidebar section/link data |
| [src/layouts/](src/layouts/) | `Main` (shell), `TopNav` (app bar + search), `SideNav` (docs drawer), `Footer` |
| [src/pages/](src/pages/) | Full-page views, one per route |
| [src/index.css](src/index.css) | Global resets and light/dark tokens for non-MUI markup |
| [docs/](docs/) | Brand, style, and SEO guidelines |
| [vite.config.ts](vite.config.ts) | Vite config (default port 3000) |

## Running locally

```sh
npm install
npm run dev
```

Vite defaults to port 3000; if it's busy, Vite picks the next available port.

## Tests and checks

```sh
npm run lint    # ESLint
npm run build   # tsc -b && vite build — type checking and a production build
```

CI runs both on every pull request; please make sure they pass before
requesting review.

## Pull requests

Any pull request that changes UI **must include a screenshot or screen
recording** of the change (before/after for visual tweaks, a short video for
interactive or animated behavior). Attach it directly to the PR description.
Reviews of visual changes without one will be sent back for a screenshot
before they're considered.

## Adding a page

1. Add a component under [src/pages/](src/pages/).
2. Register its route in [src/App.tsx](src/App.tsx).
3. Add an entry to [src/navigation.ts](src/navigation.ts) if the page should
   be reachable from the sidebar (it's also searchable from the top nav once
   listed there).
