import React from 'react';
import styles from './ToolsList.module.css';

type ToolStatus = 'live' | 'coming-soon' | 'hidden';

interface Tool {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: string;
    status: ToolStatus;
    cta?: { label: string; href: string };
}

/**
 * Tools roster. Status flag controls visibility:
 *  - 'live' renders the tile with a live CTA
 *  - 'coming-soon' renders a tease (no live CTA, easy-to-swap copy)
 *  - 'hidden' suppresses the tile entirely (use when a placeholder would
 *    overpromise something not yet ready to demo)
 *
 * Onboarding Tool stays 'coming-soon' until CES Onboarding is dealer-ready;
 * KB-50 spec calls for swap-to-'live' to be a single status flag flip, no
 * marketing-site re-scope.
 */
const tools: Tool[] = [
    {
        id: 'menu-pricing',
        eyebrow: 'Live · Dealer-gated',
        title: 'Menu Pricing Tool',
        desc: 'Bulk price updates and bulk translations across an entire Heartland Genius menu — driven by the same XLSX export Heartland already gives you. Built for the 200-item menus where one-by-one edits in the POS UI is a half-day job.',
        bullets: [
            'Apply percentage or flat price changes across hundreds of items in one pass',
            'Bulk translate item names + descriptions via Google Translate',
            'Roundtrip via Heartland\'s native XLSX import/export — no scary writes',
            'Preview every change before commit, with full diff view',
        ],
        icon: '🏷️',
        status: 'live',
        cta: { label: 'Talk to a Dealer for Access', href: '/#contact' },
    },
    {
        id: 'onboarding',
        eyebrow: 'Coming Soon',
        title: 'Onboarding Tool',
        desc: 'A guided onboarding flow for new locations — POS verification, menu import, hours setup, dealer hand-off — automated end-to-end so a new store goes from contract-signed to taking-orders in hours, not days.',
        bullets: [
            'Step-by-step new-location wizard',
            'Auto-pulls Heartland setup, settings, and menu',
            'Dealer-handoff workflow built in',
            'Reuses across the Empower suite (Insight, Host, Menu)',
        ],
        icon: '🚀',
        status: 'coming-soon',
    },
];

export const ToolsList: React.FC = () => {
    const visibleTools = tools.filter((t) => t.status !== 'hidden');
    return (
        <section id="tools" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>What's in the kit</h2>
                    <p className={styles.sectionLead}>
                        New tools land here as they ship. Each one is independent — use the ones that solve a problem you have, ignore the rest.
                    </p>
                </div>

                <div className={styles.grid}>
                    {visibleTools.map((t) => (
                        <article
                            key={t.id}
                            id={t.id}
                            className={`${styles.tool} ${t.status === 'coming-soon' ? styles.comingSoon : ''}`}
                        >
                            <div className={styles.toolHeader}>
                                <div className={styles.toolIcon}>{t.icon}</div>
                                <div className={styles.toolEyebrow}>{t.eyebrow}</div>
                            </div>
                            <h3 className={styles.toolTitle}>{t.title}</h3>
                            <p className={styles.toolDesc}>{t.desc}</p>
                            <ul className={styles.bullets}>
                                {t.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                            {t.status === 'live' && t.cta && (
                                <a href={t.cta.href} className={`btn btn-primary ${styles.toolCta}`}>
                                    {t.cta.label}
                                </a>
                            )}
                            {t.status === 'coming-soon' && (
                                <div className={styles.comingSoonNote}>
                                    Roadmap — talk to your dealer for the launch timeline.
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
