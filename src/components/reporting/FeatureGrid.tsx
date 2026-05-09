import React from 'react';
import styles from './FeatureGrid.module.css';

interface Feature {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: string;
    flip?: boolean;
}

const features: Feature[] = [
    {
        id: 'web-dashboard',
        eyebrow: 'Web Dashboard',
        title: 'A live view of every location, on any browser',
        desc: 'Sales, labor, voids, discounts, item mix, ticket detail — all in one place, refreshed against your POS in real time. The same view your dealer sees, the same view your operators see, the same view your back office sees.',
        bullets: [
            'Live KPIs across every location you own',
            'Drill from a number into the underlying tickets',
            'Date ranges, daypart filters, role-based views',
            'No installs, no VPN — just a browser',
        ],
        icon: '📈',
    },
    {
        id: 'report-builder',
        eyebrow: 'Custom Report Builder',
        title: 'Build the report your accountant actually asks for',
        desc: 'A drag-and-drop builder for the operators who got tired of asking IT to write a SQL query. Pick the dimensions and metrics, save the layout, schedule the delivery — Empower Insight handles the rest.',
        bullets: [
            'Drag-and-drop dimension and metric picker',
            'Save layouts as named reports for re-use',
            'Filters, groupings, and totals without writing SQL',
            'Export to PDF, CSV, or scheduled email',
        ],
        icon: '🛠️',
        flip: true,
    },
    {
        id: 'scheduled-email',
        eyebrow: 'Scheduled Email Reports',
        title: 'The reports that should land in your inbox — actually do',
        desc: 'Daily summaries, weekly P&Ls, monthly rollups, payroll-week recaps — set the schedule once, and Empower Insight ships the PDF to the right people every time. No "did you send that report?" Slack messages.',
        bullets: [
            'Daily, weekly, monthly, or custom cadences',
            'Per-recipient distribution lists (owner, GM, accountant)',
            'PDF or CSV attachments — no third-party links',
            '60+ stock reports plus anything you build in the builder',
        ],
        icon: '📬',
    },
    {
        id: 'audit',
        eyebrow: 'Audit Reports',
        title: 'Catch the leaks before they show up on the P&L',
        desc: 'Voids, comps, discounts, refunds, manager overrides, and cash-handling exceptions — all surfaced as audit reports an owner can scan in two minutes. Loss prevention that doesn\'t require an outside auditor.',
        bullets: [
            'Void / comp / discount activity by employee',
            'Cash-drop and bank-out variance tracking',
            'Manager-override audit trail',
            'Refund-pattern flagging across locations',
        ],
        icon: '🔎',
        flip: true,
    },
    {
        id: 'enterprise',
        eyebrow: 'Enterprise Consolidated Views',
        title: 'Multi-location reporting that doesn\'t make you re-add the totals',
        desc: 'Combined sales, combined labor, combined item mix — one row per location plus a true total row, rolled across every store in your group. Built for operators with 3, 30, or 300 rooms under one corp.',
        bullets: [
            'One PDF, every location, real total row',
            'Period-over-period comparisons across the whole group',
            'Per-location drill-down without leaving the consolidated view',
            'TY vs LY comparisons baked in for daily and monthly rollups',
        ],
        icon: '🏢',
    },
    {
        id: 'check-viewer',
        eyebrow: 'Check Viewer',
        title: 'Pull up any check, from any location, in two clicks',
        desc: 'When a guest disputes a charge or a manager wants to see what really got rung in last Saturday at 11pm — the check viewer gives you the full ticket, exactly as the POS recorded it. No phone calls, no "I\'ll have to look that up."',
        bullets: [
            'Search by date, employee, table, or ticket #',
            'Full item, modifier, void, and discount detail',
            'Linked payment, tip, and tender breakdown',
            'Shareable link to a single check for dispute resolution',
        ],
        icon: '🧾',
        flip: true,
    },
];

export const FeatureGrid: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Six surfaces, one source of truth</h2>
                    <p className={styles.sectionLead}>
                        Most operators run a dashboard tool, an emailed-PDF tool, an audit spreadsheet, and a separate enterprise rollup — and reconcile them with calls to four different vendors. Empower Insight replaces the whole stack with one platform driven by your Genius POS.
                    </p>
                </div>

                <div className={styles.featureList}>
                    {features.map((f) => (
                        <article
                            key={f.id}
                            id={f.id}
                            className={`${styles.feature} ${f.flip ? styles.flip : ''}`}
                        >
                            <div className={styles.featureText}>
                                <div className={styles.eyebrow}>
                                    <span className={styles.icon}>{f.icon}</span>
                                    <span>{f.eyebrow}</span>
                                </div>
                                <h3 className={styles.title}>{f.title}</h3>
                                <p className={styles.desc}>{f.desc}</p>
                                <ul className={styles.bullets}>
                                    {f.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.featureVisual}>
                                {/* TODO(KB-43 asset call): real screenshot for {f.id} */}
                                <div className={styles.preview} data-feature={f.id}>
                                    <span className={styles.previewIcon}>{f.icon}</span>
                                    <span className={styles.previewLabel}>{f.eyebrow} preview</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
