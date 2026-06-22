import React from 'react';
import styles from './SurfaceBlocks.module.css';

interface Surface {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    icon: string;
    flip?: boolean;
    image?: string;
}

const surfaces: Surface[] = [
    {
        id: 'qr',
        eyebrow: 'QR Menus',
        title: 'A scan-and-order menu, branded for your room',
        desc: 'Give every table a QR code that opens your live menu in any phone — no app, no install, no third-party logo. Photos, descriptions, allergens, and prices all flow from your POS.',
        bullets: [
            'Branded to your colors, logo, and font',
            'Photo-rich item cards with allergens and modifiers',
            'Multi-language toggle for tourist-heavy rooms',
            'One QR per table or one master code — your call',
        ],
        icon: '📱',
    },
    {
        id: 'tablet',
        eyebrow: 'Tablet Menus',
        title: 'Wine lists, beer lists, and showpiece menus on hardware that earns its keep',
        desc: 'A tablet-native menu experience for the surfaces that deserve more than a printed insert — wine programs, beer halls, dessert showcases, and prix-fixe rooms. Designed to be passed across the table.',
        bullets: [
            'Designed for landscape iPad / Android tablets',
            'Wine-list-grade depth: vintages, regions, tasting notes',
            'Pour-size and bottle-vs-glass pricing',
            'Live 86 sync from your POS — no more "we ran out of that"',
        ],
        icon: '🍷',
        flip: true,
    },
    {
        id: 'signage',
        eyebrow: 'Digital Menu Displays',
        title: 'Counter and drive-thru signage that updates itself',
        desc: 'Replace static printed boards with screens that auto-rotate by daypart, swap in promos by schedule, and update prices the moment your POS does. Built for QSR, fast-casual, and counter-service rooms.',
        bullets: [
            'Daypart scheduling (breakfast / lunch / dinner / late-night)',
            'Promo slides with images, GIFs, or short video',
            'Split-screen layouts for menu + featured items',
            'Per-screen layout — left counter ≠ drive-thru ≠ pickup wall',
        ],
        icon: '📺',
        image: '/assets/menu-signage-board.png',
    },
    {
        id: 'wine-beer',
        eyebrow: 'Wine & Beer Inventory Tracker',
        title: 'Cellar and tap-room inventory that lives on the same platform as your menu',
        desc: 'Stop running two systems. Wine and beer inventory ties directly to the menu — when a vintage runs out, the tablet menu and digital signage both reflect it the same minute. Built for the realities of beverage programs: bottles, cases, kegs, and pours.',
        bullets: [
            'Vintage-level wine tracking (region, varietal, vintage, cost)',
            'Keg-level beer tracking (style, brewery, ABV, remaining oz)',
            'Live "running low" alerts for managers',
            'Reconciliation reports that match POS pours to inventory draws',
        ],
        icon: '🍻',
        flip: true,
    },
    {
        id: 'stock',
        eyebrow: 'Stock Manager',
        title: 'Stockroom counts and 86 management for the rest of the menu',
        desc: 'Track ingredient counts, mid-shift 86s, and reorder points for the items that aren\'t wine or beer. The stock manager closes the loop: the moment a count hits zero, every menu surface updates and the kitchen stops getting tickets for it.',
        bullets: [
            'Item-level and ingredient-level inventory',
            'Manager-driven 86 button → live across all menu surfaces',
            'Reorder point alerts and weekly count sheets',
            'Variance reporting against POS sales',
        ],
        icon: '📦',
    },
];

export const SurfaceBlocks: React.FC = () => {
    return (
        <section id="surfaces" className={styles.section}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Five surfaces, one source of truth</h2>
                    <p className={styles.sectionLead}>
                        Most operators run a printed menu, a third-party QR app, a separate signage tool, and a spreadsheet for inventory. Empower Menu replaces all of it — driven by the same POS data your kitchen and your dashboards already trust.
                    </p>
                </div>

                <div className={styles.surfaceList}>
                    {surfaces.map((s) => (
                        <article
                            key={s.id}
                            id={s.id}
                            className={`${styles.surface} ${s.flip ? styles.flip : ''}`}
                        >
                            <div className={styles.surfaceText}>
                                <div className={styles.eyebrow}>
                                    <span className={styles.icon}>{s.icon}</span>
                                    <span>{s.eyebrow}</span>
                                </div>
                                <h3 className={styles.title}>{s.title}</h3>
                                <p className={styles.desc}>{s.desc}</p>
                                <ul className={styles.bullets}>
                                    {s.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.surfaceVisual}>
                                {s.image ? (
                                    <img
                                        className={styles.previewImg}
                                        src={s.image}
                                        alt={`Empower Menu — ${s.eyebrow}`}
                                        loading="lazy"
                                    />
                                ) : (
                                    /* TODO(KB-43 asset call): real screenshot for {s.id} */
                                    <div className={styles.preview} data-surface={s.id}>
                                        <span className={styles.previewIcon}>{s.icon}</span>
                                        <span className={styles.previewLabel}>{s.eyebrow} preview</span>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
