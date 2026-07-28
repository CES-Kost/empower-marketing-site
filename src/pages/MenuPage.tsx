import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { MenuHero } from '../components/menu/MenuHero';
import { SurfaceBlocks } from '../components/menu/SurfaceBlocks';
import { PosIntegrationCallout } from '../components/menu/PosIntegrationCallout';

export const MenuPage: React.FC = () => {
    return (
        <div className="page page-menu">
            <Header />
            <MenuHero />
            <SurfaceBlocks />
            <PosIntegrationCallout />
            {/* KB-232: testimonial hidden until Johnnie's real quote lands — no bracket placeholder or named pick-owner in public markup */}
            <DealerCTA
                headline="Ready to ship one menu to every surface?"
                subheadline="Talk to a dealer about adding Empower Menu. We'll walk through your surfaces — QR, tablet, signage, inventory — and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
