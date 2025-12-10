import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Solutions } from '../components/Solutions';
import { Features } from '../components/Features';
import { Industries } from '../components/Industries';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Solutions />
            <Features />
            <Industries />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};
