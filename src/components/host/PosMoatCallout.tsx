import React from 'react';
import styles from './PosMoatCallout.module.css';

const flowSteps = [
    { label: 'Reservation books on Host', desc: 'Web embed, AI hostess, or SMS — all land in the same queue' },
    { label: 'POS sees the cover before it sits', desc: 'Genius POS knows the party size, table, and special notes the moment they\'re booked' },
    { label: 'Server gets the context that matters', desc: 'Allergies, VIPs, last-visit notes — already on the ticket when the seat is taken' },
];

export const PosMoatCallout: React.FC = () => {
    return (
        <section id="pos-integration" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.lead}>
                    <div className={styles.eyebrow}>Genius POS — Native Integration</div>
                    <h2 className={styles.headline}>
                        The only host platform that talks <span className="text-gradient">directly to your Genius POS.</span>
                    </h2>
                    <p className={styles.body}>
                        Other host platforms hand the kitchen a dropped-off PDF and call it integration. Empower Host writes the reservation, the cover count, and the guest notes straight into the POS — so the kitchen, the server, and the manager all see the same picture as the host stand. No re-keying, no fragile bridge, no third-party invoice.
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
