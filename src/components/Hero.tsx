import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                    alt="Restaurant Background"
                    className={styles.bgImage}
                />
                <div className={styles.overlay} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>🇺🇸</span> Serving restaurants across the US
                    </div>
                    <h1 className={styles.headline}>
                        Move more. <span className="text-gradient">Make more.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        The all-in-one platform that brings your whole operation together, so service flows, your team stays in step, and you stay in control.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="/#contact" className="btn btn-secondary">Watch Demo</a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.tablet}>
                        <div className={styles.screen}>
                            <img src="/assets/tablet-screen-main.png" alt="Empower POS Interface" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
