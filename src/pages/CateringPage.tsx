import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { CateringHero } from '../components/catering/CateringHero';
import { CateringFeatures } from '../components/catering/CateringFeatures';

export const CateringPage: React.FC = () => {
    return (
        <div className="page page-catering">
            <Header />
            <CateringHero />
            <CateringFeatures />
            <DealerCTA
                headline="Ready to bring house accounts into your POS?"
                subheadline="Talk to a dealer about adding Empower House Accounts. We'll walk through your corporate and catering customers, your invoicing cycle, and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
