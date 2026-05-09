import React from 'react';
import styles from './PosIntegrationCallout.module.css';

const flowSteps = [
    { label: 'Update item in POS', desc: 'Price change, 86, new photo, or daypart edit' },
    { label: 'Empower picks it up', desc: 'Live sync, no nightly job, no manual export' },
    { label: 'Every surface follows', desc: 'QR, tablet, signage, inventory — same minute' },
];

export const PosIntegrationCallout: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.lead}>
                    <div className={styles.eyebrow}>Genius POS — Native Integration</div>
                    <h2 className={styles.headline}>
                        Menu changes flow live from your POS — <span className="text-gradient">no manual sync.</span>
                    </h2>
                    <p className={styles.body}>
                        Empower Menu reads from the same item, modifier, and price tables your kitchen prints from. There's no second menu to maintain, no nightly export, no "did the QR get updated?" Slack message at 11pm. The POS is the source of truth; every surface is a view of it.
                    </p>
                </div>

                <ol className={styles.flow}>
                    {flowSteps.map((s, i) => (
                        <li key={s.label} className={styles.step}>
                            <div className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                            <div className={styles.stepBody}>
                                <div className={styles.stepLabel}>{s.label}</div>
                                <div className={styles.stepDesc}>{s.desc}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};
