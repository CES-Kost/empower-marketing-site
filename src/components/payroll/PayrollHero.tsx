import React from 'react';
import styles from './PayrollHero.module.css';

export const PayrollHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>💸</span> Empower Payroll
                    </div>
                    <h1 className={styles.headline}>
                        Payroll, without the <span className="text-gradient">end-of-week headache.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Punches, tips, and breaks flow from your Genius POS straight into the payroll provider you already use — ADP, Asure, Paylocity, Valiant, Homebase, and more. No re-keying, no spreadsheets, no Friday-afternoon panic.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#integrations" className="btn btn-secondary">See the Integrations</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real screenshot composite of payroll dashboard + integration logos */}
                    <div className={styles.flowVisual}>
                        <div className={`${styles.flowCard} ${styles.cardPos}`}>
                            <div className={styles.cardLabel}>Genius POS</div>
                            <div className={styles.cardSub}>punches · tips · breaks</div>
                        </div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={`${styles.flowCard} ${styles.cardEmpower}`}>
                            <div className={styles.cardLabel}>Empower Payroll</div>
                            <div className={styles.cardSub}>format · review · export</div>
                        </div>
                        <div className={styles.flowArrow}>→</div>
                        <div className={`${styles.flowCard} ${styles.cardProvider}`}>
                            <div className={styles.cardLabel}>Your Provider</div>
                            <div className={styles.cardSub}>ADP / Paylocity / Asure …</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
