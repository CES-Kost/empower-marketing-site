import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Solutions.module.css';

/**
 * Reconciled against Reese's KB-43 home draft ("Everything you need to keep
 * business moving") — the old six cards named generic template features
 * (Online Ordering, Inventory Management, Employee Scheduling as standalone
 * products) that don't map to Empower's actual shipped product line. Replaced
 * with the real five-going-on-six products, each linking to its own page.
 */
const solutions = [
    {
        title: "Empower Host",
        desc: "See open tables at a glance, seat the right party fast, and keep the waitlist moving.",
        icon: "🛎️",
        href: "/host",
    },
    {
        title: "Empower Menu Displays",
        desc: "Bright, clear displays make your specials pop and help guests decide faster, so servers spend less time answering questions and more time on the floor.",
        icon: "🍽️",
        href: "/menu",
    },
    {
        title: "Empower Payroll",
        desc: "Punches, tips, and breaks flow straight into the payroll provider you already use, with a tip-pool calculator built in — not bolted on.",
        icon: "💸",
        href: "/payroll",
    },
    {
        title: "Empower Insight",
        desc: "A live dashboard, a custom report builder, and scheduled reports that land in your inbox, all reading from the same POS data your kitchen trusts.",
        icon: "📊",
        href: "/reporting",
    },
    {
        title: "Built to Stay Up",
        desc: "The internet drops, you don't. Orders keep flowing during an outage and sync automatically the moment you reconnect.",
        icon: "☁️",
        href: "/host",
    }
];

export const Solutions: React.FC = () => {
    return (
        <section id="solutions" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.headline}>Everything you need to keep business moving</h2>
                    <p className={styles.subheadline}>One login, one system reading from the same data — not five tools that don't talk to each other.</p>
                </div>

                <div className={styles.grid}>
                    {solutions.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                            <Link to={item.href} className={styles.link}>Learn more →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
