import React from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <a href="/" className={styles.logoContainer}>
                    <img src="/assets/empower_logo_white.png" alt="Empower POS" className={styles.logo} />
                    <span>Empower POS Solutions</span>
                </a>

                <nav className={styles.menu}>
                    <a href="#solutions" className={styles.link}>Solutions</a>
                    <a href="#pricing" className={styles.link}>Pricing</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </nav>

                <div className={styles.actions}>
                    <a href="https://v2.empowerpos.com/login" className={styles.link} style={{ marginRight: '1.5rem' }}>Log In</a>
                    <a href="#contact" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </header>
    );
};
