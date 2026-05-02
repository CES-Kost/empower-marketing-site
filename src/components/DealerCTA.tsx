import React from 'react';
import styles from './DealerCTA.module.css';

interface DealerCTAProps {
    headline?: string;
    subheadline?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export const DealerCTA: React.FC<DealerCTAProps> = ({
    headline = 'Ready to put it in front of your guests?',
    subheadline = "Talk to a dealer about adding Empower Menu to your site. We'll walk through your surfaces, your POS setup, and the rollout timeline.",
    primaryLabel = 'Talk to a Dealer',
    primaryHref = '/#contact',
    secondaryLabel = 'Watch Demo',
    secondaryHref = '/#contact',
}) => {
    return (
        <section className={styles.cta}>
            <div className={`container ${styles.inner}`}>
                <h2 className={styles.headline}>{headline}</h2>
                <p className={styles.subheadline}>{subheadline}</p>
                <div className={styles.buttons}>
                    <a href={primaryHref} className="btn btn-primary">{primaryLabel}</a>
                    <a href={secondaryHref} className="btn btn-secondary">{secondaryLabel}</a>
                </div>
            </div>
        </section>
    );
};
