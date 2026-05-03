import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { PayrollHero } from '../components/payroll/PayrollHero';
import { IntegrationGrid } from '../components/payroll/IntegrationGrid';
import { PayrollFeatures } from '../components/payroll/PayrollFeatures';
import { IncludedReporting } from '../components/payroll/IncludedReporting';
import { PayrollTestimonial } from '../components/payroll/PayrollTestimonial';

export const PayrollPage: React.FC = () => {
    return (
        <div className="page page-payroll">
            <Header />
            <PayrollHero />
            <IntegrationGrid />
            <PayrollFeatures />
            <IncludedReporting />
            <PayrollTestimonial />
            <DealerCTA
                headline="Ready to make payroll a 10-minute job?"
                subheadline="Talk to a dealer about adding Empower Payroll. We'll walk through your provider, your tip-pool rules, and your scheduling stack — and the rollout timeline."
            />
            <Footer />
        </div>
    );
};
