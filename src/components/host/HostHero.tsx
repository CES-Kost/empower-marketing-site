import React from 'react';
import styles from './HostHero.module.css';

export const HostHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>🛎️</span> Empower Host
                    </div>
                    <h1 className={styles.headline}>
                        Never lose a guest <span className="text-gradient">at the door.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Waitlist, reservations with two-way SMS, and an AI hostess that takes calls and DMs from your website — all wired directly into your Genius POS so the host stand and the kitchen stay in sync.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#features" className="btn btn-secondary">See Host in Action</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real composite of waitlist + SMS + AI-hostess screenshots */}
                    <div className={styles.hostStack}>
                        <div className={`${styles.hostCard} ${styles.h1}`}>
                            <div className={styles.cardLabel}>Waitlist</div>
                            <div className={styles.cardSub}>4 parties · 22 min wait</div>
                        </div>
                        <div className={`${styles.hostCard} ${styles.h2}`}>
                            <div className={styles.cardLabel}>SMS</div>
                            <div className={styles.cardSub}>"Your table is ready"</div>
                        </div>
                        <div className={`${styles.hostCard} ${styles.h3}`}>
                            <div className={styles.cardLabel}>AI Hostess</div>
                            <div className={styles.cardSub}>web · phone · 24/7</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
