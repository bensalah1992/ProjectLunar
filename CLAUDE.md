# Lunartrust

## What is this?

A URL trust scanner for everyday users. Paste a URL, get a clear
green / yellow / red verdict.

## Commands

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run preview` - preview locally

## Tech Stack

- Astro + TypeScript (strict)
- Plain CSS with CSS variables — no Tailwind
- Netlify deployment + Netlify Functions for API calls

## Code Style

- PascalCase for components, camelCase for variables/functions
- CSS variables only, no hardcoded colors
- No external UI libraries or animation packages
- TypeScript for all logic files (.ts)

## Design Rules

- Dark mode default, light mode toggle available
- Signal colors (green/yellow/red) reserved for scan results only
- Minimal, fast, component-based
- Performance first — CSS animations only, no heavy JS

## Security

- No URL logging or storage. Core product promise!
- API keys in Netlify environment variables only, never in code

## Scan Logic

- All API calls run in parallel via Promise.allSettled()
- 8 second timeout per API call — app never hangs
- Score is rule-based and transparent:
  - DANGER: no SSL or Safe Browsing threat found
  - WARNING: domain under 6 months, SSL expiring under 14 days, no Wayback history
  - TRUSTED: none of the above

## Commit Convention

- feat: new feature
- style: CSS only
- layout: layout changes
- fix: bug fix
- api: API integration
- docs: documentation
