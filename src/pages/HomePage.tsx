import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import BudgetSection from '../components/sections/BudgetSection';
import AnalyticsSection from '../components/sections/AnalyticsSection';
import TechStackSection from '../components/sections/TechStackSection';
import FutureImprovementsSection from '../components/sections/FutureImprovementsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BudgetSection />
        <AnalyticsSection />
        <TechStackSection />
        <FutureImprovementsSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;