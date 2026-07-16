import React from 'react';
import styles from './CateringFeatures.module.css';

interface Feature {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: string;
    flip?: boolean;
}

/**
 * Feature blocks for the Catering / House Accounts page.
 *
 * Source: Reese's KB-43 content pass (empower-full-site-preview.html, id="catering").
 * Note her mockup actually titles this section "Empower House Accounts" and is
 * watermarked "DRAFT — ON HOLD" — the account-billing capability reads as live,
 * but full catering order management (large/event orders, delivery scheduling,
 * quotes, e-signature contracts) is explicitly roadmap / not yet available.
 * Keeping that distinction honest in the last feature block below rather than
 * implying catering-specific tooling ships today.
 */
const features: Feature[] = [
    {
        id: 'account-billing',
        eyebrow: 'Account-Based Billing',
        title: 'Corporate and catering customers run a tab, not a receipt',
        desc: 'Your regular corporate and catering customers run a house account instead of paying at every order. Charges accrue to the account and settle on a cycle your back office already runs.',
        bullets: [
            'Charge account tied to the customer, not the ticket',
            'Billed on a cycle — weekly, monthly, or per-event',
            'Running balance visible from the same POS your team already uses',
        ],
        icon: '🏢',
    },
    {
        id: 'invoicing',
        eyebrow: 'Invoicing Built In',
        title: 'Settle the account without leaving the system',
        desc: 'Track every charge against the account and generate the invoice on schedule, right alongside the rest of your Empower reporting — no separate invoicing tool, no separate login.',
        bullets: [
            "Invoice generation tied to the account's billing cycle",
            'Charges roll up from the same tickets your POS already recorded',
            'One system for the sale and the bill',
        ],
        icon: '🧾',
        flip: true,
    },
    {
        id: 'crm-sync',
        eyebrow: 'Federated from Your CRM',
        title: 'Accounts pull from the customer records you already keep',
        desc: 'House accounts read from your CRM instead of a second, separate customer list — so billing and customer data stay in one place instead of drifting apart.',
        bullets: [
            'Account holders sync from existing CRM customer records',
            'No duplicate customer entry between billing and CRM',
        ],
        icon: '🔗',
    },
    {
        id: 'roadmap',
        eyebrow: 'Roadmap — Not Yet Available',
        title: 'Coming — full catering order management',
        desc: "Catering order management is in build on top of House Accounts. Not part of this release: large and event order management, off-premise and delivery scheduling, quotes and proposals, and e-signature contracts.",
        bullets: [
            'Large and event order management',
            'Off-premise and delivery scheduling',
            'Quotes and proposals',
            'E-signature contracts',
        ],
        icon: '🗺️',
        flip: true,
    },
];

export const CateringFeatures: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Account-based billing for your best customers</h2>
                    <p className={styles.sectionLead}>
                        House Accounts brings account billing into the same system you run every day — corporate and catering customers run a charge account, you track what they owe, and you settle on an invoice cycle instead of collecting at every order.
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
                                    <span className={styles.previewLabel}>{f.eyebrow.split('—')[0].trim()} preview</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
