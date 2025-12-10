import React from 'react';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Trusted by top restaurants</h2>
                    <p style={{ color: 'var(--text-muted)' }}>See why 5,000+ locations switched to Empower POS.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.quote}>"Since switching to Empower POS, our table turnover has increased by 30%. The handhelds make everything so much faster for the staff."</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>JD</div>
                            <div className={styles.info}>
                                <h4>John Doe</h4>
                                <span>Owner, The Burger Joint</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.quote}>"The inventory management is a lifesaver. I used to spend hours on spreadsheets, now it's all automated. Highly recommend!"</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>SM</div>
                            <div className={styles.info}>
                                <h4>Sarah Miller</h4>
                                <span>Manager, Café Delight</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.stars}>★★★★★</div>
                        <p className={styles.quote}>"Support is incredible. Whenever we have a question, they answer the phone immediately. No robots, just real people."</p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>MK</div>
                            <div className={styles.info}>
                                <h4>Mike Kowalski</h4>
                                <span>Director, Nightlife Group</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
