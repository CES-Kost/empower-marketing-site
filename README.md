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

The static build runs behind Caddy in a single Docker image. **No Vercel** — the Vercel project linkage is being torn down; if you still see a Vercel preview URL on a PR, ignore it.

Build + run locally:

```sh
docker build -t empower-marketing:preview .
docker run --rm -p 8080:8080 empower-marketing:preview
# → http://localhost:8080
```

The image is multi-stage (`node:20-alpine` build → `caddy:2-alpine` runtime) and ships a `Caddyfile` with the SPA fallback (`try_files {path} /index.html`) plus immutable caching for hashed `assets/*` and `no-cache` for `index.html`. Container listens on `:8080`.

### Preview (Nova)

While iterating: build the image, push to Matt's registry on Nova, and have Caddy on Nova reverse-proxy a preview subdomain to the container. Pulse owns the Caddy block on Nova.

### Production (empowerhost VPS)

Final home for the site is the empowerhost VPS (66.94.98.135) so marketing lives next to `menu.empowerpos.com` / `v2host-api.empowerpos.com`. Same image, deployed alongside the existing `safe-deploy.sh` services. Subdomain is pending Johnnie's call.

## Routing notes

- Path-based via `react-router-dom` v6 — `/menu` not `/#/menu`. SEO + per-route Open Graph previews work as you'd expect.
- Old `#/foo` URLs auto-redirect on first load (`HashUrlBackcompat` in `App.tsx`) so any link still floating around in dealer materials lands on the right page.
- In-page anchors (`/#contact`, `/#solutions`) stay as plain `<a>` tags — browser handles the scroll natively, `ScrollManager` handles cross-route scroll-to-top + scroll-to-anchor.
- Any prod web server fronting this build needs the SPA fallback rule (already in the included `Caddyfile`).
