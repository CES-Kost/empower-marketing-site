import React from 'react';
import styles from './ReportingHero.module.css';

export const ReportingHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>📊</span> Empower Insight
                    </div>
                    <h1 className={styles.headline}>
                        Reporting that runs your restaurant — <span className="text-gradient">not the other way around.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        A web dashboard, a custom report builder, scheduled emails, audit trails, and enterprise consolidated views — all driven by the same Genius POS data your kitchen and your back office already trust. Plus a Dashboard mobile app for the operators who never sit at a desk.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#features" className="btn btn-secondary">See the Reports</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real composite of dashboard + scheduled-email + mobile screenshots */}
                    <div className={styles.reportStack}>
                        <div className={`${styles.reportCard} ${styles.r1}`}>
                            <div className={styles.cardLabel}>Dashboard</div>
                            <div className={styles.cardSub}>web · live KPIs</div>
                        </div>
                        <div className={`${styles.reportCard} ${styles.r2}`}>
                            <div className={styles.cardLabel}>Scheduled Email</div>
                            <div className={styles.cardSub}>daily · weekly · monthly</div>
                        </div>
                        <div className={`${styles.reportCard} ${styles.r3}`}>
                            <div className={styles.cardLabel}>Mobile App</div>
                            <div className={styles.cardSub}>iOS · Android</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
