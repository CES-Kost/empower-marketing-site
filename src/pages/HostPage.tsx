import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { HostHero } from '../components/host/HostHero';
import { HostFeatures } from '../components/host/HostFeatures';
import { PosMoatCallout } from '../components/host/PosMoatCallout';
import { AiHostessDemo } from '../components/host/AiHostessDemo';
import { HostTestimonial } from '../components/host/HostTestimonial';

export const HostPage: React.FC = () => {
    return (
        <div className="page page-host">
            <Header />
            <HostHero />
            <HostFeatures />
            <PosMoatCallout />
            <AiHostessDemo />
            <HostTestimonial />
            <DealerCTA
                headline="Ready to stop losing guests at the door?"
                subheadline="Talk to a dealer about adding Empower Host. We'll walk through your room, your reservation flow, and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
