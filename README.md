# TogetherMind — Mental Health Tracking Tools

A calming, community-focused mental wellness app that helps you track your mood,
journal your thoughts, set wellbeing goals, and explore bite-sized mental-health
articles — all in one place.

## What It Does

**TogetherMind** ("Your Community, your safe space") is a dashboard-style web app
for everyday mental wellbeing:

- **Dashboard** — at-a-glance overview: today's mood, weekly mood trend chart, goal
  progress, and featured articles.
- **Mood Tracker** — log daily mood entries and visualize patterns over the week.
- **Journal** — a private journaling space for reflections and gratitude entries.
- **Goals** — set wellbeing goals (e.g. daily meditation, exercise, gratitude
  journal) with progress bars and streak counters.
- **Insights** — charts and summaries of your mood data over time (built with
  Recharts).
- **Articles** — curated mental-health reading (anxiety, sleep, mindfulness, …).

All state is client-side; no accounts, no backend, no tracking.

## Features

- Mood logging with weekly trend visualization
- Journaling with rich text input
- Goal tracking with progress + streak indicators
- Recharts-powered insights dashboards
- Curated mental-health article pages
- Dark/light theme toggle (`next-themes`)
- Fully responsive, mobile-first UI (Tailwind CSS + shadcn/ui + Radix UI)
- Toast notifications, calendars, charts, dialogs — full shadcn/ui component set

## Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 15 (App Router)                     |
| UI         | React 19, TypeScript, Tailwind CSS 3        |
| Components | shadcn/ui, Radix UI primitives              |
| Charts     | Recharts                                    |
| Icons      | Lucide React                                |
| Forms      | React Hook Form + Zod                       |
| Theme      | next-themes                                 |
| Analytics  | Vercel Analytics (optional)                 |
| Originally | Generated with v0.app, customized afterwards|

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Build a static export for hosting anywhere:

```bash
npm run build   # outputs to ./out (output: 'export')
```

## Project Structure

```
app/
  page.tsx            # Dashboard (mood overview, goals, articles)
  mood-tracker/page.tsx
  journal/page.tsx
  goals/page.tsx
  insights/page.tsx
  articles/page.tsx
  layout.tsx          # Root layout + theme provider
  globals.css
components/
  ui/                 # shadcn/ui components (button, card, dialog, …)
  theme-provider.tsx
lib/
  utils.ts            # cn() class merge helper
public/               # Static assets
styles/
```

## Environment Variables

None required. The app runs entirely client-side.

## Deployment Notes

- Static export is enabled (`output: 'export'` in `next.config.mjs`) so the site
  can be hosted on GitHub Pages or any static host.
- For GitHub Pages project-site hosting the config sets
  `basePath: '/mental-health-tracking-tools'`. If you deploy to a custom domain
  or Vercel instead, **remove the `basePath` line** from `next.config.mjs`.
- Live demo: https://girishlade111.github.io/mental-health-tracking-tools/
- Originally auto-deployed on Vercel from v0.app.

## Disclaimer

This app is a self-care / tracking tool, not medical advice. If you are
struggling, please reach out to a qualified mental-health professional or a
local crisis helpline.

---

Built by Girish Lade — https://ladestack.in
