import React from "react";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TeamSection from "../components/sections/TeamSection";
import MethodologySection from "../components/sections/MethodologySection";
import TechnologySection from "../components/sections/TechnologySection";
import CTASection from "../components/sections/CTASection";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      <MethodologySection />
      <TeamSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
