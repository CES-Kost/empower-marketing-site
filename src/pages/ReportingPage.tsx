import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { ReportingHero } from '../components/reporting/ReportingHero';
import { FeatureGrid } from '../components/reporting/FeatureGrid';
import { MobileAppCallout } from '../components/reporting/MobileAppCallout';
import { ReportingTestimonial } from '../components/reporting/ReportingTestimonial';

export const ReportingPage: React.FC = () => {
    return (
        <div className="page page-reporting">
            <Header />
            <ReportingHero />
            <FeatureGrid />
            <MobileAppCallout />
            <ReportingTestimonial />
            <DealerCTA
                headline="Ready to stop reconciling four reporting tools?"
                subheadline="Talk to a dealer about adding Empower Insight. We'll walk through your locations, your reporting cadence, and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
