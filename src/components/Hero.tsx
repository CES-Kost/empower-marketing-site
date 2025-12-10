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
                        Cut costs, eliminate manual work, and <span className="text-gradient">grow with real-time insights.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        The all-in-one POS platform designed for speed, efficiency, and scalability. From fine dining to fast workflows.
                    </p>
                    <div className={styles.buttons}>
                        <button className="btn btn-primary">Contact Sales</button>
                        <button className="btn btn-secondary">Watch Demo</button>
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
