import React from 'react';
import styles from './HostFeatures.module.css';

interface Feature {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: string;
    flip?: boolean;
}

const features: Feature[] = [
    {
        id: 'waitlist',
        eyebrow: 'Waitlist',
        title: 'A waitlist your hosts actually want to use',
        desc: 'Quote a wait, send a text, seat the party — without a clipboard, without a third-party tablet, without losing the table to someone who walked. Designed by operators who watched their host stand at 7pm on a Saturday.',
        bullets: [
            'Quote-to-seat in three taps',
            'Live wait-time recommendations from your seating velocity',
            'Auto-text "your table is ready" with one tap',
            'Walk-out tracking so you can see what you actually lost',
        ],
        icon: '📋',
    },
    {
        id: 'reservations',
        eyebrow: 'Reservations + 2-Way SMS',
        title: 'Reservations with the texting layer your guests already use',
        desc: 'Book online, confirm by text, no-show by text, run-late by text — Empower Host treats SMS as a first-class reservation channel, not an afterthought. Guests reply with one finger; the host stand sees the conversation in real time.',
        bullets: [
            'Web-embed booking widget for your site (no third-party redirect)',
            'Two-way SMS confirmations + reminders + run-late notes',
            'No-show flagging tied to guest history',
            'Deposit and pre-pay support for prix-fixe and special events',
        ],
        icon: '💬',
        flip: true,
    },
    {
        id: 'ai-hostess',
        eyebrow: 'AI Hostess',
        title: 'A 24/7 hostess that takes calls and DMs from your website',
        desc: 'Voice and chat agent trained on your menu, your hours, your reservation rules, and your policies — so the phone keeps getting answered when the host is on the floor and the website chat keeps converting at 11pm. Every booking lands on the same waitlist your team is already running.',
        bullets: [
            'Inbound voice agent — answers your number, books reservations',
            'Web chat embed for your restaurant\'s site',
            'Menu, hours, allergens, and policy answers from your real data',
            'Handoff to a human when the AI hits a question it shouldn\'t answer',
        ],
        icon: '🤖',
    },
    {
        id: 'guest-history',
        eyebrow: 'Guest History',
        title: 'Know your regulars before they walk in',
        desc: 'Every reservation, walk-in, and SMS thread rolls up into a guest profile your hosts can read in two seconds — last visit, favorite table, allergies, no-show count, and notes from the team. Built for the rooms where service depth is the product.',
        bullets: [
            'One profile per guest across reservations, waitlist, and SMS',
            'Hostess-readable notes (allergies, preferences, VIP flags)',
            'Visit count + last-seen tied to your POS check history',
            'No-show and cancellation pattern tracking',
        ],
        icon: '⭐',
        flip: true,
    },
];

export const HostFeatures: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Front-of-house, built for the host stand</h2>
                    <p className={styles.sectionLead}>
                        Most host platforms were built as bolt-ons to a generic POS. Empower Host was built next to a Genius POS — by people who know the difference between a slow Tuesday and a 200-cover Saturday — and it shows in every flow.
                    </p>
                </div>

                <div className={styles.featureList}>
                    {features.map((f) => (
                        <article
                            key={f.id}
                            id={f.id}
                            className={`${styles.feature} ${f.flip ? styles.flip : ''}`}
                        >
                            <div className={styles.featureText}>
                                <div className={styles.eyebrow}>
                                    <span className={styles.icon}>{f.icon}</span>
                                    <span>{f.eyebrow}</span>
                                </div>
                                <h3 className={styles.title}>{f.title}</h3>
                                <p className={styles.desc}>{f.desc}</p>
                                <ul className={styles.bullets}>
                                    {f.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.featureVisual}>
                                {/* TODO(KB-43 asset call): real screenshot for {f.id} */}
                                <div className={styles.preview} data-feature={f.id}>
                                    <span className={styles.previewIcon}>{f.icon}</span>
                                    <span className={styles.previewLabel}>{f.eyebrow} preview</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
