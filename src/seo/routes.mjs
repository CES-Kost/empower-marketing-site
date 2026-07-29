// Single source of truth for per-route SEO metadata.
// Consumed by scripts/generate-seo-html.mjs at build time to produce a
// pre-rendered <head> per route (see KB-229). React Router's route table
// in App.tsx must stay in sync with the `path` values here.
//
// Plain ESM (not .ts): the build script that reads this runs directly under
// Node in the Docker build image (node:20-alpine, see Dockerfile), which
// can't import .ts without a compile step. Keeping this file untyped keeps
// it a single dependency-free source of truth for both the Node build
// script and any future TS/React consumer.
//
// @typedef {Object} RouteMeta
// @property {string} path
// @property {string} title
// @property {string} description
// @property {string} [ogTitle]
// @property {string} [ogDescription]
// @property {string} [ogImage]
// @property {'website'|'product'} [ogType]
// @property {'summary'|'summary_large_image'} [twitterCard]
// @property {string|null} canonical - intentionally null (TODO) for every
//   route: the final production domain is unruled (Matt's call, apex vs.
//   marketing subdomain). Do not guess a value — see KB-229 card comments
//   2026-07-27.
// @property {'draft'|'final'} copyStatus - 'draft' = Kain-authored
//   placeholder grounded in existing hero copy, pending Reese's real
//   title/description/OG text. 'final' once Reese has signed off. Swap
//   copy in place here — nothing else needs to change.

const SITE_NAME = 'Empower POS Solutions';
const DEFAULT_OG_IMAGE = '/assets/web-screen-1.png';

/** @type {RouteMeta[]} */
export const routes = [
  {
    path: '/',
    title: 'Empower POS Solutions | All-in-One Restaurant Platform',
    description:
      'Empower brings your whole restaurant operation together — service, staff, and reporting in one platform built on Genius POS.',
    ogTitle: `${SITE_NAME} — Move more. Make more.`,
    ogDescription:
      'The all-in-one platform that brings your whole operation together, so service flows, your team stays in step, and you stay in control.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/host',
    title: 'Empower Host | Waitlist, Reservations & AI Hostess',
    description:
      'Waitlist, reservations with two-way SMS, and an AI hostess chat that answers wait-time questions and adds guests to the list — wired directly into your Genius POS.',
    ogTitle: 'Empower Host — Never lose a guest at the door.',
    ogDescription:
      'Waitlist and reservations with two-way SMS, wired directly into your Genius POS — plus an AI hostess chat on your website that answers wait-time questions, texts your menu, and adds guests to the waitlist or a reservation.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/menu',
    title: 'Empower Menu | One Menu, Every Surface',
    description:
      'QR menus, tablet menus, digital signage, and live inventory tracking — all driven by your Genius POS. Update once, every screen follows.',
    ogTitle: 'Empower Menu — One menu. Every surface.',
    ogDescription:
      'QR menus, tablet menus, digital signage, and live inventory tracking — all driven by your Genius POS.',
    ogImage: '/assets/menu-signage-board.png',
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/payroll',
    title: 'Empower Payroll | Punches, Tips & Payroll Sync',
    description:
      'Punches, tips, and breaks flow from your Genius POS straight into the payroll provider you already use — no re-keying, no spreadsheets.',
    ogTitle: 'Empower Payroll — Payroll, without the end-of-week headache.',
    ogDescription:
      'Punches, tips, and breaks flow from your Genius POS straight into the payroll provider you already use — ADP, Asure, Paylocity, Valiant, Homebase, and more.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/reporting',
    title: 'Empower Insight | Reporting & Dashboards',
    description:
      'A web dashboard, custom report builder, scheduled emails, audit trails, and consolidated views — plus a mobile app for operators on the floor.',
    ogTitle: 'Empower Insight — Reporting that runs your restaurant.',
    ogDescription:
      'A web dashboard, a custom report builder, scheduled emails, audit trails, and enterprise consolidated views — all driven by the same Genius POS data your team already trusts.',
    ogImage: '/assets/tablet-screen-main.png',
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/catering',
    title: 'Empower House Accounts | Catering & Corporate Billing',
    description:
      'Account-based billing and invoicing for corporate and catering customers, handled directly in the POS.',
    ogTitle: 'Empower House Accounts — Handled in the POS.',
    ogDescription:
      'Account-based billing and invoicing for your corporate and catering customers. Run a charge account, track what they owe, and settle on an invoice cycle.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
  {
    path: '/tools',
    title: 'Empower Tools | Standalone Restaurant Utilities',
    description:
      'Standalone utilities that solve specific operator pain — independent of, but compatible with, the rest of Empower.',
    ogTitle: 'Empower Tools — Tools that pay for themselves.',
    ogDescription:
      'Standalone utilities that solve specific operator pain — independent of (but compatible with) the rest of Empower.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    twitterCard: 'summary_large_image',
    canonical: null,
    copyStatus: 'draft',
  },
];
