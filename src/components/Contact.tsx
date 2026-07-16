import React, { type FormEvent, useState } from 'react';
import styles from './Contact.module.css';

const PRODUCT_OPTIONS = [
    'Host',
    'Menu Displays',
    'Mobile Dashboards',
    'Reports',
    'Tip Pool',
    'Catering',
];

interface FormState {
    businessName: string;
    contactName: string;
    email: string;
    phone: string;
    addressStreet: string;
    addressCity: string;
    addressState: string;
    addressZip: string;
    addressCountry: string;
    customerType: string;
    numLocations: string;
    productsInterested: string[];
}

const EMPTY_FORM: FormState = {
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: '',
    addressCountry: '',
    customerType: '',
    numLocations: '',
    productsInterested: [],
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    // Honeypot: legit visitors never see or fill this field (visually hidden,
    // pulled out of tab order). A filled value marks the submission as spam
    // server-side. Paired with a render-timestamp field so /api/contact can
    // also reject implausibly fast submits.
    const [hpValue, setHpValue] = useState('');
    const [renderedAt] = useState(() => Date.now());
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const [error, setError] = useState<string | null>(null);

    const update = (field: keyof FormState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const toggleProduct = (product: string) => {
        setForm((f) => ({
            ...f,
            productsInterested: f.productsInterested.includes(product)
                ? f.productsInterested.filter((p) => p !== product)
                : [...f.productsInterested, product],
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (form.productsInterested.length === 0) {
            setError('Select at least one product you’re interested in.');
            return;
        }
        setError(null);
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    numLocations: Number(form.numLocations),
                    hpField: hpValue,
                    renderedAt,
                }),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || 'Something went wrong. Please try again.');
            }

            setStatus('success');
            setForm(EMPTY_FORM);
        } catch (err) {
            setStatus('error');
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <section id="contact" className={styles.section}>
                <div className={styles.glow} />
                <div className={`container ${styles.container}`}>
                    <div className={styles.formCard}>
                        <h2 className={styles.headline} style={{ fontSize: '2rem', color: 'inherit' }}>
                            Thanks for reaching out!
                        </h2>
                        <p>We&rsquo;ve got your info and someone from our team will be in touch shortly.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.glow} />

            <div className={`container ${styles.container}`}>
                <div className={styles.textCol}>
                    <h2 className={styles.headline}>Ready to Make More?</h2>
                    <p className={styles.subheadline}>
                        Tell us a little about your operation and we'll set up a discovery call to see what fits.
                    </p>

                    <div className={styles.benefits}>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Free personalized demo</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Custom hardware quote</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>Migration assistance</span>
                        </div>
                        <div className={styles.benefit}>
                            <div className={styles.icon}>✓</div>
                            <span>24/7 US-based support</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit}>
                        {/* Honeypot — visually hidden, off tab order, no autofill hint */}
                        <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                            <label htmlFor="middle_name">Middle name</label>
                            <input
                                id="middle_name"
                                name="middle_name"
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                value={hpValue}
                                onChange={(e) => setHpValue(e.target.value)}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Business / Restaurant Name</label>
                            <input type="text" className={styles.input} placeholder="Corner Bistro"
                                value={form.businessName} onChange={update('businessName')} required />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Your Name</label>
                                <input type="text" className={styles.input} placeholder="Jane Doe"
                                    value={form.contactName} onChange={update('contactName')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Customer Type</label>
                                <select className={styles.select} value={form.customerType}
                                    onChange={update('customerType')} required>
                                    <option value="" disabled>Select one</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Retail">Retail</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" className={styles.input} placeholder="jane@restaurant.com"
                                    value={form.email} onChange={update('email')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Phone Number</label>
                                <input type="tel" className={styles.input} placeholder="(555) 123-4567"
                                    value={form.phone} onChange={update('phone')} required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Street Address</label>
                            <input type="text" className={styles.input} placeholder="123 Main St"
                                value={form.addressStreet} onChange={update('addressStreet')} required />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>City</label>
                                <input type="text" className={styles.input} placeholder="Athens"
                                    value={form.addressCity} onChange={update('addressCity')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>State</label>
                                <input type="text" className={styles.input} placeholder="GA"
                                    value={form.addressState} onChange={update('addressState')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Zip</label>
                                <input type="text" className={styles.input} placeholder="30601"
                                    value={form.addressZip} onChange={update('addressZip')} required />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Country</label>
                                <input type="text" className={styles.input} placeholder="United States"
                                    value={form.addressCountry} onChange={update('addressCountry')} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>How Many Locations?</label>
                                <input type="number" min={1} step={1} className={styles.input} placeholder="1"
                                    value={form.numLocations} onChange={update('numLocations')} required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Empower Products Interested In</label>
                            <div className={styles.checkboxGrid}>
                                {PRODUCT_OPTIONS.map((product) => (
                                    <label key={product} className={styles.checkboxOption}>
                                        <input
                                            type="checkbox"
                                            checked={form.productsInterested.includes(product)}
                                            onChange={() => toggleProduct(product)}
                                        />
                                        {product}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {error && <p className={styles.errorText}>{error}</p>}

                        <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Get Your Free Quote'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
