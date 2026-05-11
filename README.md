# empower-marketing-site

Public marketing site for Empower POS Solutions. React + TypeScript + Vite, path-based routing via react-router-dom v6, served behind Caddy in production.

## Pages

- `/` — Home
- `/menu` — Empower Menu
- `/payroll` — Empower Payroll
- `/reporting` — Empower Insight (reporting / dashboard)
- `/host` — Empower Host
- `/tools` — Empower Tools

Page-by-page rebuild is mid-flight; footer anchor cleanup wraps the architecture pass.

## Dev

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc -b && vite build → dist/
npm run preview      # serve dist/ on http://localhost:4173
npm run lint
```

## Deploy

### Current — Vercel auto-deploy

The repo is linked to the Vercel project `matt-kosts-projects/empower-marketing-site`. Every push to `main` builds and ships to <https://empower-marketing-site.vercel.app>. PRs get their own preview URL. No CI workflow lives in this repo — Vercel handles the whole pipeline.

To point a real domain at the site, redirect or CNAME to the Vercel production alias (or add the domain to the Vercel project).

### Self-host option (Docker)

The repo also ships a Dockerfile + Caddyfile for self-hosting whenever we want to take it off Vercel:

```sh
docker build -t empower-marketing:preview .
docker run --rm -p 8080:8080 empower-marketing:preview
# → http://localhost:8080
```

Multi-stage (`node:20-alpine` build → `caddy:2-alpine` runtime); the Caddyfile has the SPA fallback (`try_files {path} /index.html`) plus immutable caching for hashed `assets/*` and `no-cache` for `index.html`. Container listens on `:8080`. Eventual prod home for this path would be the empowerhost VPS alongside the existing `safe-deploy.sh` services.

## Routing notes

- Path-based via `react-router-dom` v6 — `/menu` not `/#/menu`. SEO + per-route Open Graph previews work as you'd expect.
- Old `#/foo` URLs auto-redirect on first load (`HashUrlBackcompat` in `App.tsx`) so any link still floating around in dealer materials lands on the right page.
- In-page anchors (`/#contact`, `/#solutions`) stay as plain `<a>` tags — browser handles the scroll natively, `ScrollManager` handles cross-route scroll-to-top + scroll-to-anchor.
- Any prod web server fronting this build needs the SPA fallback rule (already in the included `Caddyfile`).
