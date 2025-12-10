import React from 'react';
import styles from './Features.module.css';

export const Features: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.imageCol}>
                    <img
                        src="/assets/feature-screen-1.png"
                        alt="Empower POS Reports"
                        className={styles.mainImage}
                    />
                    <div className={styles.floatingCard}>
                        <div className={styles.stat}>30%</div>
                        <div className={styles.statLabel}>Avg. increase in table turnover speed</div>
                    </div>
                </div>

                <div className={styles.contentCol}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>Built for speed using the latest tech.</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        We don't use legacy code. Empower POS is built on a modern cloud architecture that ensures 99.99% uptime and instant sync across all your devices.
                    </p>

                    <div className={styles.featureList}>
                        <div className={styles.feature}>
                            <div className={styles.icon}>🚀</div>
                            <div>
                                <h3 className={styles.featureTitle}>Unified System</h3>
                                <p className={styles.featureDesc}>POS, KDS, and Back Office are one single platform. No syncing issues, ever.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.icon}>🔌</div>
                            <div>
                                <h3 className={styles.featureTitle}>Seamless Integrations</h3>
                                <p className={styles.featureDesc}>Connects natively with QuickBooks, DoorDash, UberEats, and 7shifts.</p>
                            </div>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.icon}>☁️</div>
                            <div>
                                <h3 className={styles.featureTitle}>Offline Mode</h3>
                                <p className={styles.featureDesc}>Internet down? No problem. Keep taking orders and processing payments seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
