# ProjectLunar

## What is this?

A URL scanner for everyday users. Paste a URL, get a clear answer:
can I trust this website? Results are shown as a traffic light score
(green / yellow / red). No technical jargon, no overwhelming details.

## Target Audience

- Regular users checking unknown online shops
- People who want a quick trust check before clicking a link
- Non-technical users who can't spot scam sites on their own
- Simplicity and clarity are the top priority

## Commands

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run preview` - preview build locally

## Tech Stack

- Astro
- TypeScript (strict)
- Plain CSS with CSS variables (no Tailwind)
- Netlify for deployment
- Netlify Functions for API calls

## Code Style

- PascalCase for components (e.g. ScanInput.astro)
- camelCase for variables and functions
- Components are self-contained and reusable via props
- Page-level data goes at the top of the file:
  const DATA = {}
  passed into components like:
  <Component {...data} />
- TypeScript for all logic files (.ts)
- Prefer Astro built-in APIs where possible

## Design

- Dark mode by default, light mode toggle available
- Minimal — low use of color, no visual noise
- Signal colors (green/yellow/red) reserved for status only
- Component-based, clean, maintainable
- Performance is a priority. keep it fast
- Visual reference: virustotal.com. but our own brand

## Security

- No URL logging or storage
- API keys only in Netlify environment variables, never in code
- No user data is stored or forwarded

## Project Structure

- src/components/ui/ — buttons, badges, cards
- src/components/scanner/ — scanner-specific components
- src/components/layout/ — header, footer, navigation
- src/pages/api/ — Netlify Functions / API endpoints
- src/lib/ — scoring logic, helper functions
- src/types/ — TypeScript type definitions
- src/styles/global.css — global styles and CSS variables

## Commit Convention

- layout: layout changes
- style: CSS changes
- feat: new features
- fix: bug fixes
- api: API integrations

## Key Decisions

- No data storage, this is our main differentiator
- Open source on GitHub
- Score is rule-based and transparent, not a black box
- All API calls use Promise.allSettled(). the app never hangs
- 8 second timeout for slow APIs
