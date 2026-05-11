import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DealerCTA } from '../components/DealerCTA';
import { ToolsHero } from '../components/tools/ToolsHero';
import { ToolsList } from '../components/tools/ToolsList';

export const ToolsPage: React.FC = () => {
    return (
        <div className="page page-tools">
            <Header />
            <ToolsHero />
            <ToolsList />
            <DealerCTA
                headline="Need a tool that isn't here yet?"
                subheadline="Talk to a dealer about what your team is wrestling with. New Empower tools usually start as a request from one operator who got tired of the manual workaround."
            />
            <Footer />
        </div>
    );
};
