import React from 'react';
import styles from './MenuTestimonial.module.css';

/**
 * Testimonial slot for Menu page.
 * Gated on Johnnie's customer-pick (KB-43, ts 1777560534). Capriccio is locked
 * for the home Testimonials block; the Menu page wants a Menu-specific quote
 * — wine list, signage, or QR-driven operator. Copy below is placeholder
 * structure only; replace with a real customer quote before production cutover.
 */
export const MenuTestimonial: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.quoteMark} aria-hidden="true">"</div>
                <blockquote className={styles.quote}>
                    [Customer testimonial pending — Johnnie pick]
                </blockquote>
                <div className={styles.attribution}>
                    <div className={styles.author}>Restaurant Operator</div>
                    <div className={styles.context}>Empower Menu customer</div>
                </div>
            </div>
        </section>
    );
};
