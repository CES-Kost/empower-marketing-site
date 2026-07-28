import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from './NotFound.module.css';

// KB-229: replaces the old wildcard `<Navigate to="/" replace />` bounce.
// noindex is set client-side (not baked into a static file, unlike the six
// real routes) because this component renders for every unmatched path —
// there is no per-path static file to bake it into. Removed on unmount so
// an in-app nav away from a bad URL doesn't leave the tag on real pages.
export const NotFound: React.FC = () => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = 'Page Not Found | Empower POS Solutions';

        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex';
        document.head.appendChild(meta);

        return () => {
            document.title = prevTitle;
            document.head.removeChild(meta);
        };
    }, []);

    return (
        <div className="page page-not-found">
            <Header />
            <section className={styles.hero}>
                <div className={styles.inner}>
                    <p className={styles.eyebrow}>404</p>
                    <h1 className={styles.headline}>Page not found</h1>
                    <p className={styles.subheadline}>
                        The page you're looking for doesn't exist or has moved.
                    </p>
                    <Link to="/" className={styles.homeLink}>Back to home</Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};
