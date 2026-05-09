# empower-marketing-site

Public marketing site for Empower POS Solutions. React + TypeScript + Vite, path-based routing via react-router-dom v6, served behind Caddy in production.

## Pages

- `/` — Home
- `/menu` — Empower Menu product page

(Sibling product pages — Reporting, Host, Tools, Payroll — are stacked PRs.)

## Dev

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc -b && vite build → dist/
npm run preview      # serve dist/ on http://localhost:4173
npm run lint
```

## Docker preview (Nova pattern)

PR previews and prod serve the static build behind Caddy in a single image. No Vercel.

Build + run locally:

```sh
docker build -t empower-marketing:preview .
docker run --rm -p 8080:8080 empower-marketing:preview
# → http://localhost:8080
```

The image is multi-stage (`node:20-alpine` build → `caddy:2-alpine` runtime) and ships a `Caddyfile` with the SPA fallback (`try_files {path} /index.html`) plus immutable caching for hashed `assets/*` and `no-cache` for `index.html`. Container listens on `:8080`.

For Nova preview deploys: build the image, push to Matt's registry, and have Caddy on Nova reverse-proxy a preview subdomain to the container. Pulse owns the Caddy block on Nova.

## Routing notes

- Path-based via `react-router-dom` v6 — `/menu` not `/#/menu`. SEO + per-route Open Graph previews work as you'd expect.
- Old `#/foo` URLs auto-redirect on first load (`HashUrlBackcompat` in `App.tsx`) so any link still floating around in dealer materials lands on the right page.
- In-page anchors (`/#contact`, `/#solutions`) stay as plain `<a>` tags — browser handles the scroll natively, `ScrollManager` handles cross-route scroll-to-top + scroll-to-anchor.
- Any prod web server fronting this build needs the SPA fallback rule (already in the included `Caddyfile`).
