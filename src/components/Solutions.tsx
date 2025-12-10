import React from 'react';
import styles from './Solutions.module.css';

const solutions = [
    {
        title: "Dashboard & Reports",
        desc: "Real-time sales data, labor costs, and profit margins at a glance. Make smarter decisions from anywhere.",
        icon: "📊"
    },
    {
        title: "Payroll & Accounting",
        desc: "Seamless integration with QuickBooks and automated payroll processing. Save hours of manual work every week.",
        icon: "💼"
    },
    {
        title: "Reservations & Waitlist",
        desc: "Manage table turnover and wait times efficiently. Keep hosts organized and guests happy.",
        icon: "📅"
    },
    {
        title: "Inventory Management",
        desc: "Track ingredients down to the ounce. Auto-reorder alerts and food cost analysis.",
        icon: "📦"
    },
    {
        title: "Online Ordering",
        desc: "Commission-free ordering integrated directly into your POS. Take control of your delivery margins.",
        icon: "🛍️"
    },
    {
        title: "Employee Scheduling",
        desc: "Smart scheduling tools that help you optimize labor costs and reduce overtime.",
        icon: "👥"
    }
];

export const Solutions: React.FC = () => {
    return (
        <section id="solutions" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.headline}>Everything you need to run your restaurant</h2>
                    <p className={styles.subheadline}>A unified platform that replaces multiple fragmented tools.</p>
                </div>

                <div className={styles.grid}>
                    {solutions.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                            <a href="#" className={styles.link}>Learn more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
