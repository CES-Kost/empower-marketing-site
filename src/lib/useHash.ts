import { useEffect, useState } from 'react';

export const useHash = (): string => {
    const [hash, setHash] = useState<string>(() => window.location.hash);

    useEffect(() => {
        const onChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    return hash;
};

export const getRoute = (hash: string): string => {
    if (hash.startsWith('#/')) return hash.slice(1);
    return '/';
};
