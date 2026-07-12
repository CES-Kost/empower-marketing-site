// KB-174 — Contact Us form handler. Runs server-side only (Vercel serverless
// function) so CONTACT_FORM_API_KEY never reaches the browser. The public form
// POSTs here; this forwards a mapped payload to CES CRM's POST /api/leads/.
import type { VercelRequest, VercelResponse } from '@vercel/node';

const CRM_LEADS_URL = process.env.CRM_LEADS_URL || 'https://crm.cuttingedgesys.com/api/leads/';
const CONTACT_FORM_API_KEY = process.env.CONTACT_FORM_API_KEY;
const LEAD_SOURCE = 'Empower Website — Contact Us';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Real visitors take at least a few seconds to read and fill an 11-field
// form; a near-instant submit is almost always scripted.
const MIN_SUBMIT_MS = 1500;
const MAX_FIELD_LEN = 255;

interface ContactPayload {
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
    numLocations: number;
    productsInterested: string[];
    // Honeypot value + client render timestamp — bot signals, not real fields.
    hpField?: string;
    renderedAt?: number;
}

const REQUIRED_STRING_FIELDS = [
    'businessName', 'contactName', 'email', 'phone',
    'addressStreet', 'addressCity', 'addressState', 'addressZip', 'addressCountry',
    'customerType',
] as const;

// Best-effort per-instance rate limit. Vercel serverless functions are
// ephemeral and horizontally scaled, so this does NOT guarantee a hard cap
// across all traffic — it only throttles a single hot instance. The
// honeypot + timing guard below are the real spam defense; this is a
// second, cheap layer, not the whole story.
const recentByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const hits = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    hits.push(now);
    recentByIp.set(ip, hits);
    return hits.length > RATE_LIMIT_MAX;
}

function validate(body: Partial<ContactPayload>): string | null {
    for (const field of REQUIRED_STRING_FIELDS) {
        const value = body[field];
        if (typeof value !== 'string' || !value.trim()) {
            return `Missing required field: ${field}`;
        }
        if (value.length > MAX_FIELD_LEN) {
            return `${field} is too long`;
        }
    }
    if (!EMAIL_RE.test(body.email!)) return 'Invalid email address';
    if (!['Restaurant', 'Retail'].includes(body.customerType!)) return 'Invalid customer type';
    if (typeof body.numLocations !== 'number' || !Number.isFinite(body.numLocations) || body.numLocations < 1) {
        return 'How many locations must be at least 1';
    }
    if (!Array.isArray(body.productsInterested) || body.productsInterested.length === 0) {
        return 'Select at least one product';
    }
    return null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!CONTACT_FORM_API_KEY) {
        console.error('api/contact: CONTACT_FORM_API_KEY is not configured');
        return res.status(500).json({ error: 'Server misconfigured. Please try again later.' });
    }

    const forwardedFor = req.headers['x-forwarded-for'];
    const ip = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',')[0].trim()
        || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: 'Too many submissions. Please try again in a minute.' });
    }

    const body = (req.body || {}) as Partial<ContactPayload>;

    // Honeypot tripped: a bot filled every input, including the one real
    // users never see. Respond success so the bot doesn't learn to adapt —
    // silently drop instead of creating a lead.
    if (body.hpField && body.hpField.trim()) {
        console.warn('api/contact: honeypot triggered, dropping submission', { ip });
        return res.status(200).json({ ok: true });
    }
    if (typeof body.renderedAt === 'number' && Date.now() - body.renderedAt < MIN_SUBMIT_MS) {
        console.warn('api/contact: submit too fast, dropping submission', { ip });
        return res.status(200).json({ ok: true });
    }

    const validationError = validate(body);
    if (validationError) {
        return res.status(422).json({ error: validationError });
    }

    // country + products-interested have no dedicated Lead columns — folded
    // into notes as structured label:value lines, same convention the CRM's
    // own Global-intake adapter uses (see lead_intake_global.build_notes()).
    const notes = [
        `Country: ${body.addressCountry!.trim()}`,
        `Products interested in: ${body.productsInterested!.join(', ')}`,
    ].join('\n');

    const leadPayload = {
        company_name: body.businessName!.trim(),
        contact_name: body.contactName!.trim(),
        email: body.email!.trim(),
        phone: body.phone!.trim(),
        address_street: body.addressStreet!.trim(),
        address_city: body.addressCity!.trim(),
        address_state: body.addressState!.trim(),
        address_zip: body.addressZip!.trim(),
        industry: body.customerType,
        num_locations: body.numLocations,
        lead_source: LEAD_SOURCE,
        notes,
    };

    try {
        const crmRes = await fetch(CRM_LEADS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': CONTACT_FORM_API_KEY,
            },
            body: JSON.stringify(leadPayload),
        });

        if (!crmRes.ok) {
            const detail = await crmRes.text().catch(() => '');
            console.error('api/contact: CRM lead creation failed', crmRes.status, detail);
            return res.status(502).json({ error: 'Could not submit your request right now. Please try again shortly.' });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('api/contact: CRM request errored', err);
        return res.status(502).json({ error: 'Could not submit your request right now. Please try again shortly.' });
    }
}
