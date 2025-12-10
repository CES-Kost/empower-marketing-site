import React, { useState } from 'react';
import styles from './Industries.module.css';

const industries = [
    {
        id: 'retail',
        name: 'Retail',
        title: 'Modern Retail POS',
        desc: 'Keep your inventory in sync across in-store and online channels. Powerful reporting helps you spot trends instantly.',
        features: ['Real-time Inventory', 'E-commerce Integration', 'Customer Loyalty', 'Multi-Store Management'],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
    },
    {
        id: 'restaurant',
        name: 'Restaurants & Food',
        title: 'Full-Service Dining',
        desc: 'From table management to kitchen display systems, streamline your entire operation for faster turnover and happier guests.',
        features: ['Table Management', 'Kitchen Display System', 'Tableside Ordering', 'Menu Management'],
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80'
    },
    {
        id: 'bar',
        name: 'Bars & Nightlife',
        title: 'High-Volume Bars',
        desc: 'Keep the drinks flowing with fast tab management and quick-service features designed for busy nights.',
        features: ['Quick Tab Pre-Authorization', 'Happy Hour Automation', 'Drink Recipe Lookup', 'Spill Tracking'],
        image: 'https://images.unsplash.com/photo-1572116469696-958721b7d6ca?auto=format&fit=crop&q=80'
    },
    {
        id: 'salon',
        name: 'Salons & Spas',
        title: 'Appointment Based',
        desc: 'Manage appointments, staff schedules, and client preferences all in one beautiful interface.',
        features: ['Online Booking', 'Staff Scheduling', 'Client Profiles', 'Service Packages'],
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80'
    }
];

export const Industries: React.FC = () => {
    const [activeTab, setActiveTab] = useState(industries[1].id); // Default to Restaurant

    const activeContent = industries.find(i => i.id === activeTab) || industries[0];

    return (
        <section id="industries" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-on-light)' }}>
                        Powering every type of business
                    </h2>
                    <p style={{ color: 'var(--text-muted-on-light)' }}>Tailored workflows for your specific industry.</p>
                </div>

                <div className={styles.tabs}>
                    {industries.map(industry => (
                        <button
                            key={industry.id}
                            className={`${styles.tab} ${activeTab === industry.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(industry.id)}
                        >
                            {industry.name}
                        </button>
                    ))}
                </div>

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h3>{activeContent.title}</h3>
                        <p>{activeContent.desc}</p>
                        <ul className={styles.features}>
                            {activeContent.features.map((feature, idx) => (
                                <li key={idx} className={styles.feature}>
                                    <span className={styles.check}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Learn More</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={activeContent.image} alt={activeContent.title} className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
};
