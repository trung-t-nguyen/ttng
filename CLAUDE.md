# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal resume/CV website for Trung Nguyen, built with Next.js 15 (static export) and Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build static site (outputs to out/)
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test:e2e # Run Playwright E2E tests
```

## E2E Testing

Playwright is configured with Chromium only. Tests live in `e2e/cv.spec.ts` and screenshots are saved to `e2e/screenshots/` on each run.

```bash
npx playwright test             # Run all E2E tests
npx playwright test --reporter=list  # Run with verbose output
npx playwright show-report      # Open HTML report after a run
```

The `webServer` in `playwright.config.ts` auto-starts `npm run dev` on port 3000 (reuses an existing server if already running).

## Architecture

**Static export**: `next.config.js` sets `output: 'export'` — the site builds to `out/` as plain HTML/CSS/JS for GitHub Pages. Images use `unoptimized: true` to work without Next.js server-side image optimization.

**Deployment**: Pushing to `main` triggers `.github/workflows/nextjs.yml`, which builds and deploys to GitHub Pages automatically.

**Structure**:
- `src/app/layout.tsx` — root layout with global metadata (SEO, OpenGraph, Twitter cards, Schema.org JSON-LD) and Twilio webchat widget
- `src/app/page.tsx` — home page rendering all CV sections; includes print-friendly styles
- `src/components/` — one component per CV section (`Header`, `Experience`, `Skills`, `Projects`, `Education`, `Education`, `Section`)
- `Section.tsx` is a reusable wrapper used by all CV section components

**Styling**: Tailwind CSS v4 with a custom 4-color palette defined in both `tailwind.config.js` and CSS variables in `globals.css`:
- `dark-blue`: `#213448`
- `medium-blue`: `#547792`
- `light-blue`: `#94B4C1`
- `cream`: `#ECEFCA`

Use `@/*` as the path alias for `./src/*`.
