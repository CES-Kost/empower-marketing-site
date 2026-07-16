import React from 'react';
import styles from './CateringHero.module.css';

export const CateringHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>🧾</span> Empower House Accounts
                    </div>
                    <h1 className={styles.headline}>
                        House accounts, <span className="text-gradient">handled in the POS.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Account-based billing and invoicing for your corporate and catering customers. Run a charge account, track what they owe, and settle on an invoice cycle instead of collecting at every order.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#features" className="btn btn-secondary">See What's Included</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real composite of account ledger + invoice + CRM sync screenshots */}
                    <div className={styles.acctStack}>
                        <div className={`${styles.acctCard} ${styles.a1}`}>
                            <div className={styles.cardLabel}>House Account</div>
                            <div className={styles.cardSub}>corporate · catering</div>
                        </div>
                        <div className={`${styles.acctCard} ${styles.a2}`}>
                            <div className={styles.cardLabel}>Invoice</div>
                            <div className={styles.cardSub}>net-30 · scheduled</div>
                        </div>
                        <div className={`${styles.acctCard} ${styles.a3}`}>
                            <div className={styles.cardLabel}>CRM Sync</div>
                            <div className={styles.cardSub}>customer records</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
