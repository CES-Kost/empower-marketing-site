import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link to="/" className={styles.logoContainer}>
                    <img src="/assets/empower_logo_white.png" alt="Empower POS" className={styles.logo} />
                    <span>Empower POS Solutions</span>
                </Link>

                <nav className={styles.menu}>
                    <a href="/#solutions" className={styles.link}>Solutions</a>
                    <Link to="/menu" className={styles.link}>Menu</Link>
                    <Link to="/payroll" className={styles.link}>Payroll</Link>
                    <Link to="/reporting" className={styles.link}>Reporting</Link>
                    <Link to="/host" className={styles.link}>Host</Link>
                    <Link to="/tools" className={styles.link}>Tools</Link>
                    <a href="/#contact" className={styles.link}>Contact</a>
                </nav>

                <div className={styles.actions}>
                    <a href="https://v2.empowerpos.com/login" className={styles.link} style={{ marginRight: '1.5rem' }}>Log In</a>
                    <a href="/#contact" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </header>
    );
};
