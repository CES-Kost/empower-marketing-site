import React from 'react';
import styles from './PayrollTestimonial.module.css';

/**
 * Testimonial slot for Payroll page.
 * Gated on Johnnie's customer-pick (KB-43, ts 1777560534) — wants a payroll-
 * specific quote, ideally from an operator who replaced a separate payroll
 * tool. Copy below is placeholder structure only; replace with a real
 * customer quote before production cutover.
 */
export const PayrollTestimonial: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.quoteMark} aria-hidden="true">"</div>
                <blockquote className={styles.quote}>
                    [Customer testimonial pending — Johnnie pick, payroll-flavored]
                </blockquote>
                <div className={styles.attribution}>
                    <div className={styles.author}>Restaurant Operator</div>
                    <div className={styles.context}>Empower Payroll customer</div>
                </div>
            </div>
        </section>
    );
};
