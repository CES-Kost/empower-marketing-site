import React from 'react';
import styles from './ToolsHero.module.css';

export const ToolsHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                    <div className={styles.badge}>
                        <span>🧰</span> Empower Tools
                    </div>
                    <h1 className={styles.headline}>
                        Restaurant tools that <span className="text-gradient">pay for themselves.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Standalone utilities that solve specific operator pain — independent of (but compatible with) the rest of Empower. New tools land here as they ship.
                    </p>
                    <div className={styles.buttons}>
                        <a href="/#contact" className="btn btn-primary">Talk to a Dealer</a>
                        <a href="#tools" className="btn btn-secondary">Browse the Tools</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
