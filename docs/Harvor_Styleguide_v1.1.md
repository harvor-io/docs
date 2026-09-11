# Harvor Styleguide v1.1

# Design Philosophy

Harvor should feel closer to a production engineering tool than a SaaS
marketing site.

## Layout

-   Large whitespace
-   Strong typography
-   One primary CTA
-   One secondary CTA
-   One supporting technical visual
-   Minimal distractions above the fold

------------------------------------------------------------------------

# Visual Language

Use:

-   Terminal windows
-   Configuration files
-   API responses
-   Architecture diagrams
-   Documentation patterns

Avoid:

-   Cartoon illustrations
-   Decorative gradients
-   Stock artwork
-   Overly animated hero sections

------------------------------------------------------------------------

# Backgrounds

Preferred textures:

-   Subtle engineering dot grids
-   Blueprint grids
-   Very light noise

Background textures should never compete with content.

------------------------------------------------------------------------

# Surface Design

Surfaces should have:

-   Thin borders
-   Large padding
-   Large radius (12--16px)
-   Minimal shadow
-   High contrast between layers

Avoid glassmorphism.

------------------------------------------------------------------------

# Typography

Typography should create hierarchy more than color.

-   Large bold headlines
-   Restrained body copy
-   Blue only for emphasis
-   Comfortable line height

------------------------------------------------------------------------

# Hero Pattern

Every marketing hero should contain:

1.  Small announcement pill
2.  Strong problem-focused headline
3.  Supporting paragraph
4.  Primary CTA
5.  Secondary CTA
6.  Authentic technical example

------------------------------------------------------------------------

# Announcement Pills

-   Uppercase
-   Small font
-   Letter spacing
-   Thin outline
-   Rounded capsule
-   Low visual emphasis

------------------------------------------------------------------------

# Feature Cards

Each feature should include:

-   Lucide icon
-   Small icon container
-   Bold title
-   One concise sentence

Prefer four-column layouts on desktop.

------------------------------------------------------------------------

# Motion

Motion communicates state.

-   150--250ms
-   Fade
-   Slide
-   Scale

Avoid decorative motion and parallax.

------------------------------------------------------------------------

# Design Inspiration

Harvor should draw inspiration from products like:

-   Vercel
-   Stripe Dashboard
-   GitHub
-   Docker
-   Grafana
-   Linear
-   Tailscale
-   Terraform
-   Cloudflare Dashboard

The goal is not imitation, but to emulate their clarity, restraint, and
engineering-first aesthetic.

------------------------------------------------------------------------

# Frontend Standards

Framework: Next.js

Styling: Tailwind CSS

Components: shadcn/ui + Radix UI

Icons: lucide-react

Font: Geist

Code Highlighting: Shiki

Charts: Recharts or Tremor

------------------------------------------------------------------------

# Final UI Test

Before shipping ask:

-   Does this look trustworthy?
-   Is the next action obvious?
-   Could anything be removed?
-   Does it feel timeless?
-   Does it feel like infrastructure software?
