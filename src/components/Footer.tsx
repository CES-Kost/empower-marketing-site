import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <div className={styles.logoHeading}>
                        <img src="/assets/empower_logo_white.png" alt="Empower POS" className={styles.logo} />
                        <span>Empower POS Solutions</span>
                    </div>
                    <p className={styles.desc}>
                        The all-in-one platform for modern restaurant management. Cut costs, serve more guests, and grow your business.
                    </p>
                </div>

                <div className={styles.col}>
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Point of Sale</a></li>
                        <li><a href="#">Kitchen Display</a></li>
                        <li><a href="#">Online Ordering</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Hardware</a></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">System Status</a></li>
                        <li><a href="#">API Documentation</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>&copy; {new Date().getFullYear()} Empower POS Solutions. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
