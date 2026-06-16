import React from 'react';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Trusted by top restaurants</h2>
                    {/* KB-121: fabricated "5,000+ locations" subtitle removed (claim-safety).
                        Real proof point drops in here once sourced — do not re-add invented numbers. */}
                </div>

                <div className={styles.grid}>
                    {/* KB-121: placeholder testimonials (John Doe / Sarah Miller / Mike Kowalski) removed as
                        fabricated proof. Real customer testimonials (Capriccio locked, others TBD per KB-43)
                        drop into this grid when sourced. Section scaffolding intentionally retained. */}
                </div>
            </div>
        </section>
    );
};
