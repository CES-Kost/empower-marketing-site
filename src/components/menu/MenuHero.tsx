import React from 'react';
import styles from './MenuHero.module.css';

export const MenuHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>🍽️</span> Empower Menu
                    </div>
                    <h1 className={styles.headline}>
                        One menu. <span className="text-gradient">Every surface.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        QR menus, tablet menus, digital signage, and live inventory tracking — all driven by your Genius POS. Update an item once and every screen, sign, and tablet follows in seconds.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#surfaces" className="btn btn-secondary">See the Surfaces</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real composite of QR + tablet + signage screenshots */}
                    <div className={styles.surfaceStack}>
                        <div className={`${styles.surfaceCard} ${styles.s1}`}>
                            <div className={styles.cardLabel}>QR Menu</div>
                        </div>
                        <div className={`${styles.surfaceCard} ${styles.s2}`}>
                            <div className={styles.cardLabel}>Tablet</div>
                        </div>
                        <div className={`${styles.surfaceCard} ${styles.s3}`}>
                            <div className={styles.cardLabel}>Signage</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
