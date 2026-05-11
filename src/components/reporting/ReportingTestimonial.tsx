import React from 'react';
import styles from './ReportingTestimonial.module.css';

/**
 * Testimonial slot for Reporting page.
 * Johnnie's pick (KB-43 testimonial slate, 2026-05-07): Alex Urgin. Quote copy
 * is placeholder structure — Johnnie unblocked placeholder slates 2026-05-08
 * (Kain mesh) and will swap a real quote in once the page is viewable.
 */
export const ReportingTestimonial: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.quoteMark} aria-hidden="true">"</div>
                <blockquote className={styles.quote}>
                    [Customer testimonial pending — Alex Urgin pick, swap real quote when ready]
                </blockquote>
                <div className={styles.attribution}>
                    <div className={styles.author}>Restaurant Operator</div>
                    <div className={styles.context}>Empower Insight customer</div>
                </div>
            </div>
        </section>
    );
};
