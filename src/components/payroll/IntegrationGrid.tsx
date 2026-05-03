import React from 'react';
import styles from './IntegrationGrid.module.css';

interface Integration {
    id: string;
    name: string;
    blurb?: string;
    confirmed: boolean;
}

/**
 * Confirmed integrations are the formatters that actually ship in EmpowerFull
 * today (ADP / Asure / Paylocity / Valiant) plus the Homebase partnership
 * (KB-bridge work, Cal lane). The remaining tiles are placeholder slots — the
 * KB-47 spec calls for ~15+ partners but the verified named list still needs
 * Johnnie / dealer-team confirmation before production cutover. See PR
 * description for the open list-verification thread.
 */
const integrations: Integration[] = [
    { id: 'adp', name: 'ADP', blurb: 'Native export', confirmed: true },
    { id: 'paylocity', name: 'Paylocity', blurb: 'Native export', confirmed: true },
    { id: 'asure', name: 'Asure', blurb: 'Native export', confirmed: true },
    { id: 'valiant', name: 'Valiant', blurb: 'Native export', confirmed: true },
    { id: 'homebase', name: 'Homebase', blurb: 'Live punch sync — NEW', confirmed: true },
    { id: 'heartland-payroll', name: 'Heartland Payroll', blurb: 'In-family sync', confirmed: true },
    { id: 'p7', name: '+ More providers', blurb: 'Talk to your dealer', confirmed: false },
    { id: 'p8', name: '+ Custom CSV', blurb: 'Most providers accept', confirmed: false },
];

export const IntegrationGrid: React.FC = () => {
    return (
        <section id="integrations" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionEyebrow}>Payroll Integrations</div>
                    <h2 className={styles.sectionTitle}>Sync to the payroll provider you already use</h2>
                    <p className={styles.sectionLead}>
                        Empower Payroll formats Genius POS punches into the exact format your provider expects — ADP CSV, Paylocity batch, Asure import, Valiant feed, and more. New: live punch-level sync with Homebase. Don't see yours? We can almost always wire up a custom export.
                    </p>
                </div>

                <div className={styles.grid}>
                    {integrations.map((p) => (
                        <div
                            key={p.id}
                            className={`${styles.tile} ${p.confirmed ? styles.confirmed : styles.placeholder}`}
                        >
                            {/* TODO(KB-43 asset call): replace tile name with licensed partner logo */}
                            <div className={styles.tileName}>{p.name}</div>
                            {p.blurb && <div className={styles.tileBlurb}>{p.blurb}</div>}
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    Don't see your provider above? We support most payroll systems via custom CSV export — ask your dealer for the full list.
                </div>
            </div>
        </section>
    );
};
