import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { MenuHero } from '../components/menu/MenuHero';
import { SurfaceBlocks } from '../components/menu/SurfaceBlocks';
import { PosIntegrationCallout } from '../components/menu/PosIntegrationCallout';
import { MenuTestimonial } from '../components/menu/MenuTestimonial';

export const MenuPage: React.FC = () => {
    return (
        <div className="page page-menu">
            <Header />
            <MenuHero />
            <SurfaceBlocks />
            <PosIntegrationCallout />
            <MenuTestimonial />
            <DealerCTA
                headline="Ready to ship one menu to every surface?"
                subheadline="Talk to a dealer about adding Empower Menu. We'll walk through your surfaces — QR, tablet, signage, inventory — and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
