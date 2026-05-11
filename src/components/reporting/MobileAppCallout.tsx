import React from 'react';
import styles from './MobileAppCallout.module.css';

/**
 * Dashboard mobile-app callout.
 * App Store / Play Store deep links are placeholder paths until Johnnie nods on
 * surfacing the live URLs (KB-46 spec note 2026-05-01). Android already
 * published; iOS TestFlight in progress on Cal's lane (ios-build-kit memory).
 * Swap href values when both stores are public-listing ready.
 */
export const MobileAppCallout: React.FC = () => {
    return (
        <section id="mobile" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.lead}>
                    <div className={styles.eyebrow}>Empower Dashboard — Mobile</div>
                    <h2 className={styles.headline}>
                        The same reporting, in your pocket — <span className="text-gradient">on iOS and Android.</span>
                    </h2>
                    <p className={styles.body}>
                        For the operators who never sit at a desk: live sales, labor, item mix, hourly trends, voids, and discounts on a phone-native view. Same Genius POS data as the web dashboard — formatted for a thumb instead of a mouse.
                    </p>

                    <div className={styles.storeBadges}>
                        {/* TODO(KB-46): swap href to live App Store listing once iOS submission lands */}
                        <a href="#" className={styles.storeBadge} aria-label="Download Empower Dashboard on the App Store">
                            <span className={styles.storeIcon} aria-hidden="true"></span>
                            <span className={styles.storeText}>
                                <span className={styles.storePre}>Download on the</span>
                                <span className={styles.storeName}>App Store</span>
                            </span>
                        </a>
                        {/* TODO(KB-46): swap href to live Play Store listing once Johnnie confirms surfacing */}
                        <a href="#" className={styles.storeBadge} aria-label="Get Empower Dashboard on Google Play">
                            <span className={styles.storeIcon} aria-hidden="true">▶</span>
                            <span className={styles.storeText}>
                                <span className={styles.storePre}>Get it on</span>
                                <span className={styles.storeName}>Google Play</span>
                            </span>
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* TODO(KB-43 asset call): replace with real device-frame screenshot of the iOS + Android dashboard */}
                    <div className={styles.phoneFrame}>
                        <div className={styles.phoneScreen}>
                            <div className={styles.phoneRow}>
                                <span className={styles.phoneLabel}>Today's Sales</span>
                                <span className={styles.phoneValue}>$9,612</span>
                            </div>
                            <div className={styles.phoneRow}>
                                <span className={styles.phoneLabel}>Covers</span>
                                <span className={styles.phoneValue}>532</span>
                            </div>
                            <div className={styles.phoneRow}>
                                <span className={styles.phoneLabel}>Labor %</span>
                                <span className={styles.phoneValue}>26.4%</span>
                            </div>
                            <div className={styles.phoneRowMuted}>
                                <span>Live · Genius POS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
