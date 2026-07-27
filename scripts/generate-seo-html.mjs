#!/usr/bin/env node
// KB-229: build-time per-route head injection.
//
// Runs after `vite build`. Reads the single dist/index.html Vite produced
// (already has the correct hashed asset tags for this build) as a template,
// and for every route in src/seo/routes.ts writes a copy of it with that
// route's <head> metadata swapped in:
//   - '/'          -> overwrites dist/index.html in place
//   - '/host' etc. -> writes dist/host/index.html
//
// This is what makes OG/link-preview scrapers (Slack, LinkedIn, iMessage)
// and direct/refresh hits see correct per-route metadata: they read raw
// HTML before any client JS runs, so a client-side head library (e.g.
// react-helmet-async) can't reach them.
//
// Caddy-side note: this produces real per-route files, so the deploy vhost
// should eventually resolve `{path}/index.html` before falling back to the
// root shell (see KB-229 card comments 2026-07-27 re: KB-228 interaction).
// That directive change is a deploy-time concern, applied when these files
// actually exist on the box — not made here.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/seo/routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

if (!existsSync(templatePath)) {
  console.error(`[generate-seo-html] ${templatePath} not found — run \`vite build\` first.`);
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');

function stripExistingSeoTags(head) {
  return head
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');
}

function buildSeoTags(route) {
  const tags = [];
  tags.push(`<title>${escapeHtml(route.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(route.description)}" />`);

  if (route.canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(route.canonical)}" />`);
  } else {
    tags.push(`<!-- canonical: TODO — final production domain not yet ruled, see KB-229 -->`);
  }

  const ogTitle = route.ogTitle ?? route.title;
  const ogDescription = route.ogDescription ?? route.description;
  tags.push(`<meta property="og:title" content="${escapeHtml(ogTitle)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(ogDescription)}" />`);
  tags.push(`<meta property="og:type" content="${route.ogType ?? 'website'}" />`);
  if (route.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(route.ogImage)}" />`);
  }

  tags.push(`<meta name="twitter:card" content="${route.twitterCard ?? 'summary'}" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`);
  if (route.ogImage) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(route.ogImage)}" />`);
  }

  return tags.join('\n    ');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderForRoute(route) {
  return template.replace(/<head>([\s\S]*?)<\/head>/i, (_match, head) => {
    const cleaned = stripExistingSeoTags(head);
    const seoTags = buildSeoTags(route);
    return `<head>${cleaned.replace(/\s*$/, '\n    ')}${seoTags}\n  </head>`;
  });
}

let draftCount = 0;

for (const route of routes) {
  const html = renderForRoute(route);

  if (route.path === '/') {
    writeFileSync(templatePath, html, 'utf-8');
  } else {
    const routeDir = join(distDir, route.path.replace(/^\//, ''));
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, 'index.html'), html, 'utf-8');
  }

  if (route.copyStatus === 'draft') draftCount += 1;
  console.log(`[generate-seo-html] wrote ${route.path === '/' ? 'dist/index.html' : `dist${route.path}/index.html`} (${route.copyStatus})`);
}

if (draftCount > 0) {
  console.log(`[generate-seo-html] ${draftCount}/${routes.length} routes still have DRAFT copy — pending Reese's real title/description/OG text in src/seo/routes.mjs.`);
}
