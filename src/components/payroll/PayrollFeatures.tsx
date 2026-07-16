import React from 'react';
import styles from './PayrollFeatures.module.css';

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
 * Feature blocks for the Payroll page.
 *
 * Tip-pool reopen/regenerate capability is confirmed real and deployed to
 * prod (2026-06-24) but admin-gated only, not yet rolled out to customers
 * (KB-7, Cal's lane) — framed "launching soon" per Reese's content-doc
 * directive, not present-tense. Do not flip to present-tense until KB-7 GA.
 */
const features: Feature[] = [
    {
        id: 'homebase',
        eyebrow: 'Homebase Partnership — NEW',
        title: 'Live punch sync with Homebase scheduling',
        desc: 'Schedules, time-off, and shift swaps live in Homebase; punches and tips live in your POS. Empower closes the loop — every clock-in and clock-out hits Homebase the moment it happens, and the schedule lines up with the punch automatically.',
        bullets: [
            'Bi-directional punch sync — POS → Homebase → payroll',
            'Tip allocation rides the same sync',
            'Schedule variance reporting (was-scheduled vs actually-worked)',
            'Shift-swap and time-off requests reconcile against punches',
        ],
        icon: '🔗',
    },
    {
        id: 'social',
        eyebrow: 'Social Schedules',
        title: 'Build and publish schedules without leaving Empower',
        desc: 'Drag-and-drop weekly scheduling tied to your roles, your wage rates, and your sales forecast. Staff get the schedule on their phones; managers get cost-of-labor projections before they post.',
        bullets: [
            'Role-aware drag-and-drop schedule builder',
            'Forecasted-vs-budgeted labor cost as you build',
            'Mobile schedule publishing — no third-party app required',
            'Time-off and availability handling',
        ],
        icon: '📅',
        flip: true,
    },
    {
        id: 'tip-pool',
        eyebrow: 'Tip Pool Calculator — Bundled',
        title: 'Tip pooling that matches what your back office actually does',
        desc: 'Gross or net of credit-card fees, role-weighted shares, hourly-driven splits — Empower\'s tip-pool engine handles the real-world distribution rules your operators run, then folds the result into the same payroll export as everything else. Launching soon: fix a bad clock-in or a mis-keyed tip without starting over in a spreadsheet — reopen the closed day, fix it, regenerate the split.',
        bullets: [
            'Gross or net-of-CC basis (default: net-of-CC)',
            'Role-weighted shares (server / busser / bar / runner)',
            'Hourly × hours-worked × share weighting',
            'Reopen-and-regenerate for clock-in/tip corrections — launching soon',
            'Preset library + per-config overrides',
            'Built into Empower Payroll — not a paid add-on',
        ],
        icon: '🧮',
    },
];

export const PayrollFeatures: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Beyond the export — what you get with Empower Payroll</h2>
                    <p className={styles.sectionLead}>
                        Most payroll exports stop at "here's a CSV." Empower keeps going: live scheduling integration, the tip-pool calculator your back office wishes it had, and the reporting layer underneath all of it.
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
