import React, { FormEvent } from 'react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Thanks for your interest! We will be in touch shortly.');
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.glow} />

            <div className={`container ${styles.container}`}>
                <div className={styles.textCol}>
                    <h2 className={styles.headline}>Ready to upgrade your restaurant?</h2>
                    <p className={styles.subheadline}>
                        Join thousands of restaurants running smarter, faster, and more profitably with Empower POS.
                    </p>

                    <div className={styles.benefits}>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Free personalized demo</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Custom hardware quote</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Migration assistance</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>24/7 US-based support</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input type="text" className={styles.input} placeholder="John" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input type="text" className={styles.input} placeholder="Doe" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Business Type</label>
                            <select className={styles.select}>
                                <option>Full Service Restaurant</option>
                                <option>Quick Service / Fast Casual</option>
                                <option>Bar / Nightclub</option>
                                <option>Retail Store</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} placeholder="john@restaurant.com" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input type="tel" className={styles.input} placeholder="(555) 123-4567" />
                        </div>

                        <button type="submit" className={styles.submitBtn}>Get Your Free Quote</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
