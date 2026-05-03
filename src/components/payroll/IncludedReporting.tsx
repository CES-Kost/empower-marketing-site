import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IncludedReporting.module.css';

/**
 * "Includes Empower Insight reporting" value bullet.
 * Per KB-47 spec: NO $-amount on this page (pricing lives in dealer materials
 * only, Johnnie 2026-04-30). Just the inclusion fact.
 */
export const IncludedReporting: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.eyebrow}>Bundled in Payroll</div>
                <h2 className={styles.headline}>
                    Empower Insight reporting — <span className="text-gradient">included.</span>
                </h2>
                <p className={styles.body}>
                    Every Payroll customer gets the full Empower Insight reporting suite at no extra cost — daily summaries, labor reports, sales mix, daypart breakdowns, and the whole library. Same login, same dashboard, no separate invoice.
                </p>
                <Link to="/reporting" className="btn btn-secondary">See what Insight covers</Link>
            </div>
        </section>
    );
};
