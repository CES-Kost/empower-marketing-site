import React from 'react';
import styles from './HostTestimonial.module.css';

/**
 * Testimonial slot for Host page.
 * Johnnie's pick (KB-43 testimonial slate, 2026-05-07): Tim Cliett. Quote copy
 * is placeholder structure — Johnnie unblocked placeholder slates 2026-05-08
 * (Kain mesh) and will swap a real quote in once the page is viewable.
 */
export const HostTestimonial: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.quoteMark} aria-hidden="true">"</div>
                <blockquote className={styles.quote}>
                    [Customer testimonial pending — Tim Cliett pick, swap real quote when ready]
                </blockquote>
                <div className={styles.attribution}>
                    <div className={styles.author}>Restaurant Operator</div>
                    <div className={styles.context}>Empower Host customer</div>
                </div>
            </div>
        </section>
    );
};
